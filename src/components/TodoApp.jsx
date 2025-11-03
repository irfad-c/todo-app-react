//This is the parent file.
import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import "./style.css";

const TodoApp = () => {
  const [datas, setData] = useState([]);
  /*What { title: newData } means
    That’s an object literal in JavaScript.
    It creates a new object with a property called title. */
  const updateDatas = (newData) => {
    setData([...datas, { title: newData }]);
  };
  /*The _ is just a variable name — a convention to mean “I don’t need this value”. 
  .filter() passes two arguments to your function automatically:
  array.filter((element, index) => { ... })
  The first argument → the current element (like "apple")
  The second argument → the current index (like 0, 1, etc.)*/
  const deleteTask = (index) => setData(datas.filter((_, i) => i !== index));
  /*
  //splice changes the original array instead of creating a new one.
    const deleteTask=(index)=>{
    const newArray=[...datas];
    //remove one element starting from index.That is it delete the value in the index field.
    newArray.splice(index,1);
    setData(newArray)
}
*/

  useEffect(() => {
    document.title = `You have ${datas.length} pending task`;
  }, [datas]);

  return (
    <div className="todo-container">
      <h1>To Do App</h1>
      <div>
        {/*updateData is the prop which is passing (not calling)the function as prop.
        When the child calls the function updateDatas(value),this prop also passes the function to the parent*/}
        <AddTask updateData={updateDatas} />
      </div>
      <div>
        {datas.map((data, index) => (
          <ListTask
            key={index}
            data={data}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default TodoApp;
