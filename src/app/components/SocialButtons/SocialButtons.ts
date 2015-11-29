/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/angular2';

/*
 * Angular Directives
 */
import {CORE_DIRECTIVES} from 'angular2/angular2';

var css = require("!css!sass!./css/_buttons.scss");

/*
 * SocialButtons Component
 * Top Level Component
 */
@Component({
    // The selector is what angular internally uses
    selector: 'social-buttons', // <social-buttons></social-buttons>
    directives: [CORE_DIRECTIVES],
    inputs: ['facebook', 'twitter', 'gplus'],
    styles: [`${css}`],
    // The template for our app
    template: `
    <div class="social-button">
        <a class="social-button__circle {{open_state}}" [style.background-color]="share_color">
            <i class="fa fa-fw {{share_item_icon}}"></i>
        </a>
        <span class="social-button--text {{open_state}}" [style.background-color]="share_color">
            {{share_text}}
        </span>
        <ul class="share-list">
            <li class="share-list__item">
               <a (click)="shareLink(facebook)" [style.background-color]="facebook.color" class="facebook-link">
                <i class="fa {{facebook.icon}}">

                </i>
               </a>
            </li>
            <li class="share-list__item">
               <a (click)="shareLink(twitter)" [style.background-color]="twitter.color" class="twitter-link">
                <i class="fa {{twitter.icon}}">

                </i>
               </a>
            </li>
            <li class="share-list__item">
               <a (click)="shareLink(gplus)" [style.background-color]="gplus.color" class="google-link">
                <i class="fa {{gplus.icon}}">

                </i>
               </a>
            </li>
        </ul>
    </div>
    `
})
export class SocialButtons {
    facebook:any;
    twitter:any;
    gplus:any;

    share_item_icon: string;
    open_state: string;
    share_text: string;
    share_color: string;
    share_text_color: string;

    onInit(){
        this.share_item_icon = "fa-retweet";
        this.open_state = "";
        this.share_text = "Share";
        this.share_color = "#617D8A";
    }

    shareLink = function(socialNetwork){
        this.share_item_icon = socialNetwork.icon;
        this.open_state = "roll";
        this.share_text = "1.7K";
        this.share_color = socialNetwork.color;
        this.share_text_color = socialNetwork.color;
    };
}