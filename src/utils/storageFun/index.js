
/*
*
*   向缓存中存入数据
*   使用方式：
*   参数说明：key的名称 ，存入的数据
*
*/
export const StorageSetFun = function (key, data) {

    window.localStorage.setItem(key, JSON.stringify(data));

};


/*
*
*   在缓存中取数据
*   使用方式：
*   参数说明：key的名称
*
*/
export const StorageGetFun = function (key) {

    let data = window.localStorage.getItem(key);

    if(data === null){
        return false;
    }

    return JSON.parse(data)


};

/*
*
*   删除缓存中的数据
*   使用方式：
*   参数说明：key的名称
*
*/
export const StorageDeleteFun = function (key) {

    window.localStorage.removeItem(key);

};
