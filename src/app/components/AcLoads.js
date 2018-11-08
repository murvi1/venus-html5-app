import { h, Component } from "preact"
import NumericValue from "./NumericValue"

class AcLoads extends Component {
  render(props, state) {
    return (
      <div className="metric metric--small">
        <img src="./images/icons/ac.svg" className="metric__icon" />
        <div className="metric__value-container">
          <p className="text text--medium">AC Loads</p>
          <div className="metric__values">
            <NumericValue value={props.voltage.phase1} unit="V" />
            <NumericValue
              value={props.current.phase1 ? props.current.phase1 + props.current.phase2 + props.current.phase3 : null}
              unit="A"
              precision={1}
            />
            <NumericValue
              value={props.power.phase1 ? props.power.phase1 + props.power.phase2 + props.power.phase3 : null}
              unit={"W"}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default AcLoads
