import { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import CircleIcon from "@mui/icons-material/Circle";
// import { Button, TextField } from "@mui/material";
import UserContext from "../Context/UserContext";
// import { Tooltip } from 'bootstrap';
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
// import { TextField } from "@mui/material";

export const Task = ({ item, index, columnId }) => {
  const con = useContext(UserContext);
  const [checkDel, setCheckDel] = useState(false);
  // const [sizeArea, setSizeArea] = useState("");

  const updateName = (e) => {
    const newTask = item;
    newTask.content = e.target.value;
    con.setColumns({ ...con.columns });

    con.sendTask(e);
  };
  const textAreaResize = () => {
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute(
        "style",
        "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
      );
      tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
      this.style.height = 0;
      let scHight = this.scrollHeight;
      this.style.height = this.scrollHeight + "px";
      // console.log(this.style.height)
      if (scHight <= 38.4 || scHight === "") {
        item.sizeA = "38.4px";
      } else {
        item.sizeA = this.style.height;
      }
    }
  };

  return (
    <>
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={{
                userSelect: "none",
                padding: 16,
                margin: "8px",
                minHeight: "50px",
                backgroundColor: snapshot.isDragging
                  ? "rgb(184 186 200 / 53%)"
                  : "rgb(184 186 200) ",
                color: "white",
                ...provided.draggableProps.style,
              }}
              className={`${item.color}  rounded-sm shadow-lg `}
              //There are Animation of Add-Task
              // ${
              //   con.columnBtnId.item.id === item.id &&
              //   con.columnBtnId.columnIDD === columnId
              //     ? "animatedTask"
              //     : ""
              // }
            >
              <div className=" flex justify-center text-center">
                <textarea
                  // id="standard-textarea"
                  // variant="standard"
                  className="w-10/12 rtl justify-evenly text-black bg-transparent resize-none outline-none border-none focus:outline-none border-b-4 border-indigo-500"
                  placeholder="تسک شما"
                  defaultValue={item.content === "" ? "تسک شما" : item.content}
                  // value={""}
                  onBlur={updateName}
                  onChange={textAreaResize}
                  style={{
                    height: `${item.sizeA}  `,
                  }}
                  // onChange={() => {}}

                  // onDoubleClickCapture={console.log("HI")}
                  // multiline
                />
              </div>
              <div className="flex justify-evenly items-center ">
                <CircleIcon
                  onClick={() => con.setcc(index, columnId, "!bg-rose-300 ")}
                  className="text-rose-600 !text-xl	cursor-pointer"
                />
                <CircleIcon
                  onClick={() => con.setcc(index, columnId, "!bg-green-400")}
                  className="text-green-600 !text-xl	cursor-pointer"
                />

                <CircleIcon
                  onClick={() => con.setcc(index, columnId, "!bg-blue-300")}
                  className="text-blue-600 !text-xl	cursor-pointer"
                />

                <CircleIcon
                  onClick={() => con.setcc(index, columnId, "!bg-orange-300")}
                  className="text-orange-500 !text-xl	cursor-pointer"
                />

                <CircleIcon
                  onClick={() => con.setcc(index, columnId, "!bg-gray-400")}
                  className="text-gray-500 !text-xl	cursor-pointer"
                />
                <DeleteIcon
                  className="cursor-pointer"
                  color="error"
                  fontSize="small"
                  onClick={() => setCheckDel(true)}
                />
                <div
                  className={`${
                    checkDel == true ? "block" : "hidden"
                  } text-center`}
                  id="toggleCheckDelColumn"
                >
                  <div
                    onClick={() => con.delTask(item.id, columnId)}
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
                    } bg-red-700 text-white hover:cursor-pointer`}
                  >
                    لغو
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Draggable>
    </>
  );
};

export default Task;
