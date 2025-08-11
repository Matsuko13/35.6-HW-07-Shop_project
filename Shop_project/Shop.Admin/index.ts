import express, { Express, NextFunction, Request, Response } from "express";
import { productsRouter } from "./controllers/products.controllers";
import layout from "express-ejs-layouts";
import bodyParser from "body-parser";
import { authRouter, validateSession } from "./controllers/auth.controllers";
import session from "express-session";

export default function (): Express {
    const app = express();
    app.use(session({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: false,
        resave: false
    }));
    app.set('view engine', 'ejs');
    app.set('views', 'Shop.Admin/views');
    app.use((req: Request, res: Response, next: NextFunction) => {
        res.locals.location = req.headers.host + req.originalUrl;
        next();
    });
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(layout);
    app.use(express.static(__dirname + "/public"));
    app.use(validateSession);
    app.use("/auth", authRouter);
    app.use("/", productsRouter);

    return app;
}