import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

<header className="App-header">

<div id ="top">
<p> <b>The Practical Dev</b> @ThePracticalDev . Sep 10 </p>
<p> Learning React? Start Small. </p>
<p> author: @dceddia </p>
</div>

<div class="boxed">
<p> <b> Learning React? Start Small. </b> </p>
</div>

<div id="boxed2">
<p> <b> Learning React? Start Small. </b> </p>
<p> Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps </p>
</div>
<br/>
<div className="Form">
<form>

Username: <br/>

<input type="text" name="username" /><br/>

Password: <br/>


<input type="text" name="password"/><br/>
<input type="submit" value="Sign In" /><br/>

</form>

</div>

</header>

    );
  }
}

export default App;
