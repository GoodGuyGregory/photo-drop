import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Photo } from '../Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoshareService {

  constructor(private http: HttpClient) { }

  private url = 'http://goodguygregory.com/photo-share/';

  getPhotoCollection(): Observable<Photo[]> {
    console.log('fetching photos');
    let url = `${this.url}/collection`;

    return this.http.get<Photo[]>('http://goodguygregory.com/photo-share/collection');
  }

}