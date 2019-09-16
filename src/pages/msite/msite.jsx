import React, { Component } from 'react'
import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import RatingStar from '@/components/common/ratingStar/ratingStar'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import './msite.scss'

class Msite extends Component {

    goHome = () => {
        this.props.history.push('/')
    }

    componentDidMount = () => {
        new Swiper(".swiper-container", {
            pagination: {
                el: '.swiper-pagination'
            },
            loop: true,
        });
    }

    render() {
        return (
            <div>
                <Header title={123} signUp={true} goHome={this.goHome}/>
                <nav className="msite_nav">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide food_types_container">
                                <a href="#/food?geohash=31.22299,121.36025&amp;title=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&amp;restaurant_category_id=239"
                                   className="link_to_food">
                                    <figure>
                                        <img alt="" src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
                                        <figcaption>甜品饮品</figcaption>
                                    </figure>
                                </a>
                                <a href="#/food?geohash=31.22299,121.36025&amp;title=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&amp;restaurant_category_id=239"
                                   className="link_to_food">
                                    <figure>
                                        <img alt="" src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
                                        <figcaption>甜品饮品</figcaption>
                                    </figure>
                                </a>
                                <a href="#/food?geohash=31.22299,121.36025&amp;title=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&amp;restaurant_category_id=239"
                                   className="link_to_food">
                                    <figure>
                                        <img alt="" src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
                                        <figcaption>甜品饮品</figcaption>
                                    </figure>
                                </a>
                                <a href="#/food?geohash=31.22299,121.36025&amp;title=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&amp;restaurant_category_id=239"
                                   className="link_to_food">
                                    <figure>
                                        <img alt="" src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
                                        <figcaption>甜品饮品</figcaption>
                                    </figure>
                                </a>
                                <a href="#/food?geohash=31.22299,121.36025&amp;title=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&amp;restaurant_category_id=239"
                                   className="link_to_food">
                                    <figure>
                                        <img alt="" src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
                                        <figcaption>甜品饮品</figcaption>
                                    </figure>
                                </a>
                                <a href="#/food?geohash=31.22299,121.36025&amp;title=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&amp;restaurant_category_id=239"
                                   className="link_to_food">
                                    <figure>
                                        <img alt="" src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
                                        <figcaption>甜品饮品</figcaption>
                                    </figure>
                                </a>
                                <a href="#/food?geohash=31.22299,121.36025&amp;title=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&amp;restaurant_category_id=239"
                                   className="link_to_food">
                                    <figure>
                                        <img alt="" src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
                                        <figcaption>甜品饮品</figcaption>
                                    </figure>
                                </a>
                                <a href="#/food?geohash=31.22299,121.36025&amp;title=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&amp;restaurant_category_id=239"
                                   className="link_to_food">
                                    <figure>
                                        <img alt="" src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
                                        <figcaption>甜品饮品</figcaption>
                                    </figure>
                                </a>

                            </div>

                            <div className="swiper-slide food_types_container">
                                <a href="#/food?geohash=31.22299,121.36025&amp;title=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&amp;restaurant_category_id=239"
                                   className="link_to_food">
                                    <figure>
                                        <img alt="" src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
                                        <figcaption>luosifeng</figcaption>
                                    </figure>
                                </a>
                            </div>

                            <div className="swiper-slide food_types_container">
                                <a href="#/food?geohash=31.22299,121.36025&amp;title=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&amp;restaurant_category_id=239"
                                   className="link_to_food">
                                    <figure>
                                        <img alt="" src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
                                        <figcaption>sanbeiji</figcaption>
                                    </figure>
                                </a>
                            </div>
                        </div>

                        <div className="swiper-pagination"></div>
                    </div>
                </nav>
                <div className="shop_list_container">
                    <header className="shop_header">
                        <svg className="shop_icon">
                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#shop"></use>
                        </svg>
                        <span className="shop_header_title">  附近商家</span>
                    </header>
                    <div className="shoplist_container">
                        <ul>
                            <li className="shop_li">
                                <section>
                                    <img src="//elm.cangdu.org/img/16cefdfeb5152833.jpg" alt="" className="shop_img" />
                                </section>
                                <RatingStar rating={4.4}></RatingStar>
                            </li>
                            <li className="shop_li">
                                <section>
                                    <img src="//elm.cangdu.org/img/16cefdfeb5152833.jpg" alt="" className="shop_img" />
                                </section>
                                <RatingStar rating={4.4}></RatingStar>
                            </li>
                            <li className="shop_li">
                                <section>
                                    <img src="//elm.cangdu.org/img/16cefdfeb5152833.jpg" alt="" className="shop_img" />
                                </section>
                                <RatingStar rating={4.4}></RatingStar>
                            </li>
                            <li className="shop_li">
                                <section>
                                    <img src="//elm.cangdu.org/img/16cefdfeb5152833.jpg" alt="" className="shop_img" />
                                </section>
                                <RatingStar rating={4.4}></RatingStar>
                            </li>
                            <li className="shop_li">
                                <section>
                                    <img src="//elm.cangdu.org/img/16cefdfeb5152833.jpg" alt="" className="shop_img" />
                                </section>
                                <RatingStar rating={4.4}></RatingStar>
                            </li>
                            <li className="shop_li">
                                <section>
                                    <img src="//elm.cangdu.org/img/16cefdfeb5152833.jpg" alt="" className="shop_img" />
                                </section>
                                <RatingStar rating={4.4}></RatingStar>
                            </li>
                            <li className="shop_li">
                                <section>
                                    <img src="//elm.cangdu.org/img/16cefdfeb5152833.jpg" alt="" className="shop_img" />
                                </section>
                                <RatingStar rating={4.4}></RatingStar>
                            </li>
                            <li className="shop_li">
                                <section>
                                    <img src="//elm.cangdu.org/img/16cefdfeb5152833.jpg" alt="" className="shop_img" />
                                </section>
                                <RatingStar rating={4.4}></RatingStar>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Msite