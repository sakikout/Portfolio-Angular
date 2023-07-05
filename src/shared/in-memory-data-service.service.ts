import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService {

  gitURL = 'https://github.com/sakikout?tab=repositories';
  queryParams = {tab : 'repositories'};

  constructor(
    private http: HttpClient
  ) { }

  getRepositories(): Observable<Repository[]> {
     // queryParams: ?tab=repositories

    return this.http.get<Repository[]>(this.gitURL, {params: this.queryParams}).pipe(
      map((r: any) => r),
      tap(console.log),
      catchError(this.handleError<Repository[]>('getRepositories', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      //console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getTime(name: string){
    // hreft = "http://github.com/{username}/{respositoryname}"
    // div id = "user-repositories-list"
    // itemprop = "name codeRepository"
   let projectURL = `https://github.com/sakikout/${name}/commit/main`;


  }

}
