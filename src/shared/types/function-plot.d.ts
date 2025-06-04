import "function-plot";

declare module "function-plot" {
  interface Axis {
    ticks?: number[];
  }

  interface Data {
    size?: number; // 👈 додаємо support для scatter
  }
}
