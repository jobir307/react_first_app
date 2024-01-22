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

/* const User = (props) => {
  return (
    <div>
      <h1>Mening ismim: {props.firstName}, sharifim: {props.lastName}</h1>
      <a href={props.link}>Link</a>
    </div>
  )
}
 */


import {Component, Fragment} from "react";

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 20,
      age: ''
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
    console.log(name);
    this.setState({
      age: e.target.value
    })
  }

  render() {
    const {firstName, lastName, link} = this.props
    const {age, counter} = this.state

    return (
      <div className="w-50 m-auto">
        <div className="border p-3 mt-5">
          <h1>Mening ismim: {firstName}, sharifim: {lastName}, yoshim: {this.state.age}</h1>
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
        </div>
      </div>
    )
  }
}

const App = () => {
  return (
    <Fragment>
      <User firstName="Jobir" lastName="Shukrullayev" link="https://www.youtube.com/watch?v=jbUKm-TVkow" />
      <User firstName="Xasan" lastName="Shokirov" link="https://www.youtube.com/watch?v=Y6o5CJV-SSk" />
    </Fragment>
  )
}


export default App