BBVA TEST - CAPITOL CONSULTING
ING. RAFAEL ROJAS R.
OCTUBRE 2021

INSTRUCCIONES DE INSTALACIÓN Y EJECUCIÓN DE LA APP

1.- Descarga o clona el código fuente del proyecto Next.js.

2.- Instale todos los paquetes npm necesarios ejecutando 'npm install' o 'npm i' desde la línea de comandos en la carpeta raíz del proyecto (donde se encuentra el package.json).

3.- Inicie la aplicación ejecutando 'npm run dev' desde la línea de comandos en la carpeta raíz del proyecto, esto compilará la aplicación e iniciará el servidor Next.js.

4.- Abra la aplicación en la URL http://localhost:3000.

5.- Para realizar pruebas debe registrar un usuario a través del formulario dispuesto para tal fin, al cual puede acceder desde la página de login.

NOTA: También puede iniciar la aplicación de autenticación JWT directamente con el comando de CLI Next.js npx next dev. Para obtener más información sobre la CLI de Next.js, consulte https: https://nextjs.org/docs/api-reference/cli


La aplicación de cliente Next.js (React) contiene las siguientes páginas:

- /account/login - página pública para iniciar sesión en la aplicación Next.js.
- /account/register - página pública para registrar una nueva cuenta de usuario con la aplicación.
- / - página de inicio segura que contiene un simple mensaje de bienvenida al usuario y el conteo de tiempo desde la última vez que ha iniciado sesión.

RxJS
El servicio de usuario utiliza sujetos y observables RxJS para almacenar el estado actual del usuario y comunicarse entre los diferentes componentes de la aplicación.

DATOS GUARDADOS EN UN ARCHIVO JSON
Para mantener el ejemplo lo más simple posible, en lugar de usar una base de datos (por ejemplo, MySQL, MongoDB, PostgreSQL, etc.), estoy almacenando datos para los usuarios en un archivo plano JSON ubicado en /data/users.json, se accede a los datos y se administran a través del repositorio de usuarios que admite todas las operaciones CRUD básicas.

ESTRUCTURA DE LA APP

La PWA esta estructurada en los siguientes directorios:

/components
Los componentes de React utilizados por las páginas o por otros componentes de React. Los componentes globales están en la carpeta raíz /components  y los componentes específicos de las funciones están en subcarpetas (p . Ej. /components/account, /components/users).

/data
- Contiene los archivos planos JSON de datos para almacenar los datos de la aplicación tutorial Next.js.

/helpers
- Cualquier cosa que no esté en otros directorios y no justifique tener su propia carpeta. Los ayudantes de React de front-end están en la carpeta raíz /helpers  y los ayudantes de API de back-end están en la subcarpeta /helpers/api.

/pages
- Páginas y controladores de ruta de API para la aplicación de tutorial de inicio de sesión Next.js. La carpeta /pages contiene todas las páginas enrutadas con la ruta a cada página definida por su nombre de archivo. La carpeta /pages/api contiene todos los controladores de ruta API que también se enrutan en función de cada nombre de archivo. Para obtener más información sobre el enrutamiento de páginas de Next.js y los patrones de nombres de archivos, consulte https://nextjs.org/docs/routing/introduction , para el enrutamiento de API, consulte https://nextjs.org/docs/api-routes/introduction .

/services
- Los servicios manejan toda la comunicación http con apis backend para la aplicación front-end React, cada servicio encapsula las llamadas api para un tipo de contenido (por ejemplo, usuarios) y expone métodos para realizar varias operaciones (por ejemplo, operaciones CRUD). Los servicios también pueden realizar acciones que no involucran llamadas http, como mostrar y borrar alertas con el servicio de alertas .

/styles
- Hojas de estilo CSS utilizadas por la aplicación tutorial Next.js.
