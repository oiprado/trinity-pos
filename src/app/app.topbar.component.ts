import {Component} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="topbar clearfix">
            <div class="logo">
                <a href="#">
                    <img src="assets/layout/images/logo.png">
                </a>
            </div>

			<a href="#">
                <img src="assets/layout/images/appname.svg" class="app-name"/>
            </a>

            <a id="topbar-menu-button" href="#" (click)="app.onTopbarMenuButtonClick($event)">
                <i class="fa fa-bars"></i>
            </a>

            <ul class="topbar-menu fadeInDown" [ngClass]="{'topbar-menu-visible': app.topbarMenuActive}">
                <li #profile class="profile-item" [ngClass]="{'active-topmenuitem':app.activeTopbarItem === profile}">
                    <a href="#" (click)="app.onTopbarItemClick($event,profile)">
                        <div class="profile-image">
                            <img src="assets/layout/images/profile-image.png">
                        </div>
                        <div class="profile-info">
                            <span class="topbar-item-name profile-name">Claire White</span>
                            <span class="topbar-item-name profile-role">System Admin</span>
                        </div>
                    </a>

                    <ul class="fadeInDown">
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="fa fa-fw fa-user"></i>
                                <span>Profile</span>
                                <span class="topbar-submenuitem-badge">5</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="fa fa-fw fa-user-secret"></i>
                                <span>Privacy</span>
                                <span class="topbar-submenuitem-badge">2</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="fa fa-fw fa-cog"></i>
                                <span>Settings</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="fa fa-fw fa-sign-out"></i>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li #settings [ngClass]="{'active-topmenuitem':app.activeTopbarItem === settings}">
                    <a href="#" (click)="app.onTopbarItemClick($event,settings)">
                        <i class="topbar-icon fa fa-fw fa-cog"></i>
                        <span class="topbar-item-name">Settings</span>
                    </a>
                    <ul class="fadeInDown">
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="fa fa-fw fa-paint-brush"></i>
                                <span>Change Theme</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="fa fa-fw fa-star-o"></i>
                                <span>Favorites</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="fa fa-fw fa-lock"></i>
                                <span>Lock Screen</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="fa fa-fw fa-picture-o"></i>
                                <span>Wallpaper</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li #messages [ngClass]="{'active-topmenuitem':app.activeTopbarItem === messages}">
                    <a href="#" (click)="app.onTopbarItemClick($event,messages)">
                        <i class="topbar-icon material-icons animated swing fa fa-fw fa-envelope-o"></i>
                        <span class="topbar-badge">5</span>
                        <span class="topbar-item-name">Messages</span>
                    </a>
                    <ul class="fadeInDown">
                        <li role="menuitem">
                            <a href="#" class="topbar-message" (click)="app.onTopbarSubItemClick($event)">
                                <img src="assets/layout/images/avatar1.png" width="35"/>
                                <span>Give me a call</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" class="topbar-message" (click)="app.onTopbarSubItemClick($event)">
                                <img src="assets/layout/images/avatar2.png" width="35"/>
                                <span>Sales reports attached</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" class="topbar-message" (click)="app.onTopbarSubItemClick($event)">
                                <img src="assets/layout/images/avatar3.png" width="35"/>
                                <span>About your invoice</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" class="topbar-message" (click)="app.onTopbarSubItemClick($event)">
                                <img src="assets/layout/images/avatar2.png" width="35"/>
                                <span>Meeting today at 10pm</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" class="topbar-message" (click)="app.onTopbarSubItemClick($event)">
                                <img src="assets/layout/images/avatar4.png" width="35"/>
                                <span>Out of office</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li #notifications [ngClass]="{'active-topmenuitem':app.activeTopbarItem === notifications}">
                    <a href="#" (click)="app.onTopbarItemClick($event,notifications)">
                        <i class="topbar-icon fa fa-fw fa-bell-o"></i>
                        <span class="topbar-badge">4</span>
                        <span class="topbar-item-name">Notifications</span>
                    </a>
                    <ul class="fadeInDown">
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="fa fa-fw fa-tasks"></i>
                                <span>Pending tasks</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="fa fa-fw fa-calendar-check-o"></i>
                                <span>Meeting today at 3pm</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="fa fa-fw fa-download"></i>
                                <span>Download documents</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                <i class="fa fa-fw fa-plane"></i>
                                <span>Book flight</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li #search class="search-item" [ngClass]="{'active-topmenuitem':app.activeTopbarItem === search}"
                    (click)="app.onTopbarItemClick($event,search)">
                    <span class="md-inputfield">
                        <input type="text" pInputText>
                        <i class="fa fa-search"></i>
                    </span>
                </li>
            </ul>
        </div>
    `
})
export class AppTopbarComponent {

    constructor(public app: AppComponent) {}

}
