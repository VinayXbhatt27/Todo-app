import {TodoForm} from "./Components/TodoForm/TodoForm";
import { TodoList } from "./Components/TodoList/TodoList";
import {TodoFilter}  from "./Components/TodoFilters/TodoFilter";
import {Alert} from "./Components/Alert/Alert";
import {Loader} from "./Components/Loader/Loader";
import styles from "./App.module.css";
import { useTodos } from "./hooks/todo"


function App() {
  const todos = useTodos();
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/todo.png" />
        <h2 className={styles.Title}>To-Do App</h2>
      </header>

      <div className={styles.AppContainer}>
        {todos.isLoading && <Loader />}
        {!!todos.error.message &&(
          <Alert onClear={todos.error.clear}>{todos.error.message}</Alert>
        )}
        <TodoForm onCreate={todos.create} />
        <TodoFilter onFilter={todos.filter} />
        <TodoList 
        todos={todos.data} 
        onUpdate={todos.update} 
        onDelete={todos.delete} />
        </div>
    </div>
  );
}

export default App;