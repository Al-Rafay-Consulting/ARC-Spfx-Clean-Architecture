import * as React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../../config/hooks/reduxHook";
import { addTodo, deleteTodo, todoSelector } from "../../store";
import classes from "../../stylesheets/Todos.module.scss";
const Todos: React.FC = () => {
  const [todo, setTodo] = React.useState<string>("");
  const [todos, setTodos] = React.useState<string[]>([]);
  const [editIndex, setEditIndex] = React.useState<number>(-1);

  const selectedTodos  = useAppSelector(todoSelector);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setTodos(selectedTodos);
  }, [selectedTodos])


  const addTodoHandler = (): void => {
    if (!todo) return;
    if (editIndex !== -1) {
      const newList = todos?.map((t, i) => (i === editIndex ? todo : t))
      setTodos(newList);
      dispatch(addTodo(newList))
      setEditIndex(-1);
    } else {
      dispatch(addTodo([...todos, todo]));
      setTodos([...todos, todo]);
    }
    setTodo("");

  };
  

  const deleteHandler = (deleteItemIndex : any ) =>{
    setTodos(todos?.filter((_, index) => index !== deleteItemIndex))
    dispatch(deleteTodo(deleteItemIndex))
  }
  return (
    <div className={classes.container}>
      <h1>Todo App</h1>
      <div className={classes.todos}>
        <input
          className={classes.input}
          type="text"
          placeholder="Todo"
          value={todo}
          onKeyDown={(e) => e.key === "Enter" && addTodoHandler()}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className={classes.button} onClick={addTodoHandler}>
          {editIndex !== -1 ? "Update" : "Add"}
        </button>
      </div>
      <div className={classes.viewTodosContainer}>
        {todos?.map((todo, i) => (
          <div className={classes.todo} key={i}>
            <p>{todo}</p>
            <div className={classes.actions}>
              <FaEdit
                onClick={() => {
                  setTodo(todos[i]);
                  setEditIndex(i);
                }}
              />
              <MdDelete
                onClick={()=>deleteHandler(i)  }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
