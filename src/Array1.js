// import React, { Component } from 'react'

// export default class Array1 extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             food: ['sushi','pizza','beer','tacos','eggrolls']
//         }
//     }
//     render() {
//         let foodstoDisplay = this.state.food.map((element,index)=> {
//             return <h2 key ={index}>{element}</h2>
//         })
//         return <div className = 'Array1'>{foodstoDisplay}</div>
//     }
// }
       
import React, { Component } from 'react'

export default class Array1 extends Component {
    constructor(props){
        super(props)
        this.state = {food:['sushi','pizza','chicken','beer']
    }
}
    render(){
                let foodsDisplayed = this.state.food.map((element,index)=> {
                    return <h2 key ={index}>{element}</h2>
                })
        return (
            <div className ="Array1">{foodsDisplayed}
                
            </div>
        )
    }
}



