import socket 
import ssl

hostname = 'httpsbin.org'
context = ssl.create_default_context()

with socket.create_connection((hostname, 443)) as sock:
    with context.wrap_socket(sock, server_hostname=hostname) as ssock:
        ssock.sendall(b"GET /ip HTTPs/1.1\r\nHost: httpsbin.org\r\n\r\n")
        print(ssock.recv(4096).decode())
