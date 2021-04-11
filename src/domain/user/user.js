class User {
    constructor({id, username, email, password}) {
        this._id = id;
        this._username = username;
        this._email = email;
        this._password = password;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        if (!id) throw new Error('Field id required');
        this._id = id;
    }

    get username() {
        return this._username;
    }

    set username(username) {
        if (!username) throw new Error('Field username required');
        this._username = username;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        if (!email) throw new Error('Field email required');
        this._email = email;
    }

    get password() {
        return this._password;
    }

    set password(password) {
        if (!password) throw new Error('Field password required');
        this._password = password;
    }
}

module.exports = User;