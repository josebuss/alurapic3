import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComentsComponent } from './photo-coments.component';

describe('PhotoComentsComponent', () => {
  let component: PhotoComentsComponent;
  let fixture: ComponentFixture<PhotoComentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoComentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
