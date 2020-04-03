import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit {
  images: Array<string> = [
    'https://cms.luatvietnam.vn/uploaded/Images/Original/2019/01/17/nuoi-cho-meo_1701125148.png',
    'https://i785.photobucket.com/albums/yy135/cobaby/DSC00093-2.jpg'
  ];

  largeImage: string = this.images[0];
  constructor() {

  }

  showImage(item) {
    this.largeImage = item;
  }

  ngOnInit() {
  }

}
