import React, { Component } from 'react'
import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"

class TakeOut extends Component {
    render() {
        return (
            <div>
                <Header title="Take Out" userInfo="luoxiangning" />
                <div>TakeOut</div>
                <Footer />
            </div>
        )
    }
}

export default TakeOut