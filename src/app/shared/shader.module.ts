import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { PrintName } from './pipes/printname.pipe';
import { TimeAgoPipe } from './pipes/timeAgo.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    CommentsComponent,
    ShortenPipe,
    PrintName,
    TimeAgoPipe,
    HighlightDirective
  ], 
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports : [
    MaterialModule,
    CommentsComponent,
    ShortenPipe,
    PrintName,
    TimeAgoPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
