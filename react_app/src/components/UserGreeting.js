import React, { Component } from "react";

class userGreeting extends Component{

    constructor(props){
        super(props)

        this.State={
            isLoggedIn:true
        }
        
    }
    render(){

        // 4.short circuit operator
        return this.State.isLoggedIn && <div>welcome suman</div>

        // // conditional rendering
        // // 3. ternary conditional operator
        // return this.State.isLoggedIn ?(
        //     <div>Welcome suman</div>
        // ):(
        //     <div>welcome guest</div>
        // )


        // // conditional rendering
        // // 2. Element variable
        // let message
        // if(this.State.isLoggedIn){
        //     message=<div>Welcome suman</div>
        // }else{
        //     message=<div>welcome guest</div>
        // }


        // //  conditional rendering
        // // 1. if else
        // return <div>{message}</div>

        // if(this.State.isLoggedIn){
        //     return <div>welcome suman</div>
        // }else{
        //     return <div>welcome guest</div>
        // }

        // return(
        //     <div>
        //         <div>Welocome suman</div>
        //         <div>welcome guest</div>
        //     </div>
        // )
        
    }
}

export default userGreeting;