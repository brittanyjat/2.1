module.exports = function (req, res, next) {
    const { session } = req;
    console.log(session)
    if (!session.user) {
        session.user = {
            id: null,
            uername: null,
        }
    }
    next();
}
