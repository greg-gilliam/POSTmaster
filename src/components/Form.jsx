import React, { Component } from 'react';

function Form() {
  return (
    <form>
      <label htmlFor="urlInput">Put your URL here:</label>
      <input id="urlInput" name="urlInput" placeholder="URL"></input>
      <label htmlFor="GET">GET</label>
      <input id="GET" type="radio" name="selector"></input>
      <label htmlFor="POST">POST</label>
      <input id="POST" type="radio" name="selector"></input>
      <label htmlFor="PUT">PUT</label>
      <input id="PUT" type="radio" name="selector"></input>
      <label htmlFor="PATCH">PATCH</label>
      <input id="PATCH" type="radio" name="selector"></input>
      <label htmlFor="DELETE">DELETE</label>
      <input id="DELETE" type="radio" name="selector"></input>

      <button aria-label="submitButton">Submit</button>

      <textarea placeholder="Raw JSON Content"></textarea>
    </form>
  );
}

export default Form;
