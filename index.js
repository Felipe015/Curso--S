import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Felipe", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12378945610);
gerente.cadastrarSenha("123");

const cliente = new Cliente ("Alice", 78865436789, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"123");// se colocarmos gerente também funcionará, essa é uma caracteristica de Polimorfismo.
const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456"); 
const clienteEstaLogado = SistemaAutenticacao.login(cliente,"456"); 

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);

