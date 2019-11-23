import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import GeneroCad from "./pages/generoCad";
import GeneroList from "./pages/generoList";
import LivroList from "./pages/livroList";
import LivroCad from "./pages/livroCad";
import EditoraCad from "./pages/editoraCad";
import EditoraList from "./pages/editoraList";
import AutorCad from "./pages/autorCad";
import AutorList from "./pages/autorList";
import EnderecoCad from "./pages/enderecoCad";
import EnderecoList from "./pages/enderecoList";
import ClienteCad from "./pages/clienteCad";
import ClienteList from "./pages/clienteList";
import EmprestimoCad from "./pages/emprestimoCad";
import EmprestimoList from "./pages/emprestimoList";

const Routes = createAppContainer(
  createDrawerNavigator({
    ListaGenero: {
      screen: GeneroList,
      navigationOptions: {
        drawerLabel: "Lista de genero"
      }
    },
    CadastroGenero: {
      screen: GeneroCad,
      navigationOptions: {
        drawerLabel: "Cadastro de genero"
      }
    },
    ListaEditora: {
      screen: EditoraList,
      navigationOptions: {
        drawerLabel: "Lista de editora"
      }
    },
    CadastroEditora: {
      screen: EditoraCad,
      navigationOptions: {
        drawerLabel: "Cadastro de editora"
      }
    },
    ListaEmprestimo: {
      screen: EmprestimoList,
      navigationOptions: {
        drawerLabel: "Lista de emprestimo"
      }
    },
    CadastroEmprestimo: {
      screen: EmprestimoCad,
      navigationOptions: {
        drawerLabel: "Cadastro de emprestimo"
      }
    },
    ListaAutor: {
      screen: AutorList,
      navigationOptions: {
        drawerLabel: "Lista de autor"
      }
    },
    CadastroAutor: {
      screen: AutorCad,
      navigationOptions: {
        drawerLabel: "Cadastro de autor"
      }
    },
    ListaEndereco: {
      screen: EnderecoList,
      navigationOptions: {
        drawerLabel: "Lista de endereço"
      }
    },
    CadastroEndereco: {
      screen: EnderecoCad,
      navigationOptions: {
        drawerLabel: "Cadastro de endereço"
      }
    },
    ListaCliente: {
      screen: ClienteList,
      navigationOptions: {
        drawerLabel: "Lista de cliente"
      }
    },
    CadastroCliente: {
      screen: ClienteCad,
      navigationOptions: {
        drawerLabel: "Cadastro de cliente"
      }
    },
    ListaLivro: {
      screen: LivroList,
      navigationOptions: {
        drawerLabel: "Lista de livro"
      }
    },
    CadastroLivro: {
      screen: LivroCad,
      navigationOptions: {
        drawerLabel: "Cadastro de livro"
      }
    }
  })
);

export default Routes;
