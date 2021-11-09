import React from 'react';
import './App.css';
import Card from './Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
      dog: {},
      carregando: true,
    };
    this.adicionar = this.adicionar.bind(this);
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  async fetchDog() {
    this.setState({ carregando: true },
      async () => {
        const f = await (await fetch('https://dog.ceo/api/breeds/image/random')).json();
        this.setState({
          dog: f.message,
          carregando: false,
        });
      });
  }

  adicionar() {
    this.setState(({ dogs, dog }) => ({
      dogs: [...dogs, dog],
    }));
    this.fetchDog();
  }

  render() {
    const { carregando, dog, dogs } = this.state;
    console.log(dogs);
    return (
      <section>
        <h1>Dog Image</h1>
        { dogs.length ? dogs.map((i, x) => (<Card key={ x } dog={ i } />)) : '' }
        { carregando ? <p>Carregando...</p> : <Card dog={ dog } /> }
        <button
          disabled={ carregando }
          type="button"
          onClick={ this.adicionar }
        >
          Adicionar
        </button>
      </section>
    );
  }
}

export default App;
