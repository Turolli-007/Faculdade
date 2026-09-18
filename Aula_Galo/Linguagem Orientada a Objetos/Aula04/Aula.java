import java.util.*;

public class Pessoa {
  private String nome;
  private String cpf;

  public pessoa (String nome, String cpf ) {
    this.nome = nome;
    this.cpf = cpf;
  } 

  public String getNome (){
    return nome;    
  }

  public String getCpf () {
    return cpf;
  }
  
  public void exibrDados (){
    System.out.println("Nome:"  + nome, );
    System.out.println("Cpf:"  + cpf, );
  }

}
