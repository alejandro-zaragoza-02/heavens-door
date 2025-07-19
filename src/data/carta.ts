import type { ICategoria } from "../interfaces/Categoria";

export const carta_bar: ICategoria[] = [
  {
    nombre: "PARA_COMPARTIR",
    imagen: "nachos.png",
    productos: [
      {
        nombre: "ENSALADA_NOVA",
        descripcion: "ENSALADA_NOVA_DESC",
        precio: 9,
      },
      {
        nombre: "TABLA_LACON_FETA",
        precio: 10,
        nuevo: true,
      },
      {
        nombre: "SURTIDO_HEAVENS",
        descripcion: "SURTIDO_HEAVENS_DESC",
        precio: 14,
      },
      {
        nombre: "MINI_SURTIDO_HEAVENS",
        descripcion: "SURTIDO_HEAVENS_DESC",
        precio: 9,
      },
      {
        nombre: "NACHOS",
        descripcion: "NACHOS_DESC",
        precio: 10,
      },
      {
        nombre: "NACHOS_STUPENDO",
        descripcion: "NACHOS_STUPENDO_DESC",
        precio: 11,
      },
      {
        nombre: "NACHOS_HEAVEN",
        descripcion: "NACHOS_HEAVEN_DESC",
        precio: 12,
      },
      {
        nombre: "NACHOS_BARBACOA",
        descripcion: "NACHOS_BARBACOA_DESC",
        precio: 12,
        nuevo: true,
      },
    ],
  },
  {
    nombre: "HAMBURGUESAS",
    descripcion: "HB_CON_PAN_BRIOCHE",
    imagen: "burguer.png",
    productos: [
      {
        nombre: "HB_CLASICA_CON_QUESO",
        descripcion: "HB_CLASICA_CON_QUESO_DESC",
        precio: 7.5,
      },
      {
        nombre: "HB_POLLO",
        descripcion: "HB_POLLO_DESC",
        precio: 8,
      },
      {
        nombre: "HB_HEAVENS",
        descripcion: "HB_HEAVENS_DESC",
        precio: 9,
      },
      {
        nombre: "HB_CINECOPAS",
        descripcion: "HB_CINECOPAS_DESC",
        precio: 10,
      },
      {
        nombre: "HB_AMERICANA",
        descripcion: "HB_AMERICANA_DESC",
        precio: 11,
      },
      {
        nombre: "HB_BARBACOA",
        descripcion: "HB_BARBACOA_DESC",
        precio: 11,
      },
      {
        nombre: "HB_SMASH_ZETA",
        descripcion: "HB_SMASH_ZETA_DESC",
        precio: 12,
      },
      {
        nombre: "HB_V_DOBLE",
        descripcion: "HB_V_DOBLE_DESC",
        precio: 12,
        nuevo: true,
      },
    ],
  },
  {
    nombre: "TOSTAS",
    imagen: "tostada.png",
    productos: [
      {
        nombre: "DE_LOMO",
        precio: 4,
      },
      {
        nombre: "DE_LOMO_QUESO_CURADO",
        precio: 4.5,
      },
      {
        nombre: "DE_SOBRASADA_QUESO",
        precio: 4.5,
      },
      {
        nombre: "DE_QUESO_CURADO",
        precio: 4,
      },
      {
        nombre: "DE_MOZZARELLA_TOMATE_OREGANO",
        precio: 5,
      },
      {
        nombre: "DE_JAMON_SERRANO",
        precio: 4,
      },
      {
        nombre: "DE_JAMOM_IBERICO",
        precio: 7,
      },
      {
        nombre: "DE_JAMON_SERRADO_QUESO_CURADO",
        precio: 4.5,
      },
      {
        nombre: "DE_ATUN_TOMATE_ANCHOAS",
        precio: 4.5,
      },
      {
        nombre: "DE_IDIAZABAL",
        precio: 7,
      },
      {
        nombre: "VITTOS",
        descripcion: "VITTOS_DESC",
        precio: 6.5,
      },
    ],
  },
  {
    nombre: "SANDWICHES",
    imagen: "sandwich.png",
    productos: [
      {
        nombre: "SW_MIXTO",
        descripcion: "SW_MIXTO_DESC",
        precio: 3,
      },
      {
        nombre: "SW_DE_POLLO",
        descripcion: "SW_DE_POLLO_DESC",
        precio: 5,
      },
      {
        nombre: "SW_METROPOLIS",
        descripcion: "SW_METROPOLIS_DESC",
        precio: 5,
      },
      {
        nombre: "SW_DE_POLLO_PLUS",
        descripcion: "SW_DE_POLLO_PLUS_DESC",
        precio: 6,
      },
      {
        nombre: "SW_HEAVENS",
        descripcion: "SW_HEAVENS_DESC",
        precio: 7,
        nuevo: true,
      },
    ],
  },
  {
    nombre: "PERRITOS",
    imagen: "perrito.png",
    productos: [
      {
        nombre: "CLASICO",
        descripcion: "CLASICO_DESC",
        precio: 3.5,
      },
      {
        nombre: "HEAVENS",
        descripcion: "HEAVENS_DESC",
        precio: 5,
      },
      {
        nombre: "QUO",
        descripcion: "QUO_DESC",
        precio: 5.5,
      },
    ],
  },
  {
    nombre: "GOFRES",
    imagen: "gofre.png",
    productos: [
      {
        nombre: "SOLO",
        precio: 3,
      },
      {
        nombre: "CON_NATA",
        precio: 3.5,
      },
      {
        nombre: "CON_NOCILLA",
        precio: 3.5,
      },
      {
        nombre: "CON_NOCILLA_NATA",
        precio: 4,
      },
      {
        nombre: "CON_BAYLEYS",
        precio: 4.5,
      },
    ],
  },
];
