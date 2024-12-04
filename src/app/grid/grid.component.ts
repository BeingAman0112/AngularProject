import { Component, OnInit } from '@angular/core';
import { GridModule, PagerPosition, PagerType } from '@progress/kendo-angular-grid';
import {  products } from '../model';
import { SharingService } from '../sharing.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [GridModule , DatePipe],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent implements OnInit {
  public gridData: products[] = [];
  public type: PagerType = "numeric";
  public buttonCount = 5;
  public info = true;
  public pageSizes = [2, 5, 10, 20];


  public pageSize = 5;
  public skip = 0;

  constructor(private service:SharingService){}
  ngOnInit(): void {
    this.getAllPRoduct();
  }



  getAllPRoduct(){
    this.service.getAllPRoducts().subscribe({
      next:(response:any)=>{
        this.gridData = response;
      },
      error:(err:any)=>{
        console.log(err);
      }
    });
  }
  delete(id:string){
    this.service.deleteProduct(id).subscribe({
      next:(result:any)=>{
        console.log("Product is Deleted : -");
        this.getAllPRoduct();
      },
      error:(err:any)=>{
        console.log("Error accur:"+err);
      }

    });
  }

}
