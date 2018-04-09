import config from '../config'

export default class AuthService {

  static async register(username, password, email) {
    // TODO make response validation
    let res = await AuthService.fetch('api/v1/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        email
      })
    });
    AuthService.setToken(res.token)
  }


  static async login(username, password) {
    // TODO make response validation
    let res = await AuthService.fetch('api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      })
    });
    AuthService.setToken(res.token)
  }


  static loggedIn() {
    const token = AuthService.getToken();
    return !!token
  }


  static setToken(idToken) {
    localStorage.setItem('token', idToken)
  }

  static getToken() {
    return localStorage.getItem('token')
  }

  static logout() {
    localStorage.removeItem('token');
  }

  static async fetch(url, options) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    if (AuthService.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + AuthService.getToken()
    }

    let res = await fetch(`${config.BACKEND_URL}/${url}`, {
      headers,
      ...options
    });
    return res.json()
  }
}