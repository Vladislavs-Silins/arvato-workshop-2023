import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'workshop2023-view-transitions',
  templateUrl: './view-transitions.component.html',
  styleUrls: ['./view-transitions.component.scss'],
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
})
export class ViewTransitionsComponent {
  private cdnURL =
    'https://cdn.glitch.global/de7f29c8-57eb-4eb1-81b5-4e0d8565ade5';
  public selectedImage = { name: 'Jungle coast', file: 'jungle-coast' };

  public imageData = [
    { name: 'Jungle coast', file: 'jungle-coast' },
    { name: 'Bird in the tree', file: 'tree-bird' },
    { name: 'A view from the sky', file: 'view-from-the-sky' },
    { name: 'The view across the water', file: 'watery-view' },
  ];

  public getImagePath(fileName: string, isThumbnail: boolean): string {
    console.log(`${this.cdnURL}/${fileName}${isThumbnail ? '_th' : ''}.jpg`);
    return `${this.cdnURL}/${fileName}${isThumbnail ? '_th' : ''}.jpg`;
  }

  public updateView(event: MouseEvent, data: any): void {
    event.preventDefault();
    this.selectedImage = data;
  }
}
