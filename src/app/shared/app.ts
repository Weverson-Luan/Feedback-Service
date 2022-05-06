import 'dotenv/config';
import express from "express";
import cors from "cors";

import { router } from "./routes/routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(process.env.PORT_HTTP, ()=> {
   console.log('Start running server in port https://localhost');
});