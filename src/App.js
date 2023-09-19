import './App.css';
import { useState } from 'react';
import Control from './components/Control';
import Content from './components/Content';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className='App'>
      <div className='text-[32px] font-bold mb-6'>Todo List Sample</div>
      <Control list={list} setList={setList} />
      <Content list={list} setList={setList} />
    </div>
  );
}

export default App;
