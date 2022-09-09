const connection = require('../../config/db/db.config');
const auth = require('../../middlewares/auth');

module.exports = app => {
    app.post('/create-project', auth, (req, res) => {
        const project = req.body;
        const user_id = req.user;

        connection.query('INSERT INTO projects (name, user_id) VALUES (?, ?)', [project.name, user_id], (createProjectError, createProjectRes) => {
            if(createProjectError) {
                res.status(500).json({error: {type: 'server', msg: 'SOMETHING WENT WRONG WITH THE SERVER!'}});
            } else {
                const projectData = {
                    id: createProjectRes.insertId,
                    name: project.name,
                    user_id: user_id
                };

                res.status(200).json({projectData});
            }
        });
    });
}