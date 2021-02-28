let currentdate = new Date();
let dateTime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " at :  " +
    currentdate.getHours() +
    "h" +
    currentdate.getMinutes() +
    "mn";
export default dateTime;
