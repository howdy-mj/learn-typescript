interface Product13 {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product13[]> {
  // ...
}

// 특정 값만 필요한 경우가 많음
// function displayProductDetail(shoppingItem: {
//   id: number;
//   name: string;
//   price: number;
// }) {}

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product13, 'id' | 'name' | 'price'>;
function displayProductDetail(
  shoppingItem: Pick<Product13, 'id' | 'name' | 'price'>
) {}

type UpdateProduct = Partial<Product13>;
// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: Partial<Product13>) {}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile13 {
  username: string;
  email: string;
  profilePhotoUrl: string;
}
// interface UserProfileUpdate13 {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1
type UserProfileUpdate13_1 = {
  username?: UserProfile13['username'];
  email?: UserProfile13['email'];
  profilePhotoUrl?: UserProfile13['profilePhotoUrl'];
};

// #2
// Mapped Type
type UserProfileUpdate13_2 = {
  [p in 'username' | 'email' | 'photoPhoroUrl']?: UserProfile13[p];
};
type UserProfileKeys = keyof UserProfile13;

// #3
type UserProfileUpdate13_3 = {
  [p in keyof UserProfile13]?: UserProfile13[p];
};

// #4
type Subset<T> = {
  [p in keyof T]?: T[p];
};
