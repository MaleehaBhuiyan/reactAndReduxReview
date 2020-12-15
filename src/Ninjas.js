import React from 'react'

class Ninjas extends React.Component{
    render(){
        const { ninjas } = this.props
        const ninjaList = ninjas.map(ninja =>{
            return (
                <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                </div>
            )
        })
        return(
            ninjaList
        )
    }
}

export default Ninjas