import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReUseComponent } from './re-use.component';

describe('ReUseComponent', () => {
  let component: ReUseComponent;
  let fixture: ComponentFixture<ReUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
