import React from 'react';
import { addFeature } from '../actions/addedFeaturesAction'
import { connect } from 'react-redux'

const AdditionalFeature = props => {
  return (
    <li>
      <button onClick={ () => props.addFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default connect( null, {addFeature}) (AdditionalFeature);

