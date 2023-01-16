const propCheck = ( Obj, exampleArr ) => {

    let isMatch = true;

    exampleArr.forEach( elem => {
        if(!(elem in Obj))
          isMatch = false;
    });

    return isMatch;
}

export default propCheck;