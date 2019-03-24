import React, {Component} from "react";
import "./ButtonsPanel.css";
class ButtonsPanel extends Component {

    resetOrReinitCounter = (flag) => {
        //console.log(flag);
    this.props.resetCounterValue(flag);
}



    clickAddButton = () => {
        this.changeCounterValue();
       }

       clickAddButton = () => {
        this.changeCounterValue() ;
       }

    render() {
        return(
            <div className="buttons-panel">
            <button onClick={this.props.changeCounterValue}>add1</button>
            <button onClick={() => { this.resetOrReinitCounter(0) }}>Reset</button>
            <button onClick={() => {this.resetOrReinitCounter(1) } }>ReInit</button>
            <button onClick={() => {this.resetOrReinitCounter(2) } }>ReInit2</button>
            </div>
        )
    }

}

export default ButtonsPanel;