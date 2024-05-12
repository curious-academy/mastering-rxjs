import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {

}
