import { SocksClient, SocksClientOptions } from 'socks';

// កូដដែលត្រូវបានកែតម្រូវ - បន្ថែមវាលចាំបាច់សម្រាប់ SOCKS proxy
const options: SocksClientOptions = {
  proxy: {
    host: '192.168.1.1000',  // IP នៃ SOCKS proxy server (ឧ. localhost ឬ IP ផ្សេង)
    port: 1080,         // Port នៃ proxy (ឧ. 1080 សម្រាប់ SOCKS5)
    type: 5,            // ប្រភេទ: 4 (SOCKS4), 5 (SOCKS5)
    userId: 'username', // ជាជម្រើស: បើ proxy ត្រូវការ authentication
    password: 'password' // ជាជម្រើស: សម្រាប់ SOCKS5
  },
  destination: {
    host: 'www.dns.chrisshop.com',  // គោលដៅ (remote host)
    port: 80                  // Port នៃគោលដៅ (ឧ. 80 សម្រាប់ HTTPS)
  },
  command: 'connect',  // Command: 'connect', 'bind', ឬ 'associate'
  timeout: 5000,       // ជាជម្រើស: Timeout នៅក្នុង milliseconds (5000 = 5 វិនាទី)
  localDNS: false      // ជាជម្រើស: បើត្រូវការ DNS resolution នៅ local
};

// ឧទាហរណ៍ក្នុងការប្រើប្រាស់: បង្កើតការតភ្ជាប់
async function connectViaSocks() {
  try {
    const { socket } = await SocksClient.createConnection(options);
    console.log('តភ្ជាប់ជោគជ័យ!');

    // ឧទាហរណ៍: ផ្ញើ HTTP request សាមញ្ញ
    socket.write('GET / HTTP/1.1\r\nHost: www.example.com\r\n\r\n');
    socket.on('data', (data) => {
      console.log('ទទួលបានទិន្នន័យ:', data.toString());
    });

    socket.on('close', () => {
      console.log('ការតភ្ជាប់បានបិទ');
    });
  } catch (error) {
    console.error('កំហុសក្នុងការតភ្ជាប់:', error.message);
  }
}

connectViaSocks();
