# Guía Rápida de Comandos Esenciales de Git

Este archivo sirve como una referencia rápida para los comandos de Git más comunes que usarás en tu día a día, especialmente si estás empezando o necesitas un repaso.

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

### `.gitignore`

*   **Descripción:** Es un archivo de texto especial donde especificas qué archivos o carpetas Git debe ignorar intencionalmente. Estos archivos no serán rastreados ni aparecerán en `git status` como "untracked files".
*   **Cuándo usarlo:** Desde el inicio del proyecto, para evitar que archivos generados automáticamente, dependencias (como `node_modules`), archivos de configuración local, logs, etc., se añadan accidentalmente al repositorio.
*   **Sintaxis:** Cada línea es un patrón. `#` para comentarios. `*` como comodín. `/` al final para directorios.
*   **Ejemplo (`.gitignore`):**
    ```gitignore
    # Ignorar carpeta de dependencias de Node.js
    node_modules/

    # Ignorar archivos de log
    *.log

    # Ignorar archivos de configuración del IDE
    .vscode/
    .idea/

    # Ignorar archivos compilados
    *.pyc
    dist/
    build/
    ```
    *Nota:* Crea este archivo en la raíz de tu repositorio.

## 2. Flujo de Trabajo Básico: Guardar Cambios

Estos son los comandos que usarás constantemente para guardar el estado de tu proyecto.

### `git status`

*   **Descripción:** Muestra el estado actual del directorio de trabajo y del área de preparación (staging area). Te informa sobre qué archivos han sido modificados, cuáles están preparados para el commit (agregados al staging area) y cuáles no están siendo rastreados por Git.
*   **Cuándo usarlo:** ¡Muy a menudo! Antes de añadir o confirmar cambios, para ver qué ha cambiado, o si te sientes perdido.
*   **Ejemplo:**
    ```bash
    git status
    ```

### `git add <archivo>` | `git add .` | `git add -A`

*   **Descripción:** Añade los cambios de los archivos desde el directorio de trabajo al área de preparación (staging area).
    *   `git add <archivo>`: Añade un archivo específico.
    *   `git add .`: Añade todos los archivos nuevos y modificados en el directorio actual y subdirectorios.
    *   `git add -A` o `git add --all`: Añade todos los archivos nuevos, modificados y **eliminados** en todo el repositorio.
*   **Cuándo usarlo:** Después de modificar archivos y antes de hacer `git commit`, para seleccionar qué cambios quieres guardar en el próximo commit.
*   **Ejemplos:**
    ```bash
    # Añadir un archivo específico
    git add index.html
    # Añadir todos los cambios en el directorio actual y subdirectorios
    git add .
    # Añadir todos los cambios (incluyendo eliminaciones) en todo el repo
    git add -A
    ```

### `git commit -m "Mensaje descriptivo"`

*   **Descripción:** Guarda permanentemente los cambios que están en el área de preparación (staging area) en el historial del repositorio local. El `-m` permite escribir un mensaje corto que describa los cambios.
*   **Cuándo usarlo:** Después de añadir los cambios deseados al staging area con `git add`.
*   **Buenas prácticas para el mensaje:** Mensajes claros y concisos (Ej: "Feat: Añadir login de usuario", "Fix: Corregir cálculo de impuestos", "Docs: Actualizar README").
*   **Ejemplo:**
    ```bash
    # Confirmar los cambios preparados con un mensaje (Corregido typo "Descripocion")
    git commit -m "Add basic HTML structure"
    ```

## 3. Inspeccionar el Historial y los Cambios

Estos comandos te ayudan a ver qué ha pasado en tu repositorio.

### `git log`

*   **Descripción:** Muestra el historial de commits del repositorio, empezando por el más reciente.
*   **Cuándo usarlo:** Para ver el historial de cambios, quién hizo qué y cuándo.
*   **Opciones útiles:**
    *   `git log --oneline`: Muestra una versión compacta del log (hash corto y mensaje).
    *   `git log --graph`: Muestra el historial con una representación gráfica de las ramas y fusiones.
    *   `git log --decorate`: Muestra las referencias (ramas, HEAD, tags) junto a los commits.
    *   `git log --oneline --graph --decorate`: ¡Combina las anteriores para una vista potente!
