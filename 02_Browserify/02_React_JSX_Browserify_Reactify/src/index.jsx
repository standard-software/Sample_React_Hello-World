const React = require('react');
const ReactDOM = require('react-dom');

class HelloWorld extends React.Component {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

ReactDOM.render(
  <HelloWorld name="World!" />,
  document.getElementById('root'));
