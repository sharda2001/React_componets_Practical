import React, { Component } from "react";
import ChildComponent from "./ChildComponent";


class ParentComponent extends Component{

    constructor(props){
        super(props)

        this.setState={
            parentName: 'parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
        alert(`Hello ${this.setState.parentName}`)
    }


    render(){
        return(
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent