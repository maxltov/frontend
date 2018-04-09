import React from 'react'
import AuthService from '../utils/AuthService'
import Router from 'next/router'
import Page from '../layouts/barebone'

export default class PassJwt extends React.Component {

  componentDidMount() {
    AuthService.setToken(this.props.url.token);
    Router.push('/')
  }
  render () {
    return <Page/>
  }
}