import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service'
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

cristial: any;

constructor(public pepe : CinemaService, private route: ActivatedRoute, private router: Router) {
  this.route.params
    .subscribe((params) => this.cristial = params['id']);
}


  ngOnInit() {
    this.cristial = this.pepe.getMovie(this.cristial);
  }

}
