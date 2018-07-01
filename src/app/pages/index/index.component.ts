import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  opened: boolean;

  private me;
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.getAuth();
  }

  openSidenav():void{
    this.opened = true;
  }

  getAuth ():void {
    this.authService.getAuth().subscribe((user) => {
      //Trigger when user change
      this.me = user;
    });
  }

}
