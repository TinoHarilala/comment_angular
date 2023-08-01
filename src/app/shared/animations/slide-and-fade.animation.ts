import { animate, animation, style } from "@angular/animations";

export const slideAndFideAnimation = animation([
    style({
        transform : 'translateX(-50%)',
        opacity : 0,
        'background-color' : '{{startColor}}'
      }),
    animate('{{time}} ease-out', style({
        transform : 'translateX(0)',
        opacity : 1  ,
        'background-color' : 'white'
    })),
    ]   
)