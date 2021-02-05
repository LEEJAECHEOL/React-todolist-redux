// 액션
export const create = (value) => ({
  type: 'CREATE',
  value: value,
});
export const toggle = (id) => ({
  type: 'TOGGLE',
  changeId: id,
});
export const remove = (id) => ({
  type: 'REMOVE',
  removeId: id,
});

// 상태
const initstate = {
  todolist: [
    {
      id: 1,
      text: '프로젝트 생성하기',
      done: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링하기',
      done: true,
    },
    {
      id: 3,
      text: 'Context 만들기',
      done: false,
    },
    {
      id: 4,
      text: '기능 구현하기',
      done: false,
    },
  ],
  nextId: 5,
};
// 액션
const reducer = (state = initstate, action) => {
  let changedTodoList = '';
  switch (action.type) {
    case 'CREATE':
      let todolistData = [...state.todolist];
      todolistData = [
        ...todolistData,
        { id: state.nextId, text: action.value, done: false },
      ];
      return { ...state, todolist: todolistData, nextId: state.nextId + 1 };
    case 'TOGGLE':
      changedTodoList = state.todolist.map((todo) =>
        todo.id === action.changeId ? { ...todo, done: !todo.done } : todo,
      );
      return { ...state, todolist: changedTodoList };
    case 'REMOVE':
      changedTodoList = state.todolist.filter(
        (todo) => todo.id !== action.removeId,
      );
      return { ...state, todolist: changedTodoList };
    default:
      return state;
  }
};

export default reducer;
