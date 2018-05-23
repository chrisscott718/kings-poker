const buildRequestTemplate = (data) => {
  return (
    `<div>
      <h1>Custom Table Request from ${data.name}</h1>
    </div>
    <div>
      <h2>Table Options:</h2>
      <ul>
        <li>TABLE SHAPE: ${data.tableShape ? data.tableShape : 'unspecified'}</li>
        <li>PEDESTAL: ${data.pedestalStyle ? data.pedestalStyle : 'unspecified'}</li>
        <li>CHIPRACK: ${data.chipRack ? data.chipRack : 'unspecified'}</li>
        <li>CUPHOLDERS: ${data.cupHolders ? data.cupHolders : 'unspecified'}</li>
        <li>WOODTYPE: ${data.woodType ? data.woodType : 'unspecified'}</li>
        <li>FABRIC COLOR: ${data.fabricColor ? data.fabricColor : 'unspecified'}</li>
        <li>METAL ACCENTS: ${data.metalAccent ? data.metalAccent : 'unspecified'}</li>
        <li>ARM REST: ${data.armRest ? data.armRest : 'unspecified'}</li>
        <li>DINING TOP: ${data.includeDiningTop ? 'Yes' : 'No'}</li>
      </ul>
    </div>
    <div>
      <h2>Client Info</h2>
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Phone Number: ${data.phone ? data.phone : 'None provided'}</p>
      <p>Additional Info: ${data.message ? data.message : ''}</p>
    </div>`
  ).replace(/\r?\n|\r/g, ' ');
};

const contactRequest = (data) => {
  return (
    `<div>
      <h1>New message from ${data.name}</h1>
    </div>
    <div>
      <h2>Client Info</h2>
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Phone Number: ${data.phone ? data.phone : 'None provided'}</p>
      <p>Additional Info: ${data.message ? data.message : ''}</p>
    </div>`
  ).replace(/\r?\n|\r/g, ' ');
};

module.exports = {
  buildRequestTemplate,
  contactRequest
};
