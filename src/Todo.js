import { useDispatch } from 'react-redux';
import { checkTodoAC, removeTodoAC } from './reducer';


const Todo = ({ children, order, id, done }) => {
  const dispatch = useDispatch();

  const removeHandler = (id) => () => {
    dispatch(removeTodoAC(id))
  }

  const checkHandler = (id) => () => {
    dispatch(checkTodoAC(id))
  }

  const checkDone = done ? 'done' : '';

  return (
    <div className='todo-container'>
      <div className='todo-wrap'>
        <span>{order + '.'}</span>
        <p className={`todo ${checkDone}`}>{children}</p>
      </div>
      <div className='controls'>
        <button onClick={checkHandler(id)} className='btn-icon done'>
          <i className="fas fa-check-circle"></i>
        </button>
        <button onClick={removeHandler(id)} className='btn-icon remove'>
          <i className="fas fa-minus-circle"></i>
        </button>
      </div>
    </div>
  )
}

export default Todo;