import React, { useEffect, useState } from 'react';
import Subtitle from './components/Subtitle/Subtitle';
import FlexRow from './components/StructureComponents/FlexRow/FlexRow';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import ContentWrapper from './components/ContentWrapper/ContentWrapper';
import Spacer from './components/Spacer/Spacer';
import TreckoHttpImpl from './core/http/impl/TreckoHttpImpl';
import TreckoRepositoryImpl from './core/repositories/track/impl/TreckoRepositoryImpl';
import Loading from './components/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import Title from './components/Title/Title';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
  const treckoHttp = new TreckoHttpImpl();
  const treckoRepository = new TreckoRepositoryImpl(treckoHttp);

  const [value, setValue] = useState('');
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  const buttonClickedHandler = async () => {
    setLoading(true);
    setValue('');

    try {
      const { data } = await treckoRepository.track(value);
      
      setOrder(data);

      setLoading(false);
    } catch(e){
      setLoading(false);
      toast.error('Código inválido ou incorreto');
    }
  }

  return (
    <ContentWrapper>
      <>
        <ToastContainer
          className='toast-container'
          toastClassName="dark-toast" />

        <Title title="TRECKO" />

        <Subtitle subtitle="Quer saber onde está sua encomenda? É bem simples,
          basta inserir o código de rastreio logo abaixo e clicar
          no botão." />

          <FlexRow style={{ margin: "70px 0" }}>
            <>
              <Input 
                placeholder="Digite o código de rastreio" 
                value={value}
                onInputChanged={e => setValue(e.target.value)}/>

              <Spacer verticalSpace="30px" horizontalSpace="30px" />

              <Button onButtonClick={buttonClickedHandler}>
                Rastrear
              </Button>
            </>
          </FlexRow>

          {loading ? <Loading /> : null}
      </>
    </ContentWrapper>
  )
}

export default App;