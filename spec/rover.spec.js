const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

    test("constructor sets position and default values for mode and generatorWatts", function() { const roverTest7 = new Rover(7);     //  TEST 7  //
    
        expect((roverTest7)).toEqual({position: 7, mode: 'NORMAL', generatorWatts: 110})
  }); 
      
        
    test("response returned by receiveMessage contains the name of the message", function() { 
            const testCommand8 = [new Command ("MODE_CHANGE", "LOW_POWER"), new Command("STATUS_CHECK")];
            const testMess8 = new Message ("rovTest8", testCommand8)
            const roverTest8 = new Rover(8);
            const response8 = roverTest8.receiveMessage(testMess8)                                                                                         //  TEST 8  //
      
            expect((response8.message)).toBe("rovTest8");
      })
      
      
      test("response returned by receiveMessage includes two results if two commands are sent in the message", function() { 
            const testCommand9 = ([new Command ("MOVE", 9999), new Command ("STATUS_CHECK")]);  
            const testMess9 = new Message ("rovTest9", testCommand9)                                                                                            //  TEST 9  //
            const roverTest9 = new Rover(9);
            const response9 = roverTest9.receiveMessage(testMess9)                                          
      
                expect((response9.results.length)).toEqual(testCommand9.length);
        })
    

        test("responds correctly to the status check command", function() { 
            const testCommand10 = [new Command ("STATUS_CHECK")];
            const testMess10 = new Message ("rovTest10", testCommand10)
            const roverTest10 = new Rover(10);
            const response10 = roverTest10.receiveMessage(testMess10)                                                                                           //  TEST 10  //

            expect((response10.results)).toEqual([{completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position:10}}]);
      })
      
      
        test("responds correctly to the mode change command", function() { 
          const testCommand11 = [new Command("MODE_CHANGE", "LOW_POWER"), new Command ("STATUS_CHECK")];
          const testMess11 = new Message ("rovTest11", testCommand11)
          const roverTest11 = new Rover(11);
          const response11 = roverTest11.receiveMessage(testMess11)                                                                                            //  TEST 11  //

          expect((response11.results)).toEqual([{completed: true},{completed: true, roverStatus: {mode: 'LOW_POWER', generatorWatts: 110, position:11}}]);
    })


        test("responds with a false completed value when attempting to move in LOW_POWER mode", function() { 
          const testCommand12 = [new Command("MODE_CHANGE", "LOW_POWER"), new Command ("MOVE", 112112)];
          const testMess12 = new Message ("rovTest12", testCommand12)
          const roverTest12 = new Rover(12);
          const response12 = roverTest12.receiveMessage(testMess12)                                                                                            //  TEST 12  //
console.log(response12)
          expect((response12.results)).toEqual([{completed: true}, {completed: false}]);
    })

    test("responds with the position for the move command", function() { 
      const testCommand13 = ([new Command ("MOVE", 141414), new Command ("STATUS_CHECK")]);
      const testMess13 = new Message ("rovTest13", testCommand13)                                                                                              //  TEST 13  //
      const roverTest13 = new Rover(13);
      const response13 = roverTest13.receiveMessage(testMess13)                                          

          expect((response13.results)).toEqual([{completed: true}, {completed: true, roverStatus: {mode: "NORMAL", generatorWatts: 110, position: 141414}}]);
  })




});
