import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { SharingService } from '../sharing.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    InputsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LabelModule,
    DateInputsModule,
    DropDownsModule,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent implements OnInit {
  public form: FormGroup;
  // public value = 2;
  public maxlength = 10;
  public charachtersCount = 0;
  public counter = `${this.charachtersCount}/${this.maxlength}`;
  listItems: Array<string> = ["Male", "Female", "Not Sure"];
  public data = {
    fullName: '',
    email: '',
    age: 0,
    Dateofbirth: '',
    Gender: 'Male',
    terms:"",
    number : "",
    rating: 0,
  };



  constructor(private formBuilder: FormBuilder , private service:SharingService, private router:Router) {
    this.form = this.formBuilder.group({
      fullName: new FormControl(this.data.fullName, [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl(this.data.email, [
        Validators.required,
        Validators.email,
      ]),
      age: new FormControl(this.data.age, [
        Validators.required,
        Validators.min(18),
      ]),
      DateofBirth: new FormControl(this.data.Dateofbirth , [
        Validators.required,
      ]),
      gender: new FormControl(this.data.Gender, [Validators.required]),
      terms: new FormControl(this.data.terms , [Validators.required]),
      number: new FormControl(this.data.number,[Validators.required]),
      rating: new FormControl(this.data.rating , [Validators.required]),
    });
  }
  ngOnInit(): void {

  }


  public get showSuccess(): any {
    if (this.form.controls) {
      const formControl = this.form.controls['fullName'];
      return formControl.value && formControl.value.length > 3;
    }
  }

  // getFormattedDate() {
  //   const rawDate = this.form.get('DateofBirth')?.value;
  //   return this.datePipe.transform(rawDate, 'yyyy-MM-dd'); // Desired format
  // }


  public submitForm(): void {

    this.service.addCustomer(this.form.value).subscribe((data)=>{
      console.log(data);
    });
    this.router.navigate(['dataList']);

  }

  public clearForm(): void {
    this.form.reset();
  }

  public onValueChange(ev: string): void {
    this.charachtersCount = ev.length;
    this.counter = `${this.charachtersCount}/${this.maxlength}`;
  }
}
