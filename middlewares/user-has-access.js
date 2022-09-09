const connection = require('../config/db/db.config');

module.exports = (req, res, next) => {
    const user_id = req.user;
    const todo = req.body;

    if(req.user) {
        connection.query('SELECT * FROM todos WHERE user_id = ? AND id = ?', [user_id, todo.id], (findTodoError, findTodoRes) => {
            if(findTodoError) {
                res.status(500).json({error: {type: 'server', msg: 'SOMETHING WENT WRONG WITH THE SERVER!'}});
            } else if(findTodoRes.length === 0) {
                res.status(401).json({error: {type: 'todo', msg: 'YOU DON\'T HAVE ACCESS TO THIS TODO!'}})
            }else {
                next();
            }
        });
    }
}