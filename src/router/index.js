import React, { Component } from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'

import order from '@/pages/order/order'
import profile from '@/pages/profile/profile'
import search from '@/pages/search/search'
import takeout from '@/pages/takeout/takeout'

export default class RouterConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/profile" exact component= {profile}/>
                    <Route path="/takeout" component= {takeout}/>
                    <Route path="/order"  component= {order}/>
                    <Route path="/search" component= {search}/>
                    <Redirect exact from='/' to='/profile'/>
                </Switch>
            </HashRouter>
        )
    }
}