import {
  Component,
  ElementRef,
  inject,
  NgZone,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

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

  private readonly document = inject<
    Document & { startViewTransition: (callback: () => void) => void }
  >(DOCUMENT);

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private ngZone: NgZone
  ) {}

  public getImagePath(fileName: string, isThumbnail: boolean): string {
    return `${this.cdnURL}/${fileName}${isThumbnail ? '_th' : ''}.jpg`;
  }

  public updateView(event: MouseEvent, data: any): void {
    event.preventDefault();
    this.displayNewImage(data);
    return;
    // const document = this.document;
    // const startViewTransition: any = (document as any)['startViewTransition'];
    // // Fallback for browsers that don't support View Transitions:
    // if (!startViewTransition) {
    //   this.displayNewImage(data);
    //   return;
    // }
    // this.ngZone.runOutsideAngular(() => {
    //   startViewTransition(() => {
    //     // Get a reference to the img element.
    //     // const imageElement =
    //     //   this.el.nativeElement.querySelector('.gallery-view img');
    //     //
    //     // // Update the src attribute.
    //     // const newImagePath = this.getImagePath(data.file, false);
    //     // this.renderer.setAttribute(imageElement, 'src', newImagePath);
    //     const imageElement = document.querySelector('.gallery-view img');
    //
    //     // Update the src attribute.
    //     const newImagePath = this.getImagePath(data.file, false);
    //     (imageElement as any).src = newImagePath;
    //   });
    //   // if (!this.document.startViewTransition) {
    //   //   this.ngZone.run(() => {
    //   //     void this.router.navigate(['detail', '42']);
    //   //   });
    //   // }
    // });
    //
    // // With View Transitions:
    // startViewTransition(() => {
    //   // Get a reference to the img element.
    //   // const imageElement =
    //   //   this.el.nativeElement.querySelector('.gallery-view img');
    //   //
    //   // // Update the src attribute.
    //   // const newImagePath = this.getImagePath(data.file, false);
    //   // this.renderer.setAttribute(imageElement, 'src', newImagePath);
    //   const imageElement = document.querySelector('.gallery-view img');
    //
    //   // Update the src attribute.
    //   const newImagePath = this.getImagePath(data.file, false);
    //   (imageElement as any).src = newImagePath;
    // });
  }

  private displayNewImage(data: any) {
    // this.selectedImage = data;
    const imageElement = document.querySelector('.gallery-view img');

    // Update the src attribute.
    const newImagePath = this.getImagePath(data.file, false);
    (imageElement as any).src = newImagePath;
  }
}
