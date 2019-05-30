import React, { Component } from 'react'
import { connect } from 'react-redux'

import { appLoad } from '../../actions'

class Movies extends Component{

    componentDidMount(){
        this.props.appLoad()
    }

    render(){
        return(
            <div>Hello Movie!</div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    appLoad: () => dispatch(appLoad())
})

export default connect(
    null,
    mapDispatchToProps
)(Movies)