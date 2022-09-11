import React from 'react';
import './App.css';

const List = ({ list }) =>
  list.map(({ objectID, ...item }) => <Item key={objectID} {...item}
  />)
const Item = ({ title, url, author, num_comments, points }) => (
  <div>

    <span>
      <a href={url}>{title}</a>
    </span>
    <br />
    <span>{author}</span>
    <br />
    <span>{num_comments}</span>
    <br />
    <span>{points}</span>
  </div>
);

const useSemiPersistentState = () => {
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || ''
  )
  React.useEffect(() => {
    localStorage.setItem('search', searchTerm)
  }, [searchTerm])
  return [searchTerm, setSearchTerm]
}

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const [searchTerm, setSearchTerm] = useSemiPersistentState();

  const searchedStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  )
}

const Search = ({ search, onSearch }) =>
(
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" value={search} onChange={onSearch} />
  </div>
)

export default App;
