import { Request, Response } from 'express';
import { BaseRouter } from './router';

export class DetectionRouter extends BaseRouter {
    
    constructor () {
        super();
    }

    setRouter(): void {
        this.router.get("/", (req, res) => this.getDetection(req, res)); 
    }

    private async getDetection(_: Request, res: Response) {
        try {
            res.send("getDetection to be implemented")
        } catch (error) {
            const errorMessage = `Failed in getDetection, ${error}`;
            res.status(500).send(errorMessage);
        }
    }
}
