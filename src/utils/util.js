/**
 * 对象按照字母顺序排序
 * @param { Object } obj 待排序对象
 */
function objKeySort(obj) {
    var newkey = Object.keys(obj).sort(); 
    var newObj = {};
    for (var i = 0; i < newkey.length; i++) {
        newObj[newkey[i]] = obj[newkey[i]];
    }
    return newObj;
}

/**
 * 将对象按照字母顺序排序后拼接成字符串
 * @param {Object} obj 待转换对象
 */
function objectConnectKeyValue(obj){
    let str = ''
    const newObj = objKeySort(obj)
    for(let item in newObj){
        str += item + newObj[item]
    }
    return str
}

module.exports = {
    objKeySort,
    objectConnectKeyValue
}