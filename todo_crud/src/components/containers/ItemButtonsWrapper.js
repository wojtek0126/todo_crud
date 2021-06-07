/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,Flex } from 'theme-ui';


const ItemButtonsWrapper = ({contentArea}) => (    
<Flex sx={{flexWrap: 'wrap',
                   flexDirection: 'row',
                   justifyContent: 'flex-start',
                   '@media screen and (max-width: 700px)': {
                    flexDirection: 'column',
                    alignItems: 'baseline',
                    justifyContent: 'baseline'}}}> 
    {contentArea}
</Flex> 
);


export default ItemButtonsWrapper;


    