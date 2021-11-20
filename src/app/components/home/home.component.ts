import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public innerWidth: any;

  public list: string[] = ['an artist.', 'a CEO.', 'a creator.', 'a leader.', 'a thinker.', 'a writer.', 'a student.'];

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 900) {
      this.list = ['an artist.', 'a CEO.', 'a creator.', 'a leader.', 'a thinker.', 'a writer.', 'a student.']
    } else if (this.innerWidth >= 900) {
      this.list = ['an artist.', 'a CEO.', 'a creator.', 'a leader.', 'a thinker.', 'a writer.', 'a student.', 'a problem solver.', 'a free spirit.']
    }
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.onResize(event);
  }

}
