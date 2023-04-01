import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CircleIcon from "@mui/icons-material/Circle";
import { Typography } from "@mui/material";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

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

export default function ColorButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const con = useContext(UserContext);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (setInColor) => {
    if (setInColor === null) {
    } else {
      con.setColorBack(setInColor);
    }
    setAnchorEl(null);
  };

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
        رنگ تخته
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(null)}
      >
        <MenuItem onClick={() => handleClose("!bg-blue-500")} disableRipple>
          <CircleIcon className="!text-blue-500 !text-xl	cursor-pointer" />
          <Typography>آبی</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleClose("!bg-rose-500")} disableRipple>
          <CircleIcon className="!text-rose-500 !text-xl	cursor-pointer" />
          <Typography>قرمز</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleClose("!bg-green-600")} disableRipple>
          <CircleIcon className="!text-green-600 !text-xl	cursor-pointer" />
          <Typography>سبز</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleClose("!bg-slate-800")} disableRipple>
          <CircleIcon className="!text-slate-800 !text-xl	cursor-pointer" />
          <Typography>سورمه‌ای</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleClose("!bg-yellow-500")} disableRipple>
          <CircleIcon className="!text-yellow-500 !text-xl	cursor-pointer" />
          <Typography>زرد</Typography>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
