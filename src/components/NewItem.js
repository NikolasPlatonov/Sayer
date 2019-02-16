import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NewItem extends Component {
  render() {
    return (

      <body className="body">
        <div className="section-main">
          <div className="container-main">
            <div className="header-block">
              <div className="container-flex-row">
                <Link to="/">
                  <div className="item-circle">
                    <div className="item-text white">⟵</div>
                  </div>
                </Link>
                <h2 className="heading-item">Create new item</h2>
              </div>
            </div>
            <div className="item-new-block">
              <div className="container-flex-row">
                <div className="input-item">
                  <div className="input-text">New item title...</div>
                </div>
                <div className="item-circle">
                  <div className="item-text white">&gt;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>

    );
  }
}

export default NewItem;
