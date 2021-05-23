/** @jsxRuntime classic */
/** @jsx jsx */  
import { jsx, Textarea } from 'theme-ui';
import { Flex } from "theme-ui";


const Banner = ({imageUrl, placeholder}) => {


  return ( 
    <Flex
    sx={{
      maxHeight: '60vh',
      maxWidth: '100vw',
      width: '-webkit-fill-available',    
      height: '30vh',      
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
        <Textarea placeholder={placeholder}  
                    sx={{height: '-webkit-fill-available',
                       width: '-webkit-fill-available',
                       maxWidth: '100%',  
                       backgroundImage: `url(${imageUrl})`,  
                       fontFamily: 'blackboard',
                       fontWeight: 'blackboardThick',
                       color: 'textWhite',
                       '&::placeholder' : {color: 'placeHolderText'}                   
                    }} />
      </Flex>         
  );
};


export default Banner;


