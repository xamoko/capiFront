import { Injectable } from '@angular/core';
import { ApiService } from '../server/api.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public Users;

  constructor(
    public api:ApiService
  ) { }

  getUsers(){
    let url = "/getData"
    return this.api.get(url)
  }
}
