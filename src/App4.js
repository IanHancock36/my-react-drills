import React, { Component } from 'react'

export default class App4 extends Component {
    constructor(){
        super()
        this.state ={
            filterString: "", 
            foods: ['fish','gummybears','tacos','sushi']
        }
    }
    handleChange (filter){
        this.setState({filterString :filter})
    }

    render() {
        let foodstoDisplay = this.state.foods.filter((element,index)=>{
            return element.includes(this.state.filterString)
        })
        .map((element,index) =>{
            return <h2 key={index}>{element}</h2>
        })
        return (
            <div>
                <input onChange = {event => this.handleChange(event.target.value)} type="text"/>
            {foodstoDisplay}
            </div>
        )
    }
}
