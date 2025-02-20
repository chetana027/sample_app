import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isVisible = false;

  @ViewChild('slidingDiv') slidingDiv!: ElementRef;

  toggleDiv(event: MouseEvent) {
    this.isVisible = true;
    event.stopPropagation(); // Prevents the document click from firing immediately
  }

  @HostListener('document:click', ['$event'])
  closeDiv(event: MouseEvent) {
    if (
      this.isVisible &&
      this.slidingDiv &&
      !this.slidingDiv.nativeElement.contains(event.target)
    ) {
      this.isVisible = false; // Hide the div when clicking outside
    }
  }
}
