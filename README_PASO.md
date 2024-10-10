1. # CLONAR REPOSITORIO ------------------------
git clone urlRepositorio

### clonar en una carpeta especifica
git clone URL-del-repositorio ruta/completa/a/la/carpeta

2. # CLAVE SSH  ------------------------------
juliteamo

#### Crear clave ssh
Abrir readme Crear ssh

3. # Entrar a la carpeta
C:\WINDOWS\system32\curso-react-intro

4. # Abrir en visual
code .

### CONTENIDO DE LOS ARCHIVOS CREADOS --------------------------------

1. # node_modules
2. # public
    - index.html -> renderiza el proyecto

3. # src
    - App.js -> Estructura de los componentes
    - index.js
    - index.css
    
    # COMPONENTES
    - ToDoCounter.js
    - ToDoFilter.js
    - ToDoItem.js
    - ToDoList.js
    - CreateToDoButton.js






---------------------------------------------------------------------------------------------------------------
# GITHUB - INICIAR -----------------------------------------------------------
1. # inicializar repositorio
git init

2. # agregar repositorio
git remote add origin https://github.com/tu-usuario/tu-repositorio.git

# HACER COMMIT ------------------------------------------------------------
1. # Agregar archivos al repositorio local
git add .

2. # Realizar un commit con mensaje
git commit -m "Primer commit"

3. # Subir los archivos - puede ser master o main dependiendo del repo
git push -u origin master

# CREAR RAMAS ----------------------------------------------------------------
1. # crear ramas
git checkout -b nombre-de-la-rama

2. # cambiar entre ramas
git checkout -b nombre-de-la-rama

3. # unir rama al codigo principal (merge)
git checkout main
git merge nombre-de-la-rama

4. # Eliminar rama
git branch -d nombre-de-la-rama

5. # Saber en que rama estoy
git branch

# PUSH EN RAMA
1. # Cambiar a la rama en donde se va a hacer el push
git checkout nombre-de-la-rama
    EJ- git checkout feature/nueva-funcionalidad

2. # Hacer cambios
git add .
git commit -m "Descripción de los cambios"

3. # Push
git push -u origin nombre-de-la-rama

4. # Verificar el push
git branch -r


