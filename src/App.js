import React from 'react';

import './App.css';
import Title from './components/title'
import Tasks from './components/tasks'

class App extends React.Component{
  constructor(){
    super()

    this.state={
      newTask:'',
      tasks:[]
    }
  }
  handleTaskChange=(e) =>{
    this.setState({
      newTask:e.target.value
    })
  }
  handleSubmit=(e) =>{
    e.preventDefault();
    let newTasks = this.state.tasks;
    newTasks.push(this.state.newTask)
    this.setState({
      newTask: "",
      tasks: newTasks
    })
  }
  handleDelete = (id) => {
    let newTasks = this.state.tasks;
    newTasks.splice(id, 1)
    this.setState({
      tasks: newTasks,
    })
  }

  render(){
    return (
       <div className="container">
            <Title/>
            <form onSubmit={this.handleSubmit}>
               <input type="text" onChange={this.handleTaskChange} value={this.state.newTask} className="new-task"/>
            </form>

            {
               this.state.tasks.map((task, id) =>
                  <Tasks key={id} valuee={task} handleDelete={this.handleDelete}/>
               )
            }
       </div>
       
    )
  }
}

export default App;
