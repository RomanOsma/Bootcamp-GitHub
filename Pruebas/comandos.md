# Guía Rápida de Comandos Esenciales de Git

Este archivo sirve como una referencia rápida para los comandos de Git más comunes que usarás en tu día a día, especialmente si estás empezando.

## 1. Configuración Inicial y Creación de Repositorios

Estos comandos se usan para empezar a trabajar con Git en un proyecto.

### `git init`

*   **Descripción:** Inicializa un nuevo repositorio de Git vacío en el directorio actual. Crea una subcarpeta oculta `.git` que contiene toda la información necesaria para el control de versiones.
*   **Cuándo usarlo:** Al empezar un proyecto nuevo que quieres gestionar con Git.
*   **Ejemplo:**
    ```bash
    # Navega a la carpeta de tu proyecto
    cd mi-proyecto

    # Inicializa Git en esa carpeta
    git init
    ```
    *Salida esperada:* `Initialized empty Git repository in /ruta/a/tu/mi-proyecto/.git/`

### `git clone <url_repositorio>`

*   **Descripción:** Crea una copia local de un repositorio existente que se encuentra en una URL remota (como GitHub, GitLab, etc.). Descarga todo el historial del proyecto y configura una conexión remota llamada `origin` por defecto.
*   **Cuándo usarlo:** Cuando quieres empezar a trabajar en un proyecto que ya existe en un servidor remoto.
*   **Ejemplo:**
    ```bash
    # Clona un repositorio desde GitHub
    git clone https://github.com/usuario/nombre-repositorio.git

    # Entra en la carpeta recién creada
    cd nombre-repositorio
    ```

## 2. Flujo de Trabajo Básico: Guardar Cambios

Estos son los comandos que usarás constantemente para guardar el estado de tu proyecto.

### `git status`

*   **Descripción:** Muestra el estado actual del directorio de trabajo y del área de preparación (staging area). Te informa sobre qué archivos han sido modificados, cuáles están preparados para el commit (agregados al staging area) y cuáles no están siendo rastreados por Git.
*   **Cuándo usarlo:** ¡Muy a menudo! Antes de añadir o confirmar cambios, para ver qué ha cambiado, o si te sientes perdido.
*   **Ejemplo:**
    ```bash
    git status
    ```
    *Salida posible:* Te dirá si hay cambios no preparados, cambios para confirmar, archivos sin seguimiento, o si tu rama está limpia y actualizada.

### `git add <archivo>` o `git add .`

*   **Descripción:** Añade los cambios de los archivos especificados (o todos los cambios con `.`) desde el directorio de trabajo al área de preparación (staging area). El staging area es donde preparas los cambios que quieres incluir en tu próximo "snapshot" (commit).
*   **Cuándo usarlo:** Después de modificar archivos y antes de hacer `git commit`, para seleccionar qué cambios quieres guardar en el próximo commit.
*   **Ejemplos:**
    ```bash
    # Añadir un archivo específico al staging area
    git add index.html

    # Añadir todos los archivos modificados y nuevos (en el directorio actual y subdirectorios) al staging area
    git add .
    ```
    *Nota:* `git add -A` o `git add --all` son similares a `git add .` pero pueden incluir también archivos eliminados en todo el repositorio, no solo en el directorio actual. Para empezar, `git add .` suele ser suficiente.

### `git commit -m "Mensaje descriptivo"`

*   **Descripción:** Guarda permanentemente los cambios que están en el área de preparación (staging area) en el historial del repositorio local. Cada commit es una "foto" del estado de tu proyecto en un momento dado. El `-m` permite escribir un mensaje corto que describa los cambios realizados en ese commit.
*   **Cuándo usarlo:** Después de añadir los cambios deseados al staging area con `git add`.
*   **Buenas prácticas para el mensaje:** Escribe mensajes claros y concisos que expliquen *qué* cambiaste y *por qué*. (Ej: "Feat: Añadir formulario de contacto", "Fix: Corregir error de cálculo en total", "Docs: Actualizar README con instrucciones de instalación").
*   **Ejemplo:**
    ```bash
    # Confirmar los cambios preparados con un mensaje
    git commit -m "Add initial project structure with HTML and CSS files"
    ```

## 3. Inspeccionar el Historial y los Cambios

Estos comandos te ayudan a ver qué ha pasado en tu repositorio.

### `git log`

*   **Descripción:** Muestra el historial de commits del repositorio, empezando por el más reciente. Muestra el identificador (hash) de cada commit, el autor, la fecha y el mensaje del commit.
*   **Cuándo usarlo:** Para ver el historial de cambios, quién hizo qué y cuándo.
*   **Ejemplo:**
    ```bash
    git log
    ```
    *Consejo:* Usa `git log --oneline --graph --decorate` para una vista más compacta y visual del historial y las ramas. Pulsa `q` para salir de la vista del log.

### `git diff`

*   **Descripción:** Muestra las diferencias entre distintas versiones de tus archivos.
    *   `git diff`: Muestra los cambios en el directorio de trabajo que **aún no** has añadido al área de preparación (staging area).
    *   `git diff --staged` (o `git diff --cached`): Muestra los cambios que **sí** has añadido al staging area (lo que se incluiría en el próximo commit) pero que aún no has confirmado con `git commit`.
    *   `git diff <commit1> <commit2>`: Muestra las diferencias entre dos commits específicos.
*   **Cuándo usarlo:** Antes de `git add` para ver qué modificaste. Antes de `git commit` (usando `--staged`) para revisar lo que estás a punto de confirmar. Para comparar estados pasados del proyecto.
*   **Ejemplos:**
    ```bash
    # Ver cambios no preparados (no añadidos con git add)
    git diff

    # Ver cambios preparados (añadidos con git add, listos para commit)
    git diff --staged
    ```

## 4. Trabajar con Repositorios Remotos (Básico)

Estos comandos son esenciales para colaborar o para tener una copia de seguridad de tu repositorio en un servidor externo (como GitHub).

### `git pull <remoto> <rama>`

*   **Descripción:** Descarga los cambios desde un repositorio remoto y los fusiona (merge) con tu rama local actual. Es una combinación de `git fetch` (descargar) y `git merge` (fusionar).
*   **Cuándo usarlo:** Antes de empezar a trabajar o antes de subir tus cambios (`git push`), para asegurarte de que tienes la versión más reciente del código del repositorio remoto y evitar conflictos.
*   **Ejemplo (el más común):**
    ```bash
    # Descarga y fusiona los cambios de la rama 'main' del remoto 'origin'
    git pull origin main
    ```

### `git push <remoto> <rama>`

*   **Descripción:** Sube tus commits locales a un repositorio remoto. Comparte tus cambios con otros colaboradores o simplemente guarda tu trabajo en el servidor.
*   **Cuándo usarlo:** Después de hacer uno o varios commits locales que quieres compartir o respaldar en el remoto.
*   **Ejemplo (el más común):**
    ```bash
    # Sube los commits de tu rama local 'main' a la rama 'main' del remoto 'origin'
    git push origin main
    ```

---

## (Próximamente)

Irás añadiendo más comandos aquí a medida que avances en el bootcamp, como:

*   `git branch`: Para gestionar ramas (crear, listar, borrar).
*   `git checkout` / `git switch`: Para cambiar entre ramas o restaurar archivos.
*   `git merge`: Para fusionar ramas.
*   `git remote`: Para gestionar las conexiones a repositorios remotos.
*   `git reset`: Para deshacer cambios en el staging area o commits.
*   `git revert`: Para deshacer un commit creando uno nuevo.
*   ... ¡y muchos más!

---
