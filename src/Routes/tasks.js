import { Router } from 'express';
const router = Router();

//DB Connection
import { connect } from '../database';
import { ObjectID } from 'mongodb';

async function getAllTask(req, res) {
    const db = await connect();
    const result = await db.collection('task').find({}).toArray();
    res.json(result);
}

async function newTask(req, res) {
    const db = await connect();
    const task = {
        title: req.body.title,
        description: req.body.description
    };
    const result = await db.collection('task').insert(task);
    res.json(result.ops[0]);
}

async function getTaskById(req, res) {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('task').findOne({_id: ObjectID(id)});
    res.json(result);
}

async function deleteTask(req, res) {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('task').remove({_id:ObjectID(id)}, {$set: newTask});
    res.json({
        message: `Task ${id} Deleted`,
        result
    });
}

async function updateTask(req, res) {
    const { id } = req.params;
    const newTask = {
        title: req.body.title,
        description: req.body.description
    };
    const db = await connect();
    const result = await db.collection('task').updateOne({_id: ObjectID(id)}, {$set: newTask});
    res.json({
        message:`Task ${id} Updated`,
    });
}

router.get('/', getAllTask);
router.post('/', newTask);
router.get('/:id', getTaskById);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

export default router;