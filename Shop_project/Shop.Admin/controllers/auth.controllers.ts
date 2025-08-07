import { IAuthRequisites } from "@Shared/types";
import { NextFunction,Router, Request, Response } from "express";
import { throwServerError } from "./helpers";
import { verifyRequisites } from "../models/auth.model";

export const authRouter = Router();
export const validateSession = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.path.includes("/login") || req.path.includes("/authenticate")) {
        next();
        return;
    }
    if (req.session?.username) {
        next();
    } else {
        res.redirect(`/${process.env.ADMIN_PATH}/auth/login`);
    }
}
authRouter.get("/login", async (req: Request, res: Response) => {
    try {
        res.render("login");
    } catch (e: any) {
        throwServerError(res, e);
    }
});
authRouter.post("/authenticate", async (
    req: Request<{}, {}, IAuthRequisites>,
    res: Response
) => {
    const verified = await verifyRequisites(req.body);
try {
    if (verified) {
        req.session.username = req.body.username;
        res.redirect(`/${process.env.ADMIN_PATH}`)
    } else {
        res.redirect(`/${process.env.ADMIN_PATH}/auth/login`);
    }
} catch (e: any) {
        throwServerError(res, e);
    }
});
authRouter.get("/logout", async (
    req: Request,
    res: Response
) => {
    try {
      req.session.destroy((err: any) => {
          if (err) {
              console.log('Oops! Something went wrong =(')
          }
          res.redirect(`/${process.env.ADMIN_PATH}/auth/login`);
      })
    } catch (e: any) {
        throwServerError(res, e);
    }
});