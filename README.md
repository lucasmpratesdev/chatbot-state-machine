# Sales & Weather Chatbot - State Machine Architecture

## Visão Geral
Chatbot corporativo baseado em máquina de estados que simula um fluxo real de vendas,
com integração a APIs públicas, validação de dados e geração de logs estruturados para BI.

## Arquitetura
- Clean Architecture (Domain, Infra, Chat, Shared)
- Injeção de dependências via Context
- Logger centralizado com Winston
- Providers externos desacoplados

## Fluxo de Atendimento
Start → CEP → Confirma Endereço → Viabilidade → Plano → CPF → Crédito → Resumo

## Observabilidade
- Logs estruturados em JSON
- Eventos de integração externa
- Simulação de latência e falhas

## Como Executar
npm install 

node src/apps/sales-bot/main/index.js
