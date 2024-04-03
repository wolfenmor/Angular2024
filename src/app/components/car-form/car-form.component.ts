import {Component, OnInit} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {CarService} from "../../services/car.service";
import {ICar} from "../../interfaces/car.interface";

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, NgIf],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent implements OnInit {
  form: FormGroup
  carForUpdate: ICar

  constructor(private fb: FormBuilder, private carService: CarService) {
  }

  ngOnInit(): void {
    this._formInit()
    this.carService.getCarForUpdate().subscribe(value => {
      this.carForUpdate = value

      if (value) {
        const {brand, price, year} = value;
        this.form.patchValue({brand, price, year})
      }
    })
  }

  private _formInit(): void {
    this.form = this.fb.group({
      brand: ["", [
        Validators.required,
        Validators.pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/)
      ]],
      price: ["", [
        Validators.required,
        Validators.pattern(/^\d*$/),
        Validators.min(0),
        Validators.max(1000000)
      ]],
      year: ["", [
        Validators.required,
        Validators.pattern(/^\d*$/),
        Validators.min(1990),
        Validators.max(new Date().getFullYear())
      ]]

    })
  }

  save(): void {
    this.carService.create(this.form.value).subscribe(() => {
      this.carService.setTrigger()
      this.form.reset()
    })
  }

  update() {
    this.carService.updateById(this.carForUpdate.id, this.form.value).subscribe(()=> {
      this.carService.setCarForUpdate(null)
      this.carService.setTrigger()
      this.form.reset()
    })
  }
}
