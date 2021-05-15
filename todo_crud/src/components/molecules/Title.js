/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import ButtonPrimary from '../atoms/ButtonPrimary'
import ProgressCounter from '../atoms/ProgressCounter'
import SearchIcon from '../atoms/SearchIcon'
import TitleText from '../atoms/TitleText'
import InputField from '../atoms/InputField'


const Title = () => (
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
  >
     <TitleText text={`to do list`} color={`text`} />
    <Flex sx={{
      flexDirection: 'row',    
    }}>
      <InputField text={`search`} placeholder={`search`} color={`text`}/>
       <SearchIcon color={`text`} />
    </Flex>  
    <Flex sx={{justifyContent: 'space-between'}}>
    <Flex sx={{flexDirection: 'column'}}>
     <ProgressCounter text={`in progress`} counter={`234`} color={`progress`}/>
     <ProgressCounter text={`completed`} counter={`777`} color={`done`}/>
     <ButtonPrimary text={`add new task`} to={`/add`} color={`primary`}/>  
      </Flex>       
    </Flex>   
  </Flex>
);

export default Title;