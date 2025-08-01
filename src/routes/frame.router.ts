import { Request, Response } from 'express';
import { BaseRouter } from './router';

export class FrameRouter extends BaseRouter{    

    constructor () {
        super();
    }

    setRouter(): void {
        this.router.post("/", (req, res) => this.receiveFrame(req, res));  
    }

    private async receiveFrame(req: Request, res: Response) {
        try {
            res.send("receiveFrame to be implemented")
        } catch (error) {
            const errorMessage = `Failed in receiveFrame, ${error}`;
            res.status(500).send(errorMessage);
        }
    }
}