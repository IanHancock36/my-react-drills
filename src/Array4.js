import React, { Component } from 'react'

export default class Array4 extends Component {
    constructor(props){
        super(props)
        this.state = ['fish','gummybears','tacos','sushi']
    }
    render() {
        let foods = this.state.map((element) =>{
            return <h2  key={element}> {element}</h2>
        })
        return (
            <div className = "App">
                {foods}
                
            </div>
        )
    }
}
