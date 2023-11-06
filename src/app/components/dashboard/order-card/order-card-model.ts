export interface OrderCardModel {
  id: string;
  name: string;
  product: string;
  delivery_date: string;
  status: string;
  tracking_no: string;
  shipping: boolean;
  [key: string]: any;
}
export interface ColumnModel {
    name : string,
    columnDef : string
}