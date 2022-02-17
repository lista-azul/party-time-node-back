import { Pool } from 'pg'

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '',
    database: '',
    port: 5432
})