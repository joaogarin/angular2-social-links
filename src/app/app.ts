/*
 * Angular 2 decorators and services
 */
import {Component, View} from 'angular2/angular2';

/*
 * Angular Directives
 */
import {CORE_DIRECTIVES} from 'angular2/angular2';
import {SocialButtons} from "./components/SocialButtons/SocialButtons";

require('font-awesome/css/font-awesome.min.css');
var css = require("!css!sass!./css/_app.scss");
/*
 * App Component
 * Top Level Component
 */
@Component({
    // The selector is what angular internally uses
    selector: 'app', // <app></app>
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [CORE_DIRECTIVES, SocialButtons],
    styles: [`${css}`],
    // The template for our app
    template: `
    <div class="main-app">
       <social-buttons [facebook]="facebook" [twitter]="twitter" [gplus]="gplus"></social-buttons>
    </div>
    `
})
export class App {
    facebook: any;
    gplus: any;
    twitter: any;

    onInit(){
        this.facebook = {
            getLinksUrl : 'http://facebook.com',
            icon: 'fa-facebook',
            color: '#395A99'
        };

        this.twitter = {
            getLinksUrl : 'http://twitter.com',
            icon: 'fa-twitter',
            color: '#55ACEF'
        };

        this.gplus = {
            getLinksUrl : 'http://google.com',
            icon: 'fa-google-plus',
            color: '#F44336'
        };
    }
}