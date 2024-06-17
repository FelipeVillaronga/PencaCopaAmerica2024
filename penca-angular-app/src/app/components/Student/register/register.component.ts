import { Component } from '@angular/core';
import {catchError} from "rxjs/operators";
import {IStudent} from "../../../interfaces/IStudent";
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {NATIONAL_TEAMS} from "../../../constants/nationalTeams";
import {IMatch} from "../../../interfaces/IMatch";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService: UserService, private router: Router) { }

  model = { Id:'', FirstName: '', LastName: '',
    Gender: '', Email: '', Password: '' } as IStudent;

  genders= ['Masculino', 'Femenino', 'Otros'];

  async register() {
    this.userService.add(this.model.Id, this.model.FirstName, this.model.LastName,
      this.model.Gender, this.model.Email, this.model.Password)
      .subscribe({
        next: (response: IStudent) => {
          console.log(response);
          this.router.navigate(['/select-champion/', this.model.Id])
          alert('Usuario registrado con éxito. ¡Bienvenido a la UcuPenca2024!');
        }
      });
  }
}
