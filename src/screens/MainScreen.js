//Class Component
import React from 'react';
import Box from '../components/Box.js';

let myName = "Violin Yapputri"

export default class MainScreen extends React.Component {
    
    nameList = ["Violin", "Jason", "Dayu", "Asa", "Nadhira"];
    colorList = ["red",'blue','green','pink','yellow']
    render(){
        return(
            
            <div style={style.center}>
                <div
                style={{
                    width: '100vw',
                    height: '50vh',
                    backgroundColor: 'lightblue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                }}
                >
                    <div
                    style={{
                    width: '80%',
                    height: '80%',
                    backgroundColor: 'white',
                    borderRadius: 50,
                    padding: 15,
                    color: 'lightseagreen'
                    }}
                    >
                    <h1>Hello!</h1>
                    <h1>Welcome to my first React Website</h1>
                    </div>
                </div>
                <div
                 style={style.div1}
                >
                    {this.nameList.map((name, index)=>{
                        return(
                            <Box myName={name} color={this.colorList[index]}/>
                         
                        )
                    })
                    
                    }
                     
                </div>

                <div
                 style={style.div1}
                >
                    <div
                        style={{
                            backgroundColor: 'grey',
                            flex: 2,
                            height: 150,
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: 'blue',
                            flex: 2,
                            height: 150,
                        }}
                    />
                </div>
            </div>
        )
    }

}

let style = {
    div1: {
        backgroundColor: 'lightpink',
       // height: '50vh',
        width: '100vw',
        padding: 20,
        display: 'flex',
    },
    div2: {
        backgroundColor: 'grey',
       // height: '50vh',
        width: '100vw',
        padding: 20,
        margin: 10,
        display: 'flex',
    },
    center:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
    }
}
