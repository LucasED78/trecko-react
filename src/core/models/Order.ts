import OrderSteps from "./OrderSteps";

class Order {
  code: string;
  tracks: [OrderSteps]
  isDelivered: boolean;
  postedAt: Date;
  updatedAt: Date;

  constructor(
    code: string,
    tracks: [OrderSteps],
    isDelivered: boolean,
    postedAt: Date,
    updatedAt: Date
  ) {
    this.code = code;
    this.tracks = tracks;
    this.isDelivered = isDelivered;
    this.postedAt = postedAt;
    this.updatedAt = updatedAt;
  }

  static fromJSON(data: any): Order {
    return new Order(
      data.code,
      data.tracks.map((e: any) => OrderSteps.fromJSON(e)),
      data.isDelivered,
      data.postedAt,
      data.updatedAt
    )
  }
}

export default Order;