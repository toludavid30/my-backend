const user = {
    name: "John Doe",
    isLoggedIn: true,
    role: "admin"
};

const isLoggedIn = (req, res, next) => {
    if (!user.isLoggedIn) {
        res.status(401).json({
            status: 'error',
            message: 'user not logged in'
        })
        return
    }
    next()
}

module.exports = isLoggedIn
