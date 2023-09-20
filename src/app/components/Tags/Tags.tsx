interface TagsProps {
  label: string
}
export function Tags({ label }: TagsProps) {
  return (
    <button className="text-title border-Title border rounded-full  transition duration-300 px-2 py-1 hover:text-arrow hover:border-arrow">
      {label}
    </button>
  )
}
