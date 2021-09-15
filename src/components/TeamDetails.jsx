import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airTableBase}/Teams`



const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`
  }
}


export default function TeamDetails() {
  const [team, setTeam] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchTeam = async () => {
      const res = await axios.get(`${URL}/${id}`, config)
      setTeam(res.data);
    };
    fetchTeam();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>{team.fields?.name}</h1>
      <h4>{team.fields?.location}</h4>

    </div>
  )
}
