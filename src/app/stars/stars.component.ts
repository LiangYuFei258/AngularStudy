import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input()
  private rating: number;
  private stars: string[];

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      const temNumber = this.rating - i;
      if (temNumber >= 1) {
        this.stars.push('star');
      } if (temNumber === 0.5) {
        this.stars.push('star_half');
      } if (temNumber <= 0) {
        this.stars.push('star_border');
      }
    }
  }

}
