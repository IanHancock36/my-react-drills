import React from 'react'

function Array2() {

    const products = [
        'toothpaste',
        'mouthwash',
        'dental floss'
    ]
    return (
        <div> 
           {products.map((product)=>{
               return <li key ={product}>{product}</li> 
           })}
        </div>
    )
}

export default Array2

 