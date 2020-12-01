import Titulo from "./components/Titulo";
import TodoList from "./components/TodoList";


const App = () => {
  return (
    <>
      <center>
        <Titulo title = "React - TodoList" />
        <TodoList />
      </center>
    </>
  );
}

export default App;
