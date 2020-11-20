import axios from 'axios';
import React, { Component } from 'react';

export class Users extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users: [
                // {
                //     login: "mojombo",
                //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                //     url: "https://api.github.com/users/mojombo",
                //     repos_url: "https://api.github.com/users/mojombo/repos",

                // },
                // {
                //     login: "defunkt",
                //     avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
                //     url: "https://api.github.com/users/defunkt",
                //     repos_url: "https://api.github.com/users/defunkt/repos",
                // },
                // {
                //     login: "pjhyett",
                //     avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
                //     url: "https://api.github.com/users/pjhyett/repos",
                //     repos_url: "https://api.github.com/users/defunkt/repos",
                // },
             ]
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

    componentDidMount() {
        this.getusers()
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row cards">
                        {this.state.users.map((user, index) => (
                            <div className="col-3">
                                <div key={index} className="card text-left">
                                    <img className="card-img-top" src={user.avatar_url} alt="" />
                                    <div className="card-body">
                                        <h3 className="card-title">{user.login}</h3>
                                        <p className="card-text">
                                            <button className="btn btn-warning profile">
                                                <a href={ `https://github.com/${user.login}` } target="_blank">
                                                    Profile
                                                </a>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Users
