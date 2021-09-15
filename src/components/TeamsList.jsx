import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airTableBase}/Teams`

console.log(URL);

const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`
  }
}

export default function TeamsList() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const fetchTeams = async () => {
      const res = await axios.get(URL, config);
      setTeams(res.data.records);
    };

    fetchTeams();
  }, [])



  return (
    <div>
      <div>
        {teams.map(team => {
          return <Link to={`/teams/${team.id}`} key={team.id}>
            <h3>{team.fields.name}</h3>
          </Link>
        })}
      </div>
    </div>
  )
}
