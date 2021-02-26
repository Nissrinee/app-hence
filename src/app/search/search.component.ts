import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PassThrough } from 'stream';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  id="";
  text="";
  type=3;
  condition=false
  @Output() public childEvent = new EventEmitter();
  url: string = "https://www.youtube.com/embed/"+this.id;
  urlSafe: SafeResourceUrl;
  

  constructor(public sanitizer: DomSanitizer ) { }
 

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    
    
  }
  changetext(input)
  {
   
    this.text=input.value; 
    
  }
  emit()
  {
    this.childEvent.emit(false);
  }
  createiframe(src)
  { 
       var ifr=document.createElement( "iframe");
       ifr.setAttribute( "allowfullscreen", "" );
       ifr.setAttribute( "frameborder", "0" );
       ifr.setAttribute("width","500px");
       ifr.setAttribute("height","315px");
       ifr.setAttribute( "src", src );
       document.getElementById("vid").appendChild(ifr);
}

  
   youtube_parser(url){
    
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
    }
  loadata()
  {
    
    if(this.type==1)
    {this.childEvent.emit(true);
    this.id=this.text;
    this.url= "https://www.youtube.com/embed/"+this.id;
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
   
  
  
     if(this.type==2)
    { this.childEvent.emit(true);
      this.id=this.youtube_parser(this.text);
      this.url= "https://www.youtube.com/embed/"+this.id;
      this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      
    }
    if(this.type==3)
    {  this.childEvent.emit(true);
       document.getElementById('vid').innerHTML="";
       this.createiframe("https://www.youtube.com/embed/ldeLy8D_uSE");
       this.createiframe("https://www.youtube.com/embed/znQriFAMBRs");

    }
    
  }
   

  
    }
