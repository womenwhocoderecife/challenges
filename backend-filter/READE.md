## Desenvolver filtros para uma API

Desenvolver uma rest API que usa a [API](https://run.mocky.io/v3/e7aa564f-6863-435b-a8b0-67870ca91c02) e baseado no resultado filtra os dados de acordo com os parâmetros passados pela requisição HTTP.

Os parâmetros podem ser:

- name
- code
- date
- weight
- height
- width

Lembrando que podemos passar mais de um parâmetro na requisição

Segue um exemplo de requisição buscando a data: **05/10/2016**

**Request:**

```jsx

GET http://localhost:8080/item?date=2021-10-01

```

**Response:**

```jsx
[
  {
    name: "Celular",
    code: "1",
    date: "2021-10-01T14:30:37.040Z",
    dimension: {
      weight: 1,
      height: 5,
      width: 2,
    },
  },
  {
    name: "Tablet",
    code: "5",
    date: "2021-10-01T14:30:37.040Z",
    dimension: {
      weight: 5,
      height: 3,
      width: 3,
    },
  },
];
```

## Atenção

O serviço deve seguir os seguintes requisitos:

- Pode ser feito em qualquer linguagem
- Pode usar qualquer framework
- O código deve estar bem organizado
