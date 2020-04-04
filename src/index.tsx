import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title/Title';
import './global.css';
import Subtitle from './components/Subtitle/Subtitle';
import Button from './components/Button/Button';
import Loading from './components/Loading/Loading';
import Order from './components/Order/Order/Order';
import Divider from './components/Divider/Divider';
import Input from './components/Input/Input';

class App extends React.Component<{}, {}> {
  render(){
    return (
      <>
        <Title title="Teste de titulo" />
        <Subtitle subtitle="Teste de Subtitulo" />
        <Button onButtonClick={console.log}>
          sadsadsadsa
        </Button>
        <Loading />
        <Order title="Objeto entrega ao destinatário" date="13/12/2019 ás 12:00" location="Vila Olímpia" />
        <Divider width="60%" />
        <Input onInputChanged={console.log} placeholder="Digite o código de rastreio" />
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));