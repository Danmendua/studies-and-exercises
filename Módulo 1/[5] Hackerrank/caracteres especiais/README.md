Criar um script para purificar caracteres especiais de frases.

## 
A purificação consiste em retirar os caracteres especiais contidos no nome como exemplificado abaixo:

| Dado corrompido | Dado purificado   |
| -------- | ------ |
| *Canis %lupus )familiaris   | Canis lupus familiaris |
| Felis) silvestris *catus&   | Felis silvestris catus |
| $Ailuropoda@ melanoleuca!   | Ailuropoda melanoleuca |

## Input Format

A entrada será sempre uma string representando um nome corrompido com alguns dos seguintes caracteres !@#$%&*().

## Output Format

A saída deverá ser sempre uma string representando o nome purificado sem os seguinte caracteres especiais !@#$%&*().