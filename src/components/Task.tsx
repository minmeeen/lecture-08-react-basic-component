type TaskProps = {
  id: number;
  name: string;
  deleteFn: Function; //Function type
}

const Task = ({id, name, deleteFn} : TaskProps) => {
  return (
    <div>
      {name}
      <button onClick={ () => deleteFn(id) }>Delete</button>
    </div>
  )
}

export default Task