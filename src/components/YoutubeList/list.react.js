import * as R from 'ramda';
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { onFetchYoutuber } from '../../pages/App/actions/index';

const List = ({ title, className, onClick }) => (
  <li onClick={onClick} className={className}>
    {title}
  </li>
);

const mapDispatchToProps = {
  onFetchYoutuber
};

export default compose(
  connect(null, mapDispatchToProps),
  withHandlers({
    onClick: ({ _id, title, onFetchYoutuber }) => event => {
      axios({
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        url: `api/youtuber/${_id}`
      }).then(response => {
        const { items } = R.path(['data', 'payload'], response);
        const { snippet, statistics } = R.path([0], items);
        onFetchYoutuber({
          snippet,
          statistics
        });
      });
    }
  })
)(List);
