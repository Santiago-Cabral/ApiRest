import express from "express";
import employeesRoutes from  './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';
import cors from 'cors'; // Importa el módulo de cors
const app = express()

app.use(express.json());

app.use(cors({
    origin: ["http://localhost:3001", "http://localhost:19000"], // Permitir solicitudes desde estas direcciones
    methods: "GET,PUT,POST,DELETE",
    allowedHeaders: "Content-Type",
  }));


app.use(indexRoutes)

app.use(employeesRoutes)

app.listen(3000)

