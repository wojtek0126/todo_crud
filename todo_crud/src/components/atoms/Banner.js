/** @jsxRuntime classic */
/** @jsx jsx */  
import { backgroundColor } from 'styled-system';
import { jsx, Textarea } from 'theme-ui';
import { Flex } from "theme-ui";


const Banner = ({imageUrl}) => {
  return ( 
    <Flex
    sx={{
      position: 'absolute',
      zIndex: 1,
      maxHeight: '30vh',
      maxWidth: '100vw',
      width: '-webkit-fill-available',
      height: '29vh',      
      flexDirection: 'column',
      background: 'box',     
      backgroundColor: 'boxBackground',
      color: 'text',
      border: '2px solid',
      borderColor: 'boxBorder',
      borderRadius: 4,
      fontSize: 4,
      margin: 3,
      padding: 3,
    }}
  >
        <Textarea sx={{height: '-webkit-fill-available',
                       width: '-webkit-fill-available',
                       maxWidth: '100%',  
                       backgroundColor: 'inputBackground'                      
                    }} />
          {/* <img src={imageUrl} />                    */}
      </Flex>         
  );
};


export default Banner;


    // z-index: 1;
    //  
    // width: -webkit-fill-available;
    // height: 29vh;
    // margin-top: -10px;
    // margin-bottom: 13px;