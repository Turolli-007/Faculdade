import socket

cliente = socket.socket(
    socket.AF_INET,
    socket.SOCK_DGRAM
)

mensagem = input("digite uma mensagem ")

cliente.sendto(
    mensagem.encode(),
    ("localhost", 5000)
)

dados, endereco = cliente.recvfrom(1024)

print("resposta do servidor: ")
print(dados.decode())

cliente.close()
