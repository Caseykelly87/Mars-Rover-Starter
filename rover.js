class Rover {
   constructor(position, mode = 'NORMAL', generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }
   
   receiveMessage(message) {
      
      let response = {};
      response.message = message.name;
      response.results = [];
      
      let commArray = message.commands;
      
      let i = 0;
      while (i < commArray.length) {
         
         let newCommand = commArray[i];
         
         if (newCommand.commandType === "MODE_CHANGE"){
            let modeCommand = newCommand.value
            this.mode = modeCommand
            let modeObject = {};
            modeObject.completed = true;
            response.results.push(modeObject)          
        
         } else if (newCommand.commandType === "MOVE" && this.mode === "NORMAL") {
            let moveCommand = newCommand.value
            this.position = moveCommand
            let moveObject = {};
            moveObject.completed = true
            response.results.push(moveObject);
            
             } else if (newCommand.commandType === "MOVE" && this.mode === "LOW_POWER") {
                  let moveObject = {};
                  moveObject.completed = false;
                  response.results.push(moveObject);

            
         } else if (newCommand.commandType === "STATUS_CHECK") {
            let statusObject = {completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}};
            response.results.push(statusObject);            
                     
         }    
         
         i++;         
      };
      
      return response;

      }
};


module.exports = Rover;