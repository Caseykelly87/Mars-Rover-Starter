const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
    
    test("throws error if a name is NOT passed into the constructor as the first parameter", function() {                                               //  TEST 4  //
        expect( function() { new Message();}).toThrow(new Error('Message name required.'));
      });
    
     
        test("constructor sets name", function() { const messageTest5 = new Message("messTest5");                                                       //  TEST 5  //
    
          expect((messageTest5.name)).toEqual("messTest5")
        }); 
        
        
          test("contains a commands array passed into the constructor as the 2nd argument", function() { const messTest6 = new Message("testMessage6", [6]);        //  TEST 6  //

            expect((messTest6.commands)).toEqual([6])
          
          }); 
      
    
    });