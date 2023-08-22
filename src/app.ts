import express from 'express';
import { db } from './database';

const app = express();

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Hello from the server. Powered by PostgresQL in association with Prisma and Kysely');
});

/**
 * @method GET
 * @route http://localhost:8080/todos
 * @desc gets all the todos from the database
 */

app.get('/todos', async (req, res)=>{
    const todos = await db.selectFrom('Todo').select(['Todo.id', 'Todo.title']).execute();
    res.status(200).json({
        success: true,
        message: 'successfully fetched all the todos',
        todos
    });
});

/**
 * @method POST
 * @route http://localhost:8080/create
 * @desc creates a todo and saves in the database
 */

app.post('/create', async(req, res)=>{
    const createdTodo = await db.insertInto('Todo').values({title: req.body.title}).execute();
    res.status(201).json({
        success: true,
        message: 'successfully created the todos',
        createdTodo
    });
});

/**
 * @method GET
 * @route http://localhost:8080/todo/:id
 * @desc gets a particular id based on its id
 */

app.get('/todo/:id', async(req, res)=>{});


/**
 * @method PUT
 * @route http://localhost:8080/todo/:id
 * @desc updates the todo
 */

app.put('/todo/:id', async(req, res)=>{});


/**
 * @method DELETE
 * @route http://localhost:8080/todo/:id
 * @desc deletes a todo from the database based on its id
 */

app.delete('/todo/:id', async(req, res)=>{});




export default app;