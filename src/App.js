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
      itemsList: [],
      input: '',
      inputComment: '',
      commentsList: []
    }

    autoBind(this);
  }

  addToItemsList(inputFromNewItem) {
    console.log('LIST ARR', this.state.itemsList);
    console.log('inputFromNewItem', inputFromNewItem);

    this.state.itemsList.push(inputFromNewItem);
    this.setState({
      itemsList: this.state.itemsList,
      input: ''
    })
  }

  addToCommentsList(inputComment) {
    console.log('commentsLIST', this.state.commentsList);
    console.log('inputCommtnt', inputComment);

    this.state.commentsList.push(inputComment);
    this.setState({
      commentsList: this.state.commentsList,
      inputComment: ''
    })
  }

  render() {

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Main itemsList={this.state.itemsList} />} />
            <Route path="/NewItem" render={() => <NewItem addToItemsList={this.addToItemsList} />} />
            <Route path="/Comments" render={() => <Comments addToCommentsList={this.addToCommentsList} commentsList={this.state.commentsList} />} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;