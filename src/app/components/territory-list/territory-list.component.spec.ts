import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritoryListComponent } from './territory-list.component';

describe('TerritoryListComponent', () => {
  let component: TerritoryListComponent;
  let fixture: ComponentFixture<TerritoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerritoryListComponent]
    });
    fixture = TestBed.createComponent(TerritoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
