import React, { Component } from 'react';

function History({ history }) {
  return (
    <section name="history-container">
      {history.map((item) => {
        <div>
          <h3>{item.method}</h3>
          <p>{item.url}</p>
        </div>;
      })}
    </section>
  );
}

export default History;