*   **Ejemplo:**
    ```bash
    git log
    # Salir de la vista del log pulsando 'q'
    ```
    ```bash
    # Vista compacta y gráfica
    git log --oneline --graph --decorate
    ```

### `git diff`

*   **Descripción:** Muestra las diferencias entre distintas versiones de tus archivos.
    *   `git diff`: Cambios en el directorio de trabajo **no** preparados (no en staging).
    *   `git diff --staged` (o `--cached`): Cambios **sí** preparados (en staging, listos para commit).
    *   `git diff <commit1> <commit2>`: Diferencias entre dos commits.
    *   `git diff <rama1>..<rama2>`: Diferencias entre las puntas de dos ramas.
*   **Cuándo usarlo:** Antes de `git add` (para ver qué modificaste), antes de `git commit` (con `--staged`, para revisar), para comparar estados.
*   **Ejemplos:**
    ```bash
    # Ver cambios no preparados
    git diff
    # Ver cambios preparados para el próximo commit
    git diff --staged
    ```

### `git show <commit_id>`

*   **Descripción:** Muestra información detallada sobre un objeto de Git específico, más comúnmente un commit. Incluye el autor, fecha, mensaje del commit y los cambios (diff) introducidos por ese commit.
*   **Cuándo usarlo:** Para inspeccionar en detalle qué cambios se hicieron en un commit particular.
*   **Ejemplo:**
    ```bash
    # Mostrar detalles del commit más reciente (HEAD)
    git show
    # Mostrar detalles de un commit específico usando su hash (o parte inicial)
    git show a1b2c3d4
    ```

### `git checkout <id_commit>` (Navegar Historial)

*   **Descripción:** Te permite "viajar en el tiempo" y mover tu directorio de trabajo al estado exacto que tenía en un commit específico. Entras en un estado llamado "detached HEAD".
*   **Cuándo usarlo:** Para inspeccionar o probar una versión antigua del código sin afectar tus ramas actuales.
*   **¡Precaución!:** Si haces cambios y commits en estado "detached HEAD", estos no pertenecerán a ninguna rama y pueden perderse fácilmente. Si quieres guardar esos cambios, crea una nueva rama desde ese punto (`git checkout -b nombre-nueva-rama`).
*   **Ejemplo:**
    ```bash
    # Ver el log para encontrar el ID de un commit antiguo
    git log --oneline
    # Moverse a ese commit (usando las primeras 7 letras suele bastar)
    git checkout a1b2c3d
    # Para volver a tu rama principal (ej. main o master)
    git checkout main
    ```

## 4. Trabajo con Ramas (Branches)

Las ramas permiten trabajar en diferentes características o versiones del código de forma aislada.

### `git branch`

*   **Descripción:** Gestiona las ramas.
    *   `git branch`: Lista todas las ramas locales. La rama actual se marca con `*`.
    *   `git branch <nombre_rama>`: Crea una nueva rama basada en el commit actual.
    *   `git branch -d <nombre_rama>`: Borra una rama local (si ya ha sido fusionada).
    *   `git branch -D <nombre_rama>`: Fuerza el borrado de una rama local (incluso si no ha sido fusionada - ¡cuidado!).
*   **Cuándo usarlo:** Para ver qué ramas existen, crear nuevas para funcionalidades o arreglos, y limpiar ramas antiguas.
*   **Ejemplos:**
    ```bash
    # Listar ramas locales
    git branch
    # Crear una nueva rama llamada 'feature/nueva-funcionalidad'
    git branch feature/nueva-funcionalidad
    # Borrar una rama llamada 'rama-obsoleta' (después de fusionarla)
    git branch -d rama-obsoleta
    # Forzar borrado de la rama 'home' (ejemplo de tu lista)
    git branch -D home
    ```

