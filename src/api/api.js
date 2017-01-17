require('es6-promise').polyfill()
import fetch from 'isomorphic-fetch'

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const methods = [
    'get',
    'head',
    'post',
    'put',
    'delete'
];

//fetch proxy
var fetchProxy = function(method, api, params) {
    //todo apiServer not integrate
    var fetchPromise
    if (method === 'get') {
        var query = params ? Object.keys(params).filter(k => (params[k] != null && params[k] !== undefined && params[k] !== ''))
            .map(k => k + '=' + encodeURIComponent(params[k]))
            .join('&') : '';
        if (query !== '') {
            api = api.lastIndexOf('?') === -1 ? api + '?' + query : api + query;
        }
        /* fetchPromise = fetch(api, { method, credentials: 'include',mode:'cors', headers: headers });*/
        fetchPromise = fetch(api, { method, mode: 'cors', headers: headers });
    } else {
        let body = JSON.stringify(params)
        debugger;
        fetchPromise = fetch(api, { method, mode: 'cors', body, headers: headers });
    }
    return fetchPromise;
}


// resolve error 
var solveError = function(response) {
    if (response.status >= 400) {
        if (response.status === 401) {
            console.log('未登录，跳转至登录页面!');
        } else if (response.status === 403) {
            /*uiService.uiToaster.error('您没有权限！')*/
            console.log('您没有权限！');
        } else if (response.status === 404) {
            console.log('请求的资源不存在！');
            /*  uiService.uiToaster.error('请求的资源不存在！')*/
        } else {
            response.json().then((data) => {
                /*uiService.uiToaster.error(data.message)*/
                console.log(data.message);

            })
        }
    }
}

//api class
export default class Api {
    constructor(opts) {
            this.opts = opts || {};
            var that = this;
            methods.forEach(function(method) {
                that[method] = function(api, params) {
                    if (api.indexOf('http') < 0 && api.indexOf('https') < 0) {
                        api = this.opts.baseURI.trim('/') + '/' + api;
                    }
                    /*uiService.uiBlocker.blockUI()*/
                    var promise = new Promise((resolve, reject) => {
                        fetchProxy(method, api, params).then((response) => {
                            if (response.status == 200) {
                                response.json().then((data) => {
                                    response.data = data
                                    resolve(response)
                                        //uiService.uiBlocker.unblockUI()
                                }, (response) => {
                                    console.error(`${api} request error,error, msg:${response}`);
                                    //uiService.uiBlocker.unblockUI()
                                });
                            } else {
                                solveError(response)
                                reject()
                            }
                        });
                    }); //end promise
                    return promise;
                }
            })
        } //end constructor
}
