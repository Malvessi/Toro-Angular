import { Component } from '@angular/core';
import { Top5Assets } from 'src/models/Top5Assets';
import { Service } from 'src/service/Top5Assets';

@Component({
  selector: 'top5Assets',
  templateUrl: './top5Assets.component.html'
})

export class Top5AssetsComponent {

  constructor(private service: Service) { }

  list: Top5Assets[];

  ngOnInit() {
    this.show();
  }

  show(): void {
    this.service.get()
      .subscribe(data => {
        this.list = data;
        console.log(this.list);
      });
  }
}
