import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  frm: FormGroup;
  isSubmit = false;

  constructor(public formBuilder: FormBuilder) {
    this.frm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'fullname': new FormControl('', [Validators.required])
    })

    // this.frm = this.formBuilder.group({
    //   'username': ['', Validators.required],
    //   'fullname': ['', Validators.required]
    // })
  }

  ngOnInit() {
  }

  submit() {
    this.isSubmit = true;
    if (this.frm.valid) {
      console.log(this.frm.value);
      console.log(this.frm.controls['username'].value);
    } else {
      alert("Dữ liệu chưa valid");
    }
  }

}
