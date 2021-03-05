import React, { Component } from 'react'

export default class Array2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            people: ['jim','dwight','creed','michael','pam','stanley']
        };
    }
    render() {
        let peopletoDisplay = this.state.people.map((element,index)=>{
            return <h2 key= {index}> {element}</h2>
        })
        return (
            <div className = 'Array2'> {peopletoDisplay}
                
            </div>
        )
    }
}
