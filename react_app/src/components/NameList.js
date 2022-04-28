import React from "react";


function NameLIst(){
    const names =['bruce', 'clark' ,'diana']
    const persons=[
        {
            id:1,
            name:'suman',
            age:20,
            skill:'React'

        },{
            id:2,
            name:'Sharda',
            age:21,
            skill:React

        },{
            id:3,
            name:'sharma',
            age:23,
            skill:React
        }
    ]

    const personList= persons.map(person => <person key="unique" person={persons}/>)
    return <div>{personList}</div>
}

export default NameLIst