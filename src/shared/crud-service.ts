import { HttpClient } from "@angular/common/http";
import { delay, take, tap } from "rxjs";

export class CrudService<T> {

  constructor(
    protected http: HttpClient,
    private API_URL: any
  ) {
    this.API_URL = 'http://localhost:3000/users';
   }


  list(){
    return this.http.get<T[]>(this.API_URL).pipe(
      delay(2000),
      tap(console.log)
    );
  }

  loadByID(id: number){
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  create(record : any){
    return this.http.post(this.API_URL, record).pipe(
      take(1)
    );
  }

  update(record: any){
    return this.http.put(`${this.API_URL}/${record.id}`, record).pipe(take(1));
  }

  save(record: any){
    if (record.id){
      return this.update(record);
    }
    return this.create(record);
  }

  remove(id: number){
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }
}
