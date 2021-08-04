import React from 'react';
import PersonCard from './components/PersonCard';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {

  const p = <p>Paragraph in variable</p>
  const s = "I am a string"
  const n1 = 1
  const n2 = 2

  const a = ["Apple", "Banana", "Mango"]
  //Excercise1 ให้ array ของ string มา จง render สมาชิกแต่ละตัวใน paragraph ด้วยตัวพิมพ์ใหญ่

  return (
    <div>
      {p}
      <h1>{s}</h1>
      <h1>{n1 + n2}</h1>

      {/* Excercise1 */}
      {a.map(x => <p> {x.toUpperCase()} </p>)}

      {/* Component example */}
      {/* Excercise2 ถ้าเป็นผู้ชายและ Age >= 50 แสดง Old man แต่ถ้า age < 50 แสดง Young man*/}
      <PersonCard name={"Bob"} age={50} gender={"male"}/>
      <PersonCard name={"Alice"} age={25} gender={"female"}/>

      {/* useState example */}
      <Counter/>

      {/* Todos using React */}
      <TodoList/>

    </div>
  );
}

export default App;
