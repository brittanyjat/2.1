module.exports = {
    login: (req, res, next) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
        const { session } = req;

        db.login([username, password]).then(response => {
            console.log(response)
            if (response.length !== 0) {
                const user = response[0];

                session.user = { //----------> SIMULATION2 75F. Storing user data from table onto sessions.
                    id: user.userid
                }
                res.status(200).send(session.user);
            } else {
                res.status(500).send('bad username and/or password')
            }
        }).catch((err) => console.log(err));
    },

    register: (req, res, next) => {
        const db = req.app.get('db');
        const { session } = req;
        const { username, password } = req.body;

        db.register([username, password]).then(response => {
            const user = response[0]

            session.user = {
                id: user.userid
            }

            res.status(200).send(session.user);
        }).catch(err => res.status(500).send(err))

    },

    logout: (req, res, next) => {
        req.session.destroy();
        res.status(200).send('Session ended!')
    }
}