/**
* Until CSS can enable us to tell time,
* we need js to set the correct time. 
* The accuracy of this clock depends on that of your device.
* This is still a pure CSS clock because it's functionality is
* completely in CSS.
*/

const svg = document.querySelector('svg');
const currentTime = new Date();
console.log(currentTime.getSeconds());
svg.style.setProperty('--start-seconds', currentTime.getSeconds());
svg.style.setProperty('--start-minutes', currentTime.getMinutes());
svg.style.setProperty('--start-hours', currentTime.getHours() % 12);