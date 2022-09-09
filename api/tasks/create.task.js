const connection = require('../../config/db/db.config');
const auth = require('../../middlewares/auth');

module.exports = app => {
    app.post('/create-task', auth, (req, res) => {
         const todo = req.body;
         const user_id = req.user;
        connection.query('INSERT INTO todos (title, text, day, user_id, project) VALUES (?, ?, ?, ?, ?)',
            [todo.title, todo.text, todo.day, user_id, todo.project],
            (insertTodoError, insertTodoRes) => {
                if (insertTodoError) {
                    res.status(500).json({error: {type: 'server', msg: 'SOMETHING WENT WRONG WITH THE SERVER!'}});
                } else if(todo.project) {
                    connection.query('INSERT INTO projects_todos (project_id, todo_id) VALUES (?, ?)', [todo.project_id, insertTodoRes.insertId], (insertTodoProjectError, insertTodoProjectRes) => {
                        if(insertTodoProjectError) {
                            res.status(500).json({error: {type: 'server', msg: 'SOMETHING WENT WRONG WITH THE SERVER!'}});
                        }else {
                            const todoData = {
                                id: insertTodoRes.insertId,
                                title: todo.title,
                                text: todo.text,
                                day: todo.day,
                                user_id,
                                project: todo.project,
                                project_id: todo.project_id
                            }
                            res.status(200).json({todoData});
                        }
                    });
                }else {
                    const todoData = {
                        id: insertTodoRes.insertId,
                        title: todo.title,
                        text: todo.text,
                        day: todo.day,
                        user_id,
                        project: todo.project,
                        project_id: todo.project_id
                    }

                    res.status(200).json({todoData});
                }
            });
    });
}