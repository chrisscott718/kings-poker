export const sendMail = (data) => {
  return fetch('/api/sendMail', {
    method: 'POST',
    body: JSON.stringify(data),
    credentials: 'same-origin',
    headers: new Headers({'Content-Type': 'application/json'}),
  })
};
