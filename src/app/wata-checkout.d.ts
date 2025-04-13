interface WataCheckout {
  validate: (cardData: {
    number: string;
    expirationMonth: number;
    expirationYear: number;
    cvv: string;
    cardHolderName: string;
  }) => { [key: string]: string } | null;
  encrypt: (cardData: {
    number: string;
    expirationMonth: number;
    expirationYear: number;
    cvv: string;
    cardHolderName: string;
  }) => Promise<string>;
  getDeviceData: () => unknown;
}

interface Window {
  WataCheckout: () => WataCheckout;
}
