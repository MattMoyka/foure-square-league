export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Team Name</label>
      <input
        type="text"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)} />
      <label>Coach</label>
      <input
        type="text"
        value={props.coach}
        onChange={(e) => props.setCoach(e.target.value)} />
      <label>Location</label>
      <input
        type="text"
        value={props.location}
        onChange={(e) => props.setLocation(e.target.value)} />
      <label>Logo</label>
      <input
        type="text"
        value={props.logo}
        onChange={(e) => props.setLogo(e.target.value)} />
      <label>Mascot</label>
      <input
        type="text"
        value={props.mascot}
        onChange={(e) => props.setMascot(e.target.value)} />
      <label>Roster</label>
      <input
        type="text"
        value={props.roster}
        onChange={(e) => props.setRoster(e.target.value)} />
      <button>{props.type} Team</button>
    </form>
  )
}
