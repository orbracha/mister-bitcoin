export default {
    loadUser,
    setUser,
    addMove
}
const KEY = 'user';

function loadUser() {
    var user = JSON.parse(localStorage.getItem(KEY))
    if(!user){
        return null;
    }
    return user;
}

function setUser(user) {
    user = JSON.stringify(user);
    localStorage.setItem(KEY, user)
}

function addMove(contact, amount) {
    var move = {
        to: contact.name,
        at: Date.now(),
        amount
    }
    var user = loadUser();
    user.move.push(move);
    setUser(user);
    return user;
}