import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTodoAC } from './reducer';
import Todo from './Todo';

function App() {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos);

  const [task, setTask] = useState('');

  const addHandler = () => {
    dispatch(addTodoAC(task));
    setTask('');
  }

  const taskHandler = e => {
    setTask(e.target.value);
  }

  return (
    <div className="app">
      <div className='wrap-todo-input'>
        <input
          type="text"
          value={task}
          onChange={taskHandler}
          className='todo-input'
          placeholder='Write a task...'
        />
        <button className='btn-add' onClick={addHandler}>Add task</button>
      </div>
      <div className='todos'>
        {todos.length === 0 ?
          <div className='no-tasks'>No tasks yet</div> :
          todos.map((t, idx) =>
            <Todo key={t.id} order={idx + 1} id={t.id} done={t.done}>{t.task}</Todo>)
        }
      </div>
    </div>
  );
}

export default App;
