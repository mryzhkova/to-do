const ADD_TODO = 'ADD-TODO';
const REMOVE_TODO = 'REMOVE-TODO';
const CHECK_TODO = 'CHECK-TODO';

const initialState = {
  todos: [{ id: 1, task: 'Some task', done: false }]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: Date.now(),
        task: action.payload.task,
        done: false
      }
      return { ...state, todos: [...state.todos, newTodo] };
    case REMOVE_TODO:
      return { ...state, todos: state.todos.filter(t => t.id !== action.payload.id) };
    case CHECK_TODO:
      return {
        ...state,
        todos: state.todos.map(t => t.id === action.payload.id ? { ...t, done: !t.done } : t )
      }
    default:
      return state;
  }
}

export default reducer;

export const addTodoAC = task => ({ type: ADD_TODO, payload: { task }});
export const removeTodoAC = id => ({ type: REMOVE_TODO, payload: { id } });
export const checkTodoAC = id => ({ type: CHECK_TODO, payload: { id } });