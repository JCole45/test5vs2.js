import React, { Component } from 'react';
import dev from './dev';

import './App.css';

class App extends Component {
state =  {
  username: '',
}


handleUserChange = (e) => {
  this.setState ({
    username: e.target.value,
  });
}


state = {
  password: '',
}


handlePassChange = (d) => {
  this.setState ({
    password: d.target.value,
  });
}

  render() {
    return (

<header className="App-header">

<div id ="top">
    <p> <img src= {dev} className="dev" width="65" height="65" align="left"/> <b> &nbsp;&nbsp; The Practical Dev</b> @ThePracticalDev . Sep 10 </p>
    <p> &nbsp; &nbsp; Learning React? Start Small. </p>
    <div id="author">
    <p> author: @dceddia </p>
    </div>
</div>

<div class="boxed">
   <p> <b> Learning React? Start Small. </b> </p>
</div>

<div id="boxed2">
   <p> <b> Learning React? Start Small. </b> </p>
   <p> Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps </p>
</div>

<br/>

<div id="Sign In">
<h4> Sign In Below </h4>
</div>

<div className="Form">
 <form>

  Username: <br/>
  <input type="text" name="username" onChange={this.handleUserChange}/><br/>

  Password: <br/>
  <input type="text" name="password" onChange={this.handlePassChange}/><br/>

<br/>

    <div id="button">
     <input type="submit" value="Sign In" /><br/>
    </div>

 </form>
</div>

<div id="boxed3"></div>

</header>

    );
  }
}




export default App;
