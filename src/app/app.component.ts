import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import xhook from 'xhook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}
  title = 'xhook-angular';

  ngOnInit(): void {
    xhook.after(function(request, response) {
      if (request.url.includes('2')) {
        response.data = JSON.stringify({ fake: true });
      }
    });
  }

  fetch() {
    console.log('Fetching without mock');
    this.http.get('http://jsonplaceholder.typicode.com/todos/1')
      .subscribe(r => console.log(r));
  }

  fetchWithMock() {
    console.log('Mocking then fetching');

    this.http.get('http://jsonplaceholder.typicode.com/todos/2')
      .subscribe(r => console.log(r));
  }

}
