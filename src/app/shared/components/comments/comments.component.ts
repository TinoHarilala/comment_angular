import { state, style, transition, animate, trigger, query, group, sequence, stagger, animateChild, useAnimation } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Comment } from 'src/app/core/models/comment-model';
import { flashAnimation } from '../../animations/flash.animation';
import { slideAndFideAnimation } from '../../animations/slide-and-fade.animation';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  animations : [
    trigger('listItem', [
      state('default', style({
        transform : 'scale(1)',
        'background-color' : 'white',
        'z-index ' : 1
      })),
      state('active', style({
        transform : 'scale(1.05)',
        'background-color' : 'rgb(201, 157, 242)',
        'z-index' : 2
      })),
      transition('default => active', [
        animate('300ms ease-in-out')
      ]),
      transition('active => default', [
        animate('500ms ease-in-out')
      ]),
      transition(':enter',[
        query('.comment-text, .comment-time', style({
          opacity : '0'
        })),
        useAnimation(slideAndFideAnimation, {
          params : {
            time : '250ms',
            startColor : 'black'
          }
        }),
        group([
          useAnimation(flashAnimation, {
            params : {
              time : '250ms',
              flashColor : 'rgb(249,179,111)'
            }
          }),
          query('.comment-text', [
            animate('250ms', style({
              opacity : '1'
            }))
          ]),
          query('.comment-time', [
            animate('1000ms', style({
              opacity : '1'
            }))
          ])
        ])
      ])
    ]),
    trigger('list', [
      transition(':enter', [
        query('@listItem', [
          stagger(50, [
            animateChild()
          ])
        ])
      ])
    ])
  ]
})
export class CommentsComponent implements OnInit {
 @Input() comments !: Comment[]
 @Output() newComment = new EventEmitter<string>()

 animationStates : { [key : number] : 'default' | 'active' } = {}

 commentCtr !: FormControl

 constructor(private formBuilder : FormBuilder ){}

ngOnInit(): void {
  this.commentCtr = this.formBuilder.control('', [Validators.required, Validators.minLength(10)])
}

onLeaveComment() {
  if (this.commentCtr.invalid) {
      return;
  }
  const maxId = Math.max(...this.comments.map(comment => comment.id));
  this.comments.unshift({
      id: maxId + 1,
      comment: this.commentCtr.value,
      createdDate: new Date().toISOString(),
      userId: 1

  });
  this.newComment.emit(this.commentCtr.value);
  this.commentCtr.reset();
}

 onListItemMouseEnter( i : number) {
  this.animationStates[i] = 'active'
 }

 onListItemMouseLeave(i : number) {
  this.animationStates[i] = 'default'
 }

}
