#  Comandos básicos de Git y su descripción

## 📄 Qué es un commit

Un commit en Git es una instantánea de los cambios realizados en el proyecto en un momento específico. Representa un punto en el historial del repositorio al que puedes regresar si es necesario. Cada commit incluye un mensaje descriptivo que ayuda a entender los cambios realizados y un identificador único (hash) que lo distingue de otros commits.

## 📄 Estado y seguimiento

- `git status`  
  Muestra el estado del repositorio: archivos modificados, en staging o sin seguimiento.

- `git diff`  
  Muestra los cambios entre el working directory y el área de staging.

- `git diff --staged`  
  Muestra los cambios que ya están en staging pero aún no han sido commiteados.

## ➕ Añadir archivos

- `git add <archivo>`  
  Añade un archivo específico al área de staging.

- `git add .`  
  Añade todos los cambios del directorio actual y sus subdirectorios al staging.

- `git add -A` / `git add --all`  
  Añade todos los archivos modificados, nuevos o eliminados al área de staging.

## ✅ Commits

- `git commit -m "mensaje"`  
  Crea un commit con los cambios en staging y un mensaje descriptivo.

- `git commit --amend`  
  Modifica el último commit: puedes cambiar su mensaje o añadir nuevos cambios que olvidaste incluir. ⚠️ Úsalo solo si aún no has hecho `push`.

- `git show [hash]`  
  Muestra detalles de un commit específico (por defecto, el último).

## 🕓 Historial

- `git log`  
  Muestra el historial completo de commits.

- `git log --oneline`  
  Muestra el historial en formato compacto (una línea por commit).

- `git log --oneline --graph`

## 🌱 Ramas

- `git branch`  
  Lista todas las ramas y muestra en cuál estás.

- `git checkout <rama>`  
  Cambia a otra rama.

- `git checkout -b <nueva-rama>`  
  Crea y cambia a una nueva rama.

- `git merge <rama>`  
  Fusiona la rama indicada con la rama actual.

## 🌀 Control remoto

- `git clone <url>`  
  Clona un repositorio remoto.

- `git remote -v`  
  Muestra las URLs del repositorio remoto (fetch y push).

- `git push`  
  Envía los commits locales al repositorio remoto.

- `git pull`  
  Trae y fusiona los últimos cambios del repositorio remoto.

## 🧼 Reset y limpieza

- `git reset <archivo>`  
  Quita el archivo del staging (sin perder los cambios locales).

- `git reset --hard`  
  Restaura el working directory al último commit (⚠️ pierde cambios no guardados).

## 🚀 Inicialización

- `git init`  
  Inicializa un nuevo repositorio Git en el directorio actual.

## 💾 Stash (guardar cambios temporalmente)

- `git stash`  
  Guarda temporalmente los cambios que no están listos para hacer commit, dejándote con un working directory limpio.

- `git stash list`  
  Muestra una lista de los cambios almacenados.

- `git stash apply`  
  Aplica los últimos cambios guardados sin eliminarlos del stash.

- `git stash pop`  
  Aplica los últimos cambios guardados y los elimina del stash.

- `git stash drop`  
  Elimina una entrada específica del stash.

- `git stash clear`  
  Borra todas las entradas del stash.