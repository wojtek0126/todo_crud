/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { taskBackground } from '../../styles/gradients';
import { generalBorderRadius, borders } from '../../styles/themes/settings';


const StatsTitleWrapper = ({contentArea}) => (    
    <Flex sx={{    
        backgroundColor: 'boxBackground',                    
        // background: `${taskBackground}`,
        color: 'text',
        border: `${borders}`,
        borderColor: 'boxBorder', 
        borderRadius: generalBorderRadius,
        fontSize: 4,
        margin: 3,       
        padding: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
    {contentArea}
</Flex> 
);


export default StatsTitleWrapper;


    