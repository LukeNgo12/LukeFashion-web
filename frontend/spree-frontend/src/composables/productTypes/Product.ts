export interface Product {
  id: number;
  name:string;
  available_on: Date;
  deleted_at: Date;
  slug: string,
  meta_description: string;
  meta_keywords: string;
  tax_category_id: number;
  shipping_category_id: number;
  created_at: Date;
  updated_at: Date;
  promotionable: number;
  meta_title: string;
  discontinue_on: Date;


}
