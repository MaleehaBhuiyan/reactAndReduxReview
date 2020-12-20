import React from 'react'
import './Ninjas.css'

class Ninjas extends React.Component{
    render(){
        const { ninjas, deleteNinja } = this.props
        const ninjaList = ninjas.map(ninja =>{
            if (ninja.age > 20){
                return (
                    <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
                    </div>
                ) 
            } else {
                return null
            }
        })
        return(
            ninjaList
        )
    }
}

export default Ninjas