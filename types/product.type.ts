interface TypeProductContext {
  children: React.ReactNode;
}

interface AddProductType {
  onClick: React.MouseEventHandler;
}

type Category = {
  created_at: string;
  description: string;
  id: number;
  is_active: boolean;
  name: string;
  update_at: string;
};

type Product = {
  created_at: string;
  description: string;
  id: number;
  is_active: boolean;
  minimum_stock: number;
  name: string;
  purchase_price: number;
  sale_price: number;
  update_at: string;
  category: Category[] | Category | number;
};

export type { TypeProductContext, AddProductType, Product };
