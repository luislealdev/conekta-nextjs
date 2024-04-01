# Repositorio de Implementación de API para Pagos con Conekta

Este repositorio contiene la implementación de una API que se conecta con la plataforma de pagos de Conekta. La implementación se realiza utilizando el API de Next.js 14 y se planea integrar también acciones (actions), dos formas distintas de implementarse.

## Características

- Utiliza Next.js 14 para construir la API, lo que permite un desarrollo rápido y eficiente.
- Se integra con la API de pagos de Conekta para procesar transacciones de manera segura.

## Estructura del Repositorio

El repositorio se organiza de la siguiente manera:

- **`/app/api`**: Contiene los endpoints de la API para la gestión de pagos y otras funcionalidades relacionadas.
- **`/app`**: Contiene las páginas de Next.js para manejar las solicitudes HTTP y renderizar las vistas necesarias.
- **`/actions`**: Mandar llamar a la API de conecta directamente y procesar solicitudes, guardar en base de datos en caso de resultados correctos (NO necesita de llamar a nuestra propia API).
- **`/interfaces`**: Define las interfaces de objetos que se usarán en toda la aplicación.
- **`/conekta`**: Crea un objeto donde se configuran las diversas instancias de conekta.

## Instalación y Uso

1. Clona este repositorio en tu máquina local:

```bash
git clone https://https://github.com/luislealdev/conekta-nextjs.git
```

2. Instala las dependencias (por preferencia personal uso yarn, se puede usar cualquier manejador de paquetes)

```bash
cd conekta-nextjs
yarn
```

3. Ingresa las variables de entorno en el .env.template y renombra a .env

4. Corre la aplicación

```bash
yarn dev
```

5. Accede a la API a través de la URL proporcionada por Next.js, generalmente **http://localhost:3000**