### `git checkout <nombre_rama>` / `git switch <nombre_rama>`

*   **Descripción:** Cambia tu directorio de trabajo a la rama especificada. `HEAD` ahora apunta a esa rama.
    *   `git checkout <nombre_rama>`: El comando clásico. También se usa para otras cosas (restaurar archivos, detached HEAD).
    *   `git switch <nombre_rama>`: Comando más nuevo y específico para cambiar de rama. Más seguro y claro para esta operación. **Recomendado**.
*   **Cuándo usarlo:** Para empezar a trabajar en una rama diferente.
*   **Ejemplo:**
    ```bash
    # Cambiar a la rama 'develop' (forma clásica)
    git checkout develop
    # Cambiar a la rama 'feature/login' (forma moderna recomendada)
    git switch feature/login
    ```

### `git checkout -b <nueva_rama>` / `git switch -c <nueva_rama>`

*   **Descripción:** Crea una nueva rama Y cambia a ella inmediatamente. Es un atajo muy común.
    *   `git checkout -b <nueva_rama>`: El comando clásico para crear y cambiar. **Esto es lo que hace el comando que tenías duda ("NO SE PARA QUE VALE")**.
    *   `git switch -c <nueva_rama>`: El equivalente moderno y recomendado (`-c` de create).
*   **Cuándo usarlo:** Cuando quieres empezar a trabajar en una nueva funcionalidad o arreglo y necesitas crear la rama y moverte a ella en un solo paso.
*   **Ejemplo:**
    ```bash
    # Crear la rama 'fix/bug-123' y cambiarse a ella (forma clásica)
    git checkout -b fix/bug-123
    # Crear la rama 'feature/user-profile' y cambiarse a ella (forma moderna)
    git switch -c feature/user-profile
    ```

### `git merge <rama_a_fusionar>`

*   **Descripción:** Incorpora los cambios de otra rama (`<rama_a_fusionar>`) en la rama en la que te encuentras actualmente (`HEAD`).
*   **Cuándo usarlo:** Cuando has terminado de trabajar en una rama (ej. `feature/login`) y quieres integrar esos cambios en otra rama principal (ej. `develop` o `main`).
*   **Ejemplo:**
    ```bash
    # 1. Asegúrate de estar en la rama receptora (ej. develop)
    git switch develop
    # 2. Trae los cambios de la rama 'feature/login' a 'develop'
    git merge feature/login
    # (Git puede abrir un editor para el mensaje de merge si no es fast-forward)
    ```
    *Nota:* Pueden ocurrir **conflictos** si ambas ramas modificaron las mismas líneas de código. Git te avisará y deberás resolverlos manualmente antes de completar la fusión.

## 5. Guardado Temporal de Cambios (Stash)

Permite guardar temporalmente cambios no confirmados (uncommitted) para poder cambiar de rama o realizar otra tarea sin perderlos.

### `git stash` o `git stash push`

*   **Descripción:** Guarda los cambios modificados y preparados (staged) en una "pila" temporal (stash) y limpia tu directorio de trabajo (lo devuelve al estado del último commit).
*   **Cuándo usarlo:** Cuando necesitas cambiar de rama rápidamente pero tienes cambios sin confirmar que no quieres perder ni confirmar todavía.
*   **Ejemplo:**
    ```bash
    # Tienes cambios en index.html pero necesitas cambiar a otra rama urgentemente
    git stash push -m "Trabajo en progreso en index" # -m es opcional pero útil
    # Ahora tu directorio está limpio y puedes cambiar de rama
    git switch otra-rama
    ```

### `git stash list`

*   **Descripción:** Muestra la lista de "paquetes" de cambios guardados en el stash.
*   **Ejemplo:**
    ```bash
    git stash list
    ```
    *Salida posible:* `stash@{0}: On main: Trabajo en progreso en index`

### `git stash apply [stash_id]`

