import socket

try:
    # Bind to specific local IP and use 5-second timeout
    sock = socket.create_connection(
        ('api.ipify.org', 80),
        timeout=5,
        source_address=('192.168.1.100', 443)  # 0 = let OS choose port
    )
    
    sock.sendall(b"GET / HTTP/1.0\r\n\r\n")
    print(sock.recv(1024).decode())

finally:
    sock.close()
