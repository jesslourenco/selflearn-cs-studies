const removeFromArray = function(array, ...toRemove) {

    for (i = 0; i < toRemove.length; i++){
        for (j = 0; j < array.length; j++){
            if (toRemove[i] === array[j]){
                array.splice(j, 1);
            }
        }     
     }
     return array;
};

module.exports = removeFromArray;
