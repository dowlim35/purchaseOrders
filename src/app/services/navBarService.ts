import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'})

export class NavBarService
{
 pageName = " ";

   getPageName()
  {
  return this.pageName;
  }

  setPageName(pageName)
  {
  this.pageName = pageName;
  }
}
