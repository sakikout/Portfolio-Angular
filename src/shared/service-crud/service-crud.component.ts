import { Injectable } from '@angular/core';
import { CrudService } from '../crud-service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})

export class ServiceCrud extends CrudService<User>{
  
  constructor(protected override http: HttpClient) {
    const API = 'http://localhost:3000/users';
     super(http, API);
 }
}
