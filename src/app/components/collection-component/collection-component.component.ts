import { Component, OnInit } from '@angular/core';
import { PhotoshareService } from 'src/app/services/photoshare.service';
import { Photo } from 'src/app/Photo';

@Component({
  selector: 'app-collection-component',
  templateUrl: './collection-component.component.html',
  styleUrls: ['./collection-component.component.scss']
})
export class CollectionComponentComponent implements OnInit {

  public photoCollection: Photo[];

  constructor(private photoService: PhotoshareService) { }

  ngOnInit(): void {
    this.photoService.getPhotoCollection().subscribe((photos) => {
      this.photoCollection = photos;
    })

  }

}
