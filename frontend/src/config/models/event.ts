export interface Event {
    id: string;
    eventDate: string;
    organization: string;
    moneyRaised: number;
    active: boolean;
    donationsOpen: boolean;
    description: string;
}

export interface EventsSorted {
    active: Event;
    past: {[key: string]: Event[]};
    future: Event[];
}