import UserHomeProductCard from './UserHomeProductCard'

export default function UserHomeProductRow({rowItems}) {
  return (
    <div className='w-1/2 grid grid-cols-2 gap-4 mr-7'>
      {rowItems.map((product) => (
        <UserHomeProductCard
          key={product.id}
          product={product}
          />
      ))}
    </div>
  )
}
