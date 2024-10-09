# Instrucciones para Crear y Configurar una Clave SSH

Este documento proporciona los pasos para crear y configurar una clave SSH, lo que te permitirá autenticarte de forma segura con servicios como GitHub.

## 1. Generar una Clave SSH

Abre una terminal (o PowerShell en Windows) y ejecuta el siguiente comando para generar una nueva clave SSH:

```bash
ssh-keygen -t rsa -b 4096 -C "tu-email@example.com"
```

Reemplaza `"tu-email@example.com"` con tu correo electrónico asociado a GitHub.

## 2. Elegir la Ubicación para Guardar la Clave

Cuando se te pida la ubicación para guardar la clave, presiona **Enter** para aceptar la ubicación predeterminada:

- Windows: `C:\Users\tu_usuario\.ssh\id_rsa`
- Linux/macOS: `/home/tu_usuario/.ssh/id_rsa`

Si prefieres guardarla en otra ubicación, escribe la ruta deseada.

## 3. Establecer una Frase de Contraseña (Opcional)

Se te pedirá que ingreses una frase de contraseña para proteger la clave privada:

```bash
Enter passphrase (empty for no passphrase):
```

- Si deseas agregar una capa adicional de seguridad, ingresa una contraseña.
- Si no quieres usar una contraseña, simplemente presiona **Enter** para dejarla en blanco.

## 4. Verificar la Clave Generada

Para verificar que la clave se ha generado correctamente, lista los archivos en la carpeta `.ssh`:

```bash
dir ~/.ssh  # En Windows
ls ~/.ssh   # En Linux/macOS
```

Deberías ver los archivos `id_rsa` (clave privada) y `id_rsa.pub` (clave pública).

## 5. Agregar la Clave SSH al Agente SSH

Para permitir que el agente SSH administre tu clave, sigue estos pasos:

- **Inicia el agente SSH**:

  ```bash
  eval "$(ssh-agent -s)"  # En Linux/macOS
  Start-Service ssh-agent  # En Windows PowerShell
  ```

- **Agrega tu clave privada al agente**:

  ```bash
  ssh-add ~/.ssh/id_rsa  # En Linux/macOS
  ssh-add C:\Users\tu_usuario\.ssh\id_rsa  # En Windows
  ```

## 6. Agregar la Clave Pública a GitHub

Para copiar tu clave pública y usarla en GitHub, ejecuta:

```bash
cat ~/.ssh/id_rsa.pub  # En Linux/macOS
type C:\Users\tu_usuario\.ssh\id_rsa.pub  # En Windows
```

Copia el contenido que aparece en pantalla.

Luego, ve a GitHub y accede a tu cuenta. Dirígete a **Settings** → **SSH and GPG keys** → **New SSH key**, pega tu clave pública y guárdala.

## 7. Probar la Conexión SSH

Verifica que todo esté funcionando correctamente ejecutando el siguiente comando:

```bash
ssh -T git@github.com
```

Si ves un mensaje como `Hi <username>! You've successfully authenticated`, entonces la clave SSH ha sido configurada correctamente.

¡Ya puedes usar SSH para conectar con GitHub y otros servicios!
