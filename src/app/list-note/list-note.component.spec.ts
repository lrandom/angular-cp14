import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNoteComponent } from './list-note.component';

describe('ListNoteComponent', () => {
  let component: ListNoteComponent;
  let fixture: ComponentFixture<ListNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
