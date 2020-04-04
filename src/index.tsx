import React from 'react';
import ReactDOM from 'react-dom';
import classe from './test.module.css';

class App extends React.Component<{}, {}> {
  render(){
    return (
      <div className={classe.Test}>
        sadsadsa
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));