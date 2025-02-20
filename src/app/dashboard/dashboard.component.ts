import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  @ViewChild('scrollContainer', { static: false }) scrollContainerRef!: ElementRef;
  @ViewChild('scrollContainert', { static: false }) scrollContainerReft!: ElementRef;
  items = [{ cardHead: "Abcd", CardTitle: "Customer Service", cardDes: "24/7 Customer, helping customer with queries,transactio..." },
  { cardHead: "Abcd", CardTitle: "Customer Service", cardDes: "24/7 Customer, helping customer with queries,transactio..." },
  { cardHead: "Abcd", CardTitle: "Customer Service", cardDes: "24/7 Customer, helping customer with queries,transactio..." },
  { cardHead: "Abcd", CardTitle: "Customer Service", cardDes: "24/7 Customer, helping customer with queries,transactio..." },
  { cardHead: "Abcd", CardTitle: "Customer Service", cardDes: "24/7 Customer, helping customer with queries,transactio..." },
  { cardHead: "Abcd", CardTitle: "Customer Service", cardDes: "24/7 Customer, helping customer with queries,transactio..." }];

  ngAfterViewInit() {
    // Ensuring the ViewChild is accessed after view initialization
    console.log(this.scrollContainerRef);
  }

  scrollLeft() {
    const scrollContainer = this.scrollContainerRef.nativeElement;
    if (scrollContainer.scrollLeft > 0) {
      scrollContainer.scrollLeft -= 150; // Scroll left by 150px
    }
  }

  scrollRight() {
    const scrollContainer = this.scrollContainerRef.nativeElement;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    if (scrollContainer.scrollLeft < maxScroll) {
      scrollContainer.scrollLeft += 150; // Scroll right by 150px
    }
  }

  // Our Model
  scrollLeftt() {
    const scrollContainer = this.scrollContainerReft.nativeElement;
    if (scrollContainer.scrollLeft > 0) {
      scrollContainer.scrollLeft -= 150; // Scroll left by 150px
    }
  }

  scrollRightt() {
    const scrollContainer = this.scrollContainerReft.nativeElement;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    if (scrollContainer.scrollLeft < maxScroll) {
      scrollContainer.scrollLeft += 150; // Scroll right by 150px
    }
  }
}
