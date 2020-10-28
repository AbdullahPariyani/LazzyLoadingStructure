import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

    constructor(private toast: ToastrService) { }

    ngOnInit(): void {
        this.toast.success('Load', '...');
    }

}
