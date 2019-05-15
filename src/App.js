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
      commentsList: [],
      comment: ''
    }

    autoBind(this);
  }

  addToItemsList(e) {
    if (this.state.e !== "") {
      var newItem = {
        text: e,
        key: Date.now()
      }
    };

    this.state.itemsList.push(newItem);

    this.setState({
      itemsList: this.state.itemsList,
      input: ''
    })
  }

  addToCommentsList(e, itemKey) {
    if (this.state.e !== "") {
      var newComment = {
        text: e,
        key: Date.now(),
        itemID: itemKey
      }
    };

    this.state.commentsList.push(newComment);

    this.setState({
      commentsList: this.state.commentsList,
      comment: ''
    })
  }

  getItemKey(array, search) {
    var i = array.length;
    while (i--) {
      if (array[i].key === search) {
        return array[i].value;
      }
    }
  }

  deleteItem(key) {
  }

  render() {

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Main itemsList={this.state.itemsList} commentsList={this.state.commentsList} deleteItem={this.deleteItem} />} />
            <Route path="/NewItem" render={() => <NewItem addToItemsList={this.addToItemsList} />} />
            <Route path="/Comments" render={() => <Comments addToCommentsList={this.addToCommentsList} commentsList={this.state.commentsList} />} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;