export default class Story {
  constructor(id, title, description, userId, cards) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.userId = userId;
    this.cards = cards
  }

  async getCardById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const card = this.cards.find(card => card.id === id)
        resolve(card)
      }, 1000)
    })
  }

  async getCards() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.cards)
      }, 1000)
    })
  }

  async getUserName() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('John Doe')
      }, 1000)
    })
  }
}