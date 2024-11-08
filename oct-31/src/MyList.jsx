const data = [
  { name: "list item 1", id: 1 },
  { name: "list item 2", id: 2 },
  { name: "list item 3", id: 3 },
]

export default function MyList() {
  return (
    <ul>
      {
        data.map(item =>
          <li key={item.id}>{item.name}</li>)
      }
    </ul>
  )
}