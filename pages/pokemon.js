import React, { Component } from 'react';

class pokemon extends Component {
  static async getInitialProps({ query }) {
    let namePokemon = query.name;
    let req = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
    let { sprites, name, types, abilities } = await req.json();
    return { sprites, name, types, abilities };
  }

  render() {
    const { sprites, name, types, abilities } = this.props;
    return (
      <div>
        <header>
          <img src="../static/logo.png" alt="logo" />
        </header>

        <div className="banner">
          <img src={sprites.front_default} alt="sprite" />
        </div>

        {abilities.length > 0 && (
          <div>
            <h2>Habilidades</h2>
            <div className="abilities">
              {abilities.map((ability, index) => (
                <div key={index}>
                  <div className="ability">
                    <h2> - {ability.ability.name}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <style jsx>{`
          header {
            color: #fff;
            background: #ef5350;
            padding: 15px;
            text-align: center;
          }

          header img {
            width: 200px;
          }

          .banner {
            width: 100%;
            background-color: #757f9d;
            display: flex;
            justify-content: center;
          }

          .banner img {
            width: 150px;
          }

          .abilities {
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }

          a.ability {
            display: block;
            margin-bottom: 0.5em;
            color: #333;
            text-decoration: none;
          }

          h2 {
            padding: 15px;
            font-size: 22px;
            font-weight: 600;
            margin: 0;
            text-align: center;
          }
        `}</style>

        <style jsx global>{`
          body {
            margin: 0;
            font-family: system-ui;
            background: white;
          }
        `}</style>
      </div>
    );
  }
}

export default pokemon;
