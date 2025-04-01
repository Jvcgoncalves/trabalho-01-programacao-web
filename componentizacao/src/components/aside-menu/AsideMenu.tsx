import AsideItems from "./AsideItems"

export default function AsideMenu({ classes }: { classes: string }) {
  const menus = [
    {
      label: "Item"
    },
    {
      label: "Item"
    },
    {
      label: "Item"
    },
    {
      label: "Item"
    },
    {
      label: "Item"
    },
  ]
  
  console.log(menus)
  
  return <div className={classes}>
    {
      menus.map((item, index) => <AsideItems key={item.label + index} label={item.label + ` ${index}`} />)
    }
  </div>
}