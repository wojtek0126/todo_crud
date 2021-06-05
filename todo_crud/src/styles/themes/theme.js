//gradients not supported by theme-ui 
export const titleBackground = 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)';
export const itemDetailsBackground = 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)';  
export const buttonBackgroundType1 = 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)';  
export const buttonBackgroundType2 = 'linear-gradient(to top, #4481eb 0%, #04befe 100%)';  
export const buttonBackgroundType3 = 'linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%)';  


//theme values
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
    // background color
    background: 'darkolivegreen',
    // box container colors
    boxBorder: '#000000',
    boxBackground: 'darkseagreen', 
     //app title text colors
     titleText1: 'blue',  
     titleText2: 'white', 
     titleText3: 'red',   
    // text colors
    text: '#392a25', 
    textWhite: '#ffffff',       
    placeHolderText: '#8a8a5c', 
    counterText: '#8a8a5c',
    searchText: '#8a8a5c', 
    optionsText: '#8a8a5c',
    muted: '#aaaaaa',
    // button colors
    buttons1: '#62c03b',
    buttons2: '#34aadc',
    buttons3: '#ff70b3',
    buttonText: '#ffffff',
    buttonsClicked: '#ff70b3', 
    //checkbox colors
    checkboxBorder: '#174A41',
    // option box colors
    optionBoxBackground: '#000000',     
    //search filter colors
    searchFilterBackground: '#000000',    
    //input fields colors
    inputBackground: '#000000',
    inputBorder: '#000000',
    inputBorderFocus: '#34aadc',  
    inputBorderEditOn: 'green',        
    //statistics fields colors
    counterAll: '#000000',
    counterInProgress: '#000000',
    counterCompleted: '#000000',
    counterPercentage: '#000000', 
   //task detail show colors
   taskDetailBackground: '#F0E68C',
   taskDetailContentBackground: 'gold',
   taskDetailBorderColor: '#000000',    
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

