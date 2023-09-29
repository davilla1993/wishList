import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: WishItem[] = [

    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Learn Kubernetes and Jenkins'),
    new WishItem('Finish the e-commerce project'),
    new WishItem('Complete Spring boot project', true)
    ];


  filter:any;

  title = 'wishLists';


}
