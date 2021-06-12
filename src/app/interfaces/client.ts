import {Agence} from './agence';
import { Compte } from './Compte';

export interface Client {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  tele: string;
  login: string;
  password: string;
  agence: Agence;
  compte: Compte;

}

