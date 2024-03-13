import './App.css';
import Head from './components/Head';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="task-manager">
      <Head></Head>
      <div className='principal-task'>
        <h1>My Tasks</h1>
        <ListTask />
      </div>
    </div>
  );
}

export default App;
