import {Component, OnInit} from '@angular/core';
import {PostService} from "../post.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Subject, Subscription} from "rxjs";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideogamesComponent implements OnInit {
  videogames: any = [];
  subscription: Subscription;

hola:String = "hola";



  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.postService.fetchPosts().subscribe(data => {
      this.videogames = data;
    });

    this.subscription = this.postService.videogamesChanged
      .subscribe(
        (videogames) => {
          this.videogames = videogames;
        }
      )

  }

  deleteVideogame(id:number){
    if(window.confirm('Estas Seguro que quieres eliminar la pelicula?')){
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: {
          id: id,
        },
      };

      this.postService.deleteVideogame(options).subscribe(data => {
        // console.log(data);
      })
      location.reload();

      // this.appService.videogamesChanged.next(this.appService.fetchPosts().subscribe());


    }
  }

  // onFetchPosts() {
  //   // Send Http request
  //   this.postService.fetchPosts().subscribe(posts => {
  //
  //     console.log(posts);
  //     this.loadedPosts = posts;
  //   });
  // }


}
