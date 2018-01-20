/** @jsx h */
import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import {TopBar, Nav} from './style'

export default class Header extends Component {
  render () {
    return (
      <TopBar class={''}>
        <h1>phono</h1>
        <Nav>
          <Link activeClassName={''} href='/'>Home</Link>
          <Link activeClassName={''} href='/profile'>Me</Link>
          <Link activeClassName={''} href='/profile/rog'>rog</Link>
        </Nav>
      </TopBar>
    )
  }
}
