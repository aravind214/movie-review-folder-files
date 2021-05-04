import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute,Router } from '@angular/router';
import { MovieReviewService } from '../movie-review.service';
export class Review{
  MoviewReviewName:string="";
  MovieId:number=1;
  MovieRating:number=4;
  Username:string="";
  Feedback:string="";
  // MovieImageId:string="";
}
@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.css']
})
export class MovieReviewComponent implements OnInit {
  ReviewDetail:Review= new Review();
  ReviewallDetails:Review[]=[];
  showing:boolean=false;

  constructor(private service:MovieReviewService,private http:HttpClient, private rou:Router,private Router:ActivatedRoute) { }
   onSubmit(data:any){
    if(this.ReviewDetail.MoviewReviewName && this.ReviewDetail.MovieId && this.ReviewDetail.MovieRating && this.ReviewDetail.Username && this.ReviewDetail.Feedback){
 this.ReviewallDetails=data;
    console.log(this.ReviewallDetails);
    this.service.PostUserData(this.ReviewDetail).subscribe();
    alert("Success! Thank for give Feedback");
    this.rou.navigate(['/login']);
     }
     
    }

  ngOnInit(): void {
    this.ReviewDetail=JSON.parse(this.Router.snapshot.params.obj1);
  }
  
  show(){
    // this.ReviewDetail=new this.ReviewallDetails;
    this.showing=true;
  }
  

}
