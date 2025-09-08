// index.js
import chalk from "chalk";
import cowsay from "cowsay";
import figlet from "figlet";

// Full name dan NIM dengan chalk
console.log(chalk.blue.bold("Ida Bagus Brahmanta Jayana - F1D022052"));

// Motivational message dengan cowsay
console.log(cowsay.say({
  text: "Tetep Menyerah, Jangan Semangat!!!!",
  e: "oO",
  T: "U "
}));

// Nama dengan ASCII art figlet
figlet("GUSBRAM", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(chalk.green(data));
});
