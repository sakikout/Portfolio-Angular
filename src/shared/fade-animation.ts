import { trigger, transition, animate, style, state, AnimationTriggerMetadata, query, animateChild, group} from '@angular/animations'

export function FadeIn(
    timingIn: number, 
    height: boolean = false): AnimationTriggerMetadata  
{
    return trigger('fadeIn', 
    [
      transition(':enter', 
      [
        style(height ? { opacity: 0 , height: 0, } : { opacity: 0, }),
        animate(timingIn, style(height ? { opacity: 1, height: 'fit-content' } 
        : { opacity: 1, })),
      ]),
    ]);
}

export function FadeInOut(
    timingIn: number, timingOut: number, 
    height: boolean = false): AnimationTriggerMetadata  
    {
    return trigger('fadeInOut', 
    [
      transition(':enter', [
        style(height ? { opacity: 0 , height: 0, } : { opacity: 0, }),
        animate(timingIn, style(height ? { opacity: 1, height: 'fit-content' } 
        : { opacity: 1, })),
      ]),
      transition(':leave', [
        animate( timingOut, style(height ? { opacity: 0, height: 0, } 
        : { opacity: 0, })),
      ])
    ]);
}

export const simpleFadeAnimation = trigger('simpleFadeAnimation', [

  // the "in" style determines the "resting" state of the element when it is visible.
  state('in', style({opacity: 1})),

  // fade in when created. this could also be written as transition('void => *')
  transition(':enter', [
    style({opacity: 0}),
    animate(1000 )
  ]),

  // fade out when destroyed. this could also be written as transition('void => *')
  transition(':leave',
    animate(1000, style({opacity: 0})))
]);

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);