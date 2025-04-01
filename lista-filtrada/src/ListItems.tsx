export default function ListItems({ itemsToShow }: { itemsToShow: string[] }) {

  return (
    <div className="d-flex flex-column mt-3">
      {
        itemsToShow.length ? itemsToShow.map((item, index) => (<span key={item}> { item }{ index === (itemsToShow.length - 1) ? '.' : ',' } </span>)) : <p>Sem items</p>
      }          
    </div>
  )
}