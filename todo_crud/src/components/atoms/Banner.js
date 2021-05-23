/** @jsxRuntime classic */
/** @jsx jsx */  
import { jsx, Textarea } from 'theme-ui';
import { Flex } from "theme-ui";


const Banner = ({imageUrl}) => {
  return ( 
      <Flex sx={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',  
        height: '30vw',
        // width: '90vw'
    }}>
        <Textarea />
          {/* <img src={imageUrl} />                    */}
      </Flex>         
  );
};


export default Banner;