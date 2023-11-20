import React from 'react'
import PropTypes from 'prop-types';

export default function PropsValidation(props) {
  return (
    <div>
        <h1>My name is {props.name}</h1>
    </div>
  )
}
PropsValidation.propTypes={name:PropTypes.string}