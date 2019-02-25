/* eslint-disable linebreak-style */
import React from 'react';
import { connect } from 'react-redux';  

const UserHeader = ({ user }) => <div className="header">{user ? user.username : 'Loading...'}</div>;

const mapStateToProps = (state, ownProps) => ({ user: state.users.find(user => user.id === ownProps.userId) });

export default connect(mapStateToProps)(UserHeader);