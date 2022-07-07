import React from "react";
import Api from "../utils/Api";
import Card from "./Card";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userDescription: '',
      userAvatar: '',
      cards: [],
    }
  }

  componentDidMount() {
    Api.getUserInfoFromServer()
      .then(res =>
        this.setState({
          userName: res.name,
          userDescription: res.about,
          userAvatar: res.avatar,
        })
      );
    Api.getCardsFromServer()
      .then(res =>
        this.setState({
          cards: res,
        })
      );
  }

  render() {
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__list">
            <a
              onClick={this.props.onEditAvatar}
              className="profile__avatar"
              style={{ backgroundImage: `url(${this.state.userAvatar})` }} />
            <div className="profile__info">
              <div className="profile__title-info">
                <h1 className="profile__title">{this.state.userName}</h1>
                <button
                  onClick={this.props.onEditProfile}
                  className="profile__edit-button"
                  type="button" />
              </div>
              <h2 className="profile__subtitle">{this.state.userDescription}</h2>
            </div>
          </div>
          <button
            onClick={this.props.onAddPlace}
            className="profile__add-photo-button"
            type="button" />
        </section>
        <section className="photo-grid">
          <ul className="photo-grid__cards">
            {this.state.cards.map((item) => (
              <Card
                key={item._id}
                onCardClick={this.props.onCardClick}
                card={item} />
            ))
            }
          </ul>
        </section>
      </main >
    )
  }
}

export default Main;
