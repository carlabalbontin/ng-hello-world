import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { AppError } from 'src/app/common/errors/app-error';
import { NotFoundError } from 'src/app/common/errors/not-found-error';
import { BadInputError } from 'src/app/common/errors/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any;
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response;
        }
      );
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response['id'];
          this.posts.splice(0, 0, post);
        },
        (error: AppError) => {
          if (error instanceof BadInputError) {
            // this.form.setErrors(error.originalError)
          } else {
            throw error;
          }
        }
      );
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response => {
          console.log(response);
        }
      );
  }

  deletePost(post) {
    // this.service.deletePost('hola/' + post.id) // to test error
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            console.log('This post has already been deleted');
          } else {
            throw error;
          }
        }
      );
  }


}
