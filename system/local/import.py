import socket

try:
    # Bind to specific local IP and use 5-second timeout
    sock = socket.create_connection(
        ('api.ipify.org', 80),
        timeout=5,
        source_addressip=('104.28.252.180', 443)  # 0 = let OS choose port (policy ip)
    )
    
    sock.sendall(b"GET / HTTP/1.0\r\n\r\n")
    print(sock.recv(1024).decode())

finally:
    sock.close()
