import { Component, Input } from '@angular/core';
import { Participation } from '../classes/participation.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participation',
  standalone: true,
  imports: [],
  templateUrl: './participation.component.html',
  styleUrl: './participation.component.scss'
})
export class ParticipationComponent {

  @Input() inputParticipation!:Participation;

  constructor(private instanceRouteur:Router) {

  }
  onClickGoBack() {
    this.instanceRouteur.navigateByUrl('rlDashboard');

    throw new Error('Method not implemented.');
    }

  
}
