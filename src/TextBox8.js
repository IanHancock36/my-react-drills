import React, { Component } from 'react'

export default class TextBox8 extends Component {
    constructor(props){
        super(props)
        this.state ={
            Textbox: ""
        }
 
 }
 handleChange = event =>{
    this.setState =({Textbox: event.target.value })
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="hi" onChange={this.handleChange}/>
                <p>{this.state.Textbox}</p>
                
            </div>
        )
    }
}
