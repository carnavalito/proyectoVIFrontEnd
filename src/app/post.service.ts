import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from "./movie.model";
import {map, Observable, Subject} from "rxjs";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  movieChanged = new Subject();
  videogamesChanged = new Subject();

  movies = [];

  constructor(private http: HttpClient) {

  }

  sendComplaint(file):Observable<any>{
    const formData = new FormData();

    formData.append("file",file,file.name)

    return this.http.post('http://localhost:3000/api/upload/file',formData)
  }


  fetchPosts() {
    return this.http.get('http://localhost:8080/listaVideojuegos');
  }


  getVideogame(id: number) {
    return this.http.get(`http://localhost:8080/videojuego/${id}`,);
  }

  editVideogame(editedVideogame, id: number) {
    return this.http
      .put(
        `http://localhost:8080/actualizarVideojuego/${id}`,
        editedVideogame
      ).subscribe(responseData => {
      console.log(responseData);
    });
  }

  addVideogame(movie) {
    return this.http
      .post('http://localhost:8080/agregarVideojuego', movie)

  }

  deleteVideogame(body:any) {
    return this.http.delete('http://localhost:8080/borrarVideojuego',body);


  }




}
