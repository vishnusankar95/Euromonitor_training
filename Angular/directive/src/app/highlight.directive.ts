import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef ) { }

  @Input() defaultColor = '';

  @Input() appHighlight = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor || 'green');
    //this.el.nativeElement.style.backgroundColor = 'black'
    this.el.nativeElement.style.fontSize = 'xxx-large'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('')
  }

  private highlight (color: string) : void {
    this.el.nativeElement.style.color = color
    this.el.nativeElement.style.fontSize = '15px'
  }
}
