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
            hasItemsForSale: true, // Add this property
          },
          { id: "2012", title: "Rentals", hasItemsForSale: false }, // Add this property
          // Add more subcategories as needed
        ],
      },
      { id: "202", title: "Site Protection", hasItemsForSale: false }, // Add this property
      { id: "203", title: "Demolition of exteriors", hasItemsForSale: false }, // Add this property
      { id: "204", title: "Demolition of interiors", hasItemsForSale: false }, // Add this property
      { id: "205", title: "Construction of exteriors", hasItemsForSale: false }, // Add this property
      { id: "206", title: "Construction of interiors", hasItemsForSale: false }, // Add this property
      { id: "207", title: "General", hasItemsForSale: false }, // Add this property
    ],
  },
];
