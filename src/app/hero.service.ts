import {Injectable} from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock/mock-heroes";
import {catchError, Observable, of} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) {
  }

  /*
   getHeroes(): Hero[] {
   return HEROES;
   }
   */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('api/heroes')
  }

  getHero(id: number): Observable<Hero> {
    const hero = this.http.get<Hero>('api/heroes/' + id)
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return hero
  }

}
