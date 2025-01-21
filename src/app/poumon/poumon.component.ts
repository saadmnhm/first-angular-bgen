import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-poumon',
  imports: [RouterModule],
  templateUrl: './poumon.component.html',
  styleUrl: './poumon.component.css'
})
export class PoumonComponent {
imagekit: string = '/assets/image/10662418.jpg'
}

