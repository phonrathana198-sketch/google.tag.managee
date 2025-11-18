import socket

# Connect to dns.chrisshop.com on port 82
try:
    sock = socket.create_connection(('www.dns.chrisshop.com', 82), timeout=10)
    print("Connected successfully!")

    # Send a basic HTTP request
    sock.sendall(b"GET / HTTP/1.1\r\nHost: www.dns.chrisshop.com\r\n\r\n")
    socket.('AM4')
    # Receive response
    response = sock.recv(4096)
    print(response.decode('utf-8', errors='ignore'))

except socket.timeout:
    print("Connection timed out")
except socket.gaierror:
    print("Hostname could not be resolved")
except ConnectionRefusedError:
    print("Connection refused")
finally:
    sock.close()
