import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'workshop2023-view-transition-demo',
  templateUrl: './view-transition-demo.component.html',
  styleUrls: ['./view-transition-demo.component.scss'],
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
})
export class ViewTransitionDemoComponent {
  isDemo = true;

  setDemo(value: boolean) {
    this.isDemo = value;
  }
}
