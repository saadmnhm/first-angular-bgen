import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

headerlogo: string = 'assets/image/bgen_arrazi.jpg';

profilpic: string = 'assets/image/profile-pic.svg';

}
