'use strict';
// +----------------------------------------------------------------------
// | CmPage [ 通用页面框架 ]
// +----------------------------------------------------------------------
// | Licensed under the Apache License, Version 2.0
// +----------------------------------------------------------------------
// | Author: defans <defans@sina.cn>
// +----------------------------------------------------------------------

/**
 @module cmpage.service
 */

/**
 * 数据接口实现类，继承自 cmpage/base, 当其他类如（demo/customer，mysql连接）需要调用到本 mssql连接执行SQL语句的时候 可以用 cmpage.service('docu/base') 来调用
 * @class cmpage.service.base
 */
const Base =require('../../cmpage/service/base.js');

module.exports = class extends Base {

    constructor(name, config = {}) {
        super(name,config);
        this.pk ='c_id';
    }

}