*   **Descripción:** Aplica los cambios de un stash (por defecto, el más reciente `stash@{0}`) a tu directorio de trabajo actual, pero **mantiene** la copia en la pila del stash.
*   **Cuándo usarlo:** Para recuperar cambios guardados y seguir trabajando, manteniendo la opción de aplicarlos de nuevo en otro lugar si es necesario.
*   **Ejemplo:**
    ```bash
    # Volver a la rama original
    git switch main
    # Aplicar el último stash guardado
    git stash apply
    # Aplicar un stash específico (ej. el segundo más reciente)
    git stash apply stash@{1}
    ```

### `git stash pop [stash_id]`

*   **Descripción:** Aplica los cambios de un stash (por defecto, el más reciente `stash@{0}`) Y **lo elimina** de la pila del stash si la aplicación es exitosa (sin conflictos).
*   **Cuándo usarlo:** Es el comando más común para recuperar el trabajo guardado cuando estás seguro de que ya no necesitas esa copia en el stash.
*   **Ejemplo:**
    ```bash
    # Recuperar el último stash y eliminarlo de la lista
    git stash pop
    ```

### `git stash clear`

*   **Descripción:** Elimina **todos** los stashes guardados. ¡Úsalo con cuidado!
*   **Ejemplo:**
    ```bash
    git stash clear
    ```

## 6. Trabajar con Repositorios Remotos

Comandos para interactuar con repositorios alojados en servidores (GitHub, GitLab, etc.).

### `git pull <remoto> <rama>`

*   **Descripción:** Descarga los cambios desde un repositorio remoto (`<remoto>`, usualmente `origin`) y una rama específica (`<rama>`, usualmente `main` o `master`) y los fusiona (merge) con tu rama local actual. Es `git fetch` + `git merge`.
*   **Cuándo usarlo:** Antes de empezar a trabajar o antes de `git push`, para actualizar tu repositorio local con los cambios del remoto.
*   **Ejemplo:**
    ```bash
    # Actualizar tu rama local 'main' con los cambios de 'origin/main'
    git pull origin main
    ```

### `git push <remoto> <rama>`

*   **Descripción:** Sube tus commits locales de una rama específica (`<rama>`) al repositorio remoto (`<remoto>`).
*   **Cuándo usarlo:** Después de hacer commits locales que quieres compartir o respaldar en el remoto.
*   **Ejemplo:**
    ```bash
    # Subir tus commits locales de 'main' a 'origin/main'
    git push origin main
    # Subir una nueva rama local 'feature/nueva' al remoto 'origin'
    git push -u origin feature/nueva # -u establece el seguimiento upstream
    ```

## 7. Flujos de Trabajo y Estrategias Comunes

Conceptos y comandos relacionados con cómo organizar el trabajo en equipo o proyectos más grandes.

### Gitflow (Concepto)

*   **Descripción:** Es un modelo popular de ramificación para gestionar proyectos de software. Define roles específicos para distintas ramas para organizar el desarrollo, lanzamientos y mantenimiento. No es un comando de Git, sino una **estrategia**.
*   **Ramas Principales:**
    *   `master` (o `main`): Contiene el código de producción estable (versiones lanzadas).
    *   `develop`: Rama principal de desarrollo, integra funcionalidades completadas. Es la base para las ramas `feature`.
*   **Ramas de Soporte:**
    *   `feature/<nombre-feature>`: Se crean a partir de `develop` para trabajar en nuevas funcionalidades. Se fusionan de vuelta a `develop` al terminar.
    *   `release/<version>`: Se crean a partir de `develop` para preparar un nuevo lanzamiento (pruebas finales, correcciones menores). Se fusionan a `master`/`main` y a `develop`.
    *   `hotfix/<descripcion>`: Se crean a partir de `master`/`main` para corregir errores críticos en producción. Se fusionan de vuelta a `master`/`main` y a `develop`.
*   **Ejemplos relacionados con Gitflow (creación de ramas base):**
    ```bash
    # Crear la rama develop desde main/master (al inicio del proyecto)
    git checkout -b develop
    # Crear la rama staging (si se usa para un entorno de pruebas pre-producción)
    git checkout -b staging develop # Basada en develop
    ```
