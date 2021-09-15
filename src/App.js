import './App.css';
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom'
import TeamsList from './components/TeamsList'
import TeamDetails from './components/TeamDetails'
import NewTeam from './components/NewTeam'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

console.log(process.env.REACT_APP_AIRTABLE_KEY)
console.log(process.env.REACT_APP_AIRTABLE_BASE)

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Route exact path='/'>
        <div>Home</div>
      </Route>

      {/* Routes */}
      <Route exact path='/teams'>
        <TeamsList />
      </Route>

      {/* Routes */}
      <Route exact path='/teams/:id'>
        <div><TeamDetails /></div>
      </Route>

      {/* Routes */}
      <Route path='/new'>
        <div><NewTeam /></div>
      </Route>

      {/* Routes */}
      <Route path='/teams/:id/edit'>
        <div>Edit</div>
      </Route>
      <ToastContainer />
    </div>
  );
}

export default App;
