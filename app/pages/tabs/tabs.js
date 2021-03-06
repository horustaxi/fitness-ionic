"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var new_1 = require('../new/new');
var categories_1 = require('../categories/categories');
var mycourses_1 = require('../mycourses/mycourses');
var page3_1 = require("../page3/page3");
var TabsPage = (function () {
    function TabsPage(_nav) {
        this._nav = _nav;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.new = new_1.NewPage;
        this.categories = categories_1.CategoriesPage;
        this.myCourses = mycourses_1.MyCoursesPage;
        this.profile = page3_1.Page3;
    }
    TabsPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/tabs/tabs.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], TabsPage);
    return TabsPage;
}());
exports.TabsPage = TabsPage;
