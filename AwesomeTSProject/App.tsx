import React from 'react';
import {SafeAreaView, TextInput, Button} from 'react-native';

const App: React.FC<() => {}> = () => {
  return (
    <SafeAreaView>
      <TextInput placeholder="Titre de la chanson" />
      <Button title="Rechercher" onPress={() => {}} />
    </SafeAreaView>
  );
};

export default App;
