const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios"; //Path del API

        // Se inicializan los Middlewares
        this.middlewares();

        // Rutas de la app
        this.routes(); // Cuando se llama al constructor se llaman las rutas
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //Lectura del middleware
        this.app.use(express.json());

        //Directorio público - Para servir archivos estáticos
        this.app.use(express.static("public")); // Cómo se dio acceso a la carpeta public, no servirá la ruta '/' definida en routes
    }

    routes() {
        this.app.use(this.usuariosPath, require("../routes/usuarios"));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

module.exports = Server;
