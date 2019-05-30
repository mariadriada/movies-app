import React, { Component } from 'react'
import { connect } from 'react-redux'

import { appLoad, loadMovies } from '../../actions'
import Layout from '../Layout'

class Movies extends Component{

    componentDidMount(){
        this.props.loadMovies()
    }

    render(){
        return(
            <Layout>Hello Movie!</Layout>
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