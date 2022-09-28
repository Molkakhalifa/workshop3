import { Component, OnInit } from '@angular/core';
import { ListUserComponentComponent } from '../list-user-component/list-user-component.component';
import { User } from '../model/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ListUserComponent = User;
  User: any;
  category!: string;
  constructor() { }

  ngOnInit(): void {
  }
  DeleteUser(i : number): void{

    this.User.removeAt(i);
    }
}
