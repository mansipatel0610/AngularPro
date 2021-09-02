import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Subtitle='Zara!';

  customerName='Mansi';

  colorVal='red';

  classname='c1';

  class='c2';

  holder='Enter Brand Name';

  showBrand(){
    alert('GUCCI is not available');
  }
}
