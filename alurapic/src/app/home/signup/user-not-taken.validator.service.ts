import { Injectable } from '@angular/core';
import { SignUpService } from './signup.service';

@Injectable({
  providedIn: 'root'
})
export class UserNotTakenValidatorService {

  constructor(signupService: SignUpService){ }
}
