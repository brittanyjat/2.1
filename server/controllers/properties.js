module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db');
        const { name, description, loan, monthly, desired, address, city, state, zip, imgUrl } = req.body

        if (req.session.user) {
            db.addProperty([req.session.user.id, name, description, loan, monthly, desired, address, city, state, zip, imgUrl])
            .then(() => res.status(200).send())
            .catch((err) => console.log(err))
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
    }
};