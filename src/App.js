import React, { Component } from 'react';
import Greeting from './components/greeting'
import Introduction from './components/introduction'

class App extends Component {
  render() {
    return (
      <div className="App">
      <table >
            <tr>
              <th>Greeting Column</th>
              <th>Introduction Column</th>
            </tr>
            <tr>
              <td><Greeting />></td>
              <td><Introduction name='Z'/></td>
            </tr>

        </table>
      </div>
    );
  }
}

export default App;
