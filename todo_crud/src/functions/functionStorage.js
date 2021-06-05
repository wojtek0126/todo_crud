
//switch button text, add it to onClick handler for buttons, 
export const switchBtnTxt = (setUpdateState, text1, text2, delay = 1800) => {
    setUpdateState(text2);
    setTimeout(() => {
      setUpdateState(text1);
    }, delay); 
}

//formatted current date and time, for create and edit tasks
export const timeStampFormatted = () => {
  const timestamp = Date.now(); // This would be the timestamp you want to format
  const formatted = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit',
  hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
  return formatted
} 







