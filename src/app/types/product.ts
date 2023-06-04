type Price = {
    amount: number;
    currency: string;
}

export type Product = {
    id: string;
    active: boolean;
    created_at: EpochTimeStamp;

    price: Price; 

    name: string;
    description: string;
    images: string[];  // URL
}