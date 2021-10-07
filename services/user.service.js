import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));

export const userService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value },
    login,
    logout,
    dateDiff,
};

function login(username, password) {
    return fetchWrapper.post(`${baseUrl}/authenticate`, { username, password })
        .then(user => {
            // publish user to subscribers and store in local storage to stay logged in between page refreshes
            userSubject.next(user);
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function dateDiff (dateFrom, dateTo) {
    var diff = { TotalMs:  dateTo - dateFrom };
    diff.Days = Math.floor(diff.TotalMs / 86400000);
  
    var remHrs = diff.TotalMs % 86400000;
    var remMin = remHrs % 3600000;
    var remS   = remMin % 60000;
  
    diff.Hours        = Math.floor(remHrs / 3600000);
    diff.Minutes      = Math.floor(remMin / 60000);
    diff.Seconds      = Math.floor(remS   / 1000);
    diff.Milliseconds = Math.floor(remS % 1000);
    return diff;
};

function logout(id) {
    localStorage.removeItem('user');
    userSubject.next(null);
    Router.push('/account/login');
}