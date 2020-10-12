import { Component, OnInit } from '@angular/core';
import { Nav } from './passenger-dashboard/models/nav.interface';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'FirstCourseApp';
  name = 'Two Way Binding';

  nav: Nav[] = [
    {
      link: '/',
      // link: '',
      name: 'Home',
      exact: true,
    },
    {
      link: '/opps',
      // link: 'opps',
      name: '404',
      exact: false,
    },
    {
      link: '/passengers',
      // link: 'passengers',
      name: 'Passengers',
      exact: false,
    },
    {
      link: '/files',
      // link: 'files',
      name: 'Files',
      exact: false,
    },
    {
      link: '/inventory',
      // link: 'inventory',
      name: 'Stock Inventory',
      exact: false,
    },
  ];
  constructor(private router: Router) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => console.log(event));
  }

  // handleBlur(event:any){
  //   this.name= event.target.value;

  // }

  // handleInput(event:any){
  //   this.name = event.target.value;
  // }
  handleChange(value: string) {
    this.name = value;
  }

  handleClick(event: any) {
    this.name = 'You click the button!!';
  }
  handleReference(value: string) {
    console.log('Username Reference Value :' + value);
  }
  onActivate(event) {
    console.log('Activate event', event);
  }
  onDeactivate(event) {
    console.log('Deactivate event', event);
  }
}
