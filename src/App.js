import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (

      <body class="body">
        <div class="section-main">
          <div class="container-main">
            <div class="header-block">
              <div class="container-flex-col">
                <h1 class="heading-brand">Sayer</h1>
                <h5 class="heading-brand-small">World&#x27;s most user time waster</h5>
              </div>
            </div>
            <div class="item-block">
              <div class="item-text">First item with customize...</div>
              <div class="item-circle">
                <div class="item-text white">42</div>
              </div>
            </div>
            <div class="item-block">
              <div class="item-text">Second Item</div>
              <div class="container-item-controls">
                <div class="item-circle">
                  <div class="item-text white">42</div>
                </div>
                <div class="item-delete-pink">
                  <div class="item-text white">Delete</div>
                </div>
              </div>
            </div>
            <div class="item-block">
              <div class="item-text">Third item (short one)</div>
              <div class="item-circle">
                <div class="item-text white">19</div>
              </div>
            </div>
            <div class="add-item-block">
              <div class="item-circle-add">
                <div class="item-text-plus white">+</div>
              </div>
            </div>
            <div class="add-item-block">
              <div>
                <div class="text-block">This is some text inside of a div block.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-main">
          <div class="container-main">
            <div class="header-block">
              <div class="container-flex-row">
                <div class="item-circle">
                  <div class="item-text white">⟵</div>
                </div>
                <h2 class="heading-item">First item with customized long title</h2>
              </div>
            </div>
            <div class="item-details-block">
              <div class="container-flex-row">
                <div class="item-square"></div>
                <p class="common-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
            </div>
            <div class="item-details-block">
              <div class="container-flex-row">
                <div class="item-square pinked"></div>
                <p class="common-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
            </div>
            <div class="item-new-comment-block">
              <div class="container-flex-row">
                <div class="input-item">
                  <div class="input-text">New comment goes here...</div>
                </div>
                <div class="item-circle">
                  <div class="item-text white">⟵</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-main">
          <div class="container-main">
            <div class="header-block">
              <div class="container-flex-row">
                <div class="item-circle">
                  <div class="item-text white">⟵</div>
                </div>
                <h2 class="heading-item">Create new item</h2>
              </div>
            </div>
            <div class="item-new-block">
              <div class="container-flex-row">
                <div class="input-item">
                  <div class="input-text">New item title...</div>
                </div>
                <div class="item-circle">
                  <div class="item-text white">&gt;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>

    );
  }
}

export default App;
