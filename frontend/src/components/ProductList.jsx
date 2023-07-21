 

const ProductList = ({product ,handleAdd,disabled}) => {
  return (
    <div className="product-container flex flex-col px-4 py-6 m-4 w-[230px] border-gray-300 rounded-lg" key={product.id}>
              <div className="h-full">
                <div className="img">
                  <img src={product.image_link} className="object-cover w-full h-[150]" alt={product.brand} />
                  <p>name: {product.brand}</p>
                </div>
              </div>
              <p className="mt-4 text-red-900">{product.price}$</p>
              <button onClick={() => handleAdd(product)} disabled={disabled} className="text-center text-white text-2xl rounded-lg bg-green-500 hover:bg-green-700">Buy</button>
            </div>
  )
}

export default ProductList