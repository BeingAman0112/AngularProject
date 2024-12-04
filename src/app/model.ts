export interface customer{
  fullName : string;
  email : string;
  number : number;
  age : number;
  DateofBirth : number;
  gender : string;
  terms ?: boolean;
  rating : number;
}
export interface products{
  productname : string;
  email : string;
  price : number;
  purchaseDate : Date;
  Quantity : number;
  acceptNews : boolean;
}




export interface Product {
  ProductID: number;
  ProductName: string;
  SupplierID?: number;
  CategoryID?: number;
  QuantityPerUnit?: string;
  UnitPrice: number;
  UnitsInStock?: number;
  UnitsOnOrder?:number;
  ReorderLevel?: number;
  Discontinued?: boolean;
  Category: {
    CategoryID: number;
    CategoryName: string;
    Description?: string;
  };
}

export interface Order {
  OrderID: number;
  CustomerID: string;
  EmployeeID: number;
  OrderDate: Date;
  RequiredDate: Date;
  ShippedDate: Date;
  ShipVia: number;
  Freight: number;
  ShipName: string;
  ShipAddress: string;
  ShipCity: string;
  ShipRegion: string;
  ShipPostalCode: string;
  ShipCountry: string;
}

// export class Customer {
//   public Id = "";
//   public CompanyName = "";
//   public ContactName = "";
//   public ContactTitle = "";
//   public Address?: string = "";
//   public City = "";
//   public PostalCode? = "";
//   public Country? = "";
//   public Phone? = "";
//   public Fax? = "";
// }

export class Category {
  public CategoryID?: number;
  public CategoryName?: string;
  public Description?: string;
}
export class Items {
  public ID?: string;
  public Product?: string;
  public Quantity?: number;
  public Price?: number;
  public Tax?: number;
  public Total?: number;
}
