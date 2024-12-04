import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { SharingService } from '../sharing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../model';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [ReactiveFormsModule, LabelModule,FormsModule , InputsModule, DateInputsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {

  constructor(private service:SharingService , private route:Router, private routes: ActivatedRoute){}
  ngOnInit(): void {
    
  }


  public registerForm: FormGroup = new FormGroup({
    ProductName: new FormControl("" , [Validators.required]),
    email: new FormControl("", Validators.email),
    Price: new FormControl("" , [Validators.required]),
    purchaseDate: new FormControl("" , [Validators.required]),
    Quantity: new FormControl("",[Validators.required]),
    acceptNews: new FormControl(),
  });



  public submitForm(): void {
    this.registerForm.markAllAsTouched();
    this.service.addProduct(this.registerForm.value).subscribe({
      next:(result:products)=>{
        console.log("products Details Added Succesfully");
      },
      error:(err:any)=>{
        console.log("Error occurs:"+ err);
      },
      complete:()=>{
        console.log("Completed");
      }
    });
    this.route.navigate(['/products/Grid']);
  }


  public clearForm(): void {
    this.registerForm.reset();
  }




}
