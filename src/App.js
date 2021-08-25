import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Homepage from './containers/homepage/homepage';
import FullNewsPage from './containers/fullnewspage/fullnewspage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/fullnews/:newslink" exact component={FullNewsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
