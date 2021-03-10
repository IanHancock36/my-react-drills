//Create an app where there is an array of data on state that is 
//then shown on the DOM as a list. The array of data can be as simple 
//as an array of strings. The list can be as simple as a list of <h2> elements.

import React, { Component } from 'react'

export default class Array3 extends Component {
    constructor(props){
        super(props)
        this.state = ['pizza','tacos','soda','burritos']
    }
    render() {
        let foodtoDisplay = this.state.map((element,) =>{
            return<h2 key={element}> {element}</h2>
        })
        return (
            <div className="App"> 
            {foodtoDisplay}
                
            </div>
        )
    }
}
