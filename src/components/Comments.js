import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import autoBind from 'react-autobind';

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    };

    autoBind(this);
  }

  handleChange(input) {
    return this.setState({
      comment: input,
    });
  }

  render() {
    console.log('!!!!!!', this.props.propsSearch);
    return (
      <div className="body">
        <div className="section-main">
          <div className="container-main">
            <div className="header-block">
              <div className="container-flex-row">
                <Link to="/" className="item-circle">
                  <div className="item-text white">⟵</div>
                </Link>
                <h2 className="heading-item">
                  First item with customized long title
                </h2>
              </div>
            </div>

            <ul>
              {this.props.commentsList.map(comment => (
                <ul key={comment.id}>
                  <div className="item-details-block">
                    <div className="container-flex-row">
                      <div className="item-square pinked"></div>
                      <p className="common-text">{comment.text}</p>
                    </div>
                  </div>
                </ul>
              ))}
            </ul>

            <div className="item-new-comment-block">
              <div className="container-flex-row">
                <div className="input-item">
                  <input
                    className="input-text"
                    placeholder="New comment goes here..."
                    type="text"
                    value={this.state.comment}
                    onChange={e => this.handleChange(e.target.value)}
                  />
                </div>

                <button
                  onClick={() =>
                    this.props.addToCommentsList(this.state.comment)
                  }
                  className="item-circle"
                >
                  <div className="item-text white">⟵</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
