const fs = require('fs');
const path = require('path');

const logosDir = 'C:/Users/Pro User/Desktop/logos';
const speedtestDir = 'C:/Users/Pro User/Desktop/机场品牌信息/extracted';

const logos = fs.readdirSync(logosDir);
const speedtests = fs.readdirSync(speedtestDir);

console.log('Available logos (' + logos.length + '):');
logos.forEach(l => console.log('  ' + l));

console.log('\nAvailable speedtest images (' + speedtests.length + '):');
speedtests.forEach(s => console.log('  ' + s));
