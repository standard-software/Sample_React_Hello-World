const React = require('react');
const ReactDOM = require('react-dom');

class HelloWorld extends React.Component {
  render() {
    return React.createElement('div', null, `Hello, ${this.props.name}`);
  }
}

ReactDOM.render(
  React.createElement(HelloWorld, {name: 'World!'}),
  document.getElementById('root'));
