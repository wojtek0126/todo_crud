/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

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
    <a
      href="/"
      sx={{
        backgroundColor: 'primary',
        borderRadius: '100em',
        color: 'foreground',
        display: 'inline-block',
        fontFamily: 'heading',
        fontSize: [0, 1],
        fontWeight: 'bold',
        marginBottom: 1,
        px: 3, // shorthand for defining padding-left and padding-right
        py: 2, // shorthand for defining padding-top and padding-bottom
        textDecoration: 'none',
        textTransform: 'uppercase',
        '&:hover, &:focus': { backgroundColor: 'secondary' },
      }}
    >
      show details
    </a>
  </div>
);

export default Task;