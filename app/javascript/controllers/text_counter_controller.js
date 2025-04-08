import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "output", "input" ]
  static values = { number: Number, max: { type: Number, default: 280 } }
  
  connect() {
    // Initialize with the max value
    this.numberValue = this.maxValue;
    this.numberValueChanged();
  }

  input(event) {
    const currentLength = event.target.value.length;
    this.numberValue = this.maxValue - currentLength;
  }

  numberValueChanged() {
    if (this.numberValue < 0) {
      this.outputTarget.textContent = "Your post exceeds the character limit.";
    } else if (this.numberValue < 30) {
      this.outputTarget.textContent = `${this.numberValue} characters left.`;
    } else {
      this.outputTarget.textContent = ""; // or any default message when there's plenty of space
    }
  }
}