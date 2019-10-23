import React, { Component } from 'react';
import 'isomorphic-fetch';

class index extends Component {
  static async getInitialProps() {
    let req = await fetch('https://pokeapi.co/api/v2/pokemon');
    let { results: pokemons } = await req.json();
    return { pokemons };
  }

  render() {
    const { pokemons } = this.props;
    return (
      <div>
        <header>
          <img src="../static/logo.png" alt="logo" />
        </header>

        <div className="pokemons">
          {pokemons.map((pokemon, index) => (
            <a className="pokemon" key={index}>
              <h2>{pokemon.name}</h2>
            </a>
          ))}
        </div>

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
          .pokemons {
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          }
          .pokemon {
            background: #3660ab;
            border-radius: 10px;
          }
          .pokemon:hover {
            box-shadow: 1px 0px 2px 3px #b9b1b1;
          }
          a.pokemon {
            display: block;
            margin-bottom: 0.5em;
            color: #333;
            text-decoration: none;
            cursor: pointer;
          }
          h2 {
            padding: 10px;
            font-size: 18px;
            font-weight: 600;
            margin: 0;
            text-align: center;
            color: #ffc91a;
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

export default index;
