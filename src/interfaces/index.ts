import { RouteComponentProps } from "react-router";

export interface movieItems {
  title: string;
  cover: string;
  genre: string;
  description: string;
  stars: string;
}

export interface I_Movie {
  title: string;
  cover: string[];
}

export interface I_ListOfMovies {
  trending: { [key: string]: movieItems };
  new: { [key: string]: movieItems };
}

export interface I_CardMovie
  extends RouteComponentProps<{ title: string; category: string }> {}

export interface I_TicketBasket {
  days: string;
  time: string;
  tickets: { [key: string]: {} };
}

export interface I_TicketContext {
  rerenderCountOfTickets: (k: number) => void;
}
