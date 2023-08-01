import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector : '[highlight]'
})
export class HighlightDirective implements AfterViewInit {

    @Input() color !: string

    constructor(
        private el : ElementRef,
        private renderer : Renderer2
    ){}

    ngAfterViewInit(): void {
        this.setBackground(this.color)
    }

    setBackground(color : string){
        this.renderer.setStyle(this.el.nativeElement, 'background-color', color)
    }
    
    @HostListener('mouseenter') onMouseEnter(){
        this.setBackground('#C08460')
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.setBackground('#F26C4F')
    }

    @HostListener('click') onClick(){
        this.setBackground('#7EE787')
    }
}