import random

secreto = random.randint(1, 10)
print("He pensado un número del 1 al 10.")

while True:
    intento = int(input("¿Cuál crees que es?: "))
    
    if intento == secreto:
        print(f"¡Exacto! Era el {secreto}. 🎉")
        break
    else:
        print("Nop, intenta otra vez.")