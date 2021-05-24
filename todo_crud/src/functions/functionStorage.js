
//switch button text, add it to onClick handler for buttons, 
export const switchBtnTxt = (setUpdateState, text1, text2, delay = 1800) => {
    setUpdateState(text2);
    setTimeout(() => {
      setUpdateState(text1);
    }, delay); 
}

//formatted current date and time, for create and edit tasks
export const timeStampFormatted = () => {
    const t = new Date(); 
    const date = ('0' + t.getDate()).slice(-2);
    const month = ('0' + (t.getMonth() + 1)).slice(-2);
    const year = t.getFullYear();
    const hours = ('0' + t.getHours()).slice(-2);
    const minutes = ('0' + t.getMinutes()).slice(-2);
    const seconds = ('0' + t.getSeconds()).slice(-2);
    const time = `${date}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
    return time
} 


