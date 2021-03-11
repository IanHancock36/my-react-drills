// import React, { Component } from 'react'

// export default class Array5 extends Component {
//     constructor(props){
//         super(props)
//         this.state ={foods:
//             ['sushi','coffee','tacos','burritos']}
//     }
    
//     render() {
//         let foodDisplay = this.state.foods.map((element,index)=>{
//             return <h2 key={index}>{element}</h2>
//         })
//         return (
//             <div>
//                 {foodDisplay}
//             </div>
//         )
//     }
// }

import React, { Component } from 'react'
import './App.css'

export default class Array5 extends Component {
    constructor(props){
        super(props)
        this.state = {food: 
        ['taco','sushi','wine']}
    }
    
    render() {
        let foodDisplay = this.state.food.map((element, index)=>{
            return <h2 key={index}>{element}</h2>
        })
        return (
            <div className='array'>
           <h2 className="food">{foodDisplay}</h2> 
            </div>
        )
    }
}


