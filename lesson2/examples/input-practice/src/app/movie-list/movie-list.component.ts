import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies = ['Toy Story   ', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

  constructor() { }

  ngOnInit() {
  }

  // addMovie (newTitle: string) {
  //   let standardize: string[] = this.movies.map(str => str.toLowerCase().trim());
  //   if (!standardize.includes(newTitle.toLowerCase().trim()) && newTitle.trim() !== "") {
  //     this.movies.push(newTitle.trim());
  //   } 
  // }

  addMovie (newTitle: string) {
    let errorMsg = '';
    let standardize: string[] = this.movies.map(str => str.toLowerCase().trim());
    if(newTitle.trim() === ''){
      errorMsg = 'Please enter a movie title.';
    } else if (standardize.includes(newTitle.toLowerCase().trim())) {
      errorMsg = `${newTitle} is already in your movie list.`;
    } else {
      this.movies.push(newTitle.trim());
    }
    return errorMsg;
  }

}