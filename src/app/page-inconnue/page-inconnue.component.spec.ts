import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInconnueComponent } from './page-inconnue.component';

describe('PageInconnueComponent', () => {
  let component: PageInconnueComponent;
  let fixture: ComponentFixture<PageInconnueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInconnueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInconnueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
