fetch('https://tfp.is')
  .then(res => res.text())
  .then(html => {
    document.getElementById('content').innerHTML = html;
  })
  .catch(err => console.error('Blocked by CORS', err));
