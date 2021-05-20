/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import ProgressCounter from '../atoms/ProgressCounter';
import MediumText from '../atoms/MediumText';
import ButtonWithlink from '../atoms/ButtonWithLink';


function TitleStats() {    

    //receiving stats data 
    const total = localStorage.getItem(`total`);
    const totalCompleted = localStorage.getItem(`comp`);
    const totalUncompleted = localStorage.getItem(`uncomp`);
    const percentCompleted = localStorage.getItem(`percent`);   

     
    return (
      <Flex
      sx={{
        flexDirection: 'column',
        background: 'linear-gradient(rgba(10,0,0,0.1),transparent)',     
        backgroundColor: 'foreground',
        borderRadius: 4,
        fontSize: 4,
        margin: 3,
        padding: 3,
      }}
    ><MediumText text={'Statistics:'} marginBottom={2} />
        <ProgressCounter text={`Total tasks: ${total}`} />
        <ProgressCounter text={`Completed: ${totalCompleted}`} />
        <ProgressCounter text={`In progress: ${totalUncompleted}`} />
        <ProgressCounter text={`Percent completed: ${percentCompleted}`} />   
        <ButtonWithlink to={`action`} text={`To action`} backgroundColor={`primary`} />
      </Flex>
    );
  }


  export default TitleStats;