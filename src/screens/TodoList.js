import React from 'react'
import Todo from '../components/Todo'

export default class TodoList extends React.Component {

    state = {
        first: "this is my first state",
        checked: false,
        listOfTodo: ["Makan", "winter club", "learn react", "tidur"],
        newTodo: '',

    }

    componentDidMount(){
        console.log(this);
    }

    onSubmit = () => {
        let currentTodo = this.state.listOfTodo;
        currentTodo.push(this.state.newTodo);
        this.setState({
            listOfTodo: currentTodo,
            newTodo: '',
        })
    }

    render(){
        return(
            <div
                style={{backgroundColor: 'lightblue', height:'100vh', width:'100vw'}}
            >
                <div
                    style={styles.div1}
                >
                    <h1>This is my Todo List</h1>
                    <div>
                        <div 
                            style={{
                                display:'flex',
                                justifyContent:'center',
                                alignItems: 'center',
                            }}
                        >
                            <form>
                                <label>
                                    What do you want to do today?
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={this.state.newTodo}
                                        placeholder= "add new todo please.."
                                        onChange={(event)=>{
                                            console.log(event);
                                            let addTodo = event.target.value;
                                            this.setState({newTodo: addTodo})
                                        }}
                                        style={{
                                            margin:10,
                                        }}
                                    />
                                </label>
                             
                            </form>
                            <button 
                                    onClick = {()=>{
                                        this.onSubmit();
                                    }}                                   
                                >
                                    Add
                                </button>
                        </div>
                        <div
                         style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}
                        >
                            {this.state.listOfTodo.map((todo)=>{
                                return(
                                    <Todo todoName={todo}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


let styles = {
    div1: {
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        padding: 20,
    }

}