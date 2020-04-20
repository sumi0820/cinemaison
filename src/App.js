import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import {store} from './store/store';
// import { ReactReduxFirebaseProvider } from "react-redux-firebase";


import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Dashboard from './components/dashboard/Dashboard'
import About from './components/dashboard/About'
import ReviewDetail from './components/review/ReviewDetail'
import SignIn from './components/auth/SignIn'
import CreateReview from './components/review/CreateReview'
import MyPage from './components/mypage/MyPage'
import Landing from './components/searchMovies/Landing'
import Movie from './components/searchMovies/Movie'

const app = {
  paddingBottom:'100px',
  minHeight: '100vh',
  display: 'block',
  position: 'relative',
}


class App extends Component {
  
    render() {
      return (
        // <Provider store={store}>
        <BrowserRouter>
          <div className="App" style={app}>
            <Nav />
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/about' component={About} />
              <Route path='/review/:id' component={ReviewDetail} />
              <Route path='/signin' component={SignIn} />
              <Route path='/create' component={CreateReview} />
              <Route path='/search' component={Landing} />
              <Route path='/mypage' component={MyPage} />
              <Route exact path='/movie/:id' component={Movie} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>

        // </Provider>
    )
  }
}

export default App;
