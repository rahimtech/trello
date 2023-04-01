import { Button, Typography } from "@mui/material";
import { useState } from "react";

export default function Test() {
  const [name, setName] = useState("")
  return (
    <div className="bg-dark">
      <Button onClick={() => setName("alireza")}>
        Click
      </Button>
      <Typography>
        {name}
      </Typography>
    </div>
  )
}