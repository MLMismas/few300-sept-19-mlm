import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsEntryComponent } from './entry.component';

describe('EntryComponent', () => {
  let component: FriendsEntryComponent;
  let fixture: ComponentFixture<FriendsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FriendsEntryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
