console.log('Hello Webpack', process.env.NODE_ENV);

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

console.log(iAmJavascriptES6());