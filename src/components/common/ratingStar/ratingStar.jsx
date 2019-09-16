import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './ratingStar.scss'

class RatingStar extends Component{
    static propTypes = {
        rating: PropTypes.number
    }
    render() {
        const style = {
            width: this.props.rating * 2 / 5 + 'rem'
        }
        return (
            <div className="rating_container">
                <section className="star_container">
                    {
                        [1,2,3,4,5].map(function (index) {
                            return (
                                <svg className="grey_fill">
                                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#star"></use>
                                </svg>
                            )
                        })
                    }
                </section>
                <div className="star_overflow" style={style}>
                    <section className="star_container">
                        {
                            [1,2,3,4,5].map(function (index) {
                                return (
                                    <svg className="orange_fill">
                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#star"></use>
                                    </svg>
                                )
                            })
                        }
                    </section>

                </div>
            </div>
        )
    }
}

export default RatingStar