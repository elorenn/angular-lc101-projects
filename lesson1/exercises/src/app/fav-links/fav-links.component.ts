import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['http://www.yokoland.com/', 'http://www.sbs.com.au/theboat/', 'http://jessandruss.us/'];
  constructor() { }

  ngOnInit() {
  }

}
