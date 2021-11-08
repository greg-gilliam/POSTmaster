import React, { Component } from 'react';
import style from './styles/POSTmasterContainer.css';

class POSTmasterContainer extends Component {
  state = {
    loading: true,
    urlInput: '',
    method: '',
    history: [],
    response: '',
    jsonInput: '',
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  handleChange = ({ target }) => {
    this.setState({ [this.name]: target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { urlInput, method, jsonInput, history } = this.state;
    this.setState({
      loading: true,
      method,
      history: [...history, { url: urlInput, method: method }],
    });
    const response = await fetchRequest(method, urlInput, jsonInput);
    this.setState({ response, loading: false });
  };
  render() {
    const { urlInput, method, jsonInput, history, response } = this.state;
    return (
      <section className={style.container}>
        <Header className={style.header} />
        <Form
          className={style.form}
          urlInput={urlInput}
          method={method}
          jsonInput={jsonInput}
          onInput={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <History className={style.history} history={history} />
        <Display className={style.display} response={response} />
      </section>
    );
  }
}

export default POSTmasterContainer;
