import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.scss'

class Reviwes extends Component{

    getUrlImage = (image) => {
        return `https://image.tmdb.org/t/p/w185_and_h278_bestv2${image}`
    }

    render(){

        let data = this.props.reviews[this.props.id]
        return(
            <section className="reviews">
                <div className="title">*Reviews</div>
                {
                    !data.error ?  
                        data.reviews.map( i => (
                            <div className="review">
                                <div className="author">
                                    <span className="title">Author:</span>
                                    <span>{i.author}</span>
                                </div>
                                <div className="content">
                                    <span className="title">Content:</span>
                                    <span>{i.content}</span>
                                </div>                                
                                <div className="url">
                                    <span className="title">Site of review:</span>
                                    <a href={i.url} target="_blank">
                                        Go to Site
                                    </a> 
                                </div>
                                <hr/>
                            </div>
                        ))
                    :                     
                    'malo'
                }
            </section>
        )
    }
}

const mapStateToProps = ({ reviews }) => ({
    reviews
})


const mapDispatchToProps = dispatch => ({    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reviwes)