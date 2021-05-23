export default{
  fonts: {
    body: "'Reggae One', cursive",
    heading: "'Reggae One', cursive",
    blackboard: "'Indie Flower', cursive"
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48],
    fontWeights: {
    body: 400,
    heading: 600,
    blackboardThick: 800
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    background: 'black',

    boxBorder: '#000000',
    boxBackground: 'gold',   

    text: '#392a25', 
    textWhite: '#ffffff',       
    placeHolderText: '#8a8a5c', 
    muted: '#aaaaaa',

    optionBoxBackground: '#ffffff', 
    optionBoxText: '#392a25',    

    buttons1: '#62c03b',
    buttons2: '#34aadc',
    buttons3: '#ff70b3',
    buttonText: '#ffffff',
    buttonsClicked: '#ff70b3', 

    checkboxBorder: '#174A41',

    inputBackground: '#ffffff',
    inputBorder: '#000000',
    inputBorderFocus: '#34aadc',
    inputText: '#392a25',      

    counterAll: '#ffffff',
    counterInProgress: '#ffffff',
    counterCompleted: '#ffffff',
    counterPercentage: '#ffffff'
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
    }    
  },
};

