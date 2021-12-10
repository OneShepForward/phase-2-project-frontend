import logo from './logo.svg';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Links from "./components/Links";
import SandwichDeviser from "./components/SandwichDeviser";
import GuestBook from "./components/GuestBook";
import NoMatch from "./components/NoMatch";
import Header from "./components/Header"
import './App.css';

// material imports
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";

import { makeStyles } from "@mui/styles"


// This doesn't work, likely due to a v5 compatibility issue
const useStyles = makeStyles({
  root: {
    background: "liner-gradient(45deg, #333, #000)",
    border: 10,
    borderRadius: 15,
    color: "white",
    padding: "0 30px",
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}> Test Styled Button </Button>
}


function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return(


    <FormControlLabel 
    control={

      <Checkbox 
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        icon={<DeleteIcon />}
        checkedIcon={<DeleteIcon />}
        color="secondary"
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}

      />}
      label="Testing Checkbox"
    />
  )
}

// // example of non-switch usage
// <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="expenses" element={<Expenses />} />
//       <Route path="invoices" element={<Invoices />} />
//     </Routes>
//   </BrowserRouter>,


let routes = (
  // <Fade>
    <Routes>
      <Route path="/" element={<Home />} />
        
      <Route path="/links" element={<Links />} />
        
      <Route path="/sandwich-deviser" element={<SandwichDeviser />} />

      <Route path="/guest-book" element={<GuestBook /> } />
      
      <Route path="*" element={ <NoMatch />} />
        
    </Routes>
  // </Fade>
);

function App() {



  return (
    <div className="App">
        <Header
        name="Nick Shephard"
        />
        {routes}
    </div>
  );
}

export default App;



// function App() {



//   return (
//     <div className="App">
//         {routes}

//         <GuestBook />


//       <header className="App-header">
//       <ButtonStyled />
//       {ButtonStyled()}
//        <TextField 
//        variant="outlined" 
//        color="secondary" 
//        type="date"
//        placeholder="03/01/1987" 
//        />
//         {CheckboxExample()}
//         <Header />
//         <ButtonGroup variant="contained">
          // <Button 
          // // startIcon={<SaveIcon />}
          // endIcon={<SaveIcon />}
          // // variant="contained" 
          // style={{
          //   fontSize: "24"
          // }}
          // color="primary" 
          // href="#" 
          // size="large" 
          // onClick={() => console.log("hi!")}>
          // Save</Button>

//           <Button 
//           // startIcon={<DeleteIcon />}
//           endIcon={<DeleteIcon />}
//           // variant="contained" 
//           style={{
//             fontSize: "24"
//           }}
//           color="primary" 
//           href="#" 
//           size="large" 
//           onClick={() => console.log("hi!")}>
//           Dicard
//           </Button>

//         </ButtonGroup>
//       </header>
//     </div>
//   );
// }