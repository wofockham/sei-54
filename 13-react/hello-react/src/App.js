import HelloWorld from './HelloWorld';
import HelloUser from './HelloUser';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <HelloUser name="Greg" />
      <HelloUser name="Pope Boniface" />
      <HelloUser name="Groucho" />
      <HelloUser />
    </div>
  );
}

export default App;
