import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {a: ''}
    

  }
  update() {
    this.setState({
      a: this.a.refs.input.value,
      b: this.refs.b.value
    })
  }
  render(){
    return (
     <div>
       <input
        ref={ component=> this.a = this.component}
        
        update={this.update.bind(this)}
       /> {this.state.a}
       <hr />
       <input
        ref="b"
        type="text"
        onChange={this.update.bind(this)}
       /> {this.state.b}
      </div>
    )
  }
}
class input extends React.Component {
  render(){
    return <div><input ref="input" type="text" onChange={this.props.update}/></div>
  }
}
export default App;