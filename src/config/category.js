export default [
    {
      id: 0,
      categoryName: "Men",
      categoryAlias: "men",
      iconName: "human-male",
      subCategories: [
          {
              subCategoryName: "Brands",
              subCategoryAlias: "men-brands"
          },
          {
              subCategoryName: "Shoes",
              subCategoryAlias: "men-shoes",
              subCategoriesTwo: [
                  {
                      subCategoryTwoName: "Casual",
                      subCategoryTwoAlias: "men-shoes-casual"
                  },
                  {
                      subCategoryTwoName: "Sports",
                      subCategoryTwoAlias: "men-shoes-sports"
                  },
                  {
                      subCategoryTwoName: "Formal",
                      subCategoryTwoAlias: "men-shoes-formal"
                  },
                  {
                      subCategoryTwoName: "Trek",
                      subCategoryTwoAlias: "men-shoes-trek"
                  }
              ]
          },
          {
              subCategoryName: "Inner Wear",
              subCategoryAlias: "men-innerwear",
              subCategoriesTwo: [
                  {
                      subCategoryTwoName: "Underwear",
                      subCategoryTwoAlias: "men-innerwear-underwear"
                  },
                  {
                      subCategoryTwoName: "Vest",
                      subCategoryTwoAlias: "men-innerwear-vest"
                  }
              ]
          },
          {
              subCategoryName: "Jeans",
              subCategoryAlias: "men-jeans",
          },
      ]
    },
    {
      id: 1,
      categoryName: "Women",
      categoryAlias: "women",
      iconName: "human-female",
      subCategories: [
          {
              subCategoryName: "Brands",
              subCategoryAlias: "women-brands"
          },
          {
              subCategoryName: "Sandals",
              subCategoryAlias: "women-sandals"
          },
          {
              subCategoryName: "Makeup",
              subCategoryAlias: "women-makeup"
          },
          {
              subCategoryName: "Cloths",
              subCategoryAlias: "women-cloths"
          },
      ]
    },
    {
      id: 2,
      categoryName: "Kids",
      categoryAlias: "kids",
      iconName: "human-child"
    },
    {
      id: 3,
      categoryName: "Home & Living",
      categoryAlias: "home-living",
      iconName: "home"
    }
]
