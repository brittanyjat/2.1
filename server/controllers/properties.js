module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db');
        const { name, description, loan, monthly, desired, address, city, state, zip, imgUrl } = req.body
        const { id } = req.session.user;

        db.addProperty([id, name, description, loan, monthly, desired, address, city, state, zip, imgUrl])
            .then(() => res.status(200).send())
            .catch((err) => console.log(err))
    }
};