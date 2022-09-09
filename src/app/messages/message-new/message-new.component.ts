import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.scss']
})
export class MessageNewComponent implements OnInit {
  firstFormGroup= new FormGroup({
    emailCntrl: new FormControl('', Validators.required)
  });
  secondFormGroup = new FormGroup({
    messageCntrl: new FormControl('', Validators.required)
  });
  priorities: string[] = ['High', 'Medium', 'Low'];
  departments: object[] = [
    {
      id: 1,
      name: 'Complaints'
    },
    {
      id: 2,
      name: 'Loyalty'
    },
    {
      id: 3,
      name: 'Promotions'
    },
  ]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
