import { DB } from "./db/types";
import {Pool} from 'pg';
import { Kysely, PostgresDialect } from "kysely";

const dialect = new PostgresDialect({
    pool: new Pool({
        database: 'postgres',
        host: 'db.ymnfwrjgppraluxgarjf.supabase.co',
        password: 'lokeshsloth',
        user: 'postgres',
        port: 5432
    })
});

export const db = new Kysely<DB>({dialect});