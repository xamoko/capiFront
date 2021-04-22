import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user/user.service";

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  public usersDatas;

  constructor(
    public user:UserService
  ) { }

  ngOnInit(): void {
    this.users();
  }

  users(){
    this.user.getUsers().subscribe( (res) => {
      this.usersDatas = res;
    })
    
    
  }

}
