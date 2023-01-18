import { Router, Request, Response } from "express";
import { UserSchema, User, GetUser } from "../models/user";

const router = Router();

router.post("/users", async (req: Request, res: Response, next) => {
    try {
        let user: User = UserSchema.parse(req.body);
    
        // call user controller
        let data = {...user, _id: 1}

        res.status(201).send(GetUser.parse(data))
    }
    catch (error) {
        next(error)
    }
});

// router.get("/users", async (req: Request, res: Response) => {
    
// });

// router.patch("/users", async (req: Request, res: Response) => {
    
// });

// router.delete("/users", async (req: Request, res: Response) => {
    
// });

export default router;