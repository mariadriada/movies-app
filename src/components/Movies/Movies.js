import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { loadMovies, addFavourites, removeFavourites } from '../../actions'
import Layout from '../Layout'
import Movie from '../Movies/Movie'
import './styles.scss'

class Movies extends Component{

    componentDidMount(){
        // Load data of movies 
        this.props.loadMovies()
    }

    // Pass history to Character component {child}
    getChildContext() {
        return {
            history: this.props.history,
            addFavourites: this.props.addFavourites,
            removeFavourites: this.props.removeFavourites
        }
    }

    render(){

        const { isLoading, movies } = this.props

        return(
            <Layout title="Movies">
                <div className="grid-movies" >                              
                    { isLoading ? 'loading' : movies.map(i=>(
                        <Movie 
                            id={i.id} 
                            title={i.title} 
                            overview={i.overview}
                            image={i.poster_path}
                            obj={i}
                            >
                        </Movie>
                        ))                                       
                    }
                </div>               
            </Layout>
        )
    }
}

// Define properties to pass to child
Movies.childContextTypes = {
    history: PropTypes.object,
    addFavourites: PropTypes.func,
    removeFavourites: PropTypes.func
}

const mapStateToProps = ({ movies, isLoading }) => ({
    movies,
    isLoading
})


const mapDispatchToProps = dispatch => ({
    loadMovies: () => dispatch(loadMovies()),
    addFavourites: (id, data) => dispatch(addFavourites(id, data)),
    removeFavourites: (id) => dispatch(removeFavourites(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movies)