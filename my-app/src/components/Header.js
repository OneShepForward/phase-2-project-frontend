import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from "../image/oneShepForwardLogoTransparentTest.png";

// styled imports
import styled from "styled-components";

// Material imports
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { textAlign } from "@mui/system";
import { withThemeCreator } from "@material-ui/styles";


// let history = useNavigate;
//   history(props.href);

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

  function LinkTab(props) {
    let navigate = useNavigate();
    return (
      <Tab
        component={RouterLink}
        onClick={(event) => {
          event.preventDefault();
          navigate(props.to);
        }}
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
            <header>
                <h1 style={{textAlign: "left"}}>
                {name}  //  <img className="logo" src={logo} alt="logo" height="30" ></img>
                </h1>
            </header>
          
          <Box sx={{ width: '100%' }}>
            <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs example">
              <LinkTab to="/" label="Home" href="/" />
              <LinkTab to="/guest-book" label="Guest Book" />
              <LinkTab to="/links" label="Links" />
            </Tabs>
          </Box>
        </>
        );
  
// Material Link Tabs v1    
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
    //       <LinkTab label="Home" href="/" />
    //       <LinkTab label="Guest Book" href="/guest-book" />
    //       <LinkTab label="Links" href="/links" />
    //     </Tabs>
    //   </Box>
    // </>
    // );
  

//   return (
//     <LeftAlignedHeader className="header">
//         <header>
//             <h1 >
//                 <span className="logo"></span>
//                 {name} - Header
//             </h1>
//             <nav 
//                 style={{
//                     fontSize: "24px", 
//                     textAlign: "center",
//                     }}>
//                 <LinkButton className="button" href="/">
//                     Home 
//                 </LinkButton>                
//                 <LinkButton className="button" href="/guest-book">
//                     Guest Book 
//                 </LinkButton>
//                 <LinkButton className="button" href="/links">
//                     Links 
//                 </LinkButton>
//             </nav>
//         </header>
//     </LeftAlignedHeader>
//   );

}

export default Header;