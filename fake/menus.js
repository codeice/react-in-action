module.exports={
    code: 200,
    msg: '成功',
    menus: [{
        id: 1,
        name: 'Dashboard',
        url: '/Dashboard'
    }, {
        id: 2,
        name: 'Demo',
        url: '/Demo',
        submenus: [{
            id: 1,
            name: '二级菜单1',
            url: '/test'
        }, {
            id: 2,
            name: '二级菜单2',
            url: '/test'
        }]
    }]
};
