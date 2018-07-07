import express from 'express';

import { EventsController } from './controllers'

const app: express.Application = express();
const port = process.env.PORT || 5000;

app.use('/', EventsController)

app.listen(port, () => console.log(`Listening on ${port}`))
