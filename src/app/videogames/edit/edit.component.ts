import {Component, OnInit} from '@angular/core';
import {PostService} from "../../post.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  videogameId: number;
  videogame;
  editForm: FormGroup;

  constructor(private postService: PostService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {

        this.id = +params['id'];
        this.postService.getVideogame(this.id).subscribe(data => {

          this.videogame = data[0];
          this.videogameId = this.videogame.id;
          // console.log(this.videogame);
          this.initForm(this.videogame);


        });

        // this.postService.fetchPosts().subscribe(data => {
        //
        //   this.movie = data['data'];
        //   console.log(this.movie)
        //   // this.movieId=this.movie.id;
        //   // console.log(this.movieId);
        //   // this.initForm(this.movie);
        //
        //
        // });


      }
    )


  }

  private initForm(videogame) {
    this.editForm = new FormGroup({
      'nombre': new FormControl(videogame.nombre, Validators.required),
      'genero': new FormControl(videogame.genero, Validators.required),
      'lanzamiento': new FormControl(videogame.lanzamiento, Validators.required)

    })
  }


  onSubmit() {
    console.log(JSON.stringify(this.editForm.value));

    this.postService.editVideogame(this.editForm.value, this.videogame.id);
    this.location.back();
    alert('Pelicula editada con exito');
  }

  goBack() {
    this.location.back();
  }


}
