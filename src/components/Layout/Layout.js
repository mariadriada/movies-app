import React, { Component } from 'react'

import './styles.scss'

class layout extends Component{
    render(){
        return(
            <div className="layout" >
                { this.props.children }
            </div>
        )        
    }
}

export default layout
 