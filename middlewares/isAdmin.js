
const isAdmin = (req, res, next) => {
    if(req.user.role !== "admin"){
    res.status(401).json({
       status: 'error',
        message: 'user not authorized'
    })
    return
}
    next()
}

module.exports = isAdmin