import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      
     
      <View style={estilos.barraSuperior}>
        <Text style={estilos.titulo}>Quadro de Tarefas</Text>
        <Text style={estilos.subtitulo}>Gerencie suas atividades</Text>
      </View>

    
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={estilos.quadro}
        contentContainerStyle={estilos.quadroContent}
      >
        
       
        <View style={estilos.coluna}>
          <Text style={estilos.tituloColuna}>A Fazer</Text>
          
          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>Estudar React Native</Text>
            <Text style={estilos.descricaoCartao}>Revisar componentes básicos</Text>
          </View>
          
          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>Fazer exercícios</Text>
            <Text style={estilos.descricaoCartao}>Matemática cap. 5</Text>
          </View>
          
          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>Ler livro</Text>
            <Text style={estilos.descricaoCartao}>História do Brasil</Text>
          </View>
        </View>

        {/* Coluna: Em Progresso */}
        <View style={estilos.coluna}>
          <Text style={estilos.tituloColuna}>Em Progresso</Text>
          
          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>Projeto Mobile</Text>
            <Text style={estilos.descricaoCartao}>App de tarefas</Text>
          </View>
          
          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>Trabalho de Física</Text>
            <Text style={estilos.descricaoCartao}>Relatório pendente</Text>
          </View>
        </View>

        <View style={estilos.coluna}>
          <Text style={estilos.tituloColuna}>Concluído</Text>
          
          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>Prova de Matemática</Text>
            <Text style={estilos.descricaoCartao}>Nota: 9.5</Text>
          </View>
          
          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>Leitura Cap. 1-3</Text>
            <Text style={estilos.descricaoCartao}>História completa</Text>
          </View>
          
          <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>Setup do projeto</Text>
            <Text style={estilos.descricaoCartao}>Expo configurado</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
      

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  barraSuperior: {
    backgroundColor: '#007bff',
    padding: 20,
    paddingTop: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    color: '#e3f2fd',
  },
  quadro: {
    flex: 1,
    paddingVertical: 20,
  },
  quadroContent: {
    paddingHorizontal: 20,
  },
  coluna: {
    width: 280,
    backgroundColor: '#e9ecef',
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    height: '90%',
  },
  tituloColuna: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
  },
  cartao: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  tituloCartao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  descricaoCartao: {
    fontSize: 14,
    color: '#666',
  },
});