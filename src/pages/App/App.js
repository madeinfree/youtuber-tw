import React from 'react';
import youtuber from '../../data/youtuber';

import Navbar from '../../components/Navbar/navbar.react';
import YoutubeList from '../../components/YoutubeList/youtubeList.react';
import Ground from '../../components/Ground/ground.react';

const App = ({ youtuberState }) => (
  <div>
    <Navbar />
    <Ground />
    <YoutubeList lists={youtuber} />
  </div>
);

export default App;
