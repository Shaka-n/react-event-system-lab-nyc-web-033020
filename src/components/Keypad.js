import React from 'react'
export default class Keypad extends React.Component{
    render(){
        return(
            <div>
                <input type="password" onKeyUp={()=>console.log('Entering password...')}></input>
            </div>
        )
    }
}