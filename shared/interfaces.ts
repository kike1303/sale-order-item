export interface ProductDetail {
  name: string;
  description: string;
  image: string;
  quantity: number;
  price: number;
  id?: number;
}

export interface ProductModalProps {
  product: ProductDetail | null;
  onClose: () => void;
  onEdit: (product: ProductDetail) => void;
  onDelete: (product: ProductDetail) => void;
}

export interface ProductEditProps {
  isEditing?: boolean;
  productToEdit?: ProductDetail;
}
