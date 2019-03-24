import React, {Component} from "react";
import ButtonsPanel from "./ButtonsPanel"
//import  "./ButtonsPanel.css"
import  "./Counter.css"


class Counter extends Component  {
    constructor(props)  {
        super(props);
        this.state = {
        counterValue: this.props.initValue,
        }
        this.kliknijMnie = this.kliknijMnie.blind(this);

    }

    changeValue = () => {

        this.setState({
            counterValue:parseInt (this.state.counterValue) + 1,
        } )
    }

    resetCounter = (flag) => {

        if (flag == 0) {
            this.setState({
                counterValue: 0
            })
        } else if (flag === 1) {
                this.setState({
                    counterValue: this.props.initValue,
                })
        }  else if (flag == 2) {
            this.setState({
                counterValue: (this.props.initValue*3),
            })
    } 

        //console.log("resetCounter METHOD fo Counter" + flag)
    }


    kliknijMnie () {

    }

    render () {
    return(
    <div className="counter">
    Licznik 
    <span className="value">
            {this.state.counterValue}
    </span>

    <ButtonsPanel changeCounterValue={this.changeValue}
    resetCounterValue={this.resetCounter} />
    <button onClick={this.kliknijMnie}>kliknij mnie</button>
    
    </div>
    )
    }
     
}

export default Counter;

//komponet funkcyjny

// import react from "react";

// const Counter = () => {
//     return(
//         <div className="counster">Licznik</div>
//     )
// }

// export default Counter

