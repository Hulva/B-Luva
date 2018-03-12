import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'bluva-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  leftPartStyl: {};
  rightPartStyl: {};
  doorWrapperStyl: {};


  constructor(
    private router: Router,
    public appService: AppService
  ) {
    this.appService.isHome = true;
    this.leftPartStyl = {
      'margin': '0',
      'padding': '0',
      'position': 'absolute',
      'left': '11px'
    };
    this.rightPartStyl = {
      'margin': '0',
      'padding': '0',
      'position': 'absolute',
      'right': '11px'
    };
    this.doorWrapperStyl = {
      'position': 'fixed',
      'z-index': '667',
      'top': '0px',
      'font-size': '28px',
      'width': '100%',
      'text-align': 'center'
    };
  }


  ngOnInit(): void {
    console.log('Home', this.appService.isHome);
    this.setSise();
  }

  @HostListener('window:resize')
  updateSize() {
    this.setSise();
  }

  setSise() {
    const viewWidth = document.documentElement.clientWidth ||  document.body.clientWidth;
    const viewHeight = document.documentElement.clientHeight || document.body.clientHeight;
    this.doorWrapperStyl['line-height']
        = this.doorWrapperStyl['height'] = this.leftPartStyl['height'] = this.rightPartStyl['height'] = viewHeight - 30 + 'px';
    this.leftPartStyl['width'] = this.rightPartStyl['width'] = (viewWidth - 22) / 2 + 'px';
    console.log(this.rightPartStyl, this.leftPartStyl);
  }

  toLife() {
    this.appService.isHome = false;
    this.router.navigate(['/life']);
  }


  toCode() {
    this.appService.isHome = false;
    this.router.navigate(['/code']);
  }
}
