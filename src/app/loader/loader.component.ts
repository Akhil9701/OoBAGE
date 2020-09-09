import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import { Subscription } from 'rxjs';
import { LoadingState } from './loader.state';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  show = false;
  private subscription: Subscription;

  constructor(
    private loaderService: LoaderService
  ) {
  }

  ngOnInit() {
    this.subscription = this.loaderService.LoadingState
      .subscribe((state: LoadingState) => {
        this.show = state.show;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
