import React from 'react'
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'


class App extends React.Component{
  state = {
    ninjas: [
      {name: "Maleeha", age: 21, belt: "Black", id: 1},
      {name: "Lydia", age: 20, belt: "Yellow", id: 2},
      {name: "Nicole", age: 21, belt: "Purple", id: 3}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random()
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id 
    })
    this.setState({ ninjas: ninjas})
  }

  render(){
    return(
      <>
      <h1>Welcome</h1>
      <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
      <AddNinja addNinja={this.addNinja} />
      </>
    )
  }
}

export default App;
