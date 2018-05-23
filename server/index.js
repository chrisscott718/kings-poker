const express = require('express');
const path = require('path');
const cluster = require('cluster');
const bodyParser = require('body-parser');
const numCPUs = require('os').cpus().length;

// Mail service
const sgMail = require('@sendgrid/mail');
const templates = require('./mail/templates.js');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();
  const jsonParser = bodyParser.json();

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
  });

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the server!"}');
  });

  app.post('/api/sendMail', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)

    const data = req.body;

    const msg = {
      to: 'chris.scott718@gmail.com',
      from: data.email,
      subject: data.type === "contactRequest" ? 'Information Request | Kings Poker Tables' : 'Custom Table Quote Request | Kings Poker Tables',
      html: data.type === "contactRequest" ? templates.contactRequest(data) : templates.buildRequestTemplate(data)
    };

    sgMail
      .send(msg)
      .then(() => {
        res.sendStatus(200);
        console.log("email sent")
      })
      .catch(error => {
        res.sendStatus(400);
        console.error(error.toString());
      });
  })

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
}
