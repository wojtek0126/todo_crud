/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';


const DisplayDetailsText = ({headText, contentText, marginTop, 
    marginBottom, backgroundColor}) => (
    <div sx={{ display: 'flex',             
               wordBreak: 'break-word', 
               alignSelf: `center`,
               flexDirection: 'column',
               marginTop: `${marginTop}`, 
               marginBottom: `${marginBottom}`, 
               textAlign: 'center',
               backgroundColor: `${backgroundColor}`,
               width: '100%',
               padding: 2,
               border: '2px solid',
               borderColor: 'taskDetailBorderColor',
               borderRadius: '4px',
               fontSize: [1, 4]                           
                }}>
        <span sx={{fontWeight: 'heading'}}>{headText}</span>{contentText}
        </div>  
);


export default DisplayDetailsText;

