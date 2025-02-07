const { getMovingAverage } = require("./tradingBot");
const Binance = require("node-binance-api");

jest.mock("node-binance-api");

describe("Trading Bot", () => {
  beforeEach(() => {
    Binance.mockClear();
  });

  test("calculates moving average correctly", async () => {
    const mockCandlesticks = [
      [null, null, null, null, "10"],
      [null, null, null, null, "20"],
      [null, null, null, null, "30"]
    ];
    Binance.prototype.candlesticks.mockResolvedValue(mockCandlesticks);

    const ma = await getMovingAverage("BTCUSDT", "1h", 3);
    expect(ma).toBe(20);
  });
});