import React, { Component } from 'react'

export class Search extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            search: '' 
        }
    }

    SearchWord = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    Result = (e) => {
        e.preventDefault()
        if (e.target.value != "") {
            this.props.searchProp(this.state.search)
        }
    }


    render() {
        const {search} = this.state
        return (
            <div>
                <form onSubmit={this.Result}>
                    <input onChange={this.SearchWord} className="form-control mt-5" placeholder="Search Users..." value={search}></input>
                    <button className="btn btn-primary btn-block my-2">Search</button>
                </form>
            </div>
        )
    }
}

export default Search
