import { Request, Response } from 'express'
import { Event } from '../models';

export const getEvents = async (req: Request, res: Response): Promise<Response> => {
    try {
        const events = await Event.findAll();
        return res.status(200).json(events)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getEvent = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id
        const event = await Event.findOne({
            where: {
                id
            }
        });
        return res.status(200).json(event)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const postEvent = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, title, description, type, date, location, price } = req.body

        let newEvent = await Event.create(req.body, {
            fields: ['name', 'title', 'description', 'type', 'date', 'location', 'price']
        });

        return res.json({
            message: "Event created!",
            data: newEvent
        })
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const putEvent = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id

        const { name, title, description, type, date, location, price } = req.body

        const event = await Event.findOne({
            where: {
                id
            }
        });

        if (event) {
            await Event.update(req.body, {
                where: {
                    id: id
                }
            });

            return res.json({
                message: 'Project updated',
                data: req.body
            })
        }

        return res.status(404).json({
            message: 'Event not found',
            data: {}
        });

    } catch (error) {
        return res.status(500).json(error)
    }
}

export const deleteEvent = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = req.params.id

        const event = await Event.findOne({
            where: {
                id
            }
        });

        let deleteRowCount = 0;

        if (event) {
            deleteRowCount = await Event.destroy({
                where: {
                    id
                }
            });
        }

        return res.json({
            message: 'Event deleted',
            data: deleteRowCount
        })

    } catch (error) {
        return res.status(500).json(error)
    }
}