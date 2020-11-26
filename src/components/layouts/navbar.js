import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link pull-right" to="/users">users </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default navbar
