import React, { Component } from 'react'
import { connect } from 'react-redux'

import Reviews from '../Reviews'
import Layout from '../Layout'
import './styles.scss'

class MovieDetails extends Component{

    getUrlImage = (image) => {
        return `https://image.tmdb.org/t/p/w185_and_h278_bestv2${image}`
    }

    render(){        
        let data = []
        let id = 0       
        let error = false
        if (JSON.stringify(this.props.details)=='{}')
            {error = true}
        else{
            id = this.props.match.params.id
            console.log('id', id)
            data = this.props.details[id]
        }       
        return(
            <Layout title="Movie Details">
            <div className="movie-details">
                {
                    !error ?
                   
                        <article>
                            <div class="img">
                                <img src={this.getUrlImage(data.details.backdrop_path)} />
                            </div>
                            <section className="status">
                                <span className="title">Status:</span>
                                <span>{data.details.status}</span>
                            </section>
                            <section className="original-title">
                                <span className="title">Original title:</span>
                                <span>{data.details.original_title}</span>
                            </section>                           
                            <section className="genres">
                                <span className="title">Genres: </span>
                                { data.details.genres.map(g=>(
                                        <span>
                                            {g.name} -
                                        </span>
                                    ))
                               }
                            </section>
                            <section className="homepage">  
                               <span className="title">Movie homepage: </span>                             
                               <a href={data.details.homepage} target="_blank">Go to Homepage</a>
                            </section>
                            <section className="overview">
                                <div className="title">*Overview: </div>
                                <span>{data.details.overview}</span>
                            </section>
                            

                            <Reviews id={id} />
                        </article>                      
                   
                     :                    
                     <div className="error">Error: No selected movie to get details!</div>
                }
            </div>
            </Layout>
        )
    }
}

const mapStateToProps = ({ details, favourites }) => ({
    details,
    favourites
})


const mapDispatchToProps = dispatch => ({    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieDetails)