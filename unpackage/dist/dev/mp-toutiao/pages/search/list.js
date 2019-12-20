(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/search/list"],{

/***/ 177:
/*!********************************************************************************************!*\
  !*** /Users/wuyongjin/Documents/os/web/web/guang/main.js?{"page":"pages%2Fsearch%2Flist"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _list = _interopRequireDefault(__webpack_require__(/*! ./pages/search/list.vue */ 178));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_list.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 178:
/*!*************************************************************************!*\
  !*** /Users/wuyongjin/Documents/os/web/web/guang/pages/search/list.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_75a5eea2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=75a5eea2& */ 179);
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ 181);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.vue?vue&type=style&index=0&lang=css& */ 183);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 16);






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_75a5eea2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_75a5eea2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/wuyongjin/Documents/os/web/web/guang/pages/search/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 179:
/*!********************************************************************************************************!*\
  !*** /Users/wuyongjin/Documents/os/web/web/guang/pages/search/list.vue?vue&type=template&id=75a5eea2& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_75a5eea2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=template&id=75a5eea2& */ 180);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_75a5eea2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_75a5eea2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 180:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/wuyongjin/Documents/os/web/web/guang/pages/search/list.vue?vue&type=template&id=75a5eea2& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var m0 = _vm.px(_vm.selectH)
  var m1 = _vm.px(_vm.dropScreenH + 18)
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        m1: m1
      }
    }
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 181:
/*!**************************************************************************************************!*\
  !*** /Users/wuyongjin/Documents/os/web/web/guang/pages/search/list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=script&lang=js& */ 182);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 182:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/wuyongjin/Documents/os/web/web/guang/pages/search/list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}var tuiIcon = function tuiIcon() {return __webpack_require__.e(/*! import() | components/icon/icon */ "components/icon/icon").then(__webpack_require__.bind(null, /*! @/components/icon/icon */ 305));};var tuiDrawer = function tuiDrawer() {return __webpack_require__.e(/*! import() | components/drawer/drawer */ "components/drawer/drawer").then(__webpack_require__.bind(null, /*! @/components/drawer/drawer */ 434));};var tuiLoadmore = function tuiLoadmore() {return __webpack_require__.e(/*! import() | components/loadmore/loadmore */ "components/loadmore/loadmore").then(__webpack_require__.bind(null, /*! @/components/loadmore/loadmore */ 319));};var tuiNomore = function tuiNomore() {return __webpack_require__.e(/*! import() | components/nomore/nomore */ "components/nomore/nomore").then(__webpack_require__.bind(null, /*! @/components/nomore/nomore */ 326));};var tuiTopDropdown = function tuiTopDropdown() {return __webpack_require__.e(/*! import() | components/top-dropdown/top-dropdown */ "components/top-dropdown/top-dropdown").then(__webpack_require__.bind(null, /*! @/components/top-dropdown/top-dropdown */ 371));};var goods = function goods() {return __webpack_require__.e(/*! import() | common/model/goods/index */ "common/model/goods/index").then(__webpack_require__.bind(null, /*! @/common/model/goods/index */ 338));};var _default = _defineProperty({











































































































































































































































  components: {
    tuiIcon: tuiIcon,
    tuiDrawer: tuiDrawer,
    tuiLoadmore: tuiLoadmore,
    tuiNomore: tuiNomore,
    tuiTopDropdown: tuiTopDropdown,
    goods: goods },

  data: function data() {
    return {
      searchKey: "", //搜索关键词
      page: {
        ipage: 0,
        price1: '',
        price2: '' },

      width: 200, //header宽度
      height: 64, //header高度
      inputTop: 0, //搜索框距离顶部距离
      arrowTop: 0, //箭头距离顶部距离
      dropScreenH: 0, //下拉筛选框距顶部距离
      attrData: [],
      attrIndex: -1,
      dropScreenShow: false,
      scrollTop: 0,
      tabIndex: 0, //顶部筛选索引
      isList: false, //是否以列表展示  | 列表或大图
      drawer: false,
      drawerH: 0, //抽屉内部scrollview高度
      selectedName: "综合",
      selectH: 0,
      dropdownList: [{
        name: "综合",
        selected: true },
      {
        name: "价格升序",
        selected: false }],

      attrArr: [{
        name: "新品",
        selectedName: "新品",
        isActive: false,
        list: [] },
      {
        name: "品牌",
        selectedName: "品牌",
        isActive: false,
        list: [{
          name: "trendsetter",
          selected: false },
        {
          name: "维肯（Viken）",
          selected: false },
        {
          name: "AORO",
          selected: false },
        {
          name: "苏发",
          selected: false },
        {
          name: "飞花令（FHL）",
          selected: false },
        {
          name: "叶梦丝",
          selected: false },
        {
          name: "ITZOOM",
          selected: false },
        {
          name: "亿魅",
          selected: false },
        {
          name: "LEIKS",
          selected: false },
        {
          name: "雷克士",
          selected: false },
        {
          name: "蕊芬妮",
          selected: false },
        {
          name: "辉宏达",
          selected: false },
        {
          name: "英西达",
          selected: false },
        {
          name: "戴为",
          selected: false },
        {
          name: "魔风者",
          selected: false },
        {
          name: "即满",
          selected: false },
        {
          name: "北比",
          selected: false },
        {
          name: "娱浪",
          selected: false },
        {
          name: "搞怪猪",
          selected: false }] },

      {
        name: "类型",
        selectedName: "类型",
        isActive: false,
        list: [{
          name: "线充套装",
          selected: false },
        {
          name: "单条装",
          selected: false },
        {
          name: "车载充电器",
          selected: false },
        {
          name: "PD快充",
          selected: false },
        {
          name: "数据线转换器",
          selected: false },
        {
          name: "多条装",
          selected: false },
        {
          name: "充电插头",
          selected: false },
        {
          name: "无线充电器",
          selected: false },
        {
          name: "座式充电器",
          selected: false },
        {
          name: "万能充",
          selected: false },
        {
          name: "转换器/转接线",
          selected: false },
        {
          name: "MFI苹果认证",
          selected: false },
        {
          name: "转换器",
          selected: false },
        {
          name: "苹果认证",
          selected: false }] },

      {
        name: "适用手机",
        selectedName: "适用手机",
        isActive: false,
        list: [{
          name: "通用",
          selected: false },
        {
          name: "vivo",
          selected: false },
        {
          name: "OPPO",
          selected: false },
        {
          name: "魅族",
          selected: false },
        {
          name: "苹果",
          selected: false },
        {
          name: "华为",
          selected: false },
        {
          name: "三星",
          selected: false },
        {
          name: "荣耀",
          selected: false },
        {
          name: "诺基亚5",
          selected: false },
        {
          name: "荣耀4",
          selected: false },
        {
          name: "诺基",
          selected: false },
        {
          name: "荣耀",
          selected: false },
        {
          name: "诺基亚2",
          selected: false },
        {
          name: "荣耀2",
          selected: false },
        {
          name: "诺基",
          selected: false }] }],


      items: [],
      loadding: false,
      pullUpOn: true };

  },
  onLoad: function onLoad(options) {var _this = this;
    var obj = {};









    this.searchKey = options.q || "";

    uni.getSystemInfo({
      success: function success(res) {
        _this.width = obj.left || res.windowWidth;
        _this.height = obj.top ? obj.top + obj.height + 8 : res.statusBarHeight + 44;
        _this.inputTop = obj.top ? obj.top + (obj.height - 30) / 2 : res.statusBarHeight + 7;
        _this.arrowTop = obj.top ? obj.top + (obj.height - 32) / 2 : res.statusBarHeight + 6;
        //略小，避免误差带来的影响
        // this.dropScreenH = this.height * 750 / res.windowWidth + 186;
        _this.dropScreenH = _this.height * 750 / res.windowWidth + 76;
        _this.drawerH = res.windowHeight - uni.upx2px(100) - _this.height;
      } });

    this.queryItems();
  },
  onReachBottom: function onReachBottom() {
    this.queryItems();
  },
  methods: {
    px: function px(num) {
      return uni.upx2px(num) + "px";
    },
    btnDropChange: function btnDropChange(e) {var _this2 = this;
      var index = e.currentTarget.dataset.index;
      var arr = JSON.parse(JSON.stringify(this.attrArr[index].list));
      if (arr.length === 0) {
        this.$set(this.attrArr[index], "isActive", !this.attrArr[index].isActive);
      } else {
        this.attrData = arr;
        this.attrIndex = index;
        this.dropScreenShow = true;
        this.$set(this.attrArr[index], "isActive", false);
        this.scrollTop = 1;
        this.$nextTick(function () {
          _this2.scrollTop = 0;
        });
      }
    },
    btnSelected: function btnSelected(e) {
      var index = e.currentTarget.dataset.index;
      this.$set(this.attrData[index], "selected", !this.attrData[index].selected);
      this.queryItems('tabChange');
    },
    reset: function reset() {
      var arr = this.attrData;var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
        for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var item = _step.value;
          item.selected = false;
        }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return != null) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
      this.attrData = arr;
    },
    btnCloseDrop: function btnCloseDrop() {var _this3 = this;
      this.scrollTop = 1;
      this.$nextTick(function () {
        _this3.scrollTop = 0;
      });
      this.dropScreenShow = false;
      this.attrIndex = -1;
    },
    btnSure: function btnSure() {
      var index = this.attrIndex;
      var arr = this.attrData;
      var active = false;
      var attrName = "";
      //这里只是为了展示选中效果,并非实际场景
      var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var item = _step2.value;
          if (item.selected) {
            active = true;
            attrName += attrName ? ";" + item.name : item.name;
          }
        }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2.return != null) {_iterator2.return();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}
      var obj = this.attrArr[index];
      this.btnCloseDrop();
      this.$set(obj, "isActive", active);
      this.$set(obj, "selectedName", attrName);
    },
    showDropdownList: function showDropdownList() {
      this.selectH = 246;
      this.tabIndex = 0;
    },
    hideDropdownList: function hideDropdownList() {
      this.selectH = 0;
    },
    dropdownItem: function dropdownItem(e) {
      var index = e.currentTarget.dataset.index;
      var arr = this.dropdownList;
      for (var i = 0; i < arr.length; i++) {
        if (i === index) {
          arr[i].selected = true;
        } else {
          arr[i].selected = false;
        }
      }
      this.dropdownList = arr;
      this.selectedName = index == 0 ? '综合' : '价格';
      this.selectH = 0;

      this.queryItems('tabChange');
    },
    screen: function screen(e) {
      var index = e.currentTarget.dataset.index;
      if (index == 0) {
        this.showDropdownList();
      } else if (index == 1) {
        this.tabIndex = 1;
        this.queryItems('tabChange');
      } else if (index == 2) {
        this.isList = !this.isList;
      } else if (index == 3) {
        this.drawer = true;
      }
    },
    closeDrawer: function closeDrawer() {
      this.drawer = false;
      this.queryItems('tabChange');
    },
    clearDrawer: function clearDrawer() {
      this.page.price1 = '',
      this.page.price2 = '',
      this.drawer = false;
    },
    back: function back() {
      if (this.drawer) {
        this.closeDrawer();
      } else {
        // uni.navigateBack()
        uni.redirectTo({
          url: '/pages/search/search' });

      }
    },
    search: function search() {
      uni.navigateTo({
        url: '/pages/search/search' });

    },
    detail: function detail() {
      uni.navigateTo({
        url: '../productDetail/productDetail' });

    },
    queryItems: function queryItems(source) {var _this4 = this;
      if (source == 'tabChange') {
        this.items = [];
        this.page.ipage = 0;
      }

      this.loadding = true;

      var sort = '';
      if (this.tabIndex == 1) {
        sort = 'volume';
      } else
      {
        console.log(this.dropdownList);
        if (this.selectedName == '价格') {
          sort = 'coupon_price';
        } else
        if (this.selectedName == '综合') {
          sort = '';
        }
      }

      this.$http.post('/cms/goods/search', { ipage: this.page.ipage, q: this.searchKey, sort: sort, start_price: this.page.price1, end_price: this.page.price2 }).then(function (res) {
        _this4.loadingType = 'noMore';
        if (res.data.items && res.data.items) {
          if (source == 'tabChange') {
            _this4.items = res.data.items;
          } else {var _this4$items;
            (_this4$items = _this4.items).push.apply(_this4$items, _toConsumableArray(
            res.data.items));

          }
          if (res.data.pager && res.data.pager.ipage) {
            _this4.page.ipage = parseInt(res.data.pager.ipage) + 1;
          }
          if (res.data.items.length >= 20) {
            _this4.loadingType = 'more';
          }
        }
        _this4.loadding = false;
        uni.stopPullDownRefresh();
      }).catch(function (err) {});
    } },

  onPullDownRefresh: function onPullDownRefresh() {
    this.page.ipage = 1;
    this.pullUpOn = true;
    this.loadding = false;
    this.queryItems('tabChange');

  } }, "onReachBottom",
