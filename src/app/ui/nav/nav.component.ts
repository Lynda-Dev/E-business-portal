import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public username: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if(localStorage.getItem('user')) {
      this.username = localStorage.getItem('user');
    }
  }

  public logout() {
    localStorage.removeItem('data');
    localStorage.removeItem('user');

    this.router.navigate(['/login'], { relativeTo: this.route });
  }

}
