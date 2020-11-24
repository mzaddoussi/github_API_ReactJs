import axios from 'axios';
import User from './User';
import React, { Component } from 'react';
import Search from './Search'

export class Users extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users: [],
        }
    }

    getusers = () => {
        axios.get("https://api.github.com/users")
        .then(response => {
            this.setState({
                users: response.data
            })
        })
    }

    SearchUsers = (data) => {
        axios.get(`https://api.github.com/search/users?q=${data}`)
            .then(res => {
                this.setState({
                    users: res.data.items
                })
            })
    }

    componentDidMount() {
        this.getusers()
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Search searchProp={this.SearchUsers} />
                    <div className="row cards">
                        {this.state.users.map(user => (
                            <div className="col-3" key={user.id}>
                                <User user={user} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Users
