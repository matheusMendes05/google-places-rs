matheus.lima (Convidado) Tiago Nascimento da Silva (Convidado) 

Criar um micro serviço WebAPI REST que recebe latitude e longitude e retorna um endereço. Ele pode ser GET ou POST. Se for POST usar o corpo como JSON. { "latitude": "0.01231", "longitude": "0.1312312" } O retorno colocar qualquer campo que retornar na API do Google { "cidade": "xxx", "estado", "xxx", "tipologradouro": "rua", "logradouro": "xpto", "bairro": "xxx" } Verificar na API se está presente uma chave Header chamada X-API-KEY e pode usar a Key ZmKPDqukxhLnpRbJ37tNeDCBCM5t9J para validação O projeto deverá ser entregue no GitHub conforme adicionado ao projeto googleplace. E ele deve ser entregue com o dockerfile para subir direto na nuvem.

Documentação do Google: Serviço Geocoding | Maps JavaScript API | Google Developers Stackoverflow contendo a mesma solicitação: Is it possible to get an address from coordinates using google maps? - Stack Overflow 

Os acessos a API do Google eu já estou providenciando