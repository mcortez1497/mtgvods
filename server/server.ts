import express from 'express';

import { EventsController, PlayersController } from './controllers'

const app: express.Application = express();
const port = process.env.PORT || 5000;

app.use('/events', EventsController)
app.use('/players', PlayersController)

app.listen(port, () => console.log(`Listening on ${port}`))
