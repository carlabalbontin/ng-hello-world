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
    this.service.getAll()
      .subscribe(response => this.posts = response);
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    this.posts.splice(0, 0, post);    // We "optimiscally" add the post before the call to the server
    input.value = '';
    this.service.create(post)
      .subscribe(
        response => {
          post['id'] = response['id'];
        },
        (error: AppError) => {
          this.posts.splice(0, 1);    // If there's an error, we get rid of the post we "optimistically" added
          if (error instanceof BadInputError) {
            // this.form.setErrors(error.originalError)
          } else {
            throw error;
          }
        }
      );
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(response => console.log(response));
  }

  deletePost(post) {
    const index = this.posts.indexOf(post); // optimistic update
    this.posts.splice(index, 1);            // optimistic update

    this.service.delete(post.id)
      .subscribe(
        () => {},
        (error: AppError) => {
          this.posts.splice(index, 0, post);  // rollback optimistic update if there is an error
          if (error instanceof NotFoundError) {
            console.log('This post has already been deleted');
          } else {
            throw error;
          }
        }
      );
  }


}
