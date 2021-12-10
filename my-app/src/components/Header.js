import React from "react";
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';

// Material imports
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { textAlign } from "@mui/system";

// styled imports
import styled from "styled-components";


// function LinkTab(props) {
//     return (
//       <Tab
//         component="a"
//         onClick={(event) => {
//           event.preventDefault();
//         }}
//         {...props}
//       />
//     );
//   }

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
  
    // return (
    // <>
    //     <header>
    //         <h1>
    //             <span className="logo"></span>
    //             {name} - Header
    //         </h1>
    //     </header>
      
    //   <Box sx={{ width: '100%' }}>
    //     <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs example">
    //       <LinkTab label="Guest Book" href="/guest-book" />
    //       <LinkTab label="Links" href="/links" />
    //       <LinkTab label="Home" href="/" />
    //     </Tabs>
    //   </Box>
    // </>
    // );
  

  return (
    <LeftAlignedHeader className="header">
        <header>
            <h1 >
                <span className="logo"></span>
                {name} - Header
            </h1>
            <nav 
                style={{
                    fontSize: "24px", 
                    textAlign: "center",
                    }}>
                <LinkButton className="button" href="/">
                    Home 
                </LinkButton>                
                <LinkButton className="button" href="/guest-book">
                    Guest Book 
                </LinkButton>
                <LinkButton className="button" href="/links">
                    Links 
                </LinkButton>
            </nav>
        </header>
    </LeftAlignedHeader>
  );

}

export default Header;