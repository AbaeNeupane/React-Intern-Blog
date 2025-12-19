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
import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//     <Router>
//       <div className="App">
//         <Navbar />
//         <div className="content">
//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route exact path="/create">
//               <Create />
//             </Route>
//           </Switch>
//         </div>
//       </div>
    
//     </Router>

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App





