import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <Link to="/"><h1>Reduxstagram</h1></Link>
      </div>
    );
  }
});

export default Main;
