import React from "react";
import Api from "../utils/Api";

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
            <a onClick={this.props.onEditAvatar} className="profile__avatar" style={{ backgroundImage: `url(${this.state.userAvatar})` }} ></a>
            <div className="profile__info">
              <div className="profile__title-info">
                <h1 className="profile__title">{this.state.userName}</h1>
                <button onClick={this.props.onEditProfile} className="profile__edit-button" type="button"></button>
              </div>
              <h2 className="profile__subtitle">{this.state.userDescription}</h2>
            </div>
          </div>
          <button onClick={this.props.onAddPlace} className="profile__add-photo-button" type="button"></button>
        </section>
        <section className="photo-grid">
          <ul className="photo-grid__cards">
            {this.state.cards.map((item) => {
              return (
                <li className="photo-grid__card">
                  <img className="photo-grid__card-image" src={item.link} />
                  <button className="photo-grid__remove-button"></button>
                  <div className="photo-grid__card-content">
                    <h4 className="photo-grid__card-text">{item.name}</h4>
                    <div className="photo-grid__like-container">
                      <button className="photo-grid__like-button" type="button"></button>
                      <div className="photo-grid__like-counter">{item.likes.length}</div>
                    </div>
                  </div>
                </li>
              )
            })
            }
          </ul>
        </section>
      </main >
    )
  }
}

export default Main;
