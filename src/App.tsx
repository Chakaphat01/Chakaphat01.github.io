import { useRef, useState } from "react";
import "./App.css";
import TodoListBoxinput from "./component/TodoListBoxinput";
import CardTodoList from "./component/CardTodoList";
// import Card from './component/Card.tsx'
import Counter from "./component/Counter";

type CounterRefType = {
  increment: () => void;
  decrement: () => void;
}
function App() {
  const [list, setList] = useState<string[]>([]);

  const [index_edit, setIndexEdit] = useState<number | undefined>(undefined);
  const [name, setName] = useState<string>("");
  const devRef = useRef<HTMLDivElement>(null);
  const devRef2 = useRef<HTMLDivElement>(null);
  const CounterRef = useRef<CounterRefType>(null);
  return (
    <div className="app-main">
      <div style={{
        display: "flex",
      }}>
        <div
        ref={devRef}
        style={{
          height: "100px",
          overflow: "auto",
          background: "green",
          width: "200px",
        }}
        >
          {Array.from({length: 100}, (_,i) =>(
            <div> {i} </div>
          ))}
        </div>
        <div
         ref={devRef2}
         style={{
           height: "100px",
           overflow: "auto",
           background: "red",
           width: "200px",
         }}       
        >
          {Array.from({length: 100}, (_,i) =>(
            <div> {i} </div>
          ))}          
        </div>
      </div>

      <button
        onClick={() => {
          devRef.current?.scrollTo({
            behavior: "smooth",
            top: 0,
          });
          devRef2.current?.scrollTo({
            behavior: "smooth",
            top: 0,
          });         
          //setBackgroundColor("blue");
          devRef2.current?.style.background == "blue";
          console.log(devRef2.current?.style.background == "blue")
        }}>
          button
        </button>
      <Counter ref={CounterRef}/>
      <button onClick={() => {CounterRef.current?.increment()}}> increment </button>
      <button onClick={() => {CounterRef.current?.decrement()}}> decrement </button>
      <TodoListBoxinput
        name={name}
        onChange={(data) => {
          setName(data);
        }}
        onClickAdd={() => {
          if (name != "") {
            if (list.includes(name)) {
              return;
            }
            setList([...list, name]);
            setName("");
          }
        }}
        onClickEdit={() => {
          console.log("on click edit");
          if (index_edit != undefined) {
            const new_list = list;
            new_list[index_edit] = name;
            setList([...new_list]);
            setName("");
            setIndexEdit(undefined);
          }
        }}
        indexEdit={index_edit}
      />
      <div> TODO LIST </div>
      {list.map((item, index) => {
        return (
          <CardTodoList
            title={item}
            onDelete={() => {
              const new_list = list;
              new_list.splice(index, 1);
              setList([...new_list]);
            }}
            onEdit={() => {
              setName(item);
              setIndexEdit(index);
            }}
          />
        );
      })}
    </div>
  );
}

export default App;