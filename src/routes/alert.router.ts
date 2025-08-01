import { Request, Response } from 'express';
import { BaseRouter } from './router';

export class AlertRouter extends BaseRouter {
    
    constructor () {
        super();
    }

    setRouter(): void {
        this.router.get("/", (req, res) => this.getAlert(req, res));
    }

    private async getAlert(_: Request, res: Response) {
        try {
            res.send("getAlert to be implemented")
        } catch (error) {
            const errorMessage = `Failed in getAlert, ${error}`;
            res.status(500).send(errorMessage);
        }
    }
}