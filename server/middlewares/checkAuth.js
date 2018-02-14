module.exports = function (req, res, next ){
    const {session } = req;
    if( !session.user){
        res.status(500).send('Please login to see how awesome this app is!')
    } else {
        next();
    }
}