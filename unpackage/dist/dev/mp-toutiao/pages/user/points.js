(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user/points"],{

/***/ 107:
/*!********************************************************************************************!*\
  !*** /Users/wuyongjin/Documents/os/web/web/guang/main.js?{"page":"pages%2Fuser%2Fpoints"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _points = _interopRequireDefault(__webpack_require__(/*! ./pages/user/points.vue */ 108));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_points.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 108:
/*!*************************************************************************!*\
  !*** /Users/wuyongjin/Documents/os/web/web/guang/pages/user/points.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _points_vue_vue_type_template_id_56f34a9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./points.vue?vue&type=template&id=56f34a9e& */ 109);
/* harmony import */ var _points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./points.vue?vue&type=script&lang=js& */ 111);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _points_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./points.vue?vue&type=style&index=0&lang=scss& */ 113);
/* harmony import */ var _Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 16);






/* normalize component */

var component = Object(_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _points_vue_vue_type_template_id_56f34a9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _points_vue_vue_type_template_id_56f34a9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/wuyongjin/Documents/os/web/web/guang/pages/user/points.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 109:
/*!********************************************************************************************************!*\
  !*** /Users/wuyongjin/Documents/os/web/web/guang/pages/user/points.vue?vue&type=template&id=56f34a9e& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_points_vue_vue_type_template_id_56f34a9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./points.vue?vue&type=template&id=56f34a9e& */ 110);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_points_vue_vue_type_template_id_56f34a9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_points_vue_vue_type_template_id_56f34a9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 110:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/wuyongjin/Documents/os/web/web/guang/pages/user/points.vue?vue&type=template&id=56f34a9e& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 111:
/*!**************************************************************************************************!*\
  !*** /Users/wuyongjin/Documents/os/web/web/guang/pages/user/points.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./points.vue?vue&type=script&lang=js& */ 112);
/* harmony import */ var _Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_points_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 112:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/wuyongjin/Documents/os/web/web/guang/pages/user/points.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}var uniLoadMore = function uniLoadMore() {return __webpack_require__.e(/*! import() | components/uni-load-more/uni-load-more */ "components/uni-load-more/uni-load-more").then(__webpack_require__.bind(null, /*! @/components/uni-load-more/uni-load-more.vue */ 420));};var empty = function empty() {return __webpack_require__.e(/*! import() | components/empty */ "components/empty").then(__webpack_require__.bind(null, /*! @/components/empty */ 427));};var _default =


























































