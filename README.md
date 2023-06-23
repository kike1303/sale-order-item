Este proyecto fue realizado en [Next.js](https://nextjs.org/)

Para correrlo en local sin necesidad de tener dependencias instaladas (únicamente Docker), ejecutar el siguiente comando en la terminal:

```bash
docker build -t sale-order-item .
```

Esto hará el build del proyecto, para levantar el servidor, ejecutar:

```bash
docker run -p 8080:8080 sale-order-item
```

Navegar en el browser hacia [http://localhost:8080/](http://localhost:8080/).

Para probar el funcionamiento completo de este proyecto, necesitamos tener levantado en local el siguiente proyecto:

[github.com/kike1303/sale-order-api](https://github.com/kike1303/sale-order-api)
