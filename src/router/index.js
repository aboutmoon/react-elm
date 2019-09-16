import React, { Component } from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'

import order from '@/pages/order/order'
import profile from '@/pages/profile/profile'
import search from '@/pages/search/search'
import msite from '@/pages/msite/msite'
import Svg from '@/components/common/svg/svg'

export default class RouterConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Svg />
                <Switch>
                    <Route path="/profile" exact component= {profile}/>
                    <Route path="/msite" component= {msite}/>
                    <Route path="/order"  component= {order}/>
                    <Route path="/search" component= {search}/>
                    <Redirect exact from='/' to='/profile'/>
                </Switch>
            </HashRouter>
        )
    }
}