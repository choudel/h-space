import './App.css';

const App = () => {
const handleChange=event=>{
  console.log(event.target.value)
}
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <hr />

    </div>

  );
}

export default App;
