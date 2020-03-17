import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    console.log('MAIN_props', this.props);
    return (
      <div className="section-main">
        <div className="section-main">
          <div className="container-main">
            <div className="header-block">
              <div className="container-flex-col">
                <h1 className="heading-brand">Sayer</h1>
                <h5 className="heading-brand-small">
                  World&#x27;s most user time waster
                </h5>
              </div>
            </div>

            <ul>
              {this.props.itemsList.map(item => (
                <ul key={item.id}>
                  <div className="section-main">
                    <div className="container-main">
                      <div className="item-block">
                        <div className="item-text"> {item.text} </div>
                        <div className="container-item-controls">
                          <Link
                            to={{
                              pathname: `/comments/${item.id}`,
                              propsSearch: item.id,
                            }}
                            className="item-circle"
                          >
                            <div className="item-text white">
                              {this.props.commentsList.length > 0
                                ? this.props.commentsList.length
                                : '+'}
                            </div>
                          </Link>

                          <button
                            onClick={() => this.props.deleteItem(item.id)}
                            className="item-delete-pink"
                          >
                            <div className="item-text white">Delete</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              ))}
            </ul>

            <div>
              <div className="add-item-block">
                <div className="item-circle-add">
                  <div>
                    <Link to="/NewItem">
                      <div className="item-text-plus white">+</div>{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
