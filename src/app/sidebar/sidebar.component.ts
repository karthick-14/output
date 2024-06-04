import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document,private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'toggle-sidebar');
  }

  toggleSidebar() {
    this.renderer.removeClass(this.document.body, 'toggle-sidebar');
  }

  toggleLeftSidebar() {
    this.renderer.addClass(this.document.body, 'toggle-sidebar');
  }

}
