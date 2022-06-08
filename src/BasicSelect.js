import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function BasicSelect() {
  const [colorFormat, setColorFormat] = useState("");

  const handleChange = (event) => {
    setColorFormat(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="select-container-label">Color Format</InputLabel>
        <Select
          labelId="select-container-label"
          id="select-container"
          value={colorFormat}
          label="Color Format"
          onChange={handleChange}
        >
          <MenuItem value="hex">#ffffff</MenuItem>
          <MenuItem value="rgb">rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba">rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;
