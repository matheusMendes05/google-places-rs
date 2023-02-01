import express from 'express';
import { router } from './routes';
import * as dotenv from 'dotenv';

import cors from 'cors';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(process.env.PORT, () => {
  console.log('Aplicação rodando na porta: ', process.env.PORT);
});
