import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'portfolio';
  // toggleMobile = false;
  // toggleClass = "bi mobile-nav-toggle d-xl-none bi-list"
  // bodyClass = ""
  step = "step1"

  constructor() {
    
  }

  @HostListener('scroll', ['$event']) private onScroll($event: any): void {
    console.log($event.srcElement, $event.srcElement.scrollTop);
  }

  // clicked(){
  //   if (this.toggleMobile == false){
  //     this.toggleMobile = true;
  //     this.bodyClass = "mobile-nav-active"
  //     this.toggleClass = "bi mobile-nav-toggle d-xl-none bi-x"
  //   }else{
  //     this.toggleMobile = false;
  //     this.bodyClass = ""
  //     this.toggleClass = "bi mobile-nav-toggle d-xl-none bi-list"
  //   }
  // }
}
