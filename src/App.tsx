import React from 'react';
import Title from './components/Title/Title';
import Subtitle from './components/Subtitle/Subtitle';
import FlexRow from './components/StructureComponents/FlexRow/FlexRow';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import ContentWrapper from './components/ContentWrapper/ContentWrapper';
import Spacer from './components/Spacer/Spacer';

const App = _ => {
  return (
    <ContentWrapper>
      <>
        <Title title="TRECKO" />

        <Subtitle subtitle="Quer saber onde está sua encomenda? É bem simples,
          basta inserir o código de rastreio logo abaixo e clicar
          no botão." />

          <FlexRow style={{ margin: "70px 0" }}>
            <>
              <Input 
                placeholder="Digite o código de rastreio" 
                onInputChanged={console.log}/>

              <Spacer horizontalSpace="30px" />

              <Button onButtonClick={console.log}>
                Rastrear
              </Button>
            </>
          </FlexRow>
      </>
    </ContentWrapper>
  )
}

export default App;