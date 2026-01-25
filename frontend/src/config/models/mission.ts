interface Mission {
    id: string;
    name: string;
    status: 'Active' | 'Completed' | 'Pending';
    startDate: string; // ISO date string
    endDate?: string;  // ISO date string, optional
    description?: string;
}

export type { Mission };