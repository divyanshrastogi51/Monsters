import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import '../Monst';
import { monsts } from '../Monst';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsts: monsts,
      searchfield: ''
    }
  }



  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { monsts, searchfield } = this.state;
    const filteredRobots = monsts.filter(monst =>{
      return monst.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !monsts.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1  className='f3'> Monsters_In_Us</h1>
          <h3  className='f6'>
            <a href="https://divyansh-rastogi.netlify.app" rel="noopener noreferrer" target="_blank" >By Divyansh Rastogi
            </a> 
          </h3>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList monsts={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;