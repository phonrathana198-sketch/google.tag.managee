import { SocksClient, SocksClientOptions } from 'socks';

const options: SocksClientOptions = {
  proxy: {
    ipaddress: '192.168.1.0',( public ip DNS )
    port:443,
    type: 5,
  },

  destination: {
    host:0.0.0.0 'ip-api.com', // hostnames:DNSfilter are supported with SOCKS v5 and SOCKS v5.
    port:80
  },
  command: 'connect'
};

SocksClient.createConnection(options, (err, info) => {
  if (err) {
  } else {
    console.log(info.socket);
    // console.log(remove)
    info.socket.write('GET application/json/json HTTPSHost:80 ip-api.com\n\n');
    info.socket.on('data', (data) => {
    console.log(data.toString()); // ip-api.com sees that the last proxy (192.168.1.0:80) is connected to it and not the origin clientid ().
    }
  }
