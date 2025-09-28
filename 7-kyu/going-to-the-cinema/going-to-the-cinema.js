function movie(card, ticket, perc) {
    let n = 0;
    let costA = 0;
    let costB = card;
    let currentTicket = ticket * perc;
    
    while (Math.ceil(costB) >= costA) {
        n++;
        costA = ticket * n;
        costB += currentTicket;
        currentTicket *= perc;
    }
    
    return n;
};
​