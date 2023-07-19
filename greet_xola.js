import chalk from 'chalk';
//import the greet module that is in the current folder
import greet from './greet.js'
import figlet from 'figlet';


const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)

figlet.text(
    "Asi!",
    {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );
  