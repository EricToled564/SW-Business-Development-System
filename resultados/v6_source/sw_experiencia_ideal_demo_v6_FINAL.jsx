import { useState } from "react";

const BRAND = { black: "#1D1D1B", red: "#E6282A", white: "#FFFFFF", gray1: "#F5F5F4", gray2: "#E5E5E3", gray3: "#A8A8A6", gray4: "#6B6B68" };

// ─── 49 Sports World clubs: [nombre, tag, estado, municipio, colonia, calle, cp, lat, lng] ───
const CLUBS_RAW = [["Amores (Av. Coyoacan)","amores","CDMX","Benito Juárez","Del Valle","Av. Coyoacán #1622","",19.3654787,-99.172393],["Antara","antara","CDMX","Miguel Hidalgo","Granada","Av. Ejército Nacional","",19.4393015,-99.2023987],["Anzures","anzures","CDMX","Miguel Hidalgo","Anzures","Leibnitz #117","",19.4294612,-99.1779442],["Cumbres","cumbres","Nuevo León","Monterrey","Bosques de las Cumbres","Paseo de los Leones #3228","",25.7279816,-100.3954653],["Hermosillo","hermosillo","Sonora","Hermosillo","Bachoco","Blvd. José María Morelos 355","83148",29.1209068,-110.948964],["La Rioja","la-rioja","Jalisco","Tlajomulco de Zúñiga","La Rioja","López Mateos #7000","",20.5705507,-103.4568064],["Plaza Mayor","leon","Guanajuato","León","Valle del Campestre","Blvd. Juan Alonso de Torres #2002","",21.156274,-101.695017],["Pabellón Bosques","pabellon-bosques","CDMX","Cuajimalpa","Lomas de Vista Hermosa","Av. Prolongación Bosques de Reforma #1813","",19.382277,-99.2676637],["Las Ánimas","puebla","Puebla","Puebla","Las Ánimas","Diagonal 39 Pte. #3515","",19.0435536,-98.2345772],["Reforma Rhin","reforma","CDMX","Cuauhtémoc","—","Paseo de la Reforma #243","",19.429759,-99.1638454],["Roma","roma","CDMX","Cuauhtémoc","Roma Norte","Av. Monterrey #133","",19.4161418,-99.1642424],["Sonata","sonata","Puebla","San Andrés Cholula","Lomas de Angelópolis II","Paseo Sinfonía #4","",18.9937027,-98.2779125],["Triángulo Tecamachalco","triangulo-tecamachalco","Estado de México","Huixquilucan","Tecamachalco","Av. de los Bosques Lotes 1–16","",19.4111548,-99.2508061],["Plaza Sol","veracruz","Veracruz","Boca del Río","Mocambo","Blvd. Manuel Ávila Camacho #5256","",19.1405101,-96.1028237],["Condesa","condesa","CDMX","Cuauhtémoc","Hipódromo Condesa","Sonora #180","",19.4135251,-99.1677298],["Félix Cuevas","felix-cuevas","CDMX","Benito Juárez","Tlacoquemécatl","Av. Félix Cuevas #374","",19.3731237,-99.1730279],["Altavista","altavista","CDMX","Álvaro Obregón","San Ángel","Blvd. Adolfo López Mateos #380","",19.347455948346873,-99.20354015],["Satélite","satelite","Estado de México","Naucalpan","Boulevares","Blvd. Manuel Ávila Camacho #3228-9","",19.4975684,-99.2379087],["Patriotismo","patriotismo","CDMX","Benito Juárez","San Pedro de los Pinos","Patriotismo #229","",19.396114,-99.1808769],["Espacio Interlomas","interlomas","Estado de México","Huixquilucan","Jesús del Monte","Av. Jesús del Monte #37","",19.3951913,-99.2892166],["Metepec","metepec","Estado de México","Metepec","Coaxustenco","Av. Leona Vicario #501","",19.2608094,-99.6138447],["Oasis Coyoacan","miguel-angel-de-quevedo","CDMX","Coyoacán","Romero de Terreros","Av. Universidad #1778","",19.3426373,-99.1464945],["Obrero Mundial","obrero-mundial","CDMX","Benito Juárez","Narvarte","Obrero Mundial #196","",19.4019033,-99.1596941],["Palmas","palmas","CDMX","Miguel Hidalgo","Lomas de Chapultepec","Av. Paseo de las Palmas #525","",19.430221,-99.212727],["Acora Pedregal","pedregal","CDMX","Coyoacán","Jardines del Pedregal","Ladera #16","",19.3054947,-99.2025277],["San Jeronimo","san-jeronimo","CDMX","Magdalena Contreras","San Jerónimo Lídice","Blvd. Adolfo Ruiz Cortines #3307","",19.3246038,-99.2162598],["Santa Fe","santa-fe","CDMX","Cuajimalpa","Santa Fe","Vasco de Quiroga #3880","",19.3614516,-99.277659],["Patio Universidad","universidad","CDMX","Benito Juárez","Xoco","Av. Universidad #1046","3330",19.3658033,-99.1673465],["Xola","xola","CDMX","Benito Juárez","Del Valle","Av. Juárez 202","3100",19.3970983,-99.1660815],["Zona Esmeralda","zona-esmeralda","Estado de México","Atizapán","Valle Escondido","Vía Dr. Jiménez Cantú Mz A-2 Lt 3","",19.57278,-99.302142],["Torre Manacar","manacar","CDMX","Benito Juárez","Insurgentes Mixcoac","Av. Insurgentes Sur #1457","",19.3685229,-99.1811178],["Lindavista","lindavista","CDMX","Gustavo A. Madero","Capultitlán","Av. Fortuna #334","",19.4834707,-99.1331203],["Cabo Norte","cabo-norte","Yucatán","Mérida","—","Av. #24","",21.0591928,-89.5953549],["Portal San Ángel","barranca","CDMX","Álvaro Obregón","Los Alpes","Av. Revolución 1267","1010",19.361142,-99.189553],["Juriquilla","juriquilla","Querétaro","Querétaro","El Salitre","Anillo Vial Fray Junípero Serra 21260","76127",20.6764453,-100.4319057],["Bernardo Quintana","bernardo-quintana","Querétaro","Querétaro","Arboledas","Av. Bernardo Quintana #518","",20.6123874,-100.3828834],["Crater","crater","CDMX","Álvaro Obregón","Jardines del Pedregal","Cráter #811","",19.3163223,-99.2110617],["Patio Tlalpan","patio-tlalpan","CDMX","Tlalpan","Santa Úrsula Xitla","Av. Insurgentes Sur #4177","14420",19.2840897,-99.1766476],["Paseo Interlomas","paseo-interlomas","Estado de México","Huixquilucan","Green House","Privada #7","",19.3986468,-99.2834724],["Plaza Tlalne","tlalnepantla","Estado de México","Tlalnepantla","San Lorenzo Industrial","Sor Juana Inés de la Cruz #280","",19.5389568,-99.2045833],["Saltillo","saltillo","Coahuila","Saltillo","Ex Hacienda San José","Blvd. Eulalio Gutiérrez T. #2275","",25.4615279,-100.9502845],["Esfera","esfera-queretaro","Querétaro","Querétaro","La Granja","Autopista Celaya–Querétaro #5501","",20.57369,-100.4066119],["Plaza Almanara","torreon","Coahuila","Torreón","—","Periférico Raúl López Sánchez S/N","",25.583705,-103.4081399],["Altaria","aguascalientes","Aguascalientes","Aguascalientes","Trojes de Alonso","Blvd. A. Zacatecas Norte #849","",21.92401965,102.2921939196555],["Punto MAQ","parque-san-andres","CDMX","Coyoacán","Parque San Andrés","Av. Miguel Ángel de Quevedo #1144","",19.3425479,-99.1464584],["Nave 01 Apodaca","apodaca","Nuevo León","Apodaca","Industrial Milimex","Carretera Miguel Alemán #120","",25.7533685,-100.1971046],["Coapa","terraza-coapa","CDMX","Tlalpan","Villa Coapa","Calzada Acoxpa #610","",19.294831,-99.129631],["Plaza Cinepolis","culiacan","Sinaloa","Culiacán","Recursos Hidráulicos","Blvd. Culiacán 450 Pte.","80100",24.7991558,-107.4215631],["San Pedro","san-pedro","Nuevo León","San Pedro Garza García","Del Valle","Calz. del Valle #351","66220",25.6555376,-100.3609302]];
const CLUBS = CLUBS_RAW.map(r => ({ nombre: r[0], tag: r[1], estado: r[2], municipio: r[3], colonia: r[4], calle: r[5], cp: r[6], lat: r[7], lng: r[8] }));

