import React, { useState } from 'react';
import Card from './components/card/card';
import Plus from './components/plus/plus';
import logo from './logo.svg';
import './App.scss';

function App(props) {
  const [state, setState] = useState({
    newCardTitle: '',
    cards: [
      {
        title: 'first card'
      }
    ]
  });

  const onNewCardTitleChange = val => {
    setState(state => ({...state, newCardTitle: val}))
  }

  const onPlusClick = () => {
    setState(state=>{
      state.cards.push({title: state.newCardTitle})
      return { ...state };
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <main className="main">
        <div style={{display: 'flex', 'justifyContent':'center'}}>
          <div className="input">
              <input value={state.newCardTitle} onChange={e=>onNewCardTitleChange(e.target.value)} />
          </div>
          <div onClick={()=>onPlusClick()}>
              <Plus className="" />
          </div>
        </div>
        <div className="cards">
        { state.cards.map((card, index) => <Card title={card.title} key={index} /> ) }
        </div>
      </main>
    </div>
  );
}

export default App;
