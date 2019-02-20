import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NewItem from './components/NewItem';
import Main from './components/Main';
import autoBind from 'react-autobind';
import Comments from './components/Comments';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: []
    }

    autoBind(this);
  }

  addToList(inputFromNewItem) {
    console.log('LIST ARR', this.state.itemsList);
    console.log('inputFromNewItem', inputFromNewItem);

    this.state.itemsList.push(inputFromNewItem);
    this.setState({
      itemsList: this.state.itemsList,
    })
  }

  render() {

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Main itemsList={this.state.itemsList} />} />
            <Route path="/NewItem" render={() => <NewItem addToList={this.addToList} />} />
            <Route path="/Comments" component={Comments} />} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;