// ─── Per-club catalog (amenities + adult classes + kids classes) from sw_matriz_clubes_clases_completa.xlsx ───
const CATALOG = {"lindavista":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","BODY BALANCE","BODY STEP","INDBIKE","REFORMER PILATES","MAT PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","VINYASA YOGA","ZUMBA FITNESS","ZUMBA TONING","BELLY DANCE","URBAN DANCE","DANZA AEREA","BAILE DE SALON","FULL BODY","CORE","STRETCH","POWER JUMP","FUN TRAC","POUND","KINETIC CHAIN","KINETICS BALL","KINETIC PUMP","GIMNASIA DE GRUPOS","ACUAZUMBA","FLYBOARD","STRETCH FK"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK RITMOS LATINOS NIÑOS","FK DANZA AEREA NIÑOS","FK HIP HOP NIÑOS","FK JAZZ NIÑOS","FK TKD NIÑOS"],"tiene_fitkidz":true},"condesa":{"amenidades":["Cardiovascular","Peso_Libre","IndBike"],"adultas":["BODY PUMP","BODY COMBAT","BODY ATTACK","BODY BALANCE","BODY STEP","BODY JAM","CX WORX","INDBIKE","REFORMER PILATES","MAT PILATES","TOTAL BARRE","HATHA YOGA","VINYASA YOGA","VINYASA YOGA 90","INTRINITY","ZUMBA FITNESS","CORE","STRETCH","FUN TRAC","KINETICS BALL"],"kids":[],"tiene_fitkidz":false},"obrero-mundial":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz"],"adultas":["BODY PUMP","BODY COMBAT","BODY BALANCE","BODY JAM","CX WORX","GRIT DEMO","INDBIKE","POWER CYCLING","REFORMER PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","HATHA YOGA 90","VINYASA YOGA","YOGA RESTAURATIVA","ZUMBA FITNESS","ZUMBA TONING","ZUMBA STEP","FULL BODY","CORE","STRETCH","POWER JUMP","FUN TRAC","STEP","STRONG NATION","GIMNASIA DE GRUPOS","TRAINT BOOST DEMO","ACUAZUMBA","FLYBOARD"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK RITMOS LATINOS NIÑOS","FK DANZA AEREA NIÑOS","FK HIP HOP NIÑOS","FK YOGA NIÑOS"],"tiene_fitkidz":true},"reforma":{"amenidades":["Cardiovascular","Peso_Libre","IndBike"],"adultas":["BODY PUMP","BODY COMBAT","BODY BALANCE","BODY JAM","CX WORX","GRIT DEMO","INDBIKE","POWER CYCLING","REFORMER PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","HATHA YOGA 90","VINYASA YOGA","VINYASA YOGA 90","YOGA RESTAURATIVA","ZUMBA FITNESS","ZUMBA TONING","ZUMBA STEP","FIT Y DANCE","FULL BODY","CORE","STRETCH","POWER JUMP","FUN TRAC","STEP","STRONG NATION","GIMNASIA DE GRUPOS","TRAINT BOOST DEMO","ACUAZUMBA","FLYBOARD"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK RITMOS LATINOS NIÑOS","FK DANZA AEREA NIÑOS","FK HIP HOP NIÑOS","FK YOGA NIÑOS"],"tiene_fitkidz":false},"roma":{"amenidades":["Cardiovascular","Peso_Libre","IndBike"],"adultas":["BODY PUMP","BODY COMBAT","BODY BALANCE","INDBIKE","REFORMER PILATES","MAT PILATES","BALL PILATES","TOTAL BARRE","ZUMBA FITNESS","ZUMBA TONING","DANZA AEREA","CORE","STRETCH","POWER JUMP","STEP","KINETIC CHAIN","GIMNASIA DE GRUPOS","ACUAZUMBA"],"kids":["FK DANZA AEREA NIÑOS","FK YOGA NIÑOS","KICKBOXING NINOS"],"tiene_fitkidz":false},"antara":{"amenidades":["Cardiovascular","Peso_Libre","IndBike","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","BODY BALANCE","INDBIKE","RPM","REFORMER PILATES","MAT PILATES","BALL PILATES","TOTAL BARRE","VINYASA YOGA","ZUMBA FITNESS","ZUMBA TONING","DANZA AEREA","CORE","STRETCH","POWER JUMP","STEP","KINETIC CHAIN","GIMNASIA DE GRUPOS","ACUAZUMBA"],"kids":["FK DANZA AEREA NIÑOS","FK YOGA NIÑOS","KICKBOXING NINOS"],"tiene_fitkidz":false},"anzures":{"amenidades":["Cardiovascular","Peso_Libre","IndBike","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","BODY BALANCE","INDBIKE","RPM","REFORMER PILATES","MAT PILATES","BALL PILATES","TOTAL BARRE","VINYASA YOGA","ZUMBA FITNESS","ZUMBA TONING","CORE","STRETCH","POWER JUMP","STEP","KINETIC CHAIN","GIMNASIA DE GRUPOS","ACUAZUMBA"],"kids":["FK DANZA AEREA NIÑOS","FK YOGA NIÑOS","KICKBOXING NINOS"],"tiene_fitkidz":false},"pabellon-bosques":{"amenidades":["Cardiovascular","Peso_Libre","IndBike","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY BALANCE","REFORMER PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA 90","FIT Y DANCE","CORE","STRETCH","FUN TRAC"],"kids":[],"tiene_fitkidz":false},"palmas":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","CX WORX","REFORMER PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","AE YOGA","ZUMBA FITNESS","BAILE DE SALON","CORE","STRETCH","POWER JUMP","INTERVAL","GIMNASIA DE GRUPOS"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK DANZA AEREA NIÑOS","KIDZ POWER"],"tiene_fitkidz":true},"santa-fe":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz","Cancha"],"adultas":["Muro_Escalar","BODY PUMP","BODY COMBAT","BODY BALANCE","CX WORX","INDBIKE","RPM","POWER CYCLING","REFORMER PILATES","HATHA YOGA","YOGA RESTAURATIVA","ZUMBA FITNESS","FIT Y DANCE","DANZA AEREA","CORE","POWER JUMP","FUN TRAC","STRONG NATION","GIMNASIA DE GRUPOS","ACUAZUMBA","FUTBOL"],"kids":["FK DANZA AEREA NIÑOS","FK HIP HOP NIÑOS","FK BALLET NIÑOS","FK JAZZ NIÑOS","ART KIDZ"],"tiene_fitkidz":true},"pedregal":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","BODY BALANCE","INDBIKE","REFORMER PILATES","MAT PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","ASHTANGA YOGA","ZUMBA FITNESS","BELLY DANCE","STRETCH","POWER JUMP","FUN TRAC","STEP","ACUAEROBICS"],"kids":[],"tiene_fitkidz":true},"altavista":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","BODY ATTACK","BODY BALANCE","BODY JAM","CX WORX","INDBIKE","RPM","REFORMER PILATES","MAT PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","VINYASA YOGA","VINYASA YOGA 90","ASHTANGA YOGA","ZUMBA FITNESS","BELLY DANCE","FIT Y DANCE","DANZA AEREA","CORE","STRETCH","POWER JUMP","FUN TRAC","POUND","NATURAL MOTION","GIMNASIA DE GRUPOS","TRAINT BOOST DEMO","ACUAEROBICS","ACUAZUMBA","BELLY DANCE FK","STRETCH FK"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK RITMOS LATINOS NIÑOS","FK DANZA AEREA NIÑOS"],"tiene_fitkidz":true},"amores":{"amenidades":["Cardiovascular","Peso_Libre","IndBike","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","BODY ATTACK","BODY BALANCE","BODY STEP","BODY JAM","CX WORX","INDBIKE","RPM","REFORMER PILATES","MAT PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","VINYASA YOGA","VINYASA YOGA 90","ASHTANGA YOGA","ZUMBA FITNESS","BELLY DANCE","FIT Y DANCE","DANZA AEREA","CORE","STRETCH","POWER JUMP","FUN TRAC","POUND","NATURAL MOTION","GIMNASIA DE GRUPOS","TRAINT BOOST DEMO","ACUAEROBICS","ACUAZUMBA","BELLY DANCE FK","STRETCH FK"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK RITMOS LATINOS NIÑOS","FK DANZA AEREA NIÑOS","KICKBOXING NINOS"],"tiene_fitkidz":false},"terraza-coapa":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","BODY ATTACK","BODY BALANCE","CX WORX","GRIT DEMO","SH BAM","INDBIKE","POWER CYCLING","REFORMER PILATES","MAT PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","VINYASA YOGA","ZUMBA FITNESS","BELLY DANCE","FIT Y DANCE","DANZA AEREA","FULL BODY","CORE","STRETCH","POWER JUMP","FUN TRAC","POUND","STEP","KINETICS BALL","TRAINT BOOST DEMO","ACUAEROBICS","FUTBOL"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK DANZA AEREA NIÑOS","FK TKD NIÑOS"],"tiene_fitkidz":true},"crater":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz","Cancha"],"adultas":["BODY PUMP","BODY COMBAT","BODY ATTACK","BODY BALANCE","INDBIKE","CYCLING","REFORMER PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","ZUMBA FITNESS","BELLY DANCE","FIT Y DANCE","DANZA AEREA","FULL BODY","CORE","STRETCH","FUN TRAC","KINETICS BALL","TRAINT BOOST DEMO","ACUAZUMBA","BELLY DANCE FK","FUTBOL"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK RITMOS LATINOS NIÑOS","FK TKD NIÑOS"],"tiene_fitkidz":true},"felix-cuevas":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz","Cancha"],"adultas":["Muro_Escalar","BODY PUMP","BODY ATTACK","BODY STEP","SH BAM","INDBIKE","REFORMER PILATES","HATHA YOGA","VINYASA YOGA","YOGA RESTAURATIVA","ZUMBA FITNESS","URBAN DANCE","STRETCH","POWER JUMP","INTERVAL","POUND","STRONG NATION","ACUAZUMBA"],"kids":[],"tiene_fitkidz":true},"miguel-angel-de-quevedo":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz"],"adultas":["BODY PUMP","BODY COMBAT","BODY ATTACK","BODY BALANCE","BODY STEP","INDBIKE","REFORMER PILATES","MAT PILATES","TOTAL BARRE","HATHA YOGA","VINYASA YOGA","ASHTANGA YOGA","ZUMBA FITNESS","ZUMBA TONING","BAILE DE SALON","CORE","STRETCH","POWER JUMP","FUN TRAC","STEP","KINETIC CHAIN","STRONG NATION","TRAINT BOOST DEMO","ACUAZUMBA"],"kids":[],"tiene_fitkidz":true},"patio-tlalpan":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz","Ring_Box"],"adultas":["BODY PUMP","BODY COMBAT","BODY ATTACK","BODY BALANCE","CX WORX","INDBIKE","REFORMER PILATES","MAT PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","ASHTANGA YOGA","ZUMBA FITNESS","ZUMBA TONING","BAILE DE SALON","CORE","STRETCH","POWER JUMP","FUN TRAC","STEP","KINETIC CHAIN","NATURAL MOTION","GIMNASIA DE GRUPOS","ACUAEROBICS","ACUAZUMBA"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK RITMOS LATINOS NIÑOS","FK YOGA NIÑOS","ZUMBA NINOS"],"tiene_fitkidz":true},"universidad":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","BODY BALANCE","BODY STEP","GRIT DEMO","RPM","REFORMER PILATES","HATHA YOGA","VINYASA YOGA","YOGA RESTAURATIVA","ZUMBA FITNESS","BELLY DANCE","URBAN DANCE","DANZA AEREA","BAILE DE SALON","FULL BODY","CORE","STRETCH","POWER JUMP","FUN TRAC","NATURAL MOTION","STRONG NATION","RACE WALKER","GIMNASIA DE GRUPOS","ACUAEROBICS","ACUAZUMBA"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK RITMOS LATINOS NIÑOS","FK DANZA AEREA NIÑOS","FK YOGA NIÑOS","KICKBOXING NINOS"],"tiene_fitkidz":true},"patriotismo":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz","Cancha"],"adultas":["BODY PUMP","BODY COMBAT","BODY ATTACK","BODY BALANCE","BODY STEP","BODY JAM","CX WORX","INDBIKE","POWER CYCLING","REFORMER PILATES","MAT PILATES","TOTAL BARRE","HATHA YOGA","VINYASA YOGA","YOGA RESTAURATIVA","ZUMBA FITNESS","FIT Y DANCE","DANZA AEREA","FULL BODY","CORE","STRETCH","POWER JUMP","FUN TRAC","STRONG NATION","ACUAZUMBA"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK DANZA AEREA NIÑOS","FK CAPOEIRA NIÑOS","FK JAZZ NIÑOS","FK YOGA NIÑOS","KIDZ POWER"],"tiene_fitkidz":true},"barranca":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["Muro_Escalar","BODY PUMP","BODY COMBAT","BODY BALANCE","INDBIKE","POWER CYCLING","REFORMER PILATES","MAT PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","VINYASA YOGA","FIT Y DANCE","FULL BODY","CORE","STRETCH","POWER JUMP","STEP","ACUAEROBICS"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK RITMOS LATINOS NIÑOS","FK YOGA NIÑOS","RAQUET NINOS","FUNTRAC TEENS"],"tiene_fitkidz":true},"parque-san-andres":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","BODY BALANCE","CX WORX","GRIT DEMO","INDBIKE","RPM","REFORMER PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","VINYASA YOGA","ZUMBA FITNESS","BELLY DANCE","URBAN DANCE","FULL BODY","CORE","STRETCH","POWER JUMP","FUN TRAC","STEP","KINETICS BALL","GIMNASIA DE GRUPOS","ACUAZUMBA","FLYBOARD"],"kids":["FK DANZA AEREA NIÑOS"],"tiene_fitkidz":true},"san-jeronimo":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","BODY STEP","CX WORX","INDBIKE","REFORMER PILATES","MAT PILATES","BALL PILATES","HATHA YOGA","HATHA YOGA 90","ASHTANGA YOGA","ZUMBA FITNESS","FIT Y DANCE","BAILE DE SALON","CORE","STRETCH","POWER JUMP","FUN TRAC","STRONG NATION","ACUAEROBICS"],"kids":[],"tiene_fitkidz":true},"manacar":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["Muro_Escalar","BODY PUMP","BODY COMBAT","BODY BALANCE","BODY STEP","BODY JAM","CX WORX","INDBIKE","REFORMER PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","VINYASA YOGA","ZUMBA FITNESS","BELLY DANCE","FIT Y DANCE","DANZA AEREA","CORE","STRETCH","POWER JUMP","FUN TRAC","STEP","KINETIC CHAIN","KINETICS BALL","NATURAL MOTION","GIMNASIA DE GRUPOS","ACUAZUMBA","BELLY DANCE FK"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK DANZA AEREA NIÑOS","FK HIP HOP NIÑOS","FK TKD NIÑOS"],"tiene_fitkidz":true},"xola":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz","Ring_Box"],"adultas":["BODY PUMP","BODY COMBAT","CX WORX","INDBIKE","REFORMER PILATES","MAT PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","ASHTANGA YOGA","ZUMBA FITNESS","ZUMBA STEP","BELLY DANCE","URBAN DANCE","FIT Y DANCE","BAILE DE SALON","FULL BODY","CORE","STRETCH","POWER JUMP","FUN TRAC","KINETICS BALL","TRAINT BOOST DEMO","INICIACION TKD","ACUAEROBICS","ACUAZUMBA","BELLY DANCE FK"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK DANZA AEREA NIÑOS","FK HIP HOP NIÑOS","FK BALLET NIÑOS","FK YOGA NIÑOS","FK TKD NIÑOS"],"tiene_fitkidz":true},"interlomas":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz","Ring_Box","Cancha"],"adultas":["Muro_Escalar","BODY PUMP","BODY STEP","CX WORX","INDBIKE","POWER CYCLING","REFORMER PILATES","MAT PILATES","ASHTANGA YOGA","ZUMBA FITNESS","POWER JUMP","ACUAZUMBA"],"kids":["FK TKD NIÑOS"],"tiene_fitkidz":true},"metepec":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz","Ring_Box"],"adultas":["Muro_Escalar","BODY PUMP","BODY COMBAT","BODY BALANCE","CX WORX","CYCLING","REFORMER PILATES","MAT PILATES","TOTAL BARRE","HATHA YOGA","VINYASA YOGA","VINYASA YOGA 90","YOGA RESTAURATIVA","AE YOGA","ZUMBA FITNESS","ZUMBA STEP","FULL BODY","POWER JUMP","STEP","STRONG NATION","RACE WALKER","ACUAEROBICS","STRETCH FK"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK HIP HOP NIÑOS","FK BALLET NIÑOS","FK JAZZ NIÑOS","FK TKD NIÑOS"],"tiene_fitkidz":true},"paseo-interlomas":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","INDBIKE","REFORMER PILATES","MAT PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","ZUMBA FITNESS","ZUMBA TONING","FULL BODY","CORE","STRETCH","FUN TRAC","KINETICS BALL","GIMNASIA DE GRUPOS","TRAINT BOOST DEMO","ACUAEROBICS"],"kids":["FK RITMOS LATINOS NIÑOS","FK DANZA AEREA NIÑOS","FK BALLET NIÑOS","FK TKD NIÑOS"],"tiene_fitkidz":true},"tlalnepantla":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","BODY BALANCE","CX WORX","INDBIKE","RPM","REFORMER PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","ZUMBA FITNESS","DANZA AEREA","BAILE DE SALON","JAZZ 90","FULL BODY","STRETCH","POWER JUMP","FUN TRAC","POUND","STEP","GIMNASIA DE GRUPOS","INICIACION TKD","ACUAZUMBA"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK DANZA AEREA NIÑOS","FK TKD NIÑOS","FK ALTO RENDIMIENTO","KICKBOXING NINOS","BABY GYM"],"tiene_fitkidz":true},"satelite":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz","Ring_Box","Cancha"],"adultas":["Muro_Escalar","BODY PUMP","BODY COMBAT","BODY ATTACK","BODY BALANCE","BODY STEP","INDBIKE","REFORMER PILATES","MAT PILATES","TOTAL BARRE","HATHA YOGA","VINYASA YOGA","VINYASA YOGA 90","ZUMBA FITNESS","BELLY DANCE","FULL BODY","CORE","STRETCH","POWER JUMP","FUN TRAC","INTERVAL","STEP","KINETICS BALL","STRONG NATION","GIMNASIA DE GRUPOS","ACUAEROBICS","ACUAZUMBA"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK DANZA AEREA NIÑOS","FK TKD NIÑOS"],"tiene_fitkidz":true},"triangulo-tecamachalco":{"amenidades":["Cardiovascular","Peso_Libre","IndBike","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","BODY BALANCE","CX WORX","INDBIKE","REFORMER PILATES","MAT PILATES","BALL PILATES","TOTAL BARRE","VINYASA YOGA","ZUMBA FITNESS","BELLY DANCE","FULL BODY","CORE"],"kids":[],"tiene_fitkidz":false},"zona-esmeralda":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Ring_Box"],"adultas":["BODY PUMP","BODY COMBAT","BODY BALANCE","CX WORX","INDBIKE","RPM","POWER CYCLING","REFORMER PILATES","MAT PILATES","BALL PILATES","HATHA YOGA","VINYASA YOGA","ZUMBA FITNESS","FULL BODY","CORE","STRETCH","POWER JUMP","POUND","STEP","KINETICS BALL","INICIACION TKD","ACUAEROBICS","ACUAZUMBA"],"kids":[],"tiene_fitkidz":true},"aguascalientes":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","BODY BALANCE","BODY STEP","RPM","BEAT N BIKE","REFORMER PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","VINYASA YOGA","ASHTANGA YOGA","YOGA RESTAURATIVA","ZUMBA FITNESS","ZUMBA TONING","URBAN DANCE","FIT Y DANCE","CORE","STRETCH","POWER JUMP","POUND","BOX 1","ACUAZUMBA"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK BALLET NIÑOS","FK TKD NIÑOS","FUNTRAC TEENS"],"tiene_fitkidz":true},"torreon":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz"],"adultas":["BODY PUMP","BODY COMBAT","BODY BALANCE","BODY STEP","RPM","BEAT N BIKE","REFORMER PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","VINYASA YOGA","ASHTANGA YOGA","YOGA RESTAURATIVA","ZUMBA FITNESS","ZUMBA TONING","URBAN DANCE","FIT Y DANCE","CORE","STRETCH","POWER JUMP","POUND","BOX 1","ACUAZUMBA"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK BALLET NIÑOS","FK JAZZ NIÑOS","FK TKD NIÑOS","FUNTRAC TEENS"],"tiene_fitkidz":true},"saltillo":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY STEP","CX WORX","INDBIKE","POWER CYCLING","REFORMER PILATES","MAT PILATES","ASHTANGA YOGA","ZUMBA FITNESS","POWER JUMP","ACUAZUMBA"],"kids":["FK TKD NIÑOS"],"tiene_fitkidz":true},"leon":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","FitKidz"],"adultas":["BODY PUMP","BODY COMBAT","BODY ATTACK","BODY JAM","INDBIKE","RPM","REFORMER PILATES","MAT PILATES","BALL PILATES","HATHA YOGA","ASHTANGA YOGA","FIT Y DANCE","HAWAIANO","STRETCH","POWER JUMP","INTERVAL"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK HIP HOP NIÑOS"],"tiene_fitkidz":true},"la-rioja":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","BODY ATTACK","BODY JAM","INDBIKE","RPM","REFORMER PILATES","MAT PILATES","BALL PILATES","HATHA YOGA","ASHTANGA YOGA","FIT Y DANCE","HAWAIANO","STRETCH","POWER JUMP","INTERVAL"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK HIP HOP NIÑOS"],"tiene_fitkidz":true},"cumbres":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz","Ring_Box"],"adultas":["BODY PUMP","BODY COMBAT","BODY ATTACK","BODY JAM","INDBIKE","RPM","REFORMER PILATES","MAT PILATES","HATHA YOGA","ASHTANGA YOGA","FIT Y DANCE","HAWAIANO","STRETCH","POWER JUMP","INTERVAL"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK HIP HOP NIÑOS"],"tiene_fitkidz":true},"apodaca":{"amenidades":["Cardiovascular","Peso_Libre","IndBike","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","BODY ATTACK","BODY BALANCE","INDBIKE","RPM","REFORMER PILATES","MAT PILATES","HATHA YOGA","FULL BODY","POWER JUMP"],"kids":[],"tiene_fitkidz":false},"san-pedro":{"amenidades":["Alberca","Peso_Libre","FitKidz","Padel","Pickleball"],"adultas":["BODY PUMP","BODY COMBAT","BODY BALANCE","RPM","REFORMER PILATES","MAT PILATES","HATHA YOGA","VINYASA YOGA","YOGA RESTAURATIVA","FIT Y DANCE","CORE","STRETCH","POWER JUMP","FUN TRAC","INTERVAL","STEP","ACUAEROBICS"],"kids":[],"tiene_fitkidz":true},"puebla":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Ring_Box","Cancha"],"adultas":["Muro_Escalar","BODY PUMP","BODY COMBAT","BODY BALANCE","RPM","REFORMER PILATES","MAT PILATES","HATHA YOGA","VINYASA YOGA","YOGA RESTAURATIVA","FIT Y DANCE","CORE","STRETCH","POWER JUMP","FUN TRAC","INTERVAL","STEP","ACUAEROBICS"],"kids":[],"tiene_fitkidz":true},"sonata":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz"],"adultas":["BODY PUMP","BODY BALANCE","RPM","REFORMER PILATES","MAT PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","ZUMBA FITNESS","CORE","STRETCH","POWER JUMP","FUN TRAC","INTERVAL","STEP","STRONG NATION","ACUAEROBICS","ACUAZUMBA","INICIACION BALLET"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK HIP HOP NIÑOS","FK BALLET NIÑOS","FK JAZZ NIÑOS","FK YOGA NIÑOS","FK TKD NIÑOS"],"tiene_fitkidz":true},"bernardo-quintana":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["Muro_Escalar","BODY PUMP","CX WORX","INDBIKE","REFORMER PILATES","BALL PILATES","HATHA YOGA","VINYASA YOGA","ZUMBA FITNESS","BELLY DANCE","DANZA AEREA","FULL BODY","STRETCH","POWER JUMP","STRONG NATION","ACUAEROBICS"],"kids":[],"tiene_fitkidz":true},"esfera-queretaro":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","INDBIKE","POWER CYCLING","REFORMER PILATES","MAT PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","VINYASA YOGA","ASHTANGA YOGA","ZUMBA FITNESS","URBAN DANCE","FULL BODY","STRETCH","FUN TRAC","STEP","TRAINT BOOST DEMO","ACUAEROBICS","ACUAZUMBA"],"kids":[],"tiene_fitkidz":true},"juriquilla":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz","Cancha"],"adultas":["Muro_Escalar","BODY PUMP","BODY COMBAT","BODY BALANCE","CX WORX","INDBIKE","REFORMER PILATES","BALL PILATES","TOTAL BARRE","HATHA YOGA","VINYASA YOGA","ZUMBA FITNESS","CORE","STRETCH","POWER JUMP","GIMNASIA DE GRUPOS","ACUAZUMBA"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK BASKETBALL NIÑOS","FK BALLET NIÑOS","FK YOGA NIÑOS","FUNTRAC TEENS"],"tiene_fitkidz":true},"culiacan":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz"],"adultas":["BODY PUMP","BODY COMBAT","BODY BALANCE","INDBIKE","CYCLING","REFORMER PILATES","HATHA YOGA","VINYASA YOGA","ASHTANGA YOGA","YOGA RESTAURATIVA","ZUMBA FITNESS","POWER JUMP","POUND","STEP","ACUAEROBICS"],"kids":[],"tiene_fitkidz":true},"hermosillo":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","FitKidz","Funcional_Zona_Intenz","Cancha"],"adultas":["BODY PUMP","BODY COMBAT","RPM","REFORMER PILATES","MAT PILATES","TOTAL BARRE","VINYASA YOGA","ASHTANGA YOGA","ZUMBA FITNESS","POWER JUMP","FUN TRAC","GIMNASIA DE GRUPOS","ACUAZUMBA","ECROSS"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK RITMOS LATINOS NIÑOS","FK TKD NIÑOS","FK ALTO RENDIMIENTO"],"tiene_fitkidz":true},"veracruz":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz"],"adultas":["BODY PUMP","BODY COMBAT","RPM","REFORMER PILATES","MAT PILATES","TOTAL BARRE","VINYASA YOGA","ASHTANGA YOGA","ZUMBA FITNESS","POWER JUMP","FUN TRAC","GIMNASIA DE GRUPOS","ACUAZUMBA","ECROSS"],"kids":["FK INICIACION DEPORTIVA NIÑOS","FK RITMOS LATINOS NIÑOS","FK TKD NIÑOS","FK ALTO RENDIMIENTO"],"tiene_fitkidz":true},"cabo-norte":{"amenidades":["Alberca","Cardiovascular","Peso_Libre","IndBike","FitKidz","Funcional_Zona_Intenz","Ring_Box"],"adultas":["BODY PUMP","BODY COMBAT","RPM","REFORMER PILATES","MAT PILATES","TOTAL BARRE","VINYASA YOGA","ASHTANGA YOGA","ZUMBA FITNESS","POWER JUMP","FUN TRAC","GIMNASIA DE GRUPOS","ACUAZUMBA","ECROSS"],"kids":["FK RITMOS LATINOS NIÑOS","FK TKD NIÑOS","FK ALTO RENDIMIENTO"],"tiene_fitkidz":true}};
const CP_CENTROIDS = {"01":[19.3505,-99.1844],"02":[19.4845,-99.1976],"03":[19.3737,-99.1542],"04":[19.3324,-99.1574],"05":[19.4014,-99.2581],"06":[19.4326,-99.1473],"07":[19.4969,-99.1276],"08":[19.3958,-99.0786],"09":[19.3578,-99.0697],"10":[19.3447,-99.2143],"11":[19.4326,-99.1948],"12":[19.1922,-99.0297],"13":[19.2606,-99.0153],"14":[19.2925,-99.1734],"15":[19.4421,-99.1056],"16":[19.3068,-99.1005],"20":[21.8853,-102.2916],"25":[25.4232,-101.0053],"27":[25.5428,-103.4068],"37":[21.1250,-101.6859],"44":[20.6597,-103.3496],"45":[20.7172,-103.3920],"50":[19.2826,-99.6557],"51":[19.4570,-99.3260],"52":[19.5550,-99.2333],"53":[19.4979,-99.2090],"54":[19.6043,-99.2543],"55":[19.5836,-99.0306],"56":[19.2697,-98.9097],"57":[19.4869,-99.1467],"64":[25.6866,-100.3161],"65":[25.7785,-100.1789],"66":[25.7000,-100.2500],"67":[25.6550,-100.4017],"72":[19.0414,-98.2063],"76":[20.5888,-100.3899],"80":[24.8091,-107.3940],"82":[23.2494,-106.4111],"83":[29.0729,-110.9559],"94":[19.1738,-96.1342],"97":[20.9674,-89.5926]};

// ─── Q4 → Block 1 (Pesas individual seca) — research-based ACSM 2026 ───
const Q4_TO_BLOCK_1 = {
  "Bajar de peso": { subgrupo: "Cuerpo completo con peso moderado", protocol: "8 ejercicios multiarticulares, 2-3 sets de 12-15 reps, descanso 45-60 seg", why_template: "Mantienes tu músculo mientras el cardio sostiene la pérdida de grasa. Sin músculo, lo que pierdes es agua y músculo en vez de grasa." },
  "Mejorar mi estética corporal y definición muscular": { subgrupo: "Definición muscular por zonas", protocol: "6-8 ejercicios por sesión enfocados en 1-2 grupos musculares, 3-4 sets de 8-12 reps, descanso 60-90 seg", why_template: "Construyes el músculo que va a verse cuando baje el porcentaje de grasa. Trabajas una o dos zonas por sesión para enfocar el estímulo." },
  "Aumentar masa muscular": { subgrupo: "Crecimiento muscular con carga creciente", protocol: "Split push/pull/piernas o full-body 3x/sem, 4-5 ejercicios por grupo, 3-4 sets de 8-12 reps, RPE 7-8, descanso 90-120 seg, carga sube cada 2 semanas", why_template: "Volumen alto y peso que sube cada dos semanas. El músculo se construye con carga que va aumentando en el tiempo, no con sesiones aisladas." },
  "Mejorar mi desempeño atlético": { subgrupo: "Fuerza explosiva y velocidad", protocol: "Sentadillas, peso muerto, press y arrancadas a 30-70% 1RM movidos rápido en la fase concéntrica, 3-5 sets de 3-5 reps, descanso 2-3 min entre sets, plyometría intercalada", why_template: "No mueves peso pesado lento. Mueves peso moderado rápido. La velocidad de empuje es lo que entrena potencia y capacidad de aplicar fuerza rápido." },
  "Mejorar mi salud cardiovascular": { subgrupo: "Mantenimiento de fuerza general", protocol: "2 sesiones/semana, 6-8 ejercicios multiarticulares, 2-3 sets de 10-15 reps, descanso 60 seg, RPE 6-7", why_template: "Las pesas no reemplazan tu cardio. Mantienen tu fuerza y la densidad de tus huesos mientras tu corazón es el motor principal." },
  "Recuperarme de una lesión o dolor crónico": { subgrupo: "Pesas guiadas con énfasis en técnica controlada", protocol: "Máquinas guiadas con carga moderada (no peso libre balístico), 2-3 sets de 12-15 reps con tempo controlado, énfasis en core y zonas estabilizadoras", why_template: "Pesas que te dan control total del movimiento, sin carga sobre la zona lesionada. Tu entrenador adapta cada ejercicio según tu evaluación de primera sesión." },
};

// ─── Q4 → Block 2 (Cardio individual seco) — research-based, lenguaje accesible ───
const Q4_TO_BLOCK_2 = {
  "Bajar de peso": { maquina: "Caminadora, bicicleta o elíptica", duracion: "35 a 45 min", intensidad: "Ritmo conversacional (puedes hablar mientras lo haces)", cuando: "después de pesas, o día separado", why: "Cardio sostenido a un ritmo donde aún puedes mantener una conversación. Quemas grasa como combustible principal y puedes hacerlo día tras día sin agotarte." },
  "Mejorar mi estética corporal y definición muscular": { maquina: "Caminadora, bicicleta o elíptica", duracion: "25 a 35 min", intensidad: "Ritmo conversacional + 1 día a la semana con intervalos cortos al máximo", cuando: "después de pesas, no antes", why: "Cardio que sostiene la pérdida de grasa sin tocar el músculo que estás construyendo. Después de pesas para no agotarte antes del trabajo de fuerza." },
  "Aumentar masa muscular": { maquina: "Caminadora suave o bicicleta", duracion: "15 a 25 min", intensidad: "Ritmo muy ligero", cuando: "día separado de pesas, o como calentamiento corto", why: "Cardio corto y suave. Mucho cardio compite con tu recuperación muscular y limita el crecimiento. La prioridad son las pesas." },
  "Mejorar mi desempeño atlético": { maquina: "Bicicleta, remo o caminadora", duracion: "30 a 40 min", intensidad: "Mezcla de ritmo conversacional + intervalos cortos al máximo con recuperación activa", cuando: "día separado de tus sesiones de fuerza explosiva", why: "Intervalos al borde de tu capacidad aeróbica. Suben tu techo cardiovascular más rápido que el cardio sostenido — el factor que más limita tu rendimiento atlético." },
  "Mejorar mi salud cardiovascular": { maquina: "Caminadora, bicicleta, elíptica o remo", duracion: "35 a 45 min", intensidad: "Ritmo conversacional 3-4 días a la semana + 1 día con intervalos al máximo", cuando: "sesión principal del día", why: "Tu motor cardiovascular es la prioridad. Varios días a ritmo conversacional construyen la base; un día con intervalos eleva el techo. Esta combinación es la que más reduce mortalidad." },
  "Recuperarme de una lesión o dolor crónico": { maquina: "Bicicleta reclinada, elíptica o caminadora muy suave", duracion: "15 a 25 min", intensidad: "Ritmo conversacional muy ligero", cuando: "antes de pesas como activación, o sesión corta independiente", why: "Cardio de bajo impacto que activa la circulación y articulaciones sin sumar carga a la zona lesionada. Tu entrenador adapta intensidad según evolución." },
};

