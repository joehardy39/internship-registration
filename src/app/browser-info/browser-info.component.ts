import { Component } from '@angular/core';

@Component({
  selector: 'app-browser-info',
  templateUrl: './browser-info.component.html',
  styleUrl: './browser-info.component.scss'
})
export class BrowserInfoComponent {
  browserName : any;
  device : any;

  ngOnInit() {
    this.browserName = console.log(this.detectBrowserName());

    if (this.isMobileDevice()) {
      console.log('mobile device');
    } else {
      console.log('PC');
    }
    
}
 
detectBrowserName() { 
  const agent = window.navigator.userAgent.toLowerCase()
  switch (true) {
    case agent.indexOf('edge') > -1:
      return 'edge';
    case agent.indexOf('opr') > -1 && !!(<any>window).opr:
      return 'opera';
    case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
      return 'chrome';
    case agent.indexOf('trident') > -1:
      return 'ie';
    case agent.indexOf('firefox') > -1:
      return 'firefox';
    case agent.indexOf('safari') > -1:
      return 'safari';
    default:
      return 'other';
  }

}

 isMobileDevice(): boolean {
  const userAgent = navigator.userAgent;
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) ||
    
    ('ontouchstart' in window || navigator.maxTouchPoints > 0) ||
    
    window.innerWidth <= 768
  );

  
}



}
