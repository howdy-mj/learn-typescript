interface Product13 {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product13[]> {
  // ...
}

// 특정 값만 필요한 경우가 많음
// function displayProductDetail(shoppingItem: {
//   id: number;
//   name: string;
//   price: number;
// }) {}

type ShoppingItem = Pick<Product13, 'id' | 'name' | 'price'>;
function displayProductDetail(
  shoppingItem: Pick<Product13, 'id' | 'name' | 'price'>
) {}
