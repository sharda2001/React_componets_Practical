// import React from "react";

// // import "./styl"

// export default class Apps extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             count: 0,
//             isIncrement:true,
//         };
//     }

//     changeValue =() =>{
//         this.setState({
//             count:this.state.isIncrement ? this.state.count + : this.state.count
//         },() => {
//             if(this.state.count === 0 || this.state.count ===5){
//                 this.setState({
//                     isIncrement: !this.state.isIncrement,
//                 })
//             }

//         }
//         )
//     }
//     render(){
//         return(
//             <div className="Apps"
//             >
//                 <h1>{this.state.count}h1</h1>
//                 <button onClick={this.changeValue}>
//                     {this.state.isIncrement ? 'increment' : 'decrement'}</button>
//             </div>
//         );
//     }
// }