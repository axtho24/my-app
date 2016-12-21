import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p> Two Plus three is {2 + 3}</p>
//       </div>
//     );
//   }
// }
//
// export default App;


// class TweetBox extends Component {
//   constructor () {
//     super()
//     this.state = {
//       text: "",
//       photoAdded: false
//     }
//   }
//   handleChange (event) {
//     this.setState({ text: event.target.value})
//   }
// }


class TweetBox extends Component {
    constructor() {
        super()
        this.state = {
            text: "",
            photoAdded: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.togglePhoto = this.togglePhoto.bind(this)
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    togglePhoto(event) {
        this.setState({
            photoAdded: !this.state.photoAdded
        });
    }

    remainingCharacters() {
        if (this.state.photoAdded) {
            return 140 - 23 - this.state.text.length;
        } else {
            return 140 - this.state.text.length;
        }
    }
    render() {
        return ( <div className = "well clearfix">
            <textarea className = "form-control" onChange = {this.handleChange}>
            </textarea>
            <br/>
            <span> {this.remainingCharacters()}</span>
            <button className = "btn btn-primary pull-right"
            disabled={this.state.text.length === 0 && !this.state.photoAdded}>Tweet
            </button>
            <button className = "btn btn-default pull-right" onClick = {this.togglePhoto}>
            {this.state.photoAdded ? "✓ Photo Added" : "Add Photo"}
            </button>
            </div>
        );
    }
}

export default TweetBox
