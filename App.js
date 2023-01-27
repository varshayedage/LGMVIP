
import Users from "./cards";
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users_data: [],
      loading: false
    };    
    this.updateState = this.updateState.bind(this);
  }

  
  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2000
    );
  }
  render() {
    return (<>
      <nav>
        <div className="App">
          
              <h1>Amazon
              
              <button onClick={this.updateState}>Get Users</button>
           
              </h1>              
            </div>      
                
      </nav>
      <div className="box">
        <Users loading={this.state.loading} users={this.state.users_data} />
      </div>
    </>
    )
  }
}

export default App;