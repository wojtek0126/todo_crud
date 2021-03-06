/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'
import { generalBorderRadius, footerBorder, boxOpacity } from '../../styles/themes/settings'
import background3 from "../../assets/poly4.webp";


const FooterWrapper = ({ contentArea }) => (
  <Flex
    sx={{
      justifyContent: 'center',
      alignItems: 'flex-end',
    }}
  >
       <Flex
      sx={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        fontSize: 4,
        textAlign: 'center',
        margin: 3,
        marginTop: '7px',
        padding: '9px',
        opacity: `${boxOpacity}`,
        borderRadius: generalBorderRadius,
        border: `${footerBorder}`,
        // borderColor: `boxBorder`,
        // backgroundColor: 'boxBackground',
        // background: `${taskBackground}`,
        backgroundImage: `url(${background3})`,
      }}
    >
      {contentArea}
    </Flex>
  </Flex>
)

export default FooterWrapper
