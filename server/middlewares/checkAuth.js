module.exports = function (req, res, next) {
    const { session } = req;

    if (session.user){
        next();  //----------> SIMULATION2 75E NEXT. Next is invoked at the end of this middleware to move on to next function if the user is logged in.
    } else {
        res.status(403).send('Please Login')
    }
}