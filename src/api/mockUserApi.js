import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
var user = {
    username: 'JohnSmith',
    password: 'password123',
    email: 'johnSmith@gmail.com'
}

var users = [user];

class AuthorApi {
    static getFirstUser() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, user));
            }, delay);
        });
    }
    //login(username, password);
    static login(username, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, delay);
        });
    }
    // static getUser(int index) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(Object.assign([], users[index]));
    //         }, delay);
    //     });
    // }
}

export default AuthorApi;