function onReachBottom() {
  if (!this.pullUpOn) return;
  this.loadding = true;
  this.queryItems();
});exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 183:
/*!**********************************************************************************************************!*\
  !*** /Users/wuyongjin/Documents/os/web/web/guang/pages/search/list.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=style&index=0&lang=css& */ 184);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 184:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/wuyongjin/Documents/os/web/web/guang/pages/search/list.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[177,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3d1eW9uZ2ppbi9Eb2N1bWVudHMvb3Mvd2ViL3dlYi9ndWFuZy9tYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvd3V5b25namluL0RvY3VtZW50cy9vcy93ZWIvd2ViL2d1YW5nL3BhZ2VzL3NlYXJjaC9saXN0LnZ1ZT8xYjk5Iiwid2VicGFjazovLy8vVXNlcnMvd3V5b25namluL0RvY3VtZW50cy9vcy93ZWIvd2ViL2d1YW5nL3BhZ2VzL3NlYXJjaC9saXN0LnZ1ZT82YTYyIiwid2VicGFjazovLy8vVXNlcnMvd3V5b25namluL0RvY3VtZW50cy9vcy93ZWIvd2ViL2d1YW5nL3BhZ2VzL3NlYXJjaC9saXN0LnZ1ZT9mZjJmIiwid2VicGFjazovLy8vVXNlcnMvd3V5b25namluL0RvY3VtZW50cy9vcy93ZWIvd2ViL2d1YW5nL3BhZ2VzL3NlYXJjaC9saXN0LnZ1ZT80NGQyIiwid2VicGFjazovLy8vVXNlcnMvd3V5b25namluL0RvY3VtZW50cy9vcy93ZWIvd2ViL2d1YW5nL3BhZ2VzL3NlYXJjaC9saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vL1VzZXJzL3d1eW9uZ2ppbi9Eb2N1bWVudHMvb3Mvd2ViL3dlYi9ndWFuZy9wYWdlcy9zZWFyY2gvbGlzdC52dWU/MTRjMiIsIndlYnBhY2s6Ly8vL1VzZXJzL3d1eW9uZ2ppbi9Eb2N1bWVudHMvb3Mvd2ViL3dlYi9ndWFuZy9wYWdlcy9zZWFyY2gvbGlzdC52dWU/MzA3OCJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSIsImNvbXBvbmVudHMiLCJ0dWlJY29uIiwidHVpRHJhd2VyIiwidHVpTG9hZG1vcmUiLCJ0dWlOb21vcmUiLCJ0dWlUb3BEcm9wZG93biIsImdvb2RzIiwiZGF0YSIsInNlYXJjaEtleSIsInBhZ2UiLCJpcGFnZSIsInByaWNlMSIsInByaWNlMiIsIndpZHRoIiwiaGVpZ2h0IiwiaW5wdXRUb3AiLCJhcnJvd1RvcCIsImRyb3BTY3JlZW5IIiwiYXR0ckRhdGEiLCJhdHRySW5kZXgiLCJkcm9wU2NyZWVuU2hvdyIsInNjcm9sbFRvcCIsInRhYkluZGV4IiwiaXNMaXN0IiwiZHJhd2VyIiwiZHJhd2VySCIsInNlbGVjdGVkTmFtZSIsInNlbGVjdEgiLCJkcm9wZG93bkxpc3QiLCJuYW1lIiwic2VsZWN0ZWQiLCJhdHRyQXJyIiwiaXNBY3RpdmUiLCJsaXN0IiwiaXRlbXMiLCJsb2FkZGluZyIsInB1bGxVcE9uIiwib25Mb2FkIiwib3B0aW9ucyIsIm9iaiIsInEiLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsImxlZnQiLCJ3aW5kb3dXaWR0aCIsInRvcCIsInN0YXR1c0JhckhlaWdodCIsIndpbmRvd0hlaWdodCIsInVweDJweCIsInF1ZXJ5SXRlbXMiLCJvblJlYWNoQm90dG9tIiwibWV0aG9kcyIsInB4IiwibnVtIiwiYnRuRHJvcENoYW5nZSIsImUiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiYXJyIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibGVuZ3RoIiwiJHNldCIsIiRuZXh0VGljayIsImJ0blNlbGVjdGVkIiwicmVzZXQiLCJpdGVtIiwiYnRuQ2xvc2VEcm9wIiwiYnRuU3VyZSIsImFjdGl2ZSIsImF0dHJOYW1lIiwic2hvd0Ryb3Bkb3duTGlzdCIsImhpZGVEcm9wZG93bkxpc3QiLCJkcm9wZG93bkl0ZW0iLCJpIiwic2NyZWVuIiwiY2xvc2VEcmF3ZXIiLCJjbGVhckRyYXdlciIsImJhY2siLCJyZWRpcmVjdFRvIiwidXJsIiwic2VhcmNoIiwibmF2aWdhdGVUbyIsImRldGFpbCIsInNvdXJjZSIsInNvcnQiLCJjb25zb2xlIiwibG9nIiwiJGh0dHAiLCJwb3N0Iiwic3RhcnRfcHJpY2UiLCJlbmRfcHJpY2UiLCJ0aGVuIiwibG9hZGluZ1R5cGUiLCJwdXNoIiwicGFnZXIiLCJwYXJzZUludCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJjYXRjaCIsImVyciIsIm9uUHVsbERvd25SZWZyZXNo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VEMsbUJBQWlCLEVBQUUsNkJBQVc7QUFDN0IsU0FBSy9GLElBQUwsQ0FBVUMsS0FBVixHQUFrQixDQUFsQjtBQUNBLFNBQUswQixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS0QsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFNBQUtnQixVQUFMLENBQWdCLFdBQWhCOztBQUVBLEc7QUFDYyx5QkFBVztBQUN6QixNQUFJLENBQUMsS0FBS2YsUUFBVixFQUFvQjtBQUNwQixPQUFLRCxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsT0FBS2dCLFVBQUw7QUFDQSxDOzs7Ozs7Ozs7Ozs7O0FDM29CRjtBQUFBO0FBQUE7QUFBQTtBQUF3MEMsQ0FBZ0Isa3JDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBNTFDLHVDIiwiZmlsZSI6InBhZ2VzL3NlYXJjaC9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnICAgICAgICAgICAgXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL3NlYXJjaC9saXN0LnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc1YTVlZWEyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3NWE1ZWVhMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3NWE1ZWVhMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzVhNWVlYTImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzVhNWVlYTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIlVzZXJzL3d1eW9uZ2ppbi9Eb2N1bWVudHMvb3Mvd2ViL3dlYi9ndWFuZy9wYWdlcy9zZWFyY2gvbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NWE1ZWVhMiZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICB2YXIgbTAgPSBfdm0ucHgoX3ZtLnNlbGVjdEgpXG4gIHZhciBtMSA9IF92bS5weChfdm0uZHJvcFNjcmVlbkggKyAxOClcbiAgX3ZtLiRtcC5kYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICB7XG4gICAgICAkcm9vdDoge1xuICAgICAgICBtMDogbTAsXG4gICAgICAgIG0xOiBtMVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCB0dWlJY29uIGZyb20gXCJAL2NvbXBvbmVudHMvaWNvbi9pY29uXCJcbmltcG9ydCB0dWlEcmF3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kcmF3ZXIvZHJhd2VyXCJcbmltcG9ydCB0dWlMb2FkbW9yZSBmcm9tIFwiQC9jb21wb25lbnRzL2xvYWRtb3JlL2xvYWRtb3JlXCJcbmltcG9ydCB0dWlOb21vcmUgZnJvbSBcIkAvY29tcG9uZW50cy9ub21vcmUvbm9tb3JlXCJcbmltcG9ydCB0dWlUb3BEcm9wZG93biBmcm9tIFwiQC9jb21wb25lbnRzL3RvcC1kcm9wZG93bi90b3AtZHJvcGRvd25cIlxuaW1wb3J0IGdvb2RzIGZyb20gJ0AvY29tbW9uL21vZGVsL2dvb2RzL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjb21wb25lbnRzOiB7XG5cdFx0dHVpSWNvbixcblx0XHR0dWlEcmF3ZXIsXG5cdFx0dHVpTG9hZG1vcmUsXG5cdFx0dHVpTm9tb3JlLFxuXHRcdHR1aVRvcERyb3Bkb3duLFxuXHRcdGdvb2RzXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlYXJjaEtleTogXCJcIiwgLy/mkJzntKLlhbPplK7or41cblx0XHRcdHBhZ2U6e1xuXHRcdFx0XHRpcGFnZTowLFxuXHRcdFx0XHRwcmljZTE6JycsXG5cdFx0XHRcdHByaWNlMjonJyxcblx0XHRcdH0sXG5cdFx0XHR3aWR0aDogMjAwLCAvL2hlYWRlcuWuveW6plxuXHRcdFx0aGVpZ2h0OiA2NCwgLy9oZWFkZXLpq5jluqZcblx0XHRcdGlucHV0VG9wOiAwLCAvL+aQnOe0ouahhui3neemu+mhtumDqOi3neemu1xuXHRcdFx0YXJyb3dUb3A6IDAsIC8v566t5aS06Led56a76aG26YOo6Led56a7XG5cdFx0XHRkcm9wU2NyZWVuSDogMCwgLy/kuIvmi4nnrZvpgInmoYbot53pobbpg6jot53nprtcblx0XHRcdGF0dHJEYXRhOiBbXSxcblx0XHRcdGF0dHJJbmRleDogLTEsXG5cdFx0XHRkcm9wU2NyZWVuU2hvdzogZmFsc2UsXG5cdFx0XHRzY3JvbGxUb3A6IDAsXG5cdFx0XHR0YWJJbmRleDogMCwgLy/pobbpg6jnrZvpgInntKLlvJVcblx0XHRcdGlzTGlzdDogZmFsc2UsIC8v5piv5ZCm5Lul5YiX6KGo5bGV56S6ICB8IOWIl+ihqOaIluWkp+WbvlxuXHRcdFx0ZHJhd2VyOiBmYWxzZSxcblx0XHRcdGRyYXdlckg6IDAsIC8v5oq95bGJ5YaF6YOoc2Nyb2xsdmlld+mrmOW6plxuXHRcdFx0c2VsZWN0ZWROYW1lOiBcIue7vOWQiFwiLFxuXHRcdFx0c2VsZWN0SDogMCxcblx0XHRcdGRyb3Bkb3duTGlzdDogW3tcblx0XHRcdFx0bmFtZTogXCLnu7zlkIhcIixcblx0XHRcdFx0c2VsZWN0ZWQ6IHRydWVcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogXCLku7fmoLzljYfluo9cIixcblx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHRcdFx0fV0sXG5cdFx0XHRhdHRyQXJyOiBbe1xuXHRcdFx0XHRuYW1lOiBcIuaWsOWTgVwiLFxuXHRcdFx0XHRzZWxlY3RlZE5hbWU6IFwi5paw5ZOBXCIsXG5cdFx0XHRcdGlzQWN0aXZlOiBmYWxzZSxcblx0XHRcdFx0bGlzdDogW11cblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogXCLlk4HniYxcIixcblx0XHRcdFx0c2VsZWN0ZWROYW1lOiBcIuWTgeeJjFwiLFxuXHRcdFx0XHRpc0FjdGl2ZTogZmFsc2UsXG5cdFx0XHRcdGxpc3Q6IFt7XG5cdFx0XHRcdFx0bmFtZTogXCJ0cmVuZHNldHRlclwiLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogXCLnu7Togq/vvIhWaWtlbu+8iVwiLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogXCJBT1JPXCIsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiBcIuiLj+WPkVwiLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogXCLpo57oirHku6TvvIhGSEzvvIlcIixcblx0XHRcdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6IFwi5Y+25qKm5LidXCIsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiBcIklUWk9PTVwiLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogXCLkur/prYVcIixcblx0XHRcdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6IFwiTEVJS1NcIixcblx0XHRcdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6IFwi6Zu35YWL5aOrXCIsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiBcIuiViuiKrOWmrlwiLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogXCLovonlro/ovr5cIixcblx0XHRcdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6IFwi6Iux6KW/6L6+XCIsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiBcIuaItOS4ulwiLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogXCLprZTpo47ogIVcIixcblx0XHRcdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6IFwi5Y2z5ruhXCIsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiBcIuWMl+avlFwiLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogXCLlqLHmtapcIixcblx0XHRcdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6IFwi5pCe5oCq54yqXCIsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0XHRcdH1dXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6IFwi57G75Z6LXCIsXG5cdFx0XHRcdHNlbGVjdGVkTmFtZTogXCLnsbvlnotcIixcblx0XHRcdFx0aXNBY3RpdmU6IGZhbHNlLFxuXHRcdFx0XHRsaXN0OiBbe1xuXHRcdFx0XHRcdG5hbWU6IFwi57q/5YWF5aWX6KOFXCIsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiBcIuWNleadoeijhVwiLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogXCLovabovb3lhYXnlLXlmahcIixcblx0XHRcdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6IFwiUETlv6vlhYVcIixcblx0XHRcdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6IFwi5pWw5o2u57q/6L2s5o2i5ZmoXCIsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiBcIuWkmuadoeijhVwiLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogXCLlhYXnlLXmj5LlpLRcIixcblx0XHRcdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6IFwi5peg57q/5YWF55S15ZmoXCIsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiBcIuW6p+W8j+WFheeUteWZqFwiLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogXCLkuIfog73lhYVcIixcblx0XHRcdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6IFwi6L2s5o2i5ZmoL+i9rOaOpee6v1wiLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogXCJNRknoi7nmnpzorqTor4FcIixcblx0XHRcdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6IFwi6L2s5o2i5ZmoXCIsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiBcIuiLueaenOiupOivgVwiLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHRcdFx0XHR9XVxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiBcIumAgueUqOaJi+aculwiLFxuXHRcdFx0XHRzZWxlY3RlZE5hbWU6IFwi6YCC55So5omL5py6XCIsXG5cdFx0XHRcdGlzQWN0aXZlOiBmYWxzZSxcblx0XHRcdFx0bGlzdDogW3tcblx0XHRcdFx0XHRuYW1lOiBcIumAmueUqFwiLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogXCJ2aXZvXCIsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiBcIk9QUE9cIixcblx0XHRcdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6IFwi6a2F5pePXCIsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiBcIuiLueaenFwiLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogXCLljY7kuLpcIixcblx0XHRcdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6IFwi5LiJ5pifXCIsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiBcIuiNo+iAgFwiLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogXCLor7rln7rkupo1XCIsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiBcIuiNo+iAgDRcIixcblx0XHRcdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6IFwi6K+65Z+6XCIsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiBcIuiNo+iAgFwiLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0bmFtZTogXCLor7rln7rkupoyXCIsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRuYW1lOiBcIuiNo+iAgDJcIixcblx0XHRcdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdG5hbWU6IFwi6K+65Z+6XCIsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0XHRcdH1dXG5cdFx0XHR9XSxcblx0XHRcdGl0ZW1zOiBbXSxcblx0XHRcdGxvYWRkaW5nOiBmYWxzZSxcblx0XHRcdHB1bGxVcE9uOiB0cnVlXG5cdFx0fVxuXHR9LFxuXHRvbkxvYWQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHRsZXQgb2JqID0ge307XG5cblxuXG5cblxuXG5cblxuXG5cdFx0dGhpcy5zZWFyY2hLZXkgPSBvcHRpb25zLnEgfHwgXCJcIjtcblx0XHRcblx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XG5cdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdHRoaXMud2lkdGggPSBvYmoubGVmdCB8fCByZXMud2luZG93V2lkdGg7XG5cdFx0XHRcdHRoaXMuaGVpZ2h0ID0gb2JqLnRvcCA/IChvYmoudG9wICsgb2JqLmhlaWdodCArIDgpIDogKHJlcy5zdGF0dXNCYXJIZWlnaHQgKyA0NCk7XG5cdFx0XHRcdHRoaXMuaW5wdXRUb3AgPSBvYmoudG9wID8gKG9iai50b3AgKyAob2JqLmhlaWdodCAtIDMwKSAvIDIpIDogKHJlcy5zdGF0dXNCYXJIZWlnaHQgKyA3KTtcblx0XHRcdFx0dGhpcy5hcnJvd1RvcCA9IG9iai50b3AgPyAob2JqLnRvcCArIChvYmouaGVpZ2h0IC0gMzIpIC8gMikgOiAocmVzLnN0YXR1c0JhckhlaWdodCArIDYpO1xuXHRcdFx0XHQvL+eVpeWwj++8jOmBv+WFjeivr+W3ruW4puadpeeahOW9seWTjVxuXHRcdFx0XHQvLyB0aGlzLmRyb3BTY3JlZW5IID0gdGhpcy5oZWlnaHQgKiA3NTAgLyByZXMud2luZG93V2lkdGggKyAxODY7XG5cdFx0XHRcdHRoaXMuZHJvcFNjcmVlbkggPSB0aGlzLmhlaWdodCAqIDc1MCAvIHJlcy53aW5kb3dXaWR0aCArIDc2O1xuXHRcdFx0XHR0aGlzLmRyYXdlckggPSByZXMud2luZG93SGVpZ2h0IC0gdW5pLnVweDJweCgxMDApIC0gdGhpcy5oZWlnaHRcblx0XHRcdH1cblx0XHR9KVxuXHRcdHRoaXMucXVlcnlJdGVtcygpO1xuXHR9LFxuXHRvblJlYWNoQm90dG9tKCl7XG5cdFx0dGhpcy5xdWVyeUl0ZW1zKCk7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRweChudW0pIHtcblx0XHRcdHJldHVybiB1bmkudXB4MnB4KG51bSkgKyBcInB4XCJcblx0XHR9LFxuXHRcdGJ0bkRyb3BDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuXHRcdFx0bGV0IGFyciA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5hdHRyQXJyW2luZGV4XS5saXN0KSk7XG5cdFx0XHRpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLiRzZXQodGhpcy5hdHRyQXJyW2luZGV4XSwgXCJpc0FjdGl2ZVwiLCAhdGhpcy5hdHRyQXJyW2luZGV4XS5pc0FjdGl2ZSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYXR0ckRhdGEgPSBhcnI7XG5cdFx0XHRcdHRoaXMuYXR0ckluZGV4ID0gaW5kZXg7XG5cdFx0XHRcdHRoaXMuZHJvcFNjcmVlblNob3cgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLiRzZXQodGhpcy5hdHRyQXJyW2luZGV4XSwgXCJpc0FjdGl2ZVwiLCBmYWxzZSk7XG5cdFx0XHRcdHRoaXMuc2Nyb2xsVG9wID0gMTtcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsVG9wID0gMFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGJ0blNlbGVjdGVkOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcblx0XHRcdHRoaXMuJHNldCh0aGlzLmF0dHJEYXRhW2luZGV4XSwgXCJzZWxlY3RlZFwiLCAhdGhpcy5hdHRyRGF0YVtpbmRleF0uc2VsZWN0ZWQpXG5cdFx0XHR0aGlzLnF1ZXJ5SXRlbXMoJ3RhYkNoYW5nZScpO1xuXHRcdH0sXG5cdFx0cmVzZXQoKSB7XG5cdFx0XHRsZXQgYXJyID0gdGhpcy5hdHRyRGF0YTtcblx0XHRcdGZvciAobGV0IGl0ZW0gb2YgYXJyKSB7XG5cdFx0XHRcdGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMuYXR0ckRhdGEgPSBhcnJcblx0XHR9LFxuXHRcdGJ0bkNsb3NlRHJvcCgpIHtcblx0XHRcdHRoaXMuc2Nyb2xsVG9wID0gMTtcblx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0dGhpcy5zY3JvbGxUb3AgPSAwXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuZHJvcFNjcmVlblNob3cgPSBmYWxzZTtcblx0XHRcdHRoaXMuYXR0ckluZGV4ID0gLTFcblx0XHR9LFxuXHRcdGJ0blN1cmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IGluZGV4ID0gdGhpcy5hdHRySW5kZXg7XG5cdFx0XHRsZXQgYXJyID0gdGhpcy5hdHRyRGF0YTtcblx0XHRcdGxldCBhY3RpdmUgPSBmYWxzZTtcblx0XHRcdGxldCBhdHRyTmFtZSA9IFwiXCI7XG5cdFx0XHQvL+i/memHjOWPquaYr+S4uuS6huWxleekuumAieS4reaViOaenCzlubbpnZ7lrp7pmYXlnLrmma9cblx0XHRcdGZvciAobGV0IGl0ZW0gb2YgYXJyKSB7XG5cdFx0XHRcdGlmIChpdGVtLnNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0YWN0aXZlID0gdHJ1ZTtcblx0XHRcdFx0XHRhdHRyTmFtZSArPSBhdHRyTmFtZSA/IFwiO1wiICsgaXRlbS5uYW1lIDogaXRlbS5uYW1lXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGxldCBvYmogPSB0aGlzLmF0dHJBcnJbaW5kZXhdO1xuXHRcdFx0dGhpcy5idG5DbG9zZURyb3AoKTtcblx0XHRcdHRoaXMuJHNldChvYmosIFwiaXNBY3RpdmVcIiwgYWN0aXZlKTtcblx0XHRcdHRoaXMuJHNldChvYmosIFwic2VsZWN0ZWROYW1lXCIsIGF0dHJOYW1lKTtcblx0XHR9LFxuXHRcdHNob3dEcm9wZG93bkxpc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5zZWxlY3RIID0gMjQ2O1xuXHRcdFx0dGhpcy50YWJJbmRleCA9IDA7XG5cdFx0fSxcblx0XHRoaWRlRHJvcGRvd25MaXN0OiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuc2VsZWN0SCA9IDBcblx0XHR9LFxuXHRcdGRyb3Bkb3duSXRlbTogZnVuY3Rpb24oZSkge1xuXHRcdFx0bGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG5cdFx0XHRsZXQgYXJyID0gdGhpcy5kcm9wZG93bkxpc3Q7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoaSA9PT0gaW5kZXgpIHtcblx0XHRcdFx0XHRhcnJbaV0uc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFycltpXS5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRyb3Bkb3duTGlzdCA9IGFycjtcblx0XHRcdHRoaXMuc2VsZWN0ZWROYW1lID0gaW5kZXggPT0gMCA/ICfnu7zlkIgnIDogJ+S7t+agvCc7XG5cdFx0XHR0aGlzLnNlbGVjdEggPSAwXG5cdFx0XHRcblx0XHRcdHRoaXMucXVlcnlJdGVtcygndGFiQ2hhbmdlJyk7XG5cdFx0fSxcblx0XHRzY3JlZW46IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuXHRcdFx0aWYgKGluZGV4ID09IDApIHtcblx0XHRcdFx0dGhpcy5zaG93RHJvcGRvd25MaXN0KCk7XG5cdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09IDEpIHtcblx0XHRcdFx0dGhpcy50YWJJbmRleCA9IDFcblx0XHRcdFx0dGhpcy5xdWVyeUl0ZW1zKCd0YWJDaGFuZ2UnKTtcblx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT0gMikge1xuXHRcdFx0XHR0aGlzLmlzTGlzdCA9ICF0aGlzLmlzTGlzdFxuXHRcdFx0fSBlbHNlIGlmIChpbmRleCA9PSAzKSB7XG5cdFx0XHRcdHRoaXMuZHJhd2VyID0gdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y2xvc2VEcmF3ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5kcmF3ZXIgPSBmYWxzZTtcblx0XHRcdHRoaXMucXVlcnlJdGVtcygndGFiQ2hhbmdlJyk7XG5cdFx0fSxcblx0XHRjbGVhckRyYXdlcjogZnVuY3Rpb24oKXtcblx0XHRcdHRoaXMucGFnZS5wcmljZTEgPSAnJyxcblx0XHRcdHRoaXMucGFnZS5wcmljZTIgPSAnJyxcblx0XHRcdHRoaXMuZHJhd2VyID0gZmFsc2U7XG5cdFx0fSxcblx0XHRiYWNrOiBmdW5jdGlvbigpIHtcblx0XHRcdGlmICh0aGlzLmRyYXdlcikge1xuXHRcdFx0XHR0aGlzLmNsb3NlRHJhd2VyKClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHVuaS5uYXZpZ2F0ZUJhY2soKVxuXHRcdFx0XHR1bmkucmVkaXJlY3RUbyh7XG5cdFx0XHRcdFx0dXJsOicvcGFnZXMvc2VhcmNoL3NlYXJjaCdcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9LFxuXHRcdHNlYXJjaDogZnVuY3Rpb24oKSB7XG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdHVybDogJy9wYWdlcy9zZWFyY2gvc2VhcmNoJ1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdGRldGFpbDogZnVuY3Rpb24oKSB7XG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdHVybDogJy4uL3Byb2R1Y3REZXRhaWwvcHJvZHVjdERldGFpbCdcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRxdWVyeUl0ZW1zKHNvdXJjZSl7XG5cdFx0XHRpZihzb3VyY2U9PSd0YWJDaGFuZ2UnKXtcblx0XHRcdFx0dGhpcy5pdGVtcyA9IFtdO1xuXHRcdFx0XHR0aGlzLnBhZ2UuaXBhZ2UgID0gMDtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dGhpcy5sb2FkZGluZyA9IHRydWU7XG5cdFx0XHRcblx0XHRcdGxldCBzb3J0ID0gJyc7XG5cdFx0XHRpZih0aGlzLnRhYkluZGV4PT0xKXtcblx0XHRcdFx0c29ydCA9ICd2b2x1bWUnO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuZHJvcGRvd25MaXN0KTtcblx0XHRcdFx0aWYodGhpcy5zZWxlY3RlZE5hbWU9PSfku7fmoLwnKXtcblx0XHRcdFx0XHRzb3J0ID0gJ2NvdXBvbl9wcmljZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZih0aGlzLnNlbGVjdGVkTmFtZT09J+e7vOWQiCcpe1xuXHRcdFx0XHRcdHNvcnQgPSAnJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0aGlzLiRodHRwLnBvc3QoJy9jbXMvZ29vZHMvc2VhcmNoJywge2lwYWdlOnRoaXMucGFnZS5pcGFnZSxxOnRoaXMuc2VhcmNoS2V5LHNvcnQ6c29ydCxzdGFydF9wcmljZTp0aGlzLnBhZ2UucHJpY2UxLGVuZF9wcmljZTp0aGlzLnBhZ2UucHJpY2UyfSkudGhlbihyZXMgPT4ge1xuXHRcdFx0XHR0aGlzLmxvYWRpbmdUeXBlID0gJ25vTW9yZSc7XG5cdFx0XHRcdGlmKHJlcy5kYXRhLml0ZW1zJiZyZXMuZGF0YS5pdGVtcyl7XG5cdFx0XHRcdFx0aWYoc291cmNlPT0ndGFiQ2hhbmdlJyl7XG5cdFx0XHRcdFx0XHR0aGlzLml0ZW1zID0gcmVzLmRhdGEuaXRlbXM7XG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHR0aGlzLml0ZW1zLnB1c2goXG5cdFx0XHRcdFx0XHRcdC4uLnJlcy5kYXRhLml0ZW1zXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihyZXMuZGF0YS5wYWdlciYmcmVzLmRhdGEucGFnZXIuaXBhZ2Upe1xuXHRcdFx0XHRcdFx0dGhpcy5wYWdlLmlwYWdlID0gcGFyc2VJbnQocmVzLmRhdGEucGFnZXIuaXBhZ2UpKzE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHJlcy5kYXRhLml0ZW1zLmxlbmd0aD49MjApe1x0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR0aGlzLmxvYWRpbmdUeXBlID0gJ21vcmUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxvYWRkaW5nID0gZmFsc2U7XG5cdFx0XHRcdHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKClcblx0XHRcdH0pLmNhdGNoKGVyciA9PiB7fSk7XG5cdFx0fSxcblx0fSxcblx0b25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMucGFnZS5pcGFnZSA9IDE7XG5cdFx0dGhpcy5wdWxsVXBPbiA9IHRydWU7XG5cdFx0dGhpcy5sb2FkZGluZyA9IGZhbHNlXG5cdFx0dGhpcy5xdWVyeUl0ZW1zKCd0YWJDaGFuZ2UnKTtcblx0XHRcblx0fSxcblx0b25SZWFjaEJvdHRvbTogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF0aGlzLnB1bGxVcE9uKSByZXR1cm47XG5cdFx0dGhpcy5sb2FkZGluZyA9IHRydWU7XG5cdFx0dGhpcy5xdWVyeUl0ZW1zKCk7XG5cdH0sXG59XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2xpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLWN1c3RvbS1ibG9jay1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=