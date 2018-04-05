export default class AuthService {
  constructor(domain) {
    this.domain = domain;
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
  }

  async register(username, password, email, isDonater, isStreamer) {
    // TODO make response validation
    let res = await this.fetch('/api/v1/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        email,
        isDonater,
        isStreamer
      })
    });
    AuthService.setToken(res.token)
  }


  async login(username, password) {
    // TODO make response validation
    let res = await this.fetch('/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      })
    });
    AuthService.setToken(res.token)
  }


  loggedIn() {
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

  async fetch(url, options) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }

    let res = await fetch(`${process.env.BACKEND_URL}/${url}`, {
      headers,
      ...options
    });
    return res.json()
  }
}