// ─── AQUATIC variants (Q6 = "En la alberca") — research-based, lenguaje accesible ───
const AQUATIC_BLOCK_1 = {
  "Bajar de peso": { subgrupo: "Trote acuático con intervalos de caminata", protocol: "30 min en agua a la cintura/pecho, intervalos de 3 min trote acuático + 1 min caminata, 6-8 ciclos", why_template: "Cardio acuático sin impacto. Sostienes la pérdida de grasa sin estresar articulaciones — especialmente útil si tu peso actual hace incómodo correr en piso." },
  "Mejorar mi estética corporal y definición muscular": { subgrupo: "Resistencia del agua con manoplas y mancuernas acuáticas", protocol: "30-40 min, 8 ejercicios resistidos contra el agua, 3 sets de 12-15 reps, énfasis en grupos musculares por sesión", why_template: "Resistencia constante del agua en todas las direcciones del movimiento. Construyes firmeza muscular sin impacto y con bajo riesgo de lesión." },
  "Aumentar masa muscular": { subgrupo: "Resistencia del agua + complemento con pesas en piso", protocol: "Trabajo acuático con flotadores y mancuernas, 3 sets de 8-10 reps a máxima resistencia que el agua permita; el crecimiento muscular real requiere combinar con sesiones de pesas en piso", why_template: "El agua no permite cargar suficiente peso para hacer crecer músculo de forma significativa. Si tu objetivo principal es ganar músculo, tu rutina combina alberca con días en piso. Tu entrenador define el balance." },
  "Mejorar mi desempeño atlético": { subgrupo: "Saltos y sprints en el agua", protocol: "30 min, intervalos de 30 seg sprint acuático / 30 seg recuperación activa, + 10 min saltos en agua profunda, 2-3 sesiones/sem", why_template: "Saltos y sprints en agua reducen el impacto cerca del 80%. Entrenas potencia y velocidad sin estresar tendones — ideal en pre-temporada o recuperación." },
  "Mejorar mi salud cardiovascular": { subgrupo: "Natación a ritmo conversacional", protocol: "35-45 min de natación a paso donde aún puedes hablar entre brazadas, predominantemente crol y dorso, descanso de 30 seg cada 200 m", why_template: "Cardio sostenido a ritmo conversacional en el agua. El cuerpo trabaja contra la resistencia del agua sin impacto. Uno de los tipos de cardio mejor documentados." },
  "Recuperarme de una lesión o dolor crónico": { subgrupo: "Caminata acuática + ejercicios controlados", protocol: "20-30 min, caminata acuática variada (frente, atrás, lateral) + ejercicios de control de tronco y movilidad articular con flotadores, intensidad muy controlada", why_template: "El agua reduce la carga sobre tu zona lesionada y a la vez te da resistencia para reactivar la musculatura sin riesgo. Es la modalidad mejor documentada para dolor crónico." },
};

const AQUATIC_BLOCK_2 = {
  "Bajar de peso": { maquina: "Alberca", duracion: "35 a 45 min", cuando: "sesión principal", why: "Cardio acuático sostenido a ritmo conversacional. Quemas grasa sin desgaste articular." },
  "Mejorar mi estética corporal y definición muscular": { maquina: "Alberca", duracion: "25 a 35 min", cuando: "después del trabajo de resistencia en agua", why: "Cardio acuático que sostiene la pérdida de grasa mientras se construye la firmeza muscular." },
  "Aumentar masa muscular": { maquina: "Alberca (corto) + recomendación piso", duracion: "15 a 20 min", cuando: "complementario; el grueso del crecimiento muscular se hace en piso", why: "Sesión acuática corta para recuperación activa y no comprometer el trabajo de fuerza." },
  "Mejorar mi desempeño atlético": { maquina: "Alberca", duracion: "30 a 40 min", cuando: "alternando con días de fuerza explosiva en piso", why: "Sprints e intervalos acuáticos suben tu capacidad aeróbica con impacto mínimo en tendones." },
  "Mejorar mi salud cardiovascular": { maquina: "Alberca", duracion: "35 a 45 min", cuando: "sesión principal", why: "Natación a ritmo conversacional sostiene tu salud cardiovascular sin impacto." },
  "Recuperarme de una lesión o dolor crónico": { maquina: "Alberca", duracion: "15 a 25 min", cuando: "como activación o sesión completa según evolución", why: "Movilidad y reactivación en agua, sin carga sobre la zona afectada." },
};

