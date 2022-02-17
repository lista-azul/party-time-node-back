import { Request, Response } from 'express'
import { QueryResult } from 'pg';
import { pool } from '..//database'

export const getEvents = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM events');
        return res.status(200).json(response.rows)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getEvent = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id)
        const response: QueryResult = await pool.query('SELECT * FROM events WHERE id = $1', [id]);
        return res.status(200).json(response.rows)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const postEvent = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, title, description, type, date, location, price } = req.body
        const response: QueryResult = await pool.query('INSERT INTO events (name, title, description, type, date, location, price) VALUES ($1, $2, $3, $4, $5, $6, $7)', [name, title, description, type, date, location, price]);
        return res.json({
            message: "Created succesfully",
            body: {
                event: req.body
            }
        })
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const putEvent = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id)
        const { name, title, description, type, date, location, price } = req.body
        const response: QueryResult = await pool.query('UPDATE events SET name = $1, title = $2, description = $3, type = $4, date = $5, location = $6, price = $7 WHERE id = $8', [name, title, description, type, date, location, price, id]);
        return res.json("Updated")
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const deleteEvent = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id)
        await pool.query('DELETE FROM events WHERE id = $1', [id]);
        return res.json("Deleted")
    } catch (error) {
        return res.status(500).json(error)
    }
}