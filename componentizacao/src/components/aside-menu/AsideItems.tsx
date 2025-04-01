export default function AsideItems({ label }: { label: string }) {
  return <div className="menu bg-danger my-3 px-3 py-4 rounded-3 text-white">
    { label }
  </div>
}