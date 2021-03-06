import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add-theatre',
  templateUrl: './add-theatre.component.html',
  styleUrls: ['./add-theatre.component.sass']
})
export class AddTheatreComponent implements OnInit {

  constructor(private fb: FormBuilder, private adminService: AdminService, private toastr: ToastrService, private route: Router) { }

  ngOnInit(): void {
  }
  formModel = this.fb.group({
    TheatreName: ['', Validators.required],
    Address: [''],
    City: ['', Validators.required],
    NoOfSlots: ['', Validators.required],
    NoOfSeats: ['', Validators.required],
    TicketCost: ['', Validators.required]
  });

  onSubmit() {
    this.adminService.addTheatre(this.formModel.value).subscribe(
      (res: any) => {
        if (res == null) {
          this.formModel.reset();
          this.toastr.success('Theater added', 'Registration successful.');
          this.route.navigate(['/home']);
        }
        else {
          this.toastr.error('Adding theater failed');
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
