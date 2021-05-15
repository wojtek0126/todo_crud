/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider, Container, Flex, Box } from 'theme-ui';
import Task from '../molecules/Task';
import theme from '../../styles/theme';
import Title from '../molecules/Title';

const tasks = [1, 2, 3, 4, 5, 6]; // Demo data to generate 6 cards

const MainView = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Layout> */}      
        <Container>      
        <Title />      
        <Flex sx={{ flexWrap: 'wrap' }}>
            {tasks.map(card => (
              <Box key={card} sx={{ width: ['100%', '50%', '33.33%'] }}>
                <Task />
              </Box>
            ))}
          </Flex>
        </Container>
      {/* </Layout> */}
    </ThemeProvider>
  );
}

export default MainView;