{
  components: {
    uniLoadMore: uniLoadMore,
    empty: empty },

  data: function data() {
    return {
      tabCurrentIndex: 0,
      navList: [{
        state: 0,
        ipage: 0,
        text: '积分收入',
        loadingType: 'more',
        orderList: [] },

      {
        state: 1,
        ipage: 0,
        text: '积分支出',
        loadingType: 'more',
        orderList: [] }] };



  },

  onLoad: function onLoad(options) {
    /**
                                     * 修复app端点击除全部订单外的按钮进入时不加载数据的问题
                                     * 替换onLoad下代码即可
                                     */
    console.log(options);
    if (options.state) {
      this.tabCurrentIndex = +options.state;
    }




    if (options.state == 0) {
      this.loadData();
    }

  },

  methods: {
    //获取订单列表
    loadData: function loadData(source) {var _this = this;
      //这里是将订单挂载到tab列表下
      var index = this.tabCurrentIndex;
      var navItem = this.navList[index];
      var state = navItem.state;
      var ipage = navItem.ipage;

      if (source === 'tabChange' && navItem.loaded === true) {
        //tab切换只有第一次需要加载数据
        return;
      }
      if (navItem.loadingType === 'loading') {
        //防止重复加载
        return;
      }

      navItem.loadingType = 'loading';
      if (state == 0) {
        this.$http.post('/cms/member/order/list', { maxPoints: 0.01, ipage: ipage }).then(function (res) {
          navItem.loadingType = 'noMore';
          if (res.data.items && res.data.items) {var _navItem$orderList;
            (_navItem$orderList = navItem.orderList).push.apply(_navItem$orderList, _toConsumableArray(
            res.data.items));

            navItem.loadingType = 'more';
            _this.$set(navItem, 'ipage', parseInt(res.data.pager.ipage) + 1);
          }
          _this.$set(navItem, 'loaded', true);

        }).catch(function (err) {});
      } else {
        this.$http.post('/cms/member/point/list', { maxPoints: 0.01, ipage: ipage }).then(function (res) {
          navItem.loadingType = 'noMore';
          if (res.data.items && res.data.items) {var _navItem$orderList2;
            (_navItem$orderList2 = navItem.orderList).push.apply(_navItem$orderList2, _toConsumableArray(
            res.data.items));

            navItem.loadingType = 'more';
            _this.$set(navItem, 'ipage', parseInt(res.data.pager.ipage) + 1);
          }
          _this.$set(navItem, 'loaded', true);

        }).catch(function (err) {});
      }
    },
    //swiper 切换
    changeTab: function changeTab(e) {
      this.tabCurrentIndex = e.target.current;
      this.loadData('tabChange');
    },
    //顶部tab点击
    tabClick: function tabClick(index) {
      this.tabCurrentIndex = index;
    },
    //删除订单
    deleteOrder: function deleteOrder(index) {var _this2 = this;
      uni.showLoading({
        title: '请稍后' });

      setTimeout(function () {
        _this2.navList[_this2.tabCurrentIndex].orderList.splice(index, 1);
        uni.hideLoading();
      }, 600);
    },
    //取消订单
    cancelOrder: function cancelOrder(item) {var _this3 = this;
      uni.showLoading({
        title: '请稍后' });

      setTimeout(function () {var _this3$orderStateExp =
        _this3.orderStateExp(9),stateTip = _this3$orderStateExp.stateTip,stateTipColor = _this3$orderStateExp.stateTipColor;
        item = Object.assign(item, {
          state: 9,
          stateTip: stateTip,
          stateTipColor: stateTipColor });


        //取消订单后删除待付款中该项
        var list = _this3.navList[1].orderList;
        var index = list.findIndex(function (val) {return val.id === item.id;});
        index !== -1 && list.splice(index, 1);

        uni.hideLoading();
      }, 600);
    },
    //订单状态文字和颜色
    orderStateExp: function orderStateExp(state) {
      var stateTip = '',
      stateTipColor = '#fa436a';
      switch (+state) {
        case 1:
          stateTip = '待付款';break;
        case 2:
          stateTip = '待发货';break;
        case 9:
          stateTip = '订单已关闭';
          stateTipColor = '#909399';
          break;

        //更多自定义
      }
      return { stateTip: stateTip, stateTipColor: stateTipColor };
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 113:
/*!***********************************************************************************************************!*\
  !*** /Users/wuyongjin/Documents/os/web/web/guang/pages/user/points.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_points_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../../Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./points.vue?vue&type=style&index=0&lang=scss& */ 114);
/* harmony import */ var _Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_points_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_points_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_points_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_points_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_points_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 114:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/wuyongjin/Documents/os/web/web/guang/pages/user/points.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[107,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3d1eW9uZ2ppbi9Eb2N1bWVudHMvb3Mvd2ViL3dlYi9ndWFuZy9tYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvd3V5b25namluL0RvY3VtZW50cy9vcy93ZWIvd2ViL2d1YW5nL3BhZ2VzL3VzZXIvcG9pbnRzLnZ1ZT9iNGIwIiwid2VicGFjazovLy8vVXNlcnMvd3V5b25namluL0RvY3VtZW50cy9vcy93ZWIvd2ViL2d1YW5nL3BhZ2VzL3VzZXIvcG9pbnRzLnZ1ZT82YTk4Iiwid2VicGFjazovLy8vVXNlcnMvd3V5b25namluL0RvY3VtZW50cy9vcy93ZWIvd2ViL2d1YW5nL3BhZ2VzL3VzZXIvcG9pbnRzLnZ1ZT81MzY1Iiwid2VicGFjazovLy8vVXNlcnMvd3V5b25namluL0RvY3VtZW50cy9vcy93ZWIvd2ViL2d1YW5nL3BhZ2VzL3VzZXIvcG9pbnRzLnZ1ZT83Mjk2Iiwid2VicGFjazovLy8vVXNlcnMvd3V5b25namluL0RvY3VtZW50cy9vcy93ZWIvd2ViL2d1YW5nL3BhZ2VzL3VzZXIvcG9pbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vL1VzZXJzL3d1eW9uZ2ppbi9Eb2N1bWVudHMvb3Mvd2ViL3dlYi9ndWFuZy9wYWdlcy91c2VyL3BvaW50cy52dWU/YzhhYyIsIndlYnBhY2s6Ly8vL1VzZXJzL3d1eW9uZ2ppbi9Eb2N1bWVudHMvb3Mvd2ViL3dlYi9ndWFuZy9wYWdlcy91c2VyL3BvaW50cy52dWU/MDhiYyJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSIsImNvbXBvbmVudHMiLCJ1bmlMb2FkTW9yZSIsImVtcHR5IiwiZGF0YSIsInRhYkN1cnJlbnRJbmRleCIsIm5hdkxpc3QiLCJzdGF0ZSIsImlwYWdlIiwidGV4dCIsImxvYWRpbmdUeXBlIiwib3JkZXJMaXN0Iiwib25Mb2FkIiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJsb2FkRGF0YSIsIm1ldGhvZHMiLCJzb3VyY2UiLCJpbmRleCIsIm5hdkl0ZW0iLCJsb2FkZWQiLCIkaHR0cCIsInBvc3QiLCJtYXhQb2ludHMiLCJ0aGVuIiwicmVzIiwiaXRlbXMiLCJwdXNoIiwiJHNldCIsInBhcnNlSW50IiwicGFnZXIiLCJjYXRjaCIsImVyciIsImNoYW5nZVRhYiIsImUiLCJ0YXJnZXQiLCJjdXJyZW50IiwidGFiQ2xpY2siLCJkZWxldGVPcmRlciIsInVuaSIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJzZXRUaW1lb3V0Iiwic3BsaWNlIiwiaGlkZUxvYWRpbmciLCJjYW5jZWxPcmRlciIsIml0ZW0iLCJvcmRlclN0YXRlRXhwIiwic3RhdGVUaXAiLCJzdGF0ZVRpcENvbG9yIiwiT2JqZWN0IiwiYXNzaWduIiwibGlzdCIsImZpbmRJbmRleCIsInZhbCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBLHdDQUFtQjs7QUFFbkI7QUFDQSw4RjtBQUNBQSxVQUFVLENBQUNDLGVBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFGO0FBQzNCO0FBQ0w7QUFDYzs7O0FBR25FO0FBQ3NMO0FBQ3RMLGdCQUFnQixrTEFBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUE4aEMsQ0FBZ0IsbThCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMyRG5pQztBQUNkQyxZQUFVLEVBQUU7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Q0FBTDtBQUNDQSxrQkFBUSxHQUFHLEtBQVgsQ0FBa0I7QUFDbkIsYUFBSyxDQUFMO0FBQ0NBLGtCQUFRLEdBQUcsT0FBWDtBQUNBQyx1QkFBYSxHQUFHLFNBQWhCO0FBQ0E7O0FBRUQ7QUFWRDtBQVlBLGFBQU8sRUFBQ0QsUUFBUSxFQUFSQSxRQUFELEVBQVdDLGFBQWEsRUFBYkEsYUFBWCxFQUFQO0FBQ0EsS0F4R08sRUE3Q0ssRTs7Ozs7Ozs7Ozs7OztBQzNEZjtBQUFBO0FBQUE7QUFBQTtBQUFndUQsQ0FBZ0IsK2dEQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBcHZELHVDIiwiZmlsZSI6InBhZ2VzL3VzZXIvcG9pbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnICAgICAgICAgICAgXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL3VzZXIvcG9pbnRzLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3BvaW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTZmMzRhOWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcG9pbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcG9pbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9wb2ludHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NmYzNGE5ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NmYzNGE5ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcG9pbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NmYzNGE5ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NmYzNGE5ZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiVXNlcnMvd3V5b25namluL0RvY3VtZW50cy9vcy93ZWIvd2ViL2d1YW5nL3BhZ2VzL3VzZXIvcG9pbnRzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYS5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE3LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYS5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYS5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYS5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9wb2ludHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU2ZjM0YTllJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3BvaW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYS5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYS5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYS5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9wb2ludHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCB1bmlMb2FkTW9yZSBmcm9tICdAL2NvbXBvbmVudHMvdW5pLWxvYWQtbW9yZS91bmktbG9hZC1tb3JlLnZ1ZSc7XG5pbXBvcnQgZW1wdHkgZnJvbSBcIkAvY29tcG9uZW50cy9lbXB0eVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuXHRjb21wb25lbnRzOiB7XG5cdFx0dW5pTG9hZE1vcmUsXG5cdFx0ZW1wdHlcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGFiQ3VycmVudEluZGV4OiAwLFxuXHRcdFx0bmF2TGlzdDogW3tcblx0XHRcdFx0XHRzdGF0ZTogMCxcblx0XHRcdFx0XHRpcGFnZTowLFxuXHRcdFx0XHRcdHRleHQ6ICfnp6/liIbmlLblhaUnLFxuXHRcdFx0XHRcdGxvYWRpbmdUeXBlOiAnbW9yZScsXG5cdFx0XHRcdFx0b3JkZXJMaXN0OiBbXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhdGU6IDEsXG5cdFx0XHRcdFx0aXBhZ2U6MCxcblx0XHRcdFx0XHR0ZXh0OiAn56ev5YiG5pSv5Ye6Jyxcblx0XHRcdFx0XHRsb2FkaW5nVHlwZTogJ21vcmUnLFxuXHRcdFx0XHRcdG9yZGVyTGlzdDogW11cblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHR9O1xuXHR9LFxuXHRcblx0b25Mb2FkKG9wdGlvbnMpe1xuXHRcdC8qKlxuXHRcdCAqIOS/ruWkjWFwcOerr+eCueWHu+mZpOWFqOmDqOiuouWNleWklueahOaMiemSrui/m+WFpeaXtuS4jeWKoOi9veaVsOaNrueahOmXrumimFxuXHRcdCAqIOabv+aNom9uTG9hZOS4i+S7o+eggeWNs+WPr1xuXHRcdCAqL1xuXHRcdGNvbnNvbGUubG9nKG9wdGlvbnMpXG5cdFx0aWYob3B0aW9ucy5zdGF0ZSl7XHRcdFx0XHRcblx0XHR0aGlzLnRhYkN1cnJlbnRJbmRleCA9ICtvcHRpb25zLnN0YXRlO1xuXHRcdH1cblxuXG5cblxuXHRcdGlmKG9wdGlvbnMuc3RhdGUgPT0gMCl7XG5cdFx0XHR0aGlzLmxvYWREYXRhKClcblx0XHR9XG5cblx0fSxcblx0IFxuXHRtZXRob2RzOiB7XG5cdFx0Ly/ojrflj5borqLljZXliJfooahcblx0XHRsb2FkRGF0YShzb3VyY2Upe1xuXHRcdFx0Ly/ov5nph4zmmK/lsIborqLljZXmjILovb3liLB0YWLliJfooajkuItcblx0XHRcdGxldCBpbmRleCA9IHRoaXMudGFiQ3VycmVudEluZGV4O1xuXHRcdFx0bGV0IG5hdkl0ZW0gPSB0aGlzLm5hdkxpc3RbaW5kZXhdO1xuXHRcdFx0bGV0IHN0YXRlID0gbmF2SXRlbS5zdGF0ZTtcblx0XHRcdGxldCBpcGFnZSA9IG5hdkl0ZW0uaXBhZ2U7XG5cdFx0XHRcblx0XHRcdGlmKHNvdXJjZSA9PT0gJ3RhYkNoYW5nZScgJiYgbmF2SXRlbS5sb2FkZWQgPT09IHRydWUpe1xuXHRcdFx0XHQvL3RhYuWIh+aNouWPquacieesrOS4gOasoemcgOimgeWKoOi9veaVsOaNrlxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZihuYXZJdGVtLmxvYWRpbmdUeXBlID09PSAnbG9hZGluZycpe1xuXHRcdFx0XHQvL+mYsuatoumHjeWkjeWKoOi9vVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdG5hdkl0ZW0ubG9hZGluZ1R5cGUgPSAnbG9hZGluZyc7XG5cdFx0XHRpZihzdGF0ZT09MCl7XG5cdFx0XHRcdHRoaXMuJGh0dHAucG9zdCgnL2Ntcy9tZW1iZXIvb3JkZXIvbGlzdCcsIHttYXhQb2ludHM6MC4wMSxpcGFnZTppcGFnZX0pLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0XHRuYXZJdGVtLmxvYWRpbmdUeXBlID0gJ25vTW9yZSc7XG5cdFx0XHRcdFx0aWYocmVzLmRhdGEuaXRlbXMmJnJlcy5kYXRhLml0ZW1zKXtcblx0XHRcdFx0XHRcdG5hdkl0ZW0ub3JkZXJMaXN0LnB1c2goXG5cdFx0XHRcdFx0XHRcdC4uLnJlcy5kYXRhLml0ZW1zXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0bmF2SXRlbS5sb2FkaW5nVHlwZSA9ICdtb3JlJztcblx0XHRcdFx0XHRcdHRoaXMuJHNldChuYXZJdGVtLCAnaXBhZ2UnLCBwYXJzZUludChyZXMuZGF0YS5wYWdlci5pcGFnZSkrMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuJHNldChuYXZJdGVtLCAnbG9hZGVkJywgdHJ1ZSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pLmNhdGNoKGVyciA9PiB7fSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy4kaHR0cC5wb3N0KCcvY21zL21lbWJlci9wb2ludC9saXN0Jywge21heFBvaW50czowLjAxLGlwYWdlOmlwYWdlfSkudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdG5hdkl0ZW0ubG9hZGluZ1R5cGUgPSAnbm9Nb3JlJztcblx0XHRcdFx0XHRpZihyZXMuZGF0YS5pdGVtcyYmcmVzLmRhdGEuaXRlbXMpe1xuXHRcdFx0XHRcdFx0bmF2SXRlbS5vcmRlckxpc3QucHVzaChcblx0XHRcdFx0XHRcdFx0Li4ucmVzLmRhdGEuaXRlbXNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRuYXZJdGVtLmxvYWRpbmdUeXBlID0gJ21vcmUnO1xuXHRcdFx0XHRcdFx0dGhpcy4kc2V0KG5hdkl0ZW0sICdpcGFnZScsIHBhcnNlSW50KHJlcy5kYXRhLnBhZ2VyLmlwYWdlKSsxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy4kc2V0KG5hdkl0ZW0sICdsb2FkZWQnLCB0cnVlKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fSkuY2F0Y2goZXJyID0+IHt9KTtcblx0XHRcdH1cblx0XHR9LCBcblx0XHQvL3N3aXBlciDliIfmjaJcblx0XHRjaGFuZ2VUYWIoZSl7XG5cdFx0XHR0aGlzLnRhYkN1cnJlbnRJbmRleCA9IGUudGFyZ2V0LmN1cnJlbnQ7XG5cdFx0XHR0aGlzLmxvYWREYXRhKCd0YWJDaGFuZ2UnKTtcblx0XHR9LFxuXHRcdC8v6aG26YOodGFi54K55Ye7XG5cdFx0dGFiQ2xpY2soaW5kZXgpe1xuXHRcdFx0dGhpcy50YWJDdXJyZW50SW5kZXggPSBpbmRleDtcblx0XHR9LFxuXHRcdC8v5Yig6Zmk6K6i5Y2VXG5cdFx0ZGVsZXRlT3JkZXIoaW5kZXgpe1xuXHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcblx0XHRcdFx0dGl0bGU6ICfor7fnqI3lkI4nXG5cdFx0XHR9KVxuXHRcdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHR0aGlzLm5hdkxpc3RbdGhpcy50YWJDdXJyZW50SW5kZXhdLm9yZGVyTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcblx0XHRcdH0sIDYwMClcblx0XHR9LFxuXHRcdC8v5Y+W5raI6K6i5Y2VXG5cdFx0Y2FuY2VsT3JkZXIoaXRlbSl7XG5cdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xuXHRcdFx0XHR0aXRsZTogJ+ivt+eojeWQjidcblx0XHRcdH0pXG5cdFx0XHRzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRcdGxldCB7c3RhdGVUaXAsIHN0YXRlVGlwQ29sb3J9ID0gdGhpcy5vcmRlclN0YXRlRXhwKDkpO1xuXHRcdFx0XHRpdGVtID0gT2JqZWN0LmFzc2lnbihpdGVtLCB7XG5cdFx0XHRcdFx0c3RhdGU6IDksXG5cdFx0XHRcdFx0c3RhdGVUaXAsIFxuXHRcdFx0XHRcdHN0YXRlVGlwQ29sb3Jcblx0XHRcdFx0fSlcblx0XHRcdFx0XG5cdFx0XHRcdC8v5Y+W5raI6K6i5Y2V5ZCO5Yig6Zmk5b6F5LuY5qy+5Lit6K+l6aG5XG5cdFx0XHRcdGxldCBsaXN0ID0gdGhpcy5uYXZMaXN0WzFdLm9yZGVyTGlzdDtcblx0XHRcdFx0bGV0IGluZGV4ID0gbGlzdC5maW5kSW5kZXgodmFsPT52YWwuaWQgPT09IGl0ZW0uaWQpO1xuXHRcdFx0XHRpbmRleCAhPT0gLTEgJiYgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcblx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XG5cdFx0XHR9LCA2MDApXG5cdFx0fSxcblx0XHQvL+iuouWNleeKtuaAgeaWh+Wtl+WSjOminOiJslxuXHRcdG9yZGVyU3RhdGVFeHAoc3RhdGUpe1xuXHRcdFx0bGV0IHN0YXRlVGlwID0gJycsXG5cdFx0XHRcdHN0YXRlVGlwQ29sb3IgPSAnI2ZhNDM2YSc7XG5cdFx0XHRzd2l0Y2goK3N0YXRlKXtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHN0YXRlVGlwID0gJ+W+heS7mOasvic7IGJyZWFrO1xuXHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0c3RhdGVUaXAgPSAn5b6F5Y+R6LSnJzsgYnJlYWs7XG5cdFx0XHRcdGNhc2UgOTpcblx0XHRcdFx0XHRzdGF0ZVRpcCA9ICforqLljZXlt7LlhbPpl60nOyBcblx0XHRcdFx0XHRzdGF0ZVRpcENvbG9yID0gJyM5MDkzOTknO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHQvL+abtOWkmuiHquWumuS5iVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtzdGF0ZVRpcCwgc3RhdGVUaXBDb2xvcn07XG5cdFx0fVxuXHR9LFxufVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYS5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYS5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYS5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYS5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9wb2ludHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3BvaW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9