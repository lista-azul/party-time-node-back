import { Router } from 'express';
import { getEvents, getEvent, postEvent, putEvent, deleteEvent } from '../controllers/events';

const router = Router();

router.get('/events', getEvents)
router.get('/events/:id', getEvent)
router.post('/events', postEvent)
router.put('/events/:id', putEvent)
router.delete('/events/:id', deleteEvent)

export default router;