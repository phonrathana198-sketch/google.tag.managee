const https = require('https');
const fs = require('fs');

https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/Api.chsishop.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/dns.chsishop.com/fullchain.pem'),
}, (req, res) => {
  res.end("dns.chsishop.com HTTPS OK");
}).listen(443);