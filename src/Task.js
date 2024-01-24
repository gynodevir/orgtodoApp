export const Task = (props) => {
    return (
        
      <div className='task' style={{ backgroundColor: (props.isComplete) && "green" }}>
        
        <div className="task-content">
          <h1><i class='bx bx-fast-forward' ></i>{props.taskName}</h1>
          <div className="task-buttons">
            <button onClick={() => props.deleteTask(props.id)} className="delTask">X</button>
            <button onClick={() => props.comTaks(props.id)}><i className='bx bx-task'></i></button>
          </div>
        </div>
      </div>
    );
  };
  