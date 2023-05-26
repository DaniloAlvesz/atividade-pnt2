import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonRadioGroup,
  IonRadio,
  IonSelect,
  IonSelectOption,
  IonButton,
} from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [uf, setUf] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Dados do usuário:', { name, cpf, birthdate, gender, uf });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulário</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Formulário</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <IonItem>
              <IonLabel position="floating">Nome</IonLabel>
              <IonInput
                type="text"
                value={name}
                onIonChange={(e) => setName(e.detail.value!)}
                required
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">CPF</IonLabel>
              <IonInput
                type="text"
                value={cpf}
                onIonChange={(e) => setCpf(e.detail.value!)}
                required
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Data de Nascimento</IonLabel>
              <IonInput
                type="date"
                value={birthdate}
                onIonChange={(e) => setBirthdate(e.detail.value!)}
                required
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Gênero</IonLabel>
              <IonRadioGroup
                value={gender}
                onIonChange={(e) => setGender(e.detail.value)}
              >
                <IonItem>
                  <IonLabel>Feminino</IonLabel>
                  <IonRadio slot="start" value="feminino" />
                </IonItem>
                <IonItem>
                  <IonLabel>Masculino</IonLabel>
                  <IonRadio slot="start" value="masculino" />
                </IonItem>
                <IonItem>
                  <IonLabel>Não binário</IonLabel>
                  <IonRadio slot="start" value="nao-binario" />
                </IonItem>
              </IonRadioGroup>
            </IonItem>

            <IonItem>
              <IonLabel>UF</IonLabel>
              <IonSelect
                value={uf}
                onIonChange={(e) => setUf(e.detail.value)}
              >
                <IonSelectOption value="AC">Acre</IonSelectOption>
                <IonSelectOption value="AL">Alagoas</IonSelectOption>
                <IonSelectOption value="AP">Amapá</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonButton expand="full" type="submit">
              Enviar
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