*   **¿Cuándo usarlo?:** Útil para proyectos con ciclos de lanzamiento definidos, múltiples versiones en producción, o equipos grandes. Puede ser excesivo para proyectos pequeños o simples.

### Convenciones de Nomenclatura de Ramas (Prefijos)

*   **Descripción:** Usar prefijos consistentes para los nombres de las ramas ayuda a entender rápidamente el propósito de cada una. Es una buena práctica, especialmente en equipos.
*   **Ejemplos Comunes:**
    *   `feature/<nombre-descriptivo>`: Para nuevas funcionalidades (ej. `feature/user-authentication`).
    *   `fix/<nombre-o-issue>`: Para correcciones de bugs (ej. `fix/login-error`, `fix/issue-42`).
    *   `hotfix/<nombre-o-issue>`: Para correcciones urgentes en producción.
    *   `release/<version>`: Para preparar lanzamientos (ej. `release/v1.2.0`).
    *   `improvement/<descripcion>`: Para mejoras que no son ni features ni fixes.
*   **Beneficios:** Claridad, organización, facilita la automatización (CI/CD).

### `git merge --squash <rama_a_fusionar>`

*   **Descripción:** Es una opción del comando `merge`. Toma todos los commits de la `<rama_a_fusionar>`, los combina en un **único conjunto de cambios** en el área de preparación (staging area) de tu rama actual, pero **no crea un commit de fusión** automáticamente. Tú debes hacer `git commit` después.
*   **Resultado:** El historial de la rama receptora (ej. `develop`) muestra un solo commit para toda la funcionalidad desarrollada en la rama `feature`, en lugar de todos los commits intermedios de esa rama. Mantiene el historial de la rama principal más limpio.
*   **Cuándo usarlo:** Comúnmente al fusionar ramas `feature` en `develop` o `main`/`master` para evitar "ensuciar" el historial principal con muchos commits pequeños de desarrollo.
*   **Ejemplo:**
    ```bash
    # 1. Estar en la rama receptora (ej. develop)
    git switch develop
    # 2. Ejecutar el merge --squash desde la rama feature
    git merge --squash feature/complex-feature
    # 3. Revisar los cambios (están en staging)
    git status
    # 4. Crear un único commit para toda la feature
    git commit -m "Feat: Implement complex feature X"
    ```

### Ejemplo de Flujo: Fusionar `develop` en `master` (Simplificado)

*   **Descripción:** Pasos típicos para llevar los cambios estables de `develop` a la rama principal (`master` o `main`) para un lanzamiento.
*   **Pasos:**
    ```bash
    # 1. Asegurarse que develop está actualizada y estable
    git switch develop
    git pull origin develop # Opcional: si trabajas con remoto

    # 2. Cambiar a la rama principal
    git switch master # o git switch main

    # 3. Asegurarse que la rama principal está actualizada
    git pull origin master # o git pull origin main

    # 4. Fusionar develop en master/main
    git merge develop
    # (Resolver conflictos si los hay)

    # 5. (Opcional pero recomendado) Crear un tag para la versión
    git tag -a v1.0.0 -m "Release version 1.0.0"

    # 6. Subir los cambios de master/main y el tag al remoto
    git push origin master # o git push origin main
    git push origin v1.0.0
    ```

---

## (Próximamente / Otros Comandos Útiles)

A medida que avances, podrías encontrar útiles estos comandos:

*   `git remote`: Para gestionar las conexiones a repositorios remotos (listar, añadir, quitar).
*   `git reset`: Para deshacer cambios en el staging area o incluso commits locales (¡con cuidado!).
*   `git revert`: Para deshacer un commit creando uno nuevo que revierte los cambios (más seguro para historial compartido).
*   `git tag`: Para marcar puntos específicos en el historial como importantes (ej. versiones).
*   `git fetch`: Para descargar cambios del remoto sin fusionarlos automáticamente.
*   ... ¡y muchos más!

---
