import { Request, Response } from "express"

function errorHandler (err: any, req: Request, res: Response, next: () => void) {
    // console.log(err.stack);
    res.status(500).send(err)
    next();
}

export default errorHandler