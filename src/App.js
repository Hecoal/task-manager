import './App.css';
import Head from './components/Head';
import Task from './components/Task';

function App() {
  return (
    <div className="task-manager">
      <Head></Head>
      <div className='principal-task'>
        <h1>My Tasks</h1>
        <Task text='Hola'/>
      </div>
    </div>
  );
}

export default App;
