import {Component, Input} from '@angular/core';
import {IUser} from "../../../interfaces/user.interface";
import {IComment} from "../../../interfaces/comment.interface";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input()
  comment:IComment;
}
