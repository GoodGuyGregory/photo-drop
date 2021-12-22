import { Component, OnInit } from '@angular/core';
import { Photo } from '../../Photo';

@Component({
  selector: 'app-upload-wrapper',
  templateUrl: './upload-wrapper.component.html',
  styleUrls: ['./upload-wrapper.component.scss']
})



export class UploadWrapperComponent implements OnInit {

  public myPhoto: Photo[] = [];
  public photoName: string;
  public photoToUpload: File;

  constructor() { }



  ngOnInit(): void {
  }

  selectFile(file: File[]): void {
    this.photoToUpload = file[0];
  }

  submitFile(): void {
    // call API service to name the file and send it off
    console.log(this.myPhoto);
    console.log(this.photoToUpload);
    console.log(this.photoName);
  }
}
