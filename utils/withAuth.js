import React, {Component} from 'react'
import AuthService from './AuthService'
import Router from 'next/router'


export default function withAuth(AuthComponent) {
  return class Authenticated extends Component {

    componentDidMount() {
      if (!AuthService.loggedIn()) Router.push('/sign-in')
    }

    render() {
      return (
        <AuthComponent {...this.props}  auth={AuthService} />
      )
    }
  }
}
