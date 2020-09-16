class CardItem extends HTMLElement {
  set detail(detail) {
    this._detail = detail;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card-item">
              <div class="image" style='background-image: url(${this._detail.poster_path});'></div>
              <div class="div desc">
                <h3>${this._detail.title}</h3>
                <p>${this._detail.overview}</p>
                <small>
                ${this._detail.release_date}
                </small>
              </div>
            </div>
    `;
  }
}

customElements.define('card-item', CardItem);