import dotenv from "dotenv";
import express from "express";
import { AlertRouter } from "./routes/alert.router";
import { DetectionRouter } from "./routes/detection.router";
import { FrameRouter } from "./routes/frame.router";
import { APIRouter } from "./routes/router";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.get("/", (_, res) => {
    res.send("Success");
});

const routers : {url: string, router: APIRouter}[] = [
    {
        url: '/alert',
        router: new AlertRouter(),
    },
    {   
        url: '/detection',
        router: new DetectionRouter(),
    },
    {
        url: "/frame",
        router: new FrameRouter()
    }
];

for (const router of routers) {
    app.use(router.url, router.router.getRouter());
}

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
