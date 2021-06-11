import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agent } from '../interfaces/Agent';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(`${this.apiServerUrl}/agent/all`);
  }

  public addAgent(agent: Agent): Observable<Agent> {
    return this.http.post<Agent>(`${this.apiServerUrl}/agent/add`, agent);
  }

  public updateAgent(agent: Agent): Observable<Agent> {
    return this.http.put<Agent>(`${this.apiServerUrl}/agent/update`, agent);
  }

  public deleteAgent(agentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/agent/delete/${agentId}`);
  }
}
