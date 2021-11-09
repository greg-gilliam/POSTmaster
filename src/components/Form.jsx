import React, { Component } from 'react';
import MethodOnInput from './MethodOnInput';

function Form({ onSubmit, onInput, urlInput, jsonInput }) {
  const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="urlInput">Put your URL here:</label>
      <input
        id="urlInput"
        name="urlInput"
        value={urlInput}
        onChange={onInput}
        placeholder="URL"
        aria-label="urlInput"
      ></input>

      {methods.map((method) => (
        <MethodOnInput method={method} key={method} onInput={onInput} />
      ))}

      <button aria-label="submitButton">Submit</button>

      <textarea
        name="jsonInput"
        value={jsonInput}
        placeholder="Raw JSON Content"
        onChange={onInput}
      ></textarea>
    </form>
  );
}

export default Form;
