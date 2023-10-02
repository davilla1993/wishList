import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from 'src/shared/services/event.service';
import { WishService } from './wish.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent {


  items: WishItem[] = [];

  filter:any;

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }
  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any) => {this.items = data},
      (err: any) => {alert(err.message)},

  )}

}
