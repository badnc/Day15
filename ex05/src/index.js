function myObject() {
    'use strict';

    const MATH_CONSTANTS = {
        E: 2.71828
    };
    ////
    Object.freeze(MATH_CONSTANTS);
    MATH_CONSTANTS.E = 88;
    /////
    try {
        MATH_CONSTANTS.E = 23;
    } catch(error) {
        console.log(error.message);
    }
    return MATH_CONSTANTS.E;
}
const E = myObject();
module.exports = myObject;