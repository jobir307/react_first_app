/* import './App.css';
import Button from '../button/Button';
import Field from '../field/Field';
import Header from '../header/Header';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Field />
      <Button />
    </div>
  );
}

export default App; */

/* 
import { Fragment, useState, useEffect } from "react"
const User = (props) => {
  const [state, setState] = useState({
    count: 0,
    isLogin: false
  })

  useEffect(() => {
    document.title = `Counter: ${state.count}`
    console.log('effect');
  }, [])

  return (
    <div className="w-50 m-auto mb-4">
      <div className="border p-3 mt-5">
        <h1>Mening ismim: {props.firstName}, sharifim: {props.lastName}</h1>
        <a href={props.link}>Link</a>
        <div className="d-flex justify-content-center">
          <button onClick={() => setState({count: state.count + 1})} className="btn btn-success">Increment</button>
          <button onClick={() => setState({count: state.count - 1})} className="btn btn-warning mx-2">Decrement</button>
          <button onClick={() => setState({count: 0})} className="btn btn-info mx-2">Restart</button>
          <p>{state.count}</p>
        </div>
        { state.isLogin ? <p className="text-center mt-3">Login</p> : null }
        <div className="d-flex justify-content-center">
          <button className="btn-outline-primary" onClick={onToggleLogin}>Toggle</button>
        </div>
      </div>
    </div>
  )
}
 */

/* 
import {Component, Fragment, useState} from "react";

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 20,
      age: '',
      isLogin: false
    }
  }

  incrementHandler = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
  }

  decrementHandler = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }))
  }

  restartHandler = () => {
    this.setState({
      counter: 0
    })
  }

  ageHandler = (e, name) => {
    this.setState({
      age: e.target.value
    })
  }

  onToggleLogin = () => {
    this.setState(prevState => ({ isLogin: !prevState.isLogin }))
  }

  // ----- Lifecycle methods -----
  componentDidMount(){
    console.log('mounting');
  }
  
  componentDidUpdate(){ // pageda qanaqadir o'zgarish bo'lsa ishlaydi
    console.log('updated mounting');
    document.title = `Counter: ${this.state.counter}`
  }

  componentWillUnmount(){ // pagedan biror narsa o'chsa ishlaydi
    console.log('Unmounted');
  }

  render() {
    const {firstName, lastName, link} = this.props
    const {age, counter} = this.state

    return (
      <div className="w-50 m-auto">
        <div className="border p-3 mt-5">
          <h1>Mening ismim: {firstName}, sharifim: {lastName}, yoshim: {age}</h1>
          <a href={link}>Mening kanalim</a>
          <div className="mt-2">
            <button onClick={this.incrementHandler} className="btn btn-success">Increment</button>
            <button onClick={this.decrementHandler} className="btn btn-warning mx-2">Decrement</button>
            <button onClick={this.restartHandler} className="btn btn-info mx-2">Restart</button>
            <p>{counter}</p>
          </div>
          <form action="">
            <span>Yoshingiz: </span>
            <input type="text" onChange={(e) => this.ageHandler(e, 'sammi')} className="form-control"/>
          </form>
          {
            this.state.isLogin ? <p>LOGIN USER</p> : null
          }
          <button onClick={this.onToggleLogin} className="btn btn-secondary m-2">Toggle login</button>
        </div>
      </div>
    )
  }
}
*/
/* 
const App = () => {
  const [isDisplay, setIsDisplay] = useState(false)

  const deleteDisplayHandler = () => {
    setIsDisplay(!isDisplay)
  }

  return (
    <Fragment>
      <User firstName="Jobir" lastName="Shukrullayev" link="https://www.youtube.com/watch?v=jbUKm-TVkow" />
      {
        isDisplay ? <User firstName="Xasan" lastName="Shokirov" link="https://www.youtube.com/watch?v=Y6o5CJV-SSk" /> : null
      }
      <button onClick={deleteDisplayHandler} className="btn btn-secondary m-2">Toggle user</button>
    </Fragment>
  )
}


export default App */

import { Fragment, useState, useCallback } from "react"
import CounterItem from "../counter-item/CounterItem"
const User = () => {
  const [counter, setCounter] = useState(10)
  const [active, setActive] = useState(true)

  const onIncrement = () => setCounter(counter => counter + 1)

  const colors = {
    color: active ? 'green' : 'red',
    fontWeight: 'bold'
  }

  const onToggle = () => setActive(prevState => !prevState)
  const counterGenerate = useCallback(() => {
    return new Array(counter).fill('').map((_, idx) => `Counter number ${idx + 1}`)
  }, [counter])

  return (
    <div className="w-50 m-auto mb-4">
      <div className="border p-3 mt-5">
        <p className="text-center" style={colors}>{counter}</p>
        <div className="d-flex justify-content-center">
          <button onClick={onIncrement} className="btn btn-success">Increment</button>
          <button onClick={onToggle} className="btn btn-primary mx-2">Toggle</button>
        </div>
        <CounterItem counterGenerate={counterGenerate} />
      </div>
    </div>
  )
}

const App = () => {

  return (
    <Fragment>
      <User firstName="Jobir" lastName="Shukrullayev" link="https://www.youtube.com/watch?v=jbUKm-TVkow" />
    </Fragment>
  )
}


export default App