import React, { useState, memo } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Column } from "./Column";
import { v4 as uuid } from "uuid";
// import "../../css/app.css";
import "../css/output.css";
import { useEffect } from "react";
import UserContext from "./Context/UserContext";
import Nav from "./Navigation/Nav";
import Axios from "axios";
import { json } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import Targets from "./Target/Targets";

const itemsFromBackend = [
  {
    id: uuid(),
    content: "اولین کارتو بنویس !",
    color: "",
    sizeA: "",
    boardId: "B1",
  },
  // { id: uuid(), content: "Fifth task", color: "red" },
];

const columnsFromBackend = {
  c1: {
    id: uuid(),
    name: "ToDo",
    items: itemsFromBackend,
    boardId: "B1",
  },
  c2: {
    id: uuid(),
    name: "Doing",
    items: [],
    boardId: "B1",
  },
  c3: {
    id: uuid(),
    name: "Done",
    items: [],
    boardId: "B1",
  },
};

const mainBoard = [
  {
    nameBoard: "تخته اول",
    idBoard: "B1",
  },
  {
    nameBoard: "تخته دوم",
    idBoard: "B2",
  },
];
const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination, type, droppableId, draggableId } = result;

  if (type === "column") {
    var result = Object.values(columns);
    // var result2 = Array.form(columns);

    const [rev] = result.splice(source.index, 1);

    result.splice(destination.index, 0, rev);

    const newState = {
      ...result,
    };

    setColumns(newState);
    // console.log("columns", Object.keys(columns));

    // const columnOrder = Object.keys(columns);
    // const newColumnOrder = Array.from(columnOrder);
    // console.log("newColumnOrder", newColumnOrder);

    // newColumnOrder.splice(source.index, 1);
    // newColumnOrder.splice(destination.index, 0, draggableId);
    // console.log("newColumnOrder2", newColumnOrder);

    // const newState = {
    //   ...columns
    // };
    // console.log("newState", newState);

    // setColumns(newState);

    return;
  }

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const onDragStart = (result) => {
  if (window.navigator.vibrate) {
    window.navigator.vibrate(100);
  }
};

