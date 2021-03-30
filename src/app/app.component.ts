import {Component, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
interface Data{
  id: number;
  title: string;
  releaseDate: Date;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


@Injectable()
export class AppComponent {
  title = 'projecttoJson';
  baseUrl: string;
  endPoints = '';
  constructor(private http: HttpClient) {
     this.baseUrl = 'http://localhost:3000/posts';
  }

  data: Data[] | undefined;
  objectOne: object = {};
  id: number | undefined;
  // tslint:disable-next-line:typedef
  public getData() {
    this.endPoints = '';
    // @ts-ignore
    // tslint:disable-next-line:no-shadowed-variable
    this.http.get(this.baseUrl).subscribe( data => {
        // @ts-ignore
        this.data = data;
        },
        error => {
        }
      );
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  public addnewOne(object1) {
    this.objectOne = {
      id: object1.id,
      title: object1.title,
      releaseDate: object1.releaseDate
    };
    // @ts-ignore
    this.http.post(this.baseUrl, this.objectOne).subscribe((res: Response) => {console.log(res); }
    );
 }

  // tslint:disable-next-line:typedef
 public deleteone(id: any){
    this.endPoints = String(id);
    this.http.delete(this.baseUrl + this.endPoints).subscribe(data => {
     console.log(data);
   });

 }


}
