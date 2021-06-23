import React,{Component} from "react";
import Navbar from "./Components/Navbar";
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Posts from "./Components/Posts";

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/:post_id' component={Posts}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
