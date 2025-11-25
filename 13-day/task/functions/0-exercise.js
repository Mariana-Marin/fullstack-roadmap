// write a function named printParameters that receives 3 params and print them.


// ******************* DONT MODIFY - START ******************* 
printParameters(1, 2, "hola"); // should print 1, 2, "hola"

// ******************* DONT MODIFY - END ******************* 

function printParameters (parameterOne, parameterTwo, parameterThree){

    const parameterList = [];
    parameterList.push(parameterOne, parameterTwo, parameterThree);
    //parameterList.push(parameterTwo);
    //parameterList.push(parameterThree);

    console.table(parameterList);

};
