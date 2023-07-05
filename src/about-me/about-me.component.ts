import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FadeInOut } from '../shared/fade-animation';
import { Router } from '@angular/router';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [FadeInOut(200, 300, true)]
})
export class AboutMeComponent implements OnInit {

  //@ViewChild('btnShow', {read: ElementRef}) buttonProjects !: ElementRef;

  constructor(private router: Router){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }


}
