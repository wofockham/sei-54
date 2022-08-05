import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <h1>Social Network</h1>

      <Profile name="Groucho Marx" age="45" motto="No gods no masters" pic="http://www.fillmurray.com/500/500" />
      <Profile name="Chico Marx" age="43" motto="No gods no masters" pic="http://www.fillmurray.com/501/501" />
    </div>
  );
}

export default App;
