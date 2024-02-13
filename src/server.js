import express from 'express';
import { json } from 'express';
import cors from 'cors';
import router from './routes/router.js';

const app = express();
app.use(json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log("API RODANDO NA PORTA", PORT));