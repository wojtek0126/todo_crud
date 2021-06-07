/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';


const FooterWrapper = ({contentArea}) => (    
    <Flex sx = {{   
        justifyContent: 'center',
        alignItems: 'flex-end'}}>  
    {contentArea}
</Flex> 
);


export default FooterWrapper;


    