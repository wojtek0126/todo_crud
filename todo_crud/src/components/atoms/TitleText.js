/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
// import { appBackground } from '../../styles/themes/theme';


const TitleText = ({text1, text2, text3, marginBottom}) => (
    <h2
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        // backgroundColor: `${backgroundColor}`,
        background: `transparent`,
        fontFamily: 'heading',
        fontWeight: 'heading',        
        fontSize: [3, 4, 5],
        margin: 0,
        marginBottom: `${marginBottom}`
      }}    >
        <span sx={{color: `titleText1`}}>{text1}</span>
        <span sx={{color: `titleText2`}}>{text2}</span>
        <span sx={{color: `titleText3`}}>{text3}</span>      
    </h2>
);


export default TitleText;


    