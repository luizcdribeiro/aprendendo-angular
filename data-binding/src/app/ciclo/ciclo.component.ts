import { Component, OnChanges, OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor')
  }

  ngOnChanges() {
    this.log('ngOnChanges')
  }


  ngOnInit(){
    this.log('ngOnInit')
  }

  ngDoCheck() {
    this.log('ngDoCheck')
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit')
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    this.log('ngOnDestroy')
  }

  private log(hooks: string) {
    console.log(hooks)
  }

}
