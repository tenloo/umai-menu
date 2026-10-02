/* UMAI Sushi & Yakitori \u2014 fuente \u00fanica de datos del men\u00fa
 * Origen: "UMAI MENU TABOIDE TIRO Y RETIRO PRINT 111125.pdf"
 * Cambiar un precio aqu\u00ed lo cambia en la web, el QR de mesa y el export a imprenta.
 *
 * img:    URL de la foto del plato. Sin este campo la tarjeta muestra el hueco
 *         marcado "Foto pendiente". Agregar una foto es una sola l\u00ednea:
 *         img: "fotos/umai-roll.jpg"
 *
 * crudo:  true  = lleva pescado/marisco crudo
 *         false = sin crudo (apto para quien no come crudo)
 *         null  = NO CONFIRMADO \u2014 queda fuera del filtro "sin pescado crudo"
 * gluten: viene marcado en el men\u00fa impreso (espiga) y SOLO existe en la secci\u00f3n rolls.
 */

const UMAI = {
  tel: "50432901690",
  telDisplay: "3290-1690",
  lugar: "Plaza Cipreses",
  empaque: { general: 10, rolls: 15 },

  /* Banners de portada. Son piezas tipogr\u00e1ficas, no fotos de producto: el contenido
     sale del men\u00fa impreso, as\u00ed que no promete nada que la cocina no tenga.
     img: opcional, si m\u00e1s adelante se dise\u00f1a un banner con foto. */
  links: {
    facebook: "https://www.facebook.com/umaisushihn",
    instagram: "https://www.instagram.com/umaisushihn/"
  },

  /* tema: fondo del banner (crema, negro, rojo). arte: ilustraci\u00f3n del men\u00fa impreso
     que acompa\u00f1a al banner (koi u olas). */
  promos: [
    { id:"p-best", tema:"crema", arte:"koi", img:"fotos/u27.jpg", kicker:"Combo para compartir", titulo:"Best Sellers",
      sub:"Los 4 rolls favoritos de la casa", precio:1459, goto:"u27",
      incluye:["Umai Roll","Hiroshima Roll","Paris Roll","London Roll","GRATIS: Crispy California"] },
    { id:"p-ramen", tema:"negro", arte:"koi", img:"fotos/r1.jpg", kicker:"Solo s\u00e1bados y domingos", titulo:"Ramen",
      sub:"Panceta o camar\u00f3n", precio:475, goto:"r1",
      incluye:["Caldo de receta japonesa","Huevo marinado","Hongos shiitake","Fideos udon"] },
    { id:"p-bento", tema:"rojo", arte:"olas", img:"fotos/b4.jpg", kicker:"Comida completa", titulo:"Bento Box",
      sub:"4 combinaciones para elegir", precio:525, goto:"b1",
      incluye:["Ensaladas, gyozas y edamames","Sashimi y nigiri","Rolls de la casa","Caja con compartimentos"] },
    { id:"p-yaki", tema:"crema", arte:"olas", img:"fotos/y4.jpg", kicker:"Pincho japon\u00e9s", titulo:"Yakitori",
      sub:"4 pinchitos por orden", precio:312, desde:true, goto:"y1",
      incluye:["Pollo en salsa de naranja","Res en salsa yakiniku","Camar\u00f3n en salsa de maracuy\u00e1","Mixto en salsa teriyaki"] }
  ],

  categorias: [
    { id: "sugerencias", nombre: "Sugerencias del Chef" },
    { id: "uramaki", nombre: "Uramaki \u00b7 Sushi Rolls" },
    { id: "entradas", nombre: "Entradas" },
    { id: "ensaladas", nombre: "Ensaladas" },
    { id: "sushitacos", nombre: "Sushi Tacos" },
    { id: "nigiri", nombre: "Nigiri", nota: "2 porciones de arroz moldeadas, cubiertas de pescado o marisco." },
    { id: "sashimi", nombre: "Sashimi", nota: "4 finos cortes de pescado o marisco crudos." },
    { id: "hosomaki", nombre: "Hosomaki", nota: "Rollo envuelto en alga por fuera, arroz y el marisco de tu elecci\u00f3n adentro." },
    { id: "temaki", nombre: "Temaki", nota: "2 conos en hoja de alga con arroz, aguacate, queso crema y pescado o marisco." },
    { id: "tempura", nombre: "Tempura" },
    { id: "yakitori", nombre: "Yakitori \u00b7 Pincho Japon\u00e9s", nota: "4 pinchitos con arroz sushi, ajonjol\u00ed y cebollina, ba\u00f1ados en su salsa." },
    { id: "bento", nombre: "Bento Box", nota: "Comida tradicional japonesa servida en caja con compartimentos." },
    { id: "arroces", nombre: "Arroces" },
    { id: "poke", nombre: "Poke Bowls", nota: "Sobre base de arroz de sushi, wakame, ajonjol\u00ed, pepino, zanahoria, frijol verde, repollo morado, aguacate, aceite de ajonjol\u00ed, spicy mayo y salsa de anguila." },
    { id: "ramen", nombre: "Ramen", nota: "Servido \u00fanicamente s\u00e1bados y domingos." },
    { id: "noodles", nombre: "Noodles" },
    { id: "kids", nombre: "Kids Menu" },
    { id: "adicionales", nombre: "Adicionales" }
  ],

  items: [
    /* ---------- SUGERENCIAS DEL CHEF ---------- */
    { id: "s1", c: "sugerencias", n: "Gyozas de Camote", p: 289, crudo: false },
    { id: "s2", c: "sugerencias", n: "Tiradito de Salm\u00f3n", p: 389, crudo: true },
    { id: "s3", c: "sugerencias", n: "Montadito de Pulpo", p: 495, crudo: null },
    { id: "s4", c: "sugerencias", n: "Orange Chicken Roll", p: 359, crudo: false },
    { id: "s5", c: "sugerencias", n: "Sake Trufa Roll", p: 425, crudo: true },
    { id: "s6", c: "sugerencias", n: "Ebi Togarashi Roll", p: 395, crudo: null },
    { id: "s7", c: "sugerencias", n: "Salm\u00f3n Teriyaki", p: 495, crudo: false },
    { id: "s8", c: "sugerencias", n: "Res Togarashi", p: 325, crudo: false },
    { id: "s9", c: "sugerencias", n: "Mochis", p: 279, crudo: false, veg: true },

    /* ---------- URAMAKI \u00b7 SUSHI ROLLS ---------- */
    { id: "u1", c: "uramaki", n: "Umai", p: 309, gluten: true, best: true, crudo: false,
      af: "Lechuga escarola empanizada, spicy mayo y salsa anguila.",
      ad: "Camar\u00f3n empanizado, cangrejo, aguacate y queso crema." },
    { id: "u2", c: "uramaki", n: "Haw\u00e1i", p: 344, gluten: true, crudo: false,
      af: "Empanizado con coco y salsa anguila.",
      ad: "Camar\u00f3n, aguacate y queso crema." },
    { id: "u3", c: "uramaki", n: "504", p: 369, gluten: true, crudo: false,
      af: "Ensalada de cangrejo en spicy mayo y salsa de anguila.",
      ad: "Camar\u00f3n tempura, wakame, pepino y queso crema." },
    { id: "u4", c: "uramaki", n: "Mexican", p: 312, gluten: true, picante: true, crudo: false,
      af: "Copado aguacate, rodaja de jalape\u00f1o y spicy mayo.",
      ad: "Camar\u00f3n empanizado, red snapper tempura, queso crema y aguacate." },
    { id: "u5", c: "uramaki", n: "Crispy California", p: 295, gluten: true, crudo: false,
      af: "Crispy y salsa anguila.",
      ad: "Cangrejo, pepino, aguacate y queso crema." },
    { id: "u6", c: "uramaki", n: "Paris", p: 312, gluten: true, best: true, crudo: false,
      af: "Empanizado en tempura y salsa anguila.",
      ad: "Camar\u00f3n empanizado, aguacate y queso crema." },
    { id: "u7", c: "uramaki", n: "Oslo", p: 348, gluten: true, crudo: null,
      af: "Salm\u00f3n fresco flameado y salsa de jengibre.",
      ad: "Camar\u00f3n empanizado, aguacate y queso crema." },
    { id: "u8", c: "uramaki", n: "Sydney", p: 323, gluten: true, crudo: false,
      af: "Empanizado al panko y salsa anguila.",
      ad: "Camar\u00f3n y piel de salm\u00f3n frita." },
    { id: "u9", c: "uramaki", n: "Lisboa", p: 348, crudo: false,
      af: "Copado de aguacate y salsa anguila.",
      ad: "Anguila y pepino." },
    { id: "u10", c: "uramaki", n: "London", p: 312, gluten: true, best: true, crudo: false,
      af: "Empanizado al panko y copado con t\u00e1mpico (pasta de cangrejo).",
      ad: "Cangrejo, aguacate y queso crema." },
    { id: "u11", c: "uramaki", n: "California", p: 264, crudo: false,
      af: "Ajonjol\u00ed.",
      ad: "Cangrejo, pepino, aguacate y queso crema." },
    { id: "u12", c: "uramaki", n: "Philadelphia", p: 307, crudo: true,
      af: "Ajonjol\u00ed.",
      ad: "Salm\u00f3n fresco, aguacate y queso crema." },
    { id: "u13", c: "uramaki", n: "Manhattan", p: 312, crudo: false,
      af: "Copado de cangrejo y spicy mayo.",
      ad: "Queso crema, aguacate y camar\u00f3n." },
    { id: "u14", c: "uramaki", n: "Ibiza", p: 332, crudo: false,
      af: "Zanahoria frita y salsa anguila.",
      ad: "Camar\u00f3n, pl\u00e1tano, aguacate y queso crema." },
    { id: "u15", c: "uramaki", n: "San Francisco", p: 312, crudo: null,
      af: "Masago y spicy mayo.",
      ad: "Camar\u00f3n fresco, crispy, cangrejo y queso crema." },
    { id: "u16", c: "uramaki", n: "Miami", p: 355, crudo: true,
      af: "Salm\u00f3n ahumado, ajonjol\u00ed y salsa de jengibre.",
      ad: "Tuna roja, cebollina y aguacate." },
    { id: "u17", c: "uramaki", n: "Tokyo", p: 332, crudo: false,
      af: "Anguila y salsa anguila.",
      ad: "Cangrejo, pepino, lechuga, aguacate y queso crema." },
    { id: "u18", c: "uramaki", n: "Rainbow", p: 332, crudo: true,
      af: "Salm\u00f3n, tuna roja y copado de aguacate.",
      ad: "Cangrejo, pepino, aguacate y queso crema." },
    { id: "u19", c: "uramaki", n: "Hiroshima", p: 369, best: true, crudo: null,
      af: "Cangrejo en spicy mayo y bacon crispy.",
      ad: "Camar\u00f3n fresco, aguacate y queso crema." },
    { id: "u20", c: "uramaki", n: "Spicy Tuna", p: 328, picante: true, crudo: true,
      af: "Tuna spicy y cebollina.",
      ad: "Aguacate y pepino." },
    { id: "u21", c: "uramaki", n: "Lobster", p: 497, crudo: null,
      af: "Copado carne de langosta.",
      ad: "Camar\u00f3n fresco, cangrejo y aguacate." },
    { id: "u22", c: "uramaki", n: "Kanisu", p: 322, crudo: null,
      af: "Salsa de anguila, vinagre dulce y ajonjol\u00ed.",
      ad: "Cangrejo, salm\u00f3n ahumado, aguacate, queso crema y enrollado en pepino." },
    { id: "u23", c: "uramaki", n: "Helsinki", p: 339, crudo: true,
      af: "Copado de aguacate y salsa de jengibre.",
      ad: "Salm\u00f3n, tuna, queso crema y cebollina." },
    { id: "u24", c: "uramaki", n: "Mykonos", p: 355, crudo: null,
      af: "Pulpo, l\u00e1minas de lim\u00f3n y salsa de jengibre.",
      ad: "Cangrejo, camar\u00f3n y cebollina." },
    { id: "u25", c: "uramaki", n: "Machu Picchu", p: 418, crudo: true,
      af: "Copado de corvina, marinado al estilo peruano y servido con leche de tigre.",
      ad: "Camar\u00f3n, queso crema y aguacate." },
    { id: "u26", c: "uramaki", n: "Veggie", p: 242, veg: true, crudo: false,
      af: "Ajonjol\u00ed.",
      ad: "Lechuga, pepino, aguacate y queso crema." },
    { id: "u27", c: "uramaki", n: "Best Sellers", p: 1459, best: true, crudo: null, combo: true,
      d: "Umai Roll \u00b7 Hiroshima Roll \u00b7 Paris Roll \u00b7 London Roll. GRATIS: Crispy California.",
      revisar: "El combo no lleva la espiga de gluten en el impreso, pero sus cinco rolls s\u00ed est\u00e1n marcados. Definir si el combo hereda la marca." },

    /* ---------- ENTRADAS ---------- */
    { id: "e1", c: "entradas", n: "Gyozas", p: 239, crudo: false, d: "Orden de 6. Al vapor o fritas, con salsa ponzu." },
    { id: "e2", c: "entradas", n: "Edamames", p: 159, veg: true, crudo: false, d: "Frijol verde al vapor." },
    { id: "e3", c: "entradas", n: "Edamames Salteados", p: 174, veg: true, picante: true, crudo: false, d: "Frijol verde salteados en salsa picante." },
    { id: "e4", c: "entradas", n: "Sopa Miso", p: 175, crudo: false, d: "Tradicional sopa japonesa con camar\u00f3n, queso tofu y cebollina." },
    { id: "e5", c: "entradas", n: "Spring Rolls", p: 238, veg: true, crudo: false, d: "Orden de 2. Lechuga, zanahoria, aguacate, pepino, envuelto en hojas de arroz, ajonjol\u00ed, queso crema y salsa sweet chili." },
    { id: "e6", c: "entradas", n: "Tiradito de Tuna", p: 394, crudo: true, d: "Tuna sellado, sobre cama de aguacate, cebollina, ajonjol\u00ed y salsa ponzu." },
    { id: "e7", c: "entradas", n: "Tiradito de Pulpo", p: 359, picante: true, crudo: null, d: "Cortes finos de pulpo, con lascas de aguacate, ba\u00f1ado con Sriracha y salsa ponzu." },
    { id: "e8", c: "entradas", n: "Tartar de Tuna y Salm\u00f3n", p: 344, crudo: true, d: "Cilindro de tuna y salm\u00f3n con spicy mayo, salsa de anguila, sobre una base de arroz de sushi y aguacate en trocitos." },

    /* ---------- ENSALADAS ---------- */
    { id: "n1", c: "ensaladas", n: "Wakame", p: 189, veg: true, crudo: false, d: "Ensalada de algas y aceite de ajonjol\u00ed." },
    { id: "n2", c: "ensaladas", n: "Ika Sansai", p: 268, crudo: null, d: "Ensalada de calamar y pulpo." },
    { id: "n3", c: "ensaladas", n: "Kanikama", p: 242, crudo: false, d: "Ensalada de cangrejo, ajonjol\u00ed y spicy mayo." },
    { id: "n4", c: "ensaladas", n: "Sunomono", p: 244, crudo: false, d: "Ensalada de cangrejo, pepino, vinagre dulce, ajonjol\u00ed, semilla de almendra y salsa de anguila." },
    { id: "n5", c: "ensaladas", n: "Salad Sampler", p: 344, crudo: false, d: "Media porci\u00f3n de Wakame, Kanikama y Sunomono." },

    /* ---------- SUSHI TACOS ---------- */
    { id: "t1", c: "sushitacos", n: "Tuna", p: 425, picante: true, crudo: true, d: "Hoja de wantan frita, ensalada wakame, tuna, jalape\u00f1o, cilantro, aguacate, spicy mayo y salsa anguila. 4 unidades." },
    { id: "t2", c: "sushitacos", n: "Salm\u00f3n", p: 394, crudo: true, d: "Hoja de wantan frita, ensalada de wakame, salm\u00f3n, cebollina y salsa maracuy\u00e1. 4 unidades." },
    { id: "t3", c: "sushitacos", n: "Sushi Tacos Mixtos", p: 475, crudo: true, d: "2 tacos de tuna y 2 tacos de salm\u00f3n." },

    /* ---------- NIGIRI ---------- */
    { id: "g1", c: "nigiri", n: "Cangrejo", p: 156, crudo: false },
    { id: "g2", c: "nigiri", n: "Red Snapper", p: 171, crudo: true },
    { id: "g3", c: "nigiri", n: "Salm\u00f3n Fresco", p: 183, crudo: true },
    { id: "g4", c: "nigiri", n: "Tuna", p: 216, crudo: true },
    { id: "g5", c: "nigiri", n: "Camar\u00f3n", p: 163, crudo: null },
    { id: "g6", c: "nigiri", n: "Pulpo", p: 216, crudo: null },

    /* ---------- SASHIMI ---------- */
    { id: "h1", c: "sashimi", n: "Red Snapper", p: 159, crudo: true },
    { id: "h2", c: "sashimi", n: "Salm\u00f3n Fresco", p: 215, crudo: true },
    { id: "h3", c: "sashimi", n: "Tuna", p: 232, crudo: true },
    { id: "h4", c: "sashimi", n: "Pulpo", p: 236, crudo: null },

    /* ---------- HOSOMAKI ---------- */
    { id: "o1", c: "hosomaki", n: "Salm\u00f3n", p: 216, crudo: true },
    { id: "o2", c: "hosomaki", n: "Tuna", p: 227, crudo: true },
    { id: "o3", c: "hosomaki", n: "Camar\u00f3n", p: 199, crudo: null },

    /* ---------- TEMAKI ---------- */
    { id: "m1", c: "temaki", n: "Salm\u00f3n Fresco", p: 273, crudo: true },
    { id: "m2", c: "temaki", n: "Tuna", p: 295, crudo: true },

    /* ---------- TEMPURA ---------- */
    { id: "p1", c: "tempura", n: "Mariscos", p: 449, crudo: false, d: "Camar\u00f3n, calamar y boca colorada empanizada en tempura, salsa anguila y spicy mayo." },
    { id: "p2", c: "tempura", n: "Vegetales", p: 329, veg: true, crudo: false, d: "Vegetales de la temporada empanizados en tempura, salsa anguila y spicy mayo." },
    { id: "p3", c: "tempura", n: "Camarones al Panko", p: 379, crudo: false, d: "Camarones empanizados al panko, salsa anguila y spicy mayo." },

    /* ---------- YAKITORI ---------- */
    { id: "y1", c: "yakitori", n: "Pollo", p: 312, crudo: false, d: "En salsa de naranja." },
    { id: "y2", c: "yakitori", n: "Res", p: 359, crudo: false, d: "En salsa de yakiniku." },
    { id: "y3", c: "yakitori", n: "Camar\u00f3n", p: 384, crudo: false, d: "En salsa de maracuy\u00e1." },
    { id: "y4", c: "yakitori", n: "Yakitori Mixto", p: 384, crudo: false, d: "Pollo y camar\u00f3n en salsa teriyaki." },

    /* ---------- BENTO BOX ---------- */
    { id: "b1", c: "bento", n: "Bento Box 1", p: 525, crudo: true, d: "Ensalada Wakame \u00b7 Nigiri Tuna o Salm\u00f3n \u00b7 Helsinki Roll." },
    { id: "b2", c: "bento", n: "Bento Box 2", p: 525, crudo: true, d: "\u00bd Ensalada Kanikama \u00b7 Sashimi Tuna o Salm\u00f3n \u00b7 Umai Roll.", revisar: "Incluye Umai Roll, que en el impreso s\u00ed lleva la espiga de gluten, pero el bento no est\u00e1 marcado. Definir si la hereda." },
    { id: "b3", c: "bento", n: "Bento Box 3", p: 525, crudo: false, revisar: "El men\u00fa impreso corta esta l\u00ednea: lista \u00bd orden de gyozas y \u00bd orden de edamames, sin el tercer componente que s\u00ed traen los otros bentos.", d: "\u00bd Orden de Gyozas \u00b7 \u00bd Orden de Edamames." },
    { id: "b4", c: "bento", n: "Bento Box 4", p: 525, crudo: true, d: "Sashimi de Tuna \u00b7 Nigiri de Salm\u00f3n \u00b7 Manhattan Roll." },

    /* ---------- ARROCES ---------- */
    { id: "a1", c: "arroces", n: "Yakimeshi", p: 275, crudo: false, d: "Arroz mixto con res, pollo y camar\u00f3n." },
    { id: "a2", c: "arroces", n: "Orange Chicken", p: 295, crudo: false, d: "Trozos de pollo empanizados, salsa de naranja y ajonjol\u00ed, sobre cama de arroz salteado en salsa teriyaki." },
    { id: "a3", c: "arroces", n: "Ebi Tempura", p: 345, crudo: false, d: "Camarones empanizados, salsa sweet chili, sobre cama de arroz de sushi." },

    /* ---------- POKE BOWLS ---------- */
    { id: "k1", c: "poke", n: "Pollo", p: 355, crudo: false },
    { id: "k2", c: "poke", n: "Camar\u00f3n", p: 429, crudo: null },
    { id: "k3", c: "poke", n: "Tuna y Salm\u00f3n", p: 469, crudo: true },

    /* ---------- RAMEN ---------- */
    { id: "r1", c: "ramen", n: "Panceta o Camar\u00f3n", p: 475, finde: true, crudo: false, d: "Caldo de receta japonesa, huevo marinado, hongos shiitake, fideos udon, cebollina, algas deshidratadas y tu elecci\u00f3n entre panceta o camarones." },

    /* ---------- NOODLES ---------- */
    { id: "d1", c: "noodles", n: "Yakisoba Mixto", p: 412, crudo: false, d: "Pollo y camar\u00f3n salteados en salsa a tu elecci\u00f3n (teriyaki o anguila), servidos con fideos de trigo y vegetales al dente." },

    /* ---------- KIDS ---------- */
    { id: "i1", c: "kids", n: "Mini California Roll", p: 199, crudo: false },
    { id: "i2", c: "kids", n: "Pinchito de Pollo", p: 199, crudo: false, d: "Acompa\u00f1ado de arroz blanco y vegetales." },
    { id: "i3", c: "kids", n: "Tender de Pollo Empanizado", p: 199, crudo: false, d: "Acompa\u00f1ado de papas waffles." },

    /* ---------- ADICIONALES ---------- */
    { id: "x1", c: "adicionales", n: "Cebollina", p: 49, veg: true, crudo: false },
    { id: "x2", c: "adicionales", n: "Jalape\u00f1o", p: 49, veg: true, picante: true, crudo: false },
    { id: "x3", c: "adicionales", n: "Jengibre", p: 49, veg: true, crudo: false },
    { id: "x4", c: "adicionales", n: "Wasabi", p: 49, veg: true, picante: true, crudo: false },
    { id: "x5", c: "adicionales", n: "Salsa Anguila", p: 49, crudo: false },
    { id: "x6", c: "adicionales", n: "Spicy Mayo", p: 54, picante: true, crudo: false }
  ]
};
