import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admins User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Htet Aung',
        email: 'htet@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Aung Khant',
        email: 'aung@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users