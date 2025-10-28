import UserHomeProductCard from './UserHomeProductCard'

export default function UserHomeProductRow({rowItems}) {
  return (
    <div className=' grid grid-cols-2 gap-2 mr-7 mt-7'>
      {rowItems.map((product) => (
        <UserHomeProductCard
          key={product.id}
          product={product}
          />
      ))}
    </div>
  )
}
