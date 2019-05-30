import React, { Component } from 'react'
import { connect } from 'react-redux'

import { appLoad, loadMovies } from '../../actions'

class Movies extends Component{

    componentDidMount(){
        this.props.loadMovies()
    }

    render(){
        return(
            <div>Hello Movie!</div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    loadMovies: () => dispatch(loadMovies())
})

export default connect(
    null,
    mapDispatchToProps
)(Movies)