import React, { Component } from 'react';
import ReactJson from 'react-json-view';

function Display({ response }) {
  return (
    <section aria-label="results">
      <ReactJson src={response} />
    </section>
  );
}

export default Display;
