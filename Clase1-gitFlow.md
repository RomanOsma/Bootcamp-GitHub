# 🚀 GitFlow: ¿Qué es y cómo funciona?

## 🧠 ¿Qué es GitFlow?

GitFlow es un modelo de ramificación para proyectos en Git, propuesto por **Vincent Driessen**, que organiza el desarrollo en varias ramas con roles específicos. Está pensado para facilitar la colaboración y el control de versiones en equipos de desarrollo.

---

## ⚙️ ¿Cómo funciona GitFlow?

GitFlow define las siguientes ramas:

- **`main`**  
  Contiene siempre el código en producción, estable y listo para ser lanzado.

- **`develop`**  
  Rama donde se integran todas las nuevas funcionalidades antes de llegar a producción.

- **`feature/<nombre>`**  
  Se crean desde `develop` para trabajar en nuevas características. Se fusionan de vuelta en `develop`.

- **`release/<versión>`**  
  Se crean desde `develop` cuando se quiere preparar un nuevo lanzamiento. Se fusionan en `main` y `develop`.

- **`hotfix/<nombre>`**  
  Se crean desde `main` para corregir errores críticos en producción. Se fusionan en `main` y `develop`.

---

## 🧪 Ejemplo práctico

### Crear una nueva funcionalidad (feature):
```bash
git checkout develop
git checkout -b feature/login-feature
# trabajar en el código...
git add .
git commit -m "Implementa la funcionalidad de inicio de sesión"
git checkout develop
git merge feature/login-feature
git branch -d feature/login-feature
```

### Crear una nueva funcionalidad (feature):
```bash
git checkout develop
git checkout -b release/v1.0
# pruebas y ajustes...
git checkout main
git merge release/v1.0
git checkout develop
git merge release/v1.0
git branch -d release/v1.0
```

Corregir errores en producción (hotfix):
```bash
git checkout main
git checkout -b hotfix/fix-login-bug
# corregir el bug...
git add .
git commit -m "Corrige error en login"
git checkout main
git merge hotfix/fix-login-bug
git checkout develop
git merge hotfix/fix-login-bug
git branch -d hotfix/fix-login-bug
```

✅ Ventajas de GitFlow
Mejora la organización del trabajo en equipo.

Facilita la entrega continua con ramas bien definidas.

Disminuye errores en fusiones complejas.

Ideal para proyectos con múltiples versiones o entornos.

Permite corregir errores en producción sin afectar el desarrollo activo.

## 🧐 ¿Existe una rama `staging` en GitFlow?

En el modelo **GitFlow clásico**, las ramas principales son:

- **`main`**: contiene el código listo para producción.
- **`develop`**: integra las nuevas funcionalidades antes de pasar a producción.
- **`feature/*`**: ramas para desarrollar nuevas funcionalidades.
- **`release/*`**: ramas para preparar versiones estables.
- **`hotfix/*`**: ramas para corregir errores críticos directamente en producción.

---

### 🔸 ¿Y qué pasa con la rama `staging`?

Aunque **`staging` no forma parte del GitFlow original**, muchos equipos la incluyen como una rama **intermedia entre `develop` y `main`** para gestionar entornos de **pre-producción**. Sus usos comunes son:

- Probar la versión final antes de lanzarla.
- Simular el entorno de producción.
- Tener un entorno de QA (Quality Assurance) separado.

---

### ✅ Tabla resumen

| Rama       | ¿En GitFlow oficial? | Propósito                                                                 |
|------------|----------------------|--------------------------------------------------------------------------|
| `main`     | ✅                   | Producción                                                               |
| `develop`  | ✅                   | Desarrollo e integración                                                 |
| `feature`  | ✅                   | Nuevas funcionalidades                                                   |
| `release`  | ✅                   | Preparar lanzamientos                                                    |
| `hotfix`   | ✅                   | Corregir bugs críticos en producción                                     |
| `staging`  | ❌ (personalizado)   | Entorno previo a producción para pruebas finales y validación de calidad |
