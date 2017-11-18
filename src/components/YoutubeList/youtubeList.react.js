import React from 'react';
import './style.css';

import Ul from './ul.react';
import List from './list.react';

const YoutubeList = ({ lists }) => (
  <Ul className="list-group">
    {lists.map((list, index) => (
      <List
        key={`${list.title}-${index}`}
        className="list list-group-item"
        _id={list._id}
        title={list.title}
      />
    ))}
  </Ul>
);

export default YoutubeList;
