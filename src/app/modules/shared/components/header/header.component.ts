import { Component, OnInit } from '@angular/core';
import { RedirectModule } from '../../enums/emuns';
import { GlobalHelperService } from '../../services/global-helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  redirectTo: RedirectModule;
  constructor(public _globalHelper: GlobalHelperService) { }

  ngOnInit(): void {
    // this._globalHelper.selectRoute$.next(RedirectModule.ViewProperty);
  }

  displayModule(redirect: string) {
    this._globalHelper.selectRoute$.next(this.redirectTo[redirect]);
  }

}
