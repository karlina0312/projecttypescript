import axios from "axios";

export const PRODUCTS_URL = "api/products";

// CREATE =>  POST: add a new product to the server
export function createProduct(product: any) {
  return axios.post(PRODUCTS_URL, { product });
}

// READ
export function getAllProducts() {
  return axios.get(PRODUCTS_URL);
}

export function getProductById(productId: any) {
  return axios.get(`${PRODUCTS_URL}/${productId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findProducts(queryParams: any) {
  return axios.post(`${PRODUCTS_URL}/find`, { queryParams });
}

// UPDATE => PUT: update the procuct on the server
export function updateProduct(product: { id: any; }) {
  return axios.put(`${PRODUCTS_URL}/${product.id}`, { product });
}

// UPDATE Status
export function updateStatusForProducts(ids: any, status: number) {
  return axios.post(`${PRODUCTS_URL}/updateStatusForProducts`, {
    ids,
    status
  });
}

// DELETE => delete the product from the server
export function deleteProduct(productId: any) {
  return axios.delete(`${PRODUCTS_URL}/${productId}`);
}

// DELETE Products by ids
export function deleteProducts(ids: any) {
  return axios.post(`${PRODUCTS_URL}/deleteProducts`, { ids });
}
