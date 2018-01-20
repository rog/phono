/** @jsx h */
import { h, Component } from 'preact'
import { ProfileWrapper } from './style'

export default class Profile extends Component {
  state = {
    time: Date.now(),
    count: 10
  }

  componentDidMount () {
    this.timer = setInterval(this.updateTime, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  // update the current time
  updateTime = () => {
    this.setState({ time: Date.now() })
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  // Note: `user` comes from the URL, courtesy of our router
  render ({ user }, { time, count }) {
    return (
      <ProfileWrapper>
        <h1>Profile: {user}</h1>
        <p>This is the user profile for a user named { user }.</p>
        <div>Current time: {new Date(time).toLocaleString()}</div>
        <p>
          <button onClick={this.increment}>Click Me</button>
          {' '}
          Clicked {count} times.
        </p>
      </ProfileWrapper>
    )
  }
}
