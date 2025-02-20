import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonComponentsLibraryComponent } from './common-components-library.component';

describe('CommonComponentsLibraryComponent', () => {
  let component: CommonComponentsLibraryComponent;
  let fixture: ComponentFixture<CommonComponentsLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonComponentsLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonComponentsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
