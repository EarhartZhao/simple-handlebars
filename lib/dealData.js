var data = require('../static/js/data.js');
var dataVal = data.caseData;
function getName(){  //get name for list
    var newData = [];
    for(var i=0; i<dataVal.length; i++){
        newData.push(dataVal[i].name)
    }
    return newData;
}

var dealData = function(name){
    if(name == ''|| name  == undefined){
        var newData = {
            data:getName(),
        }
        return newData
    }else{
        var selectData = [];
        for(var i=0; i<dataVal.length; i++){
            if(dataVal[i].name == name){
                console.log(111)
                selectData.push(dataVal[i])
            }
        }
        var newData = {
            data:selectData,
        }
        return newData
    }  
}

module.exports.dealData = dealData;