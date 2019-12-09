import React, { Component } from 'react';
import './card.scss';
import Plus from '../plus/plus';

export default class Card extends Component {
    state = {
        newTask: '',
        tasks: [],
        isCardDone: false
    }

    onTaskChange(val){
        this.setState({ ...this.state, newTask: val });
    }

    onPlusClick(){
        this.setState(state=> {
            state.tasks.push({ text: state.newTask });
            state.newTask = '';
            return state;
        });
    }

    onTaskCheck(index){
        this.setState(state => {
            state.tasks[index].done = state.tasks[index].done ? false : true;
            if(state.tasks.every(task => task.done)){
                state.isCardDone = true;
            }
            return state;
        })
    }

    getTasksMap(){
        return this.state.tasks.map((task, index) => 
        (<li key={index} className="task">
            <input onClick={()=>this.onTaskCheck(index)} type="checkbox" />
            { task.text }
        </li>));
    }

    render(){
        return (<div className={`card ${this.state.isCardDone ? 'done' : ''}`}>
            <div className="card-title">
                { this.props.title || 'כותרת' }
            </div>
            <div className="card-header">
                <div className="input">
                    <input 
                        disabled={this.state.isCardDone} 
                        value={this.state.newTask} 
                        onChange={e=>this.onTaskChange(e.target.value)} 
                    />
                </div>
                { this.state.isCardDone ? null : 
                    (<div onClick={()=>this.onPlusClick()}>
                        <Plus className="" />
                    </div>)
                }
            </div>
            <div className="card-tasks">
                <ul>
                    { this.getTasksMap() }
                </ul>
            </div>
        </div>)
    }
}

