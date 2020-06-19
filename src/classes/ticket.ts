import { I_TicketBasket } from "../interfaces";

export default class Ticket {
  static add(field: I_TicketBasket) {
    if (localStorage.getItem("ticket")) {
      const data = JSON.parse(localStorage.getItem("ticket") as string);
      if (data.tickets) {
        for (const [key, value] of Object.entries(field.tickets)) {
          if (field.tickets[key] == data.tickets[key]) {
            delete data.tickets[key];
          } else {
            data.tickets[key] = value;
          }
        }
        localStorage.setItem("ticket", JSON.stringify(data));
      } else {
        localStorage.setItem("ticket", JSON.stringify({ ...data, ...field }));
      }
    } else {
      localStorage.setItem("ticket", JSON.stringify(field));
    }
  }

  static count(): number | string {
    if (localStorage.getItem("ticket")) {
      const data = JSON.parse(localStorage.getItem("ticket") as string);
      if (data.tickets) {
        return (Object.keys(data.tickets).length * 5).toFixed(2);
      }
    }
    return 0;
  }
}
