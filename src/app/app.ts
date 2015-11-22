/*
 * Angular 2 decorators and services
 */
import {Component, View} from 'angular2/angular2';

/*
 * Angular Directives
 */
import {CORE_DIRECTIVES} from 'angular2/angular2';

/*
 * App Component
 * Top Level Component
 */
@Component({
    // The selector is what angular internally uses
    selector: 'app', // <app></app>
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [CORE_DIRECTIVES],
    // The template for our app
    template: `
    <div>
       My app
    </div>
    `
})
export class App {
    onInit() {
        // Our API
    }
}