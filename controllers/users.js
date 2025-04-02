const usersList = [
    {
        "id": 1,
        "name": "User 1",
        "email": "user1@example.com"
    },
    {
        "id": 2,
        "name": "User 2",
        "email": "user2@example.com"
    },
    {
        "id": 3,
        "name": "User 3",
        "email": "user3@example.com"
    }
];



const getUsers = (req, res) => {
    let users = usersList
    if(!users){
        res.status(404).json(
            {
                status: 404,
                message: 'there was an error'
            }
        )
    }
    try {
        res.status(202).json(
            {
                message: 'users retrieved',
                users
            }
           ) 
    } catch (error) {
        
    }
}

module.exports = {
    getUsers
}