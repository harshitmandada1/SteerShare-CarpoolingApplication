import { BookingService } from './../../services/booking.service';
import { RideService } from './../../services/ride.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CarService } from '../../services/car.service';
import { User } from '../../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car.model';
import { Booking } from 'src/app/models/booking.model';


@Component({
  selector: 'app-personal-home',
  templateUrl: './personal-home.component.html',
  styleUrls: ['./personal-home.component.scss']
})
export class PersonalHomeComponent implements OnInit {
  currentUser: User;
  currentCar: Car;
  userRides: Array<Booking>;
  upcomingRides: Array<Booking>;
  historyRides: Array<Booking>;
  booking: Booking;
  bookings: Array<Booking>;

  constructor(
    private userService: UserService,
    private carService: CarService,
    private bookingService: BookingService,
    private router: Router,
    private route: ActivatedRoute,
    private rideService: RideService,
  ) { }

  ngOnInit() {
    if((this.currentUser = this.userService.currentUserValue)){
      this.carService.get(this.currentUser._id)
        .subscribe((car)=>{
          this.currentCar = car;
          this.bookingService.getUserRides(this.currentUser.username).subscribe((rides) => {
            this.userRides = rides;

          })
        })
    }
    else{
      this.router.navigate(['/login'], {queryParams: {returnUrl: this.router.url}});
    }

  }

  //  viewRides(event: Event){
  //   if ((this.currentUser = this.userService.currentUserValue)) {
  //     console.log(this.currentUser.username);

  //     this.bookingService.view(id).subscribe(bookings => {
  //         console.log(bookings);
  //     });
  //   }
  // }



}
