import { useState, useEffect } from 'react'
import Form from './Form'
import axios from 'axios'
import { useHistory } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airTableBase}/Teams`

console.log(URL);

const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`
  }
}

export default function NewTeam() {
  const [name, setName] = useState('')
  const [coach, setCoach] = useState('')
  const [location, setLocation] = useState('')
  const [logo, setLogo] = useState('')
  const [mascot, setMascot] = useState('')
  const [roster, setRoster] = useState('')

  //History
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name, coach, location, logo, mascot, roster
    }
    const res = await axios.post(URL, { fields }, config);
    toast("Created Team")
    history.push('/teams')
  }

  return (
    <div>
      Create
      <Form
        name={name}
        setName={setName}
        coach={coach}
        setCoach={setCoach}
        location={location}
        setLocation={setLocation}
        logo={logo}
        setLogo={setLogo}
        mascot={mascot}
        setMascot={setMascot}
        roster={roster}
        setRoster={setRoster}
        handleSubmit={handleSubmit}
        type={'Create'} />
    </div>
  )
}
