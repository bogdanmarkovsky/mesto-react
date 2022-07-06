import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__list">
            <a onClick={this.props.onEditAvatar} className="profile__avatar"></a>
            <div className="profile__info">
              <div className="profile__title-info">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button onClick={this.props.onEditProfile} className="profile__edit-button" type="button"></button>
              </div>
              <h2 className="profile__subtitle">Исследователь океана</h2>
            </div>
          </div>
          <button onClick={this.props.onAddPlace} className="profile__add-photo-button" type="button"></button>
        </section>
        <section className="photo-grid">
          <ul className="photo-grid__cards"></ul>
        </section>
      </main>
    )
  }
}

export default Main;
