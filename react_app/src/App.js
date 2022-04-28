import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameLIst from './components/NameList';
import Increment from './components/IncDecCounter';
import IncDecCounter from './components/IncDecCounter';
import Stylesheet from './components/Stylesheets';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';



class App extends Component {
  render() {
    return (
      <div className="App">
        <FragmentDemo/>
        {/* <LifecycleA/> */}
        {/* <Form/> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <IncDecCounter/> */}
        {/* <NameLIst/> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Greet name="Sharda" heroName="Batman">
          <p>this is children props</p>
        </Greet>
        <Greet name="suman" heroName="Batman2">
          <button>Action</button>
        </Greet> */}
        {/* <Greet name="sharma" heroName="Batman3" /> */}
        {/* <welcome name="chanda" heroName="Woman" />
        <welcome name="chandani" heroName="Woman1" />
        <welcome name="chandan" heroName="WOman2" /> */}


        {/* <Hello/> */}
      </div>
    );
  }
}

export default App;
