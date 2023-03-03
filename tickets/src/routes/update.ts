import express, {Request, Response} from 'express';
import { body } from 'express-validator';
import { validateRequest, NotFoundError, requireAuth, NotAuthorizedError } from '@ticketssa/common';
import { Ticket } from '../models/ticket';


const router = express.Router();


router.put('/api/tickets/:id', requireAuth,async (req: Request, res: Response) => {

});

export { router as updateTicketRouter }