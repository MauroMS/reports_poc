export interface ReturnedUnit {
  dateReturned: Date;
  siteId: number;
  siteName: string;
  orderId: number;
  departmentId: number;
  departmentName: string;
  sku: number;
  styleId: number;
  itemDescription: string;
  eanCode: number;
  reason: string;
  quantityReturned: number;
  totalPurchasePrice: number;
  currency: number;
}
