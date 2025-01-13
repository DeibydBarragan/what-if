export const StoriesData = [
  {
    id: 1,
    title: "The Big Move",
    description: "You've just moved to a new city and you're looking for a place to live. You find a great apartment, but it's a little out of your price range. What do you do?",
    userId: 1,
    cards: [
      {
        id: 1,
        content: "You decide to take the apartment and cut back on other expenses.",
      },
      {
        id: 2,
        content: "You decide to keep looking for a more affordable place.",
      },
      {
        id: 3,
        content: "You decide to move back home and save up for a better place.",
        whatIfs: [
          {
            id: 1,
            title: "What if you take the apartment and cut back on other expenses?",
            description: "You find that you're able to afford the apartment and still have some money left over for other things.",
            userId: 3,
            cards: [
              {
                id: 1,
                content: "You're able to afford the apartment and still have some money left over for other things.",
              },
              {
                id: 2,
                content: "You find that you're able to afford the apartment and still have some money left over for other things.",
                whatIfs: [
                  {
                    id: 1,
                    title: "What if you take the apartment and cut back on other expenses?",
                    description: "You find that you're able to afford the apartment and still have some money left over for other things.",
                    userId: 3,
                    cards: [
                      {
                        id: 1,
                        content: "You're able to afford the apartment and still have some money left over for other things.",
                      },
                      {
                        id: 2,
                        content: "You find that you're able to afford the apartment and still have some money left over for other things.",
                      }
                    ],
                  },
                ]
              },
              {
                id: 3,
                content: "You're able to afford the apartment and still have some money left over for other things.",
              }
            ]
          }
        ]
      }
    ],
  },
]