import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  imageUrl;
  imageSet:boolean = false;
  @Output() newImage = new EventEmitter();
  @Input() previousImage;
  @Input() size = 'medium';
  
  constructor(public cd: ChangeDetectorRef) { }

  ngOnInit() {
    if(this.previousImage){
      this.imageSet = true;
      this.imageUrl = this.previousImage;
    }
  }

  uploadFile(event){
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.imageSet = true;
        this.newImage.emit(this.imageUrl);
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();     
    }
  }

}
