import { AlgaNews } from "./AlgaNews";

export namespace Payment {
  export type Input = AlgaNews.components['schemas']['PaymentInput'];
  export type PreviewInput = AlgaNews.components['schemas']['PaymentPreviewInput'];
  export type Preview = AlgaNews.components['schemas']['PaymentPreview'];
  export type Detailed = AlgaNews.components['schemas']['PaymentDetailed'];
  export type Summary = AlgaNews.components['schemas']['PaymentSummary'];
  export type Paginated = AlgaNews.components['schemas']['PaymentsPaginated'];
  export type Earnings = AlgaNews.components['schemas']['PaymentEarnings'];
}
