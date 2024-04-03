import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CarFormComponent} from "./components/car-form/car-form.component";
import {CarsComponent} from "./components/cars/cars.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarFormComponent, CarsComponent],
  templateUrl: './app.component.html',
  providers: [
    HttpClientModule
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular2024';
}
