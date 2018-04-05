import React, {Component} from 'react'
import AuthService from './AuthService.js'
import Router from 'next/router'

export default function withAuth(AuthComponent) {
  const Auth = new AuthService('http://localhost:5000')
  return class Authenticated extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoading: true
      };
    }

    componentDidMount () {
      if (!Auth.loggedIn()) {
        Router.push('/sign-in')

      }
      this.setState({ isLoading: false })
    }

    render() {
      return (
        <AuthComponent {...this.props}  auth={Auth} />
      )
    }
  }
}
