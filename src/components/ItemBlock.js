import React, {Component} from 'react';

class ItemBlock extends Component {
  render() {
    return (

      <body className="body">
        <div className="section-main">
          <div className="container-main">
            <div className="item-block">
              <div className="item-text">Second Item</div>
              <div className="container-item-controls">
                <div className="item-circle">
                  <div className="item-text white">42</div>
                </div>
                <div className="item-delete-pink">
                  <div className="item-text white">Delete</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>

    );
  }
}

export default ItemBlock;
