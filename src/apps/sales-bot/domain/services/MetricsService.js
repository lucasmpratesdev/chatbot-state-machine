class MetricsService {
  constructor() {
    this.totalSessions = 0;
    this.totalSales = 0;
    this.creditRejected = 0;
    this.plans = {};
  }

  startSession() {
    this.totalSessions++;
  }

  recordSale(plan, creditApproved) {
    if (creditApproved) {
      this.totalSales++;
    } else {
      this.creditRejected++;
    }

    this.plans[plan] = (this.plans[plan] || 0) + 1;
  }

  getMetrics() {
    return {
      totalSessions: this.totalSessions,
      totalSales: this.totalSales,
      creditRejected: this.creditRejected,
      plans: this.plans
    };
  }
}

module.exports = MetricsService;
