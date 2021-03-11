import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Theatre } from '../models/theatre.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add-theatre',
  templateUrl: './add-theatre.component.html'
})
export class AddTheatreComponent {

  theatreForm: FormGroup;

  constructor(private adminService: AdminService,
    private toastr: ToastrService,
    private route: Router)
  {
    this.theatreForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl(''),
      city: new FormControl('', Validators.required),
      noOfSlots: new FormControl('', Validators.required),
      noOfSeats: new FormControl('', Validators.required),
      ticketCost: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.adminService.addTheatre(new Theatre(this.theatreForm.value)).subscribe(
      (res: any) => {
        if (!res) {
          this.theatreForm.reset();
          this.toastr.success('Theater added', 'Registration successful.');
          this.route.navigate(['/home']);
        }
        else {
          this.toastr.error('Adding theater failed', 'error occcured');
        }
      }
    );
  }

}
