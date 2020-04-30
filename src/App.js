import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      comment: '',
    };
    autoBind(this);
  }

  addToItemsList(e) {
    if (this.state.e !== '') {
      var newItem = {
        text: e,
        id: Date.now(),
        comments: [],
      };
    }

    this.state.itemsList.push(newItem);

    this.setState({
      itemsList: this.state.itemsList,
    });
  }

  addToCommentsList(e, id) {
    if (this.state.e !== '') {
      var newComment = {
        text: e,
      };
    }
    this.state.itemsList.map((i) => {
      if (i.id == id) {
        i.comments.push(newComment);
      }
    });
    this.setState({
      itemsList: this.state.itemsList,
    });
  }

  deleteItem(id) {
    const updatedItemsList = this.state.itemsList.filter(
      (item) => item.id !== id
    );
    this.setState({
      itemsList: updatedItemsList,
    });
  }

  render() {
    console.log('APP__STATE', this.state);
    return (
      <div>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Main
                  itemsList={this.state.itemsList}
                  commentsList={this.state.commentsList}
                  deleteItem={this.deleteItem}
                />
              )}
            />
            <Route
              exact
              path="/newItem"
              render={() => <NewItem addToItemsList={this.addToItemsList} />}
            />
            <Route
              exact
              path="/comments/:id"
              render={() => (
                <Comments
                  addToCommentsList={this.addToCommentsList}
                  itemsList={this.state.itemsList}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
