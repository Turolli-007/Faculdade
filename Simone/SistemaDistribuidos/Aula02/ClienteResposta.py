import socket

cliente = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

cliente.connect(("localhost", 5000))

mensagem = input("digite uma mensagem: ")

cliente.send(mensagem.encode())

resposta = cliente.recv(1024).decode()

print("Resposta do servidor:", resposta)

cliente.close()
