import React, { Component } from 'react';
import '../App.css';
import autoBind from 'react-autobind';
import { Link } from 'react-router-dom';

class NewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: '',
      itemsList: [],
    };

    autoBind(this);
  }

  handleChange(input) {
    this.setState({
      item: input,
    });
  }

  render() {
    return (
      <div className="container-main">
        <div className="header-block">
          <div className="container-flex-row">
            <Link to="/" className="item-circle">
              <div className="item-text white">⟵</div>
            </Link>
            <h2 className="heading-item">Create new item</h2>
          </div>
        </div>

        <div className="section-main">
          <div className="container-main w-container">
            <div className="item-new-block">
              <div className="container-flex-row">
                <div className="input-item">
                  <input
                    className="input-text"
                    placeholder="New item title..."
                    type="text"
                    value={this.state.item}
                    onChange={(e) => this.handleChange(e.target.value)}
                  />
                </div>
                <button
                  onClick={() =>
                    this.state.item !== ''
                      ? this.props.addToItemsList(this.state.item)
                      : alert('Enter new item!')
                  }
                  className="item-circle"
                >
                  <Link to="/" className="item-circle">
                    <div className="item-text white">&gt;</div>
                  </Link>
                </button>
              </div>
            </div>
            <ul>
              {this.state.itemsList.map((val) => (
                <ul> {val} </ul>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
