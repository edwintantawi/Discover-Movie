class CardItem extends HTMLElement {
  set detail(detail) {
    this._detail = detail;
    this.render();
  }

  render() {
    this.innerHTML = `
    
      <div class="card-item">
        <img class="image" src="https://image.tmdb.org/t/p/w500${this._detail.poster_path}">
        <img src="/src/assets/images/eye.svg" class="view-ico">
      </div>

      `;
  }
}

customElements.define('card-item', CardItem);