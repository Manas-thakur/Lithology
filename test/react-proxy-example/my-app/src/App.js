import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser } from './services/UserService'

class App extends Component {

  state = {
    user: {},
    users: [],
    numberOfUsers: 0,
    loading: false,
    error: null
  }

  createUser = async (e) => {
    try {
      this.setState({ loading: true, error: null });
      await createUser(this.state.user);
      this.setState(prevState => ({
        numberOfUsers: prevState.numberOfUsers + 1,
        user: {},  // Reset form
        loading: false
      }));
      this.getAllUsers(); // Refresh the list
    } catch (error) {
      this.setState({ 
        error: 'Failed to create user',
        loading: false 
      });
    }
  }

  getAllUsers = async () => {
    try {
      this.setState({ loading: true, error: null });
      const users = await getAllUsers();
      this.setState({
        users,
        numberOfUsers: users.length,
        loading: false
      });
    } catch (error) {
      this.setState({ 
        error: 'Failed to fetch users',
        loading: false 
      });
    }
  }

  onChangeForm = (e) => {
      let user = this.state.user
      if (e.target.name === 'firstname') {
          user.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          user.lastName = e.target.value;
      } else if (e.target.name === 'email') {
          user.email = e.target.value;
      }
      this.setState({user})
  }

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreateUser 
                  user={this.state.user}
                  onChangeForm={this.onChangeForm}
                  createUser={this.createUser}
                  >
                </CreateUser>
            </div>
            <div className="col-md-4">
                <DisplayBoard
                  numberOfUsers={this.state.numberOfUsers}
                  getAllUsers={this.getAllUsers}
                >
                </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Users users={this.state.users}></Users>
        </div>
      </div>
    );
  }
}

export default App;
