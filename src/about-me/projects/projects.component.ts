import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, tap } from 'rxjs';
import { InMemoryDataServiceService } from 'src/app/shared/in-memory-data-service.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  showProj : boolean = false;
  sub : Subscription[] = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private gitservice: InMemoryDataServiceService){

  }

  ngOnInit(): void {
    
  }

  showProjects(){
    var button = document.getElementById('btnshow')
    button?.remove();
    this.showProj = !this.showProj;
  }


  ngOnDestroy(): void {
   this.sub.forEach((subs: any) => subs.unsubscribe());
    
  }
  goToArts(){
    this.router.navigate(['/projects']);
  }
}
