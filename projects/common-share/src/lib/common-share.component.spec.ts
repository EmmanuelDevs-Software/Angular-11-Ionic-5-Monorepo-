import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonShareComponent } from './common-share.component';

describe('CommonShareComponent', () => {
  let component: CommonShareComponent;
  let fixture: ComponentFixture<CommonShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
