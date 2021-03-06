import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThreeComponent } from './page-three.component';

describe('ProductsComponent', () => {
  let component: PageThreeComponent;
  let fixture: ComponentFixture<PageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageThreeComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
