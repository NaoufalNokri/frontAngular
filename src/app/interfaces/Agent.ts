import {Agence} from './Agence';

export interface Agent{
    id: number;
    nom: string;
    prenom: string;
    email: string;
    tele: string;
    login: string;
    password: string;
    agence: Agence;

}