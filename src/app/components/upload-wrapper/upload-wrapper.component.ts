import { Component, OnInit } from '@angular/core';
import { File } from '../../File';
import { FileType } from '../../FileType';

@Component({
  selector: 'app-upload-wrapper',
  templateUrl: './upload-wrapper.component.html',
  styleUrls: ['./upload-wrapper.component.scss']
})



export class UploadWrapperComponent implements OnInit {

  public myFile: File[] = [];
  public fileTypes: FileType[];
  public selectedFile: FileType;

  constructor() {
  }


  ngOnInit(): void {

    this.fileTypes = [
      { name: 'JPG', code: '.jpg' },
      { name: 'PNG', code: '.png' },
      { name: 'HEIC', code: 'heic' },
    ];
  }

}
