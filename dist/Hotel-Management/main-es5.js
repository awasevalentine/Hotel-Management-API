function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/home-layout/home-layout.component */
    "./src/app/pages/home-layout/home-layout.component.ts");
    /* harmony import */


    var _pages_reservations_luxury_rooms_luxury_rooms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/reservations/luxury-rooms/luxury-rooms.component */
    "./src/app/pages/reservations/luxury-rooms/luxury-rooms.component.ts");
    /* harmony import */


    var _pages_reservations_payment_portal_lux_payment_lux_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/reservations/payment-portal/lux-payment/lux-payment.component */
    "./src/app/pages/reservations/payment-portal/lux-payment/lux-payment.component.ts");
    /* harmony import */


    var _pages_payment_folder_pay_now_pay_now_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/payment-folder/pay-now/pay-now.component */
    "./src/app/pages/payment-folder/pay-now/pay-now.component.ts");
    /* harmony import */


    var _pages_payment_folder_pay_at_hotel_pay_at_hotel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/payment-folder/pay-at-hotel/pay-at-hotel.component */
    "./src/app/pages/payment-folder/pay-at-hotel/pay-at-hotel.component.ts");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _pages_no_route_no_route_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/no-route/no-route.component */
    "./src/app/pages/no-route/no-route.component.ts");
    /* harmony import */


    var _pages_reservations_payment_portal_mini_luxury_mini_luxury_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/reservations/payment-portal/mini-luxury/mini-luxury.component */
    "./src/app/pages/reservations/payment-portal/mini-luxury/mini-luxury.component.ts");
    /* harmony import */


    var _pages_reservations_payment_portal_conference_room_conference_room_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/reservations/payment-portal/conference-room/conference-room.component */
    "./src/app/pages/reservations/payment-portal/conference-room/conference-room.component.ts");
    /* harmony import */


    var _pages_reservations_payment_portal_single_single_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/reservations/payment-portal/single/single.component */
    "./src/app/pages/reservations/payment-portal/single/single.component.ts");
    /* harmony import */


    var _pages_reservations_mini_luxury_mini_luxury_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/reservations/mini-luxury/mini-luxury.component */
    "./src/app/pages/reservations/mini-luxury/mini-luxury.component.ts");
    /* harmony import */


    var _pages_reservations_single_rooms_single_rooms_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/reservations/single-rooms/single-rooms.component */
    "./src/app/pages/reservations/single-rooms/single-rooms.component.ts");
    /* harmony import */


    var _pages_reservations_confrence_room_confrence_room_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/reservations/confrence-room/confrence-room.component */
    "./src/app/pages/reservations/confrence-room/confrence-room.component.ts");
    /* harmony import */


    var _pages_payment_folder_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/payment-folder/payment-confirmation/payment-confirmation.component */
    "./src/app/pages/payment-folder/payment-confirmation/payment-confirmation.component.ts");
    /* harmony import */


    var _pages_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/rooms/rooms.component */
    "./src/app/pages/rooms/rooms.component.ts");
    /* harmony import */


    var _pages_gallary_gallary_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/gallary/gallary.component */
    "./src/app/pages/gallary/gallary.component.ts");
    /* harmony import */


    var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/contact-us/contact-us.component */
    "./src/app/pages/contact-us/contact-us.component.ts");
    /* harmony import */


    var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/about-us/about-us.component */
    "./src/app/pages/about-us/about-us.component.ts");

    var routes = [{
      path: '',
      component: _pages_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"]
    }, {
      path: 'luxury',
      component: _pages_reservations_luxury_rooms_luxury_rooms_component__WEBPACK_IMPORTED_MODULE_3__["LuxuryRoomsComponent"]
    }, {
      path: 'miniLuxury',
      component: _pages_reservations_mini_luxury_mini_luxury_component__WEBPACK_IMPORTED_MODULE_12__["MiniLuxuryComponent"]
    }, {
      path: 'singleRoom',
      component: _pages_reservations_single_rooms_single_rooms_component__WEBPACK_IMPORTED_MODULE_13__["SingleRoomsComponent"]
    }, {
      path: 'conferenceRoom',
      component: _pages_reservations_confrence_room_confrence_room_component__WEBPACK_IMPORTED_MODULE_14__["ConferenceRoomComponent"]
    }, {
      path: 'conferencePayment',
      component: _pages_reservations_payment_portal_conference_room_conference_room_component__WEBPACK_IMPORTED_MODULE_10__["ConferenceRoomPaymentComponent"]
    }, {
      path: 'singlePayment',
      component: _pages_reservations_payment_portal_single_single_component__WEBPACK_IMPORTED_MODULE_11__["SinglePaymentComponent"]
    }, {
      path: 'luxpay',
      component: _pages_reservations_payment_portal_lux_payment_lux_payment_component__WEBPACK_IMPORTED_MODULE_4__["LuxPaymentComponent"]
    }, {
      path: 'miniLuxuryPayment',
      component: _pages_reservations_payment_portal_mini_luxury_mini_luxury_component__WEBPACK_IMPORTED_MODULE_9__["MiniLuxuryPaymentComponent"]
    }, {
      path: 'payNow',
      component: _pages_payment_folder_pay_now_pay_now_component__WEBPACK_IMPORTED_MODULE_5__["PayNowComponent"]
    }, {
      path: 'payAtHotel',
      component: _pages_payment_folder_pay_at_hotel_pay_at_hotel_component__WEBPACK_IMPORTED_MODULE_6__["PayAtHotelComponent"]
    }, {
      path: 'dashboard',
      component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
    }, {
      path: 'confirmation',
      component: _pages_payment_folder_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_15__["PaymentConfirmationComponent"]
    }, {
      path: 'rooms',
      component: _pages_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_16__["RoomsComponent"]
    }, {
      path: 'gallary',
      component: _pages_gallary_gallary_component__WEBPACK_IMPORTED_MODULE_17__["GallaryComponent"]
    }, {
      path: 'contactUs',
      component: _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_18__["ContactUsComponent"]
    }, {
      path: 'aboutUs',
      component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_19__["AboutUsComponent"]
    }, {
      path: '**',
      component: _pages_no_route_no_route_component__WEBPACK_IMPORTED_MODULE_8__["NoRouteComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pages_header_layout_header_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages/header-layout/header-layout.component */
    "./src/app/pages/header-layout/header-layout.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/footer/footer.component */
    "./src/app/pages/footer/footer.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Hotel-Management';
      }

      _createClass(AppComponent, [{
        key: "searchTerm",
        value: function searchTerm(searchValue) {
          console.log("the search term is ", searchValue);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [[1, "main-content-wrapper"], [1, "footer"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_pages_header_layout_header_layout_component__WEBPACK_IMPORTED_MODULE_1__["HeaderLayoutComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: [".footer[_ngcontent-%COMP%]{\n}\n@media(max-width: 767px) {\n  .container[_ngcontent-%COMP%]{\n    width: auto;\n    margin: 0;\n\n  }\n  .main-content-wrapper[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100vh;\n    overflow-x: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFNBQVM7O0VBRVg7RUFDQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmZvb3Rlcntcbn1cbkBtZWRpYShtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250YWluZXJ7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAwO1xuXG4gIH1cbiAgLm1haW4tY29udGVudC13cmFwcGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB9XG59XG5cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/home-layout/home-layout.component */
    "./src/app/pages/home-layout/home-layout.component.ts");
    /* harmony import */


    var _pages_header_layout_header_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/header-layout/header-layout.component */
    "./src/app/pages/header-layout/header-layout.component.ts");
    /* harmony import */


    var _pages_reservations_luxury_rooms_luxury_rooms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/reservations/luxury-rooms/luxury-rooms.component */
    "./src/app/pages/reservations/luxury-rooms/luxury-rooms.component.ts");
    /* harmony import */


    var _pages_reservations_mini_luxury_mini_luxury_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/reservations/mini-luxury/mini-luxury.component */
    "./src/app/pages/reservations/mini-luxury/mini-luxury.component.ts");
    /* harmony import */


    var _pages_reservations_single_rooms_single_rooms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/reservations/single-rooms/single-rooms.component */
    "./src/app/pages/reservations/single-rooms/single-rooms.component.ts");
    /* harmony import */


    var _pages_reservations_payment_portal_lux_payment_lux_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/reservations/payment-portal/lux-payment/lux-payment.component */
    "./src/app/pages/reservations/payment-portal/lux-payment/lux-payment.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _pages_payment_folder_pay_now_pay_now_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/payment-folder/pay-now/pay-now.component */
    "./src/app/pages/payment-folder/pay-now/pay-now.component.ts");
    /* harmony import */


    var _pages_payment_folder_pay_at_hotel_pay_at_hotel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/payment-folder/pay-at-hotel/pay-at-hotel.component */
    "./src/app/pages/payment-folder/pay-at-hotel/pay-at-hotel.component.ts");
    /* harmony import */


    var _cores_services_luxury_room_folder_lux_room_booking_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./cores/services/luxury-room-folder/lux-room-booking.service */
    "./src/app/cores/services/luxury-room-folder/lux-room-booking.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _cores_modules_angular_material_module_angular_material_module_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./cores/modules/angular-material-module/angular-material-module.module */
    "./src/app/cores/modules/angular-material-module/angular-material-module.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var angular4_paystack__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! angular4-paystack */
    "./node_modules/angular4-paystack/__ivy_ngcc__/fesm2015/angular4-paystack.js");
    /* harmony import */


    var _pages_head_layout_head_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/head-layout/head-layout.component */
    "./src/app/pages/head-layout/head-layout.component.ts");
    /* harmony import */


    var _github_ignore_files_publicKey_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./github-ignore-files/publicKey.js */
    "./src/app/github-ignore-files/publicKey.js");
    /* harmony import */


    var _pages_no_route_no_route_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/no-route/no-route.component */
    "./src/app/pages/no-route/no-route.component.ts");
    /* harmony import */


    var _pages_reservations_payment_portal_single_single_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/reservations/payment-portal/single/single.component */
    "./src/app/pages/reservations/payment-portal/single/single.component.ts");
    /* harmony import */


    var _pages_reservations_payment_portal_conference_room_conference_room_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/reservations/payment-portal/conference-room/conference-room.component */
    "./src/app/pages/reservations/payment-portal/conference-room/conference-room.component.ts");
    /* harmony import */


    var _pages_reservations_payment_portal_mini_luxury_mini_luxury_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/reservations/payment-portal/mini-luxury/mini-luxury.component */
    "./src/app/pages/reservations/payment-portal/mini-luxury/mini-luxury.component.ts");
    /* harmony import */


    var _pages_reservations_confrence_room_confrence_room_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/reservations/confrence-room/confrence-room.component */
    "./src/app/pages/reservations/confrence-room/confrence-room.component.ts");
    /* harmony import */


    var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/footer/footer.component */
    "./src/app/pages/footer/footer.component.ts");
    /* harmony import */


    var _pages_payment_folder_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pages/payment-folder/payment-confirmation/payment-confirmation.component */
    "./src/app/pages/payment-folder/payment-confirmation/payment-confirmation.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _pages_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./pages/rooms/rooms.component */
    "./src/app/pages/rooms/rooms.component.ts");
    /* harmony import */


    var _pages_gallary_gallary_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./pages/gallary/gallary.component */
    "./src/app/pages/gallary/gallary.component.ts");
    /* harmony import */


    var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./pages/contact-us/contact-us.component */
    "./src/app/pages/contact-us/contact-us.component.ts");
    /* harmony import */


    var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./pages/about-us/about-us.component */
    "./src/app/pages/about-us/about-us.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_cores_services_luxury_room_folder_lux_room_booking_service__WEBPACK_IMPORTED_MODULE_13__["LuxRoomBookingService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _cores_modules_angular_material_module_angular_material_module_module__WEBPACK_IMPORTED_MODULE_15__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["NoopAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], angular4_paystack__WEBPACK_IMPORTED_MODULE_18__["Angular4PaystackModule"].forRoot(_github_ignore_files_publicKey_js__WEBPACK_IMPORTED_MODULE_20__["PublicKey"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_4__["HomeLayoutComponent"], _pages_header_layout_header_layout_component__WEBPACK_IMPORTED_MODULE_5__["HeaderLayoutComponent"], _pages_reservations_luxury_rooms_luxury_rooms_component__WEBPACK_IMPORTED_MODULE_6__["LuxuryRoomsComponent"], _pages_reservations_mini_luxury_mini_luxury_component__WEBPACK_IMPORTED_MODULE_7__["MiniLuxuryComponent"], _pages_reservations_single_rooms_single_rooms_component__WEBPACK_IMPORTED_MODULE_8__["SingleRoomsComponent"], _pages_reservations_confrence_room_confrence_room_component__WEBPACK_IMPORTED_MODULE_25__["ConferenceRoomComponent"], _pages_reservations_payment_portal_lux_payment_lux_payment_component__WEBPACK_IMPORTED_MODULE_9__["LuxPaymentComponent"], _pages_payment_folder_pay_now_pay_now_component__WEBPACK_IMPORTED_MODULE_11__["PayNowComponent"], _pages_payment_folder_pay_at_hotel_pay_at_hotel_component__WEBPACK_IMPORTED_MODULE_12__["PayAtHotelComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"], _pages_head_layout_head_layout_component__WEBPACK_IMPORTED_MODULE_19__["HeadLayoutComponent"], _pages_no_route_no_route_component__WEBPACK_IMPORTED_MODULE_21__["NoRouteComponent"], _pages_reservations_payment_portal_single_single_component__WEBPACK_IMPORTED_MODULE_22__["SinglePaymentComponent"], _pages_reservations_payment_portal_conference_room_conference_room_component__WEBPACK_IMPORTED_MODULE_23__["ConferenceRoomPaymentComponent"], _pages_reservations_payment_portal_mini_luxury_mini_luxury_component__WEBPACK_IMPORTED_MODULE_24__["MiniLuxuryPaymentComponent"], _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"], _pages_payment_folder_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_27__["PaymentConfirmationComponent"], _pages_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_29__["RoomsComponent"], _pages_gallary_gallary_component__WEBPACK_IMPORTED_MODULE_30__["GallaryComponent"], _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_31__["ContactUsComponent"], _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_32__["AboutUsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _cores_modules_angular_material_module_angular_material_module_module__WEBPACK_IMPORTED_MODULE_15__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["NoopAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], angular4_paystack__WEBPACK_IMPORTED_MODULE_18__["Angular4PaystackModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_4__["HomeLayoutComponent"], _pages_header_layout_header_layout_component__WEBPACK_IMPORTED_MODULE_5__["HeaderLayoutComponent"], _pages_reservations_luxury_rooms_luxury_rooms_component__WEBPACK_IMPORTED_MODULE_6__["LuxuryRoomsComponent"], _pages_reservations_mini_luxury_mini_luxury_component__WEBPACK_IMPORTED_MODULE_7__["MiniLuxuryComponent"], _pages_reservations_single_rooms_single_rooms_component__WEBPACK_IMPORTED_MODULE_8__["SingleRoomsComponent"], _pages_reservations_confrence_room_confrence_room_component__WEBPACK_IMPORTED_MODULE_25__["ConferenceRoomComponent"], _pages_reservations_payment_portal_lux_payment_lux_payment_component__WEBPACK_IMPORTED_MODULE_9__["LuxPaymentComponent"], _pages_payment_folder_pay_now_pay_now_component__WEBPACK_IMPORTED_MODULE_11__["PayNowComponent"], _pages_payment_folder_pay_at_hotel_pay_at_hotel_component__WEBPACK_IMPORTED_MODULE_12__["PayAtHotelComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"], _pages_head_layout_head_layout_component__WEBPACK_IMPORTED_MODULE_19__["HeadLayoutComponent"], _pages_no_route_no_route_component__WEBPACK_IMPORTED_MODULE_21__["NoRouteComponent"], _pages_reservations_payment_portal_single_single_component__WEBPACK_IMPORTED_MODULE_22__["SinglePaymentComponent"], _pages_reservations_payment_portal_conference_room_conference_room_component__WEBPACK_IMPORTED_MODULE_23__["ConferenceRoomPaymentComponent"], _pages_reservations_payment_portal_mini_luxury_mini_luxury_component__WEBPACK_IMPORTED_MODULE_24__["MiniLuxuryPaymentComponent"], _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"], _pages_payment_folder_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_27__["PaymentConfirmationComponent"], _pages_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_29__["RoomsComponent"], _pages_gallary_gallary_component__WEBPACK_IMPORTED_MODULE_30__["GallaryComponent"], _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_31__["ContactUsComponent"], _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_32__["AboutUsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _cores_modules_angular_material_module_angular_material_module_module__WEBPACK_IMPORTED_MODULE_15__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["NoopAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], angular4_paystack__WEBPACK_IMPORTED_MODULE_18__["Angular4PaystackModule"].forRoot(_github_ignore_files_publicKey_js__WEBPACK_IMPORTED_MODULE_20__["PublicKey"])],
          providers: [_cores_services_luxury_room_folder_lux_room_booking_service__WEBPACK_IMPORTED_MODULE_13__["LuxRoomBookingService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          entryComponents: [_pages_payment_folder_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_27__["PaymentConfirmationComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cores/modules/angular-material-module/angular-material-module.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/cores/modules/angular-material-module/angular-material-module.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: AngularMaterialModule */

  /***/
  function srcAppCoresModulesAngularMaterialModuleAngularMaterialModuleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
      return AngularMaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var AngularMaterialModule = function AngularMaterialModule() {
      _classCallCheck(this, AngularMaterialModule);
    };

    AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AngularMaterialModule
    });
    AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AngularMaterialModule_Factory(t) {
        return new (t || AngularMaterialModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"]], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"]],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cores/services/luxury-room-folder/lux-room-booking.service.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/cores/services/luxury-room-folder/lux-room-booking.service.ts ***!
    \*******************************************************************************/

  /*! exports provided: LuxRoomBookingService */

  /***/
  function srcAppCoresServicesLuxuryRoomFolderLuxRoomBookingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LuxRoomBookingService", function () {
      return LuxRoomBookingService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pages_reservations_luxury_rooms_luxury_rooms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../pages/reservations/luxury-rooms/luxury-rooms.component */
    "./src/app/pages/reservations/luxury-rooms/luxury-rooms.component.ts");

    var LuxRoomBookingService = function LuxRoomBookingService(_luxuryRoomService) {
      _classCallCheck(this, LuxRoomBookingService);

      this._luxuryRoomService = _luxuryRoomService;
    };

    LuxRoomBookingService.ɵfac = function LuxRoomBookingService_Factory(t) {
      return new (t || LuxRoomBookingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_pages_reservations_luxury_rooms_luxury_rooms_component__WEBPACK_IMPORTED_MODULE_1__["LuxuryRoomsComponent"]));
    };

    LuxRoomBookingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LuxRoomBookingService,
      factory: LuxRoomBookingService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LuxRoomBookingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _pages_reservations_luxury_rooms_luxury_rooms_component__WEBPACK_IMPORTED_MODULE_1__["LuxuryRoomsComponent"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cores/services/paystack.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/cores/services/paystack.service.ts ***!
    \****************************************************/

  /*! exports provided: PaystackService */

  /***/
  function srcAppCoresServicesPaystackServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaystackService", function () {
      return PaystackService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _github_ignore_files_bearerToken_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../github-ignore-files/bearerToken.js */
    "./src/app/github-ignore-files/bearerToken.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PaystackService = /*#__PURE__*/function () {
      function PaystackService(http, router) {
        _classCallCheck(this, PaystackService);

        this.http = http;
        this.router = router;
        this.verifyApi = 'https://api.paystack.co/transaction/verify';
        this.baseUrl = 'http://localhost:3000/api';
        this.tempDetails = [];
      } // the getReferenceNo method, gets the generated reference number from the paystack callback function at pay-now.component


      _createClass(PaystackService, [{
        key: "ReferenceNo",
        value: function ReferenceNo(ref) {
          this.ref = ref;
        }
      }, {
        key: "verifyPayment",
        value: function verifyPayment() {
          var _this = this;

          this.http.get("".concat(this.verifyApi, "/").concat(this.ref.reference), {
            headers: {
              Authorization: _github_ignore_files_bearerToken_js__WEBPACK_IMPORTED_MODULE_1__["BearerToken"]
            }
          }).subscribe(function (verifiedData) {
            var details = _this.tempDetails[0];

            if (verifiedData.data.status === 'success' && verifiedData.data.customer.email === details.email) {
              _this.http.post("".concat(_this.baseUrl, "/luxuryReservation"), details).subscribe(function (data) {
                console.log("Reservations details succeffuly pushed to the DataBase", data);
              }, function (error) {
                console.log("the following error occured trying to push data to DataBase->", error);
              }); //this.tempDetails.delete();

            } else {
              console.log("Payment not approved! failed to create reservation");
            }
          });
          return;
        }
      }, {
        key: "reservationDetails",
        value: function reservationDetails(reserveRoom) {
          this.tempDetails.push(reserveRoom);
        }
      }, {
        key: "customerReservationData",
        value: function customerReservationData() {
          return this.tempDetails;
        }
      }]);

      return PaystackService;
    }();

    PaystackService.ɵfac = function PaystackService_Factory(t) {
      return new (t || PaystackService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    PaystackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PaystackService,
      factory: PaystackService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaystackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/github-ignore-files/bearerToken.js":
  /*!****************************************************!*\
    !*** ./src/app/github-ignore-files/bearerToken.js ***!
    \****************************************************/

  /*! exports provided: BearerToken */

  /***/
  function srcAppGithubIgnoreFilesBearerTokenJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BearerToken", function () {
      return BearerToken;
    });

    var BearerToken = "Bearer sk_test_3452371f6ef61b56a100120810d3bbd40098c4e6";
    /***/
  },

  /***/
  "./src/app/github-ignore-files/publicKey.js":
  /*!**************************************************!*\
    !*** ./src/app/github-ignore-files/publicKey.js ***!
    \**************************************************/

  /*! exports provided: PublicKey */

  /***/
  function srcAppGithubIgnoreFilesPublicKeyJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicKey", function () {
      return PublicKey;
    });

    var PublicKey = 'pk_test_ca3f35b311b2af8b595750c74d111b16c36ad565';
    /***/
  },

  /***/
  "./src/app/pages/about-us/about-us.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/about-us/about-us.component.ts ***!
    \******************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppPagesAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutUsComponent = /*#__PURE__*/function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) {
      return new (t || AboutUsComponent)();
    };

    AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutUsComponent,
      selectors: [["app-about-us"]],
      decls: 2,
      vars: 0,
      template: function AboutUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about-us works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-us',
          templateUrl: './about-us.component.html',
          styleUrls: ['./about-us.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/contact-us/contact-us.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/contact-us/contact-us.component.ts ***!
    \**********************************************************/

  /*! exports provided: ContactUsComponent */

  /***/
  function srcAppPagesContactUsContactUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return ContactUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactUsComponent = /*#__PURE__*/function () {
      function ContactUsComponent() {
        _classCallCheck(this, ContactUsComponent);
      }

      _createClass(ContactUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactUsComponent;
    }();

    ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) {
      return new (t || ContactUsComponent)();
    };

    ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactUsComponent,
      selectors: [["app-contact-us"]],
      decls: 2,
      vars: 0,
      template: function ContactUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact-us works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-us',
          templateUrl: './contact-us.component.html',
          styleUrls: ['./contact-us.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 83,
      vars: 0,
      consts: [[1, "container-fluid", 2, "padding-top", "4em"], [1, "row"], [1, "col-2", "text-primary", 2, "background-color", "yellow"], [1, "dropdown"], ["type", "button", "data-toggle", "dropdown", 1, "btn", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "#"], [1, "first"], [1, "second"], [1, "third"], [1, "fourth"], [1, "col-10", "text-success", 2, "background-color", "navy"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " File");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "menu 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "menu 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " menu 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Personal Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " School ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Nationality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Religion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Main content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "valentine bassey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/footer/footer.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/footer/footer.component.ts ***!
    \**************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppPagesFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 28,
      vars: 0,
      consts: [[1, "footer-wrapper"], [1, "row"], [1, "footer-headers"], [1, "col-6"], [1, "header"], [1, "header2"], [1, "col-6", "header-content"], [1, "col-sm"], [1, "fa", "fa-facebook-official", "aria-hidden"], [1, "fa", "fa-instagram", "aria-hidden"], [1, "fa", "fa-linkedin-square", "aria-hidden"], [1, "fa", "fa-twitter", "aria-hidden"], [1, "col-6", "care-line"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Follow Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Instagram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "LinkedIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Costumers Care: +2348162305224");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Email: Awasevalentine@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".details[_ngcontent-%COMP%]{\n    display: inline-flex;\n    flex-direction: row;\n  }\n  .rounded-circle[_ngcontent-%COMP%]{\n    width: 40px;\n    height: 40px;\n  }\n  .footer-wrapper[_ngcontent-%COMP%]{\n    font-size: 16px;\n    font-family: Spectral, Roboto;\n    background-color: silver;\n    color: black;\n    overflow-x: hidden;\n  }\n  .contact-wrapper[_ngcontent-%COMP%]{\n    padding-left: 1.3em;\n    height: 5%;\n  }\n  .row-wrapper[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n  }\n  .heads[_ngcontent-%COMP%]{\n    font-size: 18px;\n    font-family: Roboto, Spectral, Arial, Helvetica, sans-serif;\n  }\n  .main-content-wrapper[_ngcontent-%COMP%]{\n    font-family: spectral, roboto, Georgia, Times, 'Times New Roman', serif;\n    font-size: 16px;\n    height: 100%;\n  }\n  .footer-headers[_ngcontent-%COMP%]{\n    background-color: rgb(14, 14, 66);\n    height: 50px;\n    width: 100%;\n    color: white;\n    display: inline-flex;\n    flex-direction: row;\n    padding-left: 1em;\n    padding-top: .5em;\n  }\n  .header-content[_ngcontent-%COMP%]{\n    display:inline-flex;\n    flex-wrap: wrap;\n    height: 80px;\n    padding-top: .7em;\n\n    \n  }\n  .care-line[_ngcontent-%COMP%]{\n    display: inline-flex;\n    flex-wrap: wrap;\n    padding-top: .7em;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtJQUNmLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLDJEQUEyRDtFQUM3RDtFQUNBO0lBQ0UsdUVBQXVFO0lBQ3ZFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjs7O0VBR25CO0VBR0E7SUFDRSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxze1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLnJvdW5kZWQtY2lyY2xle1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuICAuZm9vdGVyLXdyYXBwZXJ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBTcGVjdHJhbCwgUm9ib3RvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB9XG4gIC5jb250YWN0LXdyYXBwZXJ7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjNlbTtcbiAgICBoZWlnaHQ6IDUlO1xuICB9XG4gIC5yb3ctd3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmhlYWRze1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBTcGVjdHJhbCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgfVxuICAubWFpbi1jb250ZW50LXdyYXBwZXJ7XG4gICAgZm9udC1mYW1pbHk6IHNwZWN0cmFsLCByb2JvdG8sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuZm9vdGVyLWhlYWRlcnN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxNCwgNjYpO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICBwYWRkaW5nLXRvcDogLjVlbTtcbiAgfVxuICAuaGVhZGVyLWNvbnRlbnR7XG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHBhZGRpbmctdG9wOiAuN2VtO1xuXG4gICAgXG4gIH1cbiAgXG5cbiAgLmNhcmUtbGluZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZy10b3A6IC43ZW07XG4gIH1cbiAgXG5cbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/gallary/gallary.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/gallary/gallary.component.ts ***!
    \****************************************************/

  /*! exports provided: GallaryComponent */

  /***/
  function srcAppPagesGallaryGallaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GallaryComponent", function () {
      return GallaryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GallaryComponent = /*#__PURE__*/function () {
      function GallaryComponent() {
        _classCallCheck(this, GallaryComponent);
      }

      _createClass(GallaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GallaryComponent;
    }();

    GallaryComponent.ɵfac = function GallaryComponent_Factory(t) {
      return new (t || GallaryComponent)();
    };

    GallaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GallaryComponent,
      selectors: [["app-gallary"]],
      decls: 124,
      vars: 0,
      consts: [[1, "mywrapper"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-inner"], ["data-interval", "6000", 1, "carousel-item", "active"], ["src", "/assets/images/conference2.jpg  ", "alt", "types of bed", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], ["data-interval", "6000", 1, "carousel-item"], ["src", "/assets/images/bedroom.jpg", "alt", "bedroms", 1, "d-block", "w-100"], ["src", "/assets/images/hotel-room.jpg", "alt", "the Hotel view", 1, "d-block", "w-100"], ["src", "/assets/images/people.jpg", "alt", "the Hotel view", 1, "d-block", "w-100"], ["src", "/assets/images/luxury1.jpg", "alt", "the Hotel view", 1, "d-block", "w-100"], ["src", "/assets/images/luxury2.jpg", "alt", "the Hotel view", 1, "d-block", "w-100"], ["src", "/assets/images/conference1.jpg", "alt", "the Hotel view", 1, "d-block", "w-100"], ["src", "/assets/images/mini-luxury.jpg", "alt", "the Hotel view", 1, "d-block", "w-100"], ["src", "/assets/images/conference-room-768441_1920.jpg", "alt", "the Hotel view", 1, "d-block", "w-100"], ["src", "/assets/images/hotel-1209021_1280.jpg", "alt", "the Hotel view", 1, "d-block", "w-100"], ["src", "/assets/images/hotel-resturant.jpg", "alt", "the Hotel view", 1, "d-block", "w-100"], ["src", "/assets/images/interior.jpg", "alt", "the Hotel view", 1, "d-block", "w-100"], ["src", "/assets/images/luxury3.jpg", "alt", "the Hotel view", 1, "d-block", "w-100"], ["src", "/assets/images/luxury4.jpg", "alt", "the Hotel view", 1, "d-block", "w-100"], ["src", "/assets/images/nice-bed.jpg", "alt", "the Hotel view", 1, "d-block", "w-100"], ["src", "/assets/images/walkway.jpg", "alt", "the Hotel view", 1, "d-block", "w-100"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]],
      template: function GallaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "conference-room-768441_1920 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Second slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Third slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Fourth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Fifth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "sixth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "seventh slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Eight slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Ninth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Ninth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Tenth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Eleventh slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Twelve slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Thirtheen slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "fourtheen slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "fivetheen slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".mywrapper[_ngcontent-%COMP%]{\n    padding-top: 3em;\n    background-color: silver;\n    \n   \n  \n  }\n  \n  div.carousel-inner[_ngcontent-%COMP%]{\n    height: 500px;\n  \n  }\n  \n  .carousel-item[_ngcontent-%COMP%]{\n  \n  }\n  \n  .d-block[_ngcontent-%COMP%]{\n    height: 500px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FsbGFyeS9nYWxsYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxnQkFBZ0I7SUFDaEIsd0JBQXdCOzs7O0VBSTFCOztFQUVBO0lBQ0UsYUFBYTs7RUFFZjs7RUFDQTs7RUFFQTs7RUFDQTtJQUNFLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbGxhcnkvZ2FsbGFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAubXl3cmFwcGVye1xuICAgIHBhZGRpbmctdG9wOiAzZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xuICAgIFxuICAgXG4gIFxuICB9XG4gIFxuICBkaXYuY2Fyb3VzZWwtaW5uZXJ7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgXG4gIH1cbiAgLmNhcm91c2VsLWl0ZW17XG4gIFxuICB9XG4gIC5kLWJsb2Nre1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbiAgXG4gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GallaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gallary',
          templateUrl: './gallary.component.html',
          styleUrls: ['./gallary.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/head-layout/head-layout.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/head-layout/head-layout.component.ts ***!
    \************************************************************/

  /*! exports provided: HeadLayoutComponent */

  /***/
  function srcAppPagesHeadLayoutHeadLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeadLayoutComponent", function () {
      return HeadLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");

    var HeadLayoutComponent = /*#__PURE__*/function () {
      function HeadLayoutComponent() {
        _classCallCheck(this, HeadLayoutComponent);
      }

      _createClass(HeadLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeadLayoutComponent;
    }();

    HeadLayoutComponent.ɵfac = function HeadLayoutComponent_Factory(t) {
      return new (t || HeadLayoutComponent)();
    };

    HeadLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeadLayoutComponent,
      selectors: [["app-head-layout"]],
      decls: 37,
      vars: 6,
      consts: [[1, "container"], [1, "menu-wrapper"], ["mat-button", "", 3, "matMenuTriggerFor"], ["home", "matMenu"], ["ourRooms", "matMenu"], ["gallary", "matMenu"], ["contactUs", "matMenu"], ["aboutUs", "matMenu"], ["yPosition", "below"], ["booking", "matMenu"], ["mat-menu-item", ""], [1, "mycard-wrapper"], [1, "card", "myown"], [1, "main-content"]],
      template: function HeadLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Book Reservation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Our Rooms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View Gallary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-menu", null, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-menu", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-menu", null, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-menu", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-menu", null, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-menu", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Luxury Rooms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Mini Rooms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Single Rooms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Conference Hall");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"]],
      styles: [".menu-wrapper[_ngcontent-%COMP%]{\n  position: fixed;\n  width: 100%;\n  height: 10%;\n  border: 1px, solid, black;\n}.mat-card[_ngcontent-%COMP%]{\n  border: 1px, solid red;\n}.myown[_ngcontent-%COMP%]{\n  padding-top: 4em;\n  border: 1px solid blue;\n  width: 120%;\n  height: 20%;\n  align-items: center;\n  align-content: center;\n  text-align: center;\n}.mycard-wrapper[_ngcontent-%COMP%]{\n  height: 30%;\n  padding-top: 4em;\n\n}.main-content[_ngcontent-%COMP%]{\n  height: 30%;\n  width: 100%;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhZC1sYXlvdXQvaGVhZC1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtBQUMzQixDQUFDO0VBQ0Msc0JBQXNCO0FBQ3hCLENBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEIsQ0FDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7O0FBRWxCLENBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlYWQtbGF5b3V0L2hlYWQtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS13cmFwcGVye1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwJTtcbiAgYm9yZGVyOiAxcHgsIHNvbGlkLCBibGFjaztcbn0ubWF0LWNhcmR7XG4gIGJvcmRlcjogMXB4LCBzb2xpZCByZWQ7XG59XG4ubXlvd257XG4gIHBhZGRpbmctdG9wOiA0ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gIHdpZHRoOiAxMjAlO1xuICBoZWlnaHQ6IDIwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubXljYXJkLXdyYXBwZXJ7XG4gIGhlaWdodDogMzAlO1xuICBwYWRkaW5nLXRvcDogNGVtO1xuXG59XG4ubWFpbi1jb250ZW50e1xuICBoZWlnaHQ6IDMwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-head-layout',
          templateUrl: './head-layout.component.html',
          styleUrls: ['./head-layout.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/header-layout/header-layout.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/header-layout/header-layout.component.ts ***!
    \****************************************************************/

  /*! exports provided: HeaderLayoutComponent */

  /***/
  function srcAppPagesHeaderLayoutHeaderLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderLayoutComponent", function () {
      return HeaderLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var _c1 = function _c1() {
      return ["/luxury"];
    };

    var _c2 = function _c2() {
      return ["/miniLuxury"];
    };

    var _c3 = function _c3() {
      return ["/singleRoom"];
    };

    var _c4 = function _c4() {
      return ["/conferenceRoom"];
    };

    var _c5 = function _c5() {
      return ["/rooms"];
    };

    var _c6 = function _c6() {
      return ["/gallary"];
    };

    var _c7 = function _c7() {
      return ["/contactUs"];
    };

    var _c8 = function _c8() {
      return ["/aboutUs"];
    };

    var HeaderLayoutComponent = /*#__PURE__*/function () {
      function HeaderLayoutComponent() {
        _classCallCheck(this, HeaderLayoutComponent);

        this.events = [];
      }

      _createClass(HeaderLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderLayoutComponent;
    }();

    HeaderLayoutComponent.ɵfac = function HeaderLayoutComponent_Factory(t) {
      return new (t || HeaderLayoutComponent)();
    };

    HeaderLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderLayoutComponent,
      selectors: [["app-header-layout"]],
      decls: 34,
      vars: 18,
      consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-bold", "bg-dark"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", 1, "navbar-toggler", "btn-navbar"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "nav-item", "view-rooms-wrapper"], [1, "nav-link", 3, "routerLink"], [1, "nav-item", "reservation-wrapper"], ["data-toggle", "dropdown", "href", "#", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], [1, "dropdown-divider"], [1, "nav-item", "services-wrapper"], [1, "nav-link", "Galary", 3, "routerLink"], [1, "nav-item", "about-wrapper"], [1, "nav-link", "about-us", 3, "routerLink"]],
      template: function HeaderLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Book Reservation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Luxury Room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mini Luxury");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Single Room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Conference Room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Our Rooms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Gallary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c8));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".nav-link[_ngcontent-%COMP%]{\n    color: white;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhZGVyLWxheW91dC9oZWFkZXItbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oZWFkZXItbGF5b3V0L2hlYWRlci1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGlua3tcbiAgICBjb2xvcjogd2hpdGU7XG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header-layout',
          templateUrl: './header-layout.component.html',
          styleUrls: ['./header-layout.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home-layout/home-layout.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/home-layout/home-layout.component.ts ***!
    \************************************************************/

  /*! exports provided: HomeLayoutComponent */

  /***/
  function srcAppPagesHomeLayoutHomeLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function () {
      return HomeLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeLayoutComponent_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rooms_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rooms_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rooms_r2);
      }
    }

    var HomeLayoutComponent = /*#__PURE__*/function () {
      function HomeLayoutComponent(router) {
        _classCallCheck(this, HomeLayoutComponent);

        this.router = router;
        this.roomTypes = ['Luxury', 'Mini-luxury', 'Single', 'Conference'];
        this.bookNow = {
          roomType: ''
        };
      }

      _createClass(HomeLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "booking",
        value: function booking() {
          switch (this.bookNow.roomType) {
            case 'Luxury':
              return this.router.navigateByUrl('/luxury');

            case 'Mini-luxury':
              return this.router.navigateByUrl('/miniLuxury');

            case 'Single':
              return this.router.navigateByUrl('/singleRoom');

            case 'Conference':
              return this.router.navigateByUrl('/conferenceRoom');
          }
        }
      }]);

      return HomeLayoutComponent;
    }();

    HomeLayoutComponent.ɵfac = function HomeLayoutComponent_Factory(t) {
      return new (t || HomeLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HomeLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeLayoutComponent,
      selectors: [["app-home-layout"]],
      decls: 14,
      vars: 2,
      consts: [[1, "main-home-content"], [1, "Welcome"], [1, "card-title", "top-header"], [1, "card"], ["bookNowForm", "ngForm"], [1, "input-fields"], ["id", "roomType", "name", "roomType", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-dark", 3, "click"], [3, "value"]],
      template: function HomeLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Welcome to Barrondy Hotel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeLayoutComponent_Template_select_ngModelChange_8_listener($event) {
            return ctx.bookNow.roomType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Select Room Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeLayoutComponent_option_11_Template, 2, 2, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeLayoutComponent_Template_button_click_12_listener() {
            return ctx.booking();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Book Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookNow.roomType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roomTypes);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".main-home-content[_ngcontent-%COMP%]{\n  overflow-x: hidden;\n}\n.Welcome[_ngcontent-%COMP%]{\n  padding-top:2em;\n  background-color: grey;\n  background-image: url('people.jpg');\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 600px;\n  padding-left: .5em;\n\n}\n.subcontent-wrapper[_ngcontent-%COMP%]{\n  background-color:mintcream;\n}\n.top-header[_ngcontent-%COMP%]{\n  color: white;\n  font-weight: bold;\n  text-align: center;\n  padding-bottom: 1em;\n  padding-top: 1em;\n  display: flex;\n  justify-content: space-evenly;\n}\n.paragraphs[_ngcontent-%COMP%]{\n  text-align: justify;\n  display: block;\n  font-size: 20px;\n  background-color: rgb(169, 169, 169);\n}\n.image-wrapper[_ngcontent-%COMP%]{\npadding-top: 4em;\n\n}\n.card-wrapper[_ngcontent-%COMP%]{\n  width: 70%;\n}\n.mywrapper[_ngcontent-%COMP%]{\n  display: flex;\n  justify-content: space-evenly;\n\n}\ndiv.carousel-inner[_ngcontent-%COMP%]{\n  height: 15em;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  align-content: center;\n  text-align: center;\n  padding-bottom: 7em;\n  box-sizing: content-box;\n\n}\n.home-content[_ngcontent-%COMP%]{\n  height: 60%;\n}\n.content1[_ngcontent-%COMP%]{\n  background-color: rgba(127, 112, 144, 0.582);\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n.card-wrapper[_ngcontent-%COMP%]{\n  display: flex;\n  justify-content: space-evenly;\n  justify-self: center;\n  justify-items: center;\n}\n.sidenav-wrapper[_ngcontent-%COMP%]{\n \n}\n.card[_ngcontent-%COMP%]{\n  width: 180px;\n  padding-top: 0em;\n  background-color: teal;\n  color:black;\n}\n.form-control[_ngcontent-%COMP%]{\n  background-color: rgba(160, 62, 45, 0);\n  color: black;\n}\n.btn[_ngcontent-%COMP%]{\n  width: 180px;\n  text-align: center;\n  background-color: rgb(14, 14, 66);\n  padding-top: 5px;\n}\n.labels[_ngcontent-%COMP%]{\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixtQ0FBd0Q7RUFDeEQsa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7O0FBRXBCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0NBQW9DO0FBQ3RDO0FBRUE7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7O0FBRS9CO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7QUFFekI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lLWxheW91dC9ob21lLWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4taG9tZS1jb250ZW50e1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uV2VsY29tZXtcbiAgcGFkZGluZy10b3A6MmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wZW9wbGUuanBnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAwcHg7XG4gIHBhZGRpbmctbGVmdDogLjVlbTtcblxufVxuLnN1YmNvbnRlbnQtd3JhcHBlcntcbiAgYmFja2dyb3VuZC1jb2xvcjptaW50Y3JlYW07XG59XG4udG9wLWhlYWRlcntcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5wYXJhZ3JhcGhze1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY5LCAxNjksIDE2OSk7XG59XG5cbi5pbWFnZS13cmFwcGVye1xucGFkZGluZy10b3A6IDRlbTtcblxufVxuLmNhcmQtd3JhcHBlcntcbiAgd2lkdGg6IDcwJTtcbn1cbi5teXdyYXBwZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG59XG5cbmRpdi5jYXJvdXNlbC1pbm5lcntcbiAgaGVpZ2h0OiAxNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogN2VtO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcblxufVxuLmhvbWUtY29udGVudHtcbiAgaGVpZ2h0OiA2MCU7XG59XG4uY29udGVudDF7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAxMTIsIDE0NCwgMC41ODIpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNhcmQtd3JhcHBlcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG4uc2lkZW5hdi13cmFwcGVye1xuIFxufVxuLmNhcmR7XG4gIHdpZHRoOiAxODBweDtcbiAgcGFkZGluZy10b3A6IDBlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgY29sb3I6YmxhY2s7XG59XG4uZm9ybS1jb250cm9se1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MCwgNjIsIDQ1LCAwKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJ0bntcbiAgd2lkdGg6IDE4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMTQsIDY2KTtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5sYWJlbHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-layout',
          templateUrl: './home-layout.component.html',
          styleUrls: ['./home-layout.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/no-route/no-route.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/no-route/no-route.component.ts ***!
    \******************************************************/

  /*! exports provided: NoRouteComponent */

  /***/
  function srcAppPagesNoRouteNoRouteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoRouteComponent", function () {
      return NoRouteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NoRouteComponent = /*#__PURE__*/function () {
      function NoRouteComponent() {
        _classCallCheck(this, NoRouteComponent);
      }

      _createClass(NoRouteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NoRouteComponent;
    }();

    NoRouteComponent.ɵfac = function NoRouteComponent_Factory(t) {
      return new (t || NoRouteComponent)();
    };

    NoRouteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NoRouteComponent,
      selectors: [["app-no-route"]],
      decls: 2,
      vars: 0,
      template: function NoRouteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "no-route works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".p[_ngcontent-%COMP%]{\n  padding-top: 5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm8tcm91dGUvbm8tcm91dGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vLXJvdXRlL25vLXJvdXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHtcbiAgcGFkZGluZy10b3A6IDVlbTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoRouteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-no-route',
          templateUrl: './no-route.component.html',
          styleUrls: ['./no-route.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/payment-folder/pay-at-hotel/pay-at-hotel.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/payment-folder/pay-at-hotel/pay-at-hotel.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: PayAtHotelComponent */

  /***/
  function srcAppPagesPaymentFolderPayAtHotelPayAtHotelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayAtHotelComponent", function () {
      return PayAtHotelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PayAtHotelComponent = /*#__PURE__*/function () {
      function PayAtHotelComponent() {
        _classCallCheck(this, PayAtHotelComponent);
      }

      _createClass(PayAtHotelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PayAtHotelComponent;
    }();

    PayAtHotelComponent.ɵfac = function PayAtHotelComponent_Factory(t) {
      return new (t || PayAtHotelComponent)();
    };

    PayAtHotelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PayAtHotelComponent,
      selectors: [["app-pay-at-hotel"]],
      decls: 2,
      vars: 0,
      template: function PayAtHotelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pay-at-hotel works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQtZm9sZGVyL3BheS1hdC1ob3RlbC9wYXktYXQtaG90ZWwuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PayAtHotelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pay-at-hotel',
          templateUrl: './pay-at-hotel.component.html',
          styleUrls: ['./pay-at-hotel.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/payment-folder/pay-now/pay-now.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/payment-folder/pay-now/pay-now.component.ts ***!
    \*******************************************************************/

  /*! exports provided: PayNowComponent */

  /***/
  function srcAppPagesPaymentFolderPayNowPayNowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayNowComponent", function () {
      return PayNowComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cores_services_paystack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../cores/services/paystack.service */
    "./src/app/cores/services/paystack.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular4_paystack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular4-paystack */
    "./node_modules/angular4-paystack/__ivy_ngcc__/fesm2015/angular4-paystack.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var _c0 = ["paymentSuccessModelTemplate"];

    function PayNowComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Check-In Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Days in Hotel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Check-Out Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "To complete your reservation kindly click on the button below to select a payment method. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "angular4-paystack", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paymentInit", function PayNowComponent_div_3_Template_angular4_paystack_paymentInit_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.paymentInit();
        })("close", function PayNowComponent_div_3_Template_angular4_paystack_close_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.paymentCancel();
        })("callback", function PayNowComponent_div_3_Template_angular4_paystack_callback_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.paymentDone($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Pay With Paystack ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var details_r3 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 10, details_r3.checkInDate, "dd/MM/yyyy"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", details_r3.daysInHotel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 13, details_r3.checkOutDate, "dd/MM/yyyy"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Hi ", details_r3.title, " ", details_r3.firstName, " ", details_r3.lastName, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("email", details_r3.email)("amount", details_r3.amountPaid * 100)("ref", ctx_r0.tRef);
      }
    }

    function PayNowComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Awesome!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your reservation has been confirmed. Check your email for detials. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PayNowComponent = /*#__PURE__*/function () {
      function PayNowComponent(http, router, _paystackService, _dialog) {
        _classCallCheck(this, PayNowComponent);

        this.http = http;
        this.router = router;
        this._paystackService = _paystackService;
        this._dialog = _dialog;
        this.reservationDetails = [];
        this.tRef = '';
        this.title = '';
      }

      _createClass(PayNowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.reservationDetails = this._paystackService.customerReservationData();
          this.setRandomPaymentRef();
        }
      }, {
        key: "paymentInit",
        value: function paymentInit() {
          console.log('Payment initialized');
        }
      }, {
        key: "paymentDone",
        value: function paymentDone(ref) {
          this.title = 'Payment successfull';

          this._paystackService.ReferenceNo(ref); // these pushes the generate refernce to the paystack service class for consumption


          this._paystackService.verifyPayment();

          this.showPaymentSuccessDialog(); // successful booking modal call;
          // this.router.navigateByUrl('/');

          console.log("my response", this.title, ref);
          return;
        }
      }, {
        key: "paymentCancel",
        value: function paymentCancel() {
          this.title = 'Payment failed';
          console.log(this.title);
        }
      }, {
        key: "setRandomPaymentRef",
        value: function setRandomPaymentRef() {
          this.tRef = "".concat(Math.random() * 10000000000000);
        }
      }, {
        key: "showPaymentSuccessDialog",
        value: function showPaymentSuccessDialog() {
          this.paymentSuccessModal = this._dialog.open(this.paymentSuccessModelTemplate, {
            disableClose: true,
            width: '330px',
            height: '330px'
          });
          this.router.navigateByUrl('/');
        }
      }]);

      return PayNowComponent;
    }();

    PayNowComponent.ɵfac = function PayNowComponent_Factory(t) {
      return new (t || PayNowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cores_services_paystack_service__WEBPACK_IMPORTED_MODULE_3__["PaystackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    PayNowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PayNowComponent,
      selectors: [["app-pay-now"]],
      viewQuery: function PayNowComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paymentSuccessModelTemplate = _t.first);
        }
      },
      decls: 7,
      vars: 1,
      consts: [[1, "container-fluid"], [1, "paynow-wrapper"], [1, "card", "main-content-card"], [4, "ngFor", "ngForOf"], ["paymentSuccessModelTemplate", ""], [1, "row", "reservation-date-wrapper"], [1, "col-sm-4"], [1, "daysInHotel", 2, "padding-top", "1em"], [1, "daysInHotel2"], [1, "days"], [1, "sub-head"], [1, "text-descriptionz", 2, "padding-top", "4em", "margin", "2em"], [1, "hz-line", 2, "border", "1px solid black"], [1, "payment-option"], [1, "row"], [1, "col-6"], [1, "paystack-button"], [1, "btn", "btn-info", 3, "email", "amount", "ref", "paymentInit", "close", "callback"], [1, "modal-wrapper"], [1, "icon-wrapper"], [1, "fa", "fa-check-square"], ["mat-dialog-title", ""], ["mat-mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", 1, "btn", "btn-success", "btn1"]],
      template: function PayNowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PayNowComponent_div_3_Template, 34, 16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PayNowComponent_ng_template_5_Template, 10, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reservationDetails);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], angular4_paystack__WEBPACK_IMPORTED_MODULE_6__["Angular4PaystackComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: [".paynow-wrapper[_ngcontent-%COMP%]{\n  padding-top: 5em;\n  padding-bottom: 10em;\n  display: flex;\n  justify-content: space-evenly;\n\n}\n.main-content-card[_ngcontent-%COMP%]{\n  width: 40%;\n  height: 30%;\n}\n.pay-button[_ngcontent-%COMP%]{\n  padding-top: .5em;\n}\n.debit-card-number[_ngcontent-%COMP%]{\n  width: 70%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.reservation-date-wrapper[_ngcontent-%COMP%]{\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n.daysInHotel2[_ngcontent-%COMP%]{\n padding-top: 2em;\n\n}\n.days[_ngcontent-%COMP%]{\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-color: black;\n  color: white;\n  display: inline-flex;\n  justify-content: center;\n  text-align: center;\n}\n.payment-option[_ngcontent-%COMP%]{\n  padding-bottom: 1em;\n  display: flex;\n  justify-content: space-evenly;\n}\n.container-fluid[_ngcontent-%COMP%]{\n  background-color: blueviolet;\n}\n.modal-wrapper[_ngcontent-%COMP%] {\n  color: #636363;\n  text-align: center;\n  \n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\n\tmargin: 30px 0 -15px;\n\tfont-size: 14px;\n}\n.mat-dialog-actions[_ngcontent-%COMP%]{\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.btn1[_ngcontent-%COMP%]{\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100px;\n\talign-self: center;\n}\n.fa[_ngcontent-%COMP%]{\n\twidth: 80px;\n\theight: 80px;\n\tcolor: #6fb32b;;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC1mb2xkZXIvcGF5LW5vdy9wYXktbm93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiw2QkFBNkI7O0FBRS9CO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7Q0FDQyxnQkFBZ0I7O0FBRWpCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCOztFQUVsQiwwQ0FBMEM7Q0FDM0Msb0JBQW9CO0NBQ3BCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixjQUFjO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50LWZvbGRlci9wYXktbm93L3BheS1ub3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXlub3ctd3JhcHBlcntcbiAgcGFkZGluZy10b3A6IDVlbTtcbiAgcGFkZGluZy1ib3R0b206IDEwZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG59XG4ubWFpbi1jb250ZW50LWNhcmR7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMzAlO1xufVxuLnBheS1idXR0b257XG4gIHBhZGRpbmctdG9wOiAuNWVtO1xufVxuLmRlYml0LWNhcmQtbnVtYmVye1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucmVzZXJ2YXRpb24tZGF0ZS13cmFwcGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGF5c0luSG90ZWwye1xuIHBhZGRpbmctdG9wOiAyZW07XG5cbn1cbi5kYXlze1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBheW1lbnQtb3B0aW9ue1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5jb250YWluZXItZmx1aWR7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG59XG4ubW9kYWwtd3JhcHBlciB7XG4gIGNvbG9yOiAjNjM2MzYzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdG1hcmdpbjogMzBweCAwIC0xNXB4O1xuXHRmb250LXNpemU6IDE0cHg7XG59XG4ubWF0LWRpYWxvZy1hY3Rpb25ze1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5idG4xe1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0d2lkdGg6IDEwMHB4O1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uZmF7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGNvbG9yOiAjNmZiMzJiOztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PayNowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pay-now',
          templateUrl: './pay-now.component.html',
          styleUrls: ['./pay-now.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _cores_services_paystack_service__WEBPACK_IMPORTED_MODULE_3__["PaystackService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, {
        paymentSuccessModelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['paymentSuccessModelTemplate']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/payment-folder/payment-confirmation/payment-confirmation.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/payment-folder/payment-confirmation/payment-confirmation.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: PaymentConfirmationComponent */

  /***/
  function srcAppPagesPaymentFolderPaymentConfirmationPaymentConfirmationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentConfirmationComponent", function () {
      return PaymentConfirmationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var _c0 = ["paymentSuccessModelTemplate"];

    function PaymentConfirmationComponent_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Awesome!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your reservation has been confirmed. Check your email for detials. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PaymentConfirmationComponent = /*#__PURE__*/function () {
      function PaymentConfirmationComponent(_dialog) {
        _classCallCheck(this, PaymentConfirmationComponent);

        this._dialog = _dialog;
      }

      _createClass(PaymentConfirmationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showPaymentSuccessDialog",
        value: function showPaymentSuccessDialog() {
          this.paymentSuccessModal = this._dialog.open(this.paymentSuccessModelTemplate, {
            disableClose: true,
            width: '330px',
            height: '330px'
          });
        }
      }, {
        key: "my",
        value: function my() {
          return this.showPaymentSuccessDialog();
        }
      }]);

      return PaymentConfirmationComponent;
    }();

    PaymentConfirmationComponent.ɵfac = function PaymentConfirmationComponent_Factory(t) {
      return new (t || PaymentConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    PaymentConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaymentConfirmationComponent,
      selectors: [["app-payment-confirmation"]],
      viewQuery: function PaymentConfirmationComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paymentSuccessModelTemplate = _t.first);
        }
      },
      decls: 24,
      vars: 0,
      consts: [[1, "text-center", 2, "padding-top", "4em", "padding-left", "4em"], ["data-toggle", "modal", "data-target", "#myModal", 1, "trigger-btn"], ["id", "myModal", 1, "modal", "fade"], [1, "modal-dialog", "modal-confirm"], [1, "modal-content"], [1, "modal-header"], [1, "icon-box"], [1, "material-icons"], [1, "modal-title", "w-100"], [1, "modal-body"], [1, "text-center"], [1, "modal-footer"], ["data-dismiss", "modal", 1, "btn", "btn-success", "btn-block"], ["paymentSuccessModelTemplate", ""], [2, "padding-top", "4em", "padding-left", "4em"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "modal-wrapper"], [1, "icon-wrapper"], [1, "fa", "fa-check-square"], ["mat-dialog-title", ""], ["mat-mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", 1, "btn", "btn-success", "btn1"]],
      template: function PaymentConfirmationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Click to Open Confirm Modal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\uE876");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Awesome!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Your booking has been confirmed. Check your email for detials.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PaymentConfirmationComponent_ng_template_19_Template, 10, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentConfirmationComponent_Template_button_click_22_listener() {
            return ctx.my();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "click me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: [".modal-confirm[_ngcontent-%COMP%] {\t\t\n\tcolor: #636363;\n\twidth: 325px;\n\tfont-size: 14px;\n}\n.modal-confirm[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n\tpadding: 20px;\n\tborder-radius: 5px;\n\tborder: none;\n}\n.modal-confirm[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n\tborder-bottom: none;   \n\tposition: relative;\n}\n.modal-confirm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n\ttext-align: center;\n\tfont-size: 26px;\n\tmargin: 30px 0 -15px;\n}\n.modal-confirm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n\tmin-height: 40px;\n\tborder-radius: 3px; \n}\n.modal-confirm[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: -5px;\n\tright: -5px;\n}\n.modal-confirm[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n\tborder: none;\n\ttext-align: center;\n\tborder-radius: 5px;\n\tfont-size: 13px;\n}\n.modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n\tcolor: #fff;\t\t\n\tposition: absolute;\n\tmargin: 0 auto;\n\tleft: 0;\n\tright: 0;\n\ttop: -70px;\n\twidth: 95px;\n\theight: 95px;\n\tborder-radius: 50%;\n\tz-index: 9;\n\tbackground: #82ce34;\n\tpadding: 15px;\n\ttext-align: center;\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n.modal-confirm[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n\tfont-size: 58px;\n\tposition: relative;\n\ttop: 3px;\n}\n.modal-confirm.modal-dialog[_ngcontent-%COMP%] {\n\tmargin-top: 80px;\n}\n.modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n\tcolor: #fff;\n\tborder-radius: 4px;\n\tbackground: #82ce34;\n\ttext-decoration: none;\n\ttransition: all 0.4s;\n\tline-height: normal;\n\tborder: none;\n}\n.modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .modal-confirm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n\tbackground: #6fb32b;\n\toutline: none;\n}\n.trigger-btn[_ngcontent-%COMP%] {\n\tdisplay: inline-block;\n\tmargin: 100px auto;\n\t\n}\n.modal-wrapper[_ngcontent-%COMP%] {\n  color: #636363;\n  text-align: center;\n  \n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\n\tmargin: 30px 0 -15px;\n\tfont-size: 14px;\n}\n.mat-dialog-actions[_ngcontent-%COMP%]{\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.btn1[_ngcontent-%COMP%]{\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100px;\n\talign-self: center;\n}\n.fa[_ngcontent-%COMP%]{\n\twidth: 80px;\n\theight: 80px;\n\tcolor: #6fb32b;;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC1mb2xkZXIvcGF5bWVudC1jb25maXJtYXRpb24vcGF5bWVudC1jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGNBQWM7Q0FDZCxZQUFZO0NBQ1osZUFBZTtBQUNoQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixZQUFZO0FBQ2I7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2Ysb0JBQW9CO0FBQ3JCO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFdBQVc7QUFDWjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsT0FBTztDQUNQLFFBQVE7Q0FDUixVQUFVO0NBQ1YsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLDBDQUEwQztBQUMzQztBQUNBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixRQUFRO0FBQ1Q7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIscUJBQXFCO0NBQ3JCLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsa0JBQWtCOztBQUVuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjs7RUFFbEIsMENBQTBDO0NBQzNDLG9CQUFvQjtDQUNwQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osY0FBYztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC1mb2xkZXIvcGF5bWVudC1jb25maXJtYXRpb24vcGF5bWVudC1jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1jb25maXJtIHtcdFx0XG5cdGNvbG9yOiAjNjM2MzYzO1xuXHR3aWR0aDogMzI1cHg7XG5cdGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tb2RhbC1jb25maXJtIC5tb2RhbC1jb250ZW50IHtcblx0cGFkZGluZzogMjBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRib3JkZXI6IG5vbmU7XG59XG4ubW9kYWwtY29uZmlybSAubW9kYWwtaGVhZGVyIHtcblx0Ym9yZGVyLWJvdHRvbTogbm9uZTsgICBcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1vZGFsLWNvbmZpcm0gaDQge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMjZweDtcblx0bWFyZ2luOiAzMHB4IDAgLTE1cHg7XG59XG4ubW9kYWwtY29uZmlybSAuZm9ybS1jb250cm9sLCAubW9kYWwtY29uZmlybSAuYnRuIHtcblx0bWluLWhlaWdodDogNDBweDtcblx0Ym9yZGVyLXJhZGl1czogM3B4OyBcbn1cbi5tb2RhbC1jb25maXJtIC5jbG9zZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtNXB4O1xuXHRyaWdodDogLTVweDtcbn1cdFxuLm1vZGFsLWNvbmZpcm0gLm1vZGFsLWZvb3RlciB7XG5cdGJvcmRlcjogbm9uZTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGZvbnQtc2l6ZTogMTNweDtcbn1cdFxuLm1vZGFsLWNvbmZpcm0gLmljb24tYm94IHtcblx0Y29sb3I6ICNmZmY7XHRcdFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0dG9wOiAtNzBweDtcblx0d2lkdGg6IDk1cHg7XG5cdGhlaWdodDogOTVweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHR6LWluZGV4OiA5O1xuXHRiYWNrZ3JvdW5kOiAjODJjZTM0O1xuXHRwYWRkaW5nOiAxNXB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5tb2RhbC1jb25maXJtIC5pY29uLWJveCBpIHtcblx0Zm9udC1zaXplOiA1OHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRvcDogM3B4O1xufVxuLm1vZGFsLWNvbmZpcm0ubW9kYWwtZGlhbG9nIHtcblx0bWFyZ2luLXRvcDogODBweDtcbn1cbi5tb2RhbC1jb25maXJtIC5idG4ge1xuXHRjb2xvcjogI2ZmZjtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRiYWNrZ3JvdW5kOiAjODJjZTM0O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdHRyYW5zaXRpb246IGFsbCAwLjRzO1xuXHRsaW5lLWhlaWdodDogbm9ybWFsO1xuXHRib3JkZXI6IG5vbmU7XG59XG4ubW9kYWwtY29uZmlybSAuYnRuOmhvdmVyLCAubW9kYWwtY29uZmlybSAuYnRuOmZvY3VzIHtcblx0YmFja2dyb3VuZDogIzZmYjMyYjtcblx0b3V0bGluZTogbm9uZTtcbn1cbi50cmlnZ2VyLWJ0biB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luOiAxMDBweCBhdXRvO1xuXHRcbn1cbi5tb2RhbC13cmFwcGVyIHtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0bWFyZ2luOiAzMHB4IDAgLTE1cHg7XG5cdGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYXQtZGlhbG9nLWFjdGlvbnN7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJ0bjF7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR3aWR0aDogMTAwcHg7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5mYXtcblx0d2lkdGg6IDgwcHg7XG5cdGhlaWdodDogODBweDtcblx0Y29sb3I6ICM2ZmIzMmI7O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentConfirmationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-payment-confirmation',
          templateUrl: './payment-confirmation.component.html',
          styleUrls: ['./payment-confirmation.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, {
        paymentSuccessModelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['paymentSuccessModelTemplate']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/reservations/confrence-room/confrence-room.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/reservations/confrence-room/confrence-room.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ConferenceRoomComponent */

  /***/
  function srcAppPagesReservationsConfrenceRoomConfrenceRoomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConferenceRoomComponent", function () {
      return ConferenceRoomComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/conferencePayment"];
    };

    var ConferenceRoomComponent = /*#__PURE__*/function () {
      function ConferenceRoomComponent() {
        _classCallCheck(this, ConferenceRoomComponent);

        this.amount = 15000;
      }

      _createClass(ConferenceRoomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConferenceRoomComponent;
    }();

    ConferenceRoomComponent.ɵfac = function ConferenceRoomComponent_Factory(t) {
      return new (t || ConferenceRoomComponent)();
    };

    ConferenceRoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConferenceRoomComponent,
      selectors: [["app-confrence-room"]],
      decls: 61,
      vars: 12,
      consts: [[1, "main-content-wrapper"], [1, "conference-rooms"], [1, "dicription-wrapper"], [1, "discription-header"], [1, "main-card-wrapper"], [1, "card", "card-wrapper"], [1, "row", "row-cols-1", "row-cols-md-3"], [1, "col", "mb-4"], [1, "card", "h-100"], ["src", "/assets/images/conference-room-768441_1920.jpg", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-footer"], [1, "text", 2, "font-weight", "bold"], [1, "btn", "btn-primary", "book-room", 3, "routerLink"], ["src", "/assets/images/conference1.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/conference2.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/conference-hall.jpg", "alt", "...", 1, "card-img-top"]],
      template: function ConferenceRoomComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Here are our conference rooms and halls to pick from");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "conference Room 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "This is from our exquisite conference rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Conference Room 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "This is from our exquisite conference rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Conference Room 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "This is Room 3 from our exquisite conference rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Conference Room 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "This is from our exquisite conference rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".conference-rooms[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n      font-size: 14px;\n      padding-top: 5em;\n      background-color: inherit;\n    \n    }\n    .card-wrapper[_ngcontent-%COMP%]{\n      width: 90%;\n      height: 50%;\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      justify-content: center;\n      align-content: center;\n      background-color: inherit;\n    \n    }\n    .main-card-wrapper[_ngcontent-%COMP%]{\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      justify-content: center;\n    \n    }\n    .dicription-wrapper[_ngcontent-%COMP%]{\n      align-content: center;\n      text-align: center;\n      font-size: 18px;\n    }\n    .book-room[_ngcontent-%COMP%]{\n      float: right;\n      font-size: small;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXJ2YXRpb25zL2NvbmZyZW5jZS1yb29tL2NvbmZyZW5jZS1yb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtNQUNWLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIseUJBQXlCOztJQUUzQjtJQUNBO01BQ0UsVUFBVTtNQUNWLFdBQVc7TUFDWCxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGVBQWU7TUFDZix1QkFBdUI7TUFDdkIscUJBQXFCO01BQ3JCLHlCQUF5Qjs7SUFFM0I7SUFDQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLHVCQUF1Qjs7SUFFekI7SUFDQTtNQUNFLHFCQUFxQjtNQUNyQixrQkFBa0I7TUFDbEIsZUFBZTtJQUNqQjtJQUNBO01BQ0UsWUFBWTtNQUNaLGdCQUFnQjtJQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2VydmF0aW9ucy9jb25mcmVuY2Utcm9vbS9jb25mcmVuY2Utcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZlcmVuY2Utcm9vbXN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgcGFkZGluZy10b3A6IDVlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgXG4gICAgfVxuICAgIC5jYXJkLXdyYXBwZXJ7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBcbiAgICB9XG4gICAgLm1haW4tY2FyZC13cmFwcGVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgICB9XG4gICAgLmRpY3JpcHRpb24td3JhcHBlcntcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLmJvb2stcm9vbXtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgfVxuICAgICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConferenceRoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-confrence-room',
          templateUrl: './confrence-room.component.html',
          styleUrls: ['./confrence-room.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/reservations/luxury-rooms/luxury-rooms.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/reservations/luxury-rooms/luxury-rooms.component.ts ***!
    \***************************************************************************/

  /*! exports provided: LuxuryRoomsComponent */

  /***/
  function srcAppPagesReservationsLuxuryRoomsLuxuryRoomsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LuxuryRoomsComponent", function () {
      return LuxuryRoomsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/luxpay"];
    };

    var LuxuryRoomsComponent = /*#__PURE__*/function () {
      function LuxuryRoomsComponent() {
        _classCallCheck(this, LuxuryRoomsComponent);

        this.amount = 5000;
      }

      _createClass(LuxuryRoomsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LuxuryRoomsComponent;
    }();

    LuxuryRoomsComponent.ɵfac = function LuxuryRoomsComponent_Factory(t) {
      return new (t || LuxuryRoomsComponent)();
    };

    LuxuryRoomsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LuxuryRoomsComponent,
      selectors: [["app-luxury-rooms"]],
      decls: 87,
      vars: 18,
      consts: [[1, "main-content-wrapper"], [1, "luxury-rooms"], [1, "dicription-wrapper"], [1, "discription-header"], [1, "main-card-wrapper"], [1, "card", "card-wrapper"], [1, "row", "row-cols-1", "row-cols-md-3"], [1, "col", "mb-4"], [1, "card", "h-100"], ["src", "/assets/images/luxury1.jpg", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-footer"], [1, "text", 2, "font-weight", "bold"], [1, "btn", "btn-primary", "book-room", 3, "routerLink"], ["src", "/assets/images/bedroom.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/hotel-room.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/luxury2.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/luxury3.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/luxury4.jpg", "alt", "...", 1, "card-img-top"]],
      template: function LuxuryRoomsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Here are our luxury rooms to pick from");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Luxury Room 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "This is Room 1 from our exquisite luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Luxury Room 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "This is Room 2 from our exquisite luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Luxury Room 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "This is Room 3 from our exquisite luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Luxury Room 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "This is Room 4 from our exquisite luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Luxury Room 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "This is Room 5 from our exquisite luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Luxury Room 6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "This is Room is from our exquisite luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".luxury-rooms[_ngcontent-%COMP%]{\nwidth: 100%;\nheight: 100%;\n  font-size: 14px;\n  padding-top: 5em;\n  background-color: inherit;\n\n}\n.card-wrapper[_ngcontent-%COMP%]{\n  width: 90%;\n  height: 50%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  background-color: inherit;\n\n}\n.main-card-wrapper[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n\n}\n.dicription-wrapper[_ngcontent-%COMP%]{\n  align-content: center;\n  text-align: center;\n  font-size: 18px;\n}\n.book-room[_ngcontent-%COMP%]{\n  float: right;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXJ2YXRpb25zL2x1eHVyeS1yb29tcy9sdXh1cnktcm9vbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7O0FBRTNCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIseUJBQXlCOztBQUUzQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCOztBQUV6QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVzZXJ2YXRpb25zL2x1eHVyeS1yb29tcy9sdXh1cnktcm9vbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sdXh1cnktcm9vbXN7XG53aWR0aDogMTAwJTtcbmhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLXRvcDogNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuXG59XG4uY2FyZC13cmFwcGVye1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuXG59XG4ubWFpbi1jYXJkLXdyYXBwZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbn1cbi5kaWNyaXB0aW9uLXdyYXBwZXJ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uYm9vay1yb29te1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LuxuryRoomsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-luxury-rooms',
          templateUrl: './luxury-rooms.component.html',
          styleUrls: ['./luxury-rooms.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/reservations/mini-luxury/mini-luxury.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/reservations/mini-luxury/mini-luxury.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MiniLuxuryComponent */

  /***/
  function srcAppPagesReservationsMiniLuxuryMiniLuxuryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiniLuxuryComponent", function () {
      return MiniLuxuryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/miniLuxuryPayment"];
    };

    var MiniLuxuryComponent = /*#__PURE__*/function () {
      function MiniLuxuryComponent() {
        _classCallCheck(this, MiniLuxuryComponent);

        this.amount = 3000;
      }

      _createClass(MiniLuxuryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MiniLuxuryComponent;
    }();

    MiniLuxuryComponent.ɵfac = function MiniLuxuryComponent_Factory(t) {
      return new (t || MiniLuxuryComponent)();
    };

    MiniLuxuryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MiniLuxuryComponent,
      selectors: [["app-mini-luxury"]],
      decls: 61,
      vars: 12,
      consts: [[1, "main-content-wrapper"], [1, "mini-luxury-rooms"], [1, "dicription-wrapper"], [1, "discription-header"], [1, "main-card-wrapper"], [1, "card", "card-wrapper"], [1, "row", "row-cols-1", "row-cols-md-3"], [1, "col", "mb-4"], [1, "card", "h-100"], ["src", "/assets/images/mini-luxury.jpg", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-footer"], [1, "text", 2, "font-weight", "bold"], [1, "btn", "btn-primary", "book-room", 3, "routerLink"], ["src", "/assets/images/bed.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/bed2.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/bed5.jpg", "alt", "...", 1, "card-img-top"]],
      template: function MiniLuxuryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Here are our Mini-luxury rooms to pick from");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mini Luxury Room 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "This is from our exquisite mini-luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Mini Luxury Room 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "This isfrom our exquisite Mini-luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Mini Luxury Room 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "This is from our exquisite Mini-luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Mini Luxury Room 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "This is from our exquisite Mini-luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".mini-luxury-rooms[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n      font-size: 14px;\n      padding-top: 5em;\n      background-color: inherit;\n    \n    }\n    .card-wrapper[_ngcontent-%COMP%]{\n      width: 90%;\n      height: 50%;\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      justify-content: center;\n      align-content: center;\n      background-color: inherit;\n    \n    }\n    .main-card-wrapper[_ngcontent-%COMP%]{\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      justify-content: center;\n    \n    }\n    .dicription-wrapper[_ngcontent-%COMP%]{\n      align-content: center;\n      text-align: center;\n      font-size: 18px;\n    }\n    .book-room[_ngcontent-%COMP%]{\n      float: right;\n      font-size: small;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXJ2YXRpb25zL21pbmktbHV4dXJ5L21pbmktbHV4dXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtNQUNWLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIseUJBQXlCOztJQUUzQjtJQUNBO01BQ0UsVUFBVTtNQUNWLFdBQVc7TUFDWCxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGVBQWU7TUFDZix1QkFBdUI7TUFDdkIscUJBQXFCO01BQ3JCLHlCQUF5Qjs7SUFFM0I7SUFDQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLHVCQUF1Qjs7SUFFekI7SUFDQTtNQUNFLHFCQUFxQjtNQUNyQixrQkFBa0I7TUFDbEIsZUFBZTtJQUNqQjtJQUNBO01BQ0UsWUFBWTtNQUNaLGdCQUFnQjtJQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2VydmF0aW9ucy9taW5pLWx1eHVyeS9taW5pLWx1eHVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pbmktbHV4dXJ5LXJvb21ze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHBhZGRpbmctdG9wOiA1ZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIFxuICAgIH1cbiAgICAuY2FyZC13cmFwcGVye1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgXG4gICAgfVxuICAgIC5tYWluLWNhcmQtd3JhcHBlcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gICAgfVxuICAgIC5kaWNyaXB0aW9uLXdyYXBwZXJ7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIC5ib29rLXJvb217XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIH1cbiAgICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiniLuxuryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mini-luxury',
          templateUrl: './mini-luxury.component.html',
          styleUrls: ['./mini-luxury.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/reservations/payment-portal/conference-room/conference-room.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/pages/reservations/payment-portal/conference-room/conference-room.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: ConferenceRoomPaymentComponent */

  /***/
  function srcAppPagesReservationsPaymentPortalConferenceRoomConferenceRoomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConferenceRoomPaymentComponent", function () {
      return ConferenceRoomPaymentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_cores_services_paystack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/cores/services/paystack.service */
    "./src/app/cores/services/paystack.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

    function ConferenceRoomPaymentComponent_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.checkInDateErrorMessage());
      }
    }

    function ConferenceRoomPaymentComponent_mat_error_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.checkOutDateErrorMessage());
      }
    }

    function ConferenceRoomPaymentComponent_option_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var title_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", title_r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](title_r9);
      }
    }

    function ConferenceRoomPaymentComponent_mat_error_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.firstNameErrorMessage());
      }
    }

    function ConferenceRoomPaymentComponent_mat_error_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.lastNameErrorMessage());
      }
    }

    function ConferenceRoomPaymentComponent_option_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r10);
      }
    }

    function ConferenceRoomPaymentComponent_mat_error_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.countryErrorMessage());
      }
    }

    function ConferenceRoomPaymentComponent_mat_error_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.phoneNoErrorMessage());
      }
    }

    function ConferenceRoomPaymentComponent_mat_error_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.emailErrorMessage());
      }
    }

    var ConferenceRoomPaymentComponent = /*#__PURE__*/function () {
      function ConferenceRoomPaymentComponent(router, _paystackService) {
        _classCallCheck(this, ConferenceRoomPaymentComponent);

        this.router = router;
        this._paystackService = _paystackService;
        this.titles = ['Mr', 'Mrs', 'Miss', 'Dr', 'Engr', 'Prof', 'Pst', 'Rev'];
        this.countries = ['Nigeria', 'Ghana', 'Cameroon', 'Guinea', 'Morocco', 'Togo', 'benni Republic', 'Niger', 'Egypt', 'Madagascar'];
        this.conference = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          checkInDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          checkOutDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          phoneNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)]),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          additionalRequest: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
      }

      _createClass(ConferenceRoomPaymentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "payAtHotel",
        value: function payAtHotel() {
          console.log("created values on payAtHotel:", this.conference.value);
          this.router.navigateByUrl('/payAtHotel');
        }
      }, {
        key: "payNow",
        value: function payNow() {
          var amountInDays;
          var date1 = new Date(this.conference.get('checkInDate').value);
          var date2 = new Date(this.conference.get('checkOutDate').value);
          var daysInMiliseconds = 1000 * 60 * 60 * 24;
          var differenceInTime = date2.getTime() - date1.getTime();
          var daysDifference = differenceInTime / daysInMiliseconds;
          amountInDays = daysDifference;
          console.log("the differnce in date is: ", amountInDays);
          var details = {
            firstName: this.conference.get('firstName').value,
            lastName: this.conference.get('lastName').value,
            title: this.conference.get('title').value,
            checkInDate: new Date(this.conference.get('checkInDate').value),
            checkOutDate: new Date(this.conference.get('checkOutDate').value),
            phoneNo: this.conference.get('phoneNo').value,
            email: this.conference.get('email').value,
            country: this.conference.get('country').value,
            additionalRequest: this.conference.get('additionalRequest').value,
            amountPaid: 15000 * amountInDays,
            roomType: 'conference Room',
            daysInHotel: amountInDays
          };

          this._paystackService.reservationDetails(details);

          this.router.navigateByUrl('/payNow');
        }
      }, {
        key: "firstNameErrorMessage",
        value: function firstNameErrorMessage() {
          if (this.conference.get('firstName').hasError('required') && this.conference.get('firstName').touched) {
            return 'First name is required';
          }
        }
      }, {
        key: "lastNameErrorMessage",
        value: function lastNameErrorMessage() {
          if (this.conference.get('lastName').hasError('required') && this.conference.get('lastName').touched) {
            return 'Last name is required';
          }
        }
      }, {
        key: "checkInDateErrorMessage",
        value: function checkInDateErrorMessage() {
          if (this.conference.get('checkInDate').hasError('required') && this.conference.get('checkInDate').touched) {
            return 'Check-in Date is required';
          }
        }
      }, {
        key: "checkOutDateErrorMessage",
        value: function checkOutDateErrorMessage() {
          if (this.conference.get('checkOutDate').hasError('required') && this.conference.get('checkOutDate').touched) {
            return 'Check-out Date is required';
          }
        }
      }, {
        key: "emailErrorMessage",
        value: function emailErrorMessage() {
          if (this.conference.get('email').hasError('required') && this.conference.get('email').touched) {
            return 'Email is required';
          }

          if (this.conference.get('email').hasError('email') && this.conference.get('email').touched) {
            return 'Email is not valid';
          }
        }
      }, {
        key: "phoneNoErrorMessage",
        value: function phoneNoErrorMessage() {
          if (this.conference.get('phoneNo').hasError('required') && this.conference.get('phoneNo').touched) {
            return 'Phone Number is required';
          }

          if (this.conference.get('phoneNo').hasError('minLength()') && this.conference.get('phoneNo').touched) {
            return 'Phone number is incorrect!';
          }
        }
      }, {
        key: "countryErrorMessage",
        value: function countryErrorMessage() {
          if (this.conference.get('country').hasError('required') && this.conference.get('country').touched) {
            return 'country name is required';
          }
        }
      }]);

      return ConferenceRoomPaymentComponent;
    }();

    ConferenceRoomPaymentComponent.ɵfac = function ConferenceRoomPaymentComponent_Factory(t) {
      return new (t || ConferenceRoomPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_cores_services_paystack_service__WEBPACK_IMPORTED_MODULE_3__["PaystackService"]));
    };

    ConferenceRoomPaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConferenceRoomPaymentComponent,
      selectors: [["app-conference-room"]],
      decls: 61,
      vars: 10,
      consts: [[1, "main-content-wrapper"], [1, "sub-content-wrapper"], [1, "card", "payment-content"], [1, "header"], [1, "card-title", "description"], [1, "payment-card-wrapper"], ["method", "POST", "action", "reservation", "id", "reservation", "name", "reservation", 3, "formGroup"], [1, "card-body"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "checkIn"], ["type", "date", "id", "checkInDate", "name", "checkInDate", "formControlName", "checkInDate", 1, "form-control"], [4, "ngIf"], ["for", "checkOut"], ["type", "date", "id", "checkOutDate", "name", "checkOutDate", "formControlName", "checkOutDate", 1, "form-control"], [1, "form-group", "col-md-2"], ["for", "title"], ["id", "title", "name", "title", "formControlName", "title", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-5", "mb-3"], ["type", "text", "id", "firstName", "name", "firstName", "formControlName", "firstName", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], [1, "col-md-5"], ["type", "text", "id", "lastName", "name", "lastName", "formControlName", "lastName", 1, "form-control"], [1, "col-md-3", "mb-3"], ["name", "country", "formControlName", "country", "id", "country", 1, "form-control"], ["type", "text", "id", "phoneNo", "name", "phoneNo", "formControlName", "phoneNo", 1, "form-control"], [1, "col-md-6"], ["type", "email", "id", "email", "name", "email", "formControlName", "email", 1, "form-control"], [1, "col-md-8"], ["type", "text", "id", "additionalRequest", "name", "additionalRequest", "rows", "2", "formControlName", "additionalRequest", "placeholder", "please enter any additional request", 1, "form-control"], [1, "btn-wrapper"], [1, "btn", "btn-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [3, "value"], [1, "text-danger"]],
      template: function ConferenceRoomPaymentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please fill in your details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Check-in Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ConferenceRoomPaymentComponent_mat_error_14_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Check-Out Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ConferenceRoomPaymentComponent_mat_error_19_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ConferenceRoomPaymentComponent_option_25_Template, 2, 2, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ConferenceRoomPaymentComponent_mat_error_30_Template, 2, 1, "mat-error", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ConferenceRoomPaymentComponent_mat_error_35_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ConferenceRoomPaymentComponent_option_40_Template, 2, 2, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ConferenceRoomPaymentComponent_mat_error_42_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Phone No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ConferenceRoomPaymentComponent_mat_error_47_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ConferenceRoomPaymentComponent_mat_error_52_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "textarea", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConferenceRoomPaymentComponent_Template_button_click_56_listener() {
            return ctx.payAtHotel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Pay at Hotel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConferenceRoomPaymentComponent_Template_button_click_59_listener() {
            return ctx.payNow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Pay Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.conference);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.conference.get("checkInDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.conference.get("checkOutDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.titles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.conference.get("firstName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.conference.get("lastName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.conference.get("country"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.conference.get("phoneNo").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.conference.get("email"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
      styles: [".main-content-wrapper[_ngcontent-%COMP%]{\n    background-color: indigo;\n  }\n  \n  .sub-content-wrapper[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    padding-top: 4em;\n    padding-bottom: 4em;\n    height: 30%;\n  }\n  \n  .payment-content[_ngcontent-%COMP%]{\n    padding-top: 1em;\n    width: 60%;\n    display: flex;\n    font-size: 14px;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n  }\n  \n  .payment-card-wrapper[_ngcontent-%COMP%]{\n  }\n  \n  .btn[_ngcontent-%COMP%]{\n    width: 100%;\n    padding-top: .5em;\n    padding-bottom: .5em;\n  }\n  \n  .btn-wrapper[_ngcontent-%COMP%]{\n    padding-top: 1em;\n    padding-bottom: .6em;\n  }\n  \n  .description[_ngcontent-%COMP%]{\n    font-size: 25px;\n    text-align: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXJ2YXRpb25zL3BheW1lbnQtcG9ydGFsL2NvbmZlcmVuY2Utcm9vbS9jb25mZXJlbmNlLXJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYixlQUFlO0lBQ2YscURBQXFEO0VBQ3ZEOztFQUNBO0VBQ0E7O0VBR0E7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9CQUFvQjtFQUN0Qjs7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixvQkFBb0I7RUFDdEI7O0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVzZXJ2YXRpb25zL3BheW1lbnQtcG9ydGFsL2NvbmZlcmVuY2Utcm9vbS9jb25mZXJlbmNlLXJvb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnQtd3JhcHBlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XG4gIH1cbiAgXG4gIC5zdWItY29udGVudC13cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDRlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNGVtO1xuICAgIGhlaWdodDogMzAlO1xuICB9XG4gIC5wYXltZW50LWNvbnRlbnR7XG4gICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICB9XG4gIC5wYXltZW50LWNhcmQtd3JhcHBlcntcbiAgfVxuICBcbiAgXG4gIC5idG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IC41ZW07XG4gICAgcGFkZGluZy1ib3R0b206IC41ZW07XG4gIH1cbiAgLmJ0bi13cmFwcGVye1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgcGFkZGluZy1ib3R0b206IC42ZW07XG4gIH1cbiAgLmRlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConferenceRoomPaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-conference-room',
          templateUrl: './conference-room.component.html',
          styleUrls: ['./conference-room.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_cores_services_paystack_service__WEBPACK_IMPORTED_MODULE_3__["PaystackService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/reservations/payment-portal/lux-payment/lux-payment.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/reservations/payment-portal/lux-payment/lux-payment.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: LuxPaymentComponent */

  /***/
  function srcAppPagesReservationsPaymentPortalLuxPaymentLuxPaymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LuxPaymentComponent", function () {
      return LuxPaymentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cores_services_paystack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../cores/services/paystack.service */
    "./src/app/cores/services/paystack.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

    function LuxPaymentComponent_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.checkInDateErrorMessage());
      }
    }

    function LuxPaymentComponent_mat_error_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.checkOutDateErrorMessage());
      }
    }

    function LuxPaymentComponent_option_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var title_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", title_r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](title_r9);
      }
    }

    function LuxPaymentComponent_mat_error_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.firstNameErrorMessage());
      }
    }

    function LuxPaymentComponent_mat_error_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.lastNameErrorMessage());
      }
    }

    function LuxPaymentComponent_option_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r10);
      }
    }

    function LuxPaymentComponent_mat_error_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.countryErrorMessage());
      }
    }

    function LuxPaymentComponent_mat_error_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.phoneNoErrorMessage());
      }
    }

    function LuxPaymentComponent_mat_error_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.emailErrorMessage());
      }
    }

    var LuxPaymentComponent = /*#__PURE__*/function () {
      function LuxPaymentComponent(router, _paystackService) {
        _classCallCheck(this, LuxPaymentComponent);

        this.router = router;
        this._paystackService = _paystackService;
        this.titles = ['Mr', 'Mrs', 'Miss', 'Dr', 'Engr', 'Prof', 'Pst', 'Rev'];
        this.countries = ['Nigeria', 'Ghana', 'Cameroon', 'Guinea', 'Morocco', 'Togo', 'benni Republic', 'Niger', 'Egypt', 'Madagascar'];
        this.luxForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          checkInDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          checkOutDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          phoneNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)]),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          additionalRequest: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
      }

      _createClass(LuxPaymentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "payAtHotel",
        value: function payAtHotel() {
          console.log("created values on payAtHotel:", this.luxForm.value);
          this.router.navigateByUrl('/payAtHotel');
        }
      }, {
        key: "payNow",
        value: function payNow() {
          var amountInDays;
          var date1 = new Date(this.luxForm.get('checkInDate').value);
          var date2 = new Date(this.luxForm.get('checkOutDate').value);
          var daysInMiliseconds = 1000 * 60 * 60 * 24;
          var differenceInTime = date2.getTime() - date1.getTime();
          var daysDifference = differenceInTime / daysInMiliseconds;
          amountInDays = daysDifference;
          console.log("the differnce in date is: ", amountInDays);
          var details = {
            firstName: this.luxForm.get('firstName').value,
            lastName: this.luxForm.get('lastName').value,
            title: this.luxForm.get('title').value,
            checkInDate: new Date(this.luxForm.get('checkInDate').value),
            checkOutDate: new Date(this.luxForm.get('checkOutDate').value),
            phoneNo: this.luxForm.get('phoneNo').value,
            email: this.luxForm.get('email').value,
            country: this.luxForm.get('country').value,
            additionalRequest: this.luxForm.get('additionalRequest').value,
            amountPaid: 5000 * amountInDays,
            roomType: 'luxury',
            daysInHotel: amountInDays
          };

          this._paystackService.reservationDetails(details);

          this.router.navigateByUrl('/payNow');
        }
      }, {
        key: "firstNameErrorMessage",
        value: function firstNameErrorMessage() {
          if (this.luxForm.get('firstName').hasError('required') && this.luxForm.get('firstName').touched) {
            return 'First name is required';
          }
        }
      }, {
        key: "lastNameErrorMessage",
        value: function lastNameErrorMessage() {
          if (this.luxForm.get('lastName').hasError('required') && this.luxForm.get('lastName').touched) {
            return 'Last name is required';
          }
        }
      }, {
        key: "checkInDateErrorMessage",
        value: function checkInDateErrorMessage() {
          if (this.luxForm.get('checkInDate').hasError('required') && this.luxForm.get('checkInDate').touched) {
            return 'Check-in Date is required';
          }
        }
      }, {
        key: "checkOutDateErrorMessage",
        value: function checkOutDateErrorMessage() {
          if (this.luxForm.get('checkOutDate').hasError('required') && this.luxForm.get('checkOutDate').touched) {
            return 'Check-out Date is required';
          }
        }
      }, {
        key: "emailErrorMessage",
        value: function emailErrorMessage() {
          if (this.luxForm.get('email').hasError('required') && this.luxForm.get('email').touched) {
            return 'Email is required';
          }

          if (this.luxForm.get('email').hasError('email') && this.luxForm.get('email').touched) {
            return 'Email is not valid';
          }
        }
      }, {
        key: "phoneNoErrorMessage",
        value: function phoneNoErrorMessage() {
          if (this.luxForm.get('phoneNo').hasError('required') && this.luxForm.get('phoneNo').touched) {
            return 'Phone Number is required';
          }

          if (this.luxForm.get('phoneNo').hasError('minLength()') && this.luxForm.get('phoneNo').touched) {
            return 'Phone number is incorrect!';
          }
        }
      }, {
        key: "countryErrorMessage",
        value: function countryErrorMessage() {
          if (this.luxForm.get('country').hasError('required') && this.luxForm.get('country').touched) {
            return 'country name is required';
          }
        }
      }]);

      return LuxPaymentComponent;
    }();

    LuxPaymentComponent.ɵfac = function LuxPaymentComponent_Factory(t) {
      return new (t || LuxPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cores_services_paystack_service__WEBPACK_IMPORTED_MODULE_3__["PaystackService"]));
    };

    LuxPaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LuxPaymentComponent,
      selectors: [["app-lux-payment"]],
      decls: 61,
      vars: 10,
      consts: [[1, "main-content-wrapper"], [1, "sub-content-wrapper"], [1, "card", "payment-content"], [1, "header"], [1, "card-title", "description"], [1, "payment-card-wrapper"], ["method", "POST", "action", "reservation", "id", "reservation", "name", "reservation", 3, "formGroup"], [1, "card-body"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "checkIn"], ["type", "date", "id", "checkInDate", "name", "checkInDate", "formControlName", "checkInDate", 1, "form-control"], [4, "ngIf"], ["for", "checkOut"], ["type", "date", "id", "checkOutDate", "name", "checkOutDate", "formControlName", "checkOutDate", 1, "form-control"], [1, "form-group", "col-md-2"], ["for", "title"], ["id", "title", "name", "title", "formControlName", "title", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-5", "mb-3"], ["type", "text", "id", "firstName", "name", "firstName", "formControlName", "firstName", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], [1, "col-md-5"], ["type", "text", "id", "lastName", "name", "lastName", "formControlName", "lastName", 1, "form-control"], [1, "col-md-3", "mb-3"], ["name", "country", "formControlName", "country", "id", "country", 1, "form-control"], ["type", "text", "id", "phoneNo", "name", "phoneNo", "formControlName", "phoneNo", 1, "form-control"], [1, "col-md-6"], ["type", "email", "id", "email", "name", "email", "formControlName", "email", 1, "form-control"], [1, "col-md-8"], ["type", "text", "id", "additionalRequest", "name", "additionalRequest", "rows", "2", "formControlName", "additionalRequest", "placeholder", "please enter any additional request", 1, "form-control"], [1, "btn-wrapper"], [1, "btn", "btn-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [3, "value"], [1, "text-danger"]],
      template: function LuxPaymentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please fill in your details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Check-in Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LuxPaymentComponent_mat_error_14_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Check-Out Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LuxPaymentComponent_mat_error_19_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LuxPaymentComponent_option_25_Template, 2, 2, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, LuxPaymentComponent_mat_error_30_Template, 2, 1, "mat-error", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, LuxPaymentComponent_mat_error_35_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, LuxPaymentComponent_option_40_Template, 2, 2, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, LuxPaymentComponent_mat_error_42_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Phone No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, LuxPaymentComponent_mat_error_47_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, LuxPaymentComponent_mat_error_52_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "textarea", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LuxPaymentComponent_Template_button_click_56_listener() {
            return ctx.payAtHotel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Pay at Hotel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LuxPaymentComponent_Template_button_click_59_listener() {
            return ctx.payNow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Pay Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.luxForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.luxForm.get("checkInDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.luxForm.get("checkOutDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.titles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.luxForm.get("firstName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.luxForm.get("lastName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.luxForm.get("country"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.luxForm.get("phoneNo").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.luxForm.get("email"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
      styles: [".main-content-wrapper[_ngcontent-%COMP%]{\n  background-color: indigo;\n}\n\n.sub-content-wrapper[_ngcontent-%COMP%]{\n  display: flex;\n  justify-content: center;\n  padding-top: 4em;\n  padding-bottom: 4em;\n  height: 30%;\n}\n\n.payment-content[_ngcontent-%COMP%]{\n  padding-top: 1em;\n  width: 60%;\n  display: flex;\n  font-size: 14px;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n}\n\n.payment-card-wrapper[_ngcontent-%COMP%]{\n}\n\n.btn[_ngcontent-%COMP%]{\n  width: 100%;\n  padding-top: .5em;\n  padding-bottom: .5em;\n}\n\n.btn-wrapper[_ngcontent-%COMP%]{\n  padding-top: 1em;\n  padding-bottom: .6em;\n}\n\n.description[_ngcontent-%COMP%]{\n  font-size: 25px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXJ2YXRpb25zL3BheW1lbnQtcG9ydGFsL2x1eC1wYXltZW50L2x1eC1wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0VBQ2IsZUFBZTtFQUNmLHFEQUFxRDtBQUN2RDs7QUFDQTtBQUNBOztBQUdBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2VydmF0aW9ucy9wYXltZW50LXBvcnRhbC9sdXgtcGF5bWVudC9sdXgtcGF5bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudC13cmFwcGVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XG59XG5cbi5zdWItY29udGVudC13cmFwcGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDRlbTtcbiAgcGFkZGluZy1ib3R0b206IDRlbTtcbiAgaGVpZ2h0OiAzMCU7XG59XG4ucGF5bWVudC1jb250ZW50e1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICB3aWR0aDogNjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuLnBheW1lbnQtY2FyZC13cmFwcGVye1xufVxuXG5cbi5idG57XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogLjVlbTtcbiAgcGFkZGluZy1ib3R0b206IC41ZW07XG59XG4uYnRuLXdyYXBwZXJ7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAuNmVtO1xufVxuLmRlc2NyaXB0aW9ue1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LuxPaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lux-payment',
          templateUrl: './lux-payment.component.html',
          styleUrls: ['./lux-payment.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _cores_services_paystack_service__WEBPACK_IMPORTED_MODULE_3__["PaystackService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/reservations/payment-portal/mini-luxury/mini-luxury.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/reservations/payment-portal/mini-luxury/mini-luxury.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: MiniLuxuryPaymentComponent */

  /***/
  function srcAppPagesReservationsPaymentPortalMiniLuxuryMiniLuxuryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiniLuxuryPaymentComponent", function () {
      return MiniLuxuryPaymentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_cores_services_paystack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/cores/services/paystack.service */
    "./src/app/cores/services/paystack.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

    function MiniLuxuryPaymentComponent_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.checkInDateErrorMessage());
      }
    }

    function MiniLuxuryPaymentComponent_mat_error_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.checkOutDateErrorMessage());
      }
    }

    function MiniLuxuryPaymentComponent_option_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var title_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", title_r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](title_r9);
      }
    }

    function MiniLuxuryPaymentComponent_mat_error_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.firstNameErrorMessage());
      }
    }

    function MiniLuxuryPaymentComponent_mat_error_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.lastNameErrorMessage());
      }
    }

    function MiniLuxuryPaymentComponent_option_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r10);
      }
    }

    function MiniLuxuryPaymentComponent_mat_error_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.countryErrorMessage());
      }
    }

    function MiniLuxuryPaymentComponent_mat_error_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.phoneNoErrorMessage());
      }
    }

    function MiniLuxuryPaymentComponent_mat_error_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.emailErrorMessage());
      }
    }

    var MiniLuxuryPaymentComponent = /*#__PURE__*/function () {
      function MiniLuxuryPaymentComponent(router, _paystackService) {
        _classCallCheck(this, MiniLuxuryPaymentComponent);

        this.router = router;
        this._paystackService = _paystackService;
        this.titles = ['Mr', 'Mrs', 'Miss', 'Dr', 'Engr', 'Prof', 'Pst', 'Rev'];
        this.countries = ['Nigeria', 'Ghana', 'Cameroon', 'Guinea', 'Morocco', 'Togo', 'benni Republic', 'Niger', 'Egypt', 'Madagascar'];
        this.miniLuxury = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          checkInDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          checkOutDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          phoneNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)]),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          additionalRequest: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
      }

      _createClass(MiniLuxuryPaymentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "payAtHotel",
        value: function payAtHotel() {
          console.log("created values on payAtHotel:", this.miniLuxury.value);
          this.router.navigateByUrl('/payAtHotel');
        }
      }, {
        key: "payNow",
        value: function payNow() {
          var amountInDays;
          var date1 = new Date(this.miniLuxury.get('checkInDate').value);
          var date2 = new Date(this.miniLuxury.get('checkOutDate').value);
          var daysInMiliseconds = 1000 * 60 * 60 * 24;
          var differenceInTime = date2.getTime() - date1.getTime();
          var daysDifference = differenceInTime / daysInMiliseconds;
          amountInDays = daysDifference;
          console.log("the differnce in date is: ", amountInDays);
          var details = {
            firstName: this.miniLuxury.get('firstName').value,
            lastName: this.miniLuxury.get('lastName').value,
            title: this.miniLuxury.get('title').value,
            checkInDate: new Date(this.miniLuxury.get('checkInDate').value),
            checkOutDate: new Date(this.miniLuxury.get('checkOutDate').value),
            phoneNo: this.miniLuxury.get('phoneNo').value,
            email: this.miniLuxury.get('email').value,
            country: this.miniLuxury.get('country').value,
            additionalRequest: this.miniLuxury.get('additionalRequest').value,
            amountPaid: 3000 * amountInDays,
            roomType: 'Mini-luxury',
            daysInHotel: amountInDays
          };

          this._paystackService.reservationDetails(details);

          this.router.navigateByUrl('/payNow');
        }
      }, {
        key: "firstNameErrorMessage",
        value: function firstNameErrorMessage() {
          if (this.miniLuxury.get('firstName').hasError('required') && this.miniLuxury.get('firstName').touched) {
            return 'First name is required';
          }
        }
      }, {
        key: "lastNameErrorMessage",
        value: function lastNameErrorMessage() {
          if (this.miniLuxury.get('lastName').hasError('required') && this.miniLuxury.get('lastName').touched) {
            return 'Last name is required';
          }
        }
      }, {
        key: "checkInDateErrorMessage",
        value: function checkInDateErrorMessage() {
          if (this.miniLuxury.get('checkInDate').hasError('required') && this.miniLuxury.get('checkInDate').touched) {
            return 'Check-in Date is required';
          }
        }
      }, {
        key: "checkOutDateErrorMessage",
        value: function checkOutDateErrorMessage() {
          if (this.miniLuxury.get('checkOutDate').hasError('required') && this.miniLuxury.get('checkOutDate').touched) {
            return 'Check-out Date is required';
          }
        }
      }, {
        key: "emailErrorMessage",
        value: function emailErrorMessage() {
          if (this.miniLuxury.get('email').hasError('required') && this.miniLuxury.get('email').touched) {
            return 'Email is required';
          }

          if (this.miniLuxury.get('email').hasError('email') && this.miniLuxury.get('email').touched) {
            return 'Email is not valid';
          }
        }
      }, {
        key: "phoneNoErrorMessage",
        value: function phoneNoErrorMessage() {
          if (this.miniLuxury.get('phoneNo').hasError('required') && this.miniLuxury.get('phoneNo').touched) {
            return 'Phone Number is required';
          }

          if (this.miniLuxury.get('phoneNo').hasError('minLength()') && this.miniLuxury.get('phoneNo').touched) {
            return 'Phone number is incorrect!';
          }
        }
      }, {
        key: "countryErrorMessage",
        value: function countryErrorMessage() {
          if (this.miniLuxury.get('country').hasError('required') && this.miniLuxury.get('country').touched) {
            return 'country name is required';
          }
        }
      }]);

      return MiniLuxuryPaymentComponent;
    }();

    MiniLuxuryPaymentComponent.ɵfac = function MiniLuxuryPaymentComponent_Factory(t) {
      return new (t || MiniLuxuryPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_cores_services_paystack_service__WEBPACK_IMPORTED_MODULE_3__["PaystackService"]));
    };

    MiniLuxuryPaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MiniLuxuryPaymentComponent,
      selectors: [["app-mini-luxury"]],
      decls: 61,
      vars: 10,
      consts: [[1, "main-content-wrapper"], [1, "sub-content-wrapper"], [1, "card", "payment-content"], [1, "header"], [1, "card-title", "description"], [1, "payment-card-wrapper"], ["method", "POST", "action", "reservation", "id", "reservation", "name", "reservation", 3, "formGroup"], [1, "card-body"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "checkIn"], ["type", "date", "id", "checkInDate", "name", "checkInDate", "formControlName", "checkInDate", 1, "form-control"], [4, "ngIf"], ["for", "checkOut"], ["type", "date", "id", "checkOutDate", "name", "checkOutDate", "formControlName", "checkOutDate", 1, "form-control"], [1, "form-group", "col-md-2"], ["for", "title"], ["id", "title", "name", "title", "formControlName", "title", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-5", "mb-3"], ["type", "text", "id", "firstName", "name", "firstName", "formControlName", "firstName", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], [1, "col-md-5"], ["type", "text", "id", "lastName", "name", "lastName", "formControlName", "lastName", 1, "form-control"], [1, "col-md-3", "mb-3"], ["name", "country", "formControlName", "country", "id", "country", 1, "form-control"], ["type", "text", "id", "phoneNo", "name", "phoneNo", "formControlName", "phoneNo", 1, "form-control"], [1, "col-md-6"], ["type", "email", "id", "email", "name", "email", "formControlName", "email", 1, "form-control"], [1, "col-md-8"], ["type", "text", "id", "additionalRequest", "name", "additionalRequest", "rows", "2", "formControlName", "additionalRequest", "placeholder", "please enter any additional request", 1, "form-control"], [1, "btn-wrapper"], [1, "btn", "btn-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [3, "value"], [1, "text-danger"]],
      template: function MiniLuxuryPaymentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please fill in your details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Check-in Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MiniLuxuryPaymentComponent_mat_error_14_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Check-Out Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MiniLuxuryPaymentComponent_mat_error_19_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MiniLuxuryPaymentComponent_option_25_Template, 2, 2, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MiniLuxuryPaymentComponent_mat_error_30_Template, 2, 1, "mat-error", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MiniLuxuryPaymentComponent_mat_error_35_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, MiniLuxuryPaymentComponent_option_40_Template, 2, 2, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MiniLuxuryPaymentComponent_mat_error_42_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Phone No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MiniLuxuryPaymentComponent_mat_error_47_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, MiniLuxuryPaymentComponent_mat_error_52_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "textarea", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MiniLuxuryPaymentComponent_Template_button_click_56_listener() {
            return ctx.payAtHotel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Pay at Hotel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MiniLuxuryPaymentComponent_Template_button_click_59_listener() {
            return ctx.payNow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Pay Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.miniLuxury);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.miniLuxury.get("checkInDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.miniLuxury.get("checkOutDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.titles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.miniLuxury.get("firstName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.miniLuxury.get("lastName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.miniLuxury.get("country"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.miniLuxury.get("phoneNo").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.miniLuxury.get("email"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
      styles: [".main-content-wrapper[_ngcontent-%COMP%]{\n    background-color: indigo;\n  }\n  \n  .sub-content-wrapper[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    padding-top: 4em;\n    padding-bottom: 4em;\n    height: 30%;\n  }\n  \n  .payment-content[_ngcontent-%COMP%]{\n    padding-top: 1em;\n    width: 60%;\n    display: flex;\n    font-size: 14px;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n  }\n  \n  .payment-card-wrapper[_ngcontent-%COMP%]{\n  }\n  \n  .btn[_ngcontent-%COMP%]{\n    width: 100%;\n    padding-top: .5em;\n    padding-bottom: .5em;\n  }\n  \n  .btn-wrapper[_ngcontent-%COMP%]{\n    padding-top: 1em;\n    padding-bottom: .6em;\n  }\n  \n  .description[_ngcontent-%COMP%]{\n    font-size: 25px;\n    text-align: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXJ2YXRpb25zL3BheW1lbnQtcG9ydGFsL21pbmktbHV4dXJ5L21pbmktbHV4dXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztFQUNiOztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtJQUNmLHFEQUFxRDtFQUN2RDs7RUFDQTtFQUNBOztFQUdBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCOztFQUNBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2VydmF0aW9ucy9wYXltZW50LXBvcnRhbC9taW5pLWx1eHVyeS9taW5pLWx1eHVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudC13cmFwcGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlnbztcbiAgfVxuICBcbiAgLnN1Yi1jb250ZW50LXdyYXBwZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNGVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA0ZW07XG4gICAgaGVpZ2h0OiAzMCU7XG4gIH1cbiAgLnBheW1lbnQtY29udGVudHtcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gIH1cbiAgLnBheW1lbnQtY2FyZC13cmFwcGVye1xuICB9XG4gIFxuICBcbiAgLmJ0bntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogLjVlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcbiAgfVxuICAuYnRuLXdyYXBwZXJ7XG4gICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjZlbTtcbiAgfVxuICAuZGVzY3JpcHRpb257XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiniLuxuryPaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mini-luxury',
          templateUrl: './mini-luxury.component.html',
          styleUrls: ['./mini-luxury.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_cores_services_paystack_service__WEBPACK_IMPORTED_MODULE_3__["PaystackService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/reservations/payment-portal/single/single.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/reservations/payment-portal/single/single.component.ts ***!
    \******************************************************************************/

  /*! exports provided: SinglePaymentComponent */

  /***/
  function srcAppPagesReservationsPaymentPortalSingleSingleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SinglePaymentComponent", function () {
      return SinglePaymentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_cores_services_paystack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/cores/services/paystack.service */
    "./src/app/cores/services/paystack.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

    function SinglePaymentComponent_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.checkInDateErrorMessage());
      }
    }

    function SinglePaymentComponent_mat_error_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.checkOutDateErrorMessage());
      }
    }

    function SinglePaymentComponent_option_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var title_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", title_r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](title_r9);
      }
    }

    function SinglePaymentComponent_mat_error_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.firstNameErrorMessage());
      }
    }

    function SinglePaymentComponent_mat_error_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.lastNameErrorMessage());
      }
    }

    function SinglePaymentComponent_option_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r10);
      }
    }

    function SinglePaymentComponent_mat_error_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.countryErrorMessage());
      }
    }

    function SinglePaymentComponent_mat_error_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.phoneNoErrorMessage());
      }
    }

    function SinglePaymentComponent_mat_error_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.emailErrorMessage());
      }
    }

    var SinglePaymentComponent = /*#__PURE__*/function () {
      function SinglePaymentComponent(router, _paystackService) {
        _classCallCheck(this, SinglePaymentComponent);

        this.router = router;
        this._paystackService = _paystackService;
        this.titles = ['Mr', 'Mrs', 'Miss', 'Dr', 'Engr', 'Prof', 'Pst', 'Rev'];
        this.countries = ['Nigeria', 'Ghana', 'Cameroon', 'Guinea', 'Morocco', 'Togo', 'benni Republic', 'Niger', 'Egypt', 'Madagascar'];
        this.singleRoom = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          checkInDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          checkOutDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          phoneNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)]),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          additionalRequest: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
      }

      _createClass(SinglePaymentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "payAtHotel",
        value: function payAtHotel() {
          console.log("created values on payAtHotel:", this.singleRoom.value);
          this.router.navigateByUrl('/payAtHotel');
        }
      }, {
        key: "payNow",
        value: function payNow() {
          var amountInDays;
          var date1 = new Date(this.singleRoom.get('checkInDate').value);
          var date2 = new Date(this.singleRoom.get('checkOutDate').value);
          var daysInMiliseconds = 1000 * 60 * 60 * 24;
          var differenceInTime = date2.getTime() - date1.getTime();
          var daysDifference = differenceInTime / daysInMiliseconds;
          amountInDays = daysDifference;
          console.log("the differnce in date is: ", amountInDays);
          var details = {
            firstName: this.singleRoom.get('firstName').value,
            lastName: this.singleRoom.get('lastName').value,
            title: this.singleRoom.get('title').value,
            checkInDate: new Date(this.singleRoom.get('checkInDate').value),
            checkOutDate: new Date(this.singleRoom.get('checkOutDate').value),
            phoneNo: this.singleRoom.get('phoneNo').value,
            email: this.singleRoom.get('email').value,
            country: this.singleRoom.get('country').value,
            additionalRequest: this.singleRoom.get('additionalRequest').value,
            amountPaid: 2000 * amountInDays,
            roomType: 'Single',
            daysInHotel: amountInDays
          };

          this._paystackService.reservationDetails(details);

          this.router.navigateByUrl('/payNow');
        }
      }, {
        key: "firstNameErrorMessage",
        value: function firstNameErrorMessage() {
          if (this.singleRoom.get('firstName').hasError('required') && this.singleRoom.get('firstName').touched) {
            return 'First name is required';
          }
        }
      }, {
        key: "lastNameErrorMessage",
        value: function lastNameErrorMessage() {
          if (this.singleRoom.get('lastName').hasError('required') && this.singleRoom.get('lastName').touched) {
            return 'Last name is required';
          }
        }
      }, {
        key: "checkInDateErrorMessage",
        value: function checkInDateErrorMessage() {
          if (this.singleRoom.get('checkInDate').hasError('required') && this.singleRoom.get('checkInDate').touched) {
            return 'Check-in Date is required';
          }
        }
      }, {
        key: "checkOutDateErrorMessage",
        value: function checkOutDateErrorMessage() {
          if (this.singleRoom.get('checkOutDate').hasError('required') && this.singleRoom.get('checkOutDate').touched) {
            return 'Check-out Date is required';
          }
        }
      }, {
        key: "emailErrorMessage",
        value: function emailErrorMessage() {
          if (this.singleRoom.get('email').hasError('required') && this.singleRoom.get('email').touched) {
            return 'Email is required';
          }

          if (this.singleRoom.get('email').hasError('email') && this.singleRoom.get('email').touched) {
            return 'Email is not valid';
          }
        }
      }, {
        key: "phoneNoErrorMessage",
        value: function phoneNoErrorMessage() {
          if (this.singleRoom.get('phoneNo').hasError('required') && this.singleRoom.get('phoneNo').touched) {
            return 'Phone Number is required';
          }

          if (this.singleRoom.get('phoneNo').hasError('minLength()') && this.singleRoom.get('phoneNo').touched) {
            return 'Phone number is incorrect!';
          }
        }
      }, {
        key: "countryErrorMessage",
        value: function countryErrorMessage() {
          if (this.singleRoom.get('country').hasError('required') && this.singleRoom.get('country').touched) {
            return 'country name is required';
          }
        }
      }]);

      return SinglePaymentComponent;
    }();

    SinglePaymentComponent.ɵfac = function SinglePaymentComponent_Factory(t) {
      return new (t || SinglePaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_cores_services_paystack_service__WEBPACK_IMPORTED_MODULE_3__["PaystackService"]));
    };

    SinglePaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SinglePaymentComponent,
      selectors: [["app-single"]],
      decls: 61,
      vars: 10,
      consts: [[1, "main-content-wrapper"], [1, "sub-content-wrapper"], [1, "card", "payment-content"], [1, "header"], [1, "card-title", "description"], [1, "payment-card-wrapper"], ["method", "POST", "action", "reservation", "id", "reservation", "name", "reservation", 3, "formGroup"], [1, "card-body"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "checkIn"], ["type", "date", "id", "checkInDate", "name", "checkInDate", "formControlName", "checkInDate", 1, "form-control"], [4, "ngIf"], ["for", "checkOut"], ["type", "date", "id", "checkOutDate", "name", "checkOutDate", "formControlName", "checkOutDate", 1, "form-control"], [1, "form-group", "col-md-2"], ["for", "title"], ["id", "title", "name", "title", "formControlName", "title", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-5", "mb-3"], ["type", "text", "id", "firstName", "name", "firstName", "formControlName", "firstName", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], [1, "col-md-5"], ["type", "text", "id", "lastName", "name", "lastName", "formControlName", "lastName", 1, "form-control"], [1, "col-md-3", "mb-3"], ["name", "country", "formControlName", "country", "id", "country", 1, "form-control"], ["type", "text", "id", "phoneNo", "name", "phoneNo", "formControlName", "phoneNo", 1, "form-control"], [1, "col-md-6"], ["type", "email", "id", "email", "name", "email", "formControlName", "email", 1, "form-control"], [1, "col-md-8"], ["type", "text", "id", "additionalRequest", "name", "additionalRequest", "rows", "2", "formControlName", "additionalRequest", "placeholder", "please enter any additional request", 1, "form-control"], [1, "btn-wrapper"], [1, "btn", "btn-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [3, "value"], [1, "text-danger"]],
      template: function SinglePaymentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please fill in your details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Check-in Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SinglePaymentComponent_mat_error_14_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Check-Out Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SinglePaymentComponent_mat_error_19_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SinglePaymentComponent_option_25_Template, 2, 2, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SinglePaymentComponent_mat_error_30_Template, 2, 1, "mat-error", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SinglePaymentComponent_mat_error_35_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SinglePaymentComponent_option_40_Template, 2, 2, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, SinglePaymentComponent_mat_error_42_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Phone No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, SinglePaymentComponent_mat_error_47_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, SinglePaymentComponent_mat_error_52_Template, 2, 1, "mat-error", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "textarea", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SinglePaymentComponent_Template_button_click_56_listener() {
            return ctx.payAtHotel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Pay at Hotel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SinglePaymentComponent_Template_button_click_59_listener() {
            return ctx.payNow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Pay Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.singleRoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.singleRoom.get("checkInDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.singleRoom.get("checkOutDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.titles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.singleRoom.get("firstName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.singleRoom.get("lastName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.singleRoom.get("country"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.singleRoom.get("phoneNo").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.singleRoom.get("email"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
      styles: [".main-content-wrapper[_ngcontent-%COMP%]{\n    background-color: indigo;\n  }\n  \n  .sub-content-wrapper[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    padding-top: 4em;\n    padding-bottom: 4em;\n    height: 30%;\n  }\n  \n  .payment-content[_ngcontent-%COMP%]{\n    padding-top: 1em;\n    width: 60%;\n    display: flex;\n    font-size: 14px;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n  }\n  \n  .payment-card-wrapper[_ngcontent-%COMP%]{\n  }\n  \n  .btn[_ngcontent-%COMP%]{\n    width: 100%;\n    padding-top: .5em;\n    padding-bottom: .5em;\n  }\n  \n  .btn-wrapper[_ngcontent-%COMP%]{\n    padding-top: 1em;\n    padding-bottom: .6em;\n  }\n  \n  .description[_ngcontent-%COMP%]{\n    font-size: 25px;\n    text-align: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXJ2YXRpb25zL3BheW1lbnQtcG9ydGFsL3NpbmdsZS9zaW5nbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYixlQUFlO0lBQ2YscURBQXFEO0VBQ3ZEOztFQUNBO0VBQ0E7O0VBR0E7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9CQUFvQjtFQUN0Qjs7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixvQkFBb0I7RUFDdEI7O0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVzZXJ2YXRpb25zL3BheW1lbnQtcG9ydGFsL3NpbmdsZS9zaW5nbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnQtd3JhcHBlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XG4gIH1cbiAgXG4gIC5zdWItY29udGVudC13cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDRlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNGVtO1xuICAgIGhlaWdodDogMzAlO1xuICB9XG4gIC5wYXltZW50LWNvbnRlbnR7XG4gICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICB9XG4gIC5wYXltZW50LWNhcmQtd3JhcHBlcntcbiAgfVxuICBcbiAgXG4gIC5idG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IC41ZW07XG4gICAgcGFkZGluZy1ib3R0b206IC41ZW07XG4gIH1cbiAgLmJ0bi13cmFwcGVye1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgcGFkZGluZy1ib3R0b206IC42ZW07XG4gIH1cbiAgLmRlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SinglePaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-single',
          templateUrl: './single.component.html',
          styleUrls: ['./single.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_cores_services_paystack_service__WEBPACK_IMPORTED_MODULE_3__["PaystackService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/reservations/single-rooms/single-rooms.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/reservations/single-rooms/single-rooms.component.ts ***!
    \***************************************************************************/

  /*! exports provided: SingleRoomsComponent */

  /***/
  function srcAppPagesReservationsSingleRoomsSingleRoomsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SingleRoomsComponent", function () {
      return SingleRoomsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/singlePayment"];
    };

    var SingleRoomsComponent = /*#__PURE__*/function () {
      function SingleRoomsComponent() {
        _classCallCheck(this, SingleRoomsComponent);

        this.amount = 2000;
      }

      _createClass(SingleRoomsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SingleRoomsComponent;
    }();

    SingleRoomsComponent.ɵfac = function SingleRoomsComponent_Factory(t) {
      return new (t || SingleRoomsComponent)();
    };

    SingleRoomsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SingleRoomsComponent,
      selectors: [["app-single-rooms"]],
      decls: 61,
      vars: 12,
      consts: [[1, "main-content-wrapper"], [1, "single-rooms"], [1, "dicription-wrapper"], [1, "discription-header"], [1, "main-card-wrapper"], [1, "card", "card-wrapper"], [1, "row", "row-cols-1", "row-cols-md-3"], [1, "col", "mb-4"], [1, "card", "h-100"], ["src", "/assets/images/bed1.jpg", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-footer"], [1, "text", 2, "font-weight", "bold"], [1, "btn", "btn-primary", "book-room", 3, "routerLink"], ["src", "/assets/images/bed2.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/bed3.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/bed4.jpg", "alt", "...", 1, "card-img-top"]],
      template: function SingleRoomsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Here are our conference rooms and halls to pick from");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Single Room 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "This is from our exquisite single rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Single Room 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "This is from our exquisite single rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Single Room 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "This is Room 3 from our exquisite conference rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Single Room 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "This is from our exquisite conference rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.amount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".single-rooms[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n      font-size: 14px;\n      padding-top: 5em;\n      background-color: inherit;\n    \n    }\n    .card-wrapper[_ngcontent-%COMP%]{\n      width: 90%;\n      height: 50%;\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      justify-content: center;\n      align-content: center;\n      background-color: inherit;\n    \n    }\n    .main-card-wrapper[_ngcontent-%COMP%]{\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      justify-content: center;\n    \n    }\n    .dicription-wrapper[_ngcontent-%COMP%]{\n      align-content: center;\n      text-align: center;\n      font-size: 18px;\n    }\n    .book-room[_ngcontent-%COMP%]{\n      float: right;\n      font-size: small;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXJ2YXRpb25zL3NpbmdsZS1yb29tcy9zaW5nbGUtcm9vbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO01BQ1YsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQix5QkFBeUI7O0lBRTNCO0lBQ0E7TUFDRSxVQUFVO01BQ1YsV0FBVztNQUNYLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIseUJBQXlCOztJQUUzQjtJQUNBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsdUJBQXVCOztJQUV6QjtJQUNBO01BQ0UscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxZQUFZO01BQ1osZ0JBQWdCO0lBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVzZXJ2YXRpb25zL3NpbmdsZS1yb29tcy9zaW5nbGUtcm9vbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaW5nbGUtcm9vbXN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgcGFkZGluZy10b3A6IDVlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgXG4gICAgfVxuICAgIC5jYXJkLXdyYXBwZXJ7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBcbiAgICB9XG4gICAgLm1haW4tY2FyZC13cmFwcGVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgICB9XG4gICAgLmRpY3JpcHRpb24td3JhcHBlcntcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLmJvb2stcm9vbXtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgfVxuICAgICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleRoomsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-single-rooms',
          templateUrl: './single-rooms.component.html',
          styleUrls: ['./single-rooms.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/rooms/rooms.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/rooms/rooms.component.ts ***!
    \************************************************/

  /*! exports provided: RoomsComponent */

  /***/
  function srcAppPagesRoomsRoomsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomsComponent", function () {
      return RoomsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/luxpay"];
    };

    var _c1 = function _c1() {
      return ["/miniLuxuryPayment"];
    };

    var _c2 = function _c2() {
      return ["/singlePayment"];
    };

    var _c3 = function _c3() {
      return ["/conferencePayment"];
    };

    var RoomsComponent = /*#__PURE__*/function () {
      function RoomsComponent() {
        _classCallCheck(this, RoomsComponent);

        this.luxuryRoomAmount = 5000;
        this.miniLuxuryRoomAmount = 3000;
        this.singleRoomAmount = 2000;
        this.conferenceRoomAmount = 15000;
      }

      _createClass(RoomsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RoomsComponent;
    }();

    RoomsComponent.ɵfac = function RoomsComponent_Factory(t) {
      return new (t || RoomsComponent)();
    };

    RoomsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RoomsComponent,
      selectors: [["app-rooms"]],
      decls: 263,
      vars: 54,
      consts: [[1, "main-content-wrapper"], [1, "luxury-rooms"], [1, "text-center", "legend-wrapper"], [1, "main-card-wrapper"], [1, "card", "card-wrapper"], [1, "row", "row-cols-1", "row-cols-md-3"], [1, "col", "mb-4"], [1, "card", "h-100"], ["src", "/assets/images/luxury1.jpg", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-footer"], [1, "text", 2, "font-weight", "bold"], [1, "btn", "btn-primary", "book-room", 3, "routerLink"], ["src", "/assets/images/bedroom.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/hotel-room.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/luxury2.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/luxury3.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/luxury4.jpg", "alt", "...", 1, "card-img-top"], [1, "horizontal-line"], [1, "legend-wrapper", "text-center"], ["src", "/assets/images/mini-luxury.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/bed.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/bed2.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/bed5.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/bed1.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/bed3.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/bed4.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/conference-room-768441_1920.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/conference1.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/conference2.jpg", "alt", "...", 1, "card-img-top"], ["src", "/assets/images/conference-hall.jpg", "alt", "...", 1, "card-img-top"]],
      template: function RoomsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "legend", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Luxury Rooms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Luxury Room 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "This is Room 1 from our exquisite luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Luxury Room 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "This is Room 2 from our exquisite luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Luxury Room 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "This is Room 3 from our exquisite luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Luxury Room 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "This is Room 4 from our exquisite luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Luxury Room 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "This is Room 5 from our exquisite luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Luxury Room 6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "This is Room is from our exquisite luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "hr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "legend", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Mini-Luxury Rooms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Mini Luxury Room 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "This is from our exquisite mini-luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Mini Luxury Room 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "This isfrom our exquisite Mini-luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Mini Luxury Room 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "This is from our exquisite Mini-luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Mini Luxury Room 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "This is from our exquisite Mini-luxury rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "hr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "legend", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Single Rooms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Single Room 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "This is from our exquisite single rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Single Room 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "This is from our exquisite single rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Single Room 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "This is Room 3 from our exquisite conference rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Single Room 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "This is from our exquisite conference rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "hr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "legend", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Conference Rooms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "conference Room 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "This is from our exquisite conference rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Conference Room 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "This is from our exquisite conference rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Conference Room 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "This is Room 3 from our exquisite conference rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Conference Room 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "This is from our exquisite conference rooms. This room booking gives u access to an unlimited Wi-Fi for your number of days in the hotel.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Book this room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.luxuryRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.luxuryRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.luxuryRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.luxuryRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.luxuryRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.luxuryRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.miniLuxuryRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.miniLuxuryRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.miniLuxuryRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.miniLuxuryRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.singleRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.singleRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.singleRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.singleRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](49, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.conferenceRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](50, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.conferenceRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](51, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.conferenceRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](52, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: N", ctx.conferenceRoomAmount, "/Night");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](53, _c3));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".luxury-rooms[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n      font-size: 14px;\n      padding-top: 5em;\n      background-color: inherit;\n    \n    }\n    .card-wrapper[_ngcontent-%COMP%]{\n      width: 90%;\n      height: 50%;\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      justify-content: center;\n      align-content: center;\n      background-color: inherit;\n    \n    }\n    .main-card-wrapper[_ngcontent-%COMP%]{\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      justify-content: center;\n    \n    }\n    .dicription-wrapper[_ngcontent-%COMP%]{\n      align-content: center;\n      text-align: center;\n      font-size: 18px;\n    }\n    .book-room[_ngcontent-%COMP%]{\n      float: right;\n      font-size: small;\n    }\n    .horizontal-line[_ngcontent-%COMP%]{\n        width: 100%;\n        height: 3px;\n        margin-left: auto;\n        margin-right: auto;\n        background-color:black;\n        border: 0 none;\n        padding-top: 1px;\n        \n       \n    }\n    .legend-wrapper[_ngcontent-%COMP%]{\n    \n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcm9vbXMvcm9vbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO01BQ1YsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQix5QkFBeUI7O0lBRTNCO0lBQ0E7TUFDRSxVQUFVO01BQ1YsV0FBVztNQUNYLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIseUJBQXlCOztJQUUzQjtJQUNBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsdUJBQXVCOztJQUV6QjtJQUNBO01BQ0UscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxZQUFZO01BQ1osZ0JBQWdCO0lBQ2xCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLGNBQWM7UUFDZCxnQkFBZ0I7OztJQUdwQjtJQUNBOztJQUVBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcm9vbXMvcm9vbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sdXh1cnktcm9vbXN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgcGFkZGluZy10b3A6IDVlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgXG4gICAgfVxuICAgIC5jYXJkLXdyYXBwZXJ7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBcbiAgICB9XG4gICAgLm1haW4tY2FyZC13cmFwcGVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgICB9XG4gICAgLmRpY3JpcHRpb24td3JhcHBlcntcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLmJvb2stcm9vbXtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgfVxuICAgIC5ob3Jpem9udGFsLWxpbmV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgICAgICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcHg7XG4gICAgICAgIFxuICAgICAgIFxuICAgIH1cbiAgICAubGVnZW5kLXdyYXBwZXJ7XG4gICAgXG4gICAgfVxuICAgICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rooms',
          templateUrl: './rooms.component.html',
          styleUrls: ['./rooms.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/valentine/sandbox/front-end/Hotel-Management/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map