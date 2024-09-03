import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GalleriaModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ausus';
  email: string = 'cs@ausus-alaamal.com';
}
