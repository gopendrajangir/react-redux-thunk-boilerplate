/* eslint-disable linebreak-style */
import React from 'react';
import { connect } from 'react-redux';  
import { fetchPostsAndUsers } from 'actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    const { fetchPostsAndUsersAction } = this.props;
    fetchPostsAndUsersAction();
  }

  renderList() {
    const { posts } = this.props;
    return posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <UserHeader userId={post.userId} />
            </div>
          </div>
        </div>
      );
    })
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPostsAndUsersAction: fetchPostsAndUsers })(PostList);