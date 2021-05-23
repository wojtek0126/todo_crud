/** @jsxRuntime classic */
/** @jsx jsx */  
import { jsx } from 'theme-ui';
import { Flex } from "theme-ui";
import { bannerContainer } from '../../styles/style_variables';


const Banner = ({imageUrl}) => {
  return ( 
      <Flex sx={bannerContainer}>
          <img src={imageUrl} />                   
      </Flex>         
  );
};


export default Banner;