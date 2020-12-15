import React from 'react'
import Ninjas from './Ninjas'


class App extends React.Component{
  state = {
    ninjas: [
      {name: "Maleeha", age: 21, belt: "Black", id: 1},
      {name: "Lydia", age: 21, belt: "Yellow", id: 2},
      {name: "Nicole", age: 21, belt: "Purple", id: 3}
    ]
  }


  render(){
    return(
      <>
      <h1>Welcome</h1>
      <Ninjas ninjas={this.state.ninjas} />
      </>
    )
  }
}

export default App;
