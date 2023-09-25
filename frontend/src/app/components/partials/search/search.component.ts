import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  constructor(activatedRoute:ActivatedRoute,private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm) this.searchTerm = params.searchTerm;
    });
   }

  ngOnInit(): void {
  }

  search(term: string | null): void {
    if (term === null) {
      this.router.navigateByUrl('/home'); // Navigate to the home component when term is null
    } else if (term) {
      this.router.navigateByUrl('/search/' + term);
    }
  }

}
