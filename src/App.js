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

  addToItemsList(e) {
    console.log('ITEMS LIST', this.state.itemsList);
    console.log('INPUT ITEM', e);

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


  addToCommentsList(e) {
    console.log('commentsLIST', this.state.commentsList);
    console.log('inputCommtnt', e);

    this.state.commentsList.push(e);
    this.setState({
      commentsList: this.state.commentsList,
      inputComment: ''
    })
  }

  deleteItem(key) {
    console.log('DELETING', key);
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