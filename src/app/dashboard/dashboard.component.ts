import { Component} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  searchResults: Array<Object>;
  searchTerm: string;

  constructor(private router: Router) {}

  ngOnInit() { }

  btnClick(){
    this.router.navigate(['/trip-planning']);
}

}
