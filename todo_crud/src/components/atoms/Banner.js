/** @jsxRuntime classic */
/** @jsx jsx */  
import { jsx } from 'theme-ui';
import { Flex } from "theme-ui";


const Banner = ({imageUrl}) => {
  return ( 
      <Flex sx={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',  
        height: '60vw',
        width: '90vw'
    }}>
          <img src={imageUrl} />                   
      </Flex>         
  );
};


export default Banner;