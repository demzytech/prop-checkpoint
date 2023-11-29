import products from '../product'
import ProductCard from './ProductCard'


const ProductList = () => {
    console.log(products)
  return (
    <div className='container'>
        <h1>My Player List</h1>
        <div className='grid'>
            {products.map((item) => (
                <ProductCard
                        key={item.name}
                        name={item.name}
                        nationality ={item.nationality}
                        Desc={item.Desc}
                        image_url={item.image_url}
                        jersey_number={item.jersey_number}
                        age={item.age}
                />
            
            )
              )
               }

        </div>
    </div>
  )
}

export default ProductList;