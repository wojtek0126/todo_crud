export default{
  fonts: {
    body: '"Proxima Nova Soft", Helvetica Neue, Helvetica,Arial, sans-serif',
    heading: '"Proxima Nova Soft", Helvetica Neue, Helvetica,Arial, sans-serif',
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48],
    fontWeights: {
    body: 400,
    heading: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#392a25',
    muted: '#aaaaaa',
    background: 'gold',
    foreground: '#ffffff',
    buttons1: '#62c03b',
    buttons2: '#34aadc',
    buttons3: '#ff70b3',
    buttonsClicked: '#ff70b3',
    progress: '#3399ff',
    done: '#00cc00',
    inputBorder: '#e0e0e0',
    inputBorderFocus: '#34aadc',
    box: 'linear-gradient(rgba(10,0,0,0.1),transparent)'    
  },
  space: [0, 4, 8, 16, 32, 48],
  breakpoints: ['40em', '64em', '80em'],
  styles: {
    Layout: {
      color: 'text',
      backgroundColor: 'background',
      fontFamily: 'body',
      lineHeight: 'body',
    },
    Container: {
      maxWidth: 1160,
      padding: 3,
    },
    Image: {
      width: '100vw',
      height: '100vw'
    },
  },
};