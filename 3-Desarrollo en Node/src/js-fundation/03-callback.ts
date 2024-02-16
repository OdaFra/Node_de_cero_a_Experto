interface User {
    id: number,
    name: string
}

const users: User[] = [
    {
        id: 1,
        name: 'Juan'
    },
    {
        id: 2,
        name: 'Alberto'
    }
]

export function getUserById(id: number, callback: (err?: string, user?: User) => void,) {
    const user = users.find(function (user) {
        return user.id === id
    })
    if (!user) {
        return callback(`Usuario no encontrado ${id}`)
    }

    return callback(undefined, user)
    // console.log({user})
}
// getUserById(1)

// module.exports = {
//     getUserById
// }