import React from 'react'

// function Greet(){
//     return <h1>Hello world</h1>
// }

const Greet =({name,heroName}) =>{
    return(
        <div>
            <h1>
                hello {name} a.k.a {heroName}
            </h1>
            {/* {props.children} */}
        </div>
    )
 
}
export default Greet