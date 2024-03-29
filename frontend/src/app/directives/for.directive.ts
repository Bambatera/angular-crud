import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: Number[];

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { }

  ngOnInit(): void {
    this.numbers.forEach(number => {
      this.container.createEmbeddedView(
        this.template, {$implicit: number}
      );
    });
  }

}
