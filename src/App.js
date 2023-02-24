import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import Prompt01 from './components/pages/Prompt01'
import Prompt02 from './components/pages/Prompt02'
import Prompt03 from './components/pages/Prompt03'


export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/prompt01" component={ Prompt01 } />
                    <Route path="/prompt02" component={ Prompt02 } />
                    <Route path="/prompt03" component={ Prompt03 } />
                   
                </Switch>
                
            </div>
        </Router>
    )
}

