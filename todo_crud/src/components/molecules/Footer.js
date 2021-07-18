/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import FooterWrapper from '../containers/FooterWrapper'

const Footer = ({ brandName, year }) => {
  return (
   <FooterWrapper contentArea={
   <div
    sx={{
      fontFamily: 'heading',
      fontWeight: 'body',
      color: `textWhite`,
    }}
  >
    © {year} {brandName}
  </div>
  } />  
  )
}

export default Footer
