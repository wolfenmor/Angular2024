import { Component } from '@angular/core';
import {UsersComponent} from "../../components/users-container/users/users.component";

@Component({
  selector: 'app-users-page',
  standalone: true,
    imports: [
        UsersComponent
    ],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent {

}
