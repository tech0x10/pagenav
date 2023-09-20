import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentlocation = 0;
  title: any;
  generateclass(i: number) {
    if (i == this.currentlocation)
      return 'active';

  }
  just(i: number) {
    this.currentlocation = i;
  }

  content = [
    {
      title: 'Floating Vegetable Market in Srinagar, Kashmir On Dal Lake',
      url: 'https://images.unsplash.com/photo-1616190419596-e2839e7380d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
      source: 'unsplash.com'
    },
    {
      title: 'Indira Gandhi Memorial Tulip Garden, Jammu and Kashmir, Cheshma Shahi Road, Rainawari, Srinagar',
      url: 'https://images.unsplash.com/photo-1566837497312-7be7830ae9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      source: 'unsplash.com'
    }, {
      title: 'Government Hut in Aru Valley Pahalgam',
      url: 'https://images.unsplash.com/photo-1584732200355-486a95263014?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      source: 'unsplash.com'
    }, {
      title: 'Thajwas Glacier Sonamarg, Kashmir',
      url: 'https://images.unsplash.com/photo-1623996243194-fd281057d568?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      source: 'unsplash.com'
    }, {
      title: 'Manthar Meadow Bandipora, Jammu & Kashmir',
      url: 'https://images.unsplash.com/photo-1624463898724-6380f7783ea4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1912&q=80',
      source: 'unsplash.com'
    }, {
      title: 'Gulmarg',
      url: 'https://images.unsplash.com/photo-1646202608578-2e842e154740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      source: 'unsplash.com'
    }, {
      title: 'Gurez Valley, Forest Block jammu & kashmir',
      url: 'https://images.unsplash.com/photo-1642746502666-3f037d768625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      source: 'unsplash.com'
    }, {
      title: 'SONAMARG ( MEADOW OF GOLD ) JAMMU & KASHMIR INDIA',
      url: 'https://images.unsplash.com/photo-1634376700784-046ed340fcc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      source: 'unsplash.com'
    }, {
      title: 'Main Town Bandipora | Wullar Lake | Zalwan Jammu & Kashmir',
      url: 'https://images.unsplash.com/photo-1624384865796-271ab7b43b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80',
      source: 'unsplash.com'
    }, {
      title: 'Dal Lake - Kashmir',
      url: 'https://images.unsplash.com/photo-1586923571111-026792acfdbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
      source: 'unsplash.com'
    }, {
      title: 'Sonamarg, Ganderbal',
      url: 'https://images.unsplash.com/photo-1611772485324-e510497c0bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      source: 'unsplash.com'
    }
  ]
}
