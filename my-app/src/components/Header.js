import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from "../image/Compass_Stamp_transp.png";
import '../App.css';

// styled imports
import styled from "styled-components";

// Material imports
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { textAlign, typography } from "@mui/system";
import { withThemeCreator } from "@material-ui/styles";

  function LinkTab(props) {
    let navigate = useNavigate();
    return (
      <Tab
        component={RouterLink}
        onClick={(event) => {
          event.preventDefault();
          navigate(props.to);
        }}
        sx={{fontSize: "100"}}
        variant="outlined"
        {...props}
      />
    );
  }

const LeftAlignedHeader = styled.div`
    text-align: left;
`;

const LinkButton = styled.a`
    margin-left: 0.5rem;
`

function Header({ name }) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
            {/* <header>
                <h1 style={{textAlign: "left", fontStyle: "italic"}}>
                {name}
                </h1>
            </header> */}
          
          <Box >
            <Tabs centered value={value} onChange={handleChange} sx={{color:"#fff"}} >
              <LinkTab to="/" label="Home" id="hometab" />
              <LinkTab to="/guest-book" label="Guest Book" id="guesttab" />
              <LinkTab to="/links" label="Links" id="linktab" />
              <LinkTab to="/error404" label="Don't Click!" id="badtab" />
            </Tabs>
          </Box>
        </>
        );

}

export default Header;