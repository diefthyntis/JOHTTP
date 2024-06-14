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

  /*
  constructor(
  public participationId: number,
  public city: string,
  public year: string,
  public athleteCount: number,
  public medalsCount: number,
  public MemberId: number,
  public participationCode: string){}  
  */
}
