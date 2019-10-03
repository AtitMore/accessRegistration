import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private serverService: ServerService) { }

  ngOnInit() {
  }

  linkedIn() {
    this.serverService.linkedInLogin()
    .subscribe(data => {
      console.log(data);
    })
    this.router.navigate(['/signup'],{ queryParams: { page:'linkedin'}})

  }

}
