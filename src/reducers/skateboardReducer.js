const INITIAL_STATE = [
  {
    id: 1,
    title: 'decks',
    routeName: 'decks',
    items: [
      {
        id: 1,
        name: 'Deck Baker Brand Logo Blk 8,3875"',
        imageUrl:
          'https://www.californiaskateshop.pl/pol_pm_Blat-Baker-Brand-Logo-Blk-8-3875-25892_2.jpg',
        price: 86,
      },
      {
        id: 2,
        name: 'Deck Baker Brand Logo DD Red Foil 8.25"',
        imageUrl:
          'https://www.californiaskateshop.pl/pol_pl_Blat-Baker-Brand-Logo-DD-Red-Foil-8-25-16404_1.jpg',
        price: 86,
      },
      {
        id: 3,
        name: 'Deck Baker SB Ribbon Grey Veneer 8.475"',
        imageUrl:
          'https://www.californiaskateshop.pl/pol_pl_Blat-Baker-SB-Ribbon-Grey-Veneer-8-475-25886_1.jpg',
        price: 86,
      },
      {
        id: 4,
        name: 'Deck Baker TP Ribbon Green Veneer 8.5"',
        imageUrl:
          'https://www.californiaskateshop.pl/pol_pl_Blat-Baker-TP-Ribbon-Green-Veneer-8-5-25884_1.jpg',
        price: 86,
      },
      {
        id: 5,
        name: 'Deck Baker TP Menace 8.125"',
        imageUrl:
          'https://www.californiaskateshop.pl/pol_pl_Blat-Baker-TP-Menace-8-125-25881_1.jpg',
        price: 86,
      },
      {
        id: 6,
        name: 'Deck Baker KL Barry 8.5"',
        imageUrl:
          'https://www.californiaskateshop.pl/pol_pm_Blat-Baker-KL-Barry-8-5-25574_1.jpg',
        price: 86,
      },
      {
        id: 7,
        name: 'Deck Deathwish JF Big Boy Foy 8.25"',
        imageUrl:
          'https://www.californiaskateshop.pl/pol_pm_Blat-Deathwish-JF-Big-Boy-Foy-8-25-25857_2.jpg',
        price: 86,
      },
      {
        id: 8,
        name: 'Deck Deathwish PD Nine Lives 8.5"',
        imageUrl:
          'https://www.californiaskateshop.pl/pol_pm_Blat-Deathwish-PD-Nine-Lives-8-5-25835_1.jpg',
        price: 86,
      },
    ],
  },
];

export const skateboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
