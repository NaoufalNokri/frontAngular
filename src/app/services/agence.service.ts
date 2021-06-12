import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agence } from '../interfaces/agence';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getAgence(): Observable<Agence[]> {
    return this.http.get<Agence[]>(`${this.apiServerUrl}/agence/all`);
  }

  public getAgenceById(id: number): Observable<Agence> {
    return this.http.get<Agence>(`${this.apiServerUrl}/agence/find/${id}`);
  }

  public addAgence(agence: Agence): Observable<Agence> {
    return this.http.post<Agence>(`${this.apiServerUrl}/agence/add`, agence);
  }

  public updateAgence(agence: Agence): Observable<Agence> {
    return this.http.put<Agence>(`${this.apiServerUrl}/agence/update`, agence);
  }

  public deleteAgence(agenceId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/agence/delete/${agenceId}`);
  }
}
