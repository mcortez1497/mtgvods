import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send("These are my events")
})

router.get('/:eventId', (req: Request, res: Response) => {
  let { eventId } = req.params
  res.send(`These are the matches for event ${eventId}`)
})

export const EventsController: Router = router;
