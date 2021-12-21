import { Component, OnInit } from '@angular/core';
import { File } from '../../File';

@Component({
  selector: 'app-upload-wrapper',
  templateUrl: './upload-wrapper.component.html',
  styleUrls: ['./upload-wrapper.component.scss']
})



export class UploadWrapperComponent implements OnInit {

  public myFile: File[] = [];
  public fileName: string;
  public fileToUpload: File;

  constructor() { }



  ngOnInit(): void {
  }

  selectFile(file: File[]): void {
    this.fileToUpload = file[0];
  }

  submitFile(): void {
    // call API service to name the file and send it off
    console.log(this.myFile);
    console.log(this.fileToUpload);
    console.log(this.fileName);
  }
}
