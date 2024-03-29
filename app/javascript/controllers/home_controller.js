import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="home"
export default class extends Controller {

  static targets = ["menu","burger"]

  connect() {
  }

  toggle() {
    this.burgerTarget.classList.toggle("is-active")
    this.menuTarget.classList.toggle("is-active")
  }
}
