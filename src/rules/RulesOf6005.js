/**
 * RulesOf6005 represents the collaboration policy of 6.005 as described by the
 * general information on Stellar.
 */
class RulesOf6005 {
    /**
     * Judge whether a given piece of code may be used in an assignment (problem
     * set or team project) or not, according to the 6.005 collaboration policy.
     *
     * @param {boolean} writtenByYourself      true if the code in question was written by
     *                                         yourself or, in the case of a team project,
     *                                         your teammates, otherwise false.
     * @param {boolean} availableToOthers      if not writtenByYourself, whether or not the
     *                                         code in question is available to all other
     *                                         students in the class. Otherwise ignored.
     * @param {boolean} writtenAsCourseWork    if not writtenByYourself, whether or not the
     *                                         code in question was written specifically as
     *                                         part of a solution to a 6.005 assignment, in
     *                                         the current or past semesters. Otherwise
     *                                         ignored.
     * @param {boolean} citingYourSource       if not writtenByYourself, whether or not you
     *                                         properly cite your source. Otherwise ignored.
     * @param {boolean} implementationRequired whether the assignment specifically asks
     *                                         you to implement the feature in question.
     * @returns {boolean} Whether or not, based on the information provided in the
     *                    arguments, you are likely to be allowed to use the code in
     *                    question in your assignment, according to the 6.005 collaboration
     *                    policy for the current semester.
     */
    static mayUseCodeInAssignment(writtenByYourself, availableToOthers, writtenAsCourseWork, citingYourSource, implementationRequired) {
      // If the code was written by yourself or your teammates, you may always use it
      if (writtenByYourself) {
        return true;
      }
  
      // If the assignment requires implementation, you must write it yourself
      if (implementationRequired) {
        return false;
      }
  
      // For code not written by yourself, it must be:
      // 1. Available to all other students
      // 2. Not written specifically as part of 6.005 coursework
      // 3. Properly cited
      if (availableToOthers && !writtenAsCourseWork && citingYourSource) {
        return true;
      }
  
      // In all other cases, you may not use the code
      return false;
    }
  }
  
  // Main execution to test the function
  console.log("You may certainly use code you wrote yourself: " +
    RulesOf6005.mayUseCodeInAssignment(false, false, true, true, true));
  
    module.exports = RulesOf6005; 