class Message {
   constructor(name, commands) {
      this.name = name;
      if (!name) {
         throw Error("Message name required.");
      }
     this.commands = commands

   }
};


// let testin = new Message ("123", move = [2, "changemode"])
// let messTest1 = new Message("Testing", commMess = [])
// console.log(testin)

module.exports = Message;