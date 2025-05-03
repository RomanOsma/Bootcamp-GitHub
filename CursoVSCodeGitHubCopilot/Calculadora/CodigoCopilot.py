def greet_user(name, age):
    print(f"Hello, {name}! You are {age} years old.")

def check_age(age):
    if age >= 18:
        print("You are an adult.")
    else:
        print("You are a minor.")

if __name__ == "__main__":
    name = input("Please enter your name: ")
    while True:
        try:
            age = int(input("Please enter your age: "))
            break
        except ValueError:
            print("Invalid input. Please enter a valid age (an integer).")
    greet_user(name, age)
    check_age(age)
    
"""
EJEMPLO HECHO CON LA AYUDA DE COPILOT
ME HA COMPLETADO EL CÓDIGO
# He añadido comentarios para explicar el código
# He añadido un bloque if __name__ == "__main__": para ejecutar el código solo si es el script principal
y me ha dado sugerencias de mejora
# He añadido un bucle para asegurarme de que la edad es un número entero
# He añadido un bloque try-except para manejar errores de entrada
"""