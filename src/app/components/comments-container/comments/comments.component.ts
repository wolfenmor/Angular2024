import { Component } from '@angular/core';
import {NgFor, NgIf} from "@angular/common";
import {IComment} from "../../../interfaces/comment.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../../services/comment.service";
import {CommentComponent} from "../comment/comment.component";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    CommentComponent
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  comments: IComment[]
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(({id}) => {
        this.commentService.getByPostId(id).subscribe(value => this.comments = value)
    })
  }
}
