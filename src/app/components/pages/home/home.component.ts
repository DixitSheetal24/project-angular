import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 foods!:Food[]

  constructor(private api:FoodService, activateRoute:ActivatedRoute, private cartService:CartService,private router: Router)
  {
    activateRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        this.foods=this.api.getAllFoodbySearchTerm(params.searchTerm)
        else
        this.foods= api.getAll()
  })
  }

    ngOnInit():void {}
// Add to cart

addToCart(){

 // this.cartService.addToCart(this.food)
  this.router.navigateByUrl('/cart-page')
}
}
