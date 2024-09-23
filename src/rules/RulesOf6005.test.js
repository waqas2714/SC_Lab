// Import the RulesOf6005 class
const RulesOf6005 = require('./RulesOf6005'); // Adjust the path if needed

describe('RulesOf6005 Test Suite', () => {
   
    test('Error for un-cited publicly-available code', () => {
      expect(RulesOf6005.mayUseCodeInAssignment(false, true, false, false, false)).toBe(true);
    });
  
    test('should succeed for self-written required code', () => {
      expect(RulesOf6005.mayUseCodeInAssignment(true, false, true, true, true)).toBe(false);
    });
  
    test('should succeed for self-written optional code that is cited', () => {
      expect(RulesOf6005.mayUseCodeInAssignment(true, true, false, true, true)).toBe(true);
    });
  
    test('Error for publicly available required code that is not cited', () => {
      expect(RulesOf6005.mayUseCodeInAssignment(false, false, true, true, false)).toBe(false);
    });
  });
  