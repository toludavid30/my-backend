const user = {
    name: "John Doe",
    isLoggedIn: true,
    role: "user"
};

const isAdmin = (req, res, next) => {
    if(user.role !== "admin"){
    res.status(401).json({
        status: 'error',
        message: 'user not authorized'
    })
    return
}
    next()
}

module.exports = isAdmin