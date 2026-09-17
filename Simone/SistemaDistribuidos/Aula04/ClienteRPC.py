import xmlrpc.client

servidor = xmlrpc.client.ServerProxy(
    "http://localhost:8000/"
)

print("10 + 5 =", servidor.soma(10, 5))
print("10 - 5 =", servidor.subtracao(10, 5))
print("10 x 5 =", servidor.multiplicacao(10, 5))
print("10 / 2 =", servidor.divisao(10, 2))
print("10 / 0 =", servidor.divisao(10, 0))

a = float(input("Digite o primeiro valor: "))
b = float(input("Digite o segundo valor: "))

print("1 - Somar")
print("2 - Subtrair")
print("3 - Multiplicar")
print("4 - Dividir")

opcao = input("Escolha: ")

if opcao == "1":
    print("Resultado:", servidor.soma(a, b))
elif opcao == "2":
    print("Resultado:", servidor.subtracao(a, b))
elif opcao == "3":
    print("Resultado:", servidor.multiplicacao(a, b))
elif opcao == "4":
    print("Resultado:", servidor.divisao(a, b))
