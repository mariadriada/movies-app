import React, { Component } from 'react'

import './styles.scss'

class layout extends Component{
    render(){
        return(
            <div className="layout" >
                <div className="title">
                        <h1> {this.props.title} </h1>
                </div>
                { this.props.children }
            </div>
        )        
    }
}

export default layout
 