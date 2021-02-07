(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{370:function(t,n,e){"use strict";e.r(n);var a=e(42),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"中间件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#中间件"}},[t._v("#")]),t._v(" 中间件")]),t._v(" "),e("p",[t._v("Middleware 中间件是一个非常重要的概念，Astroboy 中间件是基于 Koa 中间件构建，所以完全兼容 Koa 的中间件。与普通中间件不同的地方，Astroboy 框架的中间件约定了写法，如下代码所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/**\n * 设置 X-Response-Time 响应头，单位毫秒\n */\nmodule.exports = (options, app) => {\n  return async function rt(ctx, next) {\n    const start = Date.now();\n    await next();\n    ctx.set('X-Response-Time', Date.now() - start);\n  };\n};\n")])])]),e("p",[t._v("中间件格式为一个高阶函数，外部的函数接收两个参数：")]),t._v(" "),e("ul",[e("li",[t._v("第一个参数：options，中间件的配置对象，从相应的中间件配置文件取得。")]),t._v(" "),e("li",[t._v("第二个参数：app，继承 Koa Application 类的一个实例对象")])]),t._v(" "),e("p",[t._v("执行后返回一个 async function，该方法接收两个参数 ctx 和 next。")])])}),[],!1,null,null,null);n.default=s.exports}}]);