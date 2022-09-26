import React, {Component} from "react"
import './option-card.css'

class OptionCard extends Component{
    state = {
        cardTitle: this.props.input[0],
        cardIcon: "somelink",
        cardDescription: this.props.input[1]
    }

    render(){
        return(
            <div className = "container">
                <p className="CardTitle" style={{  color: "rgba(2, 100, 180, 1)" }}>{this.state.cardTitle}</p>
                <p className="CardTitle description">{this.state.cardDescription}</p>
            </div>
        )
    }
}

export default OptionCard