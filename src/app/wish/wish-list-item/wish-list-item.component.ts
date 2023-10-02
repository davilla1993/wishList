import { Component, OnInit, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from 'src/shared/services/event.service';
@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit{

  ngOnInit(): void {
  }

  constructor(private events: EventService) {}

@Input()
wish!: WishItem;

get cssClasses() {
 // return this.fullfilled ? ['strikeout','text-muted'] : [];

 return { 'strikeout text-muted': this.wish.isComplete }
}

removeWish() {
  this.events.emit('removeWish', this.wish)
}

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
