import { DB } from "./db/types";
import {Pool} from 'pg';
import { Kysely, PostgresDialect } from "kysely";
import dotenv from 'dotenv'
dotenv.config();

const dialect = new PostgresDialect({
    pool: new Pool({
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        password: process.env.DATABASE_PASSWORD,
        user: process.env.DATABASE_USER,
        port: 5432
    })
});

export const db = new Kysely<DB>({dialect});