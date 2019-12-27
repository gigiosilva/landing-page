import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  @Input() background;
  selectedBack: '';
  backOptions = ['color', 'image'];
  backgroundSet:boolean = false;
  @Output() updatedBackground = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  updateSelect(event){
    this.backgroundSet = true;
    if(event == 'color'){
      this.background.backImage = false;
      this.background.imageUrl = '';
    } else{
      this.background.color = '';
      this.background.backImage = true;
    }
  }

  handleChange(event){
    this.background.color = event.color.hex;
    this.updatedBackground.emit(this.background);
  }

  updateImage(event){
    this.background.imageUrl = event;
    this.updatedBackground.emit(this.background);
  }

}
