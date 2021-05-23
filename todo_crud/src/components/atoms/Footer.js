/** @jsxRuntime classic */
/** @jsx jsx */  
import { jsx } from 'theme-ui';
import { Flex } from "theme-ui";


const Footer = ({brandName, year}) => {
  return ( 
      <Flex sx={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        width: '100vw',
        height: 'unset !important',
        fontSize: 4,
        margin: 3,
        padding: 3,
        borderRadius: '4px',
        border: `2px solid`,
        borderColor: `boxBorder`, 
        backgroundColor: 'boxBackground'
        }}>
          <div sx={{
        fontFamily: 'heading',
        fontWeight: 'body',      
        color: `text`,
        }}>
          © {year} {brandName}
          </div>
      </Flex>         
  );
};


export default Footer;