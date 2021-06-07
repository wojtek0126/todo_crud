/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';


const ThoughtButtonsWrapper = ({contentArea}) => (    
    <Flex sx={{flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    '@media screen and (max-width: 700px)': {
      flexDirection: 'column',
      alignItems: 'baseline',
      justifyContent: 'center'}}}>
    {contentArea}
  </Flex> 
);


export default ThoughtButtonsWrapper;


    