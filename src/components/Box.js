//Class Component
import React from 'react';


export default class Box extends React.Component {
    /*
    componentDidMount(){
        console.log(this);
    } */

    render(){
        
        return(
            <div 
                style={{
                    backgroundColor: 'white',
                    height: '200px',
                   // width: '300px',
                    padding: 10,
                    margin: 10,
                    borderRadius: 20,
                    color: this.props.color,
                    flex: 1,
                }}
            >
                <h3>Halo nama saya {this.props.myName}</h3>
                <p>This is a component</p>
            </div> 
        )
    }

}
