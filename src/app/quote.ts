export class Quote {
  id: number;
  quote: string;
  type: string;
  order: number;

  getId(): number {
    return this.id;
  }
}
