import React, { Component } from 'react'

export default class App3 extends Component {
    constructor() {
        super();
    
        this.state = {
          filterString: "",
          foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
        };
      }
      handleChange(filter){
          this.setState({filterString : filter})

      }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
