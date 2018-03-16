import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {

   title = 'Angular 4 Project!';
   // declared array of months.
   months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
            numbe=[2,4];
            isavailable=false;
            myClickFunction(event) { 
                //just added console.log which will display the event details in browser on click of the button.
                alert("Button is clicked");
                console.log(event);
            }
            
            public sum: number ;

            addContact(a,b)
            {
               var aa=+a;
               var bb=+b;
               this.sum= aa+bb; 
               alert(this.sum);
            }
}
