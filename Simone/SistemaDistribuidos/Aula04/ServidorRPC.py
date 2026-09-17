from xmlrpc.server import SimpleXMLRPCServer

def soma(a, b):
    return a + b

def subtracao(a, b):
    return a - b

def multiplicacao(a, b):
    return a * b

servidor = SimpleXMLRPCServer(
    ("localhost", 8000),
    allow_none=True
)

servidor.register_function(soma, "soma")
servidor.register_function(subtracao, "subtracao")
servidor.register_function(multiplicacao, "multiplicacao")
