import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send("These are all the players")
})

router.get('/:playerId', (req: Request, res: Response) => {
  let { playerId } = req.params
  res.send(`These are the matches for player ${playerId}`)
})

export const PlayersController: Router = router;
