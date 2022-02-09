const login = (cb, data) => {
  fetch(`https://apptesting.docsumo.com/api/v1/eevee/login/`, {
    method: "POST",
    body:JSON.stringify(
      {
        email: data.email,
        password: data.password
      }
    )
  })
  .then(res => res.json())
  .then(json => {
    cb(null, json);
  })
  .catch(err => {
    cb(err);
  })
}

export {
  login
};