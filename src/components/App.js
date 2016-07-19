import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Header from '../components/common/Header';

const App = (props) => {
  return (
    <div>
      <Header/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
