const connection = require('../../config/db/db.config');
const auth = require('../../middlewares/auth');

module.exports = app => {
    app.delete('/delete-project/:project_id', auth, (req, res, next) => {
        const project_id = req.params.project_id;
        const user_id = req.user;

        connection.query('SELECT * FROM projects WHERE user_id = ? AND id = ?', [user_id, project_id], (findProjectError, findProjectRes) => {
            if(findProjectError) {
                res.status(500).json({error: {type: 'server', msg: 'SOMETHING WENT WRONG WITH THE SERVER!'}})
            } else if(findProjectRes.length === 0) {
                res.status(400).json({error: {type: 'user', msg: 'YOU DON\'T HAVE ACCESS TO THIS PROJECT!'}})
            }else {
                next();
            }
        });
    }, (req, res) => {
        const project_id = req.params.project_id;
        const user_id = req.user;

        connection.query('DELETE FROM projects WHERE user_id = ? AND id = ?', [user_id, project_id], (deleteProjectError, deleteProjectRes) => {
            if (deleteProjectError) {
                res.status(500).json({error: {type: 'server', msg: 'SOMETHING WENT WRONG WITH THE SERVER!'}})
            } else {
                res.send(project_id);
            }
        });
    });
}