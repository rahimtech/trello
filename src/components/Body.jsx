import React from "react";
import {
  Typography,
  Button,
  ImageList,
  ImageListItem,
  ListSubheader,
  ImageListItemBar,
  IconButton,
} from "@material-ui/core";
import InfoIcon from "@mui/icons-material/Info";
import { Alert } from "@mui/material";

// import 'bootstrap/dist/css/bootstrap.min.css'
import cssstyles from "../style.css";
import Sec2 from "./Sec2";
import Sec3 from "./Sec3";
import "../css/output.css";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

export const Body = () => {
  return (
    <div style={{ marginTop: 100 }} className="container text-center mx-auto">
      <Typography variant="h6" className="mb-3">
        Things that you know me by it :)
      </Typography>
      <hr className="mx-auto my-3" style={{ width: 50 }} />
      <div className="d-flex justify-content-around flex-wrap | flex flex-col items-center justify-around sm:flex-row sm:w-4/5 mx-auto w-full bs-container">
        <div className="rounded-lg bg-grey-cus py-3" style={{ width: "18rem" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            fill="currentColor"
            className="bi bi-brush align-self-center colororang  my-3"
            viewBox="0 0 16 16"
          >
            <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
          </svg>
          <div className="card-body">
            <h5 className="card-title">Front-end & React</h5>
          </div>
        </div>

        <div
          className="bg-grey-cus py-3 rounded-lg lg:my-0 my-3"
          style={{ width: "18rem" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            fill="currentColor"
            className="bi bi-badge-ad align-self-center colororang  my-3"
            viewBox="0 0 16 16"
          >
            <path d="m3.7 11 .47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z" />
            <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
          </svg>
          <div className="card-body">
            <h5 className="card-title">SEO & Business</h5>
          </div>
        </div>
        <div className="rounded-lg bg-grey-cus py-3" style={{ width: "18rem" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            fill="currentColor"
            className="bi bi-explicit align-self-center colororang  my-3"
            viewBox="0 0 16 16"
          >
            <path d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
            <path d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0h-11ZM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-11Z" />
          </svg>
          <div className="card-body">
            <h5 className="card-title">Easeup</h5>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 100 }}>
        <Typography variant="h6" className="mb-3">
          Technologies that i work by it
        </Typography>
        <hr className="mx-auto my-3" style={{ width: 50 }} />

        <Sec2 />
      </div>
      <div style={{ marginTop: 100, marginBottom: 100 }}>
        <Typography variant="h6" className="mb-3">
          My Work samples
        </Typography>
        <hr className="mx-auto my-3" style={{ width: 50 }} />

        <Sec3 />
        <div className="mx-auto mt-10 w-11/12 ">
          <Link className=" no-underline " to="/task">
            <Alert
              className="text-center flex justify-center no-underline !bg-blue-100"
              severity="info"
            >
              =====My New Project *Trello* Click Here=====
            </Alert>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
