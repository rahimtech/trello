import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Alert, Snackbar } from "@mui/material";
import { Link, Route } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeReviewCard = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [color, setColor] = useState("text-grey-400");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    if (e === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const setcc = () => {
    if (color == "text-rose-500") {
      setColor("text-grey-400");
    } else {
      setColor("text-rose-500");
      handleClick();
    }
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Thankyou for your Feedback
        </Alert>
      </Snackbar>

      <a href={`${props.link}`} className="no-underline	">
        <CardHeader
          className="cursor-pointer"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.06)" }}
          titleTypographyProps={{
            fontSize: 15,
            textAlign: "left",
            color: "blue",
          }}
          // action={
          //   // <IconButton aria-label="settings">
          //   //   <MoreVertIcon />
          //   // </IconButton>
          // }
          title={props.name}
        />
      </a>
      <CardMedia
        component="img"
        height="194"
        image={props.img}
        alt="Paella dish"
      />
      <CardContent
        style={{ backgroundColor: "rgba(0, 0, 0, 0.06)" }}
      ></CardContent>
      <CardActions
        disableSpacing
        style={{ backgroundColor: "rgba(0, 0, 0, 0.06)" }}
      >
        <IconButton onClick={() => setcc()} aria-label="add to favorites">
          <FavoriteIcon className={`${color}`} />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Languages of Site:</Typography>
          <Typography paragraph>{props.desc}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecipeReviewCard;
