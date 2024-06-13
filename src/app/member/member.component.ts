import { Component, Input } from '@angular/core';
import { Member } from '../classes/member.class';

import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [],
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss'
})
export class MemberComponent {

  @Input() inputMember!:Member;

  constructor(private instanceRouteur:Router) {
    
  }
  onClickView() {
    this.instanceRouteur.navigateByUrl('rlChronology/'+this.inputMember.id);
    console.log(this.inputMember.id);
    }
 

}
