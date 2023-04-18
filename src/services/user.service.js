export const userService = {
    getUser,
    signup,
    addMove,
    lastMoves,
    deposit
}

function getUser() {
    return JSON.parse(localStorage.getItem('user'))
}

function signup(name) {
    const user = {
        name,
        coins: 100,
        moves: []
    }
    updateUser(user)
    return user
}

function addMove(amount , contact = null) {
    const user = JSON.parse(localStorage.getItem('user'))
    const move = {
        toId: contact ? contact._id : '',
        to: contact ? contact.name : 'Me',
        at: Date.now(),
        amount
    }
    user.moves = [ move , ...user.moves]
    console.log('user', user)
    updateUser(user)
    return user
}

function deposit(amount) {
    const user = JSON.parse(localStorage.getItem('user'))
    user.coins += +amount
    updateUser(user)
    return user
}

function updateUser(user) {
    localStorage.setItem('user' , JSON.stringify(user))
}

function lastMoves(moves , id) {
    if(!id) return moves.splice(moves.length - 4)
    else return moves.filter(move => move.toId === id)
}