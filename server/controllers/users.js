module.exports = {
    login: (req, res, next) => {
        const db = req.app.get('db');
        const { username, password } = req.body;

        db.login([username, password]).then(data => {
            if (data.length !== 0) {
                const user = data[0];

                req.session.user = {
                    id: user.userId,
                    username: user.username
                }

                res.status(200).send(req.session.user);
            } else {
                res.status(500).send('bad username and/or password')
            }
        }).catch((err) => console.log(err));
    },

    register: (req, res, next) => {
        const db = req.app.get('db');
        const { session } = req;
        const { username, password } = req.body;

        db.register([username, password])
            .then(res => {
                session.user.id = res[0].userId,
                session.user.username = res[0].username;
                res.status(200).send(session.user);
            }).catch(res.status(500).send('you suck'))
    },

    logout: (req, res, next) => {
        req.session.destroy();
        res.status(200).send('Session ended. Come back soon!')
    }
}