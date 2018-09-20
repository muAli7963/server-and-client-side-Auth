import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return <div className="feature" style={{display: 'flex',justifyContent: 'center'}}>
    <h2 style={{
      color: '#4881B2'
    }}>This is the feature!</h2>
    </div>;
  }
}

export default requireAuth(Feature);
