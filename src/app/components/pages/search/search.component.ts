import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/shared/model/Food';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchTerm=''
  foods!: Food;
  api: any;
 constructor(activatedRoute: ActivatedRoute, private router:Router){
  activatedRoute.params.subscribe((params)=>{
    if(params.searchTerm)
    this.searchTerm = params.searchTerm
    if(params.searchTerm)
        this.foods=this.api.getAllFoodbySearchTerm(params.searchTerm)
        else
        this.foods= this.api.getAll()
  })
 }

  ngOnInit(): void{

  }

  search(term:string){
    if(term)
     this.router.navigateByUrl('/search/'+term);

  }



}
