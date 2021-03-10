import React, { Component } from 'react'

export default class TextBox1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            Text: ""
        }
      }
      handleChange = event => {
        this.setState = ({Text: event.target.value})
    }
    
    render() {
        return (
            <div>
                <input type= "text" placeholder= "whoa " onChange ={this.handleChange} />
                <p>{this.state.Text}</p>
                
            </div>
        )
    }
}
