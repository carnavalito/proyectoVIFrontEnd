import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../post.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm: FormGroup;
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file
  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit() {

  }
  onChange(event)
  {
    this.file = event.target.files[0];

  }

  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.postService.sendComplaint(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {

          // Short link via api response
          this.shortLink = event.link;

          this.loading = false; // Flag variable
        }
      }
    );
    alert("Denuncia enviada correctamente");
    location.reload();
  }

}
