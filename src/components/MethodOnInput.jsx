import React, { Component } from 'react';

function MethodOnInput({ method, onInput }) {
  return (
    <>
      <input
        id={method}
        type="radio"
        name="method"
        value={method}
        onChange={onInput}
      ></input>
      <label htmlFor={method}></label>
    </>
  );
}

export default MethodOnInput;
