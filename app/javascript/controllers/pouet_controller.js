import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ 'player' ]

  pouet(event) {
    this.playerTarget.play()
    event.target.classList.add('poueting')
    setTimeout(() => {
      event.target.classList.remove('poueting')
    }, 1000)
  }
}
