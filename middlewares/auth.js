const connection = require('../config/db/db.config');
const jwt = require('jsonwebtoken');
const jwtSecretKey = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    console.log(token);
    if(!token) {
        res.status(401).json({error: {type: 'jwt', msg: 'PLEASE LOGIN AND TRY AGAIN!'}})
    }else {
        connection.query('SELECT * FROM expired_tokens WHERE token = ?', token, (findTokenError, findTokenRes) => {
            if(findTokenError) {
                res.status(500).json({error: {type: 'server', msg: 'SOMETHING WENT WRONG WITH THE SERVER!'}});
            } else if(findTokenRes.length > 0) {
                res.status(401).json({error: {type: 'jwt', msg: 'THIS TOKEN IS EXPIRED PLEASE LOGIN AND TRY AGAIN!'}})
            }else {
                try {
                    jwt.verify(
                        token,
                        jwtSecretKey,
                        (err, decoded) => {
                            if(err) {
                                console.log(err);
                            }
                            req.user = decoded.user.id;
                            next();
                        }
                    )
                }catch (err) {
                    res.status(401).json({error: {type: 'jwt', msg: 'THIS TOKEN IS EXPIRED!'}})
                }
            }
        });
    }
}