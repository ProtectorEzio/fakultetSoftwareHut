import React from 'react';
import './App.css';
import {Switch,Route,BrowserRouter } from 'react-router-dom';
import Movie from './views/movie/Movie';
import SearchMovie from './views/searchMovie/SearchMovie';
import Home from './views/home/Home';
import TodoPanel from './views/todoPanel/TodoPanel';
import { Provider } from 'react-redux';
import store from './store';
import Liked from './views/liked/Liked';

const App = () =>{
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route path="/movie/:id" component={Movie} />
            <Route path="/liked" component={Liked}/>
            <Route path="/search" component={SearchMovie} />
            <Route path="/todo" component={TodoPanel} />
            <Route path="/" component={Home} />
          </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
