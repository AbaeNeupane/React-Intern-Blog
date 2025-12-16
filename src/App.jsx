// 1. JSX must have only one parent element. Hence we use a div or React Fragment <> </>
// 2. In JSX, we can embed JavaScript expressions inside curly braces {}
// 3. In JSX, class attribute is written as className
// 4. In JSX, to open links in a new tab, we use target='blank'
// 5. We can also embed arrays and objects inside JSX using curly braces {}
// App is the default component that gets rendered in main.jsx
// We can create multiple components and import them as needed
// if we make further components they will be nested inside the App component
// and then App component is rendered in main.jsx

import './App.css'
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  // const title = "Welcome to the new blog";
  // const likes = 50;
  // const person = { name: 'Abae', age: 23 };
  // const link = "https://www.google.com";

  return (
    <>
      <div className="App">

        <Navbar />

        <div className="content">

  {/* Setting up Router for navigation between different components */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    
    </>
  )
}

export default App

