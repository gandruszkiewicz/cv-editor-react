export function mapper(targetObj, sourceObj) {
    if(!sourceObj){
        return null;
    }
    
    var targetProperties = Object.getOwnPropertyNames(targetObj);
    var sourceProperties = Object.getOwnPropertyNames(sourceObj);

    sourceProperties.map(srcProp => {
        if(targetProperties.some(x => x == srcProp)){
            targetObj[srcProp] = sourceObj[srcProp];
        }
    })

    return targetObj;
}

export default mapper;