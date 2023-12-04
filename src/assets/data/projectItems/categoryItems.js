export default [
  {
    id: "1",
    title: "Your Items",
  },
  {
    id: "2",
    title: "Catalog",
    subItems: [
      {
        id: "201",
        title: "Planning",
        subCategories: [
          {
            id: "2011",
            title: "Permits & Planning",
            items: [
              { id: "201101", title: "Item 1", price: "$10.00" },
              { id: "201102", title: "Item 2", price: "$15.00" },
              { id: "201103", title: "Item 3", price: "$20.00" },
              { id: "201104", title: "Item 4", price: "$25.00" },
            ],
          },
          { id: "2012", title: "Rentals" },
          // Add more subcategories as needed
        ],
      },
      { id: "202", title: "Site Protection" },
      { id: "203", title: "Demolition of exteriors" },
      { id: "204", title: "Demolition of interiors" },
      { id: "205", title: "Construction of exteriors" },
      { id: "206", title: "Construction of interiors" },
      { id: "207", title: "General" },
    ],
  },
];
