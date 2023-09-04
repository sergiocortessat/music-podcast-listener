export const formatDate = (dateString:  string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear().toString().substr(-2); // Get last 2 digits of year
  
    return `${day}/${month}/${year}`;
  };

  export const millisToHoursMinutesAndSeconds = (millis: number) => {
    const hours = Math.floor(millis / 3600000); // 1 Hour = 3600000 Milliseconds
    const minutes = Math.floor((millis % 3600000) / 60000); // 1 Minute = 60000 Milliseconds
    const seconds = Math.floor(((millis % 3600000) % 60000) / 1000); // 1 Second = 1000 Milliseconds
    
    let timeString = "";
    
    if(hours > 0) {
      timeString += (hours < 10 ? '0' : '') + hours + ':';
    }
  
    timeString += (minutes < 10 ? '0' : '') + minutes + ':';
    timeString += (seconds < 10 ? '0' : '') + seconds;
  
    return timeString;
  };