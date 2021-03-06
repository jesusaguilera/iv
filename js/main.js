// Lista de definiciones
angular.module("definicionesModule", []).controller("definicionesController", [
  "$scope",
  function ($scope) {
    $scope.definiciones = [
      {
        palabra: "Supino",
        definicion:
          "Que está tendido sobre la espalda. / Que es muy grande y evidente.",
      },
      { palabra: "Genitor", definicion: "Que engendra." },
      { palabra: "Estólido", definicion: "Falto de razón y discuros." },
      {
        palabra: "Estoicismo",
        definicion: "Dominio sobre la propia sensibilidad.",
      },
      { palabra: "Ecuánime", definicion: "Constante en ánimo." },
      { palabra: "Antinomia", definicion: "Contradicción irresoluble." },
      {
        palabra: "Paradoja / Antilogía",
        definicion: "Idea extraña opuesta a la realidad.",
      },
      { palabra: "Axioma", definicion: "Teoría que no puede refutarse." },
      {
        palabra: "Aforismo",
        definicion:
          "Regla en una ciencia o arte ( similar a Axioma pero basado en la práctica ).",
      },
      { palabra: "Intelección", definicion: "Acción y efecto de entender." },
      {
        palabra: "Ulterior",
        definicion: "Que se produce después de una cosa.",
      },
      { palabra: "Melómano", definicion: "Fanático de la música." },
      { palabra: "Peyorativo", definicion: "Expresión desfavorable." },
      { palabra: "Dádiva", definicion: "Algo que se da con gratuidad." },
      {
        palabra: "Epíteto",
        definicion:
          "Adjetivo que denota una cualidad prototípica del sustantivo al que modifica y que no ejerce función restrictiva.En la blanca nieve, blanca es un epíteto. / Palabra o sintagma fijo que tienen una función caracterizadora de personas o cosas. El rey Pedro I tuvo el epíteto de El Cruel. / Expresión calificativa usada como elogio o, más frecuentemente, como insulto. En la discusión se oyeron los más variados epítetos.",
      },
      { palabra: "Magnanimidad", definicion: "Grandeza." },
      { palabra: "Ignominia", definicion: "Afrenta pública." },
      { palabra: "Afrenta", definicion: "Vergüenza, Deshonor." },
      {
        palabra: "Telúrico",
        definicion: "Pertieneciente o relativo a la tierra como planeta.",
      },
      { palabra: "Derogar", definicion: "Abolir una norma." },
      {
        palabra: "Marasmo",
        definicion: "Paralización en lo moral y en lo físico.",
      },
      {
        palabra: "Cochambre",
        definicion: "Suciedad puerca, grasienta y de mal olor.",
      },
      { palabra: "Latrocinio", definicion: "Acción propia de un ladrón." },
      { palabra: "Idiosincrasia", definicion: "Rasgos de una colectividad." },
      {
        palabra: "Heurística",
        definicion:
          "Busqueda e investigación. / Solución de problemas por tanteo.",
      },
      {
        palabra: "Acracia",
        definicion: "Concepción que niega cualquier autoridad.",
      },
      { palabra: "Acicate", definicion: "Incentivo" },
      { palabra: "Aforar", definicion: "Dar o tomar a foro alguna heredad." },
      { palabra: "Paradigma", definicion: "Ejemplo." },
      {
        palabra: "Demótico",
        definicion: "Variedad hablada de la lengua griega.",
      },
      {
        palabra: "Endógeno",
        definicion:
          "Originado o generado dentro de una cosa. Ej: Causas endógenas de su problema psicológico",
      },
      {
        palabra: "Exógeno",
        definicion:
          "Originado o generado en el exterior de una cosa. Ej: Causas exógenas de su problema psicológico",
      },
      {
        palabra: "Anacrónico",
        definicion: "Error de suponer un hecho en un tiempo erróneo.",
      },
      { palabra: "Oriundo", definicion: "Originario de un lugar" },
      { palabra: "Plúmbeo", definicion: "Pesado, aburrido" },
      { palabra: "Vulgo", definicion: "Gente común y vulgar sin conocimiento" },
      { palabra: "Onanimso", definicion: "Masturbación." },
      { palabra: "Fruslería", definicion: "De poco valor." },
      { palabra: "Circunspecto", definicion: "Prudente, decoroso" },
      { palabra: "Vacuo", definicion: "Vacío, Falto de contenido." },
      { palabra: "Pleonasmo", definicion: "Redundancia de palabras." },
      { palabra: "Incólume", definicion: "Sano, sin lesión." },
      {
        palabra: "Jingoismo",
        definicion: "Patriotismo, Agresión a otras naciones.",
      },
      { palabra: "Perendeca", definicion: "Prostituta." },
      { palabra: "Lacerante", definicion: "Que provoca sufrimiento." },
      {
        palabra: "Mesalina",
        definicion:
          "Prostituta, Emperatriz romana promicua y lujuriosa, cruel.",
      },
      { palabra: "Meretriz", definicion: "Prostituta." },
      { palabra: "Ínclito", definicion: "Noble, culto, sobresaliente." },
      { palabra: "Anodino", definicion: "Insignificante." },
      { palabra: "Apostatar", definicion: "Abandonar un bautismo o doctrina." },
      {
        palabra: "Voluptuosidad",
        definicion: "Complacencia a los placeres sensuales.",
      },
      {
        palabra: "Hedonismo",
        definicion: "Doctrina que tiene como fin supremo de la vida el placer.",
      },
      { palabra: "Impúdico", definicion: "Sin pudor." },
      {
        palabra: "Cosificar",
        definicion: "Reducir a la condición de cosa lo que no es.",
      },
      { palabra: "Miscible", definicion: "Mezclable." },
      { palabra: "Elucidación", definicion: "Explicación." },
      {
        palabra: "Inopia",
        definicion: "Pobreza, ignorancia, escasez intelectual.",
      },
      { palabra: "Abulia", definicion: "Falta de voluntad." },
      { palabra: "Tautología", definicion: "Repetición inutil y viciosa" },
      {
        palabra: "Apócope",
        definicion:
          "Supresión de algún sonido al final de un vocablo. Ej: Poli de policía.",
      },
      {
        palabra: "Agnosticismo",
        definicion:
          "Doctrina que declara innaccesible el entendimiento de lo divino y lo que transciende a la experiencia.",
      },
      {
        palabra: "Eclecticismo",
        definicion: "Posición intermedia / Conciliar diferentes doctrinas.",
      },
      { palabra: "Equidad", definicion: "Moderación." },
      { palabra: "Filántropo", definicion: "Amante de sus semejantes." },
      {
        palabra: "Etnocentrismo",
        definicion:
          "Superposición de lo valores y virtudes del propio pueblo sobre el resto.",
      },
      { palabra: "Empirismo", definicion: "Basado en la experiencia." },
      {
        palabra: "Concupiscencia",
        definicion: "Deseo de bienes y placeres deshonestos.",
      },
      { palabra: "Ponderar", definicion: "Encarecer" },
      {
        palabra: "Facción",
        definicion:
          "Grupo de personas unidas por ideas o intereses comunes dentro de una agrupación o colectividad. / Acción de guerra. / Gente amotinada.",
      },
      { palabra: "Otrora", definicion: "En otro tiempo, en un tiempo pasado." },
      {
        palabra: "Nefando",
        definicion:
          "Indigno, torpe, de que no se puede hablar sin repugnancia u horror.",
      },
      { palabra: "Fáctico", definicion: "Basado en hechos." },
      { palabra: "Exégesis", definicion: "Interpretación." },
      { palabra: "Escisión", definicion: "Rompimiento." },
      { palabra: "Retórica", definicion: "Arte del bien decir." },
      {
        palabra: "Metonimia",
        definicion:
          "Designar a algo con el nombre de otra cosa. Ej: Amigo -> Killo",
      },
      { palabra: "Perfidia", definicion: "Deslealtad, Traición." },
      {
        palabra: "Diatriba",
        definicion: "Discuros violento e injurioso contra alguien o algo.",
      },
      {
        palabra: "Foribundo",
        definicion: "Colérico, furor, entusiasta o partidario.",
      },
      { palabra: "Chovinismo", definicion: "Patriotismo fanático." },
      { palabra: "Funesto", definicion: "Triste y desgraciado." },
      { palabra: "Lícito", definicion: "Justo, con razón." },
      { palabra: "Agiotista", definicion: "Especulador, usurero." },
      { palabra: "Envilecer", definicion: "Hacer vil, hacer despreciable." },
      { palabra: "Probidad", definicion: "Honradez." },
      { palabra: "Probo", definicion: "Honrado." },
      { palabra: "Bogar", definicion: "Conducir remando." },
      {
        palabra: "Hidropesía",
        definicion: "Derrame o acumulación anormal de líquido seroso.",
      },
      { palabra: "Abjurar", definicion: "Renegar." },
      { palabra: "Exigua", definicion: "Insuficiente, escaso." },
      {
        palabra: "Dicción",
        definicion: "Manera de hablar, escribir o pronunciar. / Palabra.",
      },
      { palabra: "Cimero", definicion: "Que está en la parte superior." },
      { palabra: "Inepcia", definicion: "Ineptitud, necio." },
      { palabra: "Prospectivo", definicion: "Que se refiere al futuro." },
      {
        palabra: "Prospectiva",
        definicion:
          "Ciencia que estudia las causas técnicas, científicas, económicas y sociales que aceleran la evolución del munod moderno y la previsión de las situaciones.",
      },
      { palabra: "Homónima", definicion: "Que lleva un mismo nombre." },
      {
        palabra: "Ortodoxia",
        definicion:
          "Conformidad con doctrinas dominantes o prácticas admitidas.",
      },
      {
        palabra: "Panóptico",
        definicion: "Que toda su parte interior se ve desde el interior.",
      },
      {
        palabra: "Oxímoron",
        definicion: "Uso de dos conceptos opuestos. Ej: Un instante eterno.",
      },
      { palabra: "Denostar", definicion: "Injuriar gravemente." },
      { palabra: "Ignoto", definicion: "No conocido." },
      { palabra: "Timorato", definicion: "Tímido, indeciso." },
      { palabra: "Veleidoso", definicion: "Inconstante, mudable." },
      {
        palabra: "Cinismo",
        definicion: "Obscenidad descarada, desvergüenza en mentir.",
      },
      {
        palabra: "Epílogo",
        definicion: "Recapitulación de lo dicho en un discurso.",
      },
      { palabra: "Semántico", definicion: "Significación de palabras." },
      {
        palabra: "Antonomasia",
        definicion: "Justificación de nombre apelativo a cosa o persona.",
      },
      { palabra: "Apelativo", definicion: "Que apellida o califica." },
      { palabra: "Calificar", definicion: "Determinar algo." },
      { palabra: "Plétora", definicion: "Gran abundancia de algo." },
      { palabra: "Inenarrable", definicion: "Inexplicable con palabras." },
      { palabra: "Soslayo", definicion: "Pasar por alto." },
      {
        palabra: "Sinóptico",
        definicion: "Característico de la sinopsis. Resumido.",
      },
      {
        palabra: "Apócrifo",
        definicion:
          "Dicho de un libro de un autor sagrado que no está en la Biblia. / Fabuloso. / Supuesto o fingido.",
      },
      { palabra: "Sine qua non", definicion: "Condición sin la cual..." },
      {
        palabra: "Gnosticismo",
        definicion: "Doctrina que mezcla creencias judías y orientales.",
      },
      {
        palabra: "Eufemismo",
        definicion:
          "Manifestación suave y decorosa de una malsonante y dura. Ej: Sexo = Hacer el amor.",
      },
      {
        palabra: "Parangonar",
        definicion: "Hacer comparación de una cosa con otra.",
      },
      { palabra: "Oprobio", definicion: "Ignominia, Afrenta, Deshonra." },
      { palabra: "Cerrilismo", definicion: "Cualidad de cerril." },
      {
        palabra: "Cerril",
        definicion: "Tosco, grosero. / Terreno áspero y escabroso.",
      },
      {
        palabra: "Antisemita",
        definicion: "Enemigo de la raza hebréa ( israelitas y judios ).",
      },
      {
        palabra: "Semita",
        definicion:
          "Dicho de una persona: Que pertenece a alguno de los pueblos que integran la familia formada por los árabes, los hebreos y otros.",
      },
      {
        palabra: "Sucinta",
        definicion: "Breve. / Recogido o ceñido por abajo.",
      },
      { palabra: "Exornar", definicion: "Adornar, embellecer, hermosear." },
      {
        palabra: "Epifenómeno",
        definicion:
          "Fenómeno que acompaña al fenómeno principal pero no tiene influencia sobre él.",
      },
      { palabra: "Empresario", definicion: "Que realiza una obra." },
      { palabra: "Misógeno", definicion: "Que odia a las mujeres." },
      {
        palabra: "Disensión",
        definicion: "Contradicción en los pareceres. / Contienda, riña.",
      },
      {
        palabra: "Epigrama",
        definicion:
          "Inscripción en piedra. / Pensamiento breve. / Composición poética breve.",
      },
      { palabra: "Escribano", definicion: "Maestro del escribir." },
      {
        palabra: "Patíbulo",
        definicion: "Lugar donde se ejecuta la pena de muerte.",
      },
      { palabra: "Fútil", definicion: "De poco aprecio o importancia." },
      { palabra: "Efebo", definicion: "Adolescente de belleza afeminada." },
      { palabra: "Teutón", definicion: "Alemán." },
      { palabra: "Códice", definicion: "Libro anterior a la imprenta." },
      { palabra: "Arenga", definicion: "Discurso para enardecer los ánimos." },
      {
        palabra: "Contractual",
        definicion: "Procedente del contrato o derivado de él.",
      },
      { palabra: "Anquilosar", definicion: "Paralizar su evolución." },
      { palabra: "Inextricable", definicion: "Muy enredado y confuso." },
      {
        palabra: "Cohonestar",
        definicion:
          "Dar apariencia de justa o razonable a una acción que no lo es. / Hacer compatibles dos o más cualidades, actitudes o acciones.",
      },
      {
        palabra: "Trapacero",
        definicion:
          "Que con astucias, falsedades y mentiras procura engañar a alguien en un asunto.",
      },
      {
        palabra: "Molicie",
        definicion:
          "Blandura de las cosas al tacto. / Abandono invencible al placer de los sentidos o a una grata pereza.",
      },
      {
        palabra: "Prez",
        definicion:
          "Honor, estima o consideración que se adquiere o gana con una acción gloriosa.",
      },
      {
        palabra: "Consciencia",
        definicion:
          "Similar a conciencia pero no difiere el bien y el mal ( moral ).",
      },
      { palabra: "Asepsia", definicion: "Estado libre de infección." },
      { palabra: "Ostracismo", definicion: "Destierro político." },
      {
        palabra: "Tácito",
        definicion: "Callado, silencioso. / Que no se expresa, se supone.",
      },
      { palabra: "Falaz", definicion: "Embustero, Falso." },
      { palabra: "Conspicuo", definicion: "Notable, ilustre, sobresaliente." },
      { palabra: "Espurio", definicion: "Bastardo." },
      {
        palabra: "Senectud",
        definicion: "Periodo de la vida que sigue a la madurez.",
      },
      { palabra: "Laxo", definicion: "De moral relajada, libre o poco sana." },
      {
        palabra: "Contradicción",
        definicion: "Antítesis, paradoja, discordancia, antilogía.",
      },
      {
        palabra: "Inefable",
        definicion: "Que no se puede expresar con palabras.",
      },
      { palabra: "Andrógino", definicion: "Rasgos que no son de su sexo." },
      {
        palabra: "Pagano",
        definicion:
          "Infiel, no bautizado. / Idólatra de los antiguos griegos y romanos.",
      },
      { palabra: "Embridar", definicion: "Poner bridas. / Someter, sujetar." },
      { palabra: "Tórpida", definicion: "Que reacciona con torpeza." },
      { palabra: "Empozoñar", definicion: "Echar a perder. Dañar." },
      {
        palabra: "Escepticismo",
        definicion:
          "Doctrina que afirma que la verdad no existe. / Desconfianza, duda.",
      },
      {
        palabra: "Paráfrasis",
        definicion:
          "Explicación o interpretación amplificada de un texto para ilustralo o hacerlo más claro.",
      },
      {
        palabra: "Adujar",
        definicion: "Recogerse para comodarse en poco espacio.",
      },
      {
        palabra: "Libar",
        definicion: "Chupar suavemente el jugo de una cosa.",
      },
      {
        palabra: "Virtud",
        definicion: "Disposición del alma para con la ley moral.",
      },
      {
        palabra: "Ardid",
        definicion:
          "Medio empleado para el logro de algo mañosamente. / Mañoso, astuto, sagaz.",
      },
      {
        palabra: "Prólijo",
        definicion:
          "Que pone esmero en los detalles. / Largo, dilatado, en exceso. / Cuidadoso, esmerado. / Impertinente, molesto.",
      },
      {
        palabra: "Ambivalencia",
        definicion:
          "Condición que se presta a dos interpretaciones opuestas. / Estado de ánimo donde coexisten dos emociones o sentimientos opuestos.",
      },
      { palabra: "Escarnio", definicion: "Burla tenaz." },
      { palabra: "Labriego", definicion: "Labrador rustico." },
      { palabra: "Ingente", definicion: "Muy grande." },
      { palabra: "Acopio", definicion: "Reunir, recolectar algo." },
      {
        palabra: "Corolario",
        definicion: "Proposición que no necesita prueba alguna.",
      },
      {
        palabra: "Escatológico",
        definicion:
          "Perteneciente a las postrimerías de ultratumba. / Relativo a los excrementos y suciedades.",
      },
      {
        palabra: "Postrimerías",
        definicion: "Periodo último de la duración de algo.",
      },
      {
        palabra: "Aporía",
        definicion:
          "Enunciado que contiene una inviabilidad de orden racional.",
      },
      { palabra: "Vilipendiar", definicion: "Despreciar." },
      { palabra: "Disquisición", definicion: "Exámen riguroso." },
      { palabra: "Vituperar", definicion: "Censurar." },
      {
        palabra: "Tetralogías",
        definicion: "Conjunto de 4 obras literarias o musicales.",
      },
      { palabra: "Inconexo", definicion: "Falto de conexión." },
      { palabra: "Opúsculo", definicion: "Obra de poca extensión." },
      {
        palabra: "Autarquía",
        definicion:
          "Dominio de sí mismo. / Política de un Estado que se bas con sus propios recursos.",
      },
      {
        palabra: "Asechanza",
        definicion: "Engaño o artificio para hacer daño a alguien.",
      },
      {
        palabra: "Disertar",
        definicion: "Razonar, discurrir detenidamente sobre alguna materia.",
      },
      {
        palabra: "Anagnórisis",
        definicion:
          "Recurso narrativo, consiste en el descubrimiento por parte de un personaje de datos de su identidad.",
      },
      { palabra: "Areté", definicion: "Excelencia." },
      {
        palabra: "Sátrapa",
        definicion:
          "Hombre sagaz que sabe gobernar con astucia, o que gobierna despóticamente.",
      },
      {
        palabra: "Irisado",
        definicion: "Que brilla o destella con colores semejante al iris.",
      },
      {
        palabra: "Ubicuo",
        definicion:
          "Dios que esta en todas partes. / Persona que lo quiere ver todo y esta en continuo movimiento.",
      },
      { palabra: "Soliviantar", definicion: "Inquietar o alterar a alguien." },
      {
        palabra: "Leguleyo",
        definicion: "Persona que aplica el derecho sin rigor.",
      },
      {
        palabra: "Presuntuoso",
        definicion:
          "Lleno de orgullo y presunción. / Que se hace pasar por muy elegante o lujoso.",
      },
      { palabra: "Dislate", definicion: "Disparate." },
      { palabra: "Ignaro", definicion: "Que no tiene noticias de las cosas." },
      { palabra: "Adocenar", definicion: "Hacer mediocre." },
      { palabra: "Apátrida", definicion: "Que carece de nacionalidad." },
      { palabra: "Arracachá", definicion: "Sandez." },
      { palabra: "Inanidad", definicion: "Vacuidad, futilidad." },
      {
        palabra: "Metempsicosis",
        definicion: "Creencia de transmigración de las almas.",
      },
      {
        palabra: "Orfismo",
        definicion:
          "Creencia religiosa, el cuerpo como carcel del alma. Metempsicosis.",
      },
      { palabra: "Bifronte", definicion: "De dos frentes, de dos caras." },
      {
        palabra: "Insondable",
        definicion: "Que no se puede hayar su fondo con la sonda.",
      },
      { palabra: "Pretérito", definicion: "Pasado, sucedido." },
      {
        palabra: "Cosmogonía",
        definicion:
          "Teoría científica de origen y evolución del universo y el mundo.",
      },
      {
        palabra: "Cosmología",
        definicion:
          "Parte de la astronomía que trata las leyes generales del origne y evolución del universo. / Conocimiento filosófico leyes que rigen el mundo físico.",
      },
      {
        palabra: "Monismo",
        definicion:
          "Reducir seres y fenómenos a 1 sustancia única de la que todos derivan.",
      },
      {
        palabra: "Abolengo",
        definicion: "Ascendencia de abuelos o antepasados ilustres.",
      },
      {
        palabra: "En ciernes",
        definicion: "En flor, estar en sus principios.",
      },
      { palabra: "Ínfula", definicion: "Vanidad pretenciosa." },
      {
        palabra: "Episcooal",
        definicion: "Perteneciente o relativo al obispo.",
      },
      {
        palabra: "Apotegma",
        definicion:
          "Frase o sentencia breve en la cual se expresa un pensamiento o enseñanza.",
      },
      { palabra: "Cogitativo", definicion: "Que tiene la facultad de pensar." },
      { palabra: "Lacónico", definicion: "Breve, conciso." },
      { palabra: "Necedad", definicion: "Calidad de necio." },
      { palabra: "Dispendio", definicion: "Gasto excesivo e innecesario." },
      {
        palabra: "Adefesio",
        definicion:
          "Despropósito, disparate. / Traje rídiculo. / Persona ridícula.",
      },
      {
        palabra: "Asertivo",
        definicion: "Afirmativo, que tiene ideas positivas.",
      },
      { palabra: "Contingente", definicion: "Que puede o no puede suceder." },
      { palabra: "Anatema", definicion: "Maldición, excomunión." },
      { palabra: "Licitar", definicion: "Subastar." },
      { palabra: "Ingénito", definicion: "No engendrado." },
      { palabra: "Oftalmía", definicion: "Inflamación de los ojos." },
      { palabra: "Palinodia", definicion: "Retractación pública." },
      { palabra: "Verosimil", definicion: "Creíble por no mostrar falsedad." },
      { palabra: "Prócer", definicion: "Eminente, elevado, alto." },
      {
        palabra: "Meliflua",
        definicion: "que tiene miel. / dulce, suave, tierno, delicado.",
      },
      {
        palabra: "Numen",
        definicion:
          "Deidad dotada de poder. / Dioses de la mitología clásica. / Inspiración del artista.",
      },
      { palabra: "Denuedo", definicion: "Brío, esfuerzo, valor, intrepidez." },
      {
        palabra: "Panoplia",
        definicion:
          "armadura completa con todas las piezas. / conjunto amplio y variado de elementos del mismo carácter. (una panoplia de ideas).",
      },
      {
        palabra: "Olocracia",
        definicion: "Gobierno de la plebe o la muchedumbre.",
      },
      { palabra: "Panacea", definicion: "Remedio que cura cualquier mal." },
      {
        palabra: "Paroxismo",
        definicion: "Exaltación extrema de los afectos y pasiones.",
      },
      { palabra: "Adlátere", definicion: "Persona subordinada a otra." },
      {
        palabra: "Dimanar",
        definicion:
          "Manar. / Proceder. provenir y tener origen una cosa de otra.",
      },
      { palabra: "Avezar", definicion: "Acostumbrar." },
      {
        palabra: "Polímata",
        definicion:
          "Persona que sabe de muchos campos. ( Da Vinci, Aristóteles, etc )",
      },
      {
        palabra: "Ucronía",
        definicion: "Reconstrucción de la historia sobre datos hipotéticos.",
      },
      {
        palabra: "Perentoria",
        definicion:
          "Definitivo, Último plazo que se concede de un asunto. / Concluyente, determinante. / Urgente",
      },
      {
        palabra: "Efeméride",
        definicion:
          "Acontecimiento importante que se recuerda en cualquier aniversario de él.",
      },
      { palabra: "Soliloquio", definicion: "Habla a solas." },
      {
        palabra: "Ineluctable",
        definicion: "Cosa que no puede contradecirse.",
      },
      {
        palabra: "Frugalidad",
        definicion:
          "Cualidad del ser ahorrativo, pasivo, pruedente, y económico en el uso de recursos consumibles. / Templanza, parquedad en el comidad y la bebida.",
      },
      {
        palabra: "Parquedad",
        definicion:
          "Moderación económica y prudrente de las cosas. Moderación, sobriedad.",
      },
      {
        palabra: "Casquivana",
        definicion: "Mujer alegre de cascos. Melusina.",
      },
      {
        palabra: "Providencia",
        definicion: "Disposición anticipada que conduce a un fín",
      },
      { palabra: "Áulicos", definicion: "Relativo de un palacio." },
      {
        palabra: "Raigambre",
        definicion:
          "Conjunto de raíces unidas entre sí. / Antecedentes, hábitos que ligan a alguien a un sitio.",
      },
      { palabra: "Elidir", definicion: "Frustar, debilitar, desvanecer." },
      {
        palabra: "Elocuencia",
        definicion: "Facultad de hablar o escribir para deleitar y conmover.",
      },
      {
        palabra: "Omnímodo",
        definicion:
          "Que lo abraza y lo comprende todo, que es absoluto y total.",
      },
      {
        palabra: "Cisma",
        definicion: "División, separación, escisión, discordia, desaveniencia.",
      },
      {
        palabra: "Prosapia",
        definicion: "Ascendencia, linaje o generación de una persona.",
      },
      {
        palabra: "Alcurnia",
        definicion: "Ascendencia o linaje sobre todo si es noble y antiguo.",
      },
      {
        palabra: "Desafuero",
        definicion:
          "Acto violento contra la ley. / Acción contraria a las buenas costumbres o a la razón. / Privar de fuero a quien lo tenía.",
      },
      { palabra: "Sicofante", definicion: "Impostor, calumniador." },
      {
        palabra: "Adusto",
        definicion: "Poco tratable. / Seco, severo. / Quemado, tostado.",
      },
      {
        palabra: "Solecismo",
        definicion: "Error contra las normas de algún idioma.",
      },
      { palabra: "Lego", definicion: "Falto de noticias o letras." },
      { palabra: "Pústula", definicion: "Vejiga inflamatoria llena de pús." },
      { palabra: "Semántica", definicion: "Significado de las palabras." },
      { palabra: "Semiótica", definicion: "Teoría de los signos." },
      { palabra: "Pedestre", definicion: "Vulgar, llano, inculto, bajo." },
      {
        palabra: "Endónimo",
        definicion:
          "Designa el hecho que un grupo de personas empela de manera regular un nombre para indeticarse. Ej: Americanos, Hélade.",
      },
      {
        palabra: "Prosaico",
        definicion: "Adocenado, vulgar, tosco. / Práctico, útil.",
      },
      { palabra: "Galano", definicion: "Elegante." },
      {
        palabra: "Heteronomía",
        definicion:
          "Ausencia de autonomía, de voluntad: que se rige por un poder externo.",
      },
      { palabra: "Díscolo", definicion: "Desobediente." },
      {
        palabra: "Transigir",
        definicion:
          "Consertir lo que no es justo para acabar con una diferencia.",
      },
      { palabra: "Incidental", definicion: "Accesorio de menor importancia." },
      {
        palabra: "Deferencia",
        definicion:
          "Muestra de respeto y cortesía. Adherencia con la opinión o el comportamiento por respeto hacia ella o por excesiva moderación.",
      },
      { palabra: "Deferente", definicion: "Educado." },
      { palabra: "Hablantín", definicion: "Que habla de lo que no debe." },
      {
        palabra: "Fictivo",
        definicion: "Que vive o existe en la ficción literaria.",
      },
      {
        palabra: "Somero",
        definicion: "Ligero, superficial, de poca importancia.",
      },
      {
        palabra: "Anacoluto",
        definicion: "Incosecuencia en la construcción de un discurso o frase.",
      },
      { palabra: "Ampuloso", definicion: "Lenguaje hinchado y redundante." },
      { palabra: "Melopeya", definicion: "Arte de producir melodías." },
      { palabra: "Inverecundia", definicion: "Desvergüenza, desfachatez." },
      { palabra: "Verecundia", definicion: "Vergüenza." },
      {
        palabra: "Tecnolatría",
        definicion:
          "Desorden de la técnica y veneración incodnicional. / Deificacion de la tecnología.",
      },
      {
        palabra: "Nefario",
        definicion: "Sumamente malvado, impío e indigno del trato humano.",
      },
      {
        palabra: "Ortofonía",
        definicion:
          "Correción de los defectos de la voz y de la pronunciación.",
      },
      { palabra: "Agnición", definicion: "Anagnórisis." },
      {
        palabra: "Deprecar",
        definicion: "Rogar, pedir, suplica con eficacia o insistencia.",
      },
      { palabra: "Paralogismo", definicion: "Razonamiento falso." },
      {
        palabra: "Distopía",
        definicion:
          "Representación ficticia de una sociedad futura de características negativas causantes de la alineación humana.",
      },
      {
        palabra: "Elegía",
        definicion:
          "Composición poética de género lírico que lamenta un acontecimiento digno de ser llorado.",
      },
      {
        palabra: "Oneroso",
        definicion: "Pesado, molesto, gravoso. / Que ocasiona mucho gasto.",
      },
      {
        palabra: "Pesadumbre",
        definicion: "Molestia, desazón, padecimiento físico o moral.",
      },
      { palabra: "Altanero", definicion: "Altivo, soberbio." },
      {
        palabra: "Arrostar",
        definicion: "Hacer cara, resistir sin muestras de debilidad.",
      },
      { palabra: "Impasible", definicion: "Que no padece." },
      { palabra: "Eximio", definicion: "Muy ilustre, excelso." },
      { palabra: "Estulticia", definicion: "Necedad, tontería." },
      { palabra: "Huero", definicion: "Vano, vacío, sin sustancia." },
      { palabra: "Encomio", definicion: "Alabanza encarecida." },
      { palabra: "Interpolar", definicion: "Poner algo entre otras cosas." },
      { palabra: "Baladí", definicion: "De poca importancia." },
      {
        palabra: "Alocución",
        definicion: "Discurso de un superior a sus secuaces.",
      },
      { palabra: "Teleología", definicion: "Doctrinas de las causas finales." },
      {
        palabra: "Epígono",
        definicion: "Hombre que sigue las huellas de otro.",
      },
      {
        palabra: "Iltericia",
        definicion: "Mal qeu necesitaba de grandes gastos para curarlo.",
      },
      {
        palabra: "Manumisión o manumitir",
        definicion: "Dar libertad a un esclavo.",
      },
      {
        palabra: "Lisura",
        definicion: "Igualdad de la superficie. / Ingenuidad, sinceridad.",
      },
      { palabra: "Ornato", definicion: "Adorno, atavío." },
      { palabra: "Perífrasis", definicion: "Circunlocución." },
      {
        palabra: "Circunlocución",
        definicion: "Rodeo de palabras algo que se podría decir con menos.",
      },
      { palabra: "Gozne", definicion: "Bisagra." },
      { palabra: "Istmo", definicion: "Camino de tierra que une dos islas." },
      { palabra: "Sincopar", definicion: "Abreviar, acortar." },
      { palabra: "Argentado", definicion: "Bañado en plata." },
      { palabra: "Probidad", definicion: "Honradez." },
      { palabra: "Aciago o infausto", definicion: "Desgraciado, infeliz." },
      { palabra: "Ufano", definicion: "Arrogante, engreido" },
      { palabra: "Altitronante", definicion: "Que truena desde lo alto." },
      {
        palabra: "Heraldo",
        definicion: "Mensajero. / Aquello que anuncia que va a suceder algo.",
      },
      { palabra: "Sempiterno", definicion: "Que dura siempre. / Perpetuo." },
      { palabra: "Níveo", definicion: "De nieve." },
      { palabra: "Égida", definicion: "Protección, defensa." },
      { palabra: "Torva", definicion: "Remolina de lluvia o nieve." },
      {
        palabra: "Libelo",
        definicion:
          "Escrito en que se denigra. /Escrito en que se denigra. /  Libro pequeño.",
      },
      { palabra: "Lumpen", definicion: "Lumpemproletariado." },
      {
        palabra: "Lumpemproletariado",
        definicion: "Capa social más baja y sin conciencia de clase.",
      },
      { palabra: "Fungible", definicion: "Que se consume con el uso." },
      {
        palabra: "Petimetre",
        definicion:
          "Persona que se procupa mucho de su compostrua y seguir las modas.",
      },
      {
        palabra: "Indefectible",
        definicion: "Que tiene que ocurrir, que no puede faltar.",
      },
      {
        palabra: "Lenidad",
        definicion: "Blandura de exigir deberes o castigar faltas.",
      },
      {
        palabra: "Improvidad",
        definicion: "Desprevenido, desapercibido. Falto de lo necesario.",
      },
      { palabra: "Trapacero", definicion: "Trapero, astuto, mentiroso." },
      {
        palabra: "Molicie",
        definicion:
          "Abandono al placer de los sentidos y la pereza. / Blandura al tacto.",
      },
      { palabra: "Prez", definicion: "Honor, estima, consideración." },
      { palabra: "Pendencia", definicion: "Contienda, riña." },
      {
        palabra: "Ubi Dubium ibi libertas",
        definicion: "Donde hay duda hay libertad.",
      },
      {
        palabra: "Gleba",
        definicion: "Terrón que se levanta del arado. / Gente del pueblo bajo.",
      },
      {
        palabra: "Exánime",
        definicion: "Sin señal de vida. / Debilitado sin aliento, desmayado.",
      },
      {
        palabra: "Perínclito",
        definicion: "Grande heróico, inclito de sumo grado.",
      },
      {
        palabra: "Prosopopeya",
        definicion:
          "Afectación de gravedad y pompa. / Figura retórica de pensamiento que consiste en atribuir a los seres inanimados o abstractos características y cualidades propias de los seres animados, o a los seres irracionales actitudes propias de los seres racionales o en hacer hablar a personas muertas o ausentes.",
      },
      { palabra: "Sustantivar", definicion: "Considerar algo como sustancia." },
      { palabra: "Célere", definicion: "Pronto, rápido." },
      {
        palabra: "Univocar",
        definicion: "Convertir en una razón mismas una o más cosas.",
      },
      {
        palabra: "Coyuntural",
        definicion: "Que depende de los factores y efectos que se den.",
      },
      { palabra: "Contingente", definicion: "Que puede o no suceder." },
      { palabra: "Descollar", definicion: "Sobresalir, Distinguirse." },
      { palabra: "Reificación", definicion: "Cosificación." },
      { palabra: "Contrición", definicion: "Arrepentimiento de una culpa." },
      {
        palabra: "Lábil",
        definicion: "Que resbala. / Frágil. / Poco estable.",
      },
      {
        palabra: "Obliterar",
        definicion: "Anular, tachar, borrar. / Cerrar u obstruir un conducto.",
      },
      {
        palabra: "Exégeta",
        definicion: "Persona que interpreta o expone un texto.",
      },
      {
        palabra: "Espetar",
        definicion:
          "Clavar. / Encajar, asegurar, afianzar. / Decir algo a alguien que le cause sorpresa.",
      },
      {
        palabra: "Diletante",
        definicion: "Conocedor de las artes. / Que cultiva campos del saber.",
      },
      { palabra: "Quinquenio", definicion: "Periodo de 5 años." },
      { palabra: "Quingentesimo", definicion: "Periodo de 500 años." },
      { palabra: "Zaherir", definicion: "Humillar o mortificar a alguien." },
      {
        palabra: "Exordio",
        definicion:
          "Origen o principio de algo. / Preámbulo de un razonamiento.",
      },
      { palabra: "Volitivo", definicion: "Relativo a al voluntad." },
      { palabra: "Doltitud", definicion: "Cualidad de docto." },
      {
        palabra: "Extemporáneo",
        definicion:
          "Impropio del tiempo en que sucede o se hace. / Inoportuno, inconveniente.",
      },
      {
        palabra: "Sinarquía",
        definicion:
          "Gobierno constituido por varios principes cada uno de los cuales administra un estado.",
      },
      { palabra: "Aquiescencia", definicion: "Asenso, consentimiento." },
      { palabra: "Asenso", definicion: "Acción e asentir." },
      {
        palabra: "Execrar",
        definicion:
          "Condenar y maldecir en nombre de cosas sagradas. / Vituperar o reprobar severamente. / Aborrecer.",
      },
      {
        palabra: "Baldón",
        definicion: "Injuria, afrenta. / Persona o cosa que supone baldón.",
      },
      {
        palabra: "Plutocracia",
        definicion:
          "Situación en la que los ricos ejercen su preponderancia en el gobierno del estado. / Conjunto de ciudadanos adinerados que ejercen su influencia en el gobierno del estado.",
      },
      { palabra: "Egregio", definicion: "Famoso, ilustre, notable, eminente." },
      {
        palabra: "Zafio",
        definicion:
          "Persona grosera o tosca en sus modales, o carente de tacto en su comportamiento, inculto, ordinario, cateto, cerril, vulgar.",
      },
      {
        palabra: "Arrabalero",
        definicion: "Grosero, tosco, cerril, ordinario.",
      },
      {
        palabra: "Entelequia",
        definicion:
          "Cosa irreal. / En Aristóteles: Fín u objetivo de una actividad que la completa y la perfecciona.",
      },
      {
        palabra: "Nepotismo",
        definicion:
          "Preferencia que se dan a parientes para concesiones o empleos públicos.",
      },
      { palabra: "Ergo", definicion: "Latin: Por tanto, luego, pues..." },
      {
        palabra: "Silogismo",
        definicion:
          "Método mediante el cual se realiza un razonamiento deductivo.",
      },
      {
        palabra: "Razonamiento deductivo",
        definicion:
          "El que se usa para determinar si un hecho o idea es cierto al compararlo con una idea o hecho universal.",
      },
      {
        palabra: "Inferir",
        definicion:
          "Extraer un juicio o conclusión a partir de hechos, proposiciones o principios, sean generales o particulares.",
      },
      {
        palabra: "Leguleyo",
        definicion: "Discutidor. / Persona que aplica el derecho sin rigor.",
      },
      {
        palabra: "Aserción",
        definicion:
          "Afirmar, dar por cierto algo. / Proposición en que se afirma o da algo por cierto.",
      },
      {
        palabra: "Ufano",
        definicion:
          "Arrogante, engreido. / Satisfecho, alegre, contento. / Que procede en la ejecución de algo.",
      },
      {
        palabra: "Precepto",
        definicion:
          "Mandato que el superior hace obedecer y guardar al inferior.",
      },
      {
        palabra: "Alambicado",
        definicion:
          "Sutil. / Complicado, rebuscado para ser elegante, exquisito o sutíl en la expresión o el lenguaje. / Dado con escasez y muy poco a poco.",
      },
      { palabra: "Cratología", definicion: "Ciencia que estudia el poder." },
      {
        palabra: "Enjundia",
        definicion:
          "Fuerza, vigor./ Parte más sustanciosa e importante de algo no material. / constitución o cualidad connatural de una persona.",
      },
      {
        palabra: "Quiescente",
        definicion: "Que esta quieto pudiendo tener movimiento propio.",
      },
      { palabra: "Misantropía", definicion: "Aversión al género humano." },
      { palabra: "Abyecto", definicion: "Vil en extremo, despreciable." },
      {
        palabra: "Incoar",
        definicion:
          "Llevar a cabo los primeros trámites de una actuación oficial.",
      },
      { palabra: "Felonía", definicion: "Deslealtad, traición, acción fea." },
      {
        palabra: "Ataraxia",
        definicion:
          "Estado de ánimo que se caracteriza por la tranquildad y la total ausencia de deseos o temores.",
      },
      { palabra: "Estultos", definicion: "Necios, ignorantes." },
      {
        palabra: "Preconizar",
        definicion:
          "Encomiar, elogiar. / Apoyar algo. Recomendar algo. Proponer algo.",
      },
      { palabra: "Boato", definicion: "Ostentación en el porte exterior." },
      { palabra: "Iracundo", definicion: "Que muestra ira." },
      { palabra: "Mor", definicion: "Latin: Por causa de..." },
      {
        palabra: "Supino",
        definicion: "Dicho de algo negativo. Ej: Estupidez supina.",
      },
      {
        palabra: "Horrisono",
        definicion: "Que su sonido causa horror y espanto.",
      },
      {
        palabra: "Crátera",
        definicion: "En Grecia y Roma donde se mezclaba el vino con agua.",
      },
      { palabra: "Palinodia", definicion: "Retractación pública." },
      { palabra: "Malgré lui", definicion: "A pesar de..." },
      {
        palabra: "Solipsismo",
        definicion:
          "Forma radical de subjetivismo según la cual solo existe o solo puede ser conocido el propio yo.",
      },
      {
        palabra: "Eufonía",
        definicion:
          "Efecto acústico que resulta de la combinación de sonidos en uan palabra o frase.",
      },
      {
        palabra: "Disgresión",
        definicion:
          "Apartarse de un relato o discurso para traar algo relacionado con él.",
      },
      {
        palabra: "Escamotear",
        definicion: "Robar o quitar algo con agilidad y astucia.",
      },
      {
        palabra: "Coyuntura",
        definicion: "Conjunto de circunstancias que determinan una situación.",
      },
      { palabra: "Ciscar", definicion: "Cagar, defecar, evacuar, ensuciar." },
      {
        palabra: "Maniqueismo",
        definicion:
          "Doctrina que se basa en dos principios bien y mal. / Cualquier actitud que mantiene posturas extremas sin puntos intermedios.",
      },
      {
        palabra: "Solaz",
        definicion:
          "Placer, entretenimiento y descanso en las actividades y trabajo.",
      },
      { palabra: "Simiesco", definicion: "Relacionado con el simio." },
      {
        palabra: "Deslavazado",
        definicion:
          "Insustancial. / Que carece de unión entre sus partes o esta desordenado o mal compuesto.",
      },
      { palabra: "Alicorta", definicion: "Que tiene alas cortas o cortadas." },
      { palabra: "Orbe", definicion: "Mundo" },
      {
        palabra: "Inánime",
        definicion: "Sin señal de vida, que no tiene alma.",
      },
      { palabra: "Inane", definicion: "Vano, fútil, inútil." },
      { palabra: "Per se", definicion: "Latín: De por sí..." },
      {
        palabra: "Taxativo",
        definicion: "Que limita. Circunscribe. / Que no admite discusión.",
      },
      {
        palabra: "Vegetar",
        definicion:
          "Vivir maquinalmente como una planta. / Llevar una vida tranquila, exenta de trabajo y cuidados.",
      },
      {
        palabra: "Pogromo",
        definicion:
          "Masacre aceptada o promovida por el poder de judios u otros grupos étnicos.",
      },
      {
        palabra: "Sionismo",
        definicion: "Aspiración de los juidos a recobrar Palestina.",
      },
      {
        palabra: "Pastueño",
        definicion: "Dicho del tro de lidia que acude sin recelo al engaño.",
      },
      { palabra: "Hebetar", definicion: "Enervar, debilitar, embotar." },
      {
        palabra: "Tetrarquía",
        definicion:
          "Forma de gobierno en la cuál 4 personas están al frente del Estado. / Dignidad de tetrarca.",
      },
      {
        palabra: "Tetrarca",
        definicion: "Gobernador de una provincia o territorio.",
      },
      { palabra: "Malicienta", definicion: "Flaco y descolorido." },
      {
        palabra: "Procacidad",
        definicion: "Desvergüenza, insolencia, atrevimiento.",
      },
      { palabra: "Ufanarse", definicion: "Engreirse, Jactarse, gloriarse." },
      { palabra: "Giba", definicion: "Joroba, molestia, incomodida." },
      {
        palabra: "Zelote",
        definicion:
          "Persona judía rígida y vehemente de su integrismo religioso",
      },
      {
        palabra: "Atavismo",
        definicion:
          "Comportamiento que hace pervivir ideas o formas de vidas propias de los antepasados.",
      },
      { palabra: "Coprófago", definicion: "Que ingiere excrementos." },
      {
        palabra: "Charnego",
        definicion:
          "Inmigrante en cataluña procedente de otra región que no habla catalán.",
      },
      { palabra: "Estupro", definicion: "Incesto, violación." },
      { palabra: "Enervar", definicion: "Debilitar. / poner de los nervios." },
      { palabra: "Panegírico", definicion: "Sermón en alabanza a alguien." },
      { palabra: "Acólito", definicion: "Monaguillo que ayuda al sacerdote." },
      {
        palabra: "Impenitente",
        definicion:
          "Que se obstina en el pecado. / Que persevera en un hábito.",
      },
      { palabra: "Aciago", definicion: "Infeliz, infausto, desgraciado." },
      {
        palabra: "Turba",
        definicion: "Muchedumbre de gente confusa y desordenada.",
      },
      { palabra: "Mor", definicion: "Por causa de..." },
      { palabra: "Tamaño", definicion: "O grande o pequeño." },
      { palabra: "Petulancia", definicion: "Vana y exagerada presunción." },
      {
        palabra: "Socavar",
        definicion:
          "Debilitar en el aspecto moral. / Escarvar por debajo dejándolo en falso.",
      },
      { palabra: "Abstruso", definicion: "De dificil compresión." },
      {
        palabra: "Cónclave",
        definicion: "Junta o congreso de gente para tratar un tema.",
      },
      {
        palabra: "Ponerología",
        definicion: "Estudio del mal, estudio de las injusticias sociales.",
      },
      {
        palabra: "Patocracia",
        definicion:
          "Gobierno de una minoría patológica que toam el control de las persona normales. (Nazis)",
      },
      { palabra: "Filo-", definicion: "Amigo de... ( Filofascismo )" },
      {
        palabra: "Intestar",
        definicion:
          "Encajar una cosa con otra. / Estar lindando una cosa con otra.",
      },
      { palabra: "Finado", definicion: "Fallecido." },
      { palabra: "Finar", definicion: "Fallecer." },
      {
        palabra: "Vasallaje",
        definicion: "De vasallo. / Vínculo de una persona a otra",
      },
      { palabra: "Tísico", definicion: "Que padece tísis." },
      { palabra: "Tísis", definicion: "Tubercolusis pulmonar." },
      {
        palabra: "Multívoco",
        definicion: "Que tiene varias interpretaciones.",
      },
      {
        palabra: "Rémora",
        definicion:
          "Obstáculo físico o inmaterial que dificulta un proceso. Persona que retrasa, dificulta o detiene algo.",
      },
      { palabra: "Mefistofélico", definicion: "Diabólico, malvado, perverso." },
      { palabra: "Megalómano", definicion: "Delirio de grandeza." },
      {
        palabra: "Egagrópila",
        definicion:
          "Bola de alimento no digerido que regurgitan las aves con pelo, huesos y plumas.",
      },
      { palabra: "Parafilia", definicion: "Desviación sexual." },
      { palabra: "Inguinal", definicion: "Relativo a las ingles." },
      { palabra: "Emético", definicion: "Vomitivo." },
      {
        palabra: "Paritario",
        definicion: "Dicho de una asmablea donde sus partes estan en igualdad.",
      },
      {
        palabra: "Vodevil",
        definicion:
          "Comedia frívola, ligera y picante, de argumento basado en la intriga y el equívoco, que puede incluir números musicales y de variedades.",
      },
      { palabra: "Pseudo", definicion: "Falso." },
      { palabra: "Antonimia", definicion: "Condición de antónimo." },
      { palabra: "Beligerante", definicion: "Combativo." },
      {
        palabra: "Barragán",
        definicion: "Joven soltero./ Esforzado, fuerte. / Concubina.",
      },
      { palabra: "Anarcoide", definicion: "Cualidad de anárquico." },
      {
        palabra: "Metástasis",
        definicion: "Propagación de un foco canceroso.",
      },
      { palabra: "Rapsoda", definicion: "Poeta." },
      {
        palabra: "Castuzos",
        definicion: "Dedicado a la política sin ética. Malgobernante.",
      },
      { palabra: "Castrense", definicion: "Relativo del ejercito." },
      { palabra: "Procrastinar", definicion: "Diferir, aplazar." },
      { palabra: "Diferir", definicion: "Aplazar." },
      {
        palabra: "Asueto",
        definicion:
          "Periodo de descanso y suspensión de las actividades habituales.",
      },
      {
        palabra: "Agostar",
        definicion: "Debilitar o consumir el vigor o cualidad de una persona.",
      },
      { palabra: "Miccionar", definicion: "Mear, orinar." },
      {
        palabra: "Trashumar",
        definicion: "Dicho de uan persona que cambia de lugar normalmente.",
      },
      {
        palabra: "Filisteo",
        definicion:
          "Persona de espíritu vulgar, de escasos conocmientos y poca sensibilidad artística y literaria.",
      },
      {
        palabra: "Hollar",
        definicion:
          "Pisar dejando señal pisada. / Comprimir algo con los pies. / Humillar, abatir, despreciar.",
      },
      { palabra: "Manflota", definicion: "Burdel." },
      {
        palabra: "Herpético",
        definicion: "Que padece herpes. / Relativo al herpes.",
      },
      {
        palabra: "Conciliábulo",
        definicion: "Junta o reunión para tratar algo oculto.",
      },
      { palabra: "Desdeñar", definicion: "Tratar con desdén." },
      {
        palabra: "Mórbido",
        definicion:
          "Que padece enfermedad o la ocasiona. / Blando, suave, delicado.",
      },
      { palabra: "Declamar", definicion: "Hablar en público con vehemencia." },
      { palabra: "Fariseo", definicion: "Hipócrita. / De mala intención." },
      {
        palabra: "Hiel",
        definicion: "Bilis. / Amargura, disgustos, advesidad.",
      },
      {
        palabra: "Farfolla",
        definicion: "Cosa de mucha apariencia y poca entidad.",
      },
      { palabra: "Lupanar", definicion: "Mancebía." },
      { palabra: "Mancebía", definicion: "Prostíbulo." },
      {
        palabra: "Errabundo",
        definicion: "Que va de uan parte a otra sin asiento fijo.",
      },
      { palabra: "Prosélito", definicion: "Incorporado a una religión." },
      { palabra: "Isonomía", definicion: "Igualdad ante la ley." },
      { palabra: "Adalid", definicion: "Punta de lanza, a quien se le sigue." },
      {
        palabra: "Feudo",
        definicion:
          "Contrato por el cual el soberano y grandes señores concedían en la edad media, tierras o rentas en usufructo, y quien las recibía tenía que obligadamente guardar fidelidad de vasallo y prestar servicio y obligaciones.",
      },
      {
        palabra: "Usufructo",
        definicion:
          "Derecho por el cual una persona puede usar los bienes de otra y dsifrutar de sus beneficios con la obligación de conservarlos y cuidarlos como si fuera suyo. / Provecho o frutos que se obtiene de una cosa.",
      },
      {
        palabra: "Endogamia",
        definicion:
          "Actitud social de rechazo a la incorporación de miembros ajenos al propio grupo o instución. / Contraer matrimonio con personas de la misma ascendencia",
      },
      { palabra: "Fagocitar", definicion: "Absorver o neutralizar." },
      {
        palabra: "Subsumir",
        definicion:
          "Considerar algo como parte de un conjunto más amplio o como caso particular sometido a un principio o norma general.",
      },
      {
        palabra: "Anomia / Anomía",
        definicion:
          "Estado de desorganización social o aislamiento del individuo como consecuencia de falta de congruencia de las normas sociales. / Trastorno del lenguaje, dificultad para recordar las cosas.",
      },
      {
        palabra: "Distopía",
        definicion:
          "Representación de sociedad futura negativa por la alineación humana.",
      },
      {
        palabra: "Edicto",
        definicion:
          "Mandato. / Escrito que se fija en los lugares públicos de las ciudades y poblados, y en el cual se da noticia de algo para que sea notorio a todos",
      },
      { palabra: "Plañidero", definicion: "Lloroso, lastimero." },
      {
        palabra: "Aducir",
        definicion: "Presentar o alegar pruebas, razones, etc.",
      },
      {
        palabra: "Gregario",
        definicion:
          "Que junto con otros similares siguen un dogma a pies juntillas.",
      },
      { palabra: "Tránsfuga", definicion: "Que cambia de opinion rápido." },
      { palabra: "Ígneo", definicion: "Que tiene naturaleza de fuego." },
      {
        palabra: "Endémico",
        definicion: "Propio de determinadas localizdades y regiones.",
      },
      {
        palabra: "Emolumento",
        definicion: "Remuneración adicional que corresponde a un empleo.",
      },
      { palabra: "Factual", definicion: "Perteneciente a los hechos." },
      {
        palabra: "Hipóstasis",
        definicion: "Considerar lo abstracto e irreal como algo real.",
      },
      {
        palabra: "Hipostasiar",
        definicion:
          "Elevar, idealizar / Considerar algo como una realidad absoluta.",
      },
      {
        palabra: "Inanición",
        definicion: "Debilidad grande por falta de algo.",
      },
      { palabra: "Idiocia", definicion: "De idiota." },
      {
        palabra: "Anejo",
        definicion: "Unido y dependiente de algo. / Propio, inherente.",
      },
      {
        palabra: "Anagogía",
        definicion:
          "Elevación y enajenamiento del alma en al contemplación de las cosas divinas.",
      },
      { palabra: "Adumbrar", definicion: "Sombrear ( en dibujo )." },
      { palabra: "Misandria", definicion: "Aversión a los varones." },
      { palabra: "Indolente", definicion: "Que no se afecta o conmueve." },
      {
        palabra: "Pandemónium Pandemonio",
        definicion: "Reunión de demonios. / Lugar de mucho ruido y confusión.",
      },
      { palabra: "Ripiar", definicion: "Hacer pedazos algo." },
      {
        palabra: "Aseverar",
        definicion: "Afirmar, asegurar algo que se dice.",
      },
      {
        palabra: "Sinecura",
        definicion:
          "Empleo o cargo retribuido que ocasiona poco o ningún trabajo.",
      },
      { palabra: "Pecuniario", definicion: "Relativo al dinero en efectivo." },
      { palabra: "Momio", definicion: "Sin gordura. / Chollo. / Momía." },
      {
        palabra: "Fielato",
        definicion:
          "Oficio de fiel. / Oficina a la entrada de las poblaciones en la cual se pagaban los derechos de consumo.",
      },
      { palabra: "Sevicia", definicion: "Trato cruel. / Crueldad excesiva." },
      {
        palabra: "Triunvirato",
        definicion: "Junta de 3 personas para cualquier empresa o asunto.",
      },
      { palabra: "Exhabrupto", definicion: "Salida de tono." },
      {
        palabra: "Pudendas",
        definicion: "Torpe, feo, que debe causar vergüenza. / Miembro viril.",
      },
      { palabra: "Fenecer", definicion: "Concluir, morir, poner fin a algo." },
      { palabra: "Verbigracia", definicion: "ejemplo. / Por ejemplo." },
      {
        palabra: "Concitar",
        definicion:
          "Provocar o causar algo con alguna reacción. / Reunir personas o cosas.",
      },
      {
        palabra: "Perorar",
        definicion:
          "Pronunciar un discuro. / Hablar en la conversación familiar como si se estuviera pronunciando un discurso.",
      },
      {
        palabra: "Vicario",
        definicion:
          "Que tiene las veces, poder y facultades de otra persona o la sustituye. / Segunda superiora en algunos conventos de monjas.",
      },
      { palabra: "Chocarrero", definicion: "Grosero, fullero." },
      {
        palabra: "Espetar",
        definicion:
          "Decir a alguien de palabra o por escrito algo, causándole sorpresa o molestia. / Ponerse tieso, afectando gravedad y majestad. / Encajarse, asegurarse.",
      },
      {
        palabra: "Atávico",
        definicion: "Que es arcaico o característico del pasado.",
      },
      {
        palabra: "Colegir",
        definicion: "Juntar, inferir, sacar una consecuencia de otra cosa.",
      },
      { palabra: "Inferir", definicion: "Sacar consecuencia de una cosa." },
      { palabra: "Sursum corda", definicion: "Latin: Arriba los corazones." },
      {
        palabra: "Incidental",
        definicion: "Que incide. / Que tiene poca importancia respecto a otra.",
      },
      { palabra: "Colacionar", definicion: "Cotejar, colación." },
      {
        palabra: "Cotejar",
        definicion:
          "Confrontar algo con otra u otras cosas, o compararlas teniéndolas a la vista.",
      },
      {
        palabra: "Circunciso",
        definicion: "Pesona circuncidada. / Moro, judio.",
      },
      {
        palabra: "Litigio",
        definicion: "Pleito, altercado, juicio. / Disputa, contienda.",
      },
      {
        palabra: "Genuflexión",
        definicion:
          "Acción y efecto de doblar la rodilla, bajándola hacia el suelo, ordinariamente en señal de reverencia.",
      },
      {
        palabra: "Faccioso",
        definicion: "Inquieto, revoltoso, perturbador de la quietud pública.",
      },
      {
        palabra: "Conflagración",
        definicion:
          "Perturbación repentina y violenta de pueblos o naciones. / Incendio grande.",
      },
      {
        palabra: "Agostar",
        definicion:
          "Consumir, debilitar, o destruir las cualidades físicas o morales de alguien.",
      },
      {
        palabra: "Interpelar",
        definicion:
          "Requerir, compeler, preguntar a alguien. / Implorar a alguien auxilio.",
      },
      { palabra: "Panem et circenses", definicion: "Latin: pan y circo." },
      {
        palabra: "Meconio",
        definicion:
          "Primer excremento de los niños recién nacidos. Jugo que se saca de las cabezas de las adormideras en farmacia.",
      },
      {
        palabra: "Deglutir",
        definicion:
          "Tragar los alimentos, hacerlos pasar de la boca al estómago.",
      },
      {
        palabra: "Idus",
        definicion:
          "En el antiguo cómputo romano y en el eclesiástico, el día 15 de marzo, mayo, julio y octubre, y el 13 de los demás meses.",
      },
      {
        palabra: "Coyunda",
        definicion:
          "Correa fuert y ancha. / Unión conyugal. / Sujección, dominio. / Látigo. / Pene.",
      },
      {
        palabra: "Hespérides",
        definicion:
          "Mit. Griega: Eran mélides ( ninfas de árboles frutales ) que cuidaban un maravillosos jardín en un lejano rincón de occidentes. Estrabrón entre otros lo situan en Tartessos ( sur oeste de la península ibérica )",
      },
      { palabra: "Prea", definicion: "Cosa prendida, tomada o cogida." },
      {
        palabra: "Aqueo",
        definicion:
          "Natural de Acaya, región griega del norte del Peloponeso, o de la Grecia antigua.",
      },
      {
        palabra: "Espolear",
        definicion:
          "Picar con la espuela al caballo. / Avivar, incitar, estimular a alguien para que haga algo.",
      },
      {
        palabra: "Prorratear",
        definicion: "Repartir una cantidad proporcionalmente.",
      },
      {
        palabra: "Erario",
        definicion: "Hacienda. / Contribuyente, tributario.",
      },
      {
        palabra: "Arrostrar",
        definicion:
          "Hacer cara, resisitir sin cobardía calamidades o peligros.",
      },
      {
        palabra: "Opulencia",
        definicion: "Riqueza, abundancia de bienes. / Sobreabundancia de algo.",
      },
      { palabra: "Ánaade", definicion: "Pato." },
      { palabra: "Soporífero", definicion: "Que mueve al sueño." },
      { palabra: "Caro a Ares", definicion: "Querido por Ares." },
      { palabra: "Blasonar ", definicion: "Hacer ostentación de algo." },
      { palabra: "Envés", definicion: "Cara opuesta de una hoja." },
      { palabra: "Entrambos", definicion: "Ambos, los dos." },
      {
        palabra: "Chalaneo",
        definicion:
          "Trato o negocio conseguido con la destreza propia e un chalán.",
      },
      { palabra: "Chalán", definicion: "Estafador." },
      {
        palabra: "Vicario",
        definicion: "Que ayuda o sustituye en las funciones.",
      },
      {
        palabra: "Venial",
        definicion: "Que se opone a la ley pero es fácil de perdonar.",
      },
      {
        palabra: "Protervo",
        definicion: "Que se obstina en la maldad. (tiene un espíritu protervo)",
      },
      { palabra: "Cíngulo", definicion: "Cordón, cinta, cinturón." },
      { palabra: "Fúlgida", definicion: "Fulgurante." },
      {
        palabra: "Artero",
        definicion: "Disimulado, astuto, marrullero, cuco, malicioso, diestro.",
      },
      {
        palabra: "Lid",
        definicion: "Batalla, combate, pelea, discusión, disputa.",
      },
      {
        palabra: "Impeler",
        definicion:
          "Empujar, arrojar, propulsar, impulsar, estimular, incitar.",
      },
      {
        palabra: "Céfiro",
        definicion:
          "Viento templado y húmedo que sopla del oeste. / Viento suave y agradable de primavera.",
      },
      { palabra: "Indómito", definicion: "Indomable, indócil." },
      { palabra: "Cerviz", definicion: "Nuca, cogote." },
      {
        palabra: "Liza",
        definicion: "Plaza, campo, arena. / Combate, pelea, lid, competición.",
      },
      { palabra: "Enhiesta", definicion: "Que esta verticalmente derecho." },
      { palabra: "Solípedos", definicion: "De un sólo dedo." },
      { palabra: "Ijada", definicion: "Cavidad entre costillas y caderas." },
      { palabra: "Refulgente", definicion: "Que emite brillo o fulgor." },
      { palabra: "Crines", definicion: "Pelo del caballor ( cuello y cola )" },
      { palabra: "Asir", definicion: "Tomar o agarrar con las manos." },
      { palabra: "Peplo", definicion: "Ropa de griega." },
      {
        palabra: "Icor",
        definicion: "Serosidad fétida que rezuman ciertas úlceras malignas.",
      },
      {
        palabra: "Diligente",
        definicion:
          "Que pone interés, esmero, eficacia y rápidez en las cosas.",
      },
      { palabra: "Cipris", definicion: "Afrodita." },
      {
        palabra: "Acerbo",
        definicion: "Áspero de sabor y olor. / Cruel muy duro.",
      },
      { palabra: "Himeneo", definicion: "Dios del matrimonio." },
      {
        palabra: "Apocado",
        definicion: "Con timidez, humildad o vergüenza excesiva.",
      },
      { palabra: "Tremolar", definicion: "Ondear bandera." },
      { palabra: "Oblongo", definicion: "Más alto que ancho." },
      {
        palabra: "Orondo",
        definicion:
          "Barrigudo, grueso, gordo, hinchando. / Dicho de una vasija de mucha concavidad.",
      },
      { palabra: "Cotejar", definicion: "Comparar una cosa con otra." },
      {
        palabra: "Colación",
        definicion:
          "Cotejo que se hace de una cosa con otra. / Conferencia o conversación que tenían los antiguos monjes sobre cosas espirituales.",
      },
      {
        palabra: "Refacción",
        definicion:
          "Compostura o reparación de lo estropeado. / Tentempié, restauración...",
      },
      {
        palabra: "Colegiar",
        definicion:
          "Dicho de los individuos de una misma profesión o clase: Reunirse en colegio.",
      },
      {
        palabra: "Colegio",
        definicion:
          "Sociedad o reunión de personas de una misma profesión. Ej: colegio de abogados, de médicos...",
      },
      {
        palabra: "Talasocracia",
        definicion:
          "Dominio de los mares, es un concepto geoestratégico que señala al estado cuyos dominios son principalmente marítimos.",
      },
      {
        palabra: "Inerme",
        definicion: "Que está desprovisto de medios o armas para defenderse.",
      },
      {
        palabra: "Sofisma",
        definicion: "Razón o argumento falso con apariencia de verdad.",
      },
      {
        palabra: "Dote",
        definicion:
          "Conjunto de bienes y derechos aportados por la mujer al matrimonio, que tiene como finalidad atender al levantamiento de las cargas comunes y que le deberá ser devuelto una vez disuelto aquel.",
      },
      {
        palabra: "Prebenda",
        definicion: "Oficio, empleo o ministerio lucrativo y poco trabajoso.",
      },
      {
        palabra: "Omnívoro",
        definicion:
          "Dicho de un animal: Que se alimenta de toda clase de sustancias orgánicas.",
      },
      {
        palabra: "Pusilánime",
        definicion:
          "Falto de valor y ánimo para tomar decisiones o afrontar situaciones comprometidas.",
      },
      {
        palabra: "Verspertino",
        definicion: "Perteneciente o relativo a la tarde.",
      },
      {
        palabra: "Fiduciario",
        definicion:
          "Dicho de un negocio o de un contrato: Basado principalmente en la confianza entre las partes. / Persona que actúa en interés de otra sin hacerlo público.",
      },
      {
        palabra: "Auscultar",
        definicion:
          "Aplicar el oído a la pared torácica o abdominal, con instrumentos adecuados. / Sondear el pensamiento de otras personas, el estado de un negocio, la disposición ajena ante un asunto.",
      },
      {
        palabra: "Delicuescente",
        definicion: "Evanescente, sin vigor, decadente.",
      },
      {
        palabra: "Apiolar",
        definicion:
          "Atar los pies de un animal muerto en la caza. / Prender. / Matar a alguien.",
      },
      {
        palabra: "Claudicar",
        definicion: "Acabar por ceder a presión o tentación.",
      },
      {
        palabra: "Hemiplejía",
        definicion: "Parálisis de todo el lado de un cuerpo.",
      },
      {
        palabra: "Semial",
        definicion:
          "Perteneciente o relativo al semen. / Perteneciente o relativo a la semilla. / Fecundo (fértil).",
      },
      {
        palabra: "Constructo",
        definicion:
          "Construcción teórica para entender un problema determinado.",
      },
      {
        palabra: "Balcanización",
        definicion:
          "División generalmente violenta y artificial por potencias extraregionales de los territorios de los paises que integran una unión.",
      },
      {
        palabra: "Fuero",
        definicion:
          "Jurisdicción, poder. / Norma o código históricos dados a un territorio determinado. / Arrogancia, presunción.",
      },
      {
        palabra: "Conmensurar",
        definicion: "Medir con igual o debida proporción distintas cosas.",
      },
      {
        palabra: "Concomitante",
        definicion: "Que aparece o actúa conjuntamente con otra cosa.",
      },
      {
        palabra: "Subvenir",
        definicion:
          "Acudir al auxilio de una persona o casa. / Pagar el total de los gastos que ocasione cierta cosa.",
      },
      {
        palabra: "Exonerar",
        definicion:
          "Aliviar de una carga u obligación. / Separar, privar o destituir a alguien de un empleo.",
      },
      {
        palabra: "Coercitivo",
        definicion:
          "Que sirve para forzar la voluntad o la conducta de alguien. / Represivo, inhibitorio.",
      },
      {
        palabra: "Diaconía",
        definicion:
          "Distrito y término en que antiguamente estaban divididas las iglesias para el socorro de los pobres, al cuidado de un diácono.",
      },
      {
        palabra: "Edicto",
        definicion:
          "Mandato, decreto publicado con autoridad del príncipe o del magistrado.",
      },
      {
        palabra: "Doxografía",
        definicion:
          "rama de la literatura que comprende aquellas obras dedicadas a recoger los puntos de vista de filósofos y científicos del pasado sobre filosofía, ciencia y otras materias.",
      },
      {
        palabra: "Doxa",
        definicion:
          "Concepto utilizado por Parménides. Según Platón se trata de un conocimiento fenoménico y en consecuencia engañoso. Conocimiento sensible, de opinión. Platón lo confrontaba al conocimiento científico ( Episteme ).",
      },
      {
        palabra: "Pistis",
        definicion:
          "Era la personificación de la buena fe, la confianza y fiabilidad.",
      },
      {
        palabra: "Fenómeno",
        definicion:
          "Lo que se puede percibir con los sentidos. Es el aspecto que las cosas ofrecen ante nuestros sentidos; es decir, el primer contacto que tenemos con las cosas, lo que denominamos experiencia",
      },
      {
        palabra: "Hombre de Estado",
        definicion:
          "El de actitud reconocida para dirigir acertadamente los negocios políticos de una nación.",
      },
      {
        palabra: "Extravagante",
        definicion:
          "Que se hace o dice fuera del orden o común modo de obrar. / Raro, extraño, desacostumbrado, excesivamente peculiar u original.",
      },
      {
        palabra: "Diezmo",
        definicion:
          "Derecho del 10 % del valor de ciertas mercaderías, especialmente el que se pagaba al rey.",
      },
      {
        palabra: "Abad",
        definicion:
          "Superior de un monasterio perteneciente a determinadas órdenes religiosas cristianas con el título de abadía.",
      },
      {
        palabra: "Flatus vocis",
        definicion:
          "Un nombre, palabra o sonido sin mera correspondencia objetiva con el mundo real. Sin valor, algo insignificante y carente de sentido.",
      },
      {
        palabra: "Jerigonza",
        definicion:
          "Lenguaje especial de algunos gremios. / Lenguaje de mal gusto, complicado y difícil de entender. / Acción extraña y ridícula.",
      },
      {
        palabra: "Sistémico",
        definicion:
          "Perteneciente o relativo a la totalidad de un sistema; general, por oposición a local. / Perteneciente o relativo a un organismo en su conjunto.",
      },
      {
        palabra: "Corifeo",
        definicion:
          "Persona que es seguida por otras en una opinión, una ideología o un partido.",
      },
      {
        palabra: "Cainita",
        definicion:
          "Perteneciente o relativo a Caín. / Dicho de un sentimiento o de una actitud de rechazo: Que se dirige contra familiares o amigos.",
      },
      { palabra: "Fratricida", definicion: "Persona que mata a su hermano." },
      {
        palabra: "Demiurgo",
        definicion:
          "Artífice o alma universal que es principio ordenador de los elementos preexistentes.",
      },
      {
        palabra: "Inicuo",
        definicion: "Que no tiene equidad, que no es justo. / Que es malvado.",
      },
      { palabra: "Iniquidad", definicion: "Acto perverso." },
      {
        palabra: "Celada",
        definicion: "Pieza de la armadura para cubrir y proteger la cabeza.",
      },
      {
        palabra: "Ladino",
        definicion:
          "Que actúa con astucia y disimulo para conseguir lo que se propone.",
      },
      {
        palabra: "Sustancial",
        definicion:
          "Relativo a la sustancia de un asunto. / Lo importante o esencial.",
      },
      {
        palabra: "Atómico",
        definicion: "Relativo al átomo, parte indivisible.",
      },
      {
        palabra: "Insustancial",
        definicion: "Carente de sustancia o interés, o muy escaso de ellos.",
      },
      {
        palabra: "Nuclear",
        definicion: "Pertenciente al núcleo, parte central de algo.",
      },
      {
        palabra: "Revocar",
        definicion:
          "Dejar sin efecto una concesión, un mandato o una resolución. / Apartar, retraer, disuadir a alguien de un designio.",
      },
      {
        palabra: "Semítico",
        definicion:
          "Relativo a los pueblos que se establecieron en Mesopotamia y el Próximo Oriente con anterioridad al primer milenio antes de Cristo y que tenían lenguas con un origen común.",
      },
      { palabra: "Capelo", definicion: "Dignidad del cardenal." },
      {
        palabra: "Atopia",
        definicion:
          "Reacción anormal de hipersensibilidad frente a diversos alérgenos.",
      },
      { palabra: "Sui generis", definicion: "De su propio género o especie." },
      {
        palabra: "Mónada",
        definicion:
          "Cada una de las sustancias indivisibles, pero de naturaleza distinta, que componen el universo.",
      },
      {
        palabra: "Hermenéutica",
        definicion: "Técnica o método de interpretación de textos.",
      },
      { palabra: "Impudicia", definicion: "Falta de recato y pudor." },
      {
        palabra: "Introspección",
        definicion:
          "Mirada interior que se dirige a los propios actos o estados de ánimo.",
      },
      {
        palabra: "Beldad",
        definicion:
          "Belleza o hermosura de mujer. / Mujer notable por su hermosura.",
      },
      {
        palabra: "Pedes in terra ad sidera visus",
        definicion: "Latín: Los pies en la tierra, la mirada en el cielo.",
      },
      {
        palabra: "Cicatero",
        definicion:
          "Mezquino, ruin, miserable, que escatima lo que debe dar. / Que da importancia a pequeñas cosas o se ofende por ellas. / Reacio a gastar o compartir sus bienes, especialmente dinero. / Persona que tiene por costumbre u oficio el apropiarse de cosas que no le pertenecen.",
      },
      { palabra: "A espuertas", definicion: "A montones, en abundancia." },
      { palabra: "Beodo", definicion: "Borracho." },
      {
        palabra: "Ecuménico",
        definicion: "Universal, que se extiende a todo el orbe.",
      },
      {
        palabra: "Endo-",
        definicion:
          "Significa 'dentro', 'en el interior'. Endocardio, endógeno.",
      },
      {
        palabra: "-Geno",
        definicion: "Significa 'que genera o produce' o 'que es producido'.",
      },
      {
        palabra: "Perogrullada",
        definicion:
          "Verdad o certeza que, por notoriamente sabida, es necedad o simpleza el decirla.",
      },
      {
        palabra: "Desiderátum",
        definicion:
          "Aspiración, deseo que aún no se ha cumplido. / El no va más.",
      },
      {
        palabra: "Mancomunar",
        definicion:
          "Unir personas, fuerzas o caudales para un fin. / Unirse, asociarse, obligarse de mancomún.",
      },
      { palabra: "Propalar", definicion: "Divulgar algo oculto." },
      { palabra: "Homeo-", definicion: "Significa 'semejante', 'parecido'." },
      {
        palabra: "-patia",
        definicion:
          "Significa 'sentimiento', 'afección' o 'dolencia'. Homeopatía, telepatía.",
      },
      {
        palabra: "Visibilizar",
        definicion:
          "Hacer visible artificialmente lo que no puede verse a simple vista, como con los rayos X los cuerpos ocultos, o con el microscopio los microbios.",
      },
      {
        palabra: "Párvulo",
        definicion:
          "Pequeño, inocente, cándido, sin malicia, humilde, apocado.",
      },
      {
        palabra: "Meta-",
        definicion:
          "Significa 'junto a', 'después de', 'entre', 'con' o 'acerca de'.",
      },
      { palabra: "Cuasi", definicion: "Casi." },
      {
        palabra: "Demudar",
        definicion:
          "Mudar, variar. / Alterar, disfrazar, desfigurar. / Cambiarse repentinamente el color, el gesto o la expresión del semblante.",
      },
      {
        palabra: "Dirimir",
        definicion:
          "Resolver o solucionar un desacuerdo o una discusión. / Deshacer la unidad de un grupo.",
      },
      {
        palabra: "Proto-",
        definicion: "Indica prioridad, preeminencia o superioridad.",
      },
      {
        palabra: "Gnoseología",
        definicion: "Teoría del conocimiento. / Epistemología.",
      },
      {
        palabra: "Determinar",
        definicion:
          "Decidir algo, despejar la incertidumbre sobre ello. / Establecer o fijar algo. / Señalar o indicar algo con claridad o exactitud.",
      },
      {
        palabra: "Acémila",
        definicion: "Mula o macho de carga. / Asno, persona ruda.",
      },
      {
        palabra: "Pico-",
        definicion: "Significa 'una billonésima (10−12) parte'.",
      },
      { palabra: "Choteo", definicion: "Burla, pitorreo." },
      {
        palabra: "Desbrozar",
        definicion:
          "Quitar la broza, desembarazar, limpiar. / Eliminar los aspectos accesorios o confusos que complican un asunto innecesariamente y entorpecen su comprensión.",
      },
      {
        palabra: "Exudar Exudación",
        definicion:
          "Dicho de un cuerpo: Dejar que salga por sus poros o sus grietas un líquido o una sustancia viscosa.",
      },
      { palabra: "Iso-", definicion: "Significa 'igual'" },
      {
        palabra: "Isomorfo",
        definicion:
          "Dicho de dos o más cuerpos: Que, con diferente composición química, presentan igual estructura cristalina y pueden cristalizar asociados;",
      },
      {
        palabra: "Palíndromo",
        definicion:
          "Palabra o frase cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha que de derecha a izquierda; p. ej., anilina; dábale arroz a la zorra el abad.",
      },
      {
        palabra: "Engranar",
        definicion:
          "Enlazar, trabar. / Dicho de dos ruedas dentadas: Encajar entre sí.",
      },
      {
        palabra: "Sojuzgar",
        definicion: "Sujetar o dominar con violencia algo o a alguien.",
      },
      {
        palabra: "Sibila",
        definicion:
          "Mujer sabia a quien los antiguos atribuyeron espíritu profético.",
      },
      {
        palabra: "Bóvido",
        definicion:
          "Dicho de un mamífero: Del grupo de los rumiantes, carente de incisivos en la mandíbula superior y con ocho en la inferior, y con cuernos óseos no caedizos cubiertos por estuche córneo tanto en el macho como en la hembra",
      },
      { palabra: "Procaz", definicion: "Atrevido, desvergonzado." },
      { palabra: "Chamagoso", definicion: "Que no está limpio." },
      { palabra: "Poluto", definicion: "Sucio." },
      {
        palabra: "Taxonomía",
        definicion:
          "Dentro de la biología, la ordenación jerarquizada y sistemática, con sus nombres, de los grupos de animales y de vegetales. / Clasificación.",
      },
      {
        palabra: "Taxología",
        definicion: "Técnica o ciencia de las clasificaciones (de las cosas).",
      },
      {
        palabra: "Esquilmar",
        definicion:
          "Coger el fruto de las haciendas, heredades y ganados. / Dicho de una planta: Chupar con exceso el jugo de la tierra. / Menoscabar, agotar una fuente de riqueza sacando de ella mayor provecho que el debido.",
      },
      {
        palabra: "Parvo",
        definicion: "Pequeño en tamaño, importancia o cantidad.",
      },
      {
        palabra: "Adolecer",
        definicion:
          "Causar dolencia o enfermedad. / Caer enfermo o padecer alguna enfermedad habitual. / Tener o padecer algún defecto. / Compadecerse",
      },
      {
        palabra: "Ermita",
        definicion:
          "Causar dolencia o enfermedad. / Caer enfermo o padecer alguna enfermedad habitual. / Tener o padecer algún defecto. / Compadecerse",
      },
      {
        palabra: "Disforme",
        definicion: "Feo, horroroso, monstruoso. / Deforme.",
      },
      { palabra: "Calígine", definicion: "Niebla, oscuridad, tenebrosidad." },
      { palabra: "Decaedro", definicion: "Sólido que tiene 10 caras." },
      {
        palabra: "Trapaza",
        definicion:
          "Artificio engañoso e ilícito con que se perjudica y defrauda a alguien en alguna compra, venta o cambio. / Fraude, engaño.",
      },
      {
        palabra: "Demoscopia",
        definicion:
          "Estudio de las opiniones, aficiones y comportamiento humanos mediante sondeos de opinión.",
      },
      { palabra: "Quiralidad", definicion: "Propiedad de quiral" },
      {
        palabra: "Quiral",
        definicion:
          "Dicho de una estructura o de un objeto: Que no es superponible con su imagen especular, asimétrico.",
      },
      {
        palabra: "Dextrógiro",
        definicion: "Que gira en el sentido de las agujas del reloj.",
      },
      {
        palabra: "Levógiro",
        definicion:
          "Que gira en el sentido contrario de las agujas del reloj. / Que desvía hacia la izquierda el plano de la polarización de la luz al ser atravesado por ella.",
      },
      {
        palabra: "Mesocrático",
        definicion: "Perteneciente o relativo a la clase media.",
      },
      {
        palabra: "Mesocracia",
        definicion:
          "Sistema social en que la clase media es preponderante. / Clase media.",
      },
      { palabra: "Ubérrimo", definicion: "Muy fértil" },
      {
        palabra: "Naftalina",
        definicion:
          "Naftaleno utilizado contra la polilla y como desinfectante.",
      },
      {
        palabra: "Sinecdóque",
        definicion:
          "Designación de una cosa con el nombre de otra, de manera similar a la metonimia, aplicando a un todo el nombre de una de sus partes, o viceversa, a un género el de una especie, o al contrario, a una cosa el de la materia de que está formada, etc., como en cien cabezas por cien reses, en los mortales por los seres humanos, en el acero por la espada, etc.",
      },
      { palabra: "Genericidad", definicion: "Cualidad de genérico." },
      { palabra: "Intensión", definicion: "Compresión. / Intensidad." },
      {
        palabra: "Conceptuar",
        definicion: "Formar concepto de algo o alguien.",
      },
      { palabra: "Proselitistas", definicion: "Celoso de ganar prosélitos." },
      {
        palabra: "Prosélito",
        definicion:
          "Persona incorporada a una religión. / Partidario que se gana para una facción, parcialidad o doctrina.",
      },
      { palabra: "Inquinar", definicion: "Manchar, contagiar." },
      {
        palabra: "Arribista",
        definicion:
          "Persona que progresa en la vida por medios rápidos y sin escrúpulos.",
      },
      { palabra: "Redrar", definicion: "Arredrar (separar, apartar)" },
      {
        palabra: "Arredrar",
        definicion:
          "Retraer, hacer volver atrás, por el peligro que ofrece o el temor que infunde la ejecución de algo. / Amedrentar, atemorizar.",
      },
      { palabra: "Indiano", definicion: "Alguien que llega rico de América." },
      { palabra: "Inequidad", definicion: "Desigualdad o falta de equidad." },
      {
        palabra: "Iniquidad",
        definicion: "Buen orden ( en sentido político, no moral. )",
      },
      { palabra: "Hediento", definicion: "Que despide mal olor." },
      {
        palabra: "Mefítico",
        definicion:
          "Dicho de una cosa: Que, respirada, puede causar daño, y especialmente cuando es fétida.",
      },
      {
        palabra: "Colombofilia",
        definicion:
          "Técnica o afición a la cría, adiestramiento, cuidado, etc., de las palomas, en especial de las mensajeras.",
      },
      {
        palabra: "Cáustico",
        definicion:
          "Dicho de una cosa: Que quema y destruye los tejidos animales. / Mordaz.",
      },
      {
        palabra: "Inocular",
        definicion:
          "Introducir en un organismo una sustancia que contiene los gérmenes de una enfermedad. / Pervertir, contaminar a alguien con el mal ejemplo o la falsa doctrina.",
      },
      { palabra: "Paladino", definicion: "Público, claro y patente." },
      {
        palabra: "Conníve",
        definicion:
          "Del inglés: Guiñar el ojo. / Disimular, fingir ceguedad e ignorancia tolerando o permitiendo algo.",
      },
      {
        palabra: "Cianosis",
        definicion:
          "Coloración azul y alguna vez negruzca o lívida de la piel, debida a trastornos circulatorios.",
      },
      {
        palabra: "Cianótico",
        definicion: "Perteneciente o relativo a la cianosis.",
      },
      { palabra: "Lívido", definicion: "Amoratado. / Intensamente pálido." },
      {
        palabra: "Coadyuvar",
        definicion: "Contribuir o ayudar a que algo se realice o tenga lugar",
      },
      {
        palabra: "Coadyuvante",
        definicion:
          "Que coadyuva. / Persona que interviene en un proceso sosteniendo la pretensión de una de las partes.",
      },
      {
        palabra: "Septicemia",
        definicion:
          "Infección generalizada producida por la presencia en la sangre de microorganismos patógenos o de sus toxinas.",
      },
      { palabra: "Sepsis", definicion: "Septicemia." },
      { palabra: "Gargajear", definicion: "Arrojar gargajos." },
      { palabra: "Expeler", definicion: "Expulsar." },
      {
        palabra: "Deontología",
        definicion:
          "Parte de la ética que trata de los deberes, especialmente de los que rigen una actividad profesional. / Conjunto de deberes relacionados con el ejercicio de una determinada profesión.",
      },
      { palabra: "Mondongo", definicion: "Estómago y tripas de un animal." },
      {
        palabra: "Erotomanía",
        definicion: "Deseo sexual exagerado o exacerbado en una persona.",
      },
      {
        palabra: "Desproposito",
        definicion: "Dicho o hecho inoportuno e inconveniente.",
      },
      { palabra: "-fagia", definicion: "Desgina la acción de comer o tragar." },
      {
        palabra: "Gehena",
        definicion:
          "Infierno o purgatorio judío, lugar de purificación para el malvado",
      },
      { palabra: "Denario", definicion: "Antigua moneda romana de plata." },
      {
        palabra: "Contumacia",
        definicion:
          "Actitud de una persona que se mantiene obstinadamente en un error.",
      },
      {
        palabra: "Supra-",
        definicion:
          "Significa superior o encima (suprarrenal, supraestructura)",
      },
      { palabra: "Tripudo", definicion: "Que tiene mucha tripa." },
      {
        palabra: "Heraclida",
        definicion:
          "Descendiente de Heracles (Hércules), héroe griego, hijo de Zeus.",
      },
      {
        palabra: "Loa",
        definicion:
          "Expresion o discurso con que se alaban las cualidades o los méritos de una persona o una cosa. / En el teatro clásico, prólogo o introducción con que solía iniciarse la representación.",
      },
      {
        palabra: "Frenopatía",
        definicion: "Nombre que se daba antiguamente a la psiquiatría.",
      },
      {
        palabra: "Merma",
        definicion:
          "Disminución o reducción del volumen o la cantidad de una cosa.",
      },
      {
        palabra: "Prolapso",
        definicion:
          "Descenso o caída de un órgano interno, una víscera, etc., del cuerpo a causa de la relajación de sus medios de fijación. especialemnte cuando sale a tráves de un orificio natural o artificial.",
      },
      {
        palabra: "Boyante",
        definicion:
          "Que se encuentra en una situación favorable, próspera o de felicidad.",
      },
      { palabra: "Tartufo", definicion: "Hombre hipócrita y falso." },
      {
        palabra: "Detritus",
        definicion:
          "Resultado de la descomposición de una masa sólida en partículas.",
      },
      {
        palabra: "Ínfula",
        definicion:
          "Resultad de la descomposición de una masa sólida en partículas. / Vanidad pretenciosa.",
      },
      {
        palabra: "Sociópata",
        definicion:
          "Trastorno de personalidad antisocial, es una patología de índole psíquico que deriva en que las personas que la padecen pierden la noción de la importancia de las normas sociales, como son las leyes y los derechos individuales.",
      },
      {
        palabra: "Resiliencia",
        definicion:
          "Capacidad de adaptación de un ser vivo frente a un agente perturbador o un estado o situación adversos. / Capacidad de un material, mecanismo o sistema para recuperar su estado inicial cuando ha cesado la perturbación a la que había estado sometido.",
      },
      {
        palabra: "Departir",
        definicion:
          "Hablar, conversar. / Separar, repartir, dividir en partes. / Diferenciar, distinguir.",
      },
      {
        palabra: "Arrabalero",
        definicion: "Que vive en los arrabales o periferias de las ciudades.",
      },
      {
        palabra: "Respecto",
        definicion: "Razón, relación o proporción de algo a otra cosa.",
      },
      {
        palabra: "Espinar",
        definicion:
          "Punzar. / Herir, lastimar y ofender con palabras picantes.",
      },
      {
        palabra: "Veleidad",
        definicion:
          "Voluntad antojadiza o deseo vano. / Inconstancia, ligereza.",
      },
      {
        palabra: "Emérito",
        definicion:
          "Dicho de una persona, especialmente de un profesor: Que se ha jubilado y mantiene sus honores y alguna de sus funciones. / En la Roma antigua, dicho de un soldado: Que había cumplido su tiempo de servicio y disfrutaba la recompensa debida a sus méritos.",
      },
      {
        palabra: "Prominente",
        definicion:
          "Que se levanta o sobresale sobre lo que está a su inmediación o alrededores. / Ilustre, famoso, destacado.",
      },
      {
        palabra: "Connivencia",
        definicion:
          "Disimulo o tolerancia en el superior acerca de las transgresiones que cometen sus subordinados contra las reglas o las leyes bajo las cuales viven. / Confabulación.",
      },
      {
        palabra: "Inopinado",
        definicion: "Que sucede sin haber pensado en ello, o sin esperarlo.",
      },
      {
        palabra: "Benzodiazepinas",
        definicion:
          "Las benzodiazepinas son medicamentos psicotrópicos que actúan sobre el sistema nervioso central, con efectos sedantes, hipnóticos, ansiolíticos, anticonvulsivos, amnésicos y miorrelajantes",
      },
      {
        palabra: "Savoir faire",
        definicion:
          "Destreza o gracia especial que tiene una persona para hacer las cosas, especialmente las relacionadas con el trato social.",
      },
      {
        palabra: "Impeler",
        definicion:
          "Impulsar o hacer que una cosa o persona adquiera un movimiento rápido al aplicarle una fuerza. / Ejercer presión o influencia sobre una persona para que haga cierta cosa.",
      },
      {
        palabra: "Apolíneo",
        definicion:
          "De Apolo (dios de las artes en la mitología griega) o relacionado con él. / Que responde al canon de belleza masculina.",
      },
      {
        palabra: "Profesar",
        definicion:
          "Aceptar y seguir [una persona] voluntariamente una religión, una doctrina o una creencia. / Tener [una persona] una determinada inclinación o un sentimiento intenso hacia algo o alguien.",
      },
      {
        palabra: "Sílfide",
        definicion:
          "Ninfa o espíritu elemental del aire de la mitología germánica. / Mujer que es muy esbelta y muy bella.",
      },
      {
        palabra: "Herético",
        definicion: "Que contiene, implica o defiende herejías.",
      },
      {
        palabra: "Subyugar",
        definicion:
          "Someter o dominar completamente a una persona o colectividad utilizando la persuasión. / Dominar [una pasión o un sentimiento, normalmente positivos] a alguien.",
      },
      {
        palabra: "Alevosía",
        definicion:
          "Cautela para asegurar la comisión de un delito contra las personas, sin riesgo para el delincuente. Es circunstancia agravante de la responsabilidad criminal. / Traición, Perfidia.",
      },
      {
        palabra: "Patria",
        definicion:
          "Tierra de los padres, la tierra paterna. / Tierra natal o adoptiva ordenada como nación, a la que se siente ligado el ser humano por vínculos jurídicos, históricos y afectivos.",
      },
      {
        palabra: "Vernáculo",
        definicion:
          "Dicho especialmente del idioma o lengua: Doméstico, nativo, de la casa o país propios.",
      },
      { palabra: "Luctuoso", definicion: "Triste, fúnebre y digno de llanto." },
      {
        palabra: "Silicosis",
        definicion:
          "Enfermedad crónica del aparato respiratorio que se produce por haber aspirado polvo de sílice en gran cantidad.",
      },
      {
        palabra: "Óbito",
        definicion: "Muerte de una persona. / Deceso, defunción.",
      },
      { palabra: "Deceso", definicion: "Muerte de una persona." },
      {
        palabra: "Polisémica",
        definicion: "Palabra que tiene varios significados.",
      },
      {
        palabra: "Monosémica",
        definicion: "Palabra que tiene un único significado.",
      },
      { palabra: "Parafilia", definicion: "Desviación sexual." },
      { palabra: "Inquina", definicion: "Aversión, mala voluntad. Ojeriza." },
      {
        palabra: "Monacato",
        definicion: "Estado o profesión de monje. / Institución monástica.",
      },
      {
        palabra: "Horda",
        definicion:
          "Comunidad de salvajes nómadas. / Grupo de gente que obra sin disciplina y con violencia.",
      },
      {
        palabra: "Auspiciar",
        definicion: "Patrocinar, favorecer. / Presagiar, adivinar, predecir.",
      },
      {
        palabra: "Homonización",
        definicion:
          "Proceso por el cual una raza de primates dio lugar a la especie humana.",
      },
      {
        palabra: "Comicios",
        definicion:
          "Actos previos a una votación cuya finalidad es informar y convencer a los votantes de las ideas de una candidatura.",
      },
      {
        palabra: "Motu Propio",
        definicion: "Voluntariamente o por propia iniciativa.",
      },
      {
        palabra: "Auspiciar",
        definicion:
          "Patrocinio o ayuda que recibe una persona, una entidad, un proyecto, etc., para propiciar su desarrollo o su ejecución. / Señal o indicio que se interpreta como el anuncio de un hecho futuro, especialmente en relación con una actividad que se emprende.",
      },
      {
        palabra: "Sepelio",
        definicion: "Ceremonia de inhumación o entierro de un cadaver.",
      },
      { palabra: "Inhumar", definicion: "Enterrar un cadaver." },
      {
        palabra: "Proceloso",
        definicion: "Borrascoso, tormentoso, tempestuoso.",
      },
      {
        palabra: "Sinapsis",
        definicion:
          "Conexión entre el axón de una neurona y la dendrita de otra cercana mediante neurotransmisores. / Relación funcional entre dos células. / Unión de dos cromosomas durante la profase.",
      },
      {
        palabra: "Letanía",
        definicion:
          "Oración dialogada compuesta por una serie de súplicas o invocaciones breves a Dios o a los santos que una persona recita o canta y que las demás personas que participan en la oración repiten o contestan. / Lista o enumeración larga y monótona.",
      },
      {
        palabra: "Séptico",
        definicion:
          "Que produce putrefacción o es causado por ella. / Que contiene gérmenes patógenos",
      },
      {
        palabra: "Patógeno",
        definicion: "Que origina y desarrolla una enfermedad",
      },
      {
        palabra: "Facineroso",
        definicion:
          "Delincuente habitual. / Que origina y desarrolla una enfermedad.",
      },
      {
        palabra: "Contubernio",
        definicion:
          "Alianza o liga vituperable. / Habitación con otra persona. / Cohabitación ilícita.",
      },
      {
        palabra: "Efigie",
        definicion:
          "Personificación, representación viva de un sentimiento. / Imagen o representación de una persona.",
      },
      {
        palabra: "Frontispicio",
        definicion:
          "Fachada o delantera de un edificio, mueble u otra cosa. / Página de un libro anterior a la portada, que suele contener el título y algún grabado o viñeta. / Frontón.",
      },
      { palabra: "Pecunio", definicion: "Peculio" },
      {
        palabra: "Peculio",
        definicion: "Dinero o bienes que una persona posee.",
      },
      {
        palabra: "Sufete",
        definicion:
          "Cada uno de los dos magistrados supremos de Cartago y de otras repúblicas fenicias.",
      },
      {
        palabra: "Inerme",
        definicion: "Sin armas. / Desprovisto de aguijones, pinchos o espinas.",
      },
      {
        palabra: "Desabrir",
        definicion:
          "Dar mal gusto a la comida. / Disgustar, desazonar el ánimo de alguien. ",
      },
      {
        palabra: "Sucedáneo",
        definicion:
          "Dicho de una sustancia: Que, por tener propiedades parecidas a las de otra, puede reemplazarla.",
      },
      {
        palabra: "Imprecar",
        definicion:
          "Proferir palabras con que se expresa el vivo deseo de que alguien sufra mal o daño.",
      },
      {
        palabra: "Pedigón",
        definicion:
          "Que pide con frecuencia e inoportunidad. / Que pide, especialmente con insistencia.",
      },
      {
        palabra: "Desgajar",
        definicion:
          "Desgarrar, arrancar, separar con violencia la rama del tronco de donde nace. / Despedazar, romper, deshacer algo unido y trabado. / ",
      },
      {
        palabra: "Sincretismo",
        definicion: "Combinación de distintas teorías, actitudes u opiniones.",
      },
      {
        palabra: "Hominización",
        definicion: "Proceso evolutivo, de primate a especie humana.",
      },
      {
        palabra: "Pregnancia",
        definicion:
          "Cualidad de las formas visuales que captan la atención del observador por la simplicidad, equilibrio o estabilidad de su estructura.",
      },
      {
        palabra: "Tropismo",
        definicion:
          "Tendencia de un organismo a reaccionar de una manera determianda a los estímulos exteriores.",
      },
      {
        palabra: "Escópico",
        definicion:
          "Visual, 'con la mirada'. Se usa con frecuencia en el psicoanálisis y en las artes visuales.",
      },
      {
        palabra: "Pulsión",
        definicion:
          "Impuslo. En psicoanálisis fuerza que impulsa al sujeto a llevar a cabo una acción.",
      },
      { palabra: "Príapo", definicion: "Pene, especialmente el del hombre." },
      {
        palabra: "Meandro",
        definicion:
          "Cada una de las curvas que describe el curso de un río. Adorno de líneas sinuosas y repetidas.",
      },
      {
        palabra: "Sosiego",
        definicion: "Calma, tranquilidad, quietud, paz, placidez.",
      },
      { palabra: "Abrevadero", definicion: "Lugar donde abreva el ganado." },
      { palabra: "Abrevar", definicion: "Beber, especialmente los animales." },
      {
        palabra: "Remora",
        definicion:
          "Obstáculo físico o inmaterial que impide un proceso, un proyecto o una acción.",
      },
      {
        palabra: "Mitosis",
        definicion:
          "Proceso de reproducción de una célula que consiste en la división de los cromosomas y en la división del núcleo.",
      },
      {
        palabra: "Ameba",
        definicion:
          "Una protista unicelular del género Amoeba. Es un protozoo caracterizado por su forma cambiante, puesto que carece de pared celular, y por su movimiento ameboide a base de seudópodos",
      },
      {
        palabra: "Elucubrar",
        definicion:
          "Reflexionar a cerca de algo con atención y cuidado para estudiarlo o comprenderlo bien o para llegar a alguna conclusión.",
      },
      {
        palabra: "Acre",
        definicion:
          "Áspero, rudo, poco agradable y picante al gusto y al olfato, como el sabor y el olor del ajo, del fósforo, etc.",
      },
      {
        palabra: "Verba volant scripta manent",
        definicion:
          "Cita latina de Cayo Tito: 'Las palabras vuelan, lo escrito queda.'",
      },
      {
        palabra: "Truculento",
        definicion:
          "Que sobrecoge o asusta por su morbosidad, exagerada crueldad o dramatismo.",
      },
      {
        palabra: "Eminentemente",
        definicion: "Predominantemente. Que tiene un grado superior.",
      },
      { palabra: "Siliente", definicion: "Silencioso." },
      {
        palabra: "Polonio 210",
        definicion: "Se trata de un raro metaloide altamente radiactivo",
      },
      {
        palabra: "Histriónico",
        definicion: "Perteneciente o relativo al histrión.",
      },
      {
        palabra: "Histrión",
        definicion:
          "Actor teatral. / Persona que se expresa con afectación o exageración propia de un actor teatral. / Prestidigitador, acróbata o cualquier otra persona que divertía al público con disfraces. / Hombre que representaba disfrazado en la comedia o tragedia antigua.",
      },
      {
        palabra: "Irredento",
        definicion:
          "[territorio] Que no está anexionado a otro al que se considera unido por razones nacionales. / Que está sin redimir, perdonar o liberar. 'esta actitud, según algunos, fue motivada por una irredenta búsqueda de perfección'",
      },
      {
        palabra: "Redimir",
        definicion:
          "Rescatar o sacar de esclavitud al cautivo mediante precio. / Comprar de nuevo algo que se había vendido, poseído o tenido por alguna razón o título. / Librar de una obligación o extinguirla.",
      },
      {
        palabra: "Pírrico",
        definicion:
          "Dicho de un triunfo o de una victoria: Obtenidos con más daño del vencedor que del vencido. / Conseguido con mucho trabajo o por un margen muy pequeño. / De poco valor o insuficiente, especialmente en proporción al esfuerzo realizado. / Dicho de una danza: Practicada en la Grecia antigua y que imitaba un combate.",
      },
      {
        palabra: "Disgenesia",
        definicion:
          "Disgenesia es un término opuesto a la eugenesia, y es utilizado por algunos científicos actuales para caracterizar la selección de variables genéticas negativas.",
      },
      {
        palabra: "Eugenesia",
        definicion:
          "Aplicación de las leyes biológicas de la herencia al perfeccionamiento de la especie humana.",
      },
      {
        palabra: "Divergente",
        definicion:
          "Que diverge, que se separa en dos líneas. / Discordar, discrepar.",
      },
      {
        palabra: "Discordante",
        definicion:
          "Que está en desacuerdo con otra u otras personas o cosas. / Que no guarda consonancia armónica con los demás sonidos de un conjunto.",
      },
      {
        palabra: "Medianía",
        definicion:
          "Vulgar, del montón. / Condición de ser medio, mediano o promedio. / Por extensión, cosa o persona sin defectos o virtudes notorias",
      },
      {
        palabra: "Peccata minuta",
        definicion:
          "Lat. Pequeño pecado. / Expresión latina familiar que se usa para indicar un error o falta leve. Se usa en sentido coloquial para designar una culpa, equivocación o error de poca importancia. / Se usa para referirse a algo sin importancia o de poco valor. 'Lo que ha hecho este hombre es peccata minuta, en comparación con lo que han hecho otros.'",
      },
      {
        palabra: "Mindfulness",
        definicion:
          "La atención plena, conciencia plena o conciencia pura; también traducido como conciencia es una facultad espiritual o psicológica que se consideran de gran importancia en el camino hacia la iluminación",
      },
      {
        palabra: "Verbosidad",
        definicion: "Abundancia de palabras en la elocución.",
      },
      {
        palabra: "Elocución",
        definicion:
          "Manera de hablar y manejar los conceptos. / Modo de elegir y distribuir los pensamientos y las palabras en el discurso.",
      },
      { palabra: "Locuacidad", definicion: "Cualidad de locuaz." },
      { palabra: "Locuaz", definicion: "Que habla mucho o demasiado. / Loco." },
      { palabra: "Ávido", definicion: "Ansioso, codicioso." },
      {
        palabra: "Embelesar",
        definicion: "Arrebatar o cautivar los sentidos.",
      },
      {
        palabra: "Habitud",
        definicion:
          "Relación que tiene una cosa respecto de otra. / Hábito, costumbre.",
      },
      {
        palabra: "Disforia",
        definicion:
          "La disforia se caracteriza generalmente como una emoción desagradable o molesta, como la tristeza, ansiedad, irritabilidad o inquietud. Es el opuesto etimológico de la euforia.",
      },
      {
        palabra: "Fraseología",
        definicion:
          "Conjunto de modos de expresión peculiares de una lengua, de un grupo, de una época, actividad o individuo. / Conjunto de expresiones intrincadas, pretenciosas o falaces. / Palabrería.",
      },
      {
        palabra: "Facundia",
        definicion: "Facilidad y desenvoltura en el hablar.",
      },
      {
        palabra: "Astracanada",
        definicion:
          "Acción o comportamiento públicos disparatados y ridículos.",
      },
      {
        palabra: "Exhortar",
        definicion: "Incitar o actuar mediante razones o ruegos.",
      },
      {
        palabra: "Exabrupto",
        definicion: "Salida de tono o ademán inesperado con viveza.",
      },
      { palabra: "Dialectal", definicion: "Relativo del dialecto." },
      { palabra: "Arameo", definicion: "Perteneciente a un pueblo semítico." },
      {
        palabra: "Esperanto",
        definicion:
          "Lengua que fue creada para convertirse en una lengua auxiliar internacional, crada por un oftalmólog Polaco.",
      },
      { palabra: "Sofisticar", definicion: "Falsificar o corromper algo." },
      {
        palabra: "Fluctuación",
        definicion:
          "Oscilar. / Duda, irresolución o indeterminación. /  Dicho de una cosa: correr el riesgo de perderse y aurrinarse",
      },
      { palabra: "Punición", definicion: "Castigo." },
      {
        palabra: "Vesícula",
        definicion:
          "Vegija. / Abultamiento que aparece en la piel en forma de bolsa pequeña llena de liquido, a causa de una quemadura, roce o enfermedad.",
      },
      { palabra: "Seráfico", definicion: "Angelical." },
      { palabra: "Presbicia", definicion: "Vista cansada." },
      {
        palabra: "Proléptico",
        definicion:
          "Conocimiento anticipado de una cosa, en la doctrina de los epicúreos y los estoicos.",
      },
      {
        palabra: "Acucia",
        definicion: "Diligencia, solicitud, prisa. / Deseo vehemente.",
      },
      {
        palabra: "Bluf",
        definicion:
          "Montaje propagandístico para crear un prestigio falso. / Fanfarronada.",
      },
      {
        palabra: "Prurito",
        definicion:
          "Deseo persistente y excesivo de hacer algo de la mejor manera posible.",
      },
      {
        palabra: "Egotismo",
        definicion:
          "Prurito de hablar de sí mismo. / Sentimiento exagerado de la propia personalidad.",
      },
      {
        palabra: "Abigarrado",
        definicion: "Heterogéneo, reuinido sin concierto.",
      },
      {
        palabra: "Heterogéneo",
        definicion: "Compuesto de partes de diversa naturaleza.",
      },
      { palabra: "Trepidar", definicion: "Temblar fuertemente." },
      { palabra: "Filia", definicion: "Amor o afición por algo." },
      {
        palabra: "Diáspora",
        definicion:
          "Dispersión de grupos humanos que abandonan su lugar de origen.",
      },
      {
        palabra: "Injerir",
        definicion:
          "Meter una cosa en otra. / Injertar plantas. / Introducir en un escrito una palabra, una nota, un texto, etc. / Entremeterse, introducirse en una dependencia o negocio.",
      },
      { palabra: "Acaecer", definicion: "Suceder." },
      {
        palabra: "Exacerbar",
        definicion:
          "Irritar, causar muy grave enfado o enojo. / Agravar o avivar una enfermedad, una pasión, una molestia. / Intensificar, extremar, exagerar.",
      },
      {
        palabra: "Falsario",
        definicion:
          "Que falsea algo. / Que suele hacer falsedades o decir mentiras.",
      },
      {
        palabra: "Indulgente",
        definicion:
          "Inclinado a perdonar y disimular los yerros o a conceder gracias.",
      },
      {
        palabra: "Menesteroso",
        definicion: "Falto, necesitado, que carece de una cosa o de muchas.",
      },
      {
        palabra: "Trascendencia",
        definicion:
          "Penetración, perspicacia. / Resultado, consecuencia de índole grave o muy importante. / Aquello que está más allá de los límites naturales.",
      },
      {
        palabra: "Panegirista",
        definicion:
          "Orador que pronuncia el panegírico. / Persona que alaba algo o a alguien de palabra o por escrito.",
      },
      { palabra: "Loador", definicion: "Alabador. / Que hace loa." },
      {
        palabra: "Conmiseración",
        definicion: "Compasión que se tiene del mal de alguien.",
      },
      {
        palabra: "Gentil",
        definicion:
          "Entre los judíos, dicho de una persona o una comunidad: Que profesa otra religión. / Pagano. / Notable. / Amable o cortés.",
      },
      {
        palabra: "Mediato",
        definicion:
          "Que en tiempo, lugar o grado está próximo a una cosa, mediando otra entre las dos, como el nieto respecto del abuelo.",
      },
      { palabra: "Dación", definicion: "Acción y efecto de dar algo." },
      {
        palabra: "Azorar",
        definicion:
          "Turbar o hacer perder la serenidad a alguien de modo que no pueda obrar acertadamente.",
      },
      {
        palabra: "Conturbar",
        definicion:
          "Alterar [algo] el ánimo de una persona de manera que pierda la serenidad o que no acierte a hablar ni a proseguir lo que hacía.",
      },
      {
        palabra: "Disentir",
        definicion: "No ajustarse al sentir o parecer de alguien.",
      },
      {
        palabra: "Glosa",
        definicion:
          "Explicación que se pone al margen como aclaración de un texto escrito.",
      },
      {
        palabra: "Glosar",
        definicion:
          "Poner glosas en algo. / Comentar palabras y dichos propios o ajenos, ampliándolos. / Interpretar o tomar en mal sentido y con intención siniestra una palabra, una proposición o un acto.",
      },
      {
        palabra: "Profeta",
        definicion:
          "Persona que, por señales o cálculos hechos previamente, conjetura y predice acontecimientos futuros.",
      },
      {
        palabra: "Teorético",
        definicion:
          "Teórico. / Que se dirige al conocimiento, no a la acción ni a la práctica. / Estudio del conocimiento.",
      },
      {
        palabra: "Delación",
        definicion: "Acusación o denuncia de un hecho censurable.",
      },
      {
        palabra: "Ágrafo",
        definicion:
          "Que es incapaz de escribir o no sabe hacerlo. / Dicho de una persona: Poco dada a escribir.",
      },
      { palabra: "Demañando", definicion: "Falta de mañan y habilidad." },
      {
        palabra: "Pingüe",
        definicion: "Craso, gordo, mantecoso. / Abundante, copioso, fértil.",
      },
      {
        palabra: "Craso",
        definicion:
          "Indisculpable. / Graso, untuoso. / Grueso, gordo. Crasitud.",
      },
      { palabra: "Crasitud", definicion: "Gordura. Tejido adiposo." },
      {
        palabra: "Hálito",
        definicion:
          "Aliento. / Vapor que algo arroja. / Soplo suave y apacible.",
      },
      { palabra: "Bullanga", definicion: "Tumulto, rebullicio." },
      { palabra: "Palmario", definicion: "Claro, patente, manifiesto." },
      {
        palabra: "Diamantino",
        definicion:
          "Perteneciente o relativo al diamante. Duro, persistente, inquebrantable.",
      },
      {
        palabra: "Inquirir",
        definicion: "Indagar, averiguar o examinar cuidadosamente algo.",
      },
      {
        palabra: "Sima",
        definicion: "Cavidad grande y muy profunda en la tierra.",
      },
      { palabra: "Munícipe", definicion: "Vecino de un municipio. / Concejal" },
      {
        palabra: "Afasia",
        definicion: "Daño en el cerebro que impide el habla.",
      },
      { palabra: "Septentrional", definicion: "Norte." },
      { palabra: "Meridional", definicion: "Sur." },
      {
        palabra: "Nesciencia",
        definicion: "Necedad, ignorancia. Falto de ciencia.",
      },
      {
        palabra: "Manumisión",
        definicion:
          "En la antigua Roma proceso de liberar a un esclavo, tras lo cual se convertía en liberto.",
      },
      {
        palabra: "Manumitir",
        definicion: "Dar libertad a un esclavo. ( Verbo infinitivo ).",
      },
      { palabra: "Manumiso", definicion: "Esclavo que ha sido liberado." },
      {
        palabra: "Pormenorizar",
        definicion: "Describir o enumerar minuciosamente.",
      },
      { palabra: "Benemérito", definicion: "Digno de galardón." },
      { palabra: "Albur", definicion: "Suerte o azar." },
      {
        palabra: "Cuita",
        definicion:
          "Trabajo, aflicción, desventura, pena. / Ansia, anhelo, deseo vehemente.",
      },
      {
        palabra: "Pléyade",
        definicion:
          "Grupo de personas famosas, especialemnte en las letras, que viven en la misma época.",
      },
      {
        palabra: "Runas",
        definicion:
          "Cada uno de los caracteres que empleaban en la escritura los antiguos escandinavos y otros pueblos germánicos. / Inscripción en lengua germánica de los siglos III y IV d. C.",
      },
      { palabra: "Beocio", definicion: "Ignorante, tonto, estúpido." },
      {
        palabra: "Carcamán",
        definicion: "Persona de muchas pretensiones y poco mérito.",
      },
      { palabra: "Astroso", definicion: "Vil, abyecto, despreciable. " },
      {
        palabra: "Panegírico",
        definicion:
          "En oratoria, discurso o sermón en alabanza de algo o de alguien. / Elogio enfático de algo o de alguien.",
      },
      {
        palabra: "Cropolito",
        definicion: "Masa fecal endurecida o fosilizada.",
      },
      { palabra: "Prensil", definicion: "Que sirve para asir o coger." },
      {
        palabra: "Impostar",
        definicion:
          "Fijar la voz en las cuerdas vocales para emitir el sonido en su plenitud sin vacilación ni temblor.",
      },
      {
        palabra: "Cosmovisión",
        definicion: "Visión o concepción global del universo.",
      },
      { palabra: "Aleccionar", definicion: "Instruir, enseñar, amaestrar." },
      {
        palabra: "Desarraigar",
        definicion:
          "Extinguir, extirpar enteramente una pasión, una costumbre o un vicio. / Separar a alguien del lugar o medio donde se ha criado, o cortar los vínculos afectivos que tiene con ellos.",
      },
      {
        palabra: "Idiomático",
        definicion: "Propio y peculiar de una lengua determinada.",
      },
      { palabra: "Sapiencia", definicion: "Sabiduría." },
      {
        palabra: "Filibustero",
        definicion:
          "Pirata, que por el siglo XVII formó parte de los grupos que infestaron el mar de las Antillas.",
      },
      {
        palabra: "Oligofrenia",
        definicion:
          "Discapacidad mental grave que se caracteriza por una deficiencia en el desarrollo intelectual y alteraciones del sistema nervioso.",
      },
      {
        palabra: "Permuta",
        definicion:
          "Intercambio de una cosa por otra sin meidación de dinero, salvo excepciones. / Intercambio de empleo entre dos personas que ocupan un puesto público.",
      },
      {
        palabra: "Concomitancia",
        definicion:
          "Coincidencia deliberada o casual de dos más factores en la producción de un efeto. / Relación, afinidad o punto en común.",
      },
      {
        palabra: "Marchamo",
        definicion: "Marca que se le pone a algo, en especial a los embutidos.",
      },
      {
        palabra: "Pánfilo",
        definicion: "Ingenuo, que tarda en comprender las cosas.",
      },
      {
        palabra: "Defenestrar",
        definicion:
          "Destituir o expulsar de un cargo. / Arrojar a alguien por una ventana.",
      },
      {
        palabra: "Medrar",
        definicion:
          "Mejorar de fortuna aumentando sus bienes, reputación, etc. especialmente cuando lo hace con artimañas o aprovechándose de las circunstancias.",
      },
      {
        palabra: "Epifanía",
        definicion: "Manifestación, aparición o revelación de una cosa.",
      },
      {
        palabra: "Contubernio",
        definicion:
          "Alianza o liga vituperable. Cohabitación ilícita. / Habitación con otra persona.",
      },
      {
        palabra: "Detentar",
        definicion:
          "Ocupar un cargo de poder de manera ilegítima. / Tener si derecho una cosa que no le pertenece.",
      },
      {
        palabra: "Cimarrón",
        definicion:
          "Dicho de un esclavo: Que se refugiaba en los montes buscando la libertad",
      },
      { palabra: "Avezado", definicion: "Ducho, experimentado en algo." },
      {
        palabra: "Jactancia",
        definicion: "Alabanza propia, desordenada y presuntuosa.",
      },
      {
        palabra: "Mácula",
        definicion: "Mancha. / Cosa que deslustra y desdora. / Engaño, trampa.",
      },
      {
        palabra: "Afección",
        definicion: "Afecto. / Afición, inclinación, apego. / Enfermedad.",
      },
      { palabra: "Bajel", definicion: "Embarcación." },
      { palabra: "Conturbado", definicion: "Revuelto, intranquilo." },
      {
        palabra: "Cabal",
        definicion: "Excelente en su clase. / Completo, exacto, perfecto.",
      },
      {
        palabra: "Sicalípticas",
        definicion: "Pertenciente o relativo a la sicalipsis.",
      },
      {
        palabra: "Sicalipsis",
        definicion:
          "Del argot teatral y literario español de la primera mitad del siglo XIX. / Zarzuela sicalíptica, tipo de zarzuela de corte popular que se caracteriza por sus diálogos llenos de insinuaciones y connotaciones sexuales, canciones de aroma picante y enredos de corte vodevilesco y en ocasiones presenta elementos de opereta, revista, e incluso cuplé. / Malicia sexual, picardía erótica. ",
      },
      {
        palabra: "Tardo",
        definicion:
          "Lento, perezoso en obrar. / Que sucede después de lo que convenía o se esperaba. / Torpe",
      },
      { palabra: "Áureo", definicion: "Relativo al oro." },
      {
        palabra: "Próvido",
        definicion:
          "Prevenido, cuidadoso y diligente para proveer y acudir con lo necesario al logro de un fin. / Propicio, benévolo.",
      },
      { palabra: "Tonante", definicion: "Que truena." },
      {
        palabra: "Dilación",
        definicion: "Demora, tardanza o detención de algo por algún tiempo.",
      },
      {
        palabra: "Altivo",
        definicion:
          "Orgulloso, soberbio. / Dicho de una cosa: Erguida, elevada.",
      },
      {
        palabra: "Rozagante",
        definicion:
          "Dicho de una vestidura: Vistosa y muy larga. / Vistoso, ufano.",
      },
      {
        palabra: "Bestiario",
        definicion:
          "En la literatura medieval, colección de relatos, descripciones e imágenes de animales reales o fantásticos. / En los circos romanos, hombre que luchaba con las fieras.",
      },
      { palabra: "Dilecto", definicion: "Amado con dilección." },
      { palabra: "Dilección", definicion: "Voluntad honesta, amor reflexivo." },
      {
        palabra: "Jaez",
        definicion:
          "Adorno de cintas con que se entrelazan las crines del caballo. / Cualidad o propiedad de algo.",
      },
      { palabra: "Hinojo", definicion: "Rodilla." },
      {
        palabra: "Esmegma",
        definicion:
          "Materia blanquecina que se deposita en los repliegues de los órganos genitales externos.",
      },
      {
        palabra: "Cejar",
        definicion:
          "Retroceder, ir hacia atrás. / Aflojar o ceder en un negocio, empeño o discusión.",
      },
      {
        palabra: "Inanición",
        definicion:
          "Debilidad grande por falta de alimento o por otras causas.",
      },
      { palabra: "Polivalente", definicion: "Que vale para muchas cosas." },
      {
        palabra: "Resollar",
        definicion:
          "Dicho de una persona o animal: Absover y expeler el aire por sus órganos.",
      },
      {
        palabra: "Folículo",
        definicion:
          "Glándula, en forma de saco, situada en el espesor de la piel o de las mucosas.",
      },
      {
        palabra: "Forúnculo",
        definicion:
          "Inflamación purulenta producida por la infección bacteriana de un folículo piloso.",
      },
      {
        palabra: "Cánula",
        definicion:
          "Caña pequeña. / Tubo corto que se emplea en diferentes operaciones de cirugía o que forma parte de aparatos físicos o quirúrgicos.",
      },
      {
        palabra: "Exequias",
        definicion: "Ceremonias religiosas que se celebran por un difunto.",
      },
      {
        palabra: "Laso",
        definicion:
          "Flojo y macilento. / Cansado, desfallecido, falto de fuerzas.",
      },
      { palabra: "Macilento", definicion: "Flaco, descolorido." },
      { palabra: "Apóstrofe", definicion: "Dicterio." },
      {
        palabra: "Dicterio",
        definicion: "Dicho denigrativo que insulta y provoca.",
      },
      {
        palabra: "Denodarse",
        definicion: "Atreverse, esforzarse, mostrarse osado o feroz.",
      },
      {
        palabra: "Mingitorio",
        definicion: "Relacionado con la micción. / Urinario.",
      },
      {
        palabra: "Mayestático",
        definicion:
          "Que tiene las características que se considern propias de la majestad ( solemnidad, elegancia o grandeza capaz de infundir admiración y respeto. )",
      },
      {
        palabra: "Percutir",
        definicion:
          "Dar uno o varios golpes, especialmente de manera repetitiva.",
      },
      { palabra: "Mancebo", definicion: "persona joven. Ni niño, ni adulto." },
      {
        palabra: "Manceba",
        definicion: "Mujer que convive con un hombre sin estar casada con él.",
      },
      { palabra: "Unigénito", definicion: "Hijo único." },
      {
        palabra: "Ingénito",
        definicion: "No engendrado, con natural y como nacido con alguien.",
      },
      {
        palabra: "Bizarría",
        definicion: "Valor y decisión en la forma de actuar.",
      },
      { palabra: "Recua", definicion: "Animales de carga." },
      { palabra: "Desuncir", definicion: "Liberar de yugo." },
      {
        palabra: "Explícito",
        definicion: "Que expresa clara y determinadamente una cosa.",
      },
      {
        palabra: "Torticero",
        definicion: "Injusto, o que no se arregla a las leyes o a la razón.",
      },
      {
        palabra: "Gregal",
        definicion: "Que anda agrupado a otros de su especie.",
      },
      {
        palabra: "Almo",
        definicion: "Excelente, digno de veneración. / Criador, alimentador.",
      },
      {
        palabra: "Prorrumpir",
        definicion: "Proferir con fuerza una voz, suspiro o pasión vehemente.",
      },
      { palabra: "Cornígero", definicion: "Que tiene cuernos." },
      {
        palabra: "Huestes, Bagauda",
        definicion: "Ejército. / Seguidores de una persona o una causa.",
      },
      { palabra: "Ambages", definicion: "Rodeos." },
      {
        palabra: "Sierpe",
        definicion:
          "Culebra de gran tamaño. / Persona muy fea o muy feroz o que está muy colérica. / Cosa que se mueve como una culebra.",
      },
      {
        palabra: "Agorero",
        definicion: "Que predice males. / Pesimista. / Que adivina agüeros.",
      },
      { palabra: "Lapídeo", definicion: "De piedra." },
      { palabra: "Lustrar", definicion: "Sacar brillo. / Adular." },
      { palabra: "Contuso", definicion: "Que ha recibido contusión." },
      { palabra: "Aparar", definicion: "Coger algo." },
      {
        palabra: "Refocilar",
        definicion: "Regodearse, recrearse en algo grosero.",
      },
      { palabra: "Incipiente", definicion: "Que empieza." },
      { palabra: "Neonato", definicion: "Recién nacido." },
      {
        palabra: "Ecolalia",
        definicion:
          "Perturbación del lenguaje que consiste en repetir el enfermo involuntariamente una palabra o frase que acaba de pronunciar él mismo u otra persona en su presencia.",
      },
      {
        palabra: "Archi-",
        definicion:
          "Con sustantivos, indica preeminencia o superioridad. / Con adjetivos, se emplea en lenguaje coloquial y significa 'muy'.",
      },
      {
        palabra: "Canoro/ra",
        definicion:
          "Dicho de la voz de las aves y de las personas: Grata y melodiosa.",
      },
      { palabra: "Ponto", definicion: "Mar." },
      {
        palabra: "Piélago",
        definicion: "Mar. / Parte del mar, que dista mucho de la tierra.",
      },
      { palabra: "Reprensible", definicion: "Digno de reprensión." },
      { palabra: "Reprensión", definicion: "Acción de reprender." },
      {
        palabra: "Unívoco",
        definicion:
          "Que tiene un mismo significado, misma interpretación. / Que tiene igual naturaleza o valor que otra cosa.",
      },
      {
        palabra: "Multívoco",
        definicion: "Que tiene varias interpretaciones.",
      },
      {
        palabra: "Discente",
        definicion: "Persona que recibe enseñanza. / Estudiante.",
      },
      {
        palabra: "Palíndromo",
        definicion:
          "Palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda.",
      },
      { palabra: "Folgar", definicion: "Holgar, tener ayuntamiento carnal." },
      {
        palabra: "Ayuntar",
        definicion: "Juntar, añadir. / Realizar el coito.",
      },
      { palabra: "Gárgaro", definicion: "Escondite." },
      {
        palabra: "Esquirla",
        definicion:
          "Astilla de un hueso desprendida de este por caries o por fractura.",
      },
      {
        palabra: "Causalidad",
        definicion: "Conjunto de cosas que causan algo.",
      },
      {
        palabra: "Casualidad",
        definicion:
          "Combinación de circunstancias que no se pueden prever ni evitar",
      },
      {
        palabra: "Ostensible",
        definicion: "Que puede manifestarse. / Claro, manifiesto, patente.",
      },
      { palabra: "Flagar", definicion: "Arder o resplandecer como una llama." },
      { palabra: "Revelar", definicion: "Descubrir." },
      { palabra: "Rebelar", definicion: "Sublevar." },
      { palabra: "Desgalgar", definicion: "Despeñar." },
      { palabra: "Preces", definicion: "Ruegos, súplicas." },
      {
        palabra: "Hirsuto",
        definicion:
          "Cubierto de pelo hirsuto o de púas o espinas. / De carácter áspero.",
      },
      {
        palabra: "Inexorable",
        definicion:
          "Que no se puede vencer. / Que no se deja vencer con ruegos.",
      },
      {
        palabra: "Delación",
        definicion:
          "Acusación, denuncia. / Llamamiento a aceptar o repudiar una herencia o legado.",
      },
      {
        palabra: "Mostrenco",
        definicion: "Ignorante, torpe. / Que no tiene dueño conocido.",
      },
      { palabra: "Heder", definicion: "Despedir olor." },
      {
        palabra: "Garlar",
        definicion: "Hablar mucho, sin interrupción y poco discretamente.",
      },
      { palabra: "Noctívago", definicion: "Noctámbulo." },
      {
        palabra: "Nesciencia",
        definicion: "Ignorancia, necedad, falta de ciencia.",
      },
      {
        palabra: "Ilación",
        definicion:
          "Inferir una cosa de otra. / Consecuencia lógica. / Trabazón razonable y ordenada de las partes de un discurso. /  Enlace, nexo.",
      },
      {
        palabra: "Trabazón",
        definicion:
          "Juntura o enlace. / Conexión de una cosa con otra o dependencia que entre sí tienen.",
      },
      {
        palabra: "Trabar",
        definicion: "Juntar, enlazar, concordar. / Entorpecer algo.",
      },
      { palabra: "Replicativo", definicion: "Repetitivo." },
      {
        palabra: "Obsecuencia",
        definicion: "Sumisión, amabilidad, condescendencia.",
      },
      {
        palabra: "Subterfugio",
        definicion: "Efugio, escapatoria, excusa artificiosa.",
      },
      {
        palabra: "Efugio",
        definicion: "Evasión, salida, recurso para sortear una dificultad.",
      },
      {
        palabra: "Concitar",
        definicion:
          "Provocar o causar algo, como un sentimiento o una reacción. / Reunir personas o cosas. / Instigar a alguien contra otra persona.",
      },
      { palabra: "Haragán", definicion: "Que rehuye del trabajo." },
      {
        palabra: "Ralea",
        definicion:
          "Especie, género, cualidad. / Raza, casta o linaje de una persona.",
      },
      {
        palabra: "Gerifalte",
        definicion:
          "Persona que destaca en alguna actividad. / Jefe, autoridad. / Persona que roba.",
      },
      {
        palabra: "Grey",
        definicion: "Rebaño. / Reunión de fieles cristianos.",
      },
      { palabra: "Omertá", definicion: "Ley del silencio." },
      { palabra: "Acuidad", definicion: "Agudeza." },
      {
        palabra: "Intermisión",
        definicion: "Interrupción de alguna cosa durante un tiempo.",
      },
      {
        palabra: "Exangüe",
        definicion: "Agotado, falto de fuerzas. / Sin sangre.",
      },
      { palabra: "Vesania", definicion: "Demencia furiosa." },
      { palabra: "Longánimo", definicion: "Magnánimo, constante, generoso." },
      {
        palabra: "Melindroso",
        definicion: "De delicadeza o escrúpulos excesivos.",
      },
      {
        palabra: "Dúctil",
        definicion:
          "Dócil, que se adapta y es fácil de dominar. Que cambia facilmente.",
      },
      { palabra: "Duermevela", definicion: "Sueño ligero, sueño inquieto." },
      { palabra: "Letargo", definicion: "Somnolencia, intactividad." },
      { palabra: "Pundonor", definicion: "Dignidad y dedicación a una labor." },
      {
        palabra: "Presteza",
        definicion: "Habilidad y rapidez para hacer algo.",
      },
      { palabra: "Marcial", definicion: "Gallardo, valiente, garboso." },
      { palabra: "Latebra", definicion: "Escondrijo, refugio." },
      { palabra: "Feral ", definicion: "Cruel, sangriento, de fiera." },
      {
        palabra: "Panegírico",
        definicion: "Discurso en honor o alabanza hacia una persona, elogio.",
      },
      {
        palabra: "Distaxia",
        definicion:
          "Dificultad en la dirección de los movimientos voluntarios.",
      },
      {
        palabra: "Escultismo",
        definicion:
          "Movimiento de juventud que pretende una educación integral del individuo, generalmente por medio de actividades en grupo y en contacto con la naturaleza.",
      },
      {
        palabra: "Hervencia",
        definicion:
          "Género de suplicio usado antiguamente, que consistía en cocer en calderas a los grandes criminales o sus miembros mutilados, que luego se colgaban de escarpias junto a los caminos o sobre las puertas de las ciudades.",
      },
      { palabra: "Vetusto", definicion: "Extremadamente viejo, anticuado." },
      {
        palabra: "Póngidos",
        definicion:
          "Los póngidos son una familia de primates antropomorfos constituida por los grandes simios, algunos extintos.",
      },
      {
        palabra: "Criptografía",
        definicion:
          "Arte y técnica de escribir con procedimientos o claves secretas o de un modo enigmático, de tal forma que lo escrito solamente sea inteligible para quien sepa descifrarlo.",
      },
      {
        palabra: "Felón",
        definicion:
          "Desleal, galso, traidor, pérfido, bellaco, engañoso, indigno, infame, perverso.",
      },
      {
        palabra: "Idiografía",
        definicion:
          "De lo particular del sujeto. lo que es único y particular de un sujeto.",
      },
      {
        palabra: "Equidistante",
        definicion:
          "Que equidista. / Que es equilibrada y no se inclina ante las partes de un conflicto.",
      },
      { palabra: "Pugilato", definicion: "Contienda a puñetazos." },
      {
        palabra: "Panteista",
        definicion: "Creencia según universo, naturaleza y Dios es lo mismo.",
      },
      { palabra: "Facero", definicion: "Fronterizo." },
      { palabra: "Balante", definicion: "Que bala. / Oveja o carnero." },
      { palabra: "Tornátil", definicion: "Que gira con facilidad y presteza." },
      {
        palabra: "Axiología",
        definicion:
          "Disciplina filosófica que estudia los valores de las cosas.",
      },
      {
        palabra: "Enantiomorfos",
        definicion:
          "Dicho de cuerpos iguales entre sí pero que no pueden superponerse, como dos guantes de distinta mano.",
      },
      {
        palabra: "Numinosas",
        definicion:
          "Se refiere al ingenio poético, mirado como una deidad que inspira al poéta en sus composiciones.",
      },
      {
        palabra: "Pergeñar",
        definicion:
          "Hacer el esbozo o idea previa de un trabajo, de manera rápida. / Disponer o ejecutar una cosa con mayor o menor habilidad.",
      },
      {
        palabra: "Anastasis",
        definicion: "Calco de la palabra griega, resurreción en Cristo.",
      },
      {
        palabra: "Patois",
        definicion: "Conjunto de localidades generalmente rurales.",
      },
      { palabra: "Desiderativo", definicion: "Que expresa un deseo." },
      {
        palabra: "Conminar",
        definicion:
          "Amenazar a una persona con una pena o castigo si no obedece una orden o mandato. / Requerir un mandato con amenaza.",
      },
      {
        palabra: "Taumaturgia",
        definicion:
          "Capacidad de realizar prodigios considerados sobrenaturales.",
      },
      { palabra: "Cartapacio", definicion: "Cuaderno para escribir apuntes." },
      { palabra: "Pediluvio", definicion: "Baño de pies." },
      {
        palabra: "Musitar",
        definicion: "Hablar en voz baja, casi susurrando.",
      },
      {
        palabra: "Desvencijado",
        definicion: "Descompuesto, estropeado, destartalado.",
      },
      {
        palabra: "Endometrio",
        definicion: "Membrana mucosa que recubre la cabidad del útero.",
      },
      { palabra: "Indubitable", definicion: "Indudable." },
      {
        palabra: "Onomástica",
        definicion:
          "Perteneciente o relativo a los nombres, y especialmente a los nombres propios. / Ciencia que trata de la catalogación y estudio de los nombres propios. / Día del santo de una persona.",
      },
      {
        palabra: "Salafismo",
        definicion: "Movimiento sunnita que retorna a los orígenes del islam.",
      },
      { palabra: "Haragán", definicion: "Holgazán." },
      {
        palabra: "Candidiasis",
        definicion:
          "Enfermedad infecciosa de la piel y las mucosas causada por un hongo.",
      },
      {
        palabra: "Perorata",
        definicion:
          "Discurso largo y poco oportuno con apasionamiento y vehemencia.",
      },
      {
        palabra: "Apriorismo",
        definicion:
          "Método en que se emplea sistemáticamente el razonamiento a priori.",
      },
      {
        palabra: "Salvífico",
        definicion: "Perteneciente o relativo a la salvación.",
      },
      {
        palabra: "Ortograma",
        definicion:
          "Aquellas materias formalizadas capaces de funcionar como moldes activos o programas en la conformación de unos materiales dados. ej: programa algorítmico, una regla gramatical, una creencia.",
      },
      {
        palabra: "Biocenosis",
        definicion:
          "Conjunto de organismos, vegetales o animales que viven y se reporducen en un espacio.",
      },
      {
        palabra: "Biotopo",
        definicion:
          "Area de condiciones medioambientales uniformes que provee espacio vital a un conjunto de flora y fauna.",
      },
      {
        palabra: "A quo",
        definicion: "Que marca el principio de un periodo de tiempo.",
      },
      {
        palabra: "Ad quem",
        definicion: "Que marca el final de un tiempo o un proceso.",
      },
      { palabra: "In illo témpore", definicion: "En aquel tiempo." },
      {
        palabra: "Dilecto",
        definicion:
          "Que se ama o aprecia con preferencia. / Que denota o implica un afecto o cariño especial.",
      },
      {
        palabra: "Locución",
        definicion:
          "Expresión característica de una lengua. Ej: Echar una mano.",
      },
      { palabra: "Lustro", definicion: "Quinquenio. Periodo de 5 años." },
      {
        palabra: "Cimarrón",
        definicion:
          "Dicho de un animal doméstico que huye al campo y se hace montaraz.",
      },
      { palabra: "Montaraz", definicion: "Que vive en el campo o la montaña." },
      { palabra: "Inter alia", definicion: "Latín: Entre otros." },
      {
        palabra: "Prolepsis",
        definicion:
          "En la doctrina de los epicúreos y los estoicos, conocimiento anticipado de algo. / Anticipación mental de una acción por realizar. / Pasaje de una obra literaria que anticipa una escena posterior rompiendo la secuencia cronológica.",
      },
      {
        palabra: "Praeter-",
        definicion:
          "Más alla de, Fuera de, Más que, Por delante de, Además de, después, excepto, más, salvo. Ej: Praeterracionales (cosa más allá de la razón, metafísicas, divinas, etc.)",
      },
      {
        palabra: "Extrasómico",
        definicion: "Fuera del cuerpo o sin relación con él.",
      },
      {
        palabra: "Apotropaico",
        definicion:
          "Decho de un rito que por su carácter mágico se cree que aleja el mal o propicia el bien.(Hechar sal sobre los hombros, tocar madera, etc.)",
      },
      {
        palabra: "Inmanente",
        definicion: "Que es interno a un ser. Inherente, unido.",
      },
      {
        palabra: "Centrífugo",
        definicion: "Que tiende a alejarse del eje alrededor del cual gira.",
      },
      {
        palabra: "Centrípeto",
        definicion: "Que tiende a acercarse al eje alrededor del cual gira.",
      },
      {
        palabra: "Salafismo",
        definicion:
          "Movimiento islámico reformista surgido en el siglo XIX que defiende un retrono purista a las ideas del Corán y la sunna.",
      },
      { palabra: "Canícula", definicion: "Periodo más caruloso del año." },
      {
        palabra: "Ominoso",
        definicion: "Abominable que merece ser condenado y aborrecido.",
      },
      { palabra: "Lesa", definicion: "Poco inteligente, torpe." },
      {
        palabra: "Quiasmo",
        definicion:
          "Figura retórica que consiste en repeticón de palabras e inversión del orden. Ej: Tanto monta, monta tanto.",
      },
      {
        palabra: "Antífrasis",
        definicion:
          "Figura retórica que consiste en dar a un objeto o una persona un nombre que indica cualidades contrarias a las que posee. Ej: a un delgado llamarle gordo.",
      },
      { palabra: "Prístino", definicion: "Antiguo, primitivo, original." },
      {
        palabra: "Anfictionía",
        definicion: "Liga griega más conocida como la liga délfica.",
      },
      {
        palabra: "Eutaxia",
        definicion: "Buen orden ( en sentido político, no moral. )",
      },
      {
        palabra: "Dialelo",
        definicion:
          "Círculo que se produce en una argumentación, según el cual, se comienza admitiendo lo que se va a demostrar.",
      },
      {
        palabra: "Holomérico",
        definicion:
          "Tipos de totalidad en los que puede decirse que el todo se reproduce en sus partes. (Las estructuras generales del gobierno en las partes de su sociedad: autonomías, municipios.)",
      },
      {
        palabra: "Diversificar",
        definicion:
          "Hacer diversa una cosa que era única o uniforme. / Variar los bienes que se producen, compran o venden con objeto de aumentar la clientela.",
      },
      {
        palabra: "Otear",
        definicion:
          "Registrar desde un lugar alto lo que está abajo. / Escudriñar, registrar o mirar con cuidado.",
      },
      { palabra: "Cornúpeta", definicion: "Animal dotado de cuernos." },
      {
        palabra: "Venal",
        definicion:
          "Relativo a las venas. / Vendible o expuesto en venta. / Que se deja sobornar con dádivas.",
      },
      {
        palabra: "Demétiro",
        definicion:
          "Falto de mérito. / Acción, cualidad o circunstancia que hace desmerecer.",
      },
      {
        palabra: "Acervo",
        definicion:
          "Conjunto de bienes o valores morales o culturales que pertenecen a un grupo.",
      },
      {
        palabra: "Exención",
        definicion:
          "Efecto de eximir a una persona de una carga, culpa, obligación o compromiso.",
      },
      {
        palabra: "Impúber",
        definicion: "Que aún no ha llegado a la pubertad.",
      },
      { palabra: "Arancel", definicion: "Tasa, valoración, norma, ley." },
      {
        palabra: "Inflexión",
        definicion: "Desviación. / Cambio de tono en la voz.",
      },
      {
        palabra: "Mortecino",
        definicion:
          "Que no tiene vigor, viveza o intensidad. / Que parece estar a punto de morir.",
      },
      { palabra: "Logogrifo", definicion: "Discurso ininteligible." },
      { palabra: "Palafrenero", definicion: "Mozo de caballos." },
      {
        palabra: "Macilento",
        definicion: "Flaco y demacrado, de cara pálida y flaca.",
      },
      { palabra: "Parco", definicion: "Escaso aunque suficiente." },
      {
        palabra: "Cadencia",
        definicion:
          "Sucesión regular de movimientos. / Reparto o combinación proporcionada de los acentos, las pausas o las palabras.",
      },
      {
        palabra: "Compunción",
        definicion:
          "Arrepentimiento, sentimiento de aflicción por el dolor ajeno.",
      },
      { palabra: "Regüeldo", definicion: "Acción y efecto de regoldar." },
      { palabra: "Regoldar", definicion: "Eructar." },
      { palabra: "Caduceo", definicion: "Símbolo del comercio." },
      { palabra: "Galimatías", definicion: "Confusión y desorden." },
      {
        palabra: "Gavilla",
        definicion:
          "Conjunto de ramas o tallos unidos o atados por su centro. / Conjunto de personas de condición baja.",
      },
      {
        palabra: "Escabel",
        definicion: "Taburete pequeño para apoyar los pies.",
      },
      { palabra: "Bagatela", definicion: "Cosa de poca importancia o valor." },
      {
        palabra: "Precito",
        definicion: "Condenado a las penas del infierno, réprobo.",
      },
      { palabra: "Presura", definicion: "Prisa, prontitud." },
      { palabra: "Relicto", definicion: "Herencia." },
      {
        palabra: "Prosternar",
        definicion: "Arrodillarse en señal de respeto.",
      },
      {
        palabra: "Preboste",
        definicion: "Persona que gobierna una comunidad.",
      },
      { palabra: "Agreste", definicion: "Animal no domesticado." },
      {
        palabra: "Bucólico",
        definicion: "Que evoca idealizado la vida en el campo.",
      },
      {
        palabra: "Putativo",
        definicion: "Que es considerado como propio sin serlo.",
      },
      { palabra: "Irrecusable", definicion: "Que no puede ser impugando." },
      {
        palabra: "Mutatis mutandis",
        definicion: "Cambiando lo que se deba cambiar.",
      },
      { palabra: "Damnatio memoriae", definicion: "Condena de la memoria." },
      {
        palabra: "Partisano",
        definicion:
          "Miembro de un grupo civil organizado para la resistencia clandestina que actúa contra la autoridad o contra el ejército invasor.",
      },
      { palabra: "Quos ego", definicion: "Latín: A quienes yo." },
      {
        palabra: "Estabular",
        definicion: "Criar al ganado en establos o recinto similares.",
      },
      {
        palabra: "Incoercible",
        definicion: "Que no puede ser coercido, reprimido o contenido.",
      },
      {
        palabra: "Coercer",
        definicion: "Imperdir a una persona que haga una cosa.",
      },
      { palabra: "iletrado", definicion: "Analfabeto." },
      { palabra: "Indocto", definicion: "Inculto. / Falto de instrucción." },
      {
        palabra: "Frugal",
        definicion:
          "(Comida) Que es sencilla y poco abundante. / Persona que se alimenta de dichas comidas.",
      },
      { palabra: "Envés", definicion: "Cara opuesta a la principal." },
      { palabra: "Desdeñoso", definicion: "Que manifiesta desdén." },
      {
        palabra: "Artesonón",
        definicion: "Maderas o vigas situadas en las techumbres.",
      },
      {
        palabra: "Matacán",
        definicion:
          "Obra sólida que se ubica en la parte alta de una muralla, torre o fortificación.",
      },
      {
        palabra: "Petimetre",
        definicion:
          "Persona joven que se procupa en exceso de su aspecto y de vestir a la moda.",
      },
      {
        palabra: "Genotipo",
        definicion:
          "Conjunto de los genes que existen en le núcleo celular de cada individuo.",
      },
      {
        palabra: "Fenotipo",
        definicion:
          "Conjunto de caracteres visibles que un individuo presenta como resultado de la interacción entre su genotipo y el medio.",
      },
      { palabra: "Porquero", definicion: "Persona que guarda a los puercos." },
      { palabra: "Cisión", definicion: "Cisura o incisión." },
      {
        palabra: "Galeno",
        definicion: "Médico. / Dicho del viento suave y apacible.",
      },
      {
        palabra: "Insidia",
        definicion: "Palabra o acción que envulve mala intención.",
      },
      {
        palabra: "Edecán",
        definicion: "Auxiliar, acompañante o correveidile.",
      },
      {
        palabra: "Correveidile",
        definicion:
          "Aficionado a contar chistes. Persona que lleva y trae cuentos y chismes. Alcahute",
      },
      {
        palabra: "Fecundo",
        definicion:
          "Que tiene capaz de fecundar o ser fecundado. / Que produce frutos en abundancia. (feraz)",
      },
      { palabra: "Suntuario", definicion: "Perteneciente o relativo al lujo" },
      {
        palabra: "Peristilo",
        definicion:
          "Serie de columnas separadas regularmente que rodean un edificio un patio interior.",
      },
      {
        palabra: "Farrago",
        definicion: "Mezcla de cosas desordenadas o inconexas.",
      },
      { palabra: "Aflicción", definicion: "Abatimiento, tristeza." },
      {
        palabra: "Cuaquerismo",
        definicion:
          "Doctrina religiosa protestante que tuvo su origen en las ideas del relicgioso británico George Fox, se caracteriza por creer que la revelación divina es inmediata e individual y que todas las personas pueden sentir la palabra de Dios en sus almas.",
      },
      {
        palabra: "Encamar",
        definicion:
          "Animar a alguien con razones espurias a hacer o decir algo.",
      },
      {
        palabra: "Anomia",
        definicion:
          "Ausencia de la ley. / Conjunto de situaciones que dervian de la carencai de normas sociales o de su degradación.",
      },
      {
        palabra: "Conato",
        definicion:
          "Inicio de una acción que se frusta antes de llegar a su término. / Propensión, tendencia, propósito. / Empeño y esfuerzo en la ejecución de algo.",
      },
      {
        palabra: "Pitecántropo",
        definicion: "Mamífero homínido que vivió durante el Pleistoceno.",
      },
      { palabra: "Deplorar", definicion: "Sentir pena o disgusto por algo." },
      {
        palabra: "Corifeo",
        definicion:
          "Persona que dirigía el coro de las antiguas tragedias clásicas.",
      },
      {
        palabra: "Anabaptista",
        definicion:
          "Corriente dentro del protestantismo 'rebautizar', consideran el bautismo infantil inválido.",
      },
      {
        palabra: "Trapío",
        definicion:
          "Conjunto de velas de una embarcación. / Buena planta de un toro de lidia.",
      },
      {
        palabra: "Flemático",
        definicion:
          "Persona que tiene un temperamento apático y se comporta con excesiva tranquilidad.",
      },
      {
        palabra: "Hez",
        definicion:
          "Grupo de personas que representa lo más despreciable de la sociedad.",
      },
      {
        palabra: "Crápula",
        definicion:
          "Hombre que lleva una vida licenciosa y costumbres poco morales.",
      },
      {
        palabra: "Teúrgico",
        definicion:
          "Practica mágico-religiosa griega que consiste en la invocación de ángeles y dioses con el fin de comunicarse con ellos.",
      },
      {
        palabra: "Aterido",
        definicion: "Que está paralizado o entumecido a causa del frío.",
      },
      {
        palabra: "Orillo",
        definicion: "Orilla de una pieza de tela salida de fábrica.",
      },
      {
        palabra: "Anfractuoso",
        definicion: "Quebrado, tortuoso, desigual, sinuoso.",
      },
      { palabra: "Sinuoso", definicion: "Que trata de ocultar el propósito." },
      {
        palabra: "Prosodia",
        definicion:
          "Parte de la gramática que enseaña la recta pronunciación y acentuación.",
      },
      {
        palabra: "Pulular",
        definicion: "Abundar y moverse mucho en un lugar.",
      },
      { palabra: "Avieso", definicion: "Que es malintencionado o perverso." },
      {
        palabra: "Aparcero",
        definicion: "Persona que se dedica a explotar el terreno.",
      },
      { palabra: "Senescal", definicion: "Mayordomo de edad avanzada." },
      {
        palabra: "Contemporizar",
        definicion:
          "Acomodarse al gusto o la voluntad de otra persona con algún fin, generalmennte para evitar un enfrentamiento.",
      },
      {
        palabra: "Pírrico",
        definicion:
          "Triunfo que se consigue con muy poca ventaja sobre le derrotado. / Que ocasiona grave daño al vencedor y casi equivale a una derrota.",
      },
      {
        palabra: "Fisiocracia",
        definicion:
          "Doctrina que dice que la riqueza provenía exclusivamente de la explotación de los recursos naturales.",
      },
      {
        palabra: "Diezmo",
        definicion:
          "Derecho del 10% del valor de ciertas mercaderías que se pagaba al rey.",
      },
      {
        palabra: "Escarapela",
        definicion: "Riña especialemente entre mujeres.",
      },
      {
        palabra: "Facticio",
        definicion:
          "Que ha sido elaborado artificialmente a partir de elementos verdaderos.",
      },
      { palabra: "Trompetear", definicion: "Pregonar, publicar una noticias." },
      {
        palabra: "Catecúmeno",
        definicion:
          "Persona que se instruye en los principios de la doctrina católica. / Neófito en cualquier doctrina.",
      },
      {
        palabra: "Conculcar",
        definicion:
          "Ir en contra de lo que dispone una ley, norma o principio. / Oprimir.",
      },
      {
        palabra: "Paramecio",
        definicion: "Organismo microscópico unicelular de forma ovalada.",
      },
      {
        palabra: "Vericueto",
        definicion:
          "Lugar o sitio áspero, alto y quebrado, por donde no se puede andar sino con dificultad.",
      },
      {
        palabra: "Célibe",
        definicion: "Soltero, especialemente por haber hecho voto de castidad.",
      },
      {
        palabra: "Sindéresis",
        definicion:
          "Capacidad natural para juzgar rectamente, con acierto, discreción o sensatez.",
      },
      {
        palabra: "Anómico",
        definicion:
          "Anomía es la falta de normas o incapacidad de la estructura social de proveer a ciertos individuos lo necesario para lograr las metas de la sociedad.",
      },
      {
        palabra: "Retraer",
        definicion:
          "Disuadir a una persona de hacer algo. / Encoger un órgano para que quede oculto.",
      },
      {
        palabra: "Bucelario",
        definicion:
          "Entre los visigodos, hombre libre que se sometía al patrocinio de un magnate, a quien prestaba servicios y del cual recibía el disfrute de alguna propiedad.",
      },
      {
        palabra: "Pretor",
        definicion:
          "Magistrado de la antigua Roma, inferior al cónsul que ejercía jurisdicción en esta ciudad o provincia.",
      },
      { palabra: "Lupanar", definicion: "Prostíbulo." },
      {
        palabra: "Asurar",
        definicion: "Requemar, abrasar. Inquietar mucho, asarse.",
      },
      {
        palabra: "Maridaje",
        definicion:
          "Unión y conformidad entre marido y mujer. / Unión íntima o armoniosa entre dos cosas.",
      },
      {
        palabra: "Maridar",
        definicion:
          "Casarse o unirse en matrimonio. / Unirse carnalmente o hacer vida maridable. / Unir o enlazar.",
      },
      {
        palabra: "Colutorio",
        definicion: "Líquido medicinal para enjuague bucal.",
      },
      { palabra: "Asaz", definicion: "Bastante." },
      {
        palabra: "Pauperización",
        definicion: "Empobrecimiento de una población o de un país.",
      },
      { palabra: "Zafio", definicion: "Que es inculto y no tiene finura." },
      {
        palabra: "Infuso",
        definicion: "Que es infundido por Dios o por otro poder sobrenatural.",
      },
      {
        palabra: "Falencia",
        definicion: "Error que se comete al afirmar o asegurar cierta cosa.",
      },
      {
        palabra: "Larvado",
        definicion:
          "Dicho de un sentimiento: Que no se manifista abiertamente.",
      },
      {
        palabra: "Natalicio",
        definicion: "Perteneciente o relativo al día del nacimiento.",
      },
      {
        palabra: "Sine díe",
        definicion:
          "Expresión latina que significa ‘sin plazo o fecha determinados’. Ej: Han aplazado los exámenes sine díe.",
      },
      { palabra: "Fastuoso", definicion: "Lujoso, magnífico, digno de verse." },
      { palabra: "Vindicar", definicion: "Vengar." },
      {
        palabra: "Cultipicaño",
        definicion: "Culto y picaresco conjuntamente.",
      },
      {
        palabra: "Bufa",
        definicion: "Cómico cercano a lo grotesco o a lo chocarrero.",
      },
      {
        palabra: "Adarme",
        definicion: "Cantidad mínima o pequeña porción de algo.",
      },
      {
        palabra: "Mandanga",
        definicion:
          "Flema, indolencia, pachorra. / Tonterías, cuentos, pejigueras.",
      },
      { palabra: "Munificencia", definicion: "Generosidad esplendida." },
      {
        palabra: "Albacea",
        definicion:
          "Persona encargada de llevar a cabo la última voluntad de un difunto y custodiar los bienes hasta que pasen a sus herederos.",
      },
      { palabra: "Citra", definicion: "Del lado de acá." },
      {
        palabra: "Pertrecho",
        definicion: "Instrumentos necesarios para cualquier operación.",
      },
      {
        palabra: "Receso",
        definicion:
          "Separación, apartamiento, desvio. / Pausa, descanso, interrupción.",
      },
      {
        palabra: "Pelambrera",
        definicion: "Pelo o vello abundante y revuelto. / Alopecia.",
      },
      {
        palabra: "Edicto",
        definicion:
          "Mandato, decreto publicado con autoridad del príncipe o del magistrado.",
      },
      {
        palabra: "Malinchismo",
        definicion:
          "Muestra de apego a lo extranjero menospreciando lo propio.",
      },
      { palabra: "Barraganía", definicion: "Amancebamiento." },
      { palabra: "Pregnante", definicion: "Que está lleno de significado." },
      {
        palabra: "Lancinante",
        definicion: "Dolor que es muy agudo o intenso.",
      },
      {
        palabra: "Inveterado",
        definicion: "Que es antiguo y está arraigado a costumbres o creencias.",
      },
      {
        palabra: "Réprobo",
        definicion:
          "Malvado. / Condenado a penas eterna. / Condenado por su heterodoxia religiosa.",
      },
      { palabra: "Interdecir", definicion: "Prohibir." },
      { palabra: "Interdicción", definicion: "Acción y efecto de interdecir." },
      { palabra: "Futesa", definicion: "Insignificancia." },
      {
        palabra: "Obnubilar",
        definicion:
          "Perder el entendimiento, la capacidad de razonar o darse cuenta de las cosas.",
      },
      {
        palabra: "Injerir",
        definicion:
          "Introducir una cosa en otra. / Entremeterse o intervenir en asuntos ajenos.",
      },
      {
        palabra: "Engañifa",
        definicion:
          "Cosa que tiene apariencia de calidad, valor o utilidad y resulta engañosa.",
      },
      {
        palabra: "Fasto",
        definicion: "Que es acertado./ Suntuoso, lujoso o extraordinario.",
      },
      { palabra: "Deplorar", definicion: "Sentir pena o disgusto por algo." },
      { palabra: "Bilioso", definicion: "Que tiene exceso de bilis." },
      {
        palabra: "Empingorotado",
        definicion:
          "Que tiene una posición social ventajosa y presume de ello.",
      },
      {
        palabra: "Refractario",
        definicion:
          "Que resiste la acción del fuego sin cambiar de estado ni destruirse. / Persona que se opone a aceptar una idea, opinión o costrumbre",
      },
      {
        palabra: "Entente",
        definicion:
          "Relación amistosa basada en la confianza y en el mutuo conocimiento, especialmente entre gobierno o países.",
      },
      {
        palabra: "Periclitar",
        definicion: "Decaer, declinar. / Estar en peligro.",
      },
      {
        palabra: "Florilegio",
        definicion:
          "Colección constituida por fragmentos literarios seleccionados de uno o varios autores.",
      },
      {
        palabra: "Somático",
        definicion:
          "De la parte material o corpórea de un ser animado o relacionado con ella.",
      },
      {
        palabra: "Baldragas",
        definicion:
          "Hombre débil, sin fuerza física, insustancial, simple y de poco carácter.",
      },
      {
        palabra: "Bergante",
        definicion:
          "Persona granuja, sinvergüenza, falta de escrúpulos y, en ocasiones, delincuente.",
      },
      { palabra: "Cipayo", definicion: "Secuaz a sueldo." },
      {
        palabra: "Taimado",
        definicion: "Bellaco, astuto, disimulado y pronto en advertirlo todo.",
      },
      {
        palabra: "Parénesis",
        definicion: "Exhortación o amonestación, aviso.",
      },
      {
        palabra: "Ripio",
        definicion:
          "Palabra o frase inútil o superflua que se emplea viciosamente. / Residuo.",
      },
      { palabra: "Arrochar", definicion: "Rechazar, despreciar." },
      {
        palabra: "Martagón",
        definicion: "Persona astuta, reservada y difícil de engañar.",
      },
      {
        palabra: "Lucillo",
        definicion: "Piedra destinada a sepultar a personas de distinción.",
      },
      {
        palabra: "Borrajear",
        definicion:
          "Escribir sin asunto determinado. / Hacer rúbricas o garabatos por entretenimiento.",
      },
      {
        palabra: "Reposero",
        definicion:
          "Persona que normalmente disfruta de permisos para ausentarse del trabajo.",
      },
      { palabra: "Lángara", definicion: "Persona que no es de confianza." },
      { palabra: "Fautor", definicion: "Persona que favorece y ayuda a otra." },
      {
        palabra: "Escrófula",
        definicion:
          " Tumefacción fría de los ganglios linfáticos propia de las enfermedades infecciosas y tubercolusis.",
      },
      {
        palabra: "Giñapo",
        definicion:
          "Persona que anda con vestido roto y andrajoso. / Persona envilecida, degradada. / Persona moralmente abatida, o muy débil y enfermiza.",
      },
      { palabra: "Refrendar", definicion: "Corroborar algo afirmándolo." },
      {
        palabra: "Desopilante",
        definicion: "Festivo, divertido, que produce mucha risa.",
      },
      { palabra: "Alícuota", definicion: "Proporcional." },
      {
        palabra: "Endriago",
        definicion:
          "Monstruo fabuloso, con facciones humanas y miembros de varias fieras.",
      },
      { palabra: "Apriscar", definicion: "Recoger el ganado en el aprisco." },
      {
        palabra: "Aprisco",
        definicion:
          "Paraje donde los pastores recogen el ganado para resguardarlo de la intemperie.",
      },
      {
        palabra: "Trapisonda",
        definicion:
          "Bulla, riña, embrollo. / Agitación del mar, formada por olas pequeñas que se cruzan en diversos sentidos y cuyo ruido se oye a bastante distancia.",
      },
      {
        palabra: "Recalcitrante",
        definicion: "Terco, reacio, reincidiente, obstinado.",
      },
      {
        palabra: "Hampa",
        definicion:
          "Conjunto de maleantes formados en bandas. / Vida de las gentes holgazanas y maleantes.",
      },
      { palabra: "Pizpireto", definicion: "Alegre, vivaz y coqueto." },
      {
        palabra: "Inquisitivo",
        definicion:
          "Relativo a la indagación y averiguación. / Que inquiere y averigua con cuidado y diligencia las cosas o es inclinado a ello.",
      },
      {
        palabra: "Inquerir / Inquirir",
        definicion: "Indagar, averiguar o examinar cuidadosamente.",
      },
      { palabra: "Ramplón", definicion: "Vulgar, chabacano." },
      { palabra: "Caletre", definicion: "Tino, discernimiento, capacidad." },
      {
        palabra: "Fatuidad",
        definicion:
          "Necio. Falto de entendimiento o razón. / Presunción o vanidad infundada y ridícula.",
      },
      {
        palabra: "Perdulario",
        definicion:
          "Que pierde las cosas frecuentemente. / Sumamente descuidado en sus intereses y su persona. / Vicioso incorregible",
      },
      {
        palabra: "Inconcuso",
        definicion:
          "Que es completamente firme y no admite duda ni contradicción.",
      },
      {
        palabra: "Limos",
        definicion:
          "En la mitología griega era la representación del hambre, su opuesta era la diosa de los alimentos Deméter.",
      },
      {
        palabra: "Pravo",
        definicion: "Malvado, perverso y de dañadas costumbres.",
      },
      {
        palabra: "Tonsura",
        definicion:
          "Ceremonia de liturgia católica donde a cada hombre se cortaba y trozo de cabello como consagración de su entrada al clero. / Círculo rasurado que llevan algunos clérigos en la coronilla.",
      },
      {
        palabra: "Pendencia",
        definicion: "Enfrentamiento, pelea violenta y acalorada.",
      },
      {
        palabra: "Escarpadura",
        definicion: "Escarpe ( pendiente, inclinación )",
      },
      {
        palabra: "Connotar",
        definicion:
          "Tener algo un sentido o significado indirecto que puede interpretarse de algún modo. / Sugerir (una  palabra) un significado secundario y subjetivo por su asociación con otras ideas.",
      },
      {
        palabra: "Omnisciencia",
        definicion: "Conocimiento de todas las cosas reales y posibles.",
      },
      { palabra: "Omnisapiente", definicion: "Que posee omnisapiencia." },
      {
        palabra: "Orto",
        definicion:
          "Salidaa del sol por el horizonte. / Principio u origen de algo, especialmente una ideologíua, movimiento, etc.",
      },
      {
        palabra: "Inducción",
        definicion:
          "Forma de razonamiento que consiste en establecer una ley o conclusión general a partir de la observación de hechos o casos particulares. / Suposición o conclusión a la que se llega con esta forma de razonamiento.",
      },
      {
        palabra: "Prontuario",
        definicion:
          "Resumen o breve anotación de varias cosas a fin de tenerals presentes cuando se necesiten. / Compendio de las reglas de una ciencia o un arte.",
      },
      {
        palabra: "Reato",
        definicion:
          "Resto de pena que queda por cumplir, aun después de perdonado el pecado.",
      },
      {
        palabra: "Malhadado",
        definicion:
          "Que sufre una desgracia o tiene mal hado, mala suerte. / Que causa desgracia.",
      },
      {
        palabra: "Climaterio",
        definicion:
          "Periodo de la vida de las personas que se caractyeriza por una serie de fenómenos que afectan a todo el organismo y que se deben a una disminución natural de la actividad de las glándulas sexuales.",
      },
      {
        palabra: "Enjalbegar",
        definicion: "Blanquear una pared con cal, yeso o tierra blanca.",
      },
      { palabra: "Empíreo", definicion: "Cielo." },
      {
        palabra: "Acogotar",
        definicion:
          "Matar por medio de golpe en el cogote. / Agarrar por el cogote.",
      },
      { palabra: "Acoquinar", definicion: "Acobardar o asustar." },
      {
        palabra: "Poliomielitis",
        definicion: "Enfermedad viral que afecta a la médula espinal.",
      },
      { palabra: "Delectable", definicion: "Deleitoso." },
      { palabra: "Circunloquio", definicion: "Rodeo de palabras." },
      {
        palabra: "Vigorexia",
        definicion:
          "Trastorno donde la persona se ve delgado, debil y enclenque.",
      },
      {
        palabra: "Ginecomastia",
        definicion:
          "Agrandamiento patológico de las glándulas mamarias del hombre.",
      },
      {
        palabra: "Estentóreo",
        definicion:
          "Dicho de la voz o del acento: Muy fuerte, ruidoso o retumbante.",
      },
      { palabra: "Randa", definicion: "Ratero, granuja." },
      { palabra: "Befar", definicion: "Hacer mofa de alguien." },
      {
        palabra: "Ajuar",
        definicion:
          "Conjunto de muebles, ropas y enseres de uso común en las casas. / Conjunto de cosas que lleva a su nueva casa una mujer que se casa.",
      },
      {
        palabra: "Jenízaro / Genízaro",
        definicion:
          "Mezclado de dos especies. / Dicho de una persona nacida de padres con diferente nacionalidad.",
      },
      {
        palabra: "Lisérgico",
        definicion:
          "Ácido alucinógeno y se emplea en psiquiatría y como droga.",
      },
      { palabra: "Comitente", definicion: "Que comete." },
      {
        palabra: "Raciocinar",
        definicion:
          "Hacer funcionar (una persona) la inteligencia para obtener unas ideas de otras.",
      },
      {
        palabra: "Capcioso",
        definicion: "Palabra, doctrina o proposición falaz, embustera.",
      },
      {
        palabra: "Agio",
        definicion:
          "Agiotaje (especulación abusiva). / Beneficio optenido por esta operación.",
      },
      {
        palabra: "Hipoxia",
        definicion:
          "Alteración de las fases de ventilación alveolar que produce una deficiente entrega de oxígeno.",
      },
      {
        palabra: "Neurastenia",
        definicion:
          "Neurosis que se caracteriza por fuertes síntomas depresivos, tendencia a la tristeza y gran inestabilidad emotiva.",
      },
      {
        palabra: "Gerontofilia",
        definicion: "Atracción sexual hacia personas ancianas.",
      },
      {
        palabra: "Indemnidad",
        definicion: "Que está fuera de daño o prejuicio.",
      },
      {
        palabra: "Arrumbar",
        definicion:
          "Poner una cosa como inútil en un lugar retirado o apartado. / Desechar, abandonar o dejar fuera de uso. / Arrollar a alguien en la conversación, obligándole a callar.",
      },
      { palabra: "Epizootia", definicion: "Epidemia en animales." },
      { palabra: "Enarbolar", definicion: "Enfadarse." },
      { palabra: "Azarado", definicion: "Torcerse por un caso imprevisto." },
      { palabra: "Mendaz", definicion: "Mentiroso." },
      {
        palabra: "Ascesis",
        definicion: "Reglas y prácticas encaminadas al logro de la virtud.",
      },
      {
        palabra: "Deflación",
        definicion: "Descenso del nivel general de los precios.",
      },
      {
        palabra: "Estanflación",
        definicion:
          "Situación de estancamiento económico, con aumento del paro y de la inflación.",
      },
      {
        palabra: "Inflación",
        definicion: "Elevación de los precios. / Engreimineto, vanidad.",
      },
      {
        palabra: "Mayéutico",
        definicion:
          "Método socrático con que el maestro, mediante preguntas, va haciendo que el discípulo descubra nociones que en él estaban latentes.",
      },
      {
        palabra: "Componenda",
        definicion:
          "Solución incompleta o provisional de un asunto especialmente censurable o de caracter inmoral.",
      },
      { palabra: "Femíneo", definicion: "Femenino." },
      {
        palabra: "Paluego",
        definicion: "Trozos de alimentos que se quedan entre los dientes.",
      },
      {
        palabra: "Foguear",
        definicion:
          "Acostumbrar a alguien a las penalidades y trabajos de un estado u ocupación. / Acostumbrar a las personas y a los caballos al sonido de la pólvora.",
      },
      {
        palabra: "Musteriense",
        definicion:
          "Dicho de un estadio cultural: Correspondiente al Paleolítico medio.",
      },
      {
        palabra: "Super-",
        definicion:
          "Encima (superestructura), eminencia (superintendente), exceso (superproducción).",
      },
      { palabra: "Pan-", definicion: "Significa totalidad. (Panteísmo)." },
      { palabra: "Dipsomanía", definicion: "Alcoholismo." },
      {
        palabra: "Chocarrería",
        definicion:
          "Dicho o hecho de mal gusto o imporpia de personas educadas.",
      },
      {
        palabra: "Gabela",
        definicion:
          "Impuesto que se paga al Estado. / Carga, servidumbre, gravamen.",
      },
      {
        palabra: "Emolumento",
        definicion:
          "Impuesto que se paga al Estado. / Carga, servidumbre, gravamen.",
      },
      {
        palabra: "Caución",
        definicion:
          "Grarantía que da una persona del cumplimeinto de un acto, obligación o contrato mediante la presentación de fiadores, juramento u otra medida.",
      },
      { palabra: "Filomatía", definicion: "Amor a las ciencias." },
      {
        palabra: "Pericia",
        definicion:
          "Sabiduría, práctica, experiencia y habilidad en una ciencia o arte.",
      },
      { palabra: "Paleo-", definicion: "Antiguo o primitivo." },
      {
        palabra: "Paleolítico",
        definicion: "Periodo primero de la edad de piedra.",
      },
      {
        palabra: "Neolítico",
        definicion: "Periodo último de la edad de piedra.",
      },
      {
        palabra: "Orto-",
        definicion: "Recto o correcto. (ortodoncia, ortofonía)",
      },
      { palabra: "Lardáceo", definicion: "Semejante o parecido al lardo." },
      { palabra: "Lardo", definicion: "Grasa o unto de los animales." },
      {
        palabra: "Unto",
        definicion: "Crasitud o gordura interior del cuerpo del animal.",
      },
      { palabra: "Crasitud", definicion: "Gordura." },
      { palabra: "Hipertofriado", definicion: "Crecer en exceso." },
      { palabra: "Homúnculo", definicion: "Hombre pequeño." },
      { palabra: "Medro", definicion: "Mejora." },
      { palabra: "Anuencia", definicion: "Consentimiento." },
      { palabra: "Deletéreo", definicion: "Mortífero, venenoso." },
      {
        palabra: "Pilatuna",
        definicion:
          "Travesura, acción propia de niños que, en busca de diversión, ocasiona molestia.",
      },
      {
        palabra: "Ciclotimia",
        definicion:
          "Trastorno del estado de ánimo considerado como un trastorno bipolar leve.",
      },
      {
        palabra: "Ordalía",
        definicion:
          "Juicios. Prueba ritual usada en la Europa medieval y en ciertas sociedades para averiguar la culpabilidad o inocencia de una persona acusada, y una de cuyas formas es el juicio de Dios.",
      },
      { palabra: "Accesión", definicion: "Coito." },
      {
        palabra: "Hontanar",
        definicion: "Sitio en el que nacen fuentes o manantiales.",
      },
      { palabra: "Preterir", definicion: "Omitir." },
      {
        palabra: "Helimorfismo",
        definicion:
          "Doctrina aristotélica seguida por la mayoría de los escolásticos según la cual los cuerpos se hallan constituidos por materia y forma; la materia es lo informe, la sustancia amorfa, mientras que la forma es la determinación de la materia.",
      },
      {
        palabra: "Sintaxis",
        definicion:
          "Modo de combinarse y ordenarse las palabras y las expresiones dentro del discurso. / Doctrina lingüistica que lo estudia.",
      },
      {
        palabra: "Sintagma",
        definicion:
          "Palabra o grupo de palabras que constituyen una unidad sintactica y que cumplen una función determinada con respecto a otras palabras de la oración.",
      },
      {
        palabra: "Deducción",
        definicion:
          "Forma de razonamiento que consiste en partir de un principio genereal conocido para llegar a un principio particular desconocido.",
      },
      {
        palabra: "Inducción",
        definicion:
          "Forma de razonamiento que consiste en establecer una leya o conclusión general a partir de particulares.",
      },
      {
        palabra: "Estipendio",
        definicion:
          "Cantidad de dinero que se paga a alguien por un trabajo realizado.",
      },
      { palabra: "Meteco", definicion: "Extranjero, forastero." },
      {
        palabra: "Displicencia",
        definicion: "Actitud indiferente y de desagrado hacia algo o alguien.",
      },
      {
        palabra: "Deyección",
        definicion: "Ciscar / Materias arrojadas por un volcán.",
      },
      { palabra: "Garantir", definicion: "Dar garantía." },
      { palabra: "Falible", definicion: "Que puede fallar." },
      {
        palabra: "Bacteriófago",
        definicion: "Virus que afecta las bacterias.",
      },
      { palabra: "Excremental", definicion: "Excrementicio." },
      {
        palabra: "Excrementicio",
        definicion:
          "Perteneciente o relativo a la excreción y a las sustancias excretadas.",
      },
      {
        palabra: "Holganza",
        definicion:
          "Descanso. / Carencia de trabajo. / Placer, contento, diversión y regocijo.",
      },
      {
        palabra: "Cortical",
        definicion: "Pertenciente o relativo a la corteza.",
      },
      {
        palabra: "Basal",
        definicion:
          "Situado en la base de una formación orgánica o de una construcción.",
      },
      {
        palabra: "Disyuntivo",
        definicion: "Que tiene la cualidad de desunir.",
      },
      {
        palabra: "Yuxtaponer",
        definicion: "Unir. / Poner una cosa junto a otra sin una en medio.",
      },
      { palabra: "Conjuntivo", definicion: "Que sirve para juntar o unir." },
      {
        palabra: "Hipóstasis",
        definicion: "Consideración de lo abstracto o irreal como algo real.",
      },
      {
        palabra: "Hendíadis / endíadis",
        definicion:
          "Figura retórica que consiste en la expresión de un único concepto mediante dos términos coordinados. Ej: estará aquí en carne y hueso, prometer el oro y el moro.",
      },
      {
        palabra: "Propedéutico",
        definicion:
          "Enseñanza preparatoria para el estudio de una cienca o una disciplina.",
      },
      {
        palabra: "Auspicio",
        definicion:
          "Ayuda que recibe una persona, una entidad o un proyecto, etc., para propiciar su desarrollo o ejecución.",
      },
      { palabra: "Ad infinitum", definicion: "Latín: Hasta el infinito." },
      { palabra: "Composible", definicion: "Compatible." },
      { palabra: "Enuresis", definicion: "Micciones incontroladas." },
      { palabra: "Componibilidad", definicion: "Poner juntos." },
      {
        palabra: "Exacción",
        definicion:
          "Exigencia de pago de impuestos, multas, deudas, etc. / Cobro injusto y violento.",
      },
      {
        palabra: "Hilemorfismo",
        definicion:
          "Doctrina aristotélica según la cual los cuerpos se hallan constituidos por materia y forma.",
      },
      {
        palabra: "Individualizar",
        definicion:
          "Señalar las caracteristicas particulares que hacen qeu un individuo o grupo sea diferente de los demás de su clase.",
      },
      {
        palabra: "Individuación",
        definicion:
          "Acción de distinguir una cosa o una persona detalladamente de otras coasas o personas, por tener cualidades particulares.",
      },
      { palabra: "A fortiori", definicion: "Latín: Con mayor motivo." },
      {
        palabra: "Holismo",
        definicion:
          "Todo, por entero, totalidad. / Posición metodológica y epistemológica qeu psotula cómo los sitemas y sus propiedades, deben ser analizados en su conjunto y no solo a través de las partes.",
      },
      {
        palabra: "Fisión",
        definicion: "Rotura o división de un núcleo atómico.",
      },
      {
        palabra: "Ofidio",
        definicion:
          "Reptiles escamosos sin extremidades, de cuerpo muy alargado y estrecho (serpiente).",
      },
      {
        palabra: "Nóumeno, Noúmeno",
        definicion:
          "Objeto pensado por la razón, por oposicion a fenómeno (objeto captado por los sentidos), tal como es en sí y no tal como se nos aparece.",
      },
      { palabra: "Donoso", definicion: "Que tiene donaire y gracia." },
      {
        palabra: "Deturpar",
        definicion: "Afear, manchar, estropear, deformar.",
      },
      {
        palabra: "Toponimia",
        definicion:
          "Conjunto de los nombres propios de lugar de un país o de una región",
      },
      { palabra: "Étimo", definicion: "Raíz o vocablo que procede de otro." },
      {
        palabra: "Apacentar",
        definicion: "Dar pasto al ganado o llevarlo a pastar.",
      },
      {
        palabra: "Numantino",
        definicion:
          "Que resiste con tenacidad, a menudo en condiciones precarias.",
      },
      { palabra: "Rutilar", definicion: "Brillar." },
      {
        palabra: "Putrescencia",
        definicion: "Estado de putrefacción en la que se haya un cuerpo.",
      },
      { palabra: "Ambliópico", definicion: "Que tiene el ojo vago." },
      { palabra: "Bolardo", definicion: "Poste de hierro." },
      {
        palabra: "Pareidolia",
        definicion: "Fenómeno psicológico que percibe caras donde no las hay.",
      },
      { palabra: "Amenidad", definicion: "Cualidad de ameno." },
      { palabra: "Apodíctico", definicion: "Totalmente cierto, válido." },
      { palabra: "Epatar", definicion: "Producir admiración o asombro." },
      {
        palabra: "Acondroplasia",
        definicion: "Variedad de enanismo donde las extremidades son cortas.",
      },
      { palabra: "Sub aeternitatis", definicion: "En virtud de la eternidad." },
      { palabra: "Miasma", definicion: "Efluvio maligno." },
      {
        palabra: "Prédica",
        definicion: "Sermón o plática. / Perorata, discurso vehemente.",
      },
      {
        palabra: "Circunstanciar",
        definicion: "Determinar las circunstacias de algo.",
      },
      {
        palabra: "Disonancia",
        definicion:
          "Falta de correspondencia, conformidad o igualdad entre dos o más cosas.",
      },
      {
        palabra: "Heterótrofo",
        definicion:
          "Que se nutre de sustancias elaboradas por otros seres vivos.",
      },
      {
        palabra: "Sindrómico",
        definicion: "Perteneciente o relativo a un síndrome.",
      },
      {
        palabra: "Síndrome",
        definicion:
          "Conjunto de signos o fenómenos reveladores de una situación generalmente negativa.",
      },
      { palabra: "Ecuanimidad", definicion: "Igualdad o constancia en ánimo." },
      {
        palabra: "Sic",
        definicion:
          "En impresos y manuscritos españoles, por lo general entre paréntesis, para dar a entender que una palabra o frase empleada en ellos, y que pudiera parecer inexacta, es textual.",
      },
      {
        palabra: "Hipocorístico",
        definicion:
          "Dicho de un nombre: Que, en forma diminutiva, abreviada o infantil, se usa como designación cariñosa, familiar o eufemística; p. ej., Pepe, Charo.",
      },
      {
        palabra: "Patronímico",
        definicion:
          "Dicho de un apellido: Que se daba antiguamente en España al hijo, y que está formado sobre el nombre del padre. Ej: Fernandez de Ferenando.",
      },
      { palabra: "Anaquel", definicion: "Estante." },
      {
        palabra: "Renuente",
        definicion: "Reacio, remiso. / Dificultoso, trabajoso.",
      },
      {
        palabra: "Sustantividad",
        definicion: "Existencia real, individualidad, independencia.",
      },
      {
        palabra: "Turgente",
        definicion:
          "Abultado y firme. / Dicho de un líquido: Que hincha alguna parte del cuerpo.",
      },
      {
        palabra: "Pleura",
        definicion:
          "Membranas serosas que en ambos lados del pecho de los mamíferos cubren las paredes de la cavidad torácica y la superficie de los pulmones.",
      },
      {
        palabra: "Fiscalizar",
        definicion:
          "Criticar y traer a juicio las acciones u obras de alguien.",
      },
      { palabra: "Alipori", definicion: "Vergüenza ajena." },
      { palabra: "Dipsomanía", definicion: "Alcoholismo." },
      {
        palabra: "Apartheid",
        definicion:
          "Sistema político y social desarrollado en la República de Sudáfrica y otros estados sudafricanos, basado en la segregación o separación de la población por motivos raciales o étnicos y en el trato discriminatorio hacia la población negra.",
      },
      {
        palabra: "Vitriólico",
        definicion:
          "Perteneciente o relativo al vitriolo o que tiene sus propiedades.",
      },
      { palabra: "Vitriolo", definicion: "Ácido sulfúrico." },
      {
        palabra: "Rudimento",
        definicion:
          "Nociones básicas de un arte, una ciencia, técnica o profesión.",
      },
      { palabra: "Rección", definicion: "Acto de regir." },
      { palabra: "Ágape", definicion: "Banquete / Comida fraternal." },
      {
        palabra: "Gaudeamus",
        definicion: "Fiesta, regocijo, comida y bebida abundantes.",
      },
      { palabra: "Ahormar", definicion: "Ajustar algo a su horma o molde." },
      {
        palabra: "Eudemonismo",
        definicion:
          "Es la denominación que se asigna a toda teoría ética que postula que el bien buscado por naturaleza por el ser humano es la felicidad.",
      },
      {
        palabra: "Grimorio",
        definicion:
          " Libro de fórmulas mágicas usado por los antiguos hechiceros.",
      },
      {
        palabra: "Teratoscopia",
        definicion:
          "Rama de las artes adivinatorias que se basa en la interpretaciones del prodigio y el monstruo (El monstruo como señal. Ej:Lluvia de piedras o lágrimas de sangre)",
      },
      {
        palabra: "Martirologio",
        definicion:
          "Libro o catálogo de los mártires. / Libro de todos los santos conocidos. / Lista de las víctimas de una causa.",
      },
      { palabra: "Isovalencia", definicion: "Iso=igual, Valencia=valor." },
      { palabra: "Tautegórico", definicion: "Referido a sí mismo." },
      { palabra: "Alegórico", definicion: "Referido a otro." },
      { palabra: "Cogitar", definicion: "Reflexionar o meditar algo." },
      {
        palabra: "Anamnesis",
        definicion:
          "Conjunto de datos que se recogen en la historia clínica de un paciente.",
      },
      {
        palabra: "Paronomasia / Paranomasia",
        definicion:
          "Semejanza fonética entre dos o más palabras Ej: roja y reja.",
      },
      { palabra: "Paisanaje", definicion: "Conjunto de paisanos." },
      {
        palabra: "Exergo",
        definicion: "Cita con la que se encabeza un texto.",
      },
      { palabra: "Inmarcesible", definicion: "Inmarchitable." },
      {
        palabra: "Ecónomo",
        definicion:
          "Hombre que adminstraba los bienes del demente o del pródigo. / Gerente.",
      },
      { palabra: "Pródigo", definicion: "Dadivoso. Que despedicia." },
      { palabra: "Facticio", definicion: "Elaborado artificialmente." },
      { palabra: "Acendrar", definicion: "Depurar, purificar, limpiar." },
      { palabra: "Óbice", definicion: "Obstáculo, impedimento." },
      {
        palabra: "Sortilegio",
        definicion: "Adivinación que se hace por suertes supersticiosas.",
      },
      {
        palabra: "Escolio",
        definicion: "Nota que se pone a un texto para explicarlo.",
      },
      { palabra: "Autogórico", definicion: "Que se representa a sí mismo." },
      {
        palabra: "Tautogórico",
        definicion:
          "Que el signo significante es la causa de su significado. Ej: 'Te lo prometo'.",
      },
      {
        palabra: "Satrapía",
        definicion:
          "Dignidad de un sátrapa. / Territorio gobernado por un sátrapa.",
      },
      {
        palabra: "Anfibología",
        definicion:
          "Doble sentido de una palabra que puede provocar dudas e interpretaciones erróneas.",
      },
      { palabra: "Atingencia", definicion: "Relación, conexión." },
      { palabra: "Nesciente", definicion: "Que no sabe." },
      {
        palabra: "Eviterno",
        definicion: "Que, habiendo comenzado en el tiempo, no tendrá fin.",
      },
      { palabra: "Metabolizar", definicion: "Asimilar algo." },
      { palabra: "Genitivo", definicion: "Que engendra o produce algo." },
      { palabra: "Dativa", definicion: "Relativo a lo dado." },
      {
        palabra: "Bonhomía",
        definicion:
          "Cualidad de persona buena, pero algo ingenua. Afabilidad, sencillez, bondad y honradez.",
      },
      {
        palabra: "Oncología",
        definicion:
          "Que estudia los tumores y su tratamiento. Ej: 'La onocología se ocupa del cáncer (cáncerología)'",
      },
      {
        palabra: "Nadir",
        definicion: "Punto de la esfera celeste opuesta al cenit.",
      },
      {
        palabra: "Dialógico",
        definicion: "Que contempla la posibilidad de discusión.",
      },
      {
        palabra: "Arrogar",
        definicion:
          "Atribuir, adjudicar. / Apropiarse indebida o exageradamente de cosas inmateriales, como facultades, derechos u honores.",
      },
      { palabra: "Recusar", definicion: "No querer admitir algo o aceptarlo." },
      {
        palabra: "Cronotopo",
        definicion:
          "Conexión de las relaciones temporales y espaciales. Unidad de espacio-tiempo indisoluble.",
      },
      {
        palabra: "Añagaza",
        definicion:
          "Artificio para atraer con engaño. Señuelo para coger aves.",
      },
      { palabra: "Otredad", definicion: "Condición de ser otro." },
      { palabra: "Domeñar", definicion: "Sujetar, someter y reñir." },
      {
        palabra: "Fratría",
        definicion: "Sociedad íntima, hermandad, cofradía.",
      },
      {
        palabra: "Filarquía",
        definicion: "Mando de una serie de tríbus de la antigüedad.",
      },
      {
        palabra: "Statu quo",
        definicion: "Estado de las cosas en un determinado momento.",
      },
      {
        palabra: "Rehala",
        definicion:
          "Rebaño de ganada lanar de distintos dueños conducido por un solo mayoral. / Jauria o agrupación de perros de caza.",
      },
      { palabra: "Apoyatura", definicion: "Apoyo." },
      {
        palabra: "Rejo",
        definicion:
          "Robustez o fortaleza. / Soga. / Punta o aguijón de hierro.",
      },
      {
        palabra: "Andrina / Endrino",
        definicion: "De color negro azulado, parecido al de la endrina.",
      },
      { palabra: "Procaz", definicion: "Desvergonzado, atrevido." },
      { palabra: "Impostado", definicion: "Falso, artificial, fingido." },
      {
        palabra: "Plancheta",
        definicion:
          "Instrumento de topografía para levantar planos sobre el terreno que consiste en un tablero cubierto con papel de dibujo.",
      },
      { palabra: "Gatuperio", definicion: "Embrollo o intriga." },
      {
        palabra: "Morfema",
        definicion: "Fragemento mínimo capaz de expresar un significado.",
      },
      {
        palabra: "Locución",
        definicion: "Expresión caraterística de un idioma. / Modo de hablar.",
      },
      { palabra: "Pirrionismo", definicion: "Escepticismo." },
      {
        palabra: "Componenda",
        definicion: "Solución o arreglo incompleto o provisional.",
      },
      { palabra: "Turpitud", definicion: "Torpeza." },
      { palabra: "Pan-", definicion: "Significa totalidad." },
      {
        palabra: "Pansexualismo",
        definicion:
          "Tendencia a encontrar en toda conducta una motivación sexual.",
      },
      {
        palabra: "A fuer de",
        definicion: "Por ser y Como consecuencia de ser.",
      },
      {
        palabra: "Disimétrico",
        definicion: "Que no tiene simetría. Asimétrico.",
      },
      { palabra: "Palaciego", definicion: "Del palacio o relacionado con él." },
      {
        palabra: "Epítome",
        definicion:
          "Resumen de una obra extensa en el que se exponen idead fundamentales.",
      },
      {
        palabra: "Lítote",
        definicion:
          "Atenuación. Figura retória de pensamiento que consiste en no expresar todo lo que se quiere dar a entender sin que por ello deje de comprenderse la intención del hablante.",
      },
      {
        palabra: "Heterogonía",
        definicion:
          "Reproducción de especies por dos formas, uan por cruzamiento sexual y otra por partenogénesis.",
      },
      {
        palabra: "Partenogénesis",
        definicion:
          "Tipo de reproducción sexual que consiste en el desarrollo de una célula reproductora hasta llegar a formarse un nuevo individuo, sin que se produzca fecundación.",
      },
      {
        palabra: "Exención",
        definicion:
          "Efecto de eximir a una persona de una carga, culpa, obligación o compromiso.",
      },
      {
        palabra: "Bonhomía",
        definicion:
          "Afabilidad, sencillez, bondad y honradez en el carácter y en el comportamiento.",
      },
      {
        palabra: "Pintiparado",
        definicion:
          "Cosa que viene adecuada a otra. / Parecido, semejante a otro.",
      },
      {
        palabra: "Horadar",
        definicion: "Perforar, atravesar, carcomer, penetrar.",
      },
      { palabra: "Herrumbre", definicion: "Óxido del hierro." },
      { palabra: "Mucama", definicion: "Criada." },
      { palabra: "Diversidad funcional", definicion: "Discapacidad." },
      {
        palabra: "Capacitismo",
        definicion: "Discriminación o prejuicio contra discapacitados.",
      },
      {
        palabra: "Fisicalismo",
        definicion:
          "Doctrina filosófica que afirma que todo lo que existe es exclusivamente físico. (Materialismo reduccionista y monista.)",
      },
      {
        palabra: "Sapiosexual",
        definicion:
          "Neologismo, atracción sexual por la inteligencia de otro individuo.",
      },
      { palabra: "Brete", definicion: "Aprieto sin efugio o evasiva." },
      { palabra: "Efugio", definicion: "Evasión, salida." },
      {
        palabra: "Parergon",
        definicion: "Aditamento a una cosa, que le sirve de ornato.",
      },
      { palabra: "Aditamento", definicion: "Cosa que se añade a otra." },
      { palabra: "Luengo", definicion: "Largo. / Dilación, demora." },
      {
        palabra: "Palimpsesto",
        definicion:
          "Manuscrito en el que se ha borrado, mediante raspado u otro procedimiento, el texto para volver a escribir un nuevo texto.",
      },
      {
        palabra: "Praxeología",
        definicion:
          "Metodología que busca estudiar la estructura lógica de la acción humana.",
      },
      {
        palabra: "Apotético",
        definicion:
          "Posición fenomenológica característica de los objetos que percibimos en nuestro 'mundo entorno'. (Son apotéticas las conductas de acecho de los animales, la captación de los comportamientos de otros sujetos, los planes, proyectos o fines, los símbolos, &c.)",
      },
      {
        palabra: "Paretético",
        definicion:
          "Forma de relaciones que implican causalidad mecánica. (Las sinapsis neuronales que se producen cuando un sujeto operatorio (animal o humano) «frunce el ceño» para ejercer el raciocinio)",
      },
      { palabra: "Xeno-", definicion: "Extranjero. Ej: Xenófobia." },
      { palabra: "Colusión", definicion: "Pacto ilícito de engaño a tercero." },
      { palabra: "Incardinar", definicion: "Incorporar a alguien en algo." },
      { palabra: "Factum", definicion: "Hecho." },
      { palabra: "Ex nihilo", definicion: "Desde/De la nada." },
      { palabra: "Azogar", definicion: "Turbarse y agitarse mucho." },
      {
        palabra: "Consuetudinario",
        definicion:
          "Que se rige por la costumbre, aplicado normalmente al derecho.",
      },
      { palabra: "Diádoco / Proclo", definicion: "Sucesor." },
      { palabra: "Hénada", definicion: "Uno, unidad." },
      { palabra: "Asíntota", definicion: "Algo que no tiene coincidencia." },
      {
        palabra: "Dimorfismo",
        definicion: "Dos formas o dos aspectos anatómicos diferentes.",
      },
      {
        palabra: "Excipiente",
        definicion: "Sustancia inerte que se utiliza para dar solidez a otra.",
      },
      {
        palabra: "Prognato",
        definicion:
          "Que tiene mandíbulas salientes. / Que tiene las partes bucales prominentes.",
      },
      {
        palabra: "Preservativo",
        definicion: "Que tiene la virtud o eficacia de preservar.",
      },
      {
        palabra: "-cida",
        definicion:
          "Significa 'matador', 'exterminador'. (Herbicida, insecticida)",
      },
      {
        palabra: "Intersectarse",
        definicion:
          "Geom: Dicho de dos líneas, dos superficies o sólidos: Cortarse o cruzarse entre sí.",
      },
      {
        palabra: "Ad hominem",
        definicion:
          "Latín: Contra el hombre. Tipo de falacia que por su forma o contenido, no está capacitado para sostener una tesis",
      },
      {
        palabra: "Hagiografía",
        definicion:
          "Historia de la vida de los santos. / Biografía excesivamente elogiosa.",
      },
      {
        palabra: "Roturar",
        definicion:
          "Arrar o labrar por primera vez las tierras para ponerlos en cultivo.",
      },
      {
        palabra: "Dengue",
        definicion:
          "Remilgo o resistencia a hacer o tomar una cosa por delicadeza exagerada o por hacerse de rogar",
      },
      {
        palabra: "Dysania",
        definicion: "Dificultad para levantarse por las mañanas.",
      },
      {
        palabra: "Fosfeno",
        definicion:
          "Sensación visual producida por la excitación mecánica de la retina o por una presión sobre el globo ocular.",
      },
      {
        palabra: "Lemniscata",
        definicion: "Nomenclatura del símbolo de infinito en geometría.",
      },
      { palabra: "Tenesmo", definicion: "Ganas frecuentes de ir al aseo." },
      { palabra: "Seráfico", definicion: "Angelical." },
      {
        palabra: "Sexador",
        definicion: "Persona que se dedica a sexar animales.",
      },
      {
        palabra: "Talasocracia",
        definicion: "Dominio ejercido sobre los mares.",
      },
      {
        palabra: "Estabulario o Animalario",
        definicion:
          "Espacio donde se tienen los animales destinados a experimentos de laboratorio",
      },
      {
        palabra: "Piélago",
        definicion:
          "Balsa, estanque. / Aquello que por su abundancia es dificultoso de enumerar y contar.",
      },
      {
        palabra: "Erística",
        definicion: "El arte del conflicto y del debate.",
      },
      {
        palabra: "Ínsito",
        definicion: "Propio y connatural a algo y como nacido en ello.",
      },
      {
        palabra: "Negligir",
        definicion: "Descuidar, pasar por alto, abandonar algo.",
      },
      {
        palabra: "Chanza",
        definicion:
          "Dicho que tiene gracia y agudeza y que no guarda mala intención.",
      },
      {
        palabra: "Chancero",
        definicion: "Que acostumbra a decir chanzas o bromas.",
      },
      { palabra: "Nepote", definicion: "Pariente privado del papa." },
      { palabra: "Ex novo", definicion: "De nuevo." },
      {
        palabra: "Granjear",
        definicion: "Captar o atraer un sentimiento o una actitud determinada.",
      },
      { palabra: "Ralo", definicion: "Que es poco espeso o poblado." },
      {
        palabra: "Defección",
        definicion:
          "Acción de abandonar una causa o de separarse de ella con deslealtad.",
      },
      { palabra: "Reniforme", definicion: "Con forma de riñon." },
      {
        palabra: "Subrogación",
        definicion: "Remplazo de las competencias de otro.",
      },
      {
        palabra: "Sofrología",
        definicion:
          "Conjunto de técnicas terapéuticas alternativas para el manejor del estrés.",
      },
      { palabra: "Quaestio nominis", definicion: "Cuestíon de." },
      {
        palabra: "Zangarriana",
        definicion:
          "Enfermedad leve y pasajera , que repite con frecuencia. / Tristeza, melancolía, disgusto.",
      },
      {
        palabra: "Pavesa",
        definicion:
          "Partecilla ligera que salta de una materia inflamada y acaba por convertirse en ceniza.",
      },
      {
        palabra: "Erial",
        definicion: "Dicho de una tierra o campo: Sin cultivar ni labrar.",
      },
      {
        palabra: "Nuncio",
        definicion:
          "Hombre que lleva mensajes o encargos de una persona a otra.",
      },
      {
        palabra: "Burgo",
        definicion:
          "En la Edad Media, fortaleza construida por los nobles feudales para vigilar los territorios de su jurisdicción, donde se asentaban los gremios, entre otros, de comerciantes y artesanos. / Aldea o población muy pequeña, dependiente de otra principal.",
      },
      { palabra: "Paular", definicion: "Terreno pantanoso. / Hablar." },
      {
        palabra: "Testa",
        definicion:
          "Cabeza. / Cara o parte frontal de las cosas. / Entendimiento, capacidad y prudencia.",
      },
      {
        palabra: "Nudo gordiano",
        definicion: "Dificultad de difícil solución.",
      },
      {
        palabra: "Occipucio",
        definicion:
          "Parte de la cabeza por donde esta se une con las vértebras del cuello.",
      },
      {
        palabra: "Adventicio",
        definicion:
          "Que sucede de forma accidental. / Órgano que se desarrolla de forma extraña o fuera de su lugar habitual.",
      },
      { palabra: "Ofensión", definicion: "Molestia, daño, agravio." },
      { palabra: "Sapere Aude", definicion: "Latín: Atrévete a saber." },
      { palabra: "Átopo", definicion: "Inclasificable." },
      {
        palabra: "Interfecto",
        definicion: "Persona de la que se está hablando.",
      },
      { palabra: "Fruición", definicion: "Placer." },
      {
        palabra: "Atrabilario",
        definicion: "Que tiene mal carácter, que se irrita con facilidad.",
      },
      {
        palabra: "Sarraceno",
        definicion: "Que pertenecía a la antigua tribu del norte de Arabia.",
      },
      { palabra: "Azalá", definicion: "Oración en la religión musulmana." },
      {
        palabra: "Azaque",
        definicion:
          "Riqueza personal que se debe atribuir a los pobres en el Islam.",
      },
      { palabra: "Aleyas", definicion: "Versículos del Corán." },
      {
        palabra: "Hanif",
        definicion:
          "Hombre monoteísta que vive antes de la revelación del Corán y que renuncia la culto de imágenes y de los astros.",
      },
      {
        palabra: "Miríada",
        definicion:
          "Cantidad muy grande imposible de calcular. / Infinidad, sinfín.",
      },
      {
        palabra: "Oblación",
        definicion: "Ofrecenda a Dios. / Acción de ofrecer algo a Dios.",
      },
      { palabra: "Libérrimo", definicion: "Superlativo de libre." },
      { palabra: "Delación", definicion: "Acusación, denuncia." },
      {
        palabra: "Resabiar",
        definicion: "Hacer que una persona adquiera malas costumbres.",
      },
      {
        palabra: "Presbicia",
        definicion:
          "Dificultad para ver de cerca por culpa de la rigidez del cristalino.",
      },
      {
        palabra: "Ad absurdum",
        definicion:
          "Reducción al absurdo. Demostrar que una afirmación es falsa.",
      },
      {
        palabra: "Antropocentrismo",
        definicion: "Hombre como medida de todas las cosas.",
      },
      {
        palabra: "Especismo",
        definicion:
          "Desconsideración a diferentes especies. La representación más común es el antropocentrismo moral, es decir, la infravaloración de los intereses de quienes no pertenecen a la especie Homo sapiens.",
      },
      {
        palabra: "Antrópico",
        definicion:
          "Todo aquello que tiene que ver con el ser humano y su posición en el mundo, engloba a todas las modificaciones que sufre la naturaleza por causa de la acción humana. Ej: construcción de vías férreas, carreteras, represas hidroeléctricas, teoría del universo.",
      },
      {
        palabra: "Necrosis",
        definicion: "Degeneración del tejido por muerte de sus células.",
      },
      { palabra: "Necropsia", definicion: "Autopsia." },
      {
        palabra: "Sahumar",
        definicion: "Ahumar una cosa para que tome buen olor.",
      },
      {
        palabra: "Hozar",
        definicion: "Mover y levantar tierra con el hocico.",
      },
      {
        palabra: "Golem",
        definicion: "Ser creado de barro en la mitología judía y medieval",
      },
      {
        palabra: "Abnegado",
        definicion: "Que sacrifica o renuncia a sus intereses o deseos.",
      },
      {
        palabra: "Nigromancia",
        definicion:
          "Adivinación mediante la invocación a los muertos. / Magia negra o diabólica",
      },
      {
        palabra: "Duopolio",
        definicion:
          "Situación de mercado en que la oferta de un producto o el ejercicio de una actividad se reparte entre dos empresas.",
      },
      {
        palabra: "Behetría",
        definicion:
          "Confusión, desorden. / Antiguamente, población cuyos vecinos, como dueños absolutos de ella, podían recibir por señor a quien quisiesen.",
      },
      {
        palabra: "Admonición",
        definicion:
          "Discurso con que se hace ver un mal y se invita a corregirse.",
      },
      {
        palabra: "Ignoramus et ignorabimus",
        definicion: "Desconocemos y desconoceremos.",
      },
      {
        palabra: "Férula",
        definicion:
          "Autoridad o poder despótico. / Medicina: molde para inmobilizar cuerpo. (yeso). / Palmeta para castigar a los muchachos.",
      },
      {
        palabra: "Procurador",
        definicion: "Ejecuta o actúa en nombre de otro.",
      },
      {
        palabra: "Interregno",
        definicion:
          "Periodo de tiempo en que un estado o país carece de soberano.",
      },
      {
        palabra: "Expeditivo",
        definicion:
          "Que actúa con eficacia y rapidez en la resolución de un asunto.",
      },
      {
        palabra: "Deicida",
        definicion:
          "Que prescinde de dioses. / Que dio muerte a Jesús o contribuyó a ello.",
      },
      {
        palabra: "Pogromo",
        definicion:
          "Saqueo y matanza de gente indefensa, especialmente judíos, llevados a cabo por una multitud.",
      },
      {
        palabra: "Obstetricia",
        definicion:
          "Parte de la medicina que se ocupa del embarazo, el parto y el período de tiempo posterior a este.",
      },
      {
        palabra: "Encíclica",
        definicion:
          "Carta solemne que el Papa dirige a todos los obispos y fieles católicos adoctrinando en cuestiones de fe o de costumbres.",
      },
      {
        palabra: "Prospección",
        definicion:
          "Exploración de posibilidades futuras basada en indicios presentes.",
      },
      {
        palabra: "Enteógeno",
        definicion:
          "Sustancia vegetal o preparado de sustancias vegetales con propiedades psicotrópicas.",
      },
      {
        palabra: "Antrópodo",
        definicion:
          "Invertebrados con simetría bilateral, el cuerpo segmentado y recubierto por un tegumento duro (exoesqueleto) y las patas articuladas",
      },
      {
        palabra: "Exoesqueleto",
        definicion:
          "Tejido orgánico duro y rígido que recubre exteriormente el cuerpo de los artrópodos y otros invertebrados.",
      },
      { palabra: "Esotro", definicion: "Eso otro." },
      {
        palabra: "Euritmia",
        definicion:
          "Buena disposición y correspondencia de las partes en una obra de arte.",
      },
      {
        palabra: "Vitíligo",
        definicion:
          "Enfermedad cutánea que provoca decoloración en la pigmentación de la piel.",
      },
      { palabra: "Cadalso", definicion: "Patíbulo." },
      {
        palabra: "Pendolista",
        definicion: "Persona que escribe con muy buena letra. / Memorista.",
      },
      { palabra: "Amostazar", definicion: "Irritar, enojar." },
      {
        palabra: "Renquear / Renguear",
        definicion: "Cojear. / Dificultad para hacer algo.",
      },
      { palabra: "Opunitas", definicion: "Plantas chumberas, cactus." },
      {
        palabra: "Allende",
        definicion:
          "Que algo está más alla o al otro lado de otra cosa. Se usa sólo para grandes extensiones.",
      },
      { palabra: "Acullá", definicion: "Algo que está más allá." },
      {
        palabra: "Predio",
        definicion: "Finca, tierra o posesión de inmueble.",
      },
      {
        palabra: "Vahído",
        definicion:
          "Desvanecimiento, turbación breve del sentido por alguna indisposición.",
      },
      {
        palabra: "Ebionismo",
        definicion: "Pobre, los pobres, concepto de la época patrística.",
      },
      { palabra: "Disrupción", definicion: "Rotura o interrupción brusca." },
      {
        palabra: "Descerrajar",
        definicion:
          "Arrancar o violentar la cerradura de una puerta, cofre, escritorio. / Disparar con un arma de fuego.",
      },
      { palabra: "Consorte", definicion: "Esposo o esposa." },
      { palabra: "Pugnaz", definicion: "Guerrero, belicoso." },
      { palabra: "Postrer", definicion: "Postrero." },
      { palabra: "Postrero", definicion: "Último de una serie o sucesión." },
      { palabra: "Delectación", definicion: "Deleite." },
      { palabra: "Arreo", definicion: "Adorno." },
      {
        palabra: "Pechero",
        definicion:
          "Obligado a contribuir. / Plebeyo. / Tributo, contribución.",
      },
      {
        palabra: "Ley de Gresham",
        definicion:
          "La Ley de Gresham es el principio según el cual, cuando en un país circulan simultáneamente dos tipos de monedas de curso legal, y una de ellas es considerada por el público como 'buena' y la otra como 'mala', la moneda mala siempre expulsa del mercado a la buena.",
      },
      {
        palabra: "Dizque",
        definicion: "Dicho, murmuración, reparo. / Al parecer, presuntamente.",
      },
      {
        palabra: "Engañifa",
        definicion: "Engaño artificioso con apariencia de utilidad.",
      },
      {
        palabra: "Dolo",
        definicion:
          "Engaño, fraude, simulación. / Voluntad deliberada de cometer un delito a sabiendas de su ilicitud.",
      },
      { palabra: "Inficionar", definicion: "Infectar, corromper, envenenar." },
      {
        palabra: "Osmosis",
        definicion:
          "Influencia recíproca entre dos individuos o elementos que están en contacto.",
      },
      { palabra: "Pedernal", definicion: "Suma dureza de cualquier cosa." },
      { palabra: "Ludibrio", definicion: "Escarnio, burla." },
      {
        palabra: "Paráclito",
        definicion: "Espíritu Santo enviado para consolar a los fieles.",
      },
      { palabra: "Singladura", definicion: "Rumbo." },
      {
        palabra: "Motejar",
        definicion:
          "Aplicar a alguien o a algo un apelativ o un calificativo despectivo o reprobatorio generalmente como crítica o censura.",
      },
      {
        palabra: "Eunucoide",
        definicion:
          "Hombre con testículos fisiológicamente inactivos/ Voz de falsete en el hombre.",
      },
      { palabra: "Algarada", definicion: "Alboroto o vocerío." },
      { palabra: "Hender", definicion: "Abrir o rajar un cuerpo sólido." },
      { palabra: "Paladinamente", definicion: "Públicamente, sin rebozo." },
      {
        palabra: "Alfaquí",
        definicion: "Experto en la jurisprudencia islámica.",
      },
      { palabra: "Malayo", definicion: "Relativo a Malasia." },
      { palabra: "Sevicia", definicion: "Crueldad excesiva. / Malos tratos." },
      {
        palabra: "Coroza",
        definicion:
          "Gorro de papel untado con engrudo que se ponía por castigo en la cabeza de los condenados en la Inquisición.",
      },
      {
        palabra: "Interdicción",
        definicion:
          "Prohibición o privación impuesta por la autoridad judicial.",
      },
      { palabra: "Hadiz", definicion: "Dichos o acciones del profeta Mahoma." },
      {
        palabra: "Aquende",
        definicion:
          "Indica de forma poco precisa un lugar muy cercano a la persona que hablar.",
      },
      { palabra: "Plañir", definicion: "Lorrar y gemir." },
      { palabra: "Arráez", definicion: "Caudillo o jefe morisco." },
      {
        palabra: "Salaz",
        definicion:
          "Que está muy inclinado a la lujuria. / Que implica o denota salacidad o lujuría",
      },
      {
        palabra: "Pignorar",
        definicion: "Dar o dejar en prenda como garantía de algo.",
      },
      {
        palabra: "Ablución",
        definicion:
          "Acción de lavar o lavarse. / Purificación por medio del agua que se hace en algunas religiones.",
      },
      {
        palabra: "Bujarra",
        definicion: "Homosexual reprimido de edad avanzada.",
      },
      {
        palabra: "Galvanizar",
        definicion: "Cubrir un metal con una ligera capa de otro.",
      },
      { palabra: "Socaire", definicion: "Abrigo, resguardo, defensa, etc." },
      { palabra: "Aleve", definicion: "Alevoso." },
      {
        palabra: "Aceifa",
        definicion:
          "Expedición estival, sobre todo la llevada a cabo en el norte de la peninsula por los moros.",
      },
      { palabra: "Régulo", definicion: "General romano de origen plebeyo." },
      {
        palabra: "Prelado",
        definicion:
          "El preferido, el puesto delante. / Superior de un convento.",
      },
      { palabra: "Rahez", definicion: "Vil, despreciable." },
      {
        palabra: "Asendereada",
        definicion:
          "Que ha sobrellevado numerosas dificultades. / Que tiene mucha experiencia.",
      },
      { palabra: "Alquería", definicion: "Caserío." },
      {
        palabra: "Consunción",
        definicion: "Deterioro progresivo o extinción de algo.",
      },
      {
        palabra: "Semítico",
        definicion:
          "Relativo a los pueblos que se establecieron en Próximo Oriente antes de la llegada de Cristo y que tenían lenguas en común.",
      },
      {
        palabra: "Piélago",
        definicion:
          "Parte del mar que dista mucho de la tierra. / Balsa, estanque.",
      },
      {
        palabra: "Abencerrajes",
        definicion:
          "Nombre castellanizado con el que se conocía a un linaje nobiliario de origen norteafricano del Reino de Granada.",
      },
      {
        palabra: "Filiación",
        definicion:
          "Relación de parentesco entre padres e hijos. / Conjunto de datos personales de un individuo.",
      },
      { palabra: "Afeite", definicion: "Aderezo, compostura. / Cosmético." },
      { palabra: "Jaculatoria", definicion: "Oración breve y fervorosa." },
      {
        palabra: "Hiñir",
        definicion: "Formar. Heñir, amasar con las manos la masa.",
      },
      { palabra: "Ladino", definicion: "Astuto." },
      {
        palabra: "Casida",
        definicion: "Composición poética culta de la poesía árabe.",
      },
      {
        palabra: "Ritornelo",
        definicion:
          "Sección que se repite dentro de un movimiento de un concierto o de un aria. / Cosa negativa o indeseable que se repite.",
      },
      { palabra: "Churrigueresco", definicion: "Que tiene excesivos adornos." },
      {
        palabra: "Cucaña",
        definicion:
          "Juego: palo largo por el que se ha de trepar en vertical o andar en horizontal para llegar al final y coger el premio.",
      },
      {
        palabra: "Guardarropía",
        definicion:
          "Prendas de vestir y accesorios necesarios para un rodaje. / Lugar donde se guardan estas prendas.",
      },
      {
        palabra: "Pendolista",
        definicion: "Persona que tiene por oficio escribir cartas.",
      },
      {
        palabra: "Pergeñar",
        definicion:
          "Hacer el esbozo o idea previa de un trabajo. / Disponer o ejecutar una cosa con mayor o menor habilidad.",
      },
      {
        palabra: "Terpsícore",
        definicion:
          "Una de las 9 musas de Zeus, se la asocia con la poesía ligera y la música. / En algunas leyendas es la madre de las sirenas.",
      },
      {
        palabra: "Laya",
        definicion: "Calidad, especie, clase. ( Esto es de la misma laya. )",
      },
      {
        palabra: "Refacción",
        definicion:
          "Compostura, reparación. / Pequeña cantidad de alimento que se toma para reponer fuerzas.",
      },
      {
        palabra: "Junípero Serra",
        definicion: "Padre fundador de California (EE.UU.)",
      },
      {
        palabra: "Ortogénesis",
        definicion:
          "Tendencia de un organismo a desarrollar un determinado carácter previamente definido en su evolución.",
      },
      {
        palabra: "Dechado",
        definicion: "Ejemplar, muestra que se tiene presente imitar.",
      },
      {
        palabra: "De facto",
        definicion:
          "De hecho, sin reconocimiento jurídico, por la fuerza de los hechos.",
      },
      {
        palabra: "De iure",
        definicion:
          "De derecho, ( opuesto a 'de facto' )con reconocimiento jurídico, legalmente.",
      },
      {
        palabra: "Precámbrico",
        definicion: "La primera etapa en la historia el planeta.",
      },
      {
        palabra: "Filogenia",
        definicion:
          "Relación de parentesco entre especies o taxones en general.",
      },
      {
        palabra: "Taxón",
        definicion:
          "Del griego ordenamiento. Conjunto de organismos emparentados que en una clasificación han sido agrupados en especies o tipos.",
      },
      {
        palabra: "Prostético",
        definicion: "Protético, pertienecientea a la prótesis.",
      },
      {
        palabra: "Ablución",
        definicion: "Lavatorio ritual del cuerpo con el fin de purifciarlo.",
      },
      {
        palabra: "Lato",
        definicion: "Amplio, extenso ( En el sentido más lato significa... ).",
      },
      { palabra: "Lesivo", definicion: "Que causa lesión o perjucio." },
      {
        palabra: "Bradipsiquia",
        definicion:
          "Síntoma neurológico caracterizado por la lentitud psíquica, mental o del pensamiento.",
      },
      {
        palabra: "Soteriología",
        definicion: "Rama de la teología que estudia la salvación.",
      },
      {
        palabra: "Demon",
        definicion: "Ser intermedio entre inmortales y mortales.",
      },
      { palabra: "Trófico", definicion: "Relativo a la nutrición." },
      {
        palabra: "Bioma",
        definicion:
          "Determinada partes del planeta que comparte clima, flora y fauna.",
      },
      { palabra: "Terápsidos", definicion: "Reptiles mamireifoides." },
      {
        palabra: "Gatuperio",
        definicion:
          "Mezcla de diversas sustancias incoherentes de que resulta un todo desabrido o dañoso.",
      },
      { palabra: "Boquirroto", definicion: "Que habla más de lo debido." },
      {
        palabra: "Disyuntivo",
        definicion: "Que tiene la posibilidad de ofrecer dos o más opciones.",
      },
      { palabra: "Trapisonda", definicion: "Jaleo, riá/ Embrollo." },
      { palabra: "Frigido", definicion: "Que está muy frío." },
      {
        palabra: "Aladar",
        definicion: "Mechón de pelo que cae sobre una de las sienes.",
      },
      {
        palabra: "Glosolalia",
        definicion:
          "Vocalización fluida de sílabas sin significado comprensible alguno.",
      },
      {
        palabra: "Xenoglosia",
        definicion:
          "Fenómeno paranormal que corresponde a la habilidad de poder hablar o escribir un lenguaje no familiar para el individuo.",
      },
      { palabra: "Ab extrinseco", definicion: "Una fuente externa." },
      {
        palabra: "Indumento",
        definicion:
          "Conjunto de prendas de vestir y de adorno que usa una persona.",
      },
      {
        palabra: "Derredor",
        definicion:
          "Espacio que rodea una cosa. / En derredor -> En torno a una cosa o una persona.",
      },
      { palabra: "Emascular", definicion: "Capar." },
      { palabra: "Ex aequo", definicion: "Por igual." },
      {
        palabra: "Finis Operis",
        definicion:
          "El acto de su propia naturaleza, Fin objetivo. Su objetivo intrínseco.",
      },
      {
        palabra: "Finis operantis",
        definicion: "La intención subjetiva de la acción.",
      },
      {
        palabra: "Tétrada",
        definicion: "Conjunto de 4 elementos vinculados entre sí.",
      },
      {
        palabra: "Pleroma",
        definicion:
          "Unidad primordial de donde salen el resto de elementos, la plenitud.",
      },
      {
        palabra: "Idiográfico",
        definicion:
          "Dicho de una ciencia: Que describe hechos particulares o singulares.",
      },
      {
        palabra: "Nomotético",
        definicion:
          "Dicho de una ciencia: Que enuncia leyes de validez universal o principios generales.",
      },
      {
        palabra: "Isótropo",
        definicion:
          "Que tiene la propiedad de transmitir igualmente en todas direcciones cualquier acción recibida en un punto de su masa.",
      },
      {
        palabra: "Neotenia",
        definicion: "Conservación del estado juvenil en el organismo adulto.",
      },
      {
        palabra: "Ontogenia Morfogénesis u ontogénesis",
        definicion:
          "Desarrollo de un organismo desde la fecundación de un cigoto hasta su senescencia.",
      },
      {
        palabra: "Senescencia",
        definicion:
          "Envejecimiento. Cambios irreversible que se da en los elementos de un sistemas por el paso del tiempo, incapaz de mantener el orden o la integridad. Opuesto a evolución.",
      },
      { palabra: "Neblinosa", definicion: "Que tiene mucha neblina." },
      { palabra: "Deíctico", definicion: "Relativo a la deixis." },
      {
        palabra: "Deixis",
        definicion:
          "Señalar algo fuera del discurso o presente sólo en la memoria.",
      },
      {
        palabra: "Estamento",
        definicion:
          "Estrato de una sociedad definido por un estilo de vida análoga función social.",
      },
      { palabra: "Encomienda", definicion: "Encargo o petición." },
      { palabra: "Redivivo", definicion: "Resucitado." },
      {
        palabra: "Cursus honorum",
        definicion:
          "Nombre que recibía la carrera política en la Antigua Roma.",
      },
      {
        palabra: "Digresión",
        definicion:
          "Parte de un discurso, exposición, etc., que no tiene relación directa con el asunto principal.",
      },
      {
        palabra: "Meliorativo",
        definicion:
          "Que mejora, principalmente hablando de conceptos o estimaciones morales.",
      },
      {
        palabra: "Anejo",
        definicion: "Que va unido a otra cosa de la cual depende.",
      },
      { palabra: "Cinegética", definicion: "Arte de la caza." },
      {
        palabra: "Disfemismo",
        definicion:
          "Tipo de sarcasmo que consiste en utilizar expresiones peyorativas o negativas para describir personas, cosas, hechos, etc. Se trata de ridiculizar o degradar lo que se nombra y comporta con frecuencia un tono humorístico",
      },
      {
        palabra: "Bilocación",
        definicion:
          "Presencia sobrenatural de una persona en dos lugares a la vez.",
      },
      { palabra: "Astrictivo", definicion: "Astringente." },
      {
        palabra: "Astringente",
        definicion:
          "Sustancia o alimento que produce desecación y contracción de los tejidos del vientre y dificulta la evacuación de los excrementos.",
      },
      {
        palabra: "Colodras",
        definicion: "Vasija de madera, vaso, cuerna (vaso de cuerno).",
      },
      {
        palabra: "Correlato",
        definicion: "Término que corresponde a otro en una correlación.",
      },
      { palabra: "Perpetuum mobile", definicion: "Movimiento perpetuo." },
      {
        palabra: "Anamorfosis",
        definicion:
          "Dibujo o pintura deformada de tal modo que se recupera su imagen sin deformaciones al mirarla desde un ángulo o a través de un espejo cilíndrico o cónico.",
      },
      {
        palabra: "Antroponimia",
        definicion:
          "Estudio del origen y la significación de los nombres propios de personas.",
      },
      {
        palabra: "In media res",
        definicion:
          "Hacia la mitad de las cosas. Es una técnica literaria donde la narración comienza a mitad de la historia.",
      },
      {
        palabra: "Dispepsia",
        definicion:
          "Trastorno de la digestion con sintomas como náuseas, pesadez, dolor de estómago, ardor o flatulencias.",
      },
      {
        palabra: "Pedomorfosis",
        definicion:
          "El individuo adulto de una especie mantiene ciertas características juveniles.",
      },
      {
        palabra: "Coram populo",
        definicion:
          "Latín: literalmente delante del pueblo. (Públicamente, a la vista de todos).",
      },
      {
        palabra: "Bandería",
        definicion: "Grupo de gente armada, capitaneada por una persona.",
      },
      {
        palabra: "Sésil",
        definicion: "Dicho de un órgano u organismo sujeto al sustrato.",
      },
      { palabra: "Subrepticio", definicion: "Que se hace de manera oculta." },
      {
        palabra: "Alopatía",
        definicion:
          "Medicina alópata o alopatia es como se designa a la medicina occidental.",
      },
      {
        palabra: "Teratogénsis",
        definicion:
          "Terato = 'del griego monstruo' Defecto congénito durante la gestación del feto.",
      },
      { palabra: "Dismorfogénsis", definicion: "Teratogénsis" },
      {
        palabra: "Focomelia",
        definicion:
          "Enfermedad que se manifiesta por una malformación de origen teratogénico.",
      },
      {
        palabra: "Proctología",
        definicion:
          "Parte de la medicina que trata las enfermedades del segmento terminal del tubo digestivo (recto y ano).",
      },
      { palabra: "Angor Pectoris", definicion: "Angina de pecho." },
      { palabra: "Parterre", definicion: "Diseño de jardín formal." },
      {
        palabra: "Neuma",
        definicion:
          "Figura retórica que consiste en declarar lo que se siente o quiere mediante el uso de señas o movimientos. (Mover la cabeca horizontalmente para negar, inclinar la cabeza para conceder.)",
      },
      {
        palabra: "Melisma",
        definicion:
          "Grupo de notas sucesivas que se cantan en una sola sílaba.",
      },
      {
        palabra: "Devanar",
        definicion:
          "Enrollar un hilo, un alambre o algo semejante alrededor de un eje.",
      },
      { palabra: "Irenismo", definicion: "Pacifismo." },
      {
        palabra: "Revisionismo",
        definicion:
          "Tendencia a someter a revisión metódica doctrinas, interpretaciones o prácticas establecidas con la intención de actualizarlas.",
      },
      {
        palabra: "Prótasis",
        definicion:
          "Parte de una oración condicional que va introducida por la conjunción si. 'Si vas al mercado, compra verduras. Si vas al mercado es la prótasis'",
      },
      {
        palabra: "Morfogénetico",
        definicion: "Factores que intervinen en la generación de la forma.",
      },
      {
        palabra: "Morfodinámico",
        definicion: "Factores que generan la actividad moldeadora.",
      },
      {
        palabra: "Sinergia",
        definicion:
          "Acción conjunta de varios órganos en la realización de una función.",
      },
      { palabra: "Cognoscente", definicion: "Que es capaz de conocer." },
      { palabra: "Cognición", definicion: "Conocimiento." },
      {
        palabra: "Cainismo",
        definicion:
          "Actitud revanchista contra los propios compañeros, amigos, compatriotas, etc.",
      },
      {
        palabra: "Estipendio",
        definicion:
          "Cantidad de dinero que se paga por un trabajo o unos servicios.",
      },
      { palabra: "Rusticidad", definicion: "Cualidad de rústico." },
      { palabra: "Rústico", definicion: "Del campo. / Tosco, grosero." },
      {
        palabra: "Émulo",
        definicion:
          "Competidor o imitador de alguien o de algo, procurando excederlo o aventajarlo.",
      },
      {
        palabra: "Serendipia",
        definicion:
          "Hallazgo afortunado e inesperado que se produce cuando se está buscando otra cosa.",
      },
      {
        palabra: "Euritmia",
        definicion:
          "Combinación armónica de proporciones, líneas, colores o sonidos.",
      },
      {
        palabra: "Errabundo",
        definicion: "Que va de un lado para otro sin tener asiento fijo.",
      },
      {
        palabra: "Onomástica",
        definicion: "Rama de la lexicografía que estudia los nombres propios.",
      },
      {
        palabra: "Traccionar",
        definicion: "Tirar de algo para moverlo o arrastrarlo.",
      },
      {
        palabra: "Mascarada",
        definicion:
          "Fiesta o diversión donde los participantes llevan máscaras.",
      },
      {
        palabra: "Movimiento Sacádico",
        definicion:
          "Es un movimiento rápido del ojo, cabeza u otra parte del cuerpo de un animal o dispositivo.",
      },
      {
        palabra: "Perceptual",
        definicion: "De la percepción o relacionado con él.",
      },
      { palabra: "Constricción", definicion: "Acción y efecto de constreñir." },
      {
        palabra: "Constreñir",
        definicion:
          "Obligar por la fuerza, oprimir, reducir, limitar. / Apretar o cerrar oprimiendo.",
      },
      {
        palabra: "Moiras",
        definicion: "Divinidades del destino encargadas de su cumplimiento.",
      },
      {
        palabra: "Hilvanar",
        definicion: "Hacer algo de manera esquemática y provisional.",
      },
      {
        palabra: "Amanuense",
        definicion:
          "Persona que tiene como oficio escribir a mano, copiando o escribiendo lo que se dicta.",
      },
      {
        palabra: "Desopilante",
        definicion: "Festivo, divertido, que provoca mucha risa.",
      },
      {
        palabra: "Cognado",
        definicion:
          "En derecho romano, persona unida a otras por lazos de parentesco natural, especialemente pariente por descendencia femenina.",
      },
      {
        palabra: "Conventículo",
        definicion:
          "Reunión pequeña, extraoficial y religiosa clandestina de laicos.",
      },
      {
        palabra: "Secularización",
        definicion:
          "El paso de algo o alguien de una esfera religiosa a una civil y no teológica.",
      },
      {
        palabra: "Sinonimia",
        definicion:
          "Relación de igualdad que hay entre el significado de dos o más palabras o enunciados. 'las definiciones del diccionario buscan la sinonimia con las palabras definidas'",
      },
      {
        palabra: "Paronimio",
        definicion:
          "Palabra que se parece a otra en su pronunciación o en su forma.'‘acechar’ y ‘asechar’ son palabras parónimas'",
      },
      { palabra: "Pax apparens", definicion: "Sólo aparente." },
      {
        palabra: "Noluntad",
        definicion: "Voluntad de no hacer. / Acto de no querer.",
      },
      {
        palabra: "Sentina",
        definicion: "Lugar lleno de inmundicia, suciedad y mal olor.",
      },
      {
        palabra: "Estertor",
        definicion:
          "Respiración anhelosa, con ronquido sibilante, propio de la agonía y el coma. / Ruido que produce el paso del aire por las vías respiratorias obstruidas por mucosidades.",
      },
      {
        palabra: "Conmilitón",
        definicion: "Soldado compañero de otro en la guerra.",
      },
      { palabra: "Nemesis", definicion: "Castigo o venganza." },
      {
        palabra: "Asertórico",
        definicion:
          "Aquel juicio o proposición que no necesariamente es verdadero y que puede caer en una contradicción. Que puede ser falso.",
      },
      {
        palabra: "Transido",
        definicion:
          "Fatigado, acongojado o consumido de alguna penalidad, angustia o necesidad. / Miserable, escaso y ridículo en el modo de portarse y gastar.",
      },
      {
        palabra: "Advenedizo",
        definicion:
          "Persona que se ha introducido en una posición, ambiente o actividad que no le corresponde.",
      },
      {
        palabra: "Abrogación",
        definicion:
          "Anulación o modificación de una ley. Abolición. Abolición.",
      },
      {
        palabra: "Quintaesencia Quinta esencia",
        definicion: "Extracto más depurado o concentrado de algo.",
      },
      {
        palabra: "Deux ex machina",
        definicion:
          "Latín: Dios en la máquina, Actualmente es utilizada para referirse a un elemento externo que resuelve una historia sin seguir su lógica interna.",
      },
      {
        palabra: "Efecto Pneumónido",
        definicion:
          "Los pneumónidos son esas larvas de insecto, generalmente avispas, que se alimentan del cuerpo que parasitan hasta que lo matan.",
      },
      {
        palabra: "Agro",
        definicion: "De sabro ácido. / Campo, tierra de labranza.",
      },
      { palabra: "More suo", definicion: "Latín: Costumbre." },
      {
        palabra: "Nomina numina",
        definicion:
          "Latín: Divinización de ciertas palabras, nombres o expresiones a las que se otorga un valor numinoso y completamente resistente a la crítica. Ej: 'Democracia'.",
      },
      {
        palabra: "Precopernicano",
        definicion:
          "Sistema anterior a la teoría copernicana. Creencia que todo gira alrededor nuestro.",
      },
      { palabra: "Marrar", definicion: "Errar. / Desviarse de lo recto." },
      {
        palabra: "Guardia Pretoriana",
        definicion:
          "La Guardia Pretoriana era un cuerpo militar que servía de escolta y protección a los emperadores romanos",
      },
      {
        palabra: "Esclerótico",
        definicion:
          "Que no puede evolucionar o adaptarse a una nueva situacion o planteamiento.",
      },
      { palabra: "Batracio", definicion: "Anfibio." },
      {
        palabra: "Dogmatomaquia",
        definicion: "Oposición a posturas dogmáticas.",
      },
      { palabra: "Mitomaníaco", definicion: "Afición exagerada al mito." },
      { palabra: "Refocilar", definicion: "Regodearse o recrearse." },
      {
        palabra: "Supererogación",
        definicion:
          "Acción ejecutada además de la obligación. Los actos supererogatorios son aquellos que superan el deber.",
      },
      {
        palabra: "Carpetovetónico",
        definicion:
          "Persona, costumbre o idea que se tiene por española a ultranza o se definede como tal y sirve de bandera ante cualquier influjo externo.",
      },
      {
        palabra: "Terna",
        definicion:
          "Conjunto de tres personas propuestas para que se designe de entre ellas la que haya de desempeñar un cargo o empleo. / Trío.",
      },
      {
        palabra: "Organoléptico",
        definicion:
          "Que produce una impresión sensorial. / Propiedad de un cuerpo que se percibe con lo sentidos (olor, sabro, brillo, etc.) a diferencia de las propiedades químicas o microscópicas.",
      },
      {
        palabra: "Retrospectivo",
        definicion: "Que hace referencia a un tiempo pasado.",
      },
      {
        palabra: "Heteróclito",
        definicion:
          "Que destaca por lo extraño de sus características, que se sale de lo habitual.",
      },
      {
        palabra: "Atrabiliario",
        definicion:
          "Que tiene mal carácter y se irrita con facilidad. / Que es raro o extravagante.",
      },
      {
        palabra: "Adventicio",
        definicion:
          "Que tiene mal carácter y se irrita con facilidad. / Que es raro o extravagante.",
      },
      {
        palabra: "Greguescos",
        definicion:
          "Calazones bombachos muy anchos que cubrían hasta debajo de la rodilla.",
      },
      { palabra: "Enrigidecer", definicion: "Poner rígido algo." },
      { palabra: "Agro-", definicion: "Campo: Agropecuario, agroquímica." },
      {
        palabra: "Prevaricar",
        definicion:
          "Faltar conscientemente [un funcionario] a los deberes de su cargo al tomar una decisión o dictar una resolución injusta, con plena conciencia de su injusticia.",
      },
      { palabra: "De hinojos", definicion: "De rodillas." },
      {
        palabra: "Inconmensurable",
        definicion: "Que es muy difícil o imposible de medir o valorar.",
      },
      {
        palabra: "Hábeas corpus",
        definicion:
          "Procedimiento jurídico mediante el cual cualquier ciudadano puede comparecer inmediatamente ante el juez para que este determine sobre la legalidad del arresto.",
      },
      {
        palabra: "Filípica",
        definicion:
          "Reprensión, censura dura que se dirige a alguien: le echaron una filípica por llegar tarde.",
      },
      {
        palabra: "Invectiva",
        definicion: "Discurso o escrito acre y violento contra alguien.",
      },
      {
        palabra: "Atribulado",
        definicion:
          "Triste, compungido, apenado, afligido, desolado, consternado, dolorido, acongojado, inconsolable.",
      },
      {
        palabra: "Nihil novum sub sole",
        definicion: "Latín: Nada nuevo bajo el sol.",
      },
      {
        palabra: "Panislamismo",
        definicion:
          "Movimiento religioso y político que intenta unir a todos los pueblos musulmanes bajo una única autoridad.",
      },
      { palabra: "Jaranero", definicion: "Persona muy dado a las jaranas." },
      {
        palabra: "Virtualidad",
        definicion: "Posibilidad, eficacia, capacidad, poder.",
      },
      {
        palabra: "Virtual",
        definicion: "Que tiene virtud para producir un efecto.",
      },
      {
        palabra: "Loor",
        definicion: "Alabanza generalmente pública: En loor de multitudes.",
      },
      {
        palabra: "Insipiente",
        definicion: "Falto de sabiduría o ciencia. / Falto de juicio.",
      },
      {
        palabra: "Insipiencia",
        definicion: "Falta de sabiduría o ciencia. / Falta de juicio.",
      },
      {
        palabra: "Alógeno",
        definicion:
          "Dicho de una persona: Extranjera o de otra raza, en oposición a los naturales de un país.",
      },
      {
        palabra: "Devengar",
        definicion: "Adquirir derecho a recibir un pago.",
      },
      { palabra: "Micosis", definicion: "Infección cutánea de hongos" },
      { palabra: "Convergir", definicion: "Unir en un punto." },
      {
        palabra: "Polarizar",
        definicion: "Concentrar varios puntos de luz en un punto.",
      },
      { palabra: "Homologar", definicion: "Equiparar." },
      {
        palabra: "Ecualizar",
        definicion: "Ajustar dentro de determinados valores.",
      },
      {
        palabra: "Pansío",
        definicion: "Cuando algo está seco, pasado o fofo.",
      },
      {
        palabra: "Exudar",
        definicion: "Salir un líquido de un cuerpo o del recipiente.",
      },
      { palabra: "Criptogenético", definicion: "De origen desconocido." },
      {
        palabra: "Flema",
        definicion: "Temperamiento apático o calma excesiva.",
      },
      {
        palabra: "Escatología",
        definicion:
          "Parte de la teología que estudia el destino último del ser humano y el universo.",
      },
      {
        palabra: "Emancipar",
        definicion:
          "Liberar a alguien de un poder o cualquier tipo de subordinación o dependencia.",
      },
      {
        palabra: "Hagiografía",
        definicion:
          "Liberar a alguien de un poder o cualquier tipo de subordinación o dependencia.",
      },
      { palabra: "Limes", definicion: "Latín: Límites." },
      { palabra: "Sensu stricto", definicion: "Latín: En sentido estricto." },
      {
        palabra: "Razia, Razzia",
        definicion: "Incursión en territorio enemigo para saquear o destruir.",
      },
      {
        palabra: "Concitar",
        definicion:
          "Promover sentimientos o actitudes hacia sí misma o hacia otros.",
      },
      {
        palabra: "Venustidad",
        definicion: "Hermosura perfecta y muy agraciada.",
      },
      {
        palabra: "Arrobo",
        definicion:
          "Estado de la persona que siente un placer, una admiración o una alegría tan intensos que no puede pensar ni sentir nada más. (éxtasis, arrobamiento)",
      },
      { palabra: "Pendencia", definicion: "Pelea, riña." },
      {
        palabra: "Motejar",
        definicion:
          "Aplicar a alguien o algo un apelativo o un calificativo despectivo o reprobatorio. (mote)",
      },
      {
        palabra: "Exogamia",
        definicion:
          "Sistema que prohibe la relación marital entre miembros de un mismo grupo. Antónimo de Endogamia.",
      },
      {
        palabra: "Excusatio non petita, accusatio manifesta",
        definicion:
          "Latín: excusa no pedida, acusación manifiesta. Quiere decir que si te exculpas de una acusación que no se te ha hecho ya te estás señalando como autor de la falta.",
      },
      {
        palabra: "Impugnar",
        definicion:
          "Solicitar la nulidad de una decisión. / Rechazar la validez de una idea o afirmación de otra persona mediante razones y argumentos.",
      },
      {
        palabra: "Asebeia",
        definicion:
          "Impiedad, entendida en sentido amplio como irreligiosidad.",
      },
      {
        palabra: "Determinismo",
        definicion:
          "Corriente filosófica según la cual todo fenómeno está prefijado de una manera necesaria por las circunstancias o condiciones en que se producen.",
      },
      {
        palabra: "Hiper-",
        definicion: "Significa 'exceso' o 'grado superior al normal'.",
      },
      {
        palabra: "Dioscúrico",
        definicion:
          "Que implica una relación en la que para que uno brille el otro se apaga. Nietzsche, El nacimiento de la tragedia.",
      },
      {
        palabra: "Sine ira et studio",
        definicion: "Latín: Sin ira y con pasión.",
      },
      {
        palabra: "Sottovoce",
        definicion: "Adverbio italiano que significa 'en voz baja'.",
      },
      { palabra: "Eo ipso", definicion: "Latín: Por sí mismo." },
      { palabra: "Asunción", definicion: "Acción y efecto de asumir." },
      { palabra: "Vitando", definicion: "Odisoso, execrable o abominable." },
      {
        palabra: "Agorafobia",
        definicion:
          "Temor obsesivo ante los espacios abiertos o descubiertos que puede constituir una enfermedad.",
      },
      {
        palabra: "Particularismo",
        definicion:
          "Preferencia que se le da a lo particular sobre lo general.",
      },
      { palabra: "Unicidad", definicion: "Cualidad de único." },
      { palabra: "Canoro", definicion: "Canto agradable y melodioso." },
      {
        palabra: "Regalía",
        definicion:
          "Preeminencia, prerrogativa o excepción particular y privativa que en virtud de suprema potestad ejerce un soberano en su reino o Estado. / Privilegio o excepción privativa o particular que alguien tiene en cualquier línea.",
      },
      {
        palabra: "Trasegar",
        definicion:
          "Pasar un líquido de un recipiente a otro. / Tomar una bebida en exceso.",
      },
      { palabra: "Heresiologo", definicion: "El que combate las herejías." },
      { palabra: "Remanente", definicion: "Que queda o se reserva para algo." },
      {
        palabra: "Inerrancia",
        definicion: "Cualidad de estar exento de error.",
      },
      {
        palabra: "Ideocracia",
        definicion:
          "Sistema de gobierno o de organización política y social basado en una ideología monística. Se presenta como un sistema absoluto, universal y supremo para la comprensión de la vida social",
      },
      { palabra: "-maquia", definicion: "Lucha, combate, batalla." },
      {
        palabra: "Aculturación",
        definicion:
          "Proceso de recepción de otra cultura y de adaptación a ella, en especial con pérdida de la cultura propia.",
      },
      {
        palabra: "Deculturación",
        definicion:
          "Proceso de pérdida de la cultura propia para adaptarse a otra.",
      },
      {
        palabra: "Cubil",
        definicion:
          "Lugar cubierto que sirve a las fieras y otros animales salvajes para refugiarse habitualmente y tener sus crías.",
      },
      {
        palabra: "Alteridad",
        definicion: "Condición o capacidad de ser otro.",
      },
      { palabra: "Diagnosis", definicion: "Diagnóstico." },
      { palabra: "Hijra", definicion: "Eunuco hindú." },
      {
        palabra: "Discrasia",
        definicion:
          "Fase final de algunas enfermedades caracterizada por desnutrición, deterioro orgánico y debilitamiento físico.",
      },
      { palabra: "Caquexia", definicion: "Discrasia, cacoquimia." },
      { palabra: "Cacoquimia", definicion: "Discrasia, caquexia." },
      { palabra: "Apoltronarse", definicion: "Sentarse con comodidad." },
      { palabra: "Trasunto", definicion: "Fiel reflejo de algo." },
      { palabra: "Ad vitam aeternam", definicion: "Por la vida eterna." },
      {
        palabra: "Uxoricidio",
        definicion: "Asesinato de una mujer a manos de su marido.",
      },
      {
        palabra: "Añagaza",
        definicion: "Astucia, medio para engañar, artimaña, ardid.",
      },
      {
        palabra: "Ad nauseam",
        definicion:
          "Latín: Falacia que se repite para hacerse verdadera. (hasta la náusea)",
      },
      {
        palabra: "Clitoridectomía",
        definicion: "Amputación del prepucio del clíctoris.",
      },
      {
        palabra: "Hipo-",
        definicion:
          "Significa 'debajo de' o 'ecasez de' (Hipotensión, hipogatrio)",
      },
      { palabra: "Inasible", definicion: "Que no se puede asir." },
      {
        palabra: "Onírico",
        definicion: "Relacionado con el sueño o las imágenes que éste produce.",
      },
      {
        palabra: "Sextante",
        definicion: "Intrumento de medición que sirve para guiarte.",
      },
      {
        palabra: "Factótum",
        definicion:
          "Persona que desempeña todas las funciones de la casa, la empresa o el negocio.",
      },
      {
        palabra: "Sine díe",
        definicion: "Latín: 'Sin plazo o fecha determinados'.",
      },
      { palabra: "Facineroso", definicion: "Delincuente habitual." },
      {
        palabra: "Mentoría",
        definicion:
          "Relación con una persona de mayor experiencia o conocimiento.",
      },
      {
        palabra: "Epatante",
        definicion: "Que pretnede causar o causa asombro o admiración",
      },
      { palabra: "Punible", definicion: "Que merece castigo." },
      {
        palabra: "Ectoparásitos",
        definicion:
          "Organismo que vive en el exterior de otro (pulgas, piojos, garrapatas)",
      },
      { palabra: "Ítem", definicion: "También." },
      { palabra: "Ítem más", definicion: "Además." },
      {
        palabra: "Estafermo",
        definicion:
          "Muñeco giratorio usado en los torneos medievales. Persona que está parada y como embobada y sin acción.",
      },
      {
        palabra: "Prestancia",
        definicion: "Elegancia./ Excelencia o superioridad.",
      },
      {
        palabra: "Recidivante",
        definicion:
          "Enfermedad o trastorno que tiende a reaparecer después de un periodo de curación.",
      },
      {
        palabra: "Autonepiofilia",
        definicion:
          "Infantilismo parafílico caraceterizado por el deseo de llevar pañales y ropa de bebé.",
      },
      {
        palabra: "Compartimentar",
        definicion:
          "Proyectar o efectuar la subdivisión interna de una parte ya acotada.",
      },
      {
        palabra: "Nubil",
        definicion:
          "Persona que está en edad de casarse, especialmente se aplica a la mujer.",
      },
      {
        palabra: "Adminículo",
        definicion:
          "Cosa pequeña y simple que se emplea como ayuda para algo. (lupa, navaja, calculadora, etc.)",
      },
      {
        palabra: "Compeler",
        definicion:
          "Obligar a una persona por la fuerza o por el poder de la autoridad a que haga una cosa contra su voluntad.",
      },
      {
        palabra: "Coactivo",
        definicion:
          "Que tiene fuerza de apremiar u obigar, o que implica o denota coacción.",
      },
      { palabra: "Denotar", definicion: "Señalar, representar." },
      {
        palabra: "Trasngredir",
        definicion: "Actuar en contra de una ley, norma, pacto o costumbre.",
      },
      { palabra: "Vis", definicion: "Fuerza, capacidad." },
      {
        palabra: "Boyante",
        definicion:
          "Que se encuentra en una situación favorable, próspera o de felicidad.",
      },
      {
        palabra: "Exvoto",
        definicion: "Ofrenda que los gentiles hacían a sus dioses.",
      },
      { palabra: "Gentiles", definicion: "Paganos" },
      {
        palabra: "Paganos",
        definicion:
          "Habitante del campo o rústico. En las costumbres cristianas aquellos que adoraban a dioses y rechazaban la creencia de un Dios único.",
      },
      {
        palabra: "Eximente",
        definicion: "Que exime de una carga u obligación.",
      },
      {
        palabra: "Adamismo",
        definicion:
          "Doctrina herética surgida en el siglo II en el norte de África y que pretendía, mediante la práctica del nudismo, retorna a la inocencia originarioa del Edén descrita en el Génesis.",
      },
      {
        palabra: "Hipoacusia",
        definicion: "Disminución de la capacidad auditiva.",
      },
      {
        palabra: "Hiperacusia",
        definicion: "Aumento de la capacidad auditiva.",
      },
      {
        palabra: "Disfonía",
        definicion: "Trastorno en la fonación de la voz.",
      },
      { palabra: "Afonía", definicion: "Pérdida de la voz." },
      {
        palabra: "Fonación",
        definicion:
          "Proceso por el cual se produce la voz humana o se pronuncian las palabras.",
      },
      {
        palabra: "Espejar",
        definicion:
          "Despejar. / Limpiar, pulir, lustrar. / Reflejarse. / Tener mucho amor por alguien y complacerse en sus gracias o en sus acciones.",
      },
      {
        palabra: "Badajo",
        definicion:
          "Pene. / Persona habladora tonta y necia. / Pieza metálica que pende en el interior de las campanas y la hace sonar.",
      },
      { palabra: "Letífero", definicion: "Que produce olvido." },
      { palabra: "Peri-", definicion: "Significa 'alrededor de...'" },
      {
        palabra: "Arrebol",
        definicion:
          "Color rojizo. / Color rojo de las nubes iluminadas por los rayos del sol.",
      },
      { palabra: "Fragrante", definicion: "Que despide buen olor." },
      {
        palabra: "Flagrante",
        definicion:
          "Que ocurre y se realia en el momento presente. / Claro, evidente.",
      },
      {
        palabra: "Odorífero",
        definicion:
          "Aromático. / Que despide olor, especialmente si es agradable.",
      },
      {
        palabra: "Acedía",
        definicion:
          "Sensación de ardor en el estómago o en la garganta por exceso de un ácido en el estómago.",
      },
      {
        palabra: "Femenil",
        definicion: "De la mujer o que tiene relación con ella.",
      },
      {
        palabra: "Ahíto",
        definicion:
          "Que está lleno o saciado., especialmente de comida. / Que está cansado o molesto.",
      },
      {
        palabra: "Leporino / Lebruno",
        definicion: "De la liebre o relacionado con ella.",
      },
      { palabra: "Brollar", definicion: "Bobotear." },
      { palabra: "Embeleco", definicion: "Dolo." },
      {
        palabra: "Embelecar",
        definicion: "Engañar con artificios y falsas apariencias.",
      },
      {
        palabra: "Amartelamiento",
        definicion:
          "Manifestación profunda y excesiva del sentimiento amoroso.",
      },
      { palabra: "Inficionar", definicion: "Infectar, corromper o envenenar." },
      {
        palabra: "Tropología",
        definicion: "Mezcla de moralidad y droctrina en el discurso.",
      },
      { palabra: "Demérito", definicion: "Falta de mérito." },
      {
        palabra: "Circunstante",
        definicion:
          "Que está alrededor. / Dicho de una persona que está presente.",
      },
      { palabra: "Faltriquera / Faldriquera", definicion: "Bolsillo." },
      { palabra: "Vianda", definicion: "Comida." },
      { palabra: "Nihil", definicion: "Latín: Nada." },
      { palabra: "Vulpeja", definicion: "Zorra." },
      { palabra: "Ferino", definicion: "Pertenciente a la fiera." },
      {
        palabra: "Cejar",
        definicion:
          "Aflojar o ceder en un empeño. / Retroceder hacia atrás, especialmente las caballerías que tiran de un carruaje.",
      },
      {
        palabra: "Basquiña",
        definicion: "De vasco. Falda larga hasta los pies.",
      },
      { palabra: "Empellón", definicion: "Empujón." },
      {
        palabra: "Bonetada",
        definicion: "Cortesía que se hacía quitándose el bonete o el sombrero.",
      },
      { palabra: "Desorejada", definicion: "Mujer vil y ruin." },
      { palabra: "Ministra", definicion: "Administrar, sumisnistrar." },
      {
        palabra: "Librea",
        definicion:
          "Aspecto característico del pelaje, el plumaje o la piel de los animales.",
      },
      {
        palabra: "Acromegalia",
        definicion:
          "Enfermedad crónica que se caracteriza por un aumento de tamaño de las manos, de los pies, de las mandíbulas y de la nariz.",
      },
      { palabra: "Áspides", definicion: "Víbora." },
      { palabra: "Inmoble", definicion: "Inmóvil, estático, quieto." },
      {
        palabra: "Deliquio",
        definicion:
          "Pérdida o decaimiento del ánimo, el valor o las fuerzas. / Estado de una persona que siente un placer, una adminración o una alegría tan intensos que no puede pensar ni sentir nada más.",
      },
      { palabra: "Recamado", definicion: "Que está hecho en relieve." },
      {
        palabra: "Sazón",
        definicion:
          "Estado de la tierra adecuado para plantar y cultivar. / Punto de madurez o perfección al que llega una cosa en su desarrollo o evolución.",
      },
      { palabra: "A la sazón", definicion: "En aquel momento, entonces." },
      {
        palabra: "Desabrimiento",
        definicion:
          "Falta de sazón ( madurez ). / Aspereza o brusquedad con que trata una persona a otra.",
      },
      { palabra: "Embrecado", definicion: "Empecinado, obstinado." },
      { palabra: "Refutar", definicion: "Rechazar, impuganar, rebatir." },
      {
        palabra: "Mirlarse",
        definicion: "Entornarse afectando gravedad y señorío en el rostro.",
      },
      {
        palabra: "Malsinar",
        definicion: "Acusar. / Hablar mal de algo con dañina intención.",
      },
      { palabra: "Borra", definicion: "Parte más grosera de la lana." },
      { palabra: "Adamado", definicion: "Afeminado / Fino, elegante." },
      { palabra: "Aseriarse", definicion: "Ponerse serio." },
      { palabra: "Albañar", definicion: "Albañal." },
      {
        palabra: "Albañal",
        definicion:
          "Depósito de inmundicias. / Canal o conducto que da salida a las aguas residuales.",
      },
      { palabra: "Jimio", definicion: "Mono. (simio)" },
      {
        palabra: "Chanza",
        definicion:
          "Dicho festivo y gracioso. / Hecho burlesco para recrear el ánimo o ejercitar el ingenio.",
      },
      {
        palabra: "Hazañería",
        definicion:
          "Demostración o expresión afectada con que alguien da a entender que teme, se admira o se siente entusiasmo, no teniendo motivo para ello.",
      },
      {
        palabra: "Alambicar",
        definicion:
          "Sutilizar o complicar excesivamente el lenguaje, el estilo, los conceptos, etc.",
      },
      {
        palabra: "Proselitismo",
        definicion:
          "Empeño o afán con que una persona o una institución tratan de convencer o ganar seguidores o partidarios para una causa o una doctrina.",
      },
      { palabra: "Modorro", definicion: "Que tiene modorra o somnolencia." },
      {
        palabra: "Bezoar, Bezar, Bezaar",
        definicion:
          "Concreción calculcosa que suele encontrarse en las vías digestivas y en las urinarias de algunos mamíferos, y a la que se les atribuyen cualidades curativas.",
      },
      {
        palabra: "Feriar",
        definicion:
          "Comprar en la feria. / Vender, comprar o permutar algo por otra cosa.",
      },
      {
        palabra: "Anacoreta",
        definicion:
          "Religioso que vive solo en un lugar apartado, dedicado enteramente a la contemplación, la oración y la penitencia.",
      },
      { palabra: "Ceñar", definicion: "Guiñar, hacer señas." },
      {
        palabra: "Brujulear",
        definicion:
          "Descubrir por indicios y conjeturas algún suceso. / Buscar por varios caminos el logro de una pretensión. / Andar sin rumbo fijo. / Hacer negocios turbios.",
      },
      {
        palabra: "Meridiano",
        definicion: "Perteneciente al mediodía. / Clarísimo, luminosísimo.",
      },
      { palabra: "Circunstante", definicion: "Presente." },
      { palabra: "Delecto", definicion: "Orden, elección, discernimiento." },
      { palabra: "Bisoño", definicion: "Que es nuevo o inexperto." },
      {
        palabra: "Pretina",
        definicion:
          "Correa o cinta con hebilla o broche para poder sujetar en la cintura ciertas prendas.",
      },
      { palabra: "Acrimonia", definicion: "Acritud, rudeza, acre" },
      { palabra: "Rebutir", definicion: "Embutir." },
      { palabra: "Rebutir", definicion: "Embutir." },
      {
        palabra: "Acezar",
        definicion:
          "Jadear, Respirar anhelosamente por efecto del cansancio, el calor, etc.",
      },
      {
        palabra: "Poliantea",
        definicion:
          "Colección o agregado de noticias en materias diferentes y de distinta clase.",
      },
      {
        palabra: "Filaucía",
        definicion:
          "Egocentrismo, egoísmo, Amor que se tiene una pesona a sí misma.",
      },
      { palabra: "Premática", definicion: "Pragmática." },
      {
        palabra: "Regalía",
        definicion: "Excepción que un soberano ejerce en virtud suprema.",
      },
      { palabra: "Áspid", definicion: "Víbora venenosa." },
      {
        palabra: "Fárrago",
        definicion: "Mezcla de cosas desordenadas e inconexas.",
      },
      {
        palabra: "Francachela",
        definicion:
          "Juerga o diversión desmesurada. / Reunión de varias personas para divertirse comiendo o bebiendo, normalmente sin moderación.",
      },
      { palabra: "Trans-", definicion: "Al otro lado / A través de." },
      { palabra: "Flabelífero", definicion: "Persona encargada de abanicar." },
      {
        palabra: "Espolear",
        definicion:
          "Picar con la espuela a la cabalgadura. / Incitar o estimular a alguien a que haga algo.",
      },
      { palabra: "Inmarcesible", definicion: "Inmarchitable." },
      {
        palabra: "Cerval",
        definicion:
          "Dicho del miedo: muy grande y excesivo. /  Dicho del ciervo.",
      },
      {
        palabra: "Proteo",
        definicion: "Hombre que cambia frecuentemente de opiniones y afectos.",
      },
      {
        palabra: "Estigio",
        definicion:
          "De la Estiga, laguna del infierno mitológico o relativo a ella.",
      },
      { palabra: "Alcrebite", definicion: "Azufre." },
      {
        palabra: "Letífero",
        definicion: "Que puede producir u originar la muerte.",
      },
      { palabra: "Atendencia", definicion: "Acción de entender." },
      {
        palabra: "Arbitrio",
        definicion:
          "Decisión personal o capricho en que se basa una forma de actuar, y que no obedece a los principios dictados por la razón, la lógica o las leyes. / Facultad de las personas para resolver o decidir una cosa.",
      },
      { palabra: "Jumento", definicion: "Asno." },
      { palabra: "Donosidad", definicion: "Gracia, chiste, gracejo." },
      {
        palabra: "Dioptra",
        definicion: "Instrumento astronómico y topográfico clásico.",
      },
      {
        palabra: "Concento",
        definicion: "Canto acordado y armonioso de diversas voces.",
      },
      { palabra: "Fido", definicion: "Fiel." },
      {
        palabra: "Adarme",
        definicion:
          "Cantidad mínima o insignificante de una cosa material o inmaterial.",
      },
      { palabra: "Apesgar", definicion: "Ponerse muy pesado." },
      {
        palabra: "Estar en un brete",
        definicion: "Estar en una situación comprometida.",
      },
      {
        palabra: "Componenda",
        definicion: "Estar en una situación comprometida.",
      },
      { palabra: "Córvido", definicion: "Relacionado con los cuervos." },
      {
        palabra: "Ectoplasma",
        definicion:
          "Sustancia blanca y vaporosa que un médium emite por la boca.",
      },
      {
        palabra: "Ajorca",
        definicion:
          "Especie de argolla de oro, plata u otro metal usada por las mujeres para adornar las muñecas, brazos o gargantas de los pies.",
      },
      {
        palabra: "Mondo",
        definicion: "Limpio y libre de cosas añadidas o superfluas.",
      },
      {
        palabra: "Cómitre",
        definicion:
          "Pesona que ejerce su autoridad con excesivo rigor o dureza.",
      },
      {
        palabra: "Muladar",
        definicion:
          "Espacio acondicionado para echar despojos para alimentar a las aves necrófagas como los buitres.",
      },
      {
        palabra: "Cuartana",
        definicion:
          "Calentura, casi siempre de origen palúdico, que entra con frío, de cuatro en cuatro días.",
      },
      {
        palabra: "Millardo",
        definicion:
          "Conjunto formado por 100.000.000 de unidades, equivalente a mil millones.",
      },
      { palabra: "Faraute", definicion: "Heraldo, mensajero." },
      { palabra: "Hacendado", definicion: "Que tiene hacienda o raíces." },
      {
        palabra: "Acendrado",
        definicion:
          "Cualidad o conducta que es pura y no tiene ningún defecto.",
      },
      {
        palabra: "Diarquía",
        definicion:
          "Forma de gobierno en la cual dos personas (diarcas) están al frente del Estado.",
      },
      {
        palabra: "Acecinarse",
        definicion:
          "Quedarse una persona enjuta, especialmente en la vejez. Apergaminarse",
      },
      {
        palabra: "Penacho",
        definicion:
          "Pelaje que sobresale en la parte superior de la cabeza, como en las orejas los linces.",
      },
      {
        palabra: "Bizarro",
        definicion: "Valiente, generoso, lucido, espléndido.",
      },
      { palabra: "Dementar", definicion: "Hacer perder el juicio." },
      {
        palabra: "Atusar",
        definicion:
          "Adornarse o arreglarse una persona, especialemente cuando se hace de forma excesiva.",
      },
      {
        palabra: "Postema",
        definicion: "Persona pesada o molesta. / Apostema.",
      },
      { palabra: "Apostema", definicion: "Absceso supurado." },
      {
        palabra: "Flemático",
        definicion:
          "Persona que tiene un temperamento apático y se comporta o actúa con tranquilidad excesiva.",
      },
      {
        palabra: "Lenitivo",
        definicion: "Cosa o medio que mitiga un padecimiento físico o moral.",
      },
      {
        palabra: "Nepiofilia o infantofilia",
        definicion: "Parafilia, atracción sexual hacia niños de 0 a 5 años.",
      },
      { palabra: "Opósito", definicion: "Defensa, posición, impedimento." },
      {
        palabra: "Redrojo",
        definicion:
          "Muchacho que medra poco. / Cada uno de los racimos pequeños que van dejando atrás los vendimiadores.",
      },
      {
        palabra: "Marchamo",
        definicion:
          "Muchacho que medra poco. / Cada uno de los racimos pequeños que van dejando atrás los vendimiadores.",
      },
      {
        palabra: "Pítima",
        definicion:
          "Trastorno temporal de las capacidades físicas y mentales a causa del consumo excesivo de alcohol.",
      },
      { palabra: "Convoyar", definicion: "Escoltar, acompañar." },
      { palabra: "Librear", definicion: "Adornar, embellecer con galas." },
      {
        palabra: "Mediato",
        definicion:
          "Que en tiempo, lugar o grado está próximo a una cosa, mediando otra entre las dos, como el nieto respecto del abuelo.",
      },
      {
        palabra: "Zahúrda",
        definicion: "Pocilga, cochiquera, pocilga, porqueriza.",
      },
      { palabra: "Amulatado", definicion: "Que parece mulato." },
      {
        palabra: "Viático",
        definicion:
          "Conjunto de provisiones o dinero que se le da a una persona, especialmente a un funcionario, para realizar un viaje. / Extremaunción, sacramento que de la eucaristía que se administra a las personas que están próximas a la muerte.",
      },
      {
        palabra: "Prestatario",
        definicion: "Que toma algo a préstamo, especialmente dinero.",
      },
      { palabra: "Lición", definicion: "Lección." },
      { palabra: "Crasicie", definicion: "Grosura." },
      {
        palabra: "Tundir",
        definicion:
          "Igualar con la tijera el pelo o los paños o telas de lana.",
      },
      { palabra: "Casquilucio/a", definicion: "Alegre de cascos." },
      { palabra: "Corvo", definicion: "Arqueada o combado." },
      {
        palabra: "Amartelar",
        definicion: "Enamorar, acaramelarse o ponerse muy cariñoso.",
      },
      {
        palabra: "Poliandria",
        definicion:
          "Condición de la hembra que vive con varios machos como parejas.",
      },
      {
        palabra: "Poliginandria, Poliginia",
        definicion:
          "Condición del macho que vive con varias hembras como parejas.",
      },
      {
        palabra: "Monoginia",
        definicion: "Condición del macho que vive una hembra como pareja.",
      },
      { palabra: "Monogénesis", definicion: "Un origen." },
      { palabra: "Poligénesis", definicion: "Varios origen." },
      {
        palabra: "Monogenético",
        definicion:
          "Modo de reproducción único, por huevos u ovarios. Generación asexual. Producción de descencencia masculina o femenína solamente.",
      },
      {
        palabra: "Poligamia",
        definicion:
          "Del griego Muchos matrimonios. Varias parejas a lo largo de toda su vida.",
      },
      {
        palabra: "Monogamia",
        definicion: "Una única pareja a lo largo de toda su vida.",
      },
      { palabra: "Animal de bellota", definicion: "Cerdo." },
      {
        palabra: "Sintomático",
        definicion:
          "Que es un indicio de una cosa que está ocurriendo o va a ocurrir. / Relativo al síntoma.",
      },
      {
        palabra: "Esquivo",
        definicion:
          "Que rehuye del trato de la gente y rechaza sus atenciones y muestras de cariño.",
      },
      {
        palabra: "Querencia",
        definicion:
          "Cariño profesado hacia algo o alguien. / Tendencia de hombre y animales a volver al sitio donde se han criado o tienen costumbre acudir.",
      },
      {
        palabra: "Intersticio",
        definicion:
          "Intervalo (espacio o tiempo entre dos espacios o dos lugares). / Hendidura o espacio, por lo común pequeño, que media entre dos cuerpos o entre dos partes de un mismo cuerpo.",
      },
      {
        palabra: "Diglosia",
        definicion:
          "Bilingïsmo. / Anat. disposición de la lengua en forma doble o bífida.",
      },
      { palabra: "Bífida", definicion: "Que se bifurca." },
      {
        palabra: "Manguta",
        definicion: "En galicia: Hombre muy grande como un armario.",
      },
      { palabra: "Endiquelar", definicion: "En gaditano: Ver., " },
      {
        palabra: "Erial",
        definicion:
          "Lugar o cosa que no tiene nada que se pueda aprovechar. / Terreno que no se cultiva ni se labra especialmente cuando se abandona.",
      },
      {
        palabra: "Pacta Sunt Servanda",
        definicion: "Locución latina: Lo pactado obliga.",
      },
      { palabra: "Salutación", definicion: "Acción y efecto de saludar." },
      {
        palabra: "Anagrama",
        definicion:
          "Alteración del reordenación de las letras de una palabra. Ej: 'Onidi = Indio'",
      },
      { palabra: "Mendacidad", definicion: "Hábito o costrumbre de mentir." },
      {
        palabra: "Prontuario",
        definicion:
          "Resumen o anotación de cosas para tenerlas presentes. / Compendio de las reglas de una ciencia o un arte.",
      },
      {
        palabra: "Urticante",
        definicion:
          "Que provoca picor o escozor semejante al que causa la ortiga.",
      },
      { palabra: "Res nata", definicion: "Cosa nacida." },
      {
        palabra: "Magnicidio",
        definicion: "Muerte violenta dada a persona muy importante.",
      },
      {
        palabra: "Avant la lettre",
        definicion:
          "Francés: Anticipadamente, Que está avanzado a su tiempo, precursor.",
      },
      {
        palabra: "Bonancible",
        definicion: "Que es tranquilo, sereno y suave.",
      },
      { palabra: "Ayes", definicion: "Quejas, muchos ay!" },
      {
        palabra: "Neonatología",
        definicion:
          "Rama de la pediatría dedicada al diagnóstico y tratamiento de las enfermedades en los seres humanos los primeros 28 días de vida.",
      },
      {
        palabra: "Búa",
        definicion: "Buba (postilla), Bubas (tumores blandos)",
      },
      { palabra: "Cariharto/ta", definicion: "Redondo de cara" },
      { palabra: "Agraz", definicion: "Que no está maduro." },
      {
        palabra: "Hiperhidrosis",
        definicion:
          "Sudoración escesiva, especialmente en los pies y las manos.",
      },
      { palabra: "Ameritar", definicion: "Merecer. Dar méritos." },
      {
        palabra: "Carcundia",
        definicion:
          "Grupo o colectivo de personas retrógradas en temas de modernidad y religión.",
      },
      {
        palabra: "Empecer",
        definicion: "Dañar, ofender, causar perjuicio. / Impedir, obstar",
      },
      {
        palabra: "Obstar",
        definicion:
          "Dicho de una cosa, ser un obstáculo o un impedimento. / Dicho de una cosa: Ser contraria a otra o estar en contradicción con ella. (Medidas que no obstan (no son contrarias) a lo establecido.)",
      },
      {
        palabra: "Despartir",
        definicion:
          "Separar, apartar, dividir. / Poner en paz entre quienes riñen.",
      },
      {
        palabra: "Holgar",
        definicion:
          "Estar ocioso. / Descansar. / Alegrarse. / Sobrar, ser inútil. / Divertirse, entretenerse con gusto.",
      },
      {
        palabra: "Bobear",
        definicion:
          "Hacer o decir boberías. / Emplear y gastar el tiempo en cosas vanas o inútiles.",
      },
      { palabra: "Albardar / Enalbardar", definicion: "Rebozar, Emborrazar." },
      { palabra: "Albarda", definicion: "Loncha de tocino." },
      { palabra: "Facundo", definicion: "Fácil y desenvuelto en el hablar." },
      { palabra: "Solio", definicion: "Trono o silla con dosel." },
      { palabra: "Coturno", definicion: "Antiguo calzado típico Romano." },
      { palabra: "Almuérdago / Muérdago", definicion: "Planta parasitaria." },
      { palabra: "Cohechar", definicion: "Sobornar a un juez." },
      {
        palabra: "Haza",
        definicion:
          "Porción de tierra labrantía o de sembradura. / Montón o rimero.",
      },
      {
        palabra: "Veedor/a",
        definicion:
          "Que observa con detenimiento o controla lo que hacen otras personas. / Hombre que tenía cargos de inspección y se encargaba de comprobar si las obras de los distintos gremios u oficinas de bastamientos eran conformes a la ley u ordenanza.",
      },
      {
        palabra: "Ayo/a",
        definicion:
          "Persona que en una casa acomodada se encargaba del cuidado y educación de los niños.",
      },
      { palabra: "Ubérrimo/a", definicion: "Que es muy abundante o fértil." },
      {
        palabra: "Runfla",
        definicion:
          "Serie de varias cosas de una misma especie. / Muchedumbre, acompañamiento.",
      },
      {
        palabra: "Acedar",
        definicion: "Agriar, poner ácida o agria una cosa.",
      },
      {
        palabra: "Confitar",
        definicion: "Recubrir frutas cocidas con un baño de azúcar.",
      },
      {
        palabra: "Espetar",
        definicion:
          "Atravesar, clavar. / Decir a alguien de palabra o escrito causándole sorpresa. / Ponerse tieso, afectando gravedad y majestad./ Encajarse, asegurarse, afianzarse.",
      },
      {
        palabra: "Abemolar",
        definicion: "Suavizar, dulcificar la voz. / Poner bemoles. ( música )",
      },
      {
        palabra: "Exorable",
        definicion: "Fácil de mover con ruegos y condescendiente a ellos.",
      },
      {
        palabra: "Faraute",
        definicion:
          "Heraldo, mensajero. / Persona que en un asunto es la más importante o que presume de que lo organiza o dispone todo.",
      },
      { palabra: "Ecúleo", definicion: "Potro, elemento de tortura." },
      {
        palabra: "Coselete",
        definicion:
          "Coraza ligera, generalmente de cuero que usaron ciertos soldados de infantería.",
      },
      {
        palabra: "Orate",
        definicion:
          "Persona que ha perdido el juicio. / Persona de poco juicio, moderación o prudencia.",
      },
      { palabra: "Tudesco", definicion: "Que es de Alemania." },
      { palabra: "Gavia", definicion: "Cárcel, jaula." },
      {
        palabra: "Desdorar",
        definicion:
          "Quitar el oro. / Deslucir, deslustrar, mancillar la virtud, reputación o fama.",
      },
      {
        palabra: "Aporofobia",
        definicion: "Miedo, odio o repgunancia al pobre.",
      },
      { palabra: "Malsín", definicion: "Cizañero, soplón." },
      { palabra: "Cizañar", definicion: "Sembrar o meter cizaña." },
      { palabra: "Perinquina", definicion: "Inquina grande." },
      { palabra: "Perinquinoso", definicion: "Que tiene una inquina grande." },
      {
        palabra: "Ruar",
        definicion:
          "Andar por las calles y otros sitios públicos. / Pasear la calle con el objeto de cortejar y hacer obsequio a las damas.",
      },
      {
        palabra: "Obsequiar",
        definicion:
          "Agasajar a alguien con atenciones, servicios o regalos. / Enamorar, requebrar a una mujer, galantear.",
      },
      {
        palabra: "Requebrar",
        definicion:
          "Halagar a alguien con piropos o palabras que destaquen sus atractivos. / Volver a quebrar.",
      },
      { palabra: "Pregnante", definicion: "Que está lleno de significado." },
      { palabra: "Hominal", definicion: "Perteneciente o relativo al hombre." },
      {
        palabra: "Mitopoesis / Mitopoeia",
        definicion:
          "Género literario en el cual el autor crea todo un conjunto de conceptos, regiones, personajes, sucesos y arquetipos interrelacionados con una mitología propia.",
      },
      {
        palabra: "Protopático",
        definicion:
          "Biología. Dicese de la sensibilidad cutánea originada por un estímulo fuerte, como dolor, temperatura, etc., la cual provoca una reacción de defensa del organismo, con independencia del estímulo o de su punto de aplicación.",
      },
      {
        palabra: "Braquiación",
        definicion:
          "Es una modalidad de locomoción arbórea en la cual algunos primates se desplazan balanceándose entre las ramas de los árboles, solamente usando sus brazos.",
      },
      { palabra: "Filético", definicion: "Del fílum o relacionado con él." },
      {
        palabra: "Fílum",
        definicion:
          "División, representa el agrupamiento de grandes animales y seres vivos con determinados tratos evolutivos.",
      },
      {
        palabra: "Anagénesis",
        definicion:
          "También llamado evolución filética, es el proceso evolutivo de especiación por el que a partir de una especie ancestro sólo hay una especie descendiente.",
      },
      {
        palabra: "Matrimonio morganático",
        definicion:
          "Matrimonio contraido entre personas de rango social desigual (noble y plebeyo, príncipe y condesa)",
      },
      {
        palabra: "Nasciturus",
        definicion:
          "Persona antes de nacer, mientras permanece en el claustro materno.",
      },
      {
        palabra: "Dacroniano/a",
        definicion: "Ley o medida que extremadamente severa.",
      },
      {
        palabra: "Propender",
        definicion:
          "Tener [una persona o una cosa] inclinación o disposición natural a algo.",
      },
      {
        palabra: "Antropoide",
        definicion:
          "[animal] Que se parece al ser humano en sus caracteres morfológicos externos.",
      },
      {
        palabra: "Vexilología",
        definicion:
          "El estudio de las banderas en su más amplio sentido. Es una disciplina auxiliar de la historia",
      },
      {
        palabra: "Subrogar",
        definicion: "Sustituir o poner a alguien en el lugar de otro.",
      },
      {
        palabra: "Distingo",
        definicion:
          "Reparo, restricción, limitación que se pone con cierta sutileza, meticulosidad o malicia.",
      },
      {
        palabra: "Pedúnculo",
        definicion:
          "Tallo de una hoja, fruto o flor por el cual se une el tallo a la planta.",
      },
      { palabra: "Contractil", definicion: "Que es capaz de contraerse." },
      {
        palabra: "Liminal",
        definicion: "Que concierne al comienzo de alguna cosa.",
      },
      {
        palabra: "Mohíno",
        definicion:
          "Que está triste, abatido o disgustado. / Que deonta abatimiento, tristeza o disgusto.",
      },
      {
        palabra: "Orlar",
        definicion:
          "Poner una orla o adorno alrededor de una cosa. / Adornar el borde de una tela o vestido.",
      },
      {
        palabra: "Asertividad",
        definicion:
          "Conocer los derechos propios y respetarlos frente a los demás.",
      },
      { palabra: "Edadismo", definicion: "Discriminación a la tercera edad." },
      {
        palabra: "Fetua",
        definicion: "Decisión que da el muftí a una cuestión jurídica.",
      },
      {
        palabra: "Muftí",
        definicion:
          "Jurisconsulto musulmán con autoridad pública, cuyas decisiones son consideradas como leyes.",
      },
      {
        palabra: "Proemio",
        definicion: "Prólogo, discurso antepuesto al cuerpo de un libro.",
      },
      {
        palabra: "Columbrar",
        definicion:
          "Ver desde lejos una cosa sin distinguierla bien. / Suponer o conjeturar una cosa.",
      },
      {
        palabra: "Heteronimia",
        definicion:
          "Fenómeno en el cual palabras de gran proximidad semántica tienen formas y etimologías diferentes.",
      },
      {
        palabra: "Inviabilidad",
        definicion: "Imposibilidad de que algo ocurra o pueda realizarse.",
      },
      {
        palabra: "Vademécum",
        definicion:
          "Libro o manual de poco volumen y fácil de consultar que contiene las nociones elementales de una ciencia o técnica.",
      },
      {
        palabra: "Entomología",
        definicion: "Parte de la zoología que estudia a los insectos.",
      },
      {
        palabra: "Heptalogía",
        definicion:
          "Saga de 7 entregas. Poco comunes, las más comunes son trilogías o tetralogías",
      },
      {
        palabra: "Zascandil",
        definicion:
          "Hombre que va de un lado a otro sin hacer nada de provecho. / Hombre despreciable, ligero y enredador.",
      },
      {
        palabra: "Barrabasada",
        definicion:
          "Desaguisado, disparate, acción que produce gran daño o perjuicio.",
      },
      {
        palabra: "Trufar",
        definicion:
          "Engañar. / Introducir elementos extraños en un conjunto determinado, algunas veces de manera subrepticia.",
      },
      { palabra: "Verbosidad", definicion: "Verborrea." },
      { palabra: "Undular", definicion: "Ondular o formar ondas en una cosa." },
      {
        palabra: "Monomanía",
        definicion: "Obsesión por una idea determinada recurrente.",
      },
      {
        palabra: "Renitente",
        definicion: "Que se resiste a hacer o admitir algo.",
      },
      { palabra: "Irrogar", definicion: "Causar daño o perjuicio a alguien." },
      {
        palabra: "Conativo",
        definicion:
          "Función lingüistica: Que intenta dirigir la conducta del oyente.",
      },
      {
        palabra: "Volición",
        definicion: "Deseo, determinación. / Acto de voluntad.",
      },
      {
        palabra: "Gresca",
        definicion: "Confusión y desorden. / Disputa o riña.",
      },
      { palabra: "Retambufa", definicion: "Bujarrón, homosexual activo" },
      {
        palabra: "Demoscopia",
        definicion:
          "Parte de la sociología que estudia las orientaciones y la opinión pública sobre alguna cuestión.",
      },
      { palabra: "Rilar", definicion: "Temblar, tiritar." },
      {
        palabra: "Rilarse",
        definicion:
          "Hecharse atrás, no hacer lo que tenía previsto a causa del miedo.",
      },
      {
        palabra: "Oreo",
        definicion:
          "Soplo de aire que da suavemente en algo. / Acción de orear u orearse.",
      },
      { palabra: "Provecto", definicion: "Maduro." },
      { palabra: "Arcádico", definicion: "Bucólico, idílico." },
      {
        palabra: "Intelligentsia",
        definicion:
          "En transliteración al español, inteliguentsia es una clase social compuesta por personas involucradas en complejas actividades mentales y creativas orientadas al desarrollo y la diseminación de la cultura, incluyendo intelectuales y grupos sociales cercanos a ellos.",
      },
      {
        palabra: "Lleco",
        definicion: "Dicese de la tierra o un campo sin roturar.",
      },
      { palabra: "Purria", definicion: "Gente despreciable." },
      { palabra: "Quid pro quo", definicion: "Una cosa por otra." },
      {
        palabra: "Desbarrar",
        definicion:
          "Decir o hacer cosas fuera de razón y regla; decir disparates.",
      },
      {
        palabra: "Hipálage",
        definicion:
          "Es una figura retórica que consiste en atribuir a un sustantivo una cualidad o acción propia de otro sustantivo cercano en el mismo texto. Ej: El oro temeroso del avaro. Su barba soplando al viento",
      },
      {
        palabra: "Ciclotimia",
        definicion:
          "Estado mental caracterizado por variaciones del humor en que se pasa de la euforia a la depresión, tristeza o melancolía. (puede dar lugar a trastornos de carácter psicótico.)",
      },
      {
        palabra: "Checa",
        definicion: "Comité de policía secreta en la Rusia soviética.",
      },
      {
        palabra: "Foniatría",
        definicion:
          "Parte de otorrinolaringologia que se ocupa de la emisión de la voz y sus alteraciones.",
      },
      {
        palabra: "Cachaza",
        definicion: "Tranquilidad excesiva cuando se desarrolla uan actividad.",
      },
      {
        palabra: "Finisecular",
        definicion: "Del fin de un siglo o relacionado con él.",
      },
      { palabra: "Tea", definicion: "borrachera." },
      {
        palabra: "Trust",
        definicion:
          "Grupo de empresas unidas para monopolizar el mercado y controlar los precios en su propio beneficio.",
      },
      {
        palabra: "Inexpiable",
        definicion:
          "Que no puede ser expiado, que no se le pueden borrar las culpas.",
      },
      {
        palabra: "Aldabonazo",
        definicion:
          "Golpe fuerte con la aldaba o el aldabón de una puerta para llamar.",
      },
      {
        palabra: "Intelectual",
        definicion:
          "Es el que se dedica al estudio y la reflexión crítica sobre la realidad, y comunica sus ideas con la pretensión de influir en ella, alcanzando cierto estatus de autoridad ante la opinión pública. Concepto acuñado en el S. XIX en el caso Deyfrus para calificar de manera despectiva, por los anitdeyfusistas, al conjunto de personajes de la ciencia, el arte y la cultura que apoyaban la liberación del capitán judío Dreyfus.",
      },
      {
        palabra: "Rábula",
        definicion: "Abogado indocto, charlatán y vocinglero.",
      },
      {
        palabra: "Acerado",
        definicion:
          "De acero. / Fuerte, de mucha resistencia. / Incisivo, mordaz, penetrante.",
      },
      {
        palabra: "Hipermnesia o Hipertimesia",
        definicion:
          "Aumento considerable de la capacidad de memoria y por ende del recuerdo.",
      },
      {
        palabra: "Isagoría",
        definicion: "Derecho a intervenir con la palabra.",
      },
      {
        palabra: "Jeribeque",
        definicion:
          "Contorsión o movimiento de brazos en el aire, sin objeto aparente. / Adorno, dibujo o línea complicados.",
      },
      {
        palabra: "Mollar",
        definicion:
          "Persona que se deja engañar con facilidad. / Cosa que da mucha utilidad sin carga considerable. / Blando y fácil de partir.",
      },
      {
        palabra: "Prerrogativa",
        definicion:
          "Privilegio, gracia o exención que se concede a alguien para que goce de ello.",
      },
      { palabra: "Descreer", definicion: "Dejar de creer una cosa." },
      {
        palabra: "Rayano/a",
        definicion: "Que raya o linda con otra cosa o está muy cerca de ella.",
      },
      {
        palabra: "Frenología",
        definicion:
          "Es una antigua teoría pseudocientífica, sin ninguna validez en la actualidad, que afirmaba la posible determinación del carácter y los rasgos de la personalidad, así como las tendencias criminales, basándose en la forma del cráneo, cabeza y facciones.",
      },
      {
        palabra: "Animus iocandi",
        definicion:
          "Latín: ánimo de broma, con intención jocosa. Es usado en la jurisprudencia penal como un eximiente del delito de injurias.",
      },
      {
        palabra: "Politburó",
        definicion:
          "Máximo órgano ejecutivo de distintios partidos políticos, especialmente los comunistas. Máximo órgano de poder.",
      },
      { palabra: "Prosaismo", definicion: "Cualidad de lo que es prosaico." },
      {
        palabra: "Para-",
        definicion: "Significa junot a, semejante a, al margen o en contra de.",
      },
      {
        palabra: "Tribulación",
        definicion:
          "Pena, congoja, tormento o aflicción moral. / Persecución o adversidad que padece una persona.",
      },
      {
        palabra: "A fortiori",
        definicion:
          "Latín: Significa 'Con mayor motivo', se usa para referirse a una forma de argumentación por la que se saca una consecuencia.",
      },
      {
        palabra: "Pretorio",
        definicion:
          "Palacio en que habitaba y juzgaba el pretor romano o el presidente de una provincia.",
      },
      {
        palabra: "Espídico",
        definicion: "Que es o está artificialmente agitado o nervioso.",
      },
      {
        palabra: "Portavocía",
        definicion: "Cargo o condición de un portavoz.",
      },
      {
        palabra: "Trust",
        definicion:
          "Grupo de empresas unidas para monopolizar el mercado y controlar los precios en su propio beneficio.",
      },
      {
        palabra: "Cesarismo",
        definicion:
          "Régimen político en el cual una persona gobierna con poder total.",
      },
      {
        palabra: "Complotar",
        definicion:
          "Confabularse, tramar una conjura, por lo general con fines políticos.",
      },
      {
        palabra: "Reputar",
        definicion:
          "Juzgar o hacer concepto del estado o calidad de alguien o algo. / Apreciar o estiamr el mérito.",
      },
      {
        palabra: "Ciar",
        definicion:
          "Andar hacia atrás, retroceder. / Abandonar un empeño o negocio.",
      },
      {
        palabra: "Acta est fabula",
        definicion: "Latín: 'La función ha terminado'.",
      },
      {
        palabra: "Perspicuo",
        definicion:
          "Claro, transparente, terso. / Persona que se explica con claridad. / Dicho de estilo inteligible.",
      },
      {
        palabra: "Zyclon B",
        definicion:
          "Pesticida a base de cianuro. Usado como instrumento para acabar con la vida de humanos por los Nazis.",
      },
      { palabra: "Paródico", definicion: "Relativo a la parodia." },
      { palabra: "Chamorra", definicion: "Cabeza esquildada." },
      {
        palabra: "Innúmero",
        definicion: "Que no se puede reducir a un número.",
      },
      {
        palabra: "Retardatario",
        definicion:
          "Que tiende a producir retraso. / Persona que se opone al progreso o desarrollo cultural.",
      },
      { palabra: "Valladar", definicion: "Vallado, cerca." },
      {
        palabra: "Monolitismo",
        definicion:
          "Característica de las personas o colectivos sin fisuras internas, poco flexibles y que no ceden ni se adaptan a los cambios con facilidad.",
      },
      {
        palabra: "Trastueque",
        definicion: "Cambio de ser o estado de una cosa.",
      },
      { palabra: "Noli me tanguere", definicion: "Latín: 'No me toques'." },
      { palabra: "Alma máter", definicion: "Persona que impulsa algo." },
      {
        palabra: "Naumaquia",
        definicion: "Representación de un combate naval en época romana.",
      },
      {
        palabra: "Maula",
        definicion:
          "Persona tramposa, mal pagadora. / Persona perezosa, inepta, que no cumple sus ocupaciones o no vale para ellas. / Cosa de poco valor, utilidad o importancia. / Engaño, artimaña o artificio encubiertoa. / Pedazo de tela, piel o chapa que se vende como resto.",
      },
      {
        palabra: "Epiceno",
        definicion:
          "Gramática:  Que se aplica a los sustantivos que denotan indistintamente animales o personas de sexo masculino o femenino; el sexo se distingue añadiendo algún especificador al sustantivo (en los animales, las palabras ‘macho’ o ‘hembra’). Ej: Búho, rata",
      },
      {
        palabra: "Febrícula",
        definicion:
          "Fiebre prolongada, moderada, casi siempre vespertina, de origen infeccioso o nervioso.",
      },
      { palabra: "Balandrón", definicion: "Fanfarrón, truhan." },
      {
        palabra: "Bravata",
        definicion: "Dicho o hecho presuntuoso, propio de balandrones.",
      },
      {
        palabra: "Infatuación",
        definicion:
          "En algunos textos sobre psicología alude específicamente a cierto estado emocional caracterizado por el dejarse llevar por una pasión irracional, especialmente por el amor adictivo",
      },
      {
        palabra: "Peritorio",
        definicion:
          "De la petición o de la súplica oq ue la contiene. 'carta peritoria'",
      },
      {
        palabra: "Idolátrico",
        definicion: "De la idolatría o que implica idolatría.",
      },
      { palabra: "Undoso", definicion: "Que se mueve haciendo olas." },
      {
        palabra: "Flagelo",
        definicion:
          "Instrumento para golpear que esta formado por cuerdas anudadas. / Cosa, hecho o suceso que tiene efeto muy negativos.",
      },
      {
        palabra: "Pacato",
        definicion: "Que tiene un carácter tranquilo y moderado en exceso.",
      },
      { palabra: "Radioso", definicion: "Que despide rayos de luz." },
      {
        palabra: "Indino",
        definicion: "Que es travieso y descarado. / Tacaño.",
      },
      {
        palabra: "Infructuoso",
        definicion: "Que no es de utilidad ni produce buenos resultados.",
      },
      {
        palabra: "Algazara",
        definicion: "Ruido producido por voces alegres y festivas. Algarabía.",
      },
      {
        palabra: "Sistémico",
        definicion:
          "Perteneciente o relativo a la totalidad de un sistema; general, por oposición a local.",
      },
      { palabra: "Perjurio", definicion: "Acción de jurar en falso." },
      {
        palabra: "Burricie",
        definicion: "Cualidad de burro, torpeza, rudeza.",
      },
      {
        palabra: "Hibris",
        definicion:
          "Concepto griego que puede traducirse como 'desmesura', transgredir los límites racionalmente.",
      },
      {
        palabra: "Tremebundo",
        definicion: "Espantable, horrendo, que hace temblar.",
      },
      {
        palabra: "Edecan",
        definicion: "Ayudante, auxiliar, acompañante, correveidile.",
      },
      { palabra: "Ailurofilia", definicion: "Amor por los gatos o felinos." },
      {
        palabra: "Barbacana",
        definicion:
          "Obra de fortificación, avanzada y aislada, para defender puertas, cabezas de puente, etc. / Abertura en el muro de una fortificación desde donde se disparaban los cañones.",
      },
      {
        palabra: "Recensión",
        definicion:
          "Noticia y comentario, generalmente de corta extensión, que se hace sobre una obra literaria.",
      },
      { palabra: "De iure", definicion: "Latín: 'De derecho'." },
      {
        palabra: "Atinente",
        definicion: "Que atañe a algo o que se atiene a lo que se expresa.",
      },
      { palabra: "Hic et nunc", definicion: "Latín: Aquí y ahora." },
      {
        palabra: "Enajenar",
        definicion:
          "Vender, donar o ceder el derecho o el doominio que se tiene sobre algo. / Hacer que una persona pierda la razón.",
      },
      { palabra: "Esclerodermia", definicion: "Dureza de la piel." },
      {
        palabra: "Hiperqueratosis",
        definicion: "Dureza de la piel en los pies.",
      },
      {
        palabra: "Cui prodest / Cui bono",
        definicion:
          "Latín: ¿Quién se beneficia?. Cuando se realiza un acto y se pregunta por quién será el beneficiario del resultado de ese acto.",
      },
      {
        palabra: "Macguffing",
        definicion:
          "MacGuffin es una expresión acuñada por Alfred Hitchcock que designa una excusa argumental que motiva a los personajes y al desarrollo de una historia, pero carece de relevancia por sí misma.",
      },
      {
        palabra: "Verba volant scripta manent",
        definicion: "Latín: 'Las palabras vuelan, lo escrito queda.'",
      },
      {
        palabra: "Boutade",
        definicion: "Dicho o hecho paradójico pero poco eficaz o adecuado.",
      },
      {
        palabra: "Cimbrar",
        definicion:
          "Mover una vara / Hacer vibrar algo / Dar a alguien con una vara o palo.",
      },
      {
        palabra: "Seudópodo",
        definicion:
          "Prolongacion protoplasmática emitida por alguno seres unicelulares que sirve para la ejecución de movimientos.",
      },
      {
        palabra: "Orquiectomía",
        definicion: "Extirpación de uno o de los dos testículos.",
      },
      { palabra: "Babieca", definicion: "Persona boba y de poco carácter." },
      {
        palabra: "Hemistiquio",
        definicion:
          "Cada una de las partes de un verso mayor, separadas por una cesura o una pausa interna. 'Las glorias tuyas y las penas mías.'",
      },
      { palabra: "Cesura", definicion: "Espacio o pausa de un verso." },
      {
        palabra: "Vocativo",
        definicion:
          "Sustantivo o grupo nominal que sirve para llamar la atención del oyente o para dirigirse a él. 'Ernesto, ven aquí', Ernesto es un vocativo.",
      },
      {
        palabra: "Anáfora",
        definicion:
          "Gramática: referencia a un término 'ése'. / Literatura: Repetición.",
      },
      {
        palabra: "Zangolotino",
        definicion: "Que ya está crecido y se hace pasar por niño.",
      },
      { palabra: "Desiderata", definicion: "Latín: 'Cosas deseadas'" },
      {
        palabra: "Concusión",
        definicion: "Exacción hecha por un funcionario en provecho propio.",
      },
      {
        palabra: "Exacción",
        definicion:
          "Exigir impuestos, prestaciones o multas. / Cobro injusto y violento.",
      },
      {
        palabra: "Damnatio memoriae",
        definicion: "Latín: 'Condena de la memoria.'",
      },
      { palabra: "Peculado", definicion: "Malversación de fondos públicos." },
      { palabra: "Alacre", definicion: "Alegre, ligero, vivo." },
      { palabra: "Casus belli", definicion: "Latín: 'Motivo de guerra.'" },
      { palabra: "Ameritar", definicion: "Merecer. / Dar méritos." },
      {
        palabra: "Denuesto",
        definicion: "Palabra o expresión que se emplea para insultar.",
      },
      { palabra: "IAM", definicion: "Infarto agudo de miocardio." },
      {
        palabra: "Enviscar",
        definicion: "Azuzar. / Irritar, enconar los ánimos.",
      },
      { palabra: "Concisión", definicion: "Cualidad de conciso." },
      { palabra: "Seminal", definicion: "Del semen o relacionado con él." },
      { palabra: "Proteico", definicion: "Que cambia de forma o ideas." },
      {
        palabra: "Engolamiento",
        definicion: "Afecctación en el habla o la actitud.",
      },
      { palabra: "Hosco", definicion: "Fosco, oscuro, áspero." },
      { palabra: "Licuar", definicion: "Volver una cosa líquida." },
      {
        palabra: "Nervudo",
        definicion: "Que tiene nervios fuertes y robustos. / Fuerte, robusto.",
      },
      {
        palabra: "Proscenio",
        definicion:
          "Lugar de antiguo teatro griego o latino que estaba situado entre la escena y la orquesta. / Parte del escenario que está más cerca del público.",
      },
      {
        palabra: "Incensar",
        definicion: "Dirigir con el incensario. / Lisonjar o adular a alguien.",
      },
      {
        palabra: "Lascasiano",
        definicion: "Relativo al pensamiento del Bartolomé de las Casas.",
      },
      {
        palabra: "Dídimo",
        definicion:
          "Dicho de algunas estructuras lobuladas o de algunos órganos de los seres vivos: Que se presentan emparejados. (tetas) / Testículo / Gemelo.",
      },
      {
        palabra: "Pro domo sua",
        definicion:
          "Latín: 'Por su casa', se usa para signifacar el modo egoísta con que obra alguien.",
      },
      { palabra: "Prima facie", definicion: "Latín: 'A primera vista'" },
      {
        palabra: "Incuria",
        definicion: "Negligencia, abandono o falta de cuidado.",
      },
      {
        palabra: "In aeternum",
        definicion: "Latín: 'Para toda la eternidad.'",
      },
      { palabra: "Coludir", definicion: "Pactar en perjucio de un tercero." },
      {
        palabra: "Pecio",
        definicion: "Pedazo o resto de una nave que ha naufragado.",
      },
      {
        palabra: "Ultramontano",
        definicion: "Integrista católico. / Más alla de los montes.",
      },
      {
        palabra: "Circunvalar",
        definicion: "Cercar, ceñir o rodear una ciudad, una fortaleza, etc.",
      },
      {
        palabra: "Laissez faire",
        definicion: "Francés: Significa 'Dejen hacer, dejen pasar.'",
      },
      { palabra: "Neocon", definicion: "Neoconservador." },
      {
        palabra: "Prelación",
        definicion:
          "Orden de prioridad o preferencia con que una cosa o persona debe ser atendida o considerada.",
      },
      { palabra: "Citadino", definicion: "Ciudadano." },
      { palabra: "Inteligir", definicion: "Entender" },
      {
        palabra: "Iatrogenia",
        definicion: "Daño a la salud causado por un acto médico.",
      },
      {
        palabra: "Votivo",
        definicion: "Que es ofrecido por voto. / Del voto.",
      },
      {
        palabra: "Maliciar",
        definicion:
          "Pensar una cosa con malicia, sospechando algo oculto, inmoral, incoveniente, etc. / Malear o pervertir.",
      },
      {
        palabra: "Covalencia",
        definicion:
          "Enlace químico entre dos átomoms por el que comparten un par de electrones.",
      },
      {
        palabra: "Compost o Composta",
        definicion:
          "Producto obtenido a partir de diferentes materiales orgánicos(estiércol, residuos, etc.) para abonar la tierra.",
      },
      {
        palabra: "Matritense",
        definicion: "Relativo a Madrid. / Que es de Madrid.",
      },
      {
        palabra: "Fatigado",
        definicion: "Que está en mal estado de conservación.",
      },
      { palabra: "Presbítero", definicion: "Sacerdote." },
      {
        palabra: "Diacono",
        definicion:
          "Futuro sacerdote que aún no puede celebrar potestades sacramentales, lee en la eucaristía y cosas por el estilo.",
      },
      {
        palabra: "Estofa",
        definicion: "Especie, clase o condición de una persona. Ralea.",
      },
      {
        palabra: "Primus inter pares",
        definicion:
          "Latín: El primero entre iguales. Hace referencia al caudillo o emperador.",
      },
      { palabra: "Detraer", definicion: "Restar, sustraer o quitar algo." },
      {
        palabra: "Nahual",
        definicion:
          "Brujo o ser sobrenatural de mesoamérica con capacidad para tomar forma animal.",
      },
      { palabra: "Fabular", definicion: "Imaginar" },
      { palabra: "Pesaroso", definicion: "Que siente un pesar o una pena." },
      { palabra: "Pesante", definicion: "Que pesa. / Pesaroso." },
      {
        palabra: "Guiñapo",
        definicion: "Harapo, andrajo. / Persona andrajosa.",
      },
      { palabra: "Sardónico", definicion: "Sarcástico." },
      { palabra: "Artero/a", definicion: "Astuto, malintencionado." },
      {
        palabra: "Coriáceo",
        definicion: "Que tiene aspecto y el tacto semejante al cuero.",
      },
      { palabra: "Cefalea", definicion: "Dolor de cabeza" },
      {
        palabra: "Catalepsia",
        definicion:
          "Trastorno repentino del sistema nervioso caracterizado por la pérdida de la movilidad y sensibilidad del cuerpo.",
      },
      {
        palabra: "Macartismo",
        definicion:
          "Conjunto de acciones emprendidas contra un grupo de personas por sus ideas políticas y sociales, generalmente progresistas.",
      },
      {
        palabra: "Vaciedad",
        definicion: "Cualidad de vacío. / Necedad, sandez, simpleza.",
      },
      { palabra: "Salmodiar", definicion: "Cantar un salmo." },
      {
        palabra: "Cogitativo",
        definicion: "Que tiene la falcultad de pensar.",
      },
      { palabra: "Mazorral", definicion: "Que es groseo o tosco." },
      { palabra: "Caletre", definicion: "Talento." },
      { palabra: "Parentela", definicion: "Conjunto de parientes." },
      {
        palabra: "Ferolítico",
        definicion: "Extremadamente delicado, fino o primoroso.",
      },
      {
        palabra: "Turiferario",
        definicion: "Pelota, que alaba de forma exagerada.",
      },
      {
        palabra: "Dolicocéfalo",
        definicion: "Tipo de cráneo estrecho alargado, de cara alargada.",
      },
      {
        palabra: "Mesaticéfalo",
        definicion: "Tipo de cráneo normal, de cara propocionada.",
      },
      {
        palabra: "Braquicéfalo",
        definicion: "Tipo de cráneo ancho corto, de cara corta y ancha.",
      },
      {
        palabra: "Lotófago",
        definicion:
          "Mitología griega: 'Los que comen loto'. Los griegos que llegaron a la isla de los lotófagos se aficionaron al loto y olvidaron su patria y de dónde venían.",
      },
      {
        palabra: "Peccata minuta",
        definicion: "Latín: 'Falta pequeña'. Indica un error o falta leve.",
      },
      {
        palabra: "Flexibilidad cérea",
        definicion:
          "Disminución de respuesta a estímulos, tendencia a inmovilidad. Con movimientos como un muñeco de cera.",
      },
      { palabra: "Infatuar", definicion: "Volver fatua o engreida una cosa." },
      { palabra: "Infatuación", definicion: "Acción de infatuar." },
      { palabra: "Vermiforme", definicion: "Que tiene forma de gusano." },
      {
        palabra: "Zollipo",
        definicion: "Sollozo con hipo, y regularmente con llanto y aflicción.",
      },
      {
        palabra: "Cicardiano",
        definicion:
          "Espacio de tiempo que consta aprox. de 24h. / Que ocurre cada día a la misma hora.",
      },
      { palabra: "Gemebundo", definicion: "Que gime profundamente." },
      { palabra: "Mutagénesis", definicion: "Aparición de mutaciones." },
      {
        palabra: "Carcinogénesis",
        definicion:
          "Conjunto de fenómenos que determinan la aparición y desarrollo de un cáncer.",
      },
      { palabra: "Odre", definicion: "Borracho o persona muy bebedora." },
      {
        palabra: "Enuclear",
        definicion: "Extirpar un órgano globoso como un ojo",
      },
      {
        palabra: "Decuplicar",
        definicion: "Multiplicar por diez una cantidad.",
      },
      {
        palabra: "Ergástulo",
        definicion: "Cárcel de la antigua Roma destinada a esclavos.",
      },
      { palabra: "Parva", definicion: "Cantidad grande de una cosa." },
      { palabra: "Alifafe", definicion: "Achaque (indisposición)." },
      {
        palabra: "Faramalla",
        definicion:
          "Situación exagerada, aparatosa o escandalosa, en ocasiones falsa, con que se pretende llamar la atención.",
      },
      {
        palabra: "Zurupeto",
        definicion:
          "Persona que sin título ejerce funciones de notario y abogado.",
      },
      { palabra: "Chirrigueresco", definicion: "Que tiene excesivos ornatos." },
      {
        palabra: "Motejar",
        definicion:
          "Aplicar a algo o alguien un apelativo o un calificativo despectivo o reprobatorio.",
      },
      {
        palabra: "Koinonía",
        definicion:
          "Concepto teológico que que significa comunión, vínculo que se genera entre los miembros de una iglesia.",
      },
      {
        palabra: "Condónmino",
        definicion: "Derecho: Propietario junto con otros.",
      },
      { palabra: "Heril", definicion: "Perteneciente o relativo al amo." },
      {
        palabra: "Mirmecófago",
        definicion: "Animal que se alimenta de hormigas ( Oso hormiguero ).",
      },
      {
        palabra: "Nomen est omen",
        definicion:
          "Latín: 'El nombre es el destino'. Los romanos pensaban que el nombre determinaba en gran medida el destino de quien lo llevaba; por ello afirmaban: nomen est omen (el nombre es destino).",
      },
      { palabra: "Barbado", definicion: "Que tiene barba." },
      { palabra: "Frailuno", definicion: "Que es propio de frailes." },
      {
        palabra: "Villorio",
        definicion: "Población pequeña o poco urbanizada.",
      },
      {
        palabra: "Liofilización",
        definicion: "Proceso de deshidratación para conservar los alimentos.",
      },
      {
        palabra: "Lepidóptero",
        definicion:
          "Insectos holometábolos como la mariposa, palomas y polillas.",
      },
      {
        palabra: "Holometábolo",
        definicion: "Que sufre un proceso de metamorfosis completa.",
      },
      { palabra: "Acidia", definicion: "Pereza." },
      {
        palabra: "Diégesis",
        definicion:
          "Relato, expoisición. Desarrollo de los hechos en una obra.",
      },
      {
        palabra: "Diegético",
        definicion:
          "Todo lo que tiene que ver con la narración, el relato o la exposición.",
      },
      {
        palabra: "Autógeno",
        definicion: "Que se origina o engendra a sí mismo.",
      },
      { palabra: "Colipoterra", definicion: "Meretriz." },
      {
        palabra: "Hujier / ujier",
        definicion:
          "Portero de un palacio o tribunal. / Empleado de algunos organismos del Estado que lleva a cabo tareas que no requieren especialización.",
      },
      { palabra: "Integérrimo", definicion: "Superlativo de íntegro." },
      {
        palabra: "Redoma",
        definicion: "Recipiente de vidrio que se usa en los laboratorios.",
      },
      { palabra: "Salutífero", definicion: "Saludable, bueno para la salud." },
      { palabra: "Complotar", definicion: "Confabularse, tramar una conjura." },
      {
        palabra: "Salvajina",
        definicion: "Conjunto de fieras montesas. / Animal montaraz.",
      },
      { palabra: "Volatería", definicion: "Conjunto de diversas aves." },
      { palabra: "Sisar", definicion: "Robar." },
      { palabra: "Remoción", definicion: "Acción de remover." },
      {
        palabra: "Concusión",
        definicion:
          "Exacción arbitraria hecha por un funcionario público en provecho propio.",
      },
      {
        palabra: "Ut supra",
        definicion:
          "Latín: 'Como arriba', se usa para referirse en texto a algo que ya ha sido expuesto anteriormente ( Fecha ut supra ).",
      },
      { palabra: "Mitones", definicion: "Guantes de dedos cortados." },
      {
        palabra: "Hodierno",
        definicion:
          "Que pertenece o está relacionado con el día de hoy o al tiempo presente.",
      },
      {
        palabra: "Endófobo",
        definicion: "Rechazo a lo propio, familia, patria, raíces, etc.",
      },
      {
        palabra: "Parresía",
        definicion: "Hablar con franqueza o excusarse por hablar así.",
      },
      {
        palabra: "Anaideia",
        definicion: "Desvergüenza, provocación, irreverencia.",
      },
      {
        palabra: "Perfunctorio",
        definicion: "Hecho sin cuidado, a la ligera.",
      },
      {
        palabra: "Hipotiposis",
        definicion:
          "Descripción figurada de algo. Según Quintiliano es 'la imagen de las cosas, tan bien representada por la palabra (o la música, pintura, etc) que el oyente cree verla mejor que sentirla' ",
      },
      { palabra: "Catábasis", definicion: "Descenso, hacia abajo." },
      { palabra: "Freje", definicion: "Tira de chapa de hierro." },
      {
        palabra: "Sit tibi terra levis",
        definicion: "Que la tierra te sea ligera.",
      },
      {
        palabra: "Mesnada",
        definicion:
          "Conjunto de hombres armados de la Edad Media. / Conjunto de seguidores o partidarios de una persona.",
      },
      {
        palabra: "Especular",
        definicion:
          "Hacer suposiciones sobre algo. / Meditar. / Relacionado con el espejo.",
      },
      { palabra: "Embolicar", definicion: "Embrollar." },
      { palabra: "Ciclópeo", definicion: "De los cíclopes. / Gigantesco." },
      {
        palabra: "Dixit",
        definicion:
          "Latín: 'dijo', que alguien dixit algo se considera verdadero porque esa persona tiene autoridad.",
      },
      {
        palabra: "Alfarje",
        definicion:
          "Techo de madera horziontal y entralazada que se labra y se pinta.",
      },
      {
        palabra: "Jabelgar o Jalbegar",
        definicion: "Enjabelgar, maquillar. / Blanquear las paredes con cal.",
      },
      {
        palabra: "Esportillero",
        definicion:
          "Persona que llevaba en su espuerta lo que se le mandaba. / Operario que acarrea con la espuerta los materiales.",
      },
      {
        palabra: "Espuerta",
        definicion:
          "Recipiente de esparto o cubo grande plastico donde se transportan materiales o se meten escombros.",
      },
      {
        palabra: "Poltronería",
        definicion: "Pereza, haraganería, flojedad o aversión al trabajo.",
      },
      {
        palabra: "Acíbar",
        definicion: "Aloe. / Amargura, sinsabor, disgusto.",
      },
      {
        palabra: "Trastejar",
        definicion:
          "Reponer o arreglar las tejas de un edificio. / Revisar o examinar algo para arreglarlo o componerlo.",
      },
      {
        palabra: "Ad pendem literae",
        definicion: "Latín: Al pie de la letra.",
      },
      { palabra: "Valija", definicion: "Maleta." },
      { palabra: "Jácaro", definicion: "Fanfarrón." },
      {
        palabra: "Dimes y diretes",
        definicion:
          "Cotilleos o comentarios sobre algo intrascendente. 'Andan entre dimes y dieretes sobre las parejas de ese famoso.'",
      },
      {
        palabra: "Zahareño",
        definicion: "Que es desdeñoso, arisco y de trato difícil.",
      },
      { palabra: "Torniscón", definicion: "Pellizco." },
      {
        palabra: "Tráfago",
        definicion: "Ajetreo, actividad intensa y agitada.",
      },
      {
        palabra: "Enjaezar",
        definicion: "Embellecer una caballería colocándole ornatos y jaeces.",
      },
      {
        palabra: "Apocatástasis",
        definicion:
          "Que todos, pecadores y no pecadores serán uno con Dios. El perdón para todos.",
      },
      {
        palabra: "Terebrante",
        definicion:
          "Dicho de un dolor: Que produce sensación semejante a la que resultaría de taladrar la parte dolorida.",
      },
      {
        palabra: "Bubón",
        definicion:
          "Tumefacción inflamatoria supurada de un ganglio linfático, especialmente en la ingle; aparece en enfermedades infecciosas, como la sífilis, la peste, etc.",
      },
      { palabra: "Escolopendra", definicion: "Ciempiés venenoso." },
      { palabra: "Escolopendromorfo", definicion: "Con forma de ciempiés" },
      {
        palabra: "Ergotismo",
        definicion:
          "Enfermedad por ingesta de alimentos contaminados. Los efectos del envenenamiento pueden traducirse en alucinaciones, convulsiones y contracción arterial, que puede conducir a la necrosis de los tejidos y la aparición de gangrena en las extremidades principalmente.",
      },
      { palabra: "Izas, rabizas y colipoterras", definicion: "Putas" },
      {
        palabra: "Liber iudiciorum",
        definicion:
          "Cuerpo de leyes visigodo tomado del derecho romano, dispuesto por el rey Recesvinto y promulgado probablemente el año 654",
      },
      {
        palabra: "Idiotismo",
        definicion:
          "Giro idiomático que no se adapta a las normas gramaticales ( Ej: modularización ).",
      },
      {
        palabra: "Barbotar Barbotear",
        definicion: "Hablar de forma entrecortada y confusa.",
      },
      { palabra: "Agavillado", definicion: "Juntarse en cuadrilla." },
      {
        palabra: "Anaciclosis",
        definicion:
          "Teoría que describe una sucesión cíclica de regímenes políticos. (Monarquía, Tiranía, Aristocracia, Oligarquía, Democracia, Olocracia, Monarquía...)",
      },
      {
        palabra: "Priscilianismo",
        definicion:
          "Doctrina cristiana creada por el español avilés Prisciliano basda en los ideales de austeridad y pobreza. (Germen del Franciscanos y Dominicos.)",
      },
      {
        palabra: "Perimetral",
        definicion:
          "Contorno. Situado en el perímetro. / Perteneciente al perímetro.",
      },
      {
        palabra: "Denticulado",
        definicion:
          "Herramientas líticas fabricadas con piedras mediante percusión o golpeo de las misma ( puntas de flechas, hachas, cuchillos )",
      },
      {
        palabra: "Estragar",
        definicion:
          "Descomponer físicamente a alguien o algo. / Viciar / Causar un estrago.",
      },
      {
        palabra: "Psicomaquía",
        definicion:
          "Contienda, pendencia entre vicio y virtudes. (Concepto creado por el Vascón de Calahorra.)",
      },
      {
        palabra: "Retortero",
        definicion:
          "Expresión 'andar o ir al retortero' significa andar sin descanso de aquí para allá trabajando o atendiendo alguna obligación.",
      },
      {
        palabra: "Hierofante o Girofante",
        definicion:
          "Rango de sumo sacerdote dentro de los sacerdotes de la antigua religión griega.",
      },
      {
        palabra: "Morigeración",
        definicion: "Moderación en las costumbres y en el modo de vida.",
      },
      {
        palabra: "Morigerado",
        definicion: "Bien criado. de buenas costumbres.",
      },
      {
        palabra: "Entroque",
        definicion:
          "Relación de parentesco. / Transbordo, cambio de línea de trasnporte.",
      },
      { palabra: "Quiromántico", definicion: "Vidente, adivino, augur." },
      {
        palabra: "Non sequitur",
        definicion:
          "Falacia lógica en la que la conclusión a la que se llega no se deduce por su premisa. / Comentario irrelevante y en ocasiones cómico frente a un tema o aclaración.",
      },
      {
        palabra: "Craneometría",
        definicion:
          "Disciplina que estudia las diferentes medidas de los cráneos.",
      },
      { palabra: "Sabatino", definicion: "Perteneciente al sábado." },
      { palabra: "Tordo", definicion: "Torpe, tonto." },
      { palabra: "Tartufo", definicion: "Torpe, tonto." },
      {
        palabra: "Andoba",
        definicion: "Fulano. Persona cualquiera que no se nombra.",
      },
      { palabra: "Filfa", definicion: "Mentira, engaño, noticia falsa." },
      {
        palabra: "Opíparo",
        definicion: "Referido a comida. Que es abundante y espléndida.",
      },
      {
        palabra: "Desquijarar",
        definicion:
          "Dislocar la articulación de la boca de una persona. (de la risa)",
      },
      { palabra: "Mastuerzo", definicion: "Majadero, necio, torpe." },
      {
        palabra: "Pertinacia",
        definicion: "Cualidad de la persona o cosa que es pertinaz.",
      },
      {
        palabra: "Pertinaz",
        definicion: "Duradero, pertinente, obstinado, terco, contumaz.",
      },
      {
        palabra: "Verdad factual",
        definicion:
          "Una verdad factualmente refutable, en el sentido que puede ser siempre desmentida por ulteriores investigaciones o experiencias empíricas que conduzcan a determinar nuevos hechos o elemenentos.",
      },
      {
        palabra: "Verdad lógica",
        definicion:
          "También verdad matemática es una fórmula bien formada de un lenguaje formal que es verdadera bajo todas las intrepretaciones de los componentes.",
      },
      {
        palabra: "Lógica formal",
        definicion:
          "Trata de encontrar el método correcto para derivar una verdad a partir de otra. Lo que le interesa a la lógica formal es asegurar que el paso de las premisas a la conclusión esté bien fundamentado. (Apartir de argumentos verdaderos dados (premisas) -> juicio nuevo verdadero). Campo de ciencias exactas(matemáticas, intrepretación jurídicas, mecánica).",
      },
      {
        palabra: "Lógica material",
        definicion:
          "Trata de dirimir la verdad de los términos y propopsiciones de un argumento. La consideración de si los argumentos son reales o no debe conducir a una verdad material, una conclusión que sea concordante con la realidad.",
      },
      { palabra: "Obseder", definicion: "Obsesionar" },
      {
        palabra: "Risum teneatis",
        definicion: "Latín: 'Hay que aguantar la carcajada'.",
      },
      {
        palabra: "Desasnar",
        definicion:
          "Educar a una persona para que pierda su rudeza y tosquedad.",
      },
      {
        palabra: "Hipergamia",
        definicion:
          "Es el acto de buscar pareja o cónyuge de mejor nivel socioeconómico, o casta social que uno mismo.",
      },
      {
        palabra: "Disonancia cognitiva",
        definicion:
          "Tensión o desarmonía interna del sistema de ideas, creencias y emociones (cogniciones) que percibe una persona que tiene al mismo tiempo dos pensamientos que están en conflicto",
      },
      {
        palabra: "Estragar",
        definicion:
          "Descomponer físicamente algo. / Causar estragos en determinada cosa.",
      },
      { palabra: "Gaznápiro", definicion: "Tonto, torpe." },
      {
        palabra: "Plan hipodámico, trazado en damero",
        definicion:
          "Aquel que organiza una ciudad mediante el diseño de sus calles en ángulo recto creando manzanas rectangulares",
      },
      {
        palabra: "Quandoque bonus dormitat Homerus",
        definicion:
          "Latín: De vez en cuando incluso el gran Homero se despista.",
      },
      {
        palabra: "Poliomelisis",
        definicion: "Enfermedad en la médula espinal.",
      },
      { palabra: "Debelar", definicion: "Vencer por las armas al enemigo." },
      {
        palabra: "Subusmir",
        definicion:
          "Incluir algo como coponente en una síntesis o clasificación más amplia. / Considerar algo como parte de un conjunto más amplio o como caso particular sometido a un principio o norma general.",
      },
      {
        palabra: "Lenocinio",
        definicion:
          "Casa, inmueble o domicilio en el que se ejerce la prostitución.",
      },
      { palabra: "Desventrar", definicion: "Destripar" },
      { palabra: "Perorar", definicion: "Pronunciar un discurso." },
      { palabra: "Noli me tangere", definicion: "Latín: No me toques" },
      {
        palabra: "Leontina",
        definicion: "Cadena colgante para sujetar el reloj de bolsillo.",
      },
      { palabra: "Miramelindo", definicion: "Planta de flores decorativas." },
      { palabra: "Corcova", definicion: "Corvatura de la columna vertebral." },
      {
        palabra: "Befa",
        definicion: "Burla grosera cuya finalidad es ofensiva.",
      },
      {
        palabra: "Instilar",
        definicion:
          "Verter un líquido gota a gota. / Infundir o engendrar una idea o sentimiento de modo sutil.",
      },
      {
        palabra: "Fosfatina",
        definicion: "Polvo que se usaba para hacer papillas.",
      },
      {
        palabra: "Capitoste",
        definicion: "Persona de influencia, mando y poder.",
      },
      {
        palabra: "Cenáculo",
        definicion:
          "Reunión de pocas personas con las mismas ideas e intereses. / Sala en que Jesús celebró su última cena.",
      },
      {
        palabra: "Montante",
        definicion: "Pieza que sostiene una construcción.",
      },
      { palabra: "Galipandria", definicion: "Resfriado, constipado." },
      {
        palabra: "Eutrapelia",
        definicion:
          "Virtud que modera el exceso de las diversiones o entretenimientos. / Donaire o jocosidad urbana e inofensiva. / Discurso, juego u ocupación inocente que se toma por vía de recreación honesta con templanza.",
      },
      {
        palabra: "Obstetricia",
        definicion:
          "Parte de la medicina que se ocupa del embarazo, parto, etc.",
      },
      { palabra: "Abolsado", definicion: "Que hace o forma bolsas." },
      { palabra: "Gabán", definicion: "Especie de abrigo." },
      {
        palabra: "Rubicundo",
        definicion:
          "Que es de color rubio tirando a rojo. / Pelo que tiende a colorado.",
      },
      {
        palabra: "Heterocromía",
        definicion:
          "Anomalía en la que el color de los iris de cada ojo son diferentes.",
      },
      { palabra: "Birlibirloque", definicion: "Locución: 'por arte de magia'" },
      {
        palabra: "Mondo",
        definicion:
          "Limpio de cosas superfluas. / Que carece de algo, especialmente de pelo o dinero.",
      },
      {
        palabra: "Expedito",
        definicion:
          "Que carece de obstáculos. / Que habla o actúa sin trabas o ataduras.",
      },
      {
        palabra: "Desairar",
        definicion: "Desatender, despreciar, menospreciar.",
      },
      { palabra: "Inapetencia", definicion: "Falta de apetito." },
      { palabra: "Úrico", definicion: "De la orina." },
      {
        palabra: "Hispania citerior",
        definicion:
          "Zona del levante peninsular de Murcia a Cataluña en tiempos de la Rep. Romana.",
      },
      {
        palabra: "Hispania ulterior",
        definicion: "Zona sur de la peninsula en tiempos de la Rep. Romana",
      },
      { palabra: "Dispepsia, pirosis", definicion: "Ardentía, flatos, etc." },
      {
        palabra: "Fementido",
        definicion:
          "Que no tiene palabra ni fe. / Que es engañoso o falso, trapcero.",
      },
      {
        palabra: "Sinapismo",
        definicion:
          "Remedio o solución para estimular a alguien. / Remido tópico hecho con mostaza.",
      },
      {
        palabra: "Leonino",
        definicion:
          "Que es injusto y abusivo por favorecer a una de las dos partes. / Relacionado con el león.",
      },
      { palabra: "Congruo", definicion: "Congruente, coherente." },
      { palabra: "In púribus", definicion: "Latín: Desnudo completamente." },
      {
        palabra: "In puris naturálibus",
        definicion: "Latín: En estado puro natural",
      },
      {
        palabra: "Abrojos",
        definicion: "Sufrimientos, dificultades. / Malas hierbas.",
      },
      {
        palabra: "A quo",
        definicion:
          "A partir del cual. Desde el cual. Que marca el principio de un periodo de tiempo, un proceso, etc...'552 es el año a quo de esta obra'",
      },
      {
        palabra: "Ad quem",
        definicion:
          "Hasta el cual. Que marca el final de un proceso o un periodo. '552 es el año ad quem de esta obra'",
      },
      { palabra: "Recamar", definicion: "Bordar con realces." },
      { palabra: "Jocundo", definicion: "Agradable, ameno, apacible." },
      {
        palabra: "Trebejo",
        definicion: "Utensilio, instrumento. / Pieza del ajedrez.",
      },
      {
        palabra: "Sensorio",
        definicion: "Centro común de todas las sensaciones en un organismo.",
      },
      { palabra: "Sidéreo", definicion: "Sideral." },
      {
        palabra: "Vacar",
        definicion:
          "Cesar a una persona por un tiempo en sus negocios o trabajos habituales. / Quedar un empleo sin alguien que lo desempeñe.",
      },
      { palabra: "Adehala", definicion: "Gratificación, propina." },
      {
        palabra: "Légamo",
        definicion:
          "Barro pegajoso que se forma en el suelo con el agua de la lluvia o donde ha habido circunstancialmente agua estancada.",
      },
      {
        palabra: "Lacustre",
        definicion:
          "Del lago o relacionado con él. / Animal o planta que tiene como habitat los lagos o sus orillas.",
      },
      {
        palabra: "Cinglar",
        definicion: "Hacer navegar bote, canoa, etc., con un remo.",
      },
      {
        palabra: "Puericia",
        definicion:
          "Periodo de vida de un persona comprendida entrea la infancia y la adolescencia (desde los 7 a los 14 años).",
      },
      { palabra: "Filiar", definicion: "Fichar. Afiliar." },
      {
        palabra: "Hipogeo",
        definicion:
          "Que se desarrolla bajo el suelo. / Construcción subterránea de civilizaciones antiguas.",
      },
      {
        palabra: "Agitprop",
        definicion:
          "Estrategia política de tendencia comunista difundida a través del arte y la literatura.",
      },
      {
        palabra: "Licuefaccion",
        definicion: "Licuación, licuarse, hacerse de sólido a líquido.",
      },
      {
        palabra: "Guirigay",
        definicion:
          "Lenguaje incomprensible. / Griterío, confusión de varias personas hablando sin orden.",
      },
      { palabra: "Cinocéfalo", definicion: "Cabeza de perro." },
      { palabra: "Álalo", definicion: "Mudo, que carece de habla." },
      { palabra: "Espiritado", definicion: "Excesivamente delgado." },
      {
        palabra: "Subitáneo",
        definicion: "Repetino, que ocurre de forma súbita.",
      },
      { palabra: "Centuplicar", definicion: "Multiplicar por cien." },
      {
        palabra: "Dintorno",
        definicion: "Delineación de una figura dentro de su contorno.",
      },
      { palabra: "Amencia", definicion: "Falta de inteligencia, idiotez." },
      {
        palabra: "Semoviente",
        definicion:
          "Que se mueve por sí mismo, se aplica especialmente al ganado.",
      },
      { palabra: "Vagido", definicion: "Llanto o gemido de un recién nacido." },
      { palabra: "Delictuoso", definicion: "Delictivo." },
      {
        palabra: "Dilacerar",
        definicion: "Desgarrar. / Perjudicar moralmente a alguien.",
      },
      { palabra: "Berrendo", definicion: "Antílope americano." },
      { palabra: "Capriforme", definicion: "Con forma de cabra." },
      {
        palabra: "Animálculo",
        definicion: "Animal que sólo se ve con microscopio",
      },
      { palabra: "Testuz", definicion: "Frente del toro." },
      {
        palabra: "Pesantez",
        definicion: "Cualidad de lo que es o resulta pesado.",
      },
      {
        palabra: "Yerto",
        definicion:
          "Que está rígido o inmóvil, especialmente si es a causa de la muerte, el frío o una emoción fuerte.",
      },
      {
        palabra: "Légamo",
        definicion:
          "Barro pegajoso que se forma en el suelo por lluvia o agua estancada.",
      },
      {
        palabra: "Bóvido",
        definicion:
          "Familia de los animales con cuertons: toros, cabras, gacelas, ñu, etc..",
      },
      {
        palabra: "Magufo",
        definicion:
          "Homeópata, astrologo, ufólogo y los practicantes de pseudociencia.",
      },
      {
        palabra: "Telegenia",
        definicion:
          "Cualidad de una persona para salir favorecido y causar efecto agradable en televisión.",
      },
      { palabra: "Lupanaria", definicion: "Latín: Prostíbulos" },
      { palabra: "Blasé", definicion: "Francés: Hastiado, desganado." },
      { palabra: "Tafanario", definicion: "Nalgas, culo, trasero." },
      { palabra: "Írrito", definicion: "Nulo, sin valor alguno." },
      { palabra: "Melopea", definicion: "Canto monótono." },
      { palabra: "Mucilaginoso", definicion: "Que tiene mucílago." },
      {
        palabra: "Mucílago",
        definicion: "Sustancia orgánica de textura viscosa",
      },
      {
        palabra: "Sístole",
        definicion: "Contracción, movimiento al exterior.",
      },
      {
        palabra: "Diástole",
        definicion: "Relajación, movimiento sanguíneo al interior.",
      },
      {
        palabra: "Epónimo",
        definicion:
          "Es una persona o lugar cuyo nombre es usado para nombrar a un pueblo, concepto u objeto de cualquier clase",
      },
      { palabra: "Reblar", definicion: "Retroceder." },
      {
        palabra: "Admonitorio",
        definicion:
          "Que sirve para amonestar o tiene caracter de amonestación.",
      },
      {
        palabra: "Himplar",
        definicion: "Emitir ( la pantera o el ocelote ) su voz.",
      },
      { palabra: "Batahola", definicion: "Bulla o ruido grande." },
      {
        palabra: "Pari passu",
        definicion:
          "Latín: 'Con igual paso' se traduce como 'en igualdad de condiciones'",
      },
      {
        palabra: "Demediar",
        definicion:
          "Usar una cosa hasta que pierda la mitad de su valor. / Promediar, dividir las cosas en partes iguales.",
      },
      {
        palabra: "Mitocondria",
        definicion:
          "Orgánulo citoplasmático de las células con función principal función la producción de energía mediante el consumo de oxígeno.",
      },
      {
        palabra: "Cérvidos",
        definicion: "Familia de mamíferos que incluye a los ciervos o venados.",
      },
      { palabra: "Torvo", definicion: "Que tiene aspecto fiero y airado." },
      {
        palabra: "Socapa",
        definicion:
          "Pretexto que sirve para ocultar la intención de conseguir una cosa.",
      },
      {
        palabra: "Calambur",
        definicion:
          "Juego de palabras basándose en la homonimia, en la paronimia o la en la polisémia. Ej: 'plata no es'.",
      },
      { palabra: "Aventar", definicion: "Echar algo al viento." },
      { palabra: "Encocorar", definicion: "Crispar, molestar mucho." },
      {
        palabra: "Conclusivo",
        definicion:
          "Que finaliza con lógica y argumentativamente una cosa. Concluyente.",
      },
      { palabra: "Poliarquía", definicion: "Gobierno de muchos." },
      {
        palabra: "Dilución",
        definicion: "Pérdida de sustancia, acción de diluirse.",
      },
      { palabra: "Hato", definicion: "Conjunto de ganado de mayor o menor." },
      {
        palabra: "Embaír",
        definicion: "Distraer, entretener, engañar, hacer creer.",
      },
      {
        palabra: "Visaje",
        definicion:
          "Gesto exagerado del rostro, especialmente por hábito o por enfermedad.",
      },
      {
        palabra: "Socapa",
        definicion:
          "Pretexto que sirve para ocultar la intención de conseguir una cosa.",
      },
      { palabra: "Facundo", definicion: "Fácil y desenvuelto en el hablar." },
      {
        palabra: "Marfuz",
        definicion: "Repudiado, desechado. / Falaz, mentiroso.",
      },
      {
        palabra: "Fisiparidad",
        definicion:
          "Modo de reproducción consistente en dividir el cuerpo en dos parte las cuales se convierten en un nuevo ser.",
      },
      {
        palabra: "Fisíparo",
        definicion: "Animal que se reproduce por fisiparidad.",
      },
      { palabra: "Vestiglio", definicion: "Monstruo horrible y fantástico." },
      {
        palabra: "Albricias",
        definicion:
          "Regalo que se daba al primero que era portador de una buena noticia.",
      },
      { palabra: "Eremítico", definicion: "Del ermitaño o relativo a ellos." },
      { palabra: "Belitre", definicion: "Pícaro de poca estimación." },
      {
        palabra: "Horcajadura",
        definicion:
          "Ángulo que forman las dos piernas en su nacimiento. / Entrepierna.",
      },
      { palabra: "Cotufa", definicion: "Golosina." },
      {
        palabra: "Solícito",
        definicion:
          "Que pone atención y diligencia y amabiliad al entender o servir a alguien.",
      },
      {
        palabra: "Palafrén",
        definicion: "Caballo manso que solían montar las damas.",
      },
      {
        palabra: "Pelafustán",
        definicion: "Hargán despreciable e insignificante.",
      },
      {
        palabra: "Endríago",
        definicion: "Personaje literario mezcla entre hombre, hidra y dragón.",
      },
      { palabra: "Guedeja", definicion: "Melena." },
      { palabra: "Enhilar", definicion: "Poner en orden." },
      {
        palabra: "Ordenación",
        definicion: "Conjunto de normas, leyes o reglas.",
      },
      {
        palabra: "Contrafactual",
        definicion:
          "Acontecimiento que no ha sucedido nunca pero que podría haber ocurrido.",
      },
      {
        palabra: "Lítote",
        definicion:
          "Figura retórica que consiste en no expresar todo lo que se quiere dar a entender sin por ello deje de comprenderse la intención del hablante.",
      },
      {
        palabra: "Enfebrecido",
        definicion: "Que está muy exaltado o entusiasmado.",
      },
      {
        palabra: "Bausán",
        definicion:
          "Figura de paja para ser embestida a modo de combate. / Persona boba, simple, necia.",
      },
      {
        palabra: "Prorrumpir",
        definicion:
          "Proferir una voz repentinamente, suspiro, lamento u otra demostración de dolor o pasión vehemente. / Salir algo con ímpetu.",
      },
      { palabra: "Trastulo", definicion: "Pasatiempo, juguete." },
      { palabra: "Cotufa", definicion: "Golosina." },
      {
        palabra: "Abarraganarse",
        definicion: "Amancebarse, hacer vida en pareja sin estar casados.",
      },
      { palabra: "Magín", definicion: "Ingenio, inteligencia, imaginación." },
      { palabra: "Vocable", definicion: "Vocablo" },
      { palabra: "Refacción", definicion: "Compostura o reparación." },
      { palabra: "Jayán", definicion: "Persona robusta y de mucha fuerza." },
      {
        palabra: "Parusía",
        definicion: "Advenimiento glorioso de Jesús al final de los tiempos.",
      },
      { palabra: "Guarismos", definicion: "Números." },
      { palabra: "Asíntota", definicion: "Números." },
      { palabra: "Descuidero", definicion: "Ratero, ladrón." },
      {
        palabra: "Monomanía",
        definicion:
          "Obsesión por una idea determinada y recurrente. / Manía, paranoia.",
      },
      {
        palabra: "Palúdico",
        definicion: "De los terrenos pantanosos o relacionado con ellos.",
      },
      {
        palabra: "Circunfuso",
        definicion:
          "Difundido o extendido alrededor. (higiene circunfusa: temperatura, aire mefítico, etc..)",
      },
      { palabra: "Lipemanía", definicion: "Melancolía depresiva." },
      { palabra: "Tremer", definicion: "Temblar." },
      {
        palabra: "Zarandajo",
        definicion:
          "Despreciable. / Vestido estrafalario. / Cosa sin valor. / Desperdicio de las reses.",
      },
      { palabra: "Homúnculo", definicion: "Hombre pequeño y débil." },
      { palabra: "Cerebro positrónico", definicion: "CPU de Androides." },
      { palabra: "Alfanje", definicion: "Sable curvado." },
      {
        palabra: "Precedencia",
        definicion:
          "Circunstancia de preceder a una cosa o persona en el tiempo. Anterioridad, prioridad.",
      },
      {
        palabra: "Reluctante",
        definicion: "Que muestra resistencia. Desobediente, reacio, opuesto.",
      },
      { palabra: "Anómico", definicion: "Falto de normas." },
      { palabra: "Pastueño", definicion: "Dócil, que embieste suavemente." },
      {
        palabra: "Vaguido",
        definicion: "Turbado, o que padece vahídos. / Desvanecimiento.",
      },
      {
        palabra: "Vahído",
        definicion:
          "Desvanecimiento, turbación breve del sentido por alguna indisposición.",
      },
      {
        palabra: "Disciplinante",
        definicion:
          "Penitente que se mortifica con disciplinas./ Intrumento para azotar.",
      },
      { palabra: "Hidrópico", definicion: "Insaciable. / Sediento en exceso." },
      {
        palabra: "Bergante",
        definicion:
          "Granuja, sinvergüenza, falta de escrúpulos y, en ocasiones, delicuente.",
      },
      {
        palabra: "Astringente",
        definicion:
          "Que produce desecación y contracción de los tejidos del vientre y dificulta la evacuación de los excrementos. Ej: la manzana.",
      },
      {
        palabra: "Falsía",
        definicion: "Falsedad, mentira, infidelidad, hipocresía.",
      },
      { palabra: "Embeleco", definicion: "Engaño, mentira." },
      { palabra: "Bureo", definicion: "Diversión, juerga." },
      { palabra: "Narigante", definicion: "Narigudo." },
      {
        palabra: "Derrengado",
        definicion:
          "Que está torcido. / Persona que está muy cansada. Reventado. Baldado. Fatigado.",
      },
      {
        palabra: "Mohíno",
        definicion:
          "Que está triste, abatido, disgustado, triste, melancólico.",
      },
      { palabra: "Ganapán", definicion: "Hombre rudo y tosco." },
      {
        palabra: "Rucio",
        definicion: "Canoso, de color pardo claro, blanquecino./ Asno, burro.",
      },
      { palabra: "Albar", definicion: "Blanco, claro. albo." },
      { palabra: "Albo/a", definicion: "Blanco. / Amanecer." },
      { palabra: "Esquilmar", definicion: "Empobrecer, agotar." },
      { palabra: "Trasijado", definicion: "Delgado, flaco." },
      { palabra: "Mascullar", definicion: "Hablar entre dientes." },
      { palabra: "Abrogar", definicion: "Abolir, revocar." },
      {
        palabra: "Adelfopoiesis",
        definicion:
          "Ceremonia de iglesias cristianas de la Edad Media para unir dos personas del mismo sexo.",
      },
      {
        palabra: "Emporcarse",
        definicion: "Emporcar, enmugrecer, ensuciar, macular, manchar.",
      },
      {
        palabra: "Tórrido",
        definicion: "Caliente, ardiente, sofocante, abrasador.",
      },
      { palabra: "Filiforme", definicion: "Que tiene forma de hilo." },
      {
        palabra: "Quincalla",
        definicion: "Conjunto de objetos de metal de poco valor.",
      },
      {
        palabra: "Astroso",
        definicion:
          "Persona que presenta un aspecto descuidado, va mal vestido y sucio.",
      },
      { palabra: "Plurimorfa", definicion: "Muchas formas." },
      { palabra: "Clerigalla", definicion: "Clero ( despectivo )" },
      { palabra: "Bálano", definicion: "Glande, cabeza del pene." },
      {
        palabra: "Extravasarse",
        definicion: "Salirse un líquido de su conducto normal.",
      },
      { palabra: "Óbolo", definicion: "Moneda antigua griega de plata." },
      {
        palabra: "Diorama",
        definicion:
          "Maqueta que muestra figuras humanas, vehículos, animales o incluso seres imaginarios.",
      },
      {
        palabra: "Columbrar",
        definicion: "Suponer, entrever, conjeturar, etc.",
      },
      { palabra: "Ojizarco", definicion: "De ojos azules." },
      { palabra: "Catalepsia", definicion: "Inmovilidad, rigidez." },
      {
        palabra: "Pedomorfismo",
        definicion:
          "Prolongación de rasgos juveniles en la edad adulta ( Errejón )",
      },
      { palabra: "Ansiógeno", definicion: "Que genera ansiedad." },
      { palabra: "Híspido", definicion: "Pelo que es áspero, duro y tieso." },
      {
        palabra: "Post quem",
        definicion:
          "Es la fecha más antigua o lejana de la aparaciión de un objeto o fenómeno.",
      },
      {
        palabra: "Ante quem",
        definicion:
          "Es la fecha más nueva o cercana de la apacición de un objeto o fenómeno.",
      },
      { palabra: "Dispeptico", definicion: "De la dispepsia. Indigesto" },
      {
        palabra: "Intonso",
        definicion:
          "Que no tiene el pelo cortado. / Libro que está encuadernado sin cortar los pliegos.",
      },
      {
        palabra: "Fisípedos",
        definicion:
          "Animales carnívoros que tiene los dedos de sus patas separados( perros, hienas, lobos, tigres, leones)",
      },
      {
        palabra: "Receptación",
        definicion: "Oculatción o encubrimiento de un delicuente o delito.",
      },
      { palabra: "Borborigmo", definicion: "Ruido estomacal" },
      { palabra: "Borboritar", definicion: "Borbotar, borbollar." },
      {
        palabra: "Urofilia",
        definicion: "Parafilia sexual relacionada con la orina.",
      },
      {
        palabra: "Clismafilia",
        definicion: "Parafilia sexual relacionada con poner enemas",
      },
      {
        palabra: "Salacidad",
        definicion: "Inclinación vehemente a la lascivia.",
      },
      {
        palabra: "Pilífero",
        definicion: "Botanica: se aplica a órgano que tiene pelos.",
      },
      {
        palabra: "Hetaira",
        definicion: "Hetera, prostituta de lujo en la antigua grecia",
      },
      {
        palabra: "Incunable",
        definicion: "Libro que ha sido impreso antes del año 1500",
      },
      {
        palabra: "Tomografía",
        definicion:
          "TAC. inserción en tubo para realizar una exploración y diagnosticar una enfermedad",
      },
      {
        palabra: "Querulantes",
        definicion: "Persona que se queja o querella.",
      },
      { palabra: "Diaforesis", definicion: "Sudoración abundante." },
      {
        palabra: "Inexorable",
        definicion:
          "Que no se puede evitar o detener. Ineludible. / Inflexible, duro. implacable. ",
      },
      {
        palabra: "Orillar",
        definicion:
          "Dejar apartada o al margen alguna cosa. / Reforzar los extremos de una tela o prenda. / Resolver, concluir, arreglar.",
      },
      { palabra: "Cacumen", definicion: "Inteligencia, agudeza, perspicacia." },
      {
        palabra: "Apotropaico",
        definicion: "Inteligencia, agudeza, perspicacia.",
      },
      {
        palabra: "Concento",
        definicion: "Inteligencia, agudeza, perspicacia.",
      },
      {
        palabra: "Baldaquín",
        definicion:
          "Cubierta sostenida por columnas construida con materiales valiosos.",
      },
      {
        palabra: "Linajudo",
        definicion: "Persona que pertence a un linaje noble.",
      },
      { palabra: "Avefría", definicion: "Persona de poco espíritu y viveza." },
      {
        palabra: "Emulgente",
        definicion:
          "Que conduce la sangre a los riñones. Emulsionante. Que facilita la mezcla.",
      },
      { palabra: "Ímprobo", definicion: "Que es muy intenso y continudo." },
      {
        palabra: "Acibarar",
        definicion: "Causar amargura con algún pesar o disgusto.",
      },
      {
        palabra: "Pancista",
        definicion:
          "Persona que se acomoda fácilmente a algo, o a las cosas en general.",
      },
      { palabra: "Empellón", definicion: "Empujón fuerte dado por el cuerpo." },
      {
        palabra: "Irrigar",
        definicion:
          "Conducir las aguas a las tierras de labro mediante canales, acequias, etc.",
      },
      {
        palabra: "Hogaño",
        definicion: "De este año o en esta época. Oposición a antaño.",
      },
      {
        palabra: "Bonhomía",
        definicion: "De este año o en esta época. Oposición a antaño.",
      },
      { palabra: "Ad interim", definicion: "Latín: Mientras tanto, en tanto." },
      { palabra: "Diégesis", definicion: "Latín: Mientras tanto, en tanto." },
      {
        palabra: "Etiología",
        definicion: "Estudio sobre las causas de las cosas.",
      },
      {
        palabra: "Escolio",
        definicion: "Nota que se pone a un texto para explicarlo.",
      },
      { palabra: "Cimbrar", definicion: "Mover el cuerpo con garbo y gracia." },
      { palabra: "Gorrinada", definicion: "Guarrada." },
      {
        palabra: "Asperjar",
        definicion: "Hisopear, rociar. (esparcir gotas menudas)",
      },
      { palabra: "Innominado", definicion: "Que no tiene nombre." },
      {
        palabra: "Paidocracia",
        definicion: "Gobierno en manos de los niños o jóvenes",
      },
      {
        palabra: "Gerontocracia",
        definicion: "Gobierno en manos de los ancianos.",
      },
      {
        palabra: "Mentideros",
        definicion:
          "Sitio donde la gente se reúne para conversar o hacer tertulia. / Sitio donde concurre la gente ociosa para chismorrear.",
      },
      { palabra: "Turbamulta", definicion: "Multitud confusa y desordenada." },
      {
        palabra: "Recidiva",
        definicion:
          "Algo que reaparece o reverdece. Se suele usar aplicado a las enfermedades ( recidivantes ) que vuelven a aparecer.",
      },
      { palabra: "Zozobra", definicion: "Inquietud." },
      { palabra: "Ocluir", definicion: "Tapar un conducto." },
      { palabra: "Atópico", definicion: "Que no tiene lugar preciso." },
      {
        palabra: "Concurdáneo",
        definicion: "Borracho que se suele reunir con otros para embriagarse.",
      },
      { palabra: "Moyatoso", definicion: "Borracho bebedor de vino." },
      { palabra: "Demodé", definicion: "Pasado de moda." },
      { palabra: "Pluviosidad", definicion: "Lluvia." },
      {
        palabra: "Vespasiana",
        definicion:
          "Urinario público. Se construyó por el emperador Vespasino que volvió a impulsar el impuesto a la orina creado por Nerón.",
      },
      {
        palabra: "Tabuco",
        definicion: "Habitación pequeña. Aposento pequeño.",
      },
      {
        palabra: "In pectore",
        definicion:
          "Nombre de alguien para un cargo que ya ha sido elegido pero su nombre no se ha hecho público.",
      },
      {
        palabra: "Ex profeso",
        definicion: "A propósito, con intención, deliberadamente",
      },
      {
        palabra: "Sustine et abstine",
        definicion: "Soporta y renuncia. Máxima de los estoicos",
      },
      {
        palabra: "Yacija",
        definicion:
          "Cama sencilla y pobre. / Lugar donde está enterrado un cadáver.",
      },
      {
        palabra: "Incoativo",
        definicion:
          "Que designa o denota el principio de una cosa o de una acción progresiva.",
      },
      {
        palabra: "Apostema",
        definicion: "Absceso de pus que supura.",
      },
      {
        palabra: "Principar",
        definicion: "Empezar o comenzar.",
      },
      {
        palabra: "Requiebro",
        definicion: "Palabra o expresión de admiracióon, halago o elogio.",
      },
      {
        palabra: "Brujulear",
        definicion: "Ir de un sitio a otro sin orientación o meta.",
      },
      {
        palabra: "Aparencial",
        definicion: "Que sólo existe aparentemente.",
      },
      {
        palabra: "Refitolero",
        definicion:
          "Que carece de naturalidad y sencillez en la manera de hablar o de comportarse.",
      },
      {
        palabra: "Anfibología",
        definicion: "Doble sentido que puede contener una palabra.",
      },
      {
        palabra: "Francachela",
        definicion:
          "Reunión de varias personas para comer, beber y divertirse desordenadamente.",
      },
      {
        palabra: "Ralo",
        definicion: "Que es poco poblazo ( cabello )",
      },
      {
        palabra: "Ad maiorem Baeticae gloriam",
        definicion: "Para mayor gloria de Andalucía.",
      },
      {
        palabra: "Nadería",
        definicion: "Cosa o dicho de poco valor.",
      },
      {
        palabra: "Paidocracia",
        definicion: "Cosa o dicho de poco valor.",
      },
      {
        palabra: "Virago",
        definicion: "Mujer de aspeto varonil.",
      },
      {
        palabra: "Fragosidad",
        definicion: "Terreno lleno de aspereza y maleza.",
      },
      {
        palabra: "Lazareto",
        definicion: "Hospital donde se tratan enfermedades infecciosas.",
      },
      {
        palabra: "Amelcochar",
        definicion: "Acaramelarse, derretirse, amorosamente.",
      },
      {
        palabra: "¡Pardiez!",
        definicion: "Expresión usada para indicar sorpresa o admiración.",
      },
      {
        palabra: "Malum quidem nullum esse sine aliquo bono",
        definicion: "No hay ningún mal sin algo bueno.",
      },
      {
        palabra: "Impasse",
        definicion: "Callejón sin salida.",
      },
      {
        palabra: "Putrefactivo",
        definicion: "Que causa putrefacción.",
      },
      {
        palabra: "Facundia",
        definicion: "Abundancia y facilidad de palabra",
      },
      {
        palabra: "Locuaz",
        definicion: "Verboso, hablador, charlatán",
      },
      {
        palabra: "Anoxia",
        definicion: "Falta o disminución de oxígeno en las células.",
      },
      {
        palabra: "Atribular",
        definicion: "Causar atribulación (pena, disgusto, aflicción).",
      },
      {
        palabra: "Avizorar",
        definicion: "Mirar con atención, acechar, observar, atisbar.",
      },
      {
        palabra: "Angosto",
        definicion: "Estrecho, reducido, escaso.",
      },
      {
        palabra: "Pláceme",
        definicion: "Enhorabuena, congratulación, felicitación.",
      },
      {
        palabra: "Enteco",
        definicion: "Flaco, débil, enfermizo.",
      },
    ];
  },
]);
