import { createContext } from 'react';
import {I_TicketContext} from '../interfaces/';
export const TicketContext = createContext<I_TicketContext>({rerenderCountOfTickets:(k:number)=>{}});