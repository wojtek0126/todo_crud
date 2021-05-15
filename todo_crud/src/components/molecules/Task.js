/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import ButtonPrimary from '../atoms/ButtonPrimary';

const Task = () => (
  <div
    sx={{
      background: 'linear-gradient(rgba(10,0,0,0.1),transparent)',     
      backgroundColor: 'foreground',
      borderRadius: 4,
      fontSize: 4,
      margin: 3,
      padding: 3,
    }}
  >
    <h2
      sx={{
        fontFamily: 'heading',
        fontWeight: 'heading',
        fontSize: [3, 4, 5],
        margin: 0,
      }}
    >
      task name
    </h2>
    <div
      sx={{
        fontFamily: 'heading',
        fontWeight: 'heading',
        fontSize: [1, 2],
        color: 'muted',
        marginBottom: 2,
      }}
    >
      task description
    </div>   
   <ButtonPrimary text={`show details`} to={`/details`} color={`primary`}/>
  </div>
);

export default Task;