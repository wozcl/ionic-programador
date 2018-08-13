webpackJsonp([1],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/mdl-programacion/mdl-programacion.module": [
		270,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.goToPrincipal = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/fdoulloa/Documents/Programador/src/pages/login/login.html"*/'<!--\n  Generated template for the ApiuxPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!-- <ion-navbar>\n   <ion-title>Cementos BIO BIO</ion-title>\n   <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n     </button>\n   </ion-navbar> -->\n </ion-header>\n \n <ion-content padding class="base" no-bounce>\n \n   <div class="row">\n     <div class="col-md-12">\n       <div class="col-md-10 offset-md-1 login">\n         <div class="row">\n           <div class="col-md-12" style="text-align: center;">\n             <img src="../../assets/img/logo.png">\n           </div>\n           <div class=" col-md-12 login-input">\n             <div class="offset-md-1 col-md-10">\n               <input type="text" class="form-control input" placeholder="Usuario">\n             </div>\n             <br>\n             <div class=" offset-md-1 col-md-10">\n               <input type="password" class="form-control input" placeholder="Contraseña">\n             </div>\n             <br>\n             <div class=" offset-md-1 col-md-10" style="text-align: center;">\n               <a class="form-control botonLogin" on-click="goToPrincipal()">Iniciar sesión</a>\n             </div>\n             <br>\n             <div class=" offset-md-1 col-md-10" style="text-align: center;">\n               <a class="olvido">¿Olvidaste tu contraseña? </a><p style="display: inline-block;">&nbsp;&nbsp;|&nbsp;&nbsp;</p><a class="olvido"> ¿Olvidaste tu usuario?</a>\n             </div>\n           </div>\n         </div>\n       </div>\n     </div>\n   </div>\n </ion-content>'/*ion-inline-end:"/Users/fdoulloa/Documents/Programador/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_programacion_mdl_programacion__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PrincipalPage.prototype.goToPrincipal = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mdl_programacion_mdl_programacion__["a" /* MdlProgramacionPage */]);
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"/Users/fdoulloa/Documents/Programador/src/pages/principal/principal.html"*/'<!--\n  Generated template for the FernandoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Elección de Usuario</ion-title>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="difuminado-fondo">\n        <div class="row eleccion">\n          <div class="col-md-12">\n            <button ion-button icon-bus color="secondary" on-click="goToPrincipal()" text-wrap padding class="button customBtn">\n                <ion-icon name="bus" padding ></ion-icon>\n                Programación de Hormigón premezclado\n            </button>\n          </div>\n          <br>\n            <div class="col-md-12">\n              <button ion-button icon-construct color="secondary" class="button customBtn" >\n                  <ion-icon name="construct" padding ></ion-icon>\n                    Gestión de Obras\n                </button>\n            </div>\n            <br>\n            <div class="col-md-12">\n                <button ion-button icon-beaker color="secondary" class="button customBtn">\n                    <ion-icon name="beaker" padding ></ion-icon>\n                      Programación de Cemento\n                  </button>\n            </div>\n        </div>    \n    \n    \n    \n    <script src="js/jquery3.3.1.js" type="text/javascript"></script>\n    <script src="js/bootstrap.bundle.min.js" type="text/javascript"></script>\n    <script src="js/bootstrap.min.js" type="text/javascript"></script>\n\n</ion-content>\n'/*ion-inline-end:"/Users/fdoulloa/Documents/Programador/src/pages/principal/principal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_principal_principal__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mdl_programacion_mdl_programacion__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_mdl_programacion_mdl_programacion__["a" /* MdlProgramacionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/mdl-programacion/mdl-programacion.module#MdlProgramacionPageModule', name: 'MdlProgramacionPage', segment: 'mdl-programacion', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_mdl_programacion_mdl_programacion__["a" /* MdlProgramacionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/fdoulloa/Documents/Programador/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/fdoulloa/Documents/Programador/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlProgramacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MdlProgramacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MdlProgramacionPage = /** @class */ (function () {
    function MdlProgramacionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MdlProgramacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MdlProgramacionPage');
    };
    MdlProgramacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mdl-programacion',template:/*ion-inline-start:"/Users/fdoulloa/Documents/Programador/src/pages/mdl-programacion/mdl-programacion.html"*/'<!--\n  Generated template for the MdlProgramacionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle="right" right>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title>\n        principal\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-menu [content]="content1" side="right">\n      Menu 1\n      <ion-item>\n        <button ion-button>\n          Close\n        </button>\n      </ion-item>\n    </ion-menu>\n\n  <ion-content style="background:url(assets/img/4uYaB4qTdqa2RTa48E5g_cemento_difuminado.jpg) no-repeat center;background-size:cover;" id="page3">\n        <div padding class="row proximo">\n        <ion-grid padding>\n          <ion-row padding >\n              <h5><div text-center>Próximo Pedido</div></h5>\n          </ion-row>\n          <ion-row>\n            <ion-col class="col-xs-6 col-md-6 info">\n                <label>HN25(10)30-08</label>\n                <p>Sin Bomba</p>\n                <p>Sin Muestra de Laboratorio</p>\n            </ion-col>\n            <ion-col>\n                <img src="../../assets/img/grafico.png">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="col-xs-4 col-md-4 info inf">\n              <p>ETA</p>\n            </ion-col>\n            <ion-col class="col-xs-4 col-md-4 info inf">\n              <p>Cantidad</p>\n            </ion-col>\n            <ion-col class="col-xs-4 col-md-4 info inf">\n              <p>Camiones</p>\n            </ion-col>            \n          </ion-row>\n          <ion-row class="col-xs-4 col-md-4 info inf">\n              <ion-col>\n                <label >13:45</label>\n              </ion-col>\n              <ion-col>\n                <label>21 m3</label>\n              </ion-col>\n              <ion-col>\n                <label>3</label>\n              </ion-col>            \n            </ion-row>\n        </ion-grid>  \n\n        \n            \n        \n            <div class="offset-md-1 col-md-10 info" style="margin-bottom: 20px;">\n              <p>*tiempo estimado de llegada</p>\n            </div>\n            \n          </div>\n        \n          <div class="row estado">\n            <div class=" offset-md-1 col-md-10">\n              <i class="fas fa-map-marker-alt"></i><label> Estado de camiones</label>\n            </div>\n          </div>\n        \n          <div class="row resultado">\n            <div class="offset-md-1 col-md-10">\n              <div>\n                      <ul>\n                        <li class="li1">Camión 1</li>\n                        <li class="li2">Descargando en obra</li>\n                        <li class="li3">Operador: Luis M. Salas Pérez</li>\n                      </ul>\n                    </div> \n                    <div>\n                      <ul>\n                        <li class="li1">Camión 2: En ruta</li>\n                        <li class="li2">Hora de llegada estimada: 14:45</li>\n                        <li class="li3">Operador: José Manuel Peña Soza</li>\n                      </ul>\n                    </div> \n                    <div>\n                      <ul>\n                        <li class="li1">Camión 3: En sucursal</li>\n                        <li class="li2">Hora de llegada estimada: 15:45</li>\n                        <li class="li3">Operador: Luis M. Salas Soza</li>\n                      </ul>\n                    </div> \n            </div>\n          </div>\n  </ion-content>'/*ion-inline-end:"/Users/fdoulloa/Documents/Programador/src/pages/mdl-programacion/mdl-programacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MdlProgramacionPage);
    return MdlProgramacionPage;
}());

//# sourceMappingURL=mdl-programacion.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map