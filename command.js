class Command {
   constructor(commandType, value) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;
   }
 
 }
//  let commandTestTwo = new Command("comTest2", 300)
//  console.log(commandTestTwo)
 
 module.exports = Command;