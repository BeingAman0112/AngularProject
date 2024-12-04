import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EditorModule } from '@progress/kendo-angular-editor';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { SharingService } from '../sharing.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, EditorModule, WindowModule,FormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css',
})
export class EditorComponent implements OnInit {
  constructor(private service: SharingService) {}
  ngOnInit(): void {}

  public opened = true;
  public dataSent = false;

  public value = ``;
  public summary = "";

  public close(): void {
    this.dataSent = false;
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }

  public send(): void {
    this.dataSent = true;
    console.log(this.value);

    this.summary += this.value;
    // this.opened = false;
    // var divContents = document.getElementsByClassName("summary");

  }
}
