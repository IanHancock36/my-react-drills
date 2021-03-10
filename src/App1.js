// import React, { Component } from 'react'

// export default class App1 extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             message: ""
//         }
//     }
//     handleChange = event => {
//         this.setState({message:event.target.value})
//     }
//     render() {
//         return (
//             <div>
//                 <input type ="text" placeholder ="whoah" onChange ={this.handleChange} />
//                 <p>{this.state.message} </p>
//             </div>
//         )
//     }
// }

import React, { Component } from 'react'

export default class App1 extends Component {
    constructor(props){
        super(props)
        this.state={
            message: ""
        }
    }
    handleChange = event=>{
        this.setState({message: event.target.value})

    }
    render() {
        return (
            <div>
                <input type="text" placeholder="whoah" onChange ={this.handleChange}/>
                <p>{this.state.message}</p>
            </div>
        )
    }
}
