import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Update component decorators like this
@Component({
  selector: 'app-footer',
  standalone: true, // Add this
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] // Fix this
})
export class FooterComponent {
footerlogo: string = '/assets/image/bgen_arrazi_white.png'
}
