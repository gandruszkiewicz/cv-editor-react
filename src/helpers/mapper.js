export function mapper(targetObj, sourceObj, mappedPropArray = null) {
    if(!sourceObj){
        return null;
    }
    
    var targetProperties = Object.getOwnPropertyNames(targetObj);
    var sourceProperties = Object.getOwnPropertyNames(sourceObj);
    sourceProperties.map(srcProp => {
        if(targetProperties.some(x => x == srcProp)){
            targetObj[srcProp] = sourceObj[srcProp];
        }
        else if(mappedPropArray != null && mappedPropArray[srcProp] != undefined){
            var mappingProp = mappedPropArray[srcProp];
            targetObj[mappingProp] = sourceObj[srcProp];
        }
    })

    return targetObj;
}

export default mapper;