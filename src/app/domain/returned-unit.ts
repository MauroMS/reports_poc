export interface ReturnedUnit {
  dateReturned: Date;
  siteId: number;
  orderId: number;
  departmentId: number;
  department: string;
  sku: number;
  styleId: number;
  itemDescription: string;
  eanCode: number;
  reason: string;
  quantityReturned: number;
  totalPurchasePrice: number;
  currency: number;
}