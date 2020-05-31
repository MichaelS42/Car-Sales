import React from 'react';
import { removeFeature } from '../actions/removeFeaturesAction'
import { connect } from 'react-redux'

const AddedFeature = props => {
  return (
    <li>
      <button onClick={ () => props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect( null, {removeFeature}) (AddedFeature);
