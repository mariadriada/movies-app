import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './styles.scss'

class Movie extends Component{
    
    getUrlImage = (image) => {
        return `https://image.tmdb.org/t/p/w185_and_h278_bestv2${image}`
    }

    state = {
        favourite: false
    }

    favourite = () => {       
        this.setState({
            favourite: !this.state.favourite
        })

        if (!this.state.favourite) 
            this.context.addFavourites(this.props.id, this.props.obj)        
        else 
            this.context.removeFavourites(this.props.id)
        
    }

    render(){
        return(
            <div className="movie-card" >
                <img src={this.getUrlImage(this.props.image)} 
                    onClick={()=>{
                    this.context.history.push(`/details/${this.props.id}`)}}
                />                
                <button onClick={()=>this.favourite()} className={
                    this.state.favourite ? 'green' : 'gray'
                }>                   
                    {
                        !this.state.favourite ? 'Add to Favourite' : 'Remove to favourite'
                    }
                </button>
            </div>
        )
    }
}


// Receives history property from parent component
Movie.contextTypes = {
    history: PropTypes.object,
    addFavourites: PropTypes.func,
    removeFavourites: PropTypes.func
}

export default Movie