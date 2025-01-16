import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_GRID_DIRECTIVES, IGX_SLIDER_DIRECTIVES } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { ProductDto } from '../models/northwind-swagger/product-dto';
import { NorthwindSwaggerService } from '../services/northwind-swagger.service';

@Component({
  selector: 'app-master-view',
  imports: [FormsModule, IGX_GRID_DIRECTIVES, IGX_SLIDER_DIRECTIVES],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindSwaggerProductDto: ProductDto[] = [];

  constructor(private northwindSwaggerService: NorthwindSwaggerService) { }

  ngOnInit() {
    this.northwindSwaggerService.getProductDtoList().pipe(takeUntil(this.destroy$)).subscribe(data => this.northwindSwaggerProductDto = data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
