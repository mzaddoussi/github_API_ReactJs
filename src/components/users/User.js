import React, { Component } from 'react'


export class User extends Component {
    
    render() {

        const { avatar_url, login } = this.props.user

        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={avatar_url} alt="" />
                    <div className="card-body">
                        <h3 className="card-title">{login}</h3>
                        <p className="card-text">
                            <button className="btn btn-warning profile">
                                <a href={ `https://github.com/${login}` } target="_blank">
                                    Profile
                                </a>
                            </button>
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}

export default User
