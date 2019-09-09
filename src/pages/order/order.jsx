import React, { Component } from 'react'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'

class Order extends Component {
    render() {

        const bb = "kaka"

        return (
            <div>
                <Header title="wahaha" userInfo={bb} />
                <div>
                    order
                </div>
                <Footer />
            </div>
        )
    }
}

export default Order