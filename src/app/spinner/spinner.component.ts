import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  show=false
 @Input() public parentData;
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    
    this.spinner.show();
    this.show=this.parentData
    
  }

  ngOnChanges() {
   
    this.spinner.show();
    this.show=this.parentData
    setTimeout(() => {
      this.spinner.hide();
      this.show=false;
      
    }, 5000);
    
    
   
  }
}
