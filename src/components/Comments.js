import React, {Component} from 'react';

class Comments extends Component {
  render() {
    return (

      <body className="body">
        <div className="section-main">
          <div className="container-main">
            <div className="header-block">
              <div className="container-flex-row">
                <div className="item-circle">
                  <div className="item-text white">⟵</div>
                </div>
                <h2 className="heading-item">First item with customized long title</h2>
              </div>
            </div>
            <div className="item-details-block">
              <div className="container-flex-row">
                <div className="item-square"></div>
                <p className="common-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
            </div>
            <div className="item-details-block">
              <div className="container-flex-row">
                <div className="item-square pinked"></div>
                <p className="common-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
            </div>
            <div className="item-new-comment-block">
              <div className="container-flex-row">
                <div className="input-item">
                  <div className="input-text">New comment goes here...</div>
                </div>
                <div className="item-circle">
                  <div className="item-text white">⟵</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>

    );
  }
}

export default Comments;
