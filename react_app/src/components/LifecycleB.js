import React, { Component } from "react";

class LifecycleB extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'vishwas'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecylceB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecylcleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }

    render(){
        console.log('LifecycleB render')
        return <div>Lifecycle B</div>
        return(
            <div>

            </div>
        )
    }
}

export default LifecycleB