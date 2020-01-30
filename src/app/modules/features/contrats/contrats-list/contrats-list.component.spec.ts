import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratsListComponent } from './contrats-list.component';

describe('ContratsListComponent', () => {
  let component: ContratsListComponent;
  let fixture: ComponentFixture<ContratsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
