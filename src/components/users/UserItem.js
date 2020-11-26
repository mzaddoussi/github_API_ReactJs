import React, { Component } from 'react'
import axios from 'axios'
import User from './User'

export class UserItem extends Component {

    state = {
        user: {}
    }

    componentDidMount() {
        const login = this.props.match.params.login
        axios.get(`https://api.github.com/users/${login}`)
            .then(response => {
                this.setState({
                    user: response.data
                })
            })
    }

    render() {
        const { user } = this.state
        return (
            <div className="container">
                <User user={user} />
            </div>
        )
    }
}

export default UserItem
