import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookComponent} from './book.component';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

describe('BookComponent', () => {
    let component: BookComponent;
    let fixture: ComponentFixture<BookComponent>;

    @NgModule({
        declarations: [BookComponent], // Declare the component
        imports: [CommonModule] // Include any modules the component depends on
    })
    class TestModule {
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestModule] // Import the test module
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BookComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
