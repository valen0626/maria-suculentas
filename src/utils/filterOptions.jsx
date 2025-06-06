export const sortOptions = [
{ value: "precioAsc", name: "Precio: menor a mayor" },
  { value: "precioDesc", name: "Precio: mayor a menor" },
  { value: "nombreAsc", name: "Nombre A-Z" },
  { value: "nombreDesc", name: "Nombre Z-A" },]

export const filters = [
  {
    id: 'categoria',
    name: 'Categoría',
    options: [
      { value: 'agaves', label: 'Agaves' },
      { value: 'aloes', label: 'Aloes' },
      { value: 'cactus', label: 'Cactus' },
      { value: 'echeveria', label: 'Echeveria' },
      { value: 'mari-juana', label: 'Marijuana' },
    ],
  },
]
