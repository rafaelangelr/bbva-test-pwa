const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
let users = require('data/users.json');

export const usersRepo = {
    getAll: () => users,
    getById: id => users.find(x => x.id.toString() === id.toString()),
    find: x => users.find(x),
    create,
    update,
    currentLogin,
    lastLogin,
    delete: _delete
};

function create(user) {
    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();
    users.push(user);
    saveData();
}

function update(id, params) {
    const user = users.find(x => x.id.toString() === id.toString());
    user.dateUpdated = new Date().toISOString();
    Object.assign(user, params);
    saveData();
}

function currentLogin(id) {
    const user = users.find(x => x.id.toString() === id.toString());
    user.currentLogin = new Date().toISOString();
    Object.assign(user);
    const userUpdated = saveData();
}

function lastLogin(id, date) {
    const user = users.find(x => x.id.toString() === id.toString());
    user.lastLogin = date;
    Object.assign(user);
    const userUpdated = saveData();
}

function _delete(id) {
    users = users.filter(x => x.id.toString() !== id.toString());
    saveData();    
}

function saveData() {
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
}