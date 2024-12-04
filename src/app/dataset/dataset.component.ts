import { ActivatedRoute } from '@angular/router';
import { customer, Items } from './../model';
import { Component, OnInit } from '@angular/core';
import { CreateFormGroupArgs, GridModule } from '@progress/kendo-angular-grid';
import { SharingService } from '../sharing.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dataset',
  standalone: true,
  imports: [GridModule, DatePipe],
  templateUrl: './dataset.component.html',
  styleUrl: './dataset.component.css',
})
export class DatasetComponent implements OnInit {
  public gridView: customer[] = [];

  constructor(private service: SharingService , private activatedRoute:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.getAllData();
    let customerID = this.activatedRoute.snapshot.paramMap.get('customerID');
    customerID && this.service.getCustomer(customerID).subscribe((data)=>{
        console.log(data);

    })


  }

  getAllData() {
    this.service.getAllCustomer().subscribe((result) => {
      this.gridView = result;
    });
  }

  getCustomer(id:string){
    this.service.getCustomer(id).subscribe((data)=>{
        console.log(data);
    });
  }

  delete(id:string){
    this.service.Delete(id).subscribe(()=>{
      console.log("Deleted customer details : -");
      this.getAllData();

    })

  }


}
