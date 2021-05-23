/** @jsxRuntime classic */
/** @jsx jsx */  
import { jsx } from 'theme-ui';
import { Flex } from "theme-ui";
import{ footerContainer, footerStyle } from '../../styles/style_variables.js';


const Footer = ({brandName, year}) => {
  return ( 
      <Flex sx={footerContainer}>
          <div sx={footerStyle}>
          © {year} {brandName}
          </div>
      </Flex>         
  );
};


export default Footer;