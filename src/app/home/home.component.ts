import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../assets/css/style.css',
  '../../assets/css/colorfulTab.min.css',
  '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
  '../../../node_modules/font-awesome/css/font-awesome.min.css',
  '../../assets/css/icons.css',
  '../../assets/css/jQuery.lightninBox.css',
  '../../assets/css/typo.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
