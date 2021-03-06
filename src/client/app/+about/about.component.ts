// angular
import { Component } from '@angular/core';

@Component({
  template: `ng-seed (universal) about page<br/>
  This page provides a dummy overview of nothing
  <div class="ui top attached demo menu">
  <a class="item" (click)="sidebar.toggle()">
    <i class="sidebar icon"></i> Menu
  </a>
</div>

<sui-sidebar-container class="ui bottom attached segment">
  <sui-sidebar class="inverted vertical" #sidebar>
    <a class="item">1</a>
    <a class="item">2</a>
  </sui-sidebar>
  <sui-sidebar-sibling [isDimmedWhenVisible]="true">
    <div class="ui basic segment">
      <h3 class="ui header">Content</h3>
      <p>Example content beside the sidebar</p>
      <button class="ui button" (click)="sidebar.open()">Open Sidebar</button>
    </div>
  </sui-sidebar-sibling>
</sui-sidebar-container>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
}
