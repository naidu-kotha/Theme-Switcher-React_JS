// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {theme: false}

  changeTheme = () => {
    this.setState(prevState => ({theme: !prevState.theme}))
  }

  render() {
    const {theme} = this.state
    const buttonTheme = theme ? 'button-dark' : 'button-light'
    const text = theme ? 'Dark Mode' : 'Light Mode'
    const card = theme ? 'card-dark' : 'card-light'
    const color = theme ? 'text-white' : 'text-dark'
    return (
      <div className="container">
        <div className={`card-container ${card}`}>
          <h1 className={`heading ${color}`}>Click To Change Mode</h1>
          <button
            type="button"
            className={`button ${buttonTheme}`}
            onClick={this.changeTheme}
          >
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
