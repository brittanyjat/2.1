module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db');
        const { name, description, loan, monthly, recommended, desired, address, city, state, zip, imgurl } = req.body
        // console.log(req.body)

        if (req.session.user) {
            db.addProperty([req.session.user.id, name, description, loan, monthly, recommended, desired, address, city, state, zip, imgurl])
                .then(() => res.status(200).send())
                .catch((err) => res.status(500).send(err))
        } else {
            res.status(500).send('Better login before trying this again!')
        }

    },

    getProperties: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.session.user;
        // console.log(req.session.user)
        db.getProperties(id).then(response => {
            res.status(200).send(response);
        }).catch(err => res.status(500).send(err))
    },

    delete: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.deleteProperty(id)
            .then(response => { res.status(200).send() })
            .catch((err) => res.status(500).send(err));
    }
};