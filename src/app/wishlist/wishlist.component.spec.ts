import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistComponent } from './wishlist.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishlistComponent],
      imports: [MatPaginatorModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(WishlistComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
