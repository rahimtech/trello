import { Draggable, Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";
import { v4 as uuid } from "uuid";
// import { TextField } from "@mui/material";
// import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "../../css/output.css";
import { useState, useContext, Component } from "react";
import UserContext from "../Context/UserContext";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
// import { TextField } from "@mui/material";

// function ali() {
//   document.getElementById("toggleCheckDelColumn").style.display = "block";
// }

// function toggleBlock() {
//   document.getElementById("toggleCheckDelColumn").style.display = "none";
// }

export const Column = ({ column, columnId, index, colId }) => {
  const con = useContext(UserContext);

  const [checkDel, setCheckDel] = useState(false);
  const [flag, setFlag] = useState(false);

  const updateName = (e) => {
    const newCol = column;
    newCol.name = e.target.value;
    // con.setColumns({ ...con.columns });
    setFlag(false);
  };

  class InnerList extends Component {
    shouldComponentUpdate(nextProps) {
      if (nextProps.tasks === column.items) {
        return false;
      }
      return true;
    }
    render() {
      return column.items.map((item, index) => {
        return (
          <Task item={item} index={index} columnId={columnId} key={item.id} />
        );
      });
    }
  }

  return (
    <Draggable key={columnId} draggableId={columnId} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              userSelect: "none",
              padding: 15,
              margin: "8px",
              minHeight: "50px",
              backgroundColor: snapshot.isDragging
                ? "#d6d6d6"
                : "var(--ds-background-accent-gray-subtlest,#ebecf0)",
              color: "white",
              ...provided.draggableProps.style,
            }}
            className="rounded-sm shadow-lg	"
          >
            <div className=" flex justify-center text-center">
              <Tooltip title="حذف ستون" placement="top">
                <DeleteIcon
                  className="cursor-pointer"
                  color="error"
                  fontSize="small"
                  onClick={() => setCheckDel(true)}
                />
              </Tooltip>
              <div
                className={`${checkDel == true ? "block" : "hidden"}`}
                id="toggleCheckDelColumn"
              >
                <div
                  onClick={() => con.delColumn(colId, columnId)}
                  className={`${
                    checkDel == true ? "block" : "hidden"
                  } bg-green-700 text-white hover:cursor-pointer`}
                >
                  تایید
                </div>
                <div
                  onClick={() => setCheckDel(false)}
                  className={`${
                    checkDel == true ? "block" : "hidden"
                  } bg-red-700 text-white  hover:cursor-pointer`}
                >
                  لغو
                </div>
              </div>
              <input
                className="w-10/12 rtl justify-evenly text-black border-none focus:outline-none"
                // id="standard-textarea"
                // variant="standard"
                placeholder="عنوان ستون"
                defaultValue={column.name === "" ? "عنوان ستون" : column.name}
                value={flag == true ? null : column.name}
                onClick={() => setFlag(true)}
                onBlur={updateName}
                multiline
              />
            </div>

            <Droppable droppableId={columnId} key={columnId} type="task">
              {(provided) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      padding: 7,
                      width: 250,
                    }}
                  >
                    <div className="mx-auto text-center my-5">
                      <button
                        className=" w-10/12 bg-blue-100 borderone text-blue-500  cursor-pointer border-blue-500  p-1 rounded-md text-center mx-auto"
                        variant="outlined"
                        endIcon={<AddIcon />}
                        color="primary"
                        size="small"
                        onClick={() =>
                          con.addTask(
                            {
                              id: uuid(),
                              content: "New Task",
                            },
                            columnId
                          )
                        }
                      >
                        افزودن تسک جدید
                      </button>
                    </div>
                    <InnerList tasks={column.items} />
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          </div>
        );
      }}
    </Draggable>
  );
};
export default Column;
