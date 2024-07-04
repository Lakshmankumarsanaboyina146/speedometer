// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelearation = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecelearation = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-bg">
        <h1 className="speedometer-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer-image"
          alt="speedometer"
        />
        <h1 className="speed-reading">Speed is {speed}mph</h1>
        <p className="speed-desc">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="acceleration-button"
            onClick={this.onAccelearation}
          >
            Accelerate
          </button>
          <button className="brakes-button" onClick={this.onDecelearation}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
