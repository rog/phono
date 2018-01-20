/** @jsx h */
import { h, Component } from 'preact'

import { HomeWrapper } from './style'

export default class Home extends Component {
  render () {
    return (
      <HomeWrapper>
        <h1>Home</h1>
        <p>This is the Home component.</p>
      </HomeWrapper>
    )
  }
}