// ─── 56 clases con profiles object (top3 / apto / no apto) — research-based ───
// Profile keys: "Bajar de peso", "Mejorar mi estética corporal y definición muscular",
// "Aumentar masa muscular", "Mejorar mi desempeño atlético", "Mejorar mi salud cardiovascular",
// "Recuperarme de una lesión o dolor crónico"
const CLASS_FICHAS = [
  { nombre: "BODY PUMP", display: "Body Pump", profiles: { "Bajar de peso": "top3", "Mejorar mi estética corporal y definición muscular": "top3", "Aumentar masa muscular": "top3", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Trabajo de fuerza grupal con barra y peso ajustable. 800-1000 repeticiones por sesión activan crecimiento muscular y queman muchas calorías." },
  { nombre: "CORE", display: "Core", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "no apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Trabajo focalizado en abdomen, lumbar y estabilidad. Construye la zona media que sostiene tu postura." },
  { nombre: "CX WORX", display: "CX Worx", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "top3", "Aumentar masa muscular": "apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "no apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "30 minutos enfocados en core y definición de zona media. Concentración pura sobre la zona que más se ve." },
  { nombre: "FUN TRAC", display: "FunTrac", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Circuito funcional grupal con cargas variadas. Trabaja fuerza, agilidad y core en formato dinámico." },
  { nombre: "KINETIC CHAIN", display: "Kinetic Chain", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "top3", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "no apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Intermedio", "Avanzado"], why: "Entrenamiento de cadena cinética con carga progresiva. Construye fuerza funcional y masa magra." },
  { nombre: "KINETIC PUMP", display: "Kinetic Pump", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "top3", "Aumentar masa muscular": "apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Variante de Pump con cadena cinética. Tono muscular completo en formato grupal." },
  { nombre: "TONE", display: "Tone", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Trabajo de tonificación con mancuernas ligeras. Resistencia muscular sostenida." },
  { nombre: "TOTAL BARRE", display: "Total Barre", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Pilates + ballet + danza. Resistencia muscular fina, postura, definición." },
  { nombre: "BODY ATTACK", display: "Body Attack", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "top3", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Intermedio", "Avanzado"], why: "Cardio de alta intensidad con coreografía. Saltos explosivos y agilidad para potencia atlética." },
  { nombre: "BODY COMBAT", display: "Body Combat", profiles: { "Bajar de peso": "top3", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "top3", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Coreografía inspirada en artes marciales. Cardio sostenido con intervalos — combina ritmo conversacional con picos de alta intensidad." },
  { nombre: "BODY STEP", display: "Body Step", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Intermedio", "Avanzado"], why: "Step con coreografía. Cardio + tren inferior." },
  { nombre: "CYCLING", display: "Cycling", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "top3", "Recuperarme de una lesión o dolor crónico": "apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Bicicleta estacionaria con instructor. Ritmo conversacional sostenido — base cardiovascular documentada." },
  { nombre: "INDBIKE", display: "Indoor Bike", profiles: { "Bajar de peso": "top3", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "top3", "Recuperarme de una lesión o dolor crónico": "apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Cycling con bicicleta individual y monitoreo de potencia. Permite controlar zona aeróbica con precisión." },
  { nombre: "POWER CYCLING", display: "Power Cycling", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Intermedio", "Avanzado"], why: "Cycling de alta intensidad con resistencia variada e intervalos." },
  { nombre: "POWER JUMP", display: "Power Jump", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Intermedio", "Avanzado"], why: "Cardio sobre mini-trampolín. Alto gasto, impacto articular reducido." },
  { nombre: "RACE WALKER", display: "Race Walker", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "apto" }, nivel: ["Principiante", "Intermedio"], why: "Caminata atlética estructurada. Cardio sostenido de bajo impacto." },
  { nombre: "RPM", display: "RPM", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Intermedio", "Avanzado"], why: "Cycling en grupo con música. Cardio intenso, alto gasto, intervalos." },
  { nombre: "STEP", display: "Step", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Step clásico con coreografía. Cardio + tonificación de tren inferior." },
  { nombre: "STRONG NATION", display: "Strong Nation", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Intermedio", "Avanzado"], why: "Coreografía sincronizada con música a alta intensidad. Intervalos al máximo con tu propio peso corporal." },
  { nombre: "ZUMBA STEP", display: "Zumba Step", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio"], why: "Zumba con plataforma de step. Cardio + glúteo." },
  { nombre: "AEROYOGA", display: "AeroYoga", profiles: { "Bajar de peso": "no apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Yoga aéreo en hamacas. Movilidad articular, descompresión lumbar y core." },
  { nombre: "ASHTANGA YOGA", display: "Ashtanga Yoga", profiles: { "Bajar de peso": "no apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Intermedio", "Avanzado"], why: "Yoga dinámico con secuencia fija. Fuerza sostenida en posturas, flexibilidad y resistencia." },
  { nombre: "BALL PILATES", display: "Ball Pilates", profiles: { "Bajar de peso": "no apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Pilates con pelota. Estabilidad, centro del cuerpo y conciencia corporal." },
  { nombre: "BODY BALANCE", display: "Body Balance", profiles: { "Bajar de peso": "no apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Yoga + tai chi + pilates en formato grupal. Flexibilidad, balance y core." },
  { nombre: "HATHA YOGA", display: "Hatha Yoga", profiles: { "Bajar de peso": "no apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "top3" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Yoga clásico con posturas sostenidas. Documentado en literatura como primera línea para dolor crónico." },
  { nombre: "KINETICS BALL", display: "Kinetic Ball", profiles: { "Bajar de peso": "no apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Movilidad y conciencia corporal con pelota. Estabilidad de articulaciones y centro del cuerpo." },
  { nombre: "MAT PILATES", display: "Mat Pilates", profiles: { "Bajar de peso": "no apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "top3" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Pilates en colchoneta. Control motor y core — primera línea documentada para lumbar crónico." },
  { nombre: "NATURAL MOTION", display: "Natural Motion", profiles: { "Bajar de peso": "no apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Movimiento funcional natural. Patrones de movimiento básicos del cuerpo." },
  { nombre: "REFORMER PILATES", display: "Reformer Pilates", profiles: { "Bajar de peso": "no apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Pilates en máquina reformer. Core, postura, recomposición sin impacto." },
  { nombre: "STRETCH", display: "Stretch", profiles: { "Bajar de peso": "no apto", "Mejorar mi estética corporal y definición muscular": "no apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "no apto", "Recuperarme de una lesión o dolor crónico": "apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Sesión dedicada de movilidad y elongación. Recuperación y prevención." },
  { nombre: "TAI CHI", display: "Tai Chi", profiles: { "Bajar de peso": "no apto", "Mejorar mi estética corporal y definición muscular": "no apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Arte marcial suave con movimientos lentos. Balance, conciencia corporal y técnica controlada." },
  { nombre: "VINYASA YOGA", display: "Vinyasa Yoga", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Intermedio", "Avanzado"], why: "Yoga dinámico, fluido. Fuerza sostenida en posturas y movilidad." },
  { nombre: "YOGA RESTAURATIVA", display: "Yoga Restaurativa", profiles: { "Bajar de peso": "no apto", "Mejorar mi estética corporal y definición muscular": "no apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "no apto", "Recuperarme de una lesión o dolor crónico": "apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Yoga lento con posturas sostenidas y soportes. Recuperación profunda y sistema nervioso." },
  { nombre: "DANZA AEREA", display: "Danza Aérea", profiles: { "Bajar de peso": "no apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Intermedio", "Avanzado"], why: "Danza en telas o aro suspendido. Fuerza sostenida de brazos y centro del cuerpo." },
  { nombre: "BAILE DE SALON", display: "Baile de Salón", profiles: { "Bajar de peso": "no apto", "Mejorar mi estética corporal y definición muscular": "no apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "apto" }, nivel: ["Principiante", "Intermedio"], why: "Salsa, danzón, cumbia. Cardio suave, social y postural." },
  { nombre: "BELLY DANCE", display: "Belly Dance", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio"], why: "Danza árabe. Control de cadera y core." },
  { nombre: "BODY JAM", display: "Body Jam", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Intermedio", "Avanzado"], why: "Coreografía de baile en grupo. Cardio + agilidad." },
  { nombre: "FIT Y DANCE", display: "Fit Dance", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio"], why: "Fitness con coreografía. Cardio moderado y tonificación." },
  { nombre: "JAZZ 90", display: "Jazz", profiles: { "Bajar de peso": "no apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Intermedio", "Avanzado"], why: "Danza jazz técnica. Postura, expresión y resistencia." },
  { nombre: "POUND", display: "Pound", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio"], why: "Cardio drumming con baquetas. Cardio + brazos." },
  { nombre: "HAWAIANO", display: "Ritmos Latinos", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio"], why: "Coreografía con ritmos tropicales. Cardio sostenido." },
  { nombre: "SENSUAL DANCE", display: "Sensual Dance", profiles: { "Bajar de peso": "no apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio"], why: "Danza sensual contemporánea. Postura y expresión corporal." },
  { nombre: "SH BAM", display: "Sh'Bam", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Danza fitness con coreografías sencillas. Cardio moderado en grupo." },
  { nombre: "URBAN DANCE", display: "Urban Dance", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Intermedio", "Avanzado"], why: "Hip hop y dance urbano. Cardio + agilidad + expresión." },
  { nombre: "ZUMBA FITNESS", display: "Zumba", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio"], why: "Cardio en formato de baile con ritmos latinos." },
  { nombre: "ZUMBA TONING", display: "Zumba Toning", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Principiante", "Intermedio"], why: "Zumba con mancuernas ligeras. Cardio + tonificación." },
  { nombre: "ALPHA TRAINER", display: "Alpha Trainer", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "top3", "Mejorar mi desempeño atlético": "top3", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Intermedio", "Avanzado"], why: "Funcional de alta intensidad con cargas. Construye fuerza explosiva y masa magra." },
  { nombre: "GRIT DEMO", display: "GRIT", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "apto", "Mejorar mi desempeño atlético": "top3", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Avanzado"], why: "Alta intensidad + saltos explosivos en 30 min. Referencia para potencia atlética y capacidad máxima." },
  { nombre: "SWIM TRAINERS", display: "Swim Trainers", aquatic: true, profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "top3" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Sesión técnica de natación con entrenador. Primera línea documentada para rehabilitación + cardio sin impacto." },
  { nombre: "TRAINT BOOST DEMO", display: "Traint Boost", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Intermedio", "Avanzado"], why: "Circuito de alta intensidad mixto. Cardio + fuerza." },
  { nombre: "FULL BODY", display: "Full Body", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Intermedio", "Avanzado"], why: "Circuito completo que combina fuerza y cardio." },
  { nombre: "INTERVAL", display: "Interval", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "no apto" }, nivel: ["Intermedio", "Avanzado"], why: "Intervalos de alta intensidad en sala. Cardio + recomposición." },
  { nombre: "ACUAZUMBA", display: "Aqua Zumba", aquatic: true, profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "apto" }, nivel: ["Principiante", "Intermedio"], why: "Cardio de baile en alberca. Bajo impacto, alto gasto, apto para rehabilitación." },
  { nombre: "ACUAEROBICS", display: "Acuaeróbics", aquatic: true, profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "apto" }, nivel: ["Principiante", "Intermedio", "Avanzado"], why: "Cardio en alberca con coreografía. Trabajo cardiovascular sin estrés articular." },
  { nombre: "FLYBOARD", display: "Flyboard", aquatic: true, profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "apto" }, nivel: ["Intermedio", "Avanzado"], why: "Entrenamiento sobre plataforma flotante. Estabilidad, core y bajo impacto." },
  { nombre: "GIMNASIA DE GRUPOS", display: "Gimnasia de Grupos", profiles: { "Bajar de peso": "apto", "Mejorar mi estética corporal y definición muscular": "apto", "Aumentar masa muscular": "no apto", "Mejorar mi desempeño atlético": "no apto", "Mejorar mi salud cardiovascular": "apto", "Recuperarme de una lesión o dolor crónico": "apto" }, nivel: ["Principiante", "Intermedio"], why: "Gimnasia funcional grupal con tu propio peso corporal y elementos ligeros." },
];

// Friendly display for kids classes (matrix uses ALL CAPS prefixed with FK)
function displayKidsClass(matrixName) {
  return matrixName
    .replace(/^FK /i, '')
    .replace(/ NIÑOS$/i, '')
    .replace(/ NINOS$/i, '')
    .replace(/ FK$/i, '')
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());
}

function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const toRad = x => x * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

// Common CDMX neighborhood synonyms → match value against actual club colonia
const NEIGHBORHOOD_SYNONYMS = {
  "polanco": ["granada", "anzures", "lomas de chapultepec"],
  "san angel": ["san ángel"],
  "san ángel": ["san ángel"],
  "interlomas": ["jesús del monte", "green house"],
  "satelite": ["boulevares"],
  "satélite": ["boulevares"],
  "tecamachalco": ["tecamachalco"],
  "tlalpan": ["santa úrsula xitla", "villa coapa"],
  "coyoacan": ["romero de terreros", "parque san andrés"],
  "coyoacán": ["romero de terreros", "parque san andrés"],
  "narvarte": ["narvarte"],
  "del valle": ["del valle"],
  "santa fe": ["santa fe"],
  "pedregal": ["jardines del pedregal"],
  "san jeronimo": ["san jerónimo lídice"],
  "san jerónimo": ["san jerónimo lídice"],
};

function kmToMinutes(km) {
  return Math.max(1, Math.round(km * 2.8));
}

function buildClubResult(club, distancia_min) {
  const cat = CATALOG[club.tag] || { amenidades: [], adultas: [], kids: [], tiene_fitkidz: false };
  const offersFitkidz = cat.amenidades.includes('FitKidz');
  const hasFitkidzClassesDetail = Array.isArray(cat.kids) && cat.kids.length > 0;
  const amenList = [];
  if (cat.amenidades.includes('Peso_Libre')) amenList.push('Área de pesas con barras, mancuernas y máquinas');
  if (cat.amenidades.includes('Alberca')) amenList.push('Alberca' + (cat.amenidades.includes('Cardiovascular') ? ' y estudio cardiovascular' : ''));
  else if (cat.amenidades.includes('Cardiovascular')) amenList.push('Estudio cardiovascular completo');
  if (offersFitkidz) amenList.push('FitKidz: clases y actividades para niños');
  if (cat.amenidades.includes('Padel')) amenList.push('Cancha de pádel');
  if (cat.amenidades.includes('Pickleball')) amenList.push('Cancha de pickleball');
  if (cat.amenidades.includes('Ring_Box')) amenList.push('Ring de boxeo');
  if (cat.amenidades.includes('Funcional_Zona_Intenz')) amenList.push('Zona de entrenamiento funcional');
  return {
    nombre: 'Sports World ' + club.nombre,
    direccion: club.calle + ', ' + club.colonia + ', ' + club.municipio + ', ' + club.estado,
    distancia_min,
    amenidades: amenList.slice(0, 4),
    tag: club.tag,
    tiene_fitkidz: offersFitkidz,
    has_kids_classes_detail: hasFitkidzClassesDetail,
    kids_classes: cat.kids || [],
  };
}

// Per-amenity verification — uses the offer flag in amenidades for all amenities including FitKidz
function clubMeetsAmenity(clubTag, amenity) {
  const cat = CATALOG[clubTag];
  if (!cat) return false;
  return (cat.amenidades || []).includes(amenity);
}

function clubMeetsAllRequirements(clubTag, requireAmenities) {
  if (!Array.isArray(requireAmenities) || requireAmenities.length === 0) return true;
  return requireAmenities.every(a => clubMeetsAmenity(clubTag, a));
}

function resolveClubOffline(q15, q16, opts) {
  opts = opts || {};
  // Support both legacy `requireAmenity` (string) and new `requireAmenities` (array)
  let requireAmenities = opts.requireAmenities || [];
  if (opts.requireAmenity) requireAmenities = [...requireAmenities, opts.requireAmenity];
  const preferClasses = opts.preferClasses || [];
  const meetsRequirement = c => clubMeetsAllRequirements(c.tag, requireAmenities);

  const colInput = (q16.colonia || "").trim().toLowerCase();
  const cpInput = (q16.cp || "").trim();

  // Step 1: exact colonia match — if club lacks amenity OR has it but we have class prefs, use anchor mode
  if (colInput) {
    const direct = CLUBS.find(c => c.colonia.toLowerCase() === colInput);
    if (direct) {
      if (preferClasses.length > 0) return rankFromAnchor(direct.lat, direct.lng, null, null, requireAmenities, preferClasses);
      return meetsRequirement(direct)
        ? rankFromAnchor(direct.lat, direct.lng, direct, 5, requireAmenities, preferClasses)
        : rankFromAnchor(direct.lat, direct.lng, null, null, requireAmenities, preferClasses);
    }
  }
  if (colInput && NEIGHBORHOOD_SYNONYMS[colInput]) {
    for (const targetColonia of NEIGHBORHOOD_SYNONYMS[colInput]) {
      const synMatch = CLUBS.find(c => c.colonia.toLowerCase() === targetColonia);
      if (synMatch) {
        if (preferClasses.length > 0) return rankFromAnchor(synMatch.lat, synMatch.lng, null, null, requireAmenities, preferClasses);
        return meetsRequirement(synMatch)
          ? rankFromAnchor(synMatch.lat, synMatch.lng, synMatch, 7, requireAmenities, preferClasses)
          : rankFromAnchor(synMatch.lat, synMatch.lng, null, null, requireAmenities, preferClasses);
      }
    }
  }
  if (colInput && colInput.length >= 4) {
    const fuzzy = CLUBS.find(c => {
      const cc = c.colonia.toLowerCase();
      return cc.includes(colInput) || colInput.includes(cc);
    });
    if (fuzzy) {
      if (preferClasses.length > 0) return rankFromAnchor(fuzzy.lat, fuzzy.lng, null, null, requireAmenities, preferClasses);
      return meetsRequirement(fuzzy)
        ? rankFromAnchor(fuzzy.lat, fuzzy.lng, fuzzy, 7, requireAmenities, preferClasses)
        : rankFromAnchor(fuzzy.lat, fuzzy.lng, null, null, requireAmenities, preferClasses);
    }
  }
  if (cpInput) {
    const direct = CLUBS.find(c => c.cp === cpInput);
    if (direct) {
      if (preferClasses.length > 0) return rankFromAnchor(direct.lat, direct.lng, null, null, requireAmenities, preferClasses);
      return meetsRequirement(direct)
        ? rankFromAnchor(direct.lat, direct.lng, direct, 7, requireAmenities, preferClasses)
        : rankFromAnchor(direct.lat, direct.lng, null, null, requireAmenities, preferClasses);
    }
  }
  if (cpInput.length === 5) {
    const prefix = cpInput.slice(0, 2);
    if (CP_CENTROIDS[prefix]) {
      const [lat, lng] = CP_CENTROIDS[prefix];
      return rankFromAnchor(lat, lng, null, null, requireAmenities, preferClasses);
    }
  }
  return null;
}

function rankFromAnchor(lat, lng, knownClub, knownDistMin, requireAmenities, preferClasses) {
  preferClasses = preferClasses || [];
  requireAmenities = Array.isArray(requireAmenities) ? requireAmenities : (requireAmenities ? [requireAmenities] : []);
  let candidates = CLUBS;
  let unmetRequirements = [];
  if (requireAmenities.length > 0) {
    const strictCandidates = CLUBS.filter(c => clubMeetsAllRequirements(c.tag, requireAmenities));
    if (strictCandidates.length > 0) {
      candidates = strictCandidates;
    } else {
      // No club meets ALL requirements — fall back to all clubs and signal which req is missing
      unmetRequirements = requireAmenities;
    }
  }
  const scored = candidates.map(c => {
    const km = haversineKm(lat, lng, c.lat, c.lng);
    const adultClasses = CATALOG[c.tag] ? (CATALOG[c.tag].adultas || []) : [];
    const matchesClass = preferClasses.length === 0 ? false : preferClasses.some(cn => adultClasses.includes(cn));
    return { ...c, distance_km: km, _matchesClass: matchesClass };
  }).sort((a, b) => a.distance_km - b.distance_km);
  if (scored.length === 0) return null;

  let principal;
  if (knownClub && candidates.some(c => c.tag === knownClub.tag)) {
    principal = { ...knownClub, distance_km: 0 };
  } else if (preferClasses.length > 0) {
    // Pick closest one that also matches preferred classes — but only if within 1.5x distance + 5km of absolute closest
    const closest = scored[0];
    const matching = scored.find(c => c._matchesClass);
    if (matching && matching.distance_km <= closest.distance_km * 1.5 + 5) {
      principal = matching;
    } else {
      principal = closest;
    }
  } else {
    principal = scored[0];
  }
  const otros = scored.filter(c => c.tag !== principal.tag).slice(0, 5);
  const principalDist = (knownDistMin !== null && knownDistMin !== undefined) ? knownDistMin : kmToMinutes(principal.distance_km);
  const tooFar = principal.distance_km > 50;
  return {
    principal: { ...buildClubResult(principal, principalDist), tooFar },
    otros: otros.map(c => ({ ...buildClubResult(c, kmToMinutes(c.distance_km)) })),
    unmetRequirements,
  };
}

// Compute preferred class names for a given Q4 array. mode: "aquatic" | "dry" | "all"
// ─── Contraindications matrix (research-based, see research_audit.md) ───
// Maps class names that have AT LEAST ONE contraindication. Absence = safe for all 5 conditions.
// GLP-1 is NOT a filter (only an info message in card); see usage below.
const CONTRAINDICATIONS = {
  "CORE": {embarazo:1, posparto:1, bariatrica:1},
  "CX WORX": {embarazo:1, posparto:1, bariatrica:1},
  "FUN TRAC": {embarazo:1, posparto:1, bariatrica:1},
  "KINETIC CHAIN": {lesion:1, cardiovascular:1, embarazo:1, posparto:1, bariatrica:1},
  "BODY ATTACK": {lesion:1, cardiovascular:1, embarazo:1, posparto:1, bariatrica:1},
  "BODY COMBAT": {lesion:1, cardiovascular:1, embarazo:1, posparto:1, bariatrica:1},
  "BODY STEP": {lesion:1, posparto:1},
  "POWER CYCLING": {cardiovascular:1},
  "POWER JUMP": {lesion:1, cardiovascular:1, embarazo:1, posparto:1, bariatrica:1},
  "RPM": {cardiovascular:1},
  "STEP": {lesion:1, posparto:1},
  "STRONG NATION": {lesion:1, cardiovascular:1, embarazo:1, posparto:1, bariatrica:1},
  "ZUMBA STEP": {lesion:1, embarazo:1, posparto:1, bariatrica:1},
  "AEROYOGA": {lesion:1, cardiovascular:1, embarazo:1, posparto:1, bariatrica:1},
  "ASHTANGA YOGA": {embarazo:1},
  "DANZA AEREA": {lesion:1, cardiovascular:1, embarazo:1, posparto:1, bariatrica:1},
  "BELLY DANCE": {embarazo:1},
  "JAZZ 90": {lesion:1, embarazo:1, posparto:1},
  "SH BAM": {lesion:1, cardiovascular:1, embarazo:1, posparto:1, bariatrica:1},
  "URBAN DANCE": {lesion:1, embarazo:1, posparto:1},
  "ALPHA TRAINER": {lesion:1, cardiovascular:1, embarazo:1, posparto:1, bariatrica:1},
  "GRIT DEMO": {lesion:1, cardiovascular:1, embarazo:1, posparto:1, bariatrica:1},
  "TRAINT BOOST DEMO": {lesion:1, cardiovascular:1, embarazo:1, posparto:1, bariatrica:1},
  "INTERVAL": {lesion:1, cardiovascular:1, embarazo:1, posparto:1, bariatrica:1},
  "FLYBOARD": {embarazo:1, posparto:1},
};

// Map questionnaire answers (Q12, Q12b, Q17) to the set of active filter conditions.
function activeContraindicationKeys(answers) {
  const keys = new Set();
  const q12 = Array.isArray(answers.Q12) ? answers.Q12 : [];
  if (q12.includes("Lesión o dolor articular/muscular")) keys.add("lesion");
  if (q12.includes("Condición cardiovascular o de presión")) keys.add("cardiovascular");
  if (answers.Q12b === "Sí, embarazada") keys.add("embarazo");
  if (answers.Q12b === "Sí, posparto reciente (últimos 6 meses)") keys.add("posparto");
  const q17 = Array.isArray(answers.Q17) ? answers.Q17 : [];
  if (q17.includes("Cirugía bariátrica")) keys.add("bariatrica");
  return keys;
}

// True if user has any "Otra/Otro" condition that needs Advisor message
function hasAdvisorReviewCondition(answers) {
  const q12 = Array.isArray(answers.Q12) ? answers.Q12 : [];
  const q17 = Array.isArray(answers.Q17) ? answers.Q17 : [];
  return q12.includes("Otra, la comento en el club") || q17.includes("Otro tratamiento médico para peso");
}

// True if user is taking GLP-1 (only triggers info message, no filter)
function isOnGLP1(answers) {
  const q17 = Array.isArray(answers.Q17) ? answers.Q17 : [];
  return q17.includes("GLP-1 (Ozempic, Wegovy, Mounjaro)");
}

// True if a class is contraindicated for AT LEAST ONE active condition.
function isClassContraindicated(className, activeKeys) {
  if (!activeKeys || activeKeys.size === 0) return false;
  const flags = CONTRAINDICATIONS[className];
  if (!flags) return false;
  for (const k of activeKeys) {
    if (flags[k]) return true;
  }
  return false;
}

// Compute preferred class names for a given Q4 array. mode: "aquatic" | "dry" | "all"
// Optional `excludeContraindicated` set (Set of active condition keys) drops classes with any flag set.
function preferredClassesForQ4(q4Array, mode, excludeContraindicated) {
  if (!Array.isArray(q4Array) || q4Array.length === 0) return [];
  mode = mode || "all";
  const out = new Set();
  for (const c of CLASS_FICHAS) {
    if (mode === "aquatic" && !c.aquatic) continue;
    if (mode === "dry" && c.aquatic) continue;
    if (excludeContraindicated && isClassContraindicated(c.nombre, excludeContraindicated)) continue;
    // Class is preferred if it's "top3" or "apto" for any selected goal AND not "no apto" for any
    let anyMatch = false;
    let anyNoApto = false;
    for (const obj of q4Array) {
      const val = c.profiles ? c.profiles[obj] : null;
      if (val === "top3" || val === "apto") anyMatch = true;
      if (val === "no apto") anyNoApto = true;
    }
    if (anyMatch && !anyNoApto) out.add(c.nombre);
  }
  return Array.from(out);
}

// Back-compat alias
function preferredAquaticClassesForQ4(q4Array) {
  return preferredClassesForQ4(q4Array, "aquatic");
}

async function resolveClub(q15, q16, opts) {
  return resolveClubOffline(q15, q16, opts);
}

// ─── Questionnaire definition with all conditional logic ───
function getQuestions(answers) {
  const isWoman = answers.Q2 === "Mujer";
  const solo_self = isWoman ? "Sola, a mi ritmo" : "Solo, a mi ritmo";
  const acomp_self = isWoman ? "Acompañada, en clases o grupo" : "Acompañado, en clases o grupo";
  const solo_visit = isWoman ? "Sola, es mi momento" : "Solo, es mi momento";

  return [
    { id: "Q1", type: "text", label: "Antes de empezar, ¿cómo te llamas?", placeholder: "Tu nombre completo" },
    { id: "Q2", type: "single", label: "Género", options: ["Hombre", "Mujer", "Prefiero no mencionarlo"] },
    { id: "Q3", type: "single", label: "¿Qué quieres sentir al salir del club?", helper: "Esto define el tono de tu experiencia ideal.", options: [
      isWoman ? "Desconectada del trabajo y la rutina" : "Desconectado del trabajo y la rutina",
      isWoman ? "Renovada y de buen ánimo" : "Renovado y de buen ánimo",
      "Parte de una comunidad saludable",
      isWoman ? "Confiada en que mi cuerpo no me va a fallar" : "Confiado en que mi cuerpo no me va a fallar",
      isWoman ? "Más a gusto conmigo misma" : "Más a gusto conmigo mismo"
    ] },
    { id: "Q4", type: "multi", max: 2, label: "¿Qué buscas?", helper: "Puedes elegir hasta dos.", options: ["Bajar de peso", "Mejorar mi estética corporal y definición muscular", "Aumentar masa muscular", "Mejorar mi desempeño atlético", "Mejorar mi salud cardiovascular", "Recuperarme de una lesión o dolor crónico"] },
    { id: "Q5", type: "single", label: "¿Qué ritmo va contigo?", options: ["Suave/controlado", "Moderado y constante", "Intenso, que me rete"] },
    { id: "Q6", type: "single", label: "¿Dónde prefieres entrenar?", options: ["En piso / área seca", "En la alberca", "Ambas", "Lo que mi entrenador recomiende"] },
    { id: "Q7", type: "multi", label: "¿En qué horario prefieres entrenar?", options: ["Temprano (5:00–8:00)", "Media mañana (8:00–11:00)", "Mediodía (11:00–14:00)", "Primera tarde (14:00–17:00)", "Tarde (17:00–20:00)", "Noche (20:00–22:00)"] },
    { id: "Q8", type: "multi", label: "¿Qué días prefieres entrenar?", options: ["L", "M", "X", "J", "V", "S", "D"], chips: true },
    { id: "Q9", type: "single", label: "¿Cuál es tu nivel de entrenamiento?", options: ["Principiante", "Intermedio", "Avanzado"] },
    { id: "Q10", type: "single", label: "¿Vienes de otro gimnasio?", options: ["Sí, vengo de otro gimnasio", "Nunca he ido a un gimnasio", "Regreso después de una pausa"] },
    { id: "Q11", type: "single", label: "¿Qué tan larga fue la pausa?", options: ["Menos de 3 meses", "Entre 3 y 12 meses", "Más de un año"], condition: (a) => a.Q10 === "Regreso después de una pausa" },
    { id: "Q12", type: "multi", label: "¿Tienes alguna condición médica?", helper: "Solo condiciones médicas. Embarazo no es una condición.", options: ["Ninguna", "Lesión o dolor articular/muscular", "Condición cardiovascular o de presión", "Otra, la comento en el club"] },
    { id: "Q12b", type: "single", label: "¿Estás embarazada o en posparto reciente?", options: ["Sí, embarazada", "Sí, posparto reciente (últimos 6 meses)", "No"], condition: (a) => a.Q2 === "Mujer" },
    { id: "Q13", type: "single", label: "¿Prefieres entrenar solo o acompañado?", options: [solo_self, acomp_self, "Me da igual"] },
    { id: "Q14", type: "single", label: "¿Con quién nos visitas en el club?", options: [solo_visit, "Con mi amigo/a", "Con mi pareja", "Yo y mis hijos", "La familia completa"] },
    { id: "Q14b", type: "single", label: "¿Uno o más de tus hijos tiene menos de 12 años?", options: ["Sí", "No"], condition: (a) => a.Q14 === "Yo y mis hijos" || a.Q14 === "La familia completa" },
    { id: "Q15", type: "single", label: "¿Buscas el gimnasio cerca de tu casa o de tu trabajo?", options: ["Cerca de mi casa", "Cerca de mi trabajo", "Ambos", "No me importa"] },
    { id: "Q16", type: "location", label: "¿Dónde queda?", helper: "Llena uno: código postal o colonia." },
    { id: "Q17", type: "multi", label: "¿Estás tomando algún tratamiento para bajar de peso?", helper: "Solo tratamientos activos. Las condiciones médicas ya las anotaste antes.", options: ["GLP-1 (Ozempic, Wegovy, Mounjaro)", "Cirugía bariátrica", "Acompañamiento nutricional con especialista", "Otro tratamiento médico para peso", "Ninguno"], condition: (a) => Array.isArray(a.Q4) && a.Q4.includes("Bajar de peso") },
    { id: "Q18", type: "physical", label: "Tus datos físicos actuales", condition: (a) => Array.isArray(a.Q4) && a.Q4.includes("Bajar de peso") },
    { id: "Q19", type: "single", label: "¿Cuál es tu objetivo de cambio?", options: ["1 a 3 kilos", "3 a 6 kilos", "6 a 10 kilos", "10 a 15 kilos", "Más de 15 kilos", "Sin un número específico"], condition: (a) => Array.isArray(a.Q4) && a.Q4.includes("Bajar de peso") },
  ].filter(q => !q.condition || q.condition(answers));
}

// ─── Rank classes FILTERED BY WHAT THE CLUB ACTUALLY OFFERS ───
function rankClasses(answers, clubTag) {
  const q4 = Array.isArray(answers.Q4) ? answers.Q4 : [];
  const nivel = answers.Q9 || "Intermedio";
  const q6 = answers.Q6;
  const cat = CATALOG[clubTag] || { adultas: [] };
  const offered = new Set(cat.adultas);
  const activeContra = activeContraindicationKeys(answers);
  // Step 1: only consider classes the club offers
  let inCatalog = CLASS_FICHAS.filter(c => offered.has(c.nombre));
  // Step 2: Q6 filter (aquatic vs dry)
  if (q6 === "En la alberca") inCatalog = inCatalog.filter(c => c.aquatic);
  else if (q6 === "En piso / área seca") inCatalog = inCatalog.filter(c => !c.aquatic);
  // Step 3: Level filter
  inCatalog = inCatalog.filter(c => c.nivel.includes(nivel));
  // Step 4: Contraindication filter (Q12, Q12b, Q17 → hard exclude)
  inCatalog = inCatalog.filter(c => !isClassContraindicated(c.nombre, activeContra));
  // Step 5: Score by profiles matrix (top3=3, apto=1, no apto=-99 to drop)
  // If user selected multiple Q4, accumulate scores. Any "no apto" against any selected Q4 drops the class.
  const scored = inCatalog.map(c => {
    let score = 0;
    let hasNoApto = false;
    for (const obj of q4) {
      const val = c.profiles ? c.profiles[obj] : null;
      if (val === "top3") score += 3;
      else if (val === "apto") score += 1;
      else if (val === "no apto") hasNoApto = true;
    }
    return { ...c, score, hasNoApto };
  });
  // Drop classes that are "no apto" for any selected goal
  const compatible = scored.filter(c => !c.hasNoApto && c.score > 0);
  compatible.sort((a, b) => b.score - a.score || a.display.localeCompare(b.display));
  return { top: compatible.slice(0, 2), tambien: compatible.slice(2, 5) };
}

// ─── Q6-aware block resolution ───
function resolveBlocks(answers, clubTag) {
  const primaryGoal = (answers.Q4 || [])[0] || "Mejorar mi estética corporal y definición muscular";
  const q6 = answers.Q6;
  const isSolo = answers.Q13 === "Solo, a mi ritmo" || answers.Q13 === "Sola, a mi ritmo";
  const clubHasAlberca = (CATALOG[clubTag]?.amenidades || []).includes('Alberca');

  let block1, block2, alberca_note = null;

  if (q6 === "En la alberca") {
    if (clubHasAlberca) {
      block1 = AQUATIC_BLOCK_1[primaryGoal];
      block2 = AQUATIC_BLOCK_2[primaryGoal];
    } else {
      block1 = Q4_TO_BLOCK_1[primaryGoal];
      block2 = Q4_TO_BLOCK_2[primaryGoal];
      alberca_note = "Este club no tiene alberca. Revisa otros clubes cerca de ti — varios sí ofrecen entrenamiento acuático.";
    }
  } else if (q6 === "Ambas") {
    block1 = Q4_TO_BLOCK_1[primaryGoal];
    if (clubHasAlberca) {
      const aqua = AQUATIC_BLOCK_2[primaryGoal];
      block2 = { ...Q4_TO_BLOCK_2[primaryGoal], alternativa_acuatica: `Alterna con sesiones en alberca · ${aqua.duracion} · bajo impacto para días de recuperación.` };
    } else {
      block2 = Q4_TO_BLOCK_2[primaryGoal];
      alberca_note = "Este club no tiene alberca. Si quieres incluir trabajo acuático, otros clubes cerca sí la ofrecen.";
    }
  } else if (q6 === "Lo que mi entrenador recomiende") {
    block1 = Q4_TO_BLOCK_1[primaryGoal];
    block2 = { ...Q4_TO_BLOCK_2[primaryGoal], why: Q4_TO_BLOCK_2[primaryGoal].why + " Tu entrenador decide en la primera sesión si trabajas en piso o alberca." };
  } else {
    block1 = Q4_TO_BLOCK_1[primaryGoal];
    block2 = Q4_TO_BLOCK_2[primaryGoal];
  }

  const showBlock3 = !isSolo;
  const ranked = showBlock3 ? rankClasses(answers, clubTag) : { top: [], tambien: [] };

  return { block1, block2, top2: ranked.top, showBlock3, alberca_note };
}

async function callClaude(answers, clubData, block1, block2, top2, hasBlock3) {
  const sys = `Eres editor de copy para Sports World México. Voz: cálido pero sobrio (Equinox/Third Space). Segunda persona "tú" cuando hablas al cliente. Para el brief al advisor, voz informativa y directa. Sin exclamaciones. Sin anglicismos. Sin promesas en kilos/talla/tiempo.

PROHIBIDO ABSOLUTO:
(a) la palabra "plan" en cualquier forma (plan, planes, planear);
(b) cualquier código tipo Q1, Q2, Q3, Q4, etc. — son nombres internos del cuestionario, jamás aparecen en el copy final, refiérete a cada cosa por su nombre humano (objetivos, nivel, sentir al salir, etc.);
(c) JERGA TÉCNICA: hipertrofia, Zone 2, HIIT, VO2max, plyometría, pliométrica, RPE, 1RM, FCmax, déficit calórico, canibalizar músculo, sustrato, concéntrica, control motor, rate of force, propiocepción, isométrica, sobrecarga progresiva, modalidades aeróbicas. Usa lenguaje accesible: "crecimiento muscular", "ritmo conversacional", "intervalos al máximo", "técnica controlada", "fuerza sostenida en posturas", "conciencia corporal".

Siempre referirte a la sesión personalizada como "tu experiencia ideal" o "tu experiencia" o "rutina".

VOCABULARIO APROBADO: construir, sostener, consolidar, mantener, recuperar, ajustar, ritmo, constancia, forma, figura, fuerza, aguante, base, experiencia, rutina, combinación.

RESTRICCIONES YMYL: si el lead tiene condición médica, embarazo/posparto, o tratamiento médico, NO diagnostiques, NO recomiendes intensidades específicas, NO sugieras que el lead "puede hacer todo" — siempre menciona que el advisor valida con criterio clínico en la visita guiada.

FORMATO: SOLO un objeto JSON válido. Sin preámbulo. Sin markdown.`;

  // Build rich context for the LLM
  const q12 = Array.isArray(answers.Q12) ? answers.Q12 : [];
  const q17 = Array.isArray(answers.Q17) ? answers.Q17 : [];
  const hasMedical = q12.some(c => c !== "Ninguna") || (answers.Q12b && answers.Q12b !== "No estoy embarazada ni en posparto") || q17.some(t => t !== "Ninguno");
  const isPregnant = answers.Q12b === "Sí, embarazada";
  const isPostpartum = answers.Q12b === "Sí, posparto reciente (últimos 6 meses)";
  const onGLP1 = q17.includes("GLP-1 (Ozempic, Wegovy, Mounjaro)");
  const onBariatric = q17.includes("Cirugía bariátrica");
  const isFamily = answers.Q14 === "Yo y mis hijos" || answers.Q14 === "La familia completa";
  const hasKids = answers.Q14b === "Sí";
  const isSolo = answers.Q13 === "Solo, a mi ritmo" || answers.Q13 === "Sola, a mi ritmo";
  const isPrincipiante = answers.Q9 === "Principiante";
  const fromOtherGym = answers.Q10 && answers.Q10.toLowerCase().includes("otro gimnasio");
  const fromPause = answers.Q10 && answers.Q10.toLowerCase().includes("pausa");
  const fromSedentary = answers.Q10 && (answers.Q10.toLowerCase().includes("sedentar") || answers.Q10.toLowerCase().includes("inactiv"));
  const wantsAquatic = answers.Q6 === "En la alberca";
  const wantsDry = answers.Q6 === "En piso / área seca";

  const claseLine = hasBlock3 && top2.length >= 2 ? `\n- Top clases grupales: ${top2.map(c => c.display).join(" + ")}` : '\n- Sin clases grupales (el lead prefiere entrenar a su ritmo)';
  const connectorKeys = hasBlock3 ? `,\n  "class_1_connector": "máx 15 palabras · empieza con 'Porque mencionaste que' o similar · cita respuesta del lead",\n  "class_2_connector": "máx 15 palabras · mismo formato pero diferente · cita otra respuesta"` : '';

  const medicalContext = hasMedical ? `\n\n⚠ CONDICIONES MÉDICAS / TRATAMIENTOS DECLARADOS:${q12.filter(c => c !== "Ninguna").map(c => `\n- ${c}`).join("")}${isPregnant ? "\n- Embarazada (las clases con impacto/kicks/saltos ya están filtradas del bloque grupal)" : ""}${isPostpartum ? "\n- Posparto reciente últimos 6 meses (las clases con impacto/abdominales ya están filtradas)" : ""}${onGLP1 ? "\n- En tratamiento GLP-1 (Ozempic/Wegovy/Mounjaro). Recomendación clínica documentada: priorizar fuerza para preservar masa muscular." : ""}${onBariatric ? "\n- Cirugía bariátrica (clases de alto impacto y carga pesada ya filtradas)" : ""}\n\nIMPORTANTE: el bloque grupal ya excluye automáticamente las clases contraindicadas. El advisor ajusta los protocolos de pesas y cardio individual en la visita con criterio clínico.` : "";

  const user = `Genera el copy para esta persona Y el brief para el advisor.

DATOS DEL LEAD:
- Nombre: ${answers.Q1}
- Género: ${answers.Q2}
- Sentir al salir: ${answers.Q3}
- Objetivos: ${(answers.Q4 || []).join(", ")}
- Ritmo preferido: ${answers.Q5}
- Dónde entrena: ${answers.Q6}
- Días disponibles: ${(answers.Q8 || []).join(", ")}
- Franjas horarias: ${(answers.Q7 || []).join(", ")}
- Nivel auto-reportado: ${answers.Q9}
- Historial: ${answers.Q10}${answers.Q11 ? " (pausa: " + answers.Q11 + ")" : ""}
- Acompañamiento: ${answers.Q13}
- Visita con: ${answers.Q14}${hasKids ? " · hijos<12: sí" : ""}${medicalContext}

EXPERIENCIA IDEAL CALCULADA:
- Bloque 1 (individual): ${block1.subgrupo}
- Bloque 2 (cardio): ${block2.maquina} · ${block2.duracion} · ${block2.cuando}${claseLine}
- Club: ${clubData.nombre} · ${clubData.direccion} · ${clubData.distancia_min} min

Genera JSON con estas claves exactas:
{
  "hook": "máx 30 palabras · 1-2 frases · conecta con el sentir al salir · cálido pero sobrio",
  "plan_argument": "máx 45 palabras · explica por qué la combinación es buena para los objetivos · cierra con frase sobre personalización · usa 'experiencia' o 'rutina', no 'plan'",
  "intent_line": "máx 18 palabras · refleja el modo de acompañamiento y con quién visita",
  "infrastructure_argument": "máx 55 palabras · cita Sports World como red de 49 clubes con clasificación por objetivo · menciona el club específico"${connectorKeys},
  "validation_questions": ["array de exactamente 5 preguntas que el advisor debe validar con el lead antes de recomendar. Cada pregunta máx 18 palabras. Voz: profesional, no clínica. Prioridades de selección: (1) historial deportivo si viene de otro gimnasio${hasMedical ? ", (2) condiciones médicas específicas (validar autorización, trimestre si embarazo, tiempo en tratamiento si GLP-1)" : ""}${wantsAquatic ? ", comodidad real en el agua" : ""}${isFamily && hasKids ? ", servicios necesarios para los hijos durante la visita" : ""}${isPrincipiante ? ", primera experiencia en gimnasio y posibles reservas" : ""}${fromPause ? ", motivo de la pausa y duración real" : ""}, formato de entrenamiento preferido (grupal vs individual), confirmar habitualidad de la franja horaria seleccionada."],
  "visit_route": [
    {"title": "Conectar con su objetivo", "description": "máx 18 palabras · qué confirmar específicamente sobre objetivos y motivación"},
    {"title": "Tour enfocado", "description": "máx 18 palabras · qué mostrar primero según preferencia ${wantsAquatic ? "alberca" : wantsDry ? "piso seco" : "ambas"}${isFamily && hasKids ? " + zona FitKidz" : ""}"},
    {"title": "${isFamily && hasKids ? "Resolver la visita con hijos" : hasMedical ? "Resolver condición o tratamiento" : isPrincipiante ? "Resolver dudas de primer ingreso" : isSolo ? "Resolver formato individual" : "Resolver objeción potencial"}", "description": "máx 18 palabras · qué presentar específicamente para resolver este bloqueador"},
    {"title": "Cerrar con siguiente paso", "description": "máx 18 palabras · qué cerrar (membresía + beneficio vigente + fecha concreta)"}
  ],
  "proposal": {
    "main": "máx 35 palabras · oferta principal de membresía + qué incluye específicamente según preferencia del lead${isPrincipiante ? " + mencionar inducción inicial" : ""}${hasMedical ? " + mencionar acompañamiento con criterio clínico" : ""}",
    "complement": "máx 30 palabras · complemento (Personal Training si solo o principiante) + alternativa secundaria si aplica"
  },
  "closing_priorities": ["array de exactamente 3 prioridades que el advisor debe cerrar. Cada una máx 12 palabras. Incluye: (1) explicar qué incluye la membresía con claridad${isFamily && hasKids ? ", (2) resolver FitKidz antes de hablar de precio" : hasMedical ? ", (2) acordar acompañamiento clínico antes de hablar de precio" : ", (2) resolver la objeción específica del lead antes de precio"}, (3) acordar fecha concreta de inicio."],
  "closing_script": "máx 60 palabras · guion sugerido para el advisor en primera persona, dirigido al lead. Plantilla: 'Por lo que me compartiste, la mejor forma de comenzar es con [experiencia centrada en X según preferencia], [acompañamiento adecuado al nivel/formato], y [solución al bloqueador clave]. Revisemos lo que te permite iniciar esta misma semana.' Tono cálido pero directo."
}`;

  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 2000, system: sys, messages: [{ role: "user", content: user }] }),
  });
  if (!r.ok) throw new Error("AI " + r.status);
  const data = await r.json();
  const text = data.content.map(b => b.text || "").join("");
  const cleaned = text.replace(/```json|```/g, "").trim();
  const parsed = JSON.parse(cleaned);

  // Defense-in-depth: strip any residual Qn codes the LLM may have leaked into copy
  const stripQCodes = (s) => {
    if (typeof s !== "string") return s;
    return s
      .replace(/\s*\(\s*Q\d+\w*\s*\)/gi, "")
      .replace(/\s+en\s+Q\d+\w*\b/gi, "")
      .replace(/\s+para\s+Q\d+\w*\b/gi, " para tu objetivo")
      .replace(/\s+según\s+Q\d+\w*\b/gi, "")
      .replace(/\bQ\d+\w*\b/gi, "")
      .replace(/\s{2,}/g, " ")
      .replace(/\s+([.,;:])/g, "$1")
      .trim();
  };
  // Recursive sanitization for nested structures (visit_route, proposal, arrays)
  const sanitize = (v) => {
    if (typeof v === "string") return stripQCodes(v);
    if (Array.isArray(v)) return v.map(sanitize);
    if (v && typeof v === "object") {
      const out = {};
      for (const k of Object.keys(v)) out[k] = sanitize(v[k]);
      return out;
    }
    return v;
  };
  return sanitize(parsed);
}

// ═══════════════ COMPONENTS ═══════════════

function Welcome({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-10" style={{ background: BRAND.black, color: BRAND.white }}>
      <div className="max-w-xl mx-auto w-full">
        <p style={{ color: BRAND.red, letterSpacing: "0.22em", fontSize: "0.7rem", fontWeight: 700 }}>DISEÑA TU EXPERIENCIA</p>
        <h1 className="mt-4" style={{ fontWeight: 900, fontSize: "2.5rem", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Tu experiencia ideal comienza conociéndonos mejor.</h1>
        <p className="mt-5" style={{ color: BRAND.gray3, fontSize: "1rem", lineHeight: 1.55 }}>1 minuto de tu tiempo para comenzar una vida saludable.</p>
        <button onClick={onStart} className="mt-8 px-8 py-3 font-bold rounded" style={{ background: BRAND.red, color: BRAND.white, fontSize: "0.95rem", letterSpacing: "0.02em" }}>Empezar</button>
      </div>
    </div>
  );
}

function ProgressBar({ current, total }) {
  const pct = ((current + 1) / total) * 100;
  return (
    <div className="w-full" style={{ background: BRAND.gray2, height: "3px" }}>
      <div style={{ background: BRAND.red, height: "3px", width: pct + "%", transition: "width 0.3s" }} />
    </div>
  );
}

function QuestionRenderer({ question, value, onChange, onNext, onBack, isFirst, isLast }) {
  const canAdvance = () => {
    if (question.type === "text") return value && value.trim().length > 0;
    if (question.type === "single") return !!value;
    if (question.type === "multi") {
      if (!Array.isArray(value) || value.length === 0) return false;
      if (question.max && value.length > question.max) return false;
      return true;
    }
    if (question.type === "location") return value && (value.cp || value.colonia);
    if (question.type === "physical") return value && value.peso && value.altura && value.edad;
    return false;
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: BRAND.white }}>
      <div className="px-6 pt-6 pb-4 max-w-xl mx-auto w-full flex-1 flex flex-col">
        <h2 className="mt-6" style={{ fontWeight: 900, fontSize: "1.625rem", lineHeight: 1.15, letterSpacing: "-0.015em", color: BRAND.black }}>{question.label}</h2>
        {question.helper && <p className="mt-2" style={{ color: BRAND.gray4, fontSize: "0.875rem" }}>{question.helper}</p>}

        <div className="mt-6 flex-1">
          {question.type === "text" && (
            <input type="text" value={value || ""} onChange={(e) => onChange(e.target.value)} placeholder={question.placeholder} className="w-full px-4 py-3 rounded outline-none" style={{ background: BRAND.gray1, color: BRAND.black, fontSize: "1rem", border: "1px solid " + BRAND.gray2 }} />
          )}

          {question.type === "single" && (
            <div className="flex flex-col gap-2">
              {question.options.map(opt => (
                <button key={opt} onClick={() => onChange(opt)} className="text-left px-4 py-3 rounded transition" style={{ background: value === opt ? BRAND.black : BRAND.gray1, color: value === opt ? BRAND.white : BRAND.black, border: "1px solid " + (value === opt ? BRAND.black : BRAND.gray2), fontSize: "0.9375rem", fontWeight: value === opt ? 600 : 500 }}>{opt}</button>
              ))}
            </div>
          )}

          {question.type === "multi" && !question.chips && (
            <div className="flex flex-col gap-2">
              {question.options.map(opt => {
                const sel = Array.isArray(value) && value.includes(opt);
                return (
                  <button key={opt} onClick={() => {
                    const cur = Array.isArray(value) ? value : [];
                    if (sel) onChange(cur.filter(v => v !== opt));
                    else if (!question.max || cur.length < question.max) onChange([...cur, opt]);
                  }} className="text-left px-4 py-3 rounded transition" style={{ background: sel ? BRAND.black : BRAND.gray1, color: sel ? BRAND.white : BRAND.black, border: "1px solid " + (sel ? BRAND.black : BRAND.gray2), fontSize: "0.9375rem", fontWeight: sel ? 600 : 500 }}>{opt}{sel && " ✓"}</button>
                );
              })}
              {question.max && <p className="mt-2" style={{ color: BRAND.gray4, fontSize: "0.75rem" }}>Máximo {question.max} opciones.</p>}
            </div>
          )}

          {question.type === "multi" && question.chips && (
            <div className="flex flex-wrap gap-2">
              {question.options.map(opt => {
                const sel = Array.isArray(value) && value.includes(opt);
                return (
                  <button key={opt} onClick={() => {
                    const cur = Array.isArray(value) ? value : [];
                    if (sel) onChange(cur.filter(v => v !== opt));
                    else onChange([...cur, opt]);
                  }} className="px-5 py-3 rounded font-bold transition" style={{ background: sel ? BRAND.black : BRAND.gray1, color: sel ? BRAND.white : BRAND.black, border: "1px solid " + (sel ? BRAND.black : BRAND.gray2), fontSize: "0.9375rem", minWidth: "3rem" }}>{opt}</button>
                );
              })}
            </div>
          )}

          {question.type === "location" && (
            <div className="flex flex-col gap-3">
              <div>
                <label style={{ fontSize: "0.75rem", color: BRAND.gray4, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>Código postal</label>
                <input type="text" inputMode="numeric" maxLength={5} value={(value || {}).cp || ""} onChange={(e) => onChange({ ...(value || {}), cp: e.target.value.replace(/\D/g, "") })} placeholder="00000" className="w-full mt-1 px-4 py-3 rounded outline-none" style={{ background: BRAND.gray1, color: BRAND.black, fontSize: "1rem", border: "1px solid " + BRAND.gray2 }} />
              </div>
              <p style={{ color: BRAND.gray4, fontSize: "0.75rem", textAlign: "center" }}>o</p>
              <div>
                <label style={{ fontSize: "0.75rem", color: BRAND.gray4, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>Colonia</label>
                <input type="text" value={(value || {}).colonia || ""} onChange={(e) => onChange({ ...(value || {}), colonia: e.target.value })} placeholder="Ej. Polanco" className="w-full mt-1 px-4 py-3 rounded outline-none" style={{ background: BRAND.gray1, color: BRAND.black, fontSize: "1rem", border: "1px solid " + BRAND.gray2 }} />
              </div>
            </div>
          )}

          {question.type === "physical" && (
            <div className="grid grid-cols-3 gap-3">
              {[{ k: "peso", l: "Peso (kg)", min: 30, max: 300 }, { k: "altura", l: "Altura (cm)", min: 120, max: 230 }, { k: "edad", l: "Edad", min: 15, max: 90 }].map(f => (
                <div key={f.k}>
                  <label style={{ fontSize: "0.7rem", color: BRAND.gray4, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>{f.l}</label>
                  <input type="number" min={f.min} max={f.max} value={(value || {})[f.k] || ""} onChange={(e) => onChange({ ...(value || {}), [f.k]: e.target.value })} className="w-full mt-1 px-3 py-3 rounded outline-none text-center" style={{ background: BRAND.gray1, color: BRAND.black, fontSize: "1rem", border: "1px solid " + BRAND.gray2 }} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-3 mt-8 pb-6">
          {!isFirst && <button onClick={onBack} className="px-6 py-3 rounded font-semibold" style={{ background: "transparent", color: BRAND.gray4, fontSize: "0.875rem" }}>← Atrás</button>}
          <button onClick={onNext} disabled={!canAdvance()} className="flex-1 px-6 py-3 rounded font-bold" style={{ background: canAdvance() ? BRAND.red : BRAND.gray2, color: canAdvance() ? BRAND.white : BRAND.gray3, fontSize: "0.95rem", cursor: canAdvance() ? "pointer" : "not-allowed" }}>{isLast ? "Ver mi experiencia ideal" : "Continuar"}</button>
        </div>
      </div>
    </div>
  );
}

function Loading({ msg }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ background: BRAND.white }}>
      <div className="flex flex-col items-center max-w-xs text-center">
        <div className="w-12 h-12 rounded-full border-4 animate-spin" style={{ borderColor: BRAND.gray2, borderTopColor: BRAND.red }}></div>
        <p className="mt-6 font-bold" style={{ color: BRAND.black, fontSize: "1.125rem" }}>{msg}</p>
      </div>
    </div>
  );
}

function ResultPage({ data, onRestart, onSchedule }) {
  const [active, setActive] = useState({
    club: data.club,
    otros: data.otrosClubes,
    block1: data.block1,
    block2: data.block2,
    top2: data.top2,
    alberca_note: data.alberca_note,
  });
  const [showOtros, setShowOtros] = useState(false);
  const [showChangeClasses, setShowChangeClasses] = useState(false);
  const [showAllClasses, setShowAllClasses] = useState(false);
  const [pickedNames, setPickedNames] = useState([]);
  const { answers, llm, showBlock3, needsAdvisorReview, onGLP1 } = data;
  const club = active.club;
  const block1 = active.block1;
  const block2 = active.block2;
  const top2 = active.top2;
  const otrosClubes = active.otros;
  const alberca_note = active.alberca_note;

  // Recompute FitKidz visibility from active club
  const isFamily = answers.Q14 === "Yo y mis hijos" || answers.Q14 === "La familia completa";
  const showFitkidz = isFamily && answers.Q14b === "Sí";

  const handleSelectClub = (newClubTag) => {
    // Find full club data from CLUBS array
    const rawClub = CLUBS.find(c => c.tag === newClubTag);
    if (!rawClub) return;
    const newClubResult = buildClubResult(rawClub, 0);
    // Pull stored distancia from otros list
    const otrosEntry = otrosClubes.find(c => c.tag === newClubTag);
    if (otrosEntry) newClubResult.distancia_min = otrosEntry.distancia_min;
    // Re-evaluate blocks with new club (Q6 may affect block1/2 if alberca differs)
    const blocks = resolveBlocks(answers, newClubTag);
    // Reorder otros: put current principal back in, remove the new principal
    const newOtros = [
      { ...club, distancia_min: club.distancia_min },
      ...otrosClubes.filter(c => c.tag !== newClubTag),
    ].slice(0, 5);
    setActive({
      club: newClubResult,
      otros: newOtros,
      block1: blocks.block1,
      block2: blocks.block2,
      top2: blocks.top2,
      alberca_note: blocks.alberca_note,
    });
    setShowOtros(false);
    setShowChangeClasses(false);
    setShowAllClasses(false);
  };

  // All compatible classes (Q4 + Q9 + Q6 filter) the club offers — for the picker
  const allCompatibleClassesForPicker = (() => {
    const q4 = answers.Q4 || [];
    const nivel = answers.Q9 || "Intermedio";
    const q6 = answers.Q6;
    const cat = CATALOG[club.tag] || { adultas: [] };
    const offered = new Set(cat.adultas);
    let inCatalog = CLASS_FICHAS.filter(c => offered.has(c.nombre));
    if (q6 === "En la alberca") inCatalog = inCatalog.filter(c => c.aquatic);
    else if (q6 === "En piso / área seca") inCatalog = inCatalog.filter(c => !c.aquatic);
    inCatalog = inCatalog.filter(c => c.nivel.includes(nivel));
    const scored = inCatalog.map(c => {
      let score = 0;
      let hasNoApto = false;
      for (const obj of q4) {
        const val = c.profiles ? c.profiles[obj] : null;
        if (val === "top3") score += 3;
        else if (val === "apto") score += 1;
        else if (val === "no apto") hasNoApto = true;
      }
      return { ...c, score, hasNoApto };
    });
    const compatible = scored.filter(c => !c.hasNoApto && c.score > 0);
    compatible.sort((a, b) => b.score - a.score || a.display.localeCompare(b.display));
    return compatible;
  })();

  // All adult classes the club offers (no filter) — for "Ver todas"
  const fullClubCatalog = (CATALOG[club.tag] && CATALOG[club.tag].adultas) || [];

  const togglePick = (name) => {
    setPickedNames(prev => {
      if (prev.includes(name)) return prev.filter(n => n !== name);
      if (prev.length >= 2) return [prev[1], name]; // keep most recent 2
      return [...prev, name];
    });
  };

  const applyChangedClasses = () => {
    if (pickedNames.length === 0) return;
    const newTop2 = pickedNames.map(name => allCompatibleClassesForPicker.find(c => c.nombre === name)).filter(Boolean);
    setActive(prev => ({ ...prev, top2: newTop2 }));
    setShowChangeClasses(false);
  };

  const openChangePanel = () => {
    setPickedNames(top2.map(c => c.nombre));
    setShowChangeClasses(true);
    setShowAllClasses(false);
  };

  const firstName = (answers.Q1 || "").split(" ")[0] || "Tú";

  // Summary card values for the header strip
  const objetivoLabel = (answers.Q4 && answers.Q4[0]) || "Tu experiencia";
  const nivelLabel = answers.Q9 || "—";
  const diasLabel = (answers.Q8 || []).join(" · ");
  const franjaLabel = (answers.Q7 || [])[0] ? (answers.Q7[0]).split(" ")[0] : "";
  const horarioLabel = diasLabel + (franjaLabel ? " · " + franjaLabel.toLowerCase() : "");
  const entrenasConLabel = answers.Q14 === "Yo y mis hijos" ? "Con tus hijos" : answers.Q14 === "La familia completa" ? "Con tu familia" : "A tu ritmo";

  // Safety section copy adapts to medical context
  const hasMedicalContext = needsAdvisorReview || onGLP1 || alberca_note;
  let safetyBody;
  if (onGLP1 && needsAdvisorReview) {
    safetyBody = "Tu experiencia incluye prioridad en clases de fuerza para preservar tu masa muscular durante tu tratamiento. Las clases con impacto o restricciones específicas ya están filtradas. Tu Advisor confirma el detalle en la visita guiada.";
  } else if (onGLP1) {
    safetyBody = "Durante tu tratamiento con GLP-1, priorizamos clases de fuerza para preservar tu masa muscular mientras bajas grasa. Tu Advisor confirma el detalle clínico en la visita guiada.";
  } else if (needsAdvisorReview) {
    safetyBody = "Con base en lo que compartiste, esta recomendación prioriza opciones controladas y evita actividades contraindicadas. Las clases con impacto o restricciones específicas ya están filtradas. Informa al personal del club sobre cualquier indicación de tu profesional de salud.";
  } else {
    safetyBody = "Con base en lo que compartiste, esta recomendación se ajusta a tu nivel y disponibilidad. Si tienes alguna indicación médica antes de comenzar, coméntala con tu Advisor en la visita guiada.";
  }

  return (
    <div style={{ background: BRAND.white, color: BRAND.black, minHeight: "100vh" }}>
      {/* Top bar (template v1.0 style) */}
      <div style={{ height: "4px", background: BRAND.red }} />

      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "1.75rem 1.5rem 2rem" }}>

        {/* ─── PÁGINA 1 ─── */}
        <div className="page page-1">

          <header style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2.5rem", alignItems: "start" }} className="result-header">
            <div>
              <p style={{ fontSize: "0.6875rem", letterSpacing: "0.22em", textTransform: "uppercase", color: BRAND.red, fontWeight: 800, marginBottom: "0.625rem" }}>Tu experiencia ideal personalizada</p>
              <h1 style={{ fontSize: "2.25rem", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "0.625rem" }}>{firstName}, esta es tu experiencia ideal.</h1>
              <p style={{ fontSize: "1rem", lineHeight: 1.45, marginBottom: "0.625rem", maxWidth: "720px" }}>{llm.hook}</p>
              <p style={{ fontSize: "0.875rem", color: BRAND.gray4, lineHeight: 1.55, maxWidth: "720px" }}>{llm.plan_argument}</p>
            </div>
            <div style={{ textAlign: "right", paddingTop: "0.25rem" }} className="brand-box">
              <p style={{ fontSize: "0.95rem", fontWeight: 800, letterSpacing: "0.05em", color: BRAND.black }}>SPORTS WORLD</p>
              <p style={{ fontSize: "0.6875rem", color: BRAND.gray4, marginTop: "0.25rem" }}>Tu experiencia, a tu medida</p>
            </div>
          </header>

          {/* Summary cards (4 cajas) — from preview template */}
          <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem", marginTop: "1.5rem" }} className="summary-grid">
            {[
              { label: "Tu objetivo", value: objetivoLabel },
              { label: "Tu nivel", value: nivelLabel },
              { label: "Tu horario", value: horarioLabel || "—" },
              { label: "Entrenas con", value: entrenasConLabel },
            ].map((card, i) => (
              <div key={i} style={{ border: "1px solid " + BRAND.gray2, borderRadius: "4px", padding: "0.875rem 0.9375rem", background: BRAND.white, minHeight: "70px" }}>
                <p style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: BRAND.gray4, fontWeight: 700, marginBottom: "0.4375rem" }}>{card.label}</p>
                <p style={{ fontSize: "0.9375rem", fontWeight: 800, color: BRAND.black, lineHeight: 1.25 }}>{card.value}</p>
              </div>
            ))}
          </section>

          {/* CTA-row */}
          <section style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1.5rem", marginTop: "1.25rem", padding: "1rem 1.375rem", borderRadius: "4px", background: "#FFF4F4", border: "1px solid #F3B9BC" }} className="cta-row">
            <div>
              <p style={{ fontSize: "0.9375rem", fontWeight: 800, marginBottom: "0.1875rem", color: BRAND.black }}>Conoce el club y valida tu experiencia con un Advisor.</p>
              <p style={{ fontSize: "0.8125rem", color: BRAND.gray4 }}>La visita guiada permite ajustar horarios, actividades y nivel de acompañamiento.</p>
            </div>
            <button onClick={onSchedule} style={{ background: BRAND.red, color: BRAND.white, padding: "0.75rem 1.75rem", borderRadius: "3px", fontSize: "0.8125rem", fontWeight: 800, letterSpacing: "0.05em", border: "none", cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}>AGENDAR VISITA GUIADA</button>
          </section>

          {/* Combination kicker + section title */}
          <div style={{ marginTop: "2rem" }}>
            <p style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: BRAND.gray4, fontWeight: 800 }}>Tu combinación recomendada</p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              <span style={{ width: "1.75rem", height: "1.75rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: BRAND.black, color: BRAND.white, fontWeight: 800, fontSize: "0.75rem" }}>1</span>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 900, letterSpacing: "-0.01em", margin: 0 }}>Tres componentes para una experiencia equilibrada</h2>
            </div>
          </div>

          {/* Plan-cards with colors — from preview template */}
          <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.875rem" }} className="plan-grid">

            <article style={{ background: "#EEF5FF", border: "1px solid #CDDFF5", borderRadius: "4px", padding: "1.125rem 1.25rem", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.625rem" }}>
                <span style={{ width: "1.75rem", height: "1.75rem", borderRadius: "3px", background: BRAND.white, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.8125rem", border: "1px solid rgba(0,0,0,0.08)" }}>01</span>
                <span style={{ fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 800, color: BRAND.gray4 }}>{answers.Q6 === "En la alberca" ? "Acuático" : "Fuerza"}</span>
              </div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 900, lineHeight: 1.15, marginBottom: "0.5rem" }}>{block1.subgrupo}</h3>
              <p style={{ fontSize: "0.8125rem", color: "#39414A", marginBottom: "0.625rem", flex: 1, lineHeight: 1.45 }}>{block1.why_template}</p>
              <a href="#" style={{ fontSize: "0.75rem", color: BRAND.red, fontWeight: 700, borderBottom: "1px solid " + BRAND.red, paddingBottom: "2px", alignSelf: "flex-start", textDecoration: "none" }}>Ver más →</a>
            </article>

            <article style={{ background: "#EDF8F1", border: "1px solid #CDE6D6", borderRadius: "4px", padding: "1.125rem 1.25rem", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.625rem" }}>
                <span style={{ width: "1.75rem", height: "1.75rem", borderRadius: "3px", background: BRAND.white, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.8125rem", border: "1px solid rgba(0,0,0,0.08)" }}>02</span>
                <span style={{ fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 800, color: BRAND.gray4 }}>Cardio</span>
              </div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 900, lineHeight: 1.15, marginBottom: "0.5rem" }}>{block2.maquina}</h3>
              <p style={{ fontSize: "0.75rem", color: BRAND.black, fontWeight: 600, marginBottom: "0.5rem", lineHeight: 1.4 }}>{block2.duracion} · {block2.cuando}</p>
              <p style={{ fontSize: "0.8125rem", color: "#39414A", marginBottom: block2.alternativa_acuatica ? "0.5rem" : "0.625rem", flex: block2.alternativa_acuatica ? "none" : 1, lineHeight: 1.45 }}>{block2.why}</p>
              {block2.alternativa_acuatica && (
                <p style={{ fontSize: "0.75rem", color: BRAND.red, fontWeight: 600, marginBottom: "0.625rem", flex: 1, lineHeight: 1.4, borderLeft: "2px solid " + BRAND.red, paddingLeft: "0.5rem" }}>{block2.alternativa_acuatica}</p>
              )}
              <a href="#" style={{ fontSize: "0.75rem", color: BRAND.red, fontWeight: 700, borderBottom: "1px solid " + BRAND.red, paddingBottom: "2px", alignSelf: "flex-start", textDecoration: "none" }}>Ver más →</a>
            </article>

            {showBlock3 ? (
              <article style={{ background: "#F3F4F6", border: "1px solid #DEDFE3", borderRadius: "4px", padding: "1.125rem 1.25rem", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.625rem" }}>
                  <span style={{ width: "1.75rem", height: "1.75rem", borderRadius: "3px", background: BRAND.white, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.8125rem", border: "1px solid rgba(0,0,0,0.08)" }}>03</span>
                  <span style={{ fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 800, color: BRAND.gray4 }}>Clases en grupo</span>
                </div>
                <div style={{ flex: 1, marginBottom: "0.625rem" }}>
                  {top2.length === 0 ? (
                    <p style={{ fontSize: "0.8125rem", color: BRAND.gray4, lineHeight: 1.45, fontStyle: "italic" }}>No encontramos clases en este club que encajen con tu objetivo y nivel. Considera Personal Training o explora otros clubes cerca.</p>
                  ) : (
                    <>
                      {top2[0] && (
                        <div style={{ marginBottom: "0.5rem" }}>
                          <p style={{ fontSize: "0.875rem", fontWeight: 800, marginBottom: "0.125rem" }}>{top2[0].display}</p>
                          {llm.class_1_connector && <p style={{ fontSize: "0.7rem", color: BRAND.gray4, fontStyle: "italic", marginBottom: "0.2rem" }}>{llm.class_1_connector}</p>}
                          <p style={{ fontSize: "0.75rem", color: "#39414A", lineHeight: 1.4 }}>{top2[0].why}</p>
                        </div>
                      )}
                      {top2[1] && (
                        <div style={{ paddingTop: "0.4375rem", borderTop: "1px solid #DEDFE3" }}>
                          <p style={{ fontSize: "0.875rem", fontWeight: 800, marginBottom: "0.125rem" }}>{top2[1].display}</p>
                          {llm.class_2_connector && <p style={{ fontSize: "0.7rem", color: BRAND.gray4, fontStyle: "italic", marginBottom: "0.2rem" }}>{llm.class_2_connector}</p>}
                          <p style={{ fontSize: "0.75rem", color: "#39414A", lineHeight: 1.4 }}>{top2[1].why}</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start" }}>
                  {top2.length > 0 ? (
                    <>
                      <button onClick={openChangePanel} style={{ fontSize: "0.75rem", color: BRAND.red, fontWeight: 700, background: "none", border: "none", borderBottom: "1px solid " + BRAND.red, cursor: "pointer", padding: 0, paddingBottom: "2px", fontFamily: "inherit", textAlign: "left" }}>Cambiar mis clases →</button>
                      <button onClick={() => { setShowAllClasses(s => !s); setShowChangeClasses(false); }} style={{ fontSize: "0.75rem", color: BRAND.red, fontWeight: 700, background: "none", border: "none", borderBottom: "1px solid " + BRAND.red, cursor: "pointer", padding: 0, paddingBottom: "2px", fontFamily: "inherit", textAlign: "left" }}>{showAllClasses ? "Ocultar lista" : "Ver todas las del club →"}</button>
                    </>
                  ) : (
                    <a href="#" style={{ fontSize: "0.8125rem", color: BRAND.white, fontWeight: 700, background: BRAND.red, padding: "0.5rem 1rem", borderRadius: "3px", textDecoration: "none" }}>Conoce Personal Training →</a>
                  )}
                </div>
              </article>
            ) : (
              <article style={{ background: BRAND.black, color: BRAND.white, borderRadius: "4px", padding: "1.125rem 1.25rem", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.625rem" }}>
                  <span style={{ width: "1.75rem", height: "1.75rem", borderRadius: "3px", background: BRAND.white, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.8125rem", color: BRAND.black }}>03</span>
                  <span style={{ fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 800, color: BRAND.red }}>Tu rutina individual</span>
                </div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 900, lineHeight: 1.15, marginBottom: "0.5rem", color: BRAND.white }}>Personal Training</h3>
                <p style={{ fontSize: "0.8125rem", color: BRAND.gray3, marginBottom: "0.625rem", flex: 1, lineHeight: 1.45 }}>Decidiste entrenar a tu ritmo, sin clases grupales. Personal Training te asigna un entrenador dedicado en tus horarios.</p>
                <a href="#" style={{ display: "inline-block", fontSize: "0.8125rem", color: BRAND.white, fontWeight: 700, background: BRAND.red, padding: "0.5rem 1rem", borderRadius: "3px", alignSelf: "flex-start", textDecoration: "none" }}>Conoce Personal Training →</a>
              </article>
            )}
          </section>

          {/* Change classes panel (preserved) */}
          {showChangeClasses && (
            <section style={{ background: BRAND.gray1, borderRadius: "4px", padding: "1.25rem 1.5rem", marginTop: "0.875rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.875rem", gap: "1rem", flexWrap: "wrap" }}>
                <div>
                  <p style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: BRAND.red, fontWeight: 700, marginBottom: "0.25rem" }}>Cambiar mis clases</p>
                  <p style={{ fontSize: "0.8125rem", color: BRAND.gray4, lineHeight: 1.4 }}>Selecciona hasta 2 clases que encajen con tu objetivo y nivel en este club.</p>
                </div>
                <span style={{ fontSize: "0.75rem", color: BRAND.gray4, fontWeight: 600 }}>{pickedNames.length} / 2 seleccionadas</span>
              </div>
              {allCompatibleClassesForPicker.length === 0 ? (
                <p style={{ fontSize: "0.8125rem", color: BRAND.gray4, fontStyle: "italic" }}>No hay otras clases en este club que encajen con tu objetivo y nivel. Considera Personal Training o cambia de club.</p>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  {allCompatibleClassesForPicker.map(c => {
                    const isPicked = pickedNames.includes(c.nombre);
                    return (
                      <button key={c.nombre} onClick={() => togglePick(c.nombre)} style={{
                        padding: "0.625rem 0.875rem",
                        border: isPicked ? "2px solid " + BRAND.red : "1px solid " + BRAND.gray2,
                        background: isPicked ? "#FFF5F5" : BRAND.white,
                        borderRadius: "4px", cursor: "pointer", textAlign: "left", fontFamily: "inherit",
                        display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem"
                      }}>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: "0.875rem", fontWeight: 700, color: BRAND.black, marginBottom: "0.125rem" }}>{c.display}{isPicked && <span style={{ color: BRAND.red, marginLeft: "0.5rem" }}>✓</span>}</p>
                          <p style={{ fontSize: "0.75rem", color: BRAND.gray4, lineHeight: 1.4 }}>{c.why}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
              {allCompatibleClassesForPicker.length > 0 && (
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem", marginTop: "1rem" }}>
                  <button onClick={() => setShowChangeClasses(false)} style={{ background: "none", border: "none", color: BRAND.gray4, cursor: "pointer", fontFamily: "inherit", fontSize: "0.8125rem", padding: "0.5rem 1rem" }}>Cancelar</button>
                  <button onClick={applyChangedClasses} disabled={pickedNames.length === 0} style={{ background: pickedNames.length === 0 ? BRAND.gray3 : BRAND.red, color: BRAND.white, border: "none", borderRadius: "3px", padding: "0.5rem 1.25rem", fontWeight: 700, fontSize: "0.8125rem", cursor: pickedNames.length === 0 ? "not-allowed" : "pointer", fontFamily: "inherit" }}>Aplicar</button>
                </div>
              )}
            </section>
          )}

          {showAllClasses && fullClubCatalog.length > 0 && (
            <section style={{ background: BRAND.gray1, borderRadius: "4px", padding: "1.25rem 1.5rem", marginTop: "0.875rem" }}>
              <p style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: BRAND.gray4, fontWeight: 700, marginBottom: "0.625rem" }}>Catálogo completo del club ({fullClubCatalog.length} clases)</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.375rem" }}>
                {fullClubCatalog.map(name => {
                  const ficha = CLASS_FICHAS.find(f => f.nombre === name);
                  const inTop = top2.some(t => t.nombre === name);
                  return (
                    <div key={name} style={{
                      padding: "0.5rem 0.625rem",
                      background: inTop ? "#FFF5F5" : BRAND.white,
                      border: inTop ? "1px solid " + BRAND.red : "1px solid " + BRAND.gray2,
                      borderRadius: "3px", fontSize: "0.8125rem"
                    }}>
                      {inTop && <span style={{ color: BRAND.red, fontWeight: 700, marginRight: "0.25rem" }}>✓</span>}
                      <span style={{ fontWeight: ficha ? 700 : 500, color: BRAND.black }}>{ficha ? ficha.display : name}</span>
                    </div>
                  );
                })}
              </div>
              <p style={{ fontSize: "0.7rem", color: BRAND.gray4, marginTop: "0.875rem", fontStyle: "italic" }}>El catálogo refleja la oferta real registrada en la matriz operativa de SW.</p>
            </section>
          )}

        </div>
        {/* ─── END PÁGINA 1 ─── */}

        {/* Page separator (digital view) */}
        <div className="page-separator" style={{ marginTop: "2.5rem", paddingTop: "1rem", borderTop: "1px dashed " + BRAND.gray3, display: "flex", justifyContent: "center" }}>
          <span style={{ background: BRAND.white, padding: "0 0.875rem", marginTop: "-1.625rem", fontSize: "0.6875rem", letterSpacing: "0.22em", textTransform: "uppercase", color: BRAND.gray4, fontWeight: 700 }}>Página 2</span>
        </div>

        {/* ─── PÁGINA 2 ─── */}
        <div className="page page-2" style={{ marginTop: "1.5rem" }}>

          {/* Two-col: Club + Family benefit (or full-width club if no family) */}
          <section style={{ display: "grid", gridTemplateColumns: showFitkidz ? "1.12fr 0.88fr" : "1fr", gap: "1rem" }} className="two-col">

            <article style={{ background: BRAND.black, color: BRAND.white, borderRadius: "6px", padding: "1.5rem", minHeight: "200px" }}>
              <p style={{ fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BRAND.red, fontWeight: 800, marginBottom: "0.5rem" }}>Tu club recomendado</p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 900, lineHeight: 1.1, marginBottom: "0.375rem" }}>{club.nombre}</h2>
              <p style={{ fontSize: "0.8125rem", color: "#D3D3D3", marginBottom: "0.875rem" }}>A {club.distancia_min} min de tu ubicación · {club.direccion}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "#DEDEDE", lineHeight: 1.45, marginBottom: "0.75rem" }}><strong>Por qué lo recomendamos:</strong> reúne las amenidades necesarias para tu experiencia y está cerca de ti.</p>
                  <p style={{ fontSize: "0.75rem", fontStyle: "italic", borderLeft: "3px solid " + BRAND.red, paddingLeft: "0.625rem", lineHeight: 1.4, color: "#FFFFFF" }}>{llm.intent_line}</p>
                  <button onClick={() => setShowOtros(!showOtros)} style={{ display: "inline-block", marginTop: "0.875rem", fontSize: "0.7rem", color: BRAND.white, fontWeight: 600, borderBottom: "1px solid " + BRAND.red, background: "none", border: "none", borderBottomColor: BRAND.red, cursor: "pointer", padding: 0, paddingBottom: "2px" }}>{showOtros ? "Ocultar otros clubes" : "Ver otros clubes cerca de ti →"}</button>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {club.amenidades.map((a, i) => (
                    <li key={i} style={{ fontSize: "0.75rem", color: "#EFEFEF", padding: "0.25rem 0 0.25rem 1.125rem", position: "relative", lineHeight: 1.45 }}>
                      <span style={{ position: "absolute", left: 0, top: "0.5rem", width: "0.375rem", height: "0.375rem", background: BRAND.red, borderRadius: "50%" }}></span>{a}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {showFitkidz && club.tiene_fitkidz && (
              <article style={{ background: "#EDF8F1", border: "1px solid #CDE6D6", borderRadius: "6px", padding: "1.5rem", minHeight: "200px" }}>
                <p style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#215F3F", fontWeight: 800, marginBottom: "0.5rem" }}>Beneficio familiar</p>
                <h2 style={{ fontSize: "1.25rem", fontWeight: 900, lineHeight: 1.15, marginBottom: "0.5rem" }}>Entrena mientras tus hijos se divierten</h2>
                <p style={{ fontSize: "0.8125rem", color: "#3D4B43", lineHeight: 1.45, marginBottom: "0.875rem" }}>{club.kids_classes && club.kids_classes.length > 0 ? `Este club ofrece ${club.kids_classes.length} actividades para niños dentro del club, para que puedas entrenar con tranquilidad.` : "Este club ofrece FitKidz. Tu Advisor compartirá el detalle de actividades y horarios en tu visita guiada."}</p>
                {club.kids_classes && club.kids_classes.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {club.kids_classes.slice(0, 6).map(k => (
                      <span key={k} style={{ fontSize: "0.6875rem", background: BRAND.white, border: "1px solid #CFE2D5", borderRadius: "10mm", padding: "0.1875rem 0.5rem", color: "#355844", fontWeight: 700 }}>{displayKidsClass(k)}</span>
                    ))}
                  </div>
                )}
              </article>
            )}

            {showFitkidz && !club.tiene_fitkidz && (
              <article style={{ background: BRAND.gray1, border: "1px solid " + BRAND.gray2, borderRadius: "6px", padding: "1.5rem", minHeight: "200px" }}>
                <p style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: BRAND.gray4, fontWeight: 800, marginBottom: "0.5rem" }}>FitKidz no disponible aquí</p>
                <p style={{ fontSize: "0.8125rem", color: BRAND.gray4, lineHeight: 1.5 }}>Este club no ofrece FitKidz. Otros clubes cerca sí lo tienen — revisa la lista de otros clubes.</p>
              </article>
            )}
          </section>

          {/* Other clubs panel (preserved) */}
          {showOtros && otrosClubes && otrosClubes.length > 0 && (
            <section style={{ background: BRAND.gray1, borderRadius: "4px", padding: "1.125rem 1.25rem", marginTop: "0.875rem" }}>
              <p style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: BRAND.gray4, marginBottom: "0.625rem", fontWeight: 600 }}>Otros clubes cerca de ti — toca uno para cambiar</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {otrosClubes.map((c, i) => (
                  <button key={c.tag} onClick={() => handleSelectClub(c.tag)} style={{ padding: "0.75rem 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", background: "none", border: "none", borderTop: i === 0 ? "none" : "1px solid " + BRAND.gray2, cursor: "pointer", textAlign: "left", width: "100%", fontFamily: "inherit" }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: "0.875rem", fontWeight: 700, marginBottom: "0.125rem", color: BRAND.black }}>{c.nombre}</p>
                      <p style={{ fontSize: "0.75rem", color: BRAND.gray4, lineHeight: 1.4 }}>{c.direccion}</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.25rem" }}>
                      <p style={{ fontSize: "0.75rem", color: BRAND.gray4, fontWeight: 600, whiteSpace: "nowrap" }}>{c.distancia_min} min</p>
                      <span style={{ fontSize: "0.7rem", color: BRAND.red, fontWeight: 700 }}>Elegir →</span>
                    </div>
                  </button>
                ))}
              </div>
              <p style={{ fontSize: "0.7rem", color: BRAND.gray4, marginTop: "0.625rem", fontStyle: "italic" }}>Al elegir otro club, tu experiencia ideal se recalcula con su catálogo y amenidades.</p>
            </section>
          )}

          {club.tooFar && (
            <section style={{ background: BRAND.gray1, border: "1px solid " + BRAND.gray2, borderRadius: "4px", padding: "0.875rem 1.125rem", marginTop: "0.75rem" }}>
              <p style={{ fontSize: "0.8125rem", color: BRAND.gray4, lineHeight: 1.5 }}>El club más cercano está a más de {club.distancia_min} minutos de tu zona. Si la distancia te resulta lejos, considera la lista de otros clubes y elige el que te quede mejor.</p>
            </section>
          )}

          {/* Safety section — amber, contextual to medical profile */}
          <section style={{ marginTop: "1.5rem", background: "#FFF6E7", border: "1px solid #EED4A2", borderRadius: "4px", padding: "1.125rem 1.25rem", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div style={{ width: "2rem", height: "2rem", minWidth: "2rem", borderRadius: "50%", background: "#F0BC54", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#5F3D00", fontSize: "1.0625rem" }}>!</div>
            <div>
              <h3 style={{ fontSize: "0.9375rem", fontWeight: 800, marginBottom: "0.3125rem", color: "#5F3D00" }}>Antes de comenzar</h3>
              <p style={{ fontSize: "0.8125rem", lineHeight: 1.45, color: "#5D4A28", margin: 0 }}>{safetyBody}</p>
              <p style={{ fontSize: "0.7rem", color: "#71654E", marginTop: "0.375rem" }}>Esta recomendación orienta la selección de servicios disponibles y no sustituye una valoración médica.</p>
            </div>
          </section>

          <p style={{ fontSize: "0.875rem", color: BRAND.gray4, lineHeight: 1.55, marginTop: "1.25rem", marginBottom: "1.25rem", maxWidth: "760px" }}>{llm.infrastructure_argument}</p>

          {/* Bottom CTA + restart */}
          <div style={{ textAlign: "center", paddingTop: "1rem", borderTop: "1px solid " + BRAND.gray2 }}>
            <button onClick={onSchedule} style={{ display: "inline-block", background: BRAND.red, color: BRAND.white, fontSize: "0.95rem", fontWeight: 700, padding: "0.875rem 2.25rem", borderRadius: "4px", border: "none", textDecoration: "none", letterSpacing: "0.02em", cursor: "pointer", fontFamily: "inherit" }}>Agendar visita guiada</button>
            <div style={{ marginTop: "1rem" }}>
              <button onClick={onRestart} style={{ color: BRAND.gray4, textDecoration: "none", fontWeight: 500, fontSize: "0.75rem", background: "none", border: "none", cursor: "pointer" }}>Reiniciar cuestionario</button>
            </div>
          </div>

          {/* Fineprint */}
          <div style={{ marginTop: "1.5rem", paddingTop: "0.875rem", borderTop: "1px solid " + BRAND.gray2, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.65rem", color: BRAND.gray4 }}>Recomendación generada con base en tus respuestas.</span>
            <span style={{ fontSize: "0.65rem", color: BRAND.gray4 }}>Sports World · Tu experiencia, a tu medida</span>
          </div>

        </div>
        {/* ─── END PÁGINA 2 ─── */}

      </div>

      <style>{`
        @media (max-width: 720px) {
          .result-header { grid-template-columns: 1fr !important; }
          .brand-box { text-align: left !important; }
          .summary-grid { grid-template-columns: 1fr 1fr !important; }
          .cta-row { flex-direction: column !important; align-items: flex-start !important; }
          .plan-grid { grid-template-columns: 1fr !important; }
          .two-col { grid-template-columns: 1fr !important; }
        }
        @media print {
          .page-separator { display: none !important; }
          .page-2 { page-break-before: always; }
        }
      `}</style>
    </div>
  );
}


function ErrorScreen({ msg, onRetry, onRestart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ background: BRAND.white }}>
      <div className="max-w-md text-center">
        <p style={{ color: BRAND.red, fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}>Algo no funcionó</p>
        <h2 className="mt-4" style={{ fontSize: "1.5rem", fontWeight: 900, lineHeight: 1.15 }}>No pudimos armar tu experiencia ideal en este momento.</h2>
        <p className="mt-3" style={{ color: BRAND.gray4, fontSize: "0.875rem" }}>{msg}</p>
        <div className="mt-6 flex gap-3 justify-center">
          <button onClick={onRetry} className="px-6 py-3 rounded font-bold" style={{ background: BRAND.red, color: BRAND.white, fontSize: "0.875rem" }}>Reintentar</button>
          <button onClick={onRestart} className="px-6 py-3 rounded font-semibold" style={{ background: "transparent", color: BRAND.gray4, fontSize: "0.875rem" }}>Empezar de nuevo</button>
        </div>
      </div>
    </div>
  );
}

// ─── Hour slot generation per Q7 franja (keys must match Q7 options EXACTLY) ───
const HOUR_SLOTS = {
  "Temprano (5:00–8:00)": ["05:00", "05:30", "06:00", "06:30", "07:00", "07:30"],
  "Media mañana (8:00–11:00)": ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30"],
  "Mediodía (11:00–14:00)": ["11:00", "11:30", "12:00", "12:30", "13:00", "13:30"],
  "Primera tarde (14:00–17:00)": ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30"],
  "Tarde (17:00–20:00)": ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30"],
  "Noche (20:00–22:00)": ["20:00", "20:30", "21:00", "21:30"],
};
const Q8_TO_DAY_INDEX = { "L": 1, "M": 2, "X": 3, "J": 4, "V": 5, "S": 6, "D": 0 };
const DAY_LABEL_SHORT = ["D", "L", "M", "X", "J", "V", "S"];
const DAY_LABEL_FULL = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const MONTH_SHORT = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

function ScheduleScreen({ data, onConfirm, onBack }) {
  const { answers, club } = data;
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  // Build next 14 days starting tomorrow
  const today = new Date();
  const days = [];
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }

  // Preferred day indices from Q8
  const preferredDayIndices = new Set((answers.Q8 || []).map(c => Q8_TO_DAY_INDEX[c]).filter(x => x !== undefined));

  // Hour slots aggregated from Q7 selections
  const franjas = answers.Q7 || ["Tarde (17:00–20:00)"];
  const hourSlots = franjas.flatMap(f => HOUR_SLOTS[f] || []);

  const canConfirm = selectedDay !== null && selectedHour !== null;

  const handleConfirm = () => {
    if (!canConfirm) return;
    onConfirm({ day: selectedDay, hour: selectedHour });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: BRAND.white }}>
      <div className="max-w-3xl mx-auto w-full px-6 py-10">
        <button onClick={onBack} style={{ background: "none", border: "none", color: BRAND.gray4, fontSize: "0.8125rem", cursor: "pointer", padding: 0, marginBottom: "1.25rem" }}>← Volver</button>
        <p style={{ color: BRAND.red, letterSpacing: "0.22em", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase" }}>Agenda tu visita guiada</p>
        <h1 className="mt-3" style={{ fontWeight: 900, fontSize: "2rem", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>Elige día y hora.</h1>
        <p style={{ color: BRAND.gray4, fontSize: "0.9375rem", lineHeight: 1.5 }}>Tu asesor en <strong>{club.nombre}</strong> te recibe el día que tú elijas. Los días marcados son los que mencionaste como preferidos.</p>

        <section style={{ marginTop: "2rem" }}>
          <p style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: BRAND.gray4, fontWeight: 700, marginBottom: "0.75rem" }}>Día</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "0.5rem" }}>
            {days.map((d, i) => {
              const isPreferred = preferredDayIndices.has(d.getDay());
              const isSelected = selectedDay && selectedDay.toDateString() === d.toDateString();
              return (
                <button key={i} onClick={() => setSelectedDay(d)} style={{
                  padding: "0.625rem 0.25rem", borderRadius: "4px",
                  border: isSelected ? "2px solid " + BRAND.red : "1px solid " + (isPreferred ? BRAND.red : BRAND.gray2),
                  background: isSelected ? BRAND.red : (isPreferred ? "#FFF5F5" : BRAND.white),
                  color: isSelected ? BRAND.white : BRAND.black,
                  cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center",
                  fontFamily: "inherit", gap: "0.125rem"
                }}>
                  <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, opacity: 0.7 }}>{DAY_LABEL_SHORT[d.getDay()]}</span>
                  <span style={{ fontSize: "1.125rem", fontWeight: 900 }}>{d.getDate()}</span>
                  <span style={{ fontSize: "0.625rem", opacity: 0.6, textTransform: "uppercase" }}>{MONTH_SHORT[d.getMonth()]}</span>
                </button>
              );
            })}
          </div>
          {preferredDayIndices.size > 0 && (
            <p style={{ fontSize: "0.7rem", color: BRAND.gray4, marginTop: "0.5rem", fontStyle: "italic" }}>Los días con borde rojo son los que indicaste como preferidos. Puedes elegir cualquier otro.</p>
          )}
        </section>

        <section style={{ marginTop: "2rem" }}>
          <p style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: BRAND.gray4, fontWeight: 700, marginBottom: "0.75rem" }}>Hora</p>
          <p style={{ fontSize: "0.75rem", color: BRAND.gray4, marginBottom: "0.625rem" }}>Franjas según tu preferencia: {franjas.join(" · ")}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))", gap: "0.5rem" }}>
            {hourSlots.map(h => (
              <button key={h} onClick={() => setSelectedHour(h)} style={{
                padding: "0.625rem 0.5rem", borderRadius: "4px",
                border: selectedHour === h ? "2px solid " + BRAND.red : "1px solid " + BRAND.gray2,
                background: selectedHour === h ? BRAND.red : BRAND.white,
                color: selectedHour === h ? BRAND.white : BRAND.black,
                cursor: "pointer", fontFamily: "inherit", fontWeight: 700, fontSize: "0.875rem"
              }}>{h}</button>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid " + BRAND.gray2, display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <div style={{ fontSize: "0.875rem", color: BRAND.gray4 }}>
            {canConfirm ? <><strong style={{ color: BRAND.black }}>{DAY_LABEL_FULL[selectedDay.getDay()]} {selectedDay.getDate()} {MONTH_SHORT[selectedDay.getMonth()]}</strong> · <strong style={{ color: BRAND.black }}>{selectedHour}</strong></> : "Elige un día y una hora para continuar."}
          </div>
          <button onClick={handleConfirm} disabled={!canConfirm} style={{
            background: canConfirm ? BRAND.red : BRAND.gray2, color: canConfirm ? BRAND.white : BRAND.gray3,
            fontSize: "0.9375rem", fontWeight: 700, padding: "0.875rem 2rem", borderRadius: "4px",
            border: "none", cursor: canConfirm ? "pointer" : "not-allowed", fontFamily: "inherit"
          }}>Confirmar visita</button>
        </div>
      </div>
    </div>
  );
}

function ContactCaptureScreen({ data, onContinue, onBack }) {
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState({ lastName: false, phone: false, email: false });

  const firstName = (data.answers.Q1 || "").split(" ")[0];

  // Validation
  const lastNameValid = lastName.trim().length >= 2;
  const phoneDigits = phone.replace(/\D/g, "");
  const phoneValid = phoneDigits.length === 10;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const allValid = lastNameValid && phoneValid && emailValid;

  const lastNameError = touched.lastName && !lastNameValid ? "Ingresa tu apellido (mínimo 2 letras)" : null;
  const phoneError = touched.phone && !phoneValid ? "Ingresa un número de 10 dígitos" : null;
  const emailError = touched.email && !emailValid ? "Ingresa un correo electrónico válido" : null;

  const handleSubmit = () => {
    setTouched({ lastName: true, phone: true, email: true });
    if (allValid) {
      onContinue({ lastName: lastName.trim(), phone: phoneDigits, email: email.trim() });
    }
  };

  const inputStyle = (hasError) => ({
    width: "100%",
    padding: "0.875rem 1rem",
    fontSize: "1rem",
    fontFamily: "inherit",
    color: BRAND.black,
    background: BRAND.white,
    border: "1px solid " + (hasError ? BRAND.red : BRAND.gray2),
    borderRadius: "4px",
    outline: "none",
    transition: "border-color 0.15s",
  });

  return (
    <div className="min-h-screen flex flex-col" style={{ background: BRAND.white }}>
      <div className="px-6 pt-6 pb-4 max-w-xl mx-auto w-full flex-1 flex flex-col">
        <p style={{ color: BRAND.red, letterSpacing: "0.22em", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase" }}>Antes de agendar</p>
        <h2 className="mt-4" style={{ fontWeight: 900, fontSize: "1.625rem", lineHeight: 1.15, letterSpacing: "-0.015em", color: BRAND.black }}>{firstName}, necesitamos un par de datos para confirmar tu visita.</h2>
        <p className="mt-2" style={{ color: BRAND.gray4, fontSize: "0.875rem", lineHeight: 1.5 }}>Tu Advisor te contactará para coordinar el horario y enviarte los detalles del club.</p>

        <div className="mt-8 flex flex-col gap-4">
          <div>
            <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: BRAND.black, marginBottom: "0.375rem", letterSpacing: "0.02em" }}>Apellido</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onBlur={() => setTouched(t => ({ ...t, lastName: true }))}
              placeholder="Tu apellido"
              style={inputStyle(!!lastNameError)}
            />
            {lastNameError && <p style={{ color: BRAND.red, fontSize: "0.75rem", marginTop: "0.25rem" }}>{lastNameError}</p>}
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: BRAND.black, marginBottom: "0.375rem", letterSpacing: "0.02em" }}>Número de celular</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => setTouched(t => ({ ...t, phone: true }))}
              placeholder="10 dígitos · ejemplo: 5512345678"
              style={inputStyle(!!phoneError)}
              maxLength={15}
            />
            {phoneError && <p style={{ color: BRAND.red, fontSize: "0.75rem", marginTop: "0.25rem" }}>{phoneError}</p>}
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: BRAND.black, marginBottom: "0.375rem", letterSpacing: "0.02em" }}>Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched(t => ({ ...t, email: true }))}
              placeholder="tu@correo.com"
              style={inputStyle(!!emailError)}
            />
            {emailError && <p style={{ color: BRAND.red, fontSize: "0.75rem", marginTop: "0.25rem" }}>{emailError}</p>}
          </div>
        </div>

        <p className="mt-6" style={{ fontSize: "0.6875rem", color: BRAND.gray4, lineHeight: 1.5 }}>
          Tus datos se usan únicamente para coordinar tu visita guiada. No los compartimos con terceros.
        </p>
      </div>

      <div className="px-6 py-5" style={{ background: BRAND.gray1, borderTop: "1px solid " + BRAND.gray2 }}>
        <div className="max-w-xl mx-auto w-full flex items-center justify-between gap-3">
          <button onClick={onBack} style={{ background: "none", border: "none", color: BRAND.gray4, fontSize: "0.875rem", cursor: "pointer", padding: "0.5rem 0", fontFamily: "inherit" }}>← Volver</button>
          <button
            onClick={handleSubmit}
            disabled={!allValid && (touched.lastName || touched.phone || touched.email)}
            style={{
              background: allValid ? BRAND.red : BRAND.gray3,
              color: BRAND.white,
              fontSize: "0.9375rem",
              fontWeight: 700,
              padding: "0.875rem 2rem",
              borderRadius: "4px",
              border: "none",
              cursor: allValid ? "pointer" : "not-allowed",
              fontFamily: "inherit",
              transition: "background 0.15s",
            }}
          >Continuar</button>
        </div>
      </div>
    </div>
  );
}

function BriefingScreen({ data, appointment, onRestart, onBack }) {
  const { answers, club, block1, block2, top2, showBlock3, showFitkidz, alberca_note, needsAdvisorReview, onGLP1, llm } = data;
  const isSolo = answers.Q13 === "Solo, a mi ritmo" || answers.Q13 === "Sola, a mi ritmo";
  const isPregnant = answers.Q12b === "Sí, embarazada";
  const isPostpartum = answers.Q12b === "Sí, posparto reciente (últimos 6 meses)";
  const wlTreatments = (answers.Q17 || []).filter(t => t !== "Ninguno");
  const isGLP1 = (answers.Q17 || []).includes("GLP-1 (Ozempic, Wegovy, Mounjaro)");
  const isBariatric = (answers.Q17 || []).includes("Cirugía bariátrica");
  const conditions = (answers.Q12 || []).filter(c => c !== "Ninguna");
  const isFamily = answers.Q14 === "Yo y mis hijos" || answers.Q14 === "La familia completa";
  const hasKidsUnder12 = answers.Q14b === "Sí";

  const dayStr = `${DAY_LABEL_FULL[appointment.day.getDay()]} ${appointment.day.getDate()} ${MONTH_SHORT[appointment.day.getMonth()]} ${appointment.day.getFullYear()}`;
  const firstName = (answers.Q1 || "").split(" ")[0];

  // Chips for header (matches template v1.0 style)
  const headerChips = [];
  if (answers.Q2) headerChips.push(answers.Q2);
  if (isFamily && hasKidsUnder12) headerChips.push("Visita con hijos");
  if (answers.Q6 === "En la alberca") headerChips.push("Preferencia: alberca");
  else if (answers.Q6 === "En piso / área seca") headerChips.push("Preferencia: piso seco");
  else if (answers.Q6 === "Ambas") headerChips.push("Alberca + piso seco");

  // Pull LLM-generated sections (with safe fallbacks if LLM partially failed)
  const validationQuestions = (llm && Array.isArray(llm.validation_questions)) ? llm.validation_questions : [];
  const visitRoute = (llm && Array.isArray(llm.visit_route)) ? llm.visit_route : [];
  const proposal = (llm && llm.proposal && typeof llm.proposal === "object") ? llm.proposal : { main: "", complement: "" };
  const closingPriorities = (llm && Array.isArray(llm.closing_priorities)) ? llm.closing_priorities : [];
  const closingScript = (llm && typeof llm.closing_script === "string") ? llm.closing_script : "";

  // FieldBox component (used in §1 and §2)
  const FieldBox = ({ label, value, sub }) => (
    <div style={{ border: "1px solid " + BRAND.gray2, borderRadius: "4px", padding: "0.75rem 0.875rem", background: BRAND.white }}>
      <p style={{ fontSize: "0.625rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, color: BRAND.gray4, marginBottom: "0.375rem" }}>{label}</p>
      <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: BRAND.black, lineHeight: 1.3 }}>{value || "—"}</p>
      {sub && <p style={{ fontSize: "0.75rem", color: BRAND.gray4, marginTop: "0.25rem", lineHeight: 1.35 }}>{sub}</p>}
    </div>
  );

  // SectionTitle component
  const SectionTitle = ({ num, label }) => (
    <p style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: BRAND.black, marginBottom: "1rem" }}>
      {num ? `${num} · ` : ""}{label}
    </p>
  );

  const NumCircle = ({ n }) => (
    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "1.5rem", height: "1.5rem", borderRadius: "50%", background: BRAND.red, color: BRAND.white, fontSize: "0.75rem", fontWeight: 700, flexShrink: 0 }}>{n}</span>
  );

  const sectionDividerStyle = { borderTop: "2px solid " + BRAND.black, paddingTop: "1.25rem", marginTop: "1.5rem" };

  // Build flags array dynamically (preserved from demo logic + extended)
  const flags = [];
  if (showFitkidz) flags.push({ severity: "warn", text: "Familia con hijos <12 → ofrecer demo de FitKidz en la visita." });
  if (answers.Q9 === "Principiante") flags.push({ severity: "warn", text: "Nivel principiante. Tour del club obligatorio antes de cualquier sesión." });
  if (answers.Q10 && answers.Q10.toLowerCase().includes("pausa")) flags.push({ severity: "warn", text: "Reactivación tras pausa. Recomendar primera sesión conservadora." });
  if (isPregnant) flags.push({ severity: "warn", text: "Embarazada. Clases con impacto/kicks/saltos ya filtradas. Validar trimestre y autorización médica." });
  if (isPostpartum) flags.push({ severity: "warn", text: "Posparto reciente. Clases con impacto/abdominal ya filtradas. Validar evolución con criterio clínico." });
  if (isBariatric) flags.push({ severity: "warn", text: "Cirugía bariátrica. Clases de alto impacto y carga pesada ya filtradas. Validar tiempo post-operatorio." });
  if (isGLP1) flags.push({ severity: "info", text: "En tratamiento GLP-1. Priorizar fuerza para preservar masa muscular." });
  if (conditions.length > 0) flags.push({ severity: "warn", text: "Condiciones declaradas: " + conditions.join(", ") + ". Validar autorización médica si aplica." });
  if (alberca_note) flags.push({ severity: "warn", text: alberca_note });
  if (isSolo) flags.push({ severity: "info", text: "Lead busca formato individual. No presionar venta de pack de clases grupales." });
  // Always include the calculated experience as info
  const blockSummary = `Experiencia ideal calculada: Bloque 1 — ${block1.subgrupo} · Bloque 2 — ${block2.maquina}, ${block2.duracion} · Bloque 3 — ${showBlock3 && top2.length > 0 ? top2.map(c => c.display).join(" + ") : "Personal Training"}.`;
  flags.push({ severity: "info", text: blockSummary });

  return (
    <div className="min-h-screen" style={{ background: BRAND.gray1, paddingTop: "2.5rem", paddingBottom: "3rem" }}>
      <div className="max-w-3xl mx-auto px-6">

        {/* Banner: Confirmation for the client */}
        <section style={{ background: BRAND.black, color: BRAND.white, borderRadius: "6px", padding: "1.5rem 1.75rem", marginBottom: "1.5rem" }}>
          <p style={{ color: BRAND.red, letterSpacing: "0.22em", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.5rem" }}>Visita confirmada</p>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 900, lineHeight: 1.15, letterSpacing: "-0.01em", marginBottom: "0.625rem" }}>{firstName}, te esperamos en {club.nombre}.</h1>
          <p style={{ fontSize: "0.9375rem", color: "#D4D4D4", lineHeight: 1.5 }}>{dayStr} · {appointment.hour} · {club.direccion}</p>
        </section>

        {/* Brief card */}
        <section style={{ background: BRAND.white, border: "1px solid " + BRAND.gray2, borderRadius: "6px", padding: "1.75rem" }}>

          {/* Brief header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "1rem", borderBottom: "2px solid " + BRAND.black }}>
            <div>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BRAND.gray4, fontWeight: 700, marginBottom: "0.25rem" }}>Brief de visita guiada · confidencial</p>
              <h2 style={{ fontSize: "1.375rem", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5rem" }}>{answers.Q1} · Nivel {answers.Q9 ? answers.Q9.toLowerCase() : "—"}</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {headerChips.map((c, i) => (
                  <span key={i} style={{ fontSize: "0.7rem", padding: "0.25rem 0.625rem", background: BRAND.gray1, border: "1px solid " + BRAND.gray2, borderRadius: "2px", fontWeight: 600, color: BRAND.black }}>{c}</span>
                ))}
              </div>
            </div>
            <div style={{ textAlign: "right", fontSize: "0.75rem", color: BRAND.gray4 }}>
              <p style={{ fontWeight: 700, color: BRAND.black, marginBottom: "0.125rem" }}>{DAY_LABEL_FULL[appointment.day.getDay()]}</p>
              <p style={{ fontWeight: 700, color: BRAND.black, marginBottom: "0.125rem" }}>{appointment.day.getDate()} {MONTH_SHORT[appointment.day.getMonth()]} {appointment.day.getFullYear()}</p>
              <p style={{ fontWeight: 700, color: BRAND.black }}>{appointment.hour}</p>
            </div>
          </div>

          {/* §1 · PERFIL DEL LEAD */}
          <div style={sectionDividerStyle}>
            <SectionTitle num="1" label="Perfil del lead" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "0.75rem" }} className="brief-grid">
              <FieldBox label="Objetivo" value={(answers.Q4 || [])[0]} sub={answers.Q4 && answers.Q4.length > 1 ? "+ " + (answers.Q4.length - 1) + " objetivo" + (answers.Q4.length > 2 ? "s" : "") + " secundario" + (answers.Q4.length > 2 ? "s" : "") : null} />
              <FieldBox label="Motivación" value={answers.Q3} />
              <FieldBox label="Experiencia deseada" value={answers.Q6 + (answers.Q13 ? " · " + answers.Q13.split(",")[0] : "")} />
              <FieldBox label="Disponibilidad" value={(answers.Q8 || []).join(" · ")} sub={(answers.Q7 || []).join(" · ")} />
              <FieldBox label="Historial" value={answers.Q10} sub={answers.Q11 ? "Pausa: " + answers.Q11 : null} />
              <FieldBox label="Ritmo" value={answers.Q5} />
              <FieldBox label="Formato" value={answers.Q13} />
              <FieldBox label="Salud" value={conditions.length > 0 ? conditions.join(", ") : "Sin condiciones declaradas"} sub={isPregnant ? "⚠ Embarazada" : isPostpartum ? "⚠ Posparto <6 meses" : wlTreatments.length > 0 ? "Tratamientos: " + wlTreatments.join(", ") : null} />
            </div>
            <p style={{ fontSize: "0.75rem", color: BRAND.gray4, fontStyle: "italic" }}>Validar nivel e intensidad antes de recomendar una actividad.</p>
          </div>

          {/* §2 · LOGÍSTICA DE LA CITA */}
          <div style={sectionDividerStyle}>
            <SectionTitle num="2" label="Logística de la cita" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }} className="brief-grid">
              <div style={{ gridColumn: "span 2 / span 2", border: "1px solid " + BRAND.gray2, borderRadius: "4px", padding: "0.75rem 0.875rem", background: BRAND.white }}>
                <p style={{ fontSize: "0.625rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, color: BRAND.gray4, marginBottom: "0.375rem" }}>Club</p>
                <p style={{ fontSize: "1.0625rem", fontWeight: 900, color: BRAND.black, lineHeight: 1.2 }}>{club.nombre}</p>
              </div>
              <div style={{ border: "1px solid " + BRAND.gray2, borderRadius: "4px", padding: "0.75rem 0.875rem", background: BRAND.white }}>
                <p style={{ fontSize: "0.625rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, color: BRAND.gray4, marginBottom: "0.375rem" }}>Ubicación</p>
                <p style={{ fontSize: "0.8125rem", color: BRAND.black, lineHeight: 1.4 }}>{club.direccion}</p>
                <p style={{ fontSize: "0.75rem", color: BRAND.gray4, marginTop: "0.25rem" }}>Aprox. {club.distancia_min} min desde la ubicación del lead</p>
              </div>
              <FieldBox label="Acompañantes" value={isFamily && hasKidsUnder12 ? "Hijos <12 años" : isFamily ? "Familia" : "Visita individual"} />
            </div>
          </div>

          {/* Page separator: §1+§2 = Página 1, §3+ = Página 2 */}
          <div className="brief-page-separator" style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px dashed " + BRAND.gray3, display: "flex", justifyContent: "center" }}>
            <span style={{ background: BRAND.white, padding: "0 0.875rem", marginTop: "-1.625rem", fontSize: "0.6875rem", letterSpacing: "0.22em", textTransform: "uppercase", color: BRAND.gray4, fontWeight: 700 }}>Página 2</span>
          </div>

          {/* §3 · QUÉ VALIDAR (LLM-generated) */}
          {validationQuestions.length > 0 && (
            <div style={sectionDividerStyle}>
              <SectionTitle num="3" label="Qué validar" />
              <ol style={{ display: "flex", flexDirection: "column", gap: "0.625rem", paddingLeft: 0, margin: 0, listStyle: "none" }}>
                {validationQuestions.map((q, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <NumCircle n={i + 1} />
                    <span style={{ fontSize: "0.9375rem", lineHeight: 1.4, paddingTop: "0.125rem", color: BRAND.black }}>{q}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* §4 · RUTA RECOMENDADA (LLM-generated) */}
          {visitRoute.length > 0 && (
            <div style={sectionDividerStyle}>
              <SectionTitle num="4" label="Ruta recomendada para la visita" />
              <ol style={{ display: "flex", flexDirection: "column", gap: "0.875rem", paddingLeft: 0, margin: 0, listStyle: "none" }}>
                {visitRoute.map((step, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <NumCircle n={i + 1} />
                    <div>
                      <p style={{ fontSize: "0.9375rem", fontWeight: 700, lineHeight: 1.3, color: BRAND.black }}>{step.title}</p>
                      <p style={{ fontSize: "0.8125rem", color: BRAND.gray4, lineHeight: 1.4, marginTop: "0.125rem" }}>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* §5 · PROPUESTA RECOMENDADA (LLM-generated) */}
          {(proposal.main || proposal.complement) && (
            <div style={sectionDividerStyle}>
              <SectionTitle num="5" label="Propuesta recomendada" />
              {proposal.main && (
                <div style={{ border: "1px solid " + BRAND.gray2, borderLeft: "3px solid " + BRAND.red, borderRadius: "4px", padding: "0.875rem 1rem", background: BRAND.white, marginBottom: "0.625rem" }}>
                  <p style={{ fontSize: "0.625rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, color: BRAND.red, marginBottom: "0.375rem" }}>Oferta principal</p>
                  <p style={{ fontSize: "0.9375rem", color: BRAND.black, lineHeight: 1.5 }}>{proposal.main}</p>
                </div>
              )}
              {proposal.complement && (
                <div style={{ border: "1px solid " + BRAND.gray2, borderRadius: "4px", padding: "0.875rem 1rem", background: BRAND.white }}>
                  <p style={{ fontSize: "0.625rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, color: BRAND.gray4, marginBottom: "0.375rem" }}>Complemento y alternativa</p>
                  <p style={{ fontSize: "0.875rem", color: BRAND.gray4, lineHeight: 1.5 }}>{proposal.complement}</p>
                </div>
              )}
            </div>
          )}

          {/* §6 · PRIORIDADES DE CIERRE (LLM-generated) */}
          {closingPriorities.length > 0 && (
            <div style={sectionDividerStyle}>
              <SectionTitle num="6" label="Prioridades de cierre" />
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingLeft: 0, margin: 0, listStyle: "none" }}>
                {closingPriorities.map((p, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: BRAND.red, fontWeight: 900, flexShrink: 0 }}>·</span>
                    <span style={{ fontSize: "0.9375rem", lineHeight: 1.4, color: BRAND.black }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* §7 · NOTAS Y BANDERAS (preservadas del demo) */}
          {flags.length > 0 && (
            <div style={sectionDividerStyle}>
              <SectionTitle num="7" label="Notas y banderas" />
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingLeft: 0, margin: 0, listStyle: "none" }}>
                {flags.map((f, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: f.severity === "warn" ? BRAND.red : BRAND.gray4, fontWeight: 900, flexShrink: 0 }}>{f.severity === "warn" ? "⚠" : "·"}</span>
                    <span style={{ fontSize: "0.875rem", lineHeight: 1.4, color: f.severity === "warn" ? BRAND.black : BRAND.gray4 }}>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* GUION DE CIERRE (LLM-generated) */}
          {closingScript && (
            <div style={sectionDividerStyle}>
              <SectionTitle label="Guion de cierre sugerido" />
              <div style={{ background: BRAND.gray1, borderLeft: "3px solid " + BRAND.red, padding: "1rem 1.125rem", fontStyle: "italic", fontSize: "0.9375rem", lineHeight: 1.5, color: BRAND.black }}>
                "{closingScript}"
              </div>
            </div>
          )}

          {/* REGISTRO DEL ASESOR (vacío para llenar post-visita) */}
          <div style={sectionDividerStyle}>
            <SectionTitle label="Registro del asesor" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }} className="brief-grid">
              {["Interés principal", "Objeción principal", "Siguiente paso", "Fecha de seguimiento"].map((lbl, i) => (
                <div key={i} style={{ border: "1px dashed " + BRAND.gray3, borderRadius: "4px", padding: "0.75rem 1rem", minHeight: "3.5rem" }}>
                  <p style={{ fontSize: "0.625rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, color: BRAND.gray4 }}>{lbl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <p style={{ fontSize: "0.65rem", color: BRAND.gray4, textAlign: "center", paddingTop: "1rem", borderTop: "1px solid " + BRAND.gray2, marginTop: "2rem", letterSpacing: "0.05em" }}>
            USO INTERNO · Datos declarados por el lead; validar antes de formular recomendaciones.
          </p>
        </section>

        <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          <button onClick={onBack} style={{ background: "none", border: "none", color: BRAND.gray4, fontSize: "0.8125rem", cursor: "pointer", padding: 0, fontFamily: "inherit" }}>← Cambiar fecha u hora</button>
          <button onClick={onRestart} style={{ background: BRAND.black, color: BRAND.white, fontSize: "0.875rem", fontWeight: 700, padding: "0.75rem 1.75rem", borderRadius: "4px", border: "none", cursor: "pointer", fontFamily: "inherit" }}>Terminar</button>
        </div>

        <style>{`
          @media (max-width: 720px) {
            .brief-grid { grid-template-columns: 1fr !important; }
          }
          @media print {
            .brief-page-separator { display: none !important; }
            .brief-page-separator + * { page-break-before: always; }
          }
        `}</style>
      </div>
    </div>
  );
}

export default function App() {
  const [phase, setPhase] = useState("welcome");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loadingMsg, setLoadingMsg] = useState("Armando tu experiencia ideal");
  const [result, setResult] = useState(null);
  const [appointment, setAppointment] = useState(null);
  const [error, setError] = useState(null);

  const questions = getQuestions(answers);
  const currentQ = questions[step];

  const reset = () => { setPhase("welcome"); setStep(0); setAnswers({}); setResult(null); setAppointment(null); setError(null); };
  const setAnswer = (val) => setAnswers({ ...answers, [currentQ.id]: val });

  const advance = async () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }
    setPhase("loading");
    try {
      setLoadingMsg("Buscando tu club ideal");
      const isSoloForResolve = answers.Q13 === "Solo, a mi ritmo" || answers.Q13 === "Sola, a mi ritmo";
      const isFamilyForResolve = answers.Q14 === "Yo y mis hijos" || answers.Q14 === "La familia completa";
      const hasKidsForResolve = answers.Q14b === "Sí";
      let resolveOpts = { requireAmenities: [] };
      if (answers.Q6 === "En la alberca" || answers.Q6 === "Ambas") {
        resolveOpts.requireAmenities.push("Alberca");
      }
      if (isFamilyForResolve && hasKidsForResolve) {
        resolveOpts.requireAmenities.push("FitKidz");
      }
      // Compute preferred classes so resolver picks a club whose catalog actually matches Q4 goals
      // Only when user wants group classes (not solo) — if solo, classes don't matter
      if (!isSoloForResolve && Array.isArray(answers.Q4) && answers.Q4.length > 0) {
        let mode = "dry";
        if (answers.Q6 === "En la alberca") mode = "aquatic";
        else if (answers.Q6 === "Ambas") mode = "all";
        const activeContra = activeContraindicationKeys(answers);
        resolveOpts.preferClasses = preferredClassesForQ4(answers.Q4, mode, activeContra);
      }
      const clubResult = await resolveClub(answers.Q15, answers.Q16, resolveOpts);
      if (!clubResult) throw new Error("No pudimos resolver tu ubicación. Verifica el CP o la colonia.");
      const club = clubResult.principal;
      const otrosClubes = clubResult.otros;

      setLoadingMsg("Calculando tu rutina");
      const blocks = resolveBlocks(answers, club.tag);
      const { block1, block2, top2, showBlock3, alberca_note } = blocks;

      // Q14b=Sí + Q14 family → show FitKidz section
      const isFamily = answers.Q14 === "Yo y mis hijos" || answers.Q14 === "La familia completa";
      const hasKidsUnder12 = answers.Q14b === "Sí";
      const showFitkidz = isFamily && hasKidsUnder12;

      // Medical/treatment context flags (used for soft messages in card)
      // Show advisor note when ANY medical condition or treatment is active —
      // bloques 01/02 use Q4-based protocols and need clinical adjustment too.
      const activeMedical = activeContraindicationKeys(answers);
      const needsAdvisorReview = hasAdvisorReviewCondition(answers) || activeMedical.size > 0;
      const onGLP1 = isOnGLP1(answers);

      setLoadingMsg("Generando tu experiencia ideal");
      const llm = await callClaude(answers, club, block1 || { subgrupo: "Acuático" }, block2, top2, showBlock3);

      setResult({ answers, llm, block1, block2, top2, club, otrosClubes, showBlock3, showFitkidz, alberca_note, needsAdvisorReview, onGLP1 });
      setPhase("result");
    } catch (e) {
      setError(e.message || String(e));
      setPhase("error");
    }
  };

  const goBack = () => { if (step > 0) setStep(step - 1); };

  if (phase === "welcome") return <Welcome onStart={() => { setPhase("questionnaire"); setStep(0); }} />;
  if (phase === "loading") return <Loading msg={loadingMsg} />;
  if (phase === "error") return <ErrorScreen msg={error} onRetry={() => { setPhase("questionnaire"); setStep(questions.length - 1); }} onRestart={reset} />;
  if (phase === "result" && result) return <ResultPage data={result} onRestart={reset} onSchedule={() => setPhase("contact_capture")} />;
  if (phase === "contact_capture" && result) return <ContactCaptureScreen data={result} onContinue={(contact) => { setResult({ ...result, contact }); setPhase("schedule"); }} onBack={() => setPhase("result")} />;
  if (phase === "schedule" && result) return <ScheduleScreen data={result} onConfirm={(appt) => { setAppointment(appt); setPhase("briefing"); }} onBack={() => setPhase("contact_capture")} />;
  if (phase === "briefing" && result && appointment) return <BriefingScreen data={result} appointment={appointment} onRestart={reset} onBack={() => setPhase("schedule")} />;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: BRAND.white }}>
      <ProgressBar current={step} total={questions.length} />
      <div className="px-6 pt-3 max-w-xl mx-auto w-full">
        <p style={{ fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BRAND.gray4, fontWeight: 600 }}>Pregunta {step + 1} de {questions.length}</p>
      </div>
      <QuestionRenderer question={currentQ} value={answers[currentQ.id]} onChange={setAnswer} onNext={advance} onBack={goBack} isFirst={step === 0} isLast={step === questions.length - 1} />
    </div>
  );
}
