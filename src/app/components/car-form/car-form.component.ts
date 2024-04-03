import { Component } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent {

}
