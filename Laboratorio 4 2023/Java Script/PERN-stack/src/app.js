import express from "express";
import morgan from "morgan";
import tareasRoutes from "./router/tareas.routes.js";
import authRoutes from "./router/auth.routes.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.get("/", (req, res) => res.json({ message: "Hola q tal buendia"}));
app.use('/api', tareasRoutes);
app.use('/api', authRoutes);
app.use((err,req,res, next) => {
    res.status(500).json({
        status: "error",
        message: err.message
    });
});

export default app;
