class OrderSteps {
  locale: string;
  status: string;
  observation?: string;
  trackedAt: Date;

  constructor(
    locale: string,
    status: string,
    observation: string,
    trackedAt: Date
  ) {
    this.locale = locale;
    this.status = status;
    this.observation = observation;
    this.trackedAt = trackedAt;
  }

  static fromJSON(data: any): OrderSteps {
    return new OrderSteps(
      data.locale,
      data.status,
      data.observation,
      new Date(data.trackedAt)
    );
  }
}

export default OrderSteps;