import React, { Component } from 'react'
import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"

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

                    </header>
                    <div className="shoplist_container">
                        <ul>
                            <li className="shop_li">
                                <div><img src="/img/164ad0b6a3917599.jpg"
                                                                 className="shop_img" /></div>
                                <div className="shop_right">
                                    <header className="shop_detail_header"><h4
                                                                                                  className="shop_title ellipsis premium">效果演示</h4>
                                        <ul className="shop_detail_ul">
                                            <li className="supports">保</li>
                                            <li className="supports">准</li>
                                            <li className="supports">票</li>
                                        </ul>
                                    </header>
                                    <h5 className="rating_order_num">
                                        <section className="rating_order_num_left">
                                            <section className="rating_section">
                                                <div className="rating_container">
                                                    <section className="star_container">
                                                        <svg className="grey_fill">
                                                            <use
                                                                 xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                 xlink:href="#star"></use>
                                                        </svg>
                                                        <svg className="grey_fill">
                                                            <use
                                                                 xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                 xlink:href="#star"></use>
                                                        </svg>
                                                        <svg className="grey_fill">
                                                            <use
                                                                 xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                 xlink:href="#star"></use>
                                                        </svg>
                                                        <svg className="grey_fill">
                                                            <use
                                                                 xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                 xlink:href="#star"></use>
                                                        </svg>
                                                        <svg className="grey_fill">
                                                            <use
                                                                 xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                 xlink:href="#star"></use>
                                                        </svg>
                                                    </section>
                                                    <div className="star_overflow"
                                                         style="width: 1.88rem;">
                                                        <section className="star_container">
                                                            <svg className="orange_fill">
                                                                <use
                                                                     xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                     xlink:href="#star"></use>
                                                            </svg>
                                                            <svg className="orange_fill">
                                                                <use
                                                                     xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                     xlink:href="#star"></use>
                                                            </svg>
                                                            <svg className="orange_fill">
                                                                <use
                                                                     xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                     xlink:href="#star"></use>
                                                            </svg>
                                                            <svg className="orange_fill">
                                                                <use
                                                                     xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                     xlink:href="#star"></use>
                                                            </svg>
                                                            <svg className="orange_fill">
                                                                <use
                                                                     xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                     xlink:href="#star"></use>
                                                            </svg>
                                                        </section>
                                                    </div>
                                                </div>
                                                <span className="rating_num">4.7</span></section>
                                            <section className="order_section">
                                                月售106单
                                            </section>
                                        </section>
                                        <section className="rating_order_num_right"><span
                                            className="delivery_style delivery_left">蜂鸟专送</span>
                                            <span
                                                  className="delivery_style delivery_right">准时达</span></section>
                                    </h5>
                                    <h5 className="fee_distance"><p
                                                                                       className="fee">
                                        ¥20起送
                                        <span className="segmentation">/</span>
                                        配送费约¥5
                                    </p> <p className="distance_time"><span
                                    >1382.4公里</span> <span
                                                                                 className="segmentation">/</span> <span
                                        className="order_time">14小时44分钟</span></p></h5>
                                </div>
                            </li>
                            <li className="shop_li"></li>
                            <li className="shop_li"></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Msite