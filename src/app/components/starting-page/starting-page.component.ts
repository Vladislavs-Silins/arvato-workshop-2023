import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'workshop2023-starting-page',
  templateUrl: './starting-page.component.html',
  styleUrls: ['./starting-page.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class StartingPageComponent {
  title = 'Workshop 2023';
  description = 'Things You Should Know About Frontend Development in 2022';
}
