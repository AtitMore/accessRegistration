import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServerService } from 'src/app/server.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public form: FormGroup
  submited: any;
  param1: string;
  param2: string;

  constructor(private fb: FormBuilder, private serverService: ServerService,
    private router: Router, private activatedRoute: ActivatedRoute) { 

    }

  ngOnInit() {
    
    this.activatedRoute.queryParams.subscribe(params => {
      this.param1 = params['page'];
      console.log(this.param1);
  });

  if(this.param1 == 'linkedin') {
    this.serverService.linkedInLogin()
  }

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submited = true;
    if (this.form.invalid) {
      return;
    }

    this.serverService.register(this.form.value)
  }

  

}
