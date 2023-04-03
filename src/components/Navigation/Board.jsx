import React, { useState, memo } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { v4 as uuid } from "uuid";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Typography } from "@mui/material";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function Board() {
  const con = useContext(UserContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const [nameBoardShow, setNameBoardShow] = useState(
    `${con.board[0].nameBoard}`
  );
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (setBoardId, setBoardName) => {
    if (setBoardId === null) {
    } else {
      setNameBoardShow(setBoardName);
      con.setPreMainBoard(setBoardId);

      // con.setColumns({ ...con.columns });
    }
    setAnchorEl(null);
  };

  const delBoard = (id) => {
    if (con.board.length <= 1) {
      return;
    }
    con.board.find((item, index) => {
      if (item.idBoard == id) {
        const remv = con.board.indexOf(con.board[index]);
        if (remv > -1) {
          con.board.splice(remv, 1);

          setNameBoardShow(con.board[0].nameBoard);
          con.setPreMainBoard(item.idBoard);
          con.setMainBoard([...con.board]);
          console.log("con.board: ", con.board);
        }
      }
    });
  };

  const addBoard = (setIdBoard, setNameNewBoard) => {
    const endNameBoard = setNameNewBoard + con.board.length;
    con.board.push({
      nameBoard: endNameBoard,
      idBoard: setIdBoard,
    });
    con.setMainBoard([...con.board]);
    con.setPreMainBoard(setIdBoard);
    setNameBoardShow(endNameBoard);
  };

  const InnerList = memo(({ item, index }) => {
    return (
      <div className="flex items-center">
        <DeleteIcon
          className="cursor-pointer z-10"
          color="error"
          fontSize="small"
          onClick={() => delBoard(item[1].idBoard)}
        />
        <MenuItem
          className="w-full"
          key={index}
          onClick={() =>
            handleClose(`${item[1].idBoard}`, `${item[1].nameBoard}`)
          }
          disableRipple
        >
          <Typography>{item[1].nameBoard}</Typography>
        </MenuItem>
      </div>
    );
  });

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {nameBoardShow}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(null)}
        className="rtl"
      >
        {Object.entries(con.board).map((item, index) => {
          return <InnerList item={item} index={index} />;
        })}

        <MenuItem
          className="text-center"
          onClick={() => addBoard(uuid(), `تخته جدید `)}
          disableRipple
        >
          <AddIcon fontSize="medium" />
          <Typography>افزودن</Typography>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
