import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  newUser: any;
  users: any;
  edit: boolean;
  btnName : string;
  constructor() { }

  ngOnInit() {
    this.newUser = {};
    this.users = [];
    this.edit = false;
    this.btnName = "Inserir";
  }
  addUser(newUser: any){
    if(!this.edit){
      if (typeof newUser.id == 'undefined' || typeof newUser.name == 'undefined') {
        alert('Campo id ou nome não pode estar vazio')
      } else {
        if(this.users.length == 0) {
          this.users.push(newUser);
          this.newUser = {};
        }else {
          for(let i=0; i < this.users.length; i++ ) {

              if(newUser.id == this.users[i].id) {
                alert('id ja existente');
                break;
              }else {
                this.users.push(newUser);
                this.newUser = {};
              }
          }
        }
      }
    }else{
      this.newUser = {};
      this.btnName = "Inserir";
    }
  }

  editUser(u :any){
    this.edit = true;
    this.newUser = u;
    this.btnName = "Salvar";

  }
  delUser(index: number){
    this.users.splice(index,1);
  }
}
