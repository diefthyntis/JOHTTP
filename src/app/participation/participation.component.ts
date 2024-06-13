import { Component, Input } from '@angular/core';
import { Participation } from '../classes/participation.class';

@Component({
  selector: 'app-participation',
  standalone: true,
  imports: [],
  templateUrl: './participation.component.html',
  styleUrl: './participation.component.scss'
})
export class ParticipationComponent {
  @Input() inputParticipation!:Participation;

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
