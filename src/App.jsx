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
          {/* <h1>{title}</h1>
          <p>Likes: {likes}</p>
          <p>{person.name} is {person.age} years old.</p>
          <a href={link} target='blank'>Visit google.com</a> */}
          {/* <p>{"Hello!, Abae."}</p>
          <p>{[1,2,3,4,5]}</p> */}

          <Home/>
    
        </div>
      </div>
    
    </>
  )
}

export default App

