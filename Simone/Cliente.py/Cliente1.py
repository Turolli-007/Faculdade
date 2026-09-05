import socket
ra
cliente = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
cliente.connect(("localhost", 5000))
cliente.send("Olá servidor! Sou o cliente.".encode())
resposta = cliente.recv(1024).decode()
print("Resposta do servidor:", resposta)
cliente.close()
