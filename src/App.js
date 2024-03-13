import './App.css';
import Head from './components/Head';
import Form from './components/Form';

function App() {
  return (
    <div className="task-manager">
      <Head></Head>
      <div className='principal-task'>
        <h1>My Tasks</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
