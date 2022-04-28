import React from 'react'

 const Hello=()=>{
    //  return(
    //      <div className="dummyClass">  
    //          <h>hello suman</h>
    //      </div>
    //  )

    return React.createElement(
        'div',
        {id:'hello',className:'dummyClass'},
        React.createElement('h1',null,'Hello suman')
    )
 }

 export default Hello