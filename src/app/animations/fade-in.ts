import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

export const fadeIn = trigger('fadeIn', [
  state('in', style({opacity: 1, transform: 'translateX(0)'})),
  transition('void => *', [
     style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    animate('0.2s ease-in')
  ]),
  transition('* => void', [
    animate('0.2s 10 ease-out', style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }))
  ])
]);
