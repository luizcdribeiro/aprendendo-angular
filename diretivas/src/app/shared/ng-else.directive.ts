import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean) {
    if(!condition) {
      this._viewContaienrRef.createEmbeddedView(this._templateRef)
    }else {
      this._viewContaienrRef.clear();
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContaienrRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
  }

}