function Main() {
  const [columns, setColumns] = useState(columnsFromBackend);
  const [columnIdSend, setColumnId] = useState();
  const [board, setMainBoard] = useState(mainBoard);
  const [preBoard, setPreMainBoard] = useState(mainBoard[0].idBoard);
  const [color, setColor] = useState("red");
  const [colorback, setColorBack] = useState("!bg-blue-500");
  const [username, setUsername] = useState("");
  const [showTarget, setShowTarget] = useState(false);
  const [email, setEmail] = useState("");

  // const [columnBtnId, setcolumnBtnId] = useState({
  //   item: "",
  //   columnIDD: "",
  // });
  const [sizeArea, setSizeArea] = useState("");

  useEffect(() => {
    const getColumns = JSON.parse(localStorage.getItem("columns"));
    const getBackColor = JSON.parse(localStorage.getItem("colorback"));
    const getBoard = JSON.parse(localStorage.getItem("board"));
    if (getColumns || getBackColor || getBoard) {
      setColumns(getColumns);
      setColorBack(getBackColor);
      setMainBoard(getBoard);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
    localStorage.setItem("colorback", JSON.stringify(colorback));
    localStorage.setItem("board", JSON.stringify(board));
  }, [columns, colorback, board]);

  const addTask = (task, columnId) => {
    // setcolumnBtnId({
    //   item: task,
    //   columnIDD: columnId,
    // });
    const newColumn = [task, ...columns[columnId].items];

    const orderColumn = {
      ...columns,
      [columnId]: {
        name: columns[columnId].name,
        items: newColumn,
        boardId: preBoard,
      },
    };

    setColumns(orderColumn);
  };

  const addColumn = (addCol) => {
    const newColumn = { ...columns, [uuid()]: addCol };

    setColumns(newColumn);
  };

  const delTask = (taskId, columnId) => {
    const updateTask = columns[columnId].items.filter(
      (item) => item.id != taskId
    );
    columns[columnId].items = updateTask;

    const updateColumn = { ...columns };

    setColumns(updateColumn);
  };

  const delColumn = (columnId, objId) => {
    delete columns[`${objId}`];
    setColumns({ ...columns });
  };

  const setcc = (taskId, columnId, myColor) => {
    columns[columnId].items[taskId].color = myColor;

    const ArrayCol = Object.values(columns);

    setColumns({ ...columns });
  };

  const sendTask = (e) => {
    if (e) e.preventDefault();

    Axios.post("http://localhost:3001/tasksend", {
      email: email,
      taskTitle: JSON.stringify(columns),
    }).then((response) => {
      console.log(response);
    });
  };

  const InnerList = memo((props) => {
    // console.log("this.props;: ", props);

    // const tasks = column.taskIds.map((taskId) => taskMap[taskId]);
    return (
      <div>
        <Column
          column={props.column}
          columnId={props.columnId}
          index={props.index}
          colId={props.column.id}
        />
      </div>
    );
  });
  // return <Column column={column} tasks={tasks} index={index} />;

  const logOutUser = () => {
    Axios.post("http://localhost:3001/logout", {
      email: email,
      taskTitle: JSON.stringify(columns),
    }).then((response) => {
      console.log("response: ", response.data[0].taskCheckUser);
    });
  };

  function logInUser() {
    // if (e) e.preventDefault();
    // Axios.get("http://localhost:3001/checklogin", {
    //   email: email,
    // })
    //   .then((response) => {
    //     console.log("response: ", response.data[0].taskCheckUser);
    //     return true;
    //   })
    //   .catch(() => {
    //     return false;
    //   });
  }
  return (
    <div className={`${colorback} min-h-screen overflow-auto `}>
      <UserContext.Provider
        value={{
          columns,
          setColumns,
          color,
          setColor,
          colorback,
          setColorBack,
          board,
          setMainBoard,
          // columnBtnId,
          // setcolumnBtnId,
          setcc,
          delTask,
          delColumn,
          addTask,
          sendTask,
          username,
          setUsername,
          email,
          setEmail,
          logOutUser,
          logInUser,
          columnIdSend,
          mainBoard,
          preBoard,
          setPreMainBoard,
          showTarget,
          setShowTarget,
        }}
      >
        <Nav />
        {/* <button onClick={logOutUser}>out</button> */}
        <div className={`${showTarget ? `block` : `hidden`}`}>
          <Targets />
        </div>
        <div className={`${showTarget ? `hidden` : `block`}`}>
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            onDragStart={(result) => onDragStart(result)}
            // onDragUpdate={(result) => onDragStart(result)}
          >
            <Droppable
              droppableId="all-columns"
              direction="horizontal"
              type="column"
            >
              {(provided) => {
                return (
                  <div
                    style={{ display: "flex" }}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="md:mt-24"
                  >
                    {Object.entries(columns).map(
                      ([columnId, column], index) => {
                        if (column.boardId === preBoard) {
                          setColumnId(columnId);
                          return (
                            <InnerList
                              key={columnId}
                              columnId={columnId}
                              column={column}
                              index={index}
                            />
                          );
                        }
                      }
                    )}

                    {provided.placeholder}
                    <div className=" !p-7 ">
                      <button
                        className="w-40 mt-3 h-11 rounded-md border-none shadow-lg outline-none cursor-pointer"
                        onClick={() =>
                          addColumn({
                            id: uuid(),
                            name: "ستون جدید",
                            items: [],
                            boardId: preBoard,
                          })
                        }
                      >
                        ستون جدید
                      </button>
                    </div>
                  </div>
                );
              }}
            </Droppable>
          </DragDropContext>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default Main;
