export function mapper(targetObj, sourceObj) {
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