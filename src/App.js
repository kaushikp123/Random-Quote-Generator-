import './App.css';
import React, { Component } from 'react'
import axios from 'axios';
class App extends Component {
    state = {
        advice: ''
    };
    componentDidMount(){
        this.fecthAdvice();
    }
    fecthAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip; 
            //console.log(advice);
            this.setState({advice});
        })
        .catch((error) => {
            console.log(error);
        })
    }
    render() {
        const {advice} = this.state;
        return (
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='button' onClick={this.fecthAdvice}>
                        <span>Give Me Advice!!</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App
