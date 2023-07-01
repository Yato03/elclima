import { getAllMunicipios, getMunicipioByName, getClimaMunicipio } from '@/api/Municipios'
import fetchMock, { MockResponse } from 'fetch-mock';


describe('testing api', () => {

  beforeEach(() => {
    fetchMock.reset();
  });

  afterAll(() => {
    fetchMock.restore();
  });

  test('should use API key from environment', () => {
    const apiKey = process.env.API_KEY;
    expect(apiKey).toBeDefined();
  });

  test('getAllMunicipios', async () => {

    const mockResponse = [
      // Aquí puedes agregar los datos simulados que esperas recibir
      {
        "latitud" : "40º32'54.450744\"",
        "id_old" : "44004",
        "url" : "ababuj-id44001",
        "latitud_dec" : "40.54845854",
        "altitud" : "1372",
        "capital" : "Ababuj",
        "num_hab" : "65",
        "zona_comarcal" : "624401",
        "destacada" : "0",
        "nombre" : "Ababuj",
        "longitud_dec" : "-0.80780117",
        "id" : "id44001",
        "longitud" : "-0º48'28.084212\""
      }, {
        "latitud" : "40º54'58.824504\"",
        "id_old" : "40004",
        "url" : "abades-id40001",
        "latitud_dec" : "40.91634014",
        "altitud" : "971",
        "capital" : "Abades",
        "num_hab" : "873",
        "zona_comarcal" : "674001",
        "destacada" : "0",
        "nombre" : "Abades",
        "longitud_dec" : "-4.26787389",
        "id" : "id40001",
        "longitud" : "-4º16'4.346004\""
      }
    ];

    const url = `${process.env.API_URL_BASE}/maestro/municipios/?api_key=${process.env.API_KEY}`

    fetchMock.get(url, mockResponse as MockResponse);

    const municipios = await getAllMunicipios()
    expect(municipios.length).toBeGreaterThan(1)
  })

  test('getMunicipioByName', async () => {

    const mockResponse = [
      // Aquí puedes agregar los datos simulados que esperas recibir
      {
        "latitud" : "40º32'54.450744\"",
        "id_old" : "44004",
        "url" : "ababuj-id44001",
        "latitud_dec" : "40.54845854",
        "altitud" : "1372",
        "capital" : "Ababuj",
        "num_hab" : "65",
        "zona_comarcal" : "624401",
        "destacada" : "0",
        "nombre" : "Ababuj",
        "longitud_dec" : "-0.80780117",
        "id" : "id44001",
        "longitud" : "-0º48'28.084212\""
      }, {
        "latitud" : "40º54'58.824504\"",
        "id_old" : "40004",
        "url" : "abades-id40001",
        "latitud_dec" : "40.91634014",
        "altitud" : "971",
        "capital" : "Abades",
        "num_hab" : "873",
        "zona_comarcal" : "674001",
        "destacada" : "0",
        "nombre" : "Abades",
        "longitud_dec" : "-4.26787389",
        "id" : "id40001",
        "longitud" : "-4º16'4.346004\""
      },
      {
        "latitud" : "37º20'10.571244\"",
        "id_old" : "21130",
        "url" : "bollullos-par-del-condado-id21013",
        "latitud_dec" : "37.33626979",
        "altitud" : "109",
        "capital" : "Bollullos Par del Condado",
        "num_hab" : "14393",
        "zona_comarcal" : "612102",
        "destacada" : "1",
        "nombre" : "Bollullos Par del Condado",
        "longitud_dec" : "-6.53535271",
        "id" : "id21013",
        "longitud" : "-6º32'7.269756\""
      },
      {
        "latitud" : "43º8'51.525564\"",
        "id_old" : "48010",
        "url" : "abadino-abadino-zelaieta-id48001",
        "latitud_dec" : "43.14764599",
        "altitud" : "144",
        "capital" : "Abadiño-Zelaieta",
        "num_hab" : "7504",
        "zona_comarcal" : "754802",
        "destacada" : "0",
        "nombre" : "Abadiño",
        "longitud_dec" : "-2.60687319",
        "id" : "id48001",
        "longitud" : "-2º36'24.743484\""
      }
    ];

    const url = `${process.env.API_URL_BASE}/maestro/municipios/?api_key=${process.env.API_KEY}`

    fetchMock.get(url, mockResponse as MockResponse);

    const municipio = await getMunicipioByName('bollullos par del condado')
    expect(municipio).toBeDefined()
    expect(municipio.nombre).toBe('Bollullos Par del Condado')
  })

  test('getClimaMunicipio', async () => {

    const mockResponsePueblos = [
      // Aquí puedes agregar los datos simulados que esperas recibir
      {
        "latitud" : "40º32'54.450744\"",
        "id_old" : "44004",
        "url" : "ababuj-id44001",
        "latitud_dec" : "40.54845854",
        "altitud" : "1372",
        "capital" : "Ababuj",
        "num_hab" : "65",
        "zona_comarcal" : "624401",
        "destacada" : "0",
        "nombre" : "Ababuj",
        "longitud_dec" : "-0.80780117",
        "id" : "id44001",
        "longitud" : "-0º48'28.084212\""
      }, {
        "latitud" : "40º54'58.824504\"",
        "id_old" : "40004",
        "url" : "abades-id40001",
        "latitud_dec" : "40.91634014",
        "altitud" : "971",
        "capital" : "Abades",
        "num_hab" : "873",
        "zona_comarcal" : "674001",
        "destacada" : "0",
        "nombre" : "Abades",
        "longitud_dec" : "-4.26787389",
        "id" : "id40001",
        "longitud" : "-4º16'4.346004\""
      },
      {
        "latitud" : "37º20'10.571244\"",
        "id_old" : "21130",
        "url" : "bollullos-par-del-condado-id21013",
        "latitud_dec" : "37.33626979",
        "altitud" : "109",
        "capital" : "Bollullos Par del Condado",
        "num_hab" : "14393",
        "zona_comarcal" : "612102",
        "destacada" : "1",
        "nombre" : "Bollullos Par del Condado",
        "longitud_dec" : "-6.53535271",
        "id" : "id21013",
        "longitud" : "-6º32'7.269756\""
      }
    ];

    const mockResponseOldApi = {
      "descripcion": "exito",
      "estado": 200,
      "datos": "https://opendata.aemet.es/opendata/sh/486181b0",
      "metadatos": "https://opendata.aemet.es/opendata/sh/93a7c63d"
    }

    const mockResponseClima = [ {
      "origen" : {
        "productor" : "Agencia Estatal de Meteorología - AEMET. Gobierno de España",
        "web" : "https://www.aemet.es",
        "enlace" : "https://www.aemet.es/es/eltiempo/prediccion/municipios/horas/aguilafuente-id40004",
        "language" : "es",
        "copyright" : "© AEMET. Autorizado el uso de la información y su reproducción citando a AEMET como autora de la misma.",
        "notaLegal" : "https://www.aemet.es/es/nota_legal"
      },
      "elaborado" : "2023-06-29T10:44:17",
      "nombre" : "Aguilafuente",
      "provincia" : "Segovia",
      "prediccion" : {
        "dia" : [ {
          "estadoCielo" : [ {
            "value" : "11",
            "periodo" : "08",
            "descripcion" : "Despejado"
          }, {
            "value" : "11",
            "periodo" : "09",
            "descripcion" : "Despejado"
          }, {
            "value" : "11",
            "periodo" : "10",
            "descripcion" : "Despejado"
          }, {
            "value" : "11",
            "periodo" : "11",
            "descripcion" : "Despejado"
          }, {
            "value" : "11",
            "periodo" : "12",
            "descripcion" : "Despejado"
          }, {
            "value" : "11",
            "periodo" : "13",
            "descripcion" : "Despejado"
          }, {
            "value" : "13",
            "periodo" : "14",
            "descripcion" : "Intervalos nubosos"
          }, {
            "value" : "13",
            "periodo" : "15",
            "descripcion" : "Intervalos nubosos"
          }, {
            "value" : "13",
            "periodo" : "16",
            "descripcion" : "Intervalos nubosos"
          }, {
            "value" : "13",
            "periodo" : "17",
            "descripcion" : "Intervalos nubosos"
          }, {
            "value" : "13",
            "periodo" : "18",
            "descripcion" : "Intervalos nubosos"
          }, {
            "value" : "13",
            "periodo" : "19",
            "descripcion" : "Intervalos nubosos"
          }, {
            "value" : "11",
            "periodo" : "20",
            "descripcion" : "Despejado"
          }, {
            "value" : "11",
            "periodo" : "21",
            "descripcion" : "Despejado"
          }, {
            "value" : "11n",
            "periodo" : "22",
            "descripcion" : "Despejado"
          }, {
            "value" : "11n",
            "periodo" : "23",
            "descripcion" : "Despejado"
          } ],
          "precipitacion" : [ {
            "value" : "0",
            "periodo" : "08"
          }, {
            "value" : "0",
            "periodo" : "09"
          }, {
            "value" : "0",
            "periodo" : "10"
          }, {
            "value" : "0",
            "periodo" : "11"
          }, {
            "value" : "0",
            "periodo" : "12"
          }, {
            "value" : "0",
            "periodo" : "13"
          }, {
            "value" : "0",
            "periodo" : "14"
          }, {
            "value" : "0",
            "periodo" : "15"
          }, {
            "value" : "0",
            "periodo" : "16"
          }, {
            "value" : "0",
            "periodo" : "17"
          }, {
            "value" : "0",
            "periodo" : "18"
          }, {
            "value" : "0",
            "periodo" : "19"
          }, {
            "value" : "0",
            "periodo" : "20"
          }, {
            "value" : "0",
            "periodo" : "21"
          }, {
            "value" : "0",
            "periodo" : "22"
          }, {
            "value" : "0",
            "periodo" : "23"
          } ],
          "probPrecipitacion" : [ {
            "value" : "0",
            "periodo" : "0814"
          }, {
            "value" : "10",
            "periodo" : "1420"
          }, {
            "value" : "0",
            "periodo" : "2002"
          } ],
          "probTormenta" : [ {
            "value" : "0",
            "periodo" : "0814"
          }, {
            "value" : "10",
            "periodo" : "1420"
          }, {
            "value" : "0",
            "periodo" : "2002"
          } ],
          "nieve" : [ {
            "value" : "0",
            "periodo" : "08"
          }, {
            "value" : "0",
            "periodo" : "09"
          }, {
            "value" : "0",
            "periodo" : "10"
          }, {
            "value" : "0",
            "periodo" : "11"
          }, {
            "value" : "0",
            "periodo" : "12"
          }, {
            "value" : "0",
            "periodo" : "13"
          }, {
            "value" : "0",
            "periodo" : "14"
          }, {
            "value" : "0",
            "periodo" : "15"
          }, {
            "value" : "0",
            "periodo" : "16"
          }, {
            "value" : "0",
            "periodo" : "17"
          }, {
            "value" : "0",
            "periodo" : "18"
          }, {
            "value" : "0",
            "periodo" : "19"
          }, {
            "value" : "0",
            "periodo" : "20"
          }, {
            "value" : "0",
            "periodo" : "21"
          }, {
            "value" : "0",
            "periodo" : "22"
          }, {
            "value" : "0",
            "periodo" : "23"
          } ],
          "probNieve" : [ {
            "value" : "0",
            "periodo" : "0814"
          }, {
            "value" : "0",
            "periodo" : "1420"
          }, {
            "value" : "0",
            "periodo" : "2002"
          } ],
          "temperatura" : [ {
            "value" : "17",
            "periodo" : "09"
          }, {
            "value" : "20",
            "periodo" : "10"
          }, {
            "value" : "23",
            "periodo" : "11"
          }, {
            "value" : "24",
            "periodo" : "12"
          }, {
            "value" : "26",
            "periodo" : "13"
          }, {
            "value" : "28",
            "periodo" : "14"
          }, {
            "value" : "28",
            "periodo" : "15"
          }, {
            "value" : "29",
            "periodo" : "16"
          }, {
            "value" : "28",
            "periodo" : "17"
          }, {
            "value" : "27",
            "periodo" : "18"
          }, {
            "value" : "25",
            "periodo" : "19"
          }, {
            "value" : "24",
            "periodo" : "20"
          }, {
            "value" : "22",
            "periodo" : "21"
          }, {
            "value" : "20",
            "periodo" : "22"
          }, {
            "value" : "18",
            "periodo" : "23"
          } ],
          "sensTermica" : [ {
            "value" : "17",
            "periodo" : "09"
          }, {
            "value" : "20",
            "periodo" : "10"
          }, {
            "value" : "23",
            "periodo" : "11"
          }, {
            "value" : "24",
            "periodo" : "12"
          }, {
            "value" : "26",
            "periodo" : "13"
          }, {
            "value" : "28",
            "periodo" : "14"
          }, {
            "value" : "28",
            "periodo" : "15"
          }, {
            "value" : "29",
            "periodo" : "16"
          }, {
            "value" : "28",
            "periodo" : "17"
          }, {
            "value" : "27",
            "periodo" : "18"
          }, {
            "value" : "25",
            "periodo" : "19"
          }, {
            "value" : "24",
            "periodo" : "20"
          }, {
            "value" : "22",
            "periodo" : "21"
          }, {
            "value" : "20",
            "periodo" : "22"
          }, {
            "value" : "18",
            "periodo" : "23"
          } ],
          "humedadRelativa" : [ {
            "value" : "74",
            "periodo" : "09"
          }, {
            "value" : "62",
            "periodo" : "10"
          }, {
            "value" : "52",
            "periodo" : "11"
          }, {
            "value" : "47",
            "periodo" : "12"
          }, {
            "value" : "41",
            "periodo" : "13"
          }, {
            "value" : "34",
            "periodo" : "14"
          }, {
            "value" : "31",
            "periodo" : "15"
          }, {
            "value" : "29",
            "periodo" : "16"
          }, {
            "value" : "28",
            "periodo" : "17"
          }, {
            "value" : "31",
            "periodo" : "18"
          }, {
            "value" : "35",
            "periodo" : "19"
          }, {
            "value" : "39",
            "periodo" : "20"
          }, {
            "value" : "44",
            "periodo" : "21"
          }, {
            "value" : "50",
            "periodo" : "22"
          }, {
            "value" : "59",
            "periodo" : "23"
          } ],
          "vientoAndRachaMax" : [ {
            "direccion" : [ "S" ],
            "velocidad" : [ "3" ],
            "periodo" : "09"
          }, {
            "value" : "17",
            "periodo" : "09"
          }, {
            "direccion" : [ "SO" ],
            "velocidad" : [ "7" ],
            "periodo" : "10"
          }, {
            "value" : "20",
            "periodo" : "10"
          }, {
            "direccion" : [ "O" ],
            "velocidad" : [ "8" ],
            "periodo" : "11"
          }, {
            "value" : "23",
            "periodo" : "11"
          }, {
            "direccion" : [ "O" ],
            "velocidad" : [ "9" ],
            "periodo" : "12"
          }, {
            "value" : "26",
            "periodo" : "12"
          }, {
            "direccion" : [ "O" ],
            "velocidad" : [ "10" ],
            "periodo" : "13"
          }, {
            "value" : "29",
            "periodo" : "13"
          }, {
            "direccion" : [ "O" ],
            "velocidad" : [ "11" ],
            "periodo" : "14"
          }, {
            "value" : "30",
            "periodo" : "14"
          }, {
            "direccion" : [ "NO" ],
            "velocidad" : [ "12" ],
            "periodo" : "15"
          }, {
            "value" : "36",
            "periodo" : "15"
          }, {
            "direccion" : [ "NO" ],
            "velocidad" : [ "15" ],
            "periodo" : "16"
          }, {
            "value" : "38",
            "periodo" : "16"
          }, {
            "direccion" : [ "NO" ],
            "velocidad" : [ "16" ],
            "periodo" : "17"
          }, {
            "value" : "39",
            "periodo" : "17"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "18" ],
            "periodo" : "18"
          }, {
            "value" : "37",
            "periodo" : "18"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "17" ],
            "periodo" : "19"
          }, {
            "value" : "40",
            "periodo" : "19"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "19" ],
            "periodo" : "20"
          }, {
            "value" : "45",
            "periodo" : "20"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "23" ],
            "periodo" : "21"
          }, {
            "value" : "46",
            "periodo" : "21"
          }, {
            "direccion" : [ "NE" ],
            "velocidad" : [ "23" ],
            "periodo" : "22"
          }, {
            "value" : "44",
            "periodo" : "22"
          }, {
            "direccion" : [ "NE" ],
            "velocidad" : [ "23" ],
            "periodo" : "23"
          }, {
            "value" : "42",
            "periodo" : "23"
          } ],
          "fecha" : "2023-06-29T00:00:00",
          "orto" : "06:45",
          "ocaso" : "21:53"
        }, {
          "estadoCielo" : [ {
            "value" : "11n",
            "periodo" : "00",
            "descripcion" : "Despejado"
          }, {
            "value" : "12n",
            "periodo" : "01",
            "descripcion" : "Poco nuboso"
          }, {
            "value" : "12n",
            "periodo" : "02",
            "descripcion" : "Poco nuboso"
          }, {
            "value" : "12n",
            "periodo" : "03",
            "descripcion" : "Poco nuboso"
          }, {
            "value" : "11n",
            "periodo" : "04",
            "descripcion" : "Despejado"
          }, {
            "value" : "11n",
            "periodo" : "05",
            "descripcion" : "Despejado"
          }, {
            "value" : "12n",
            "periodo" : "06",
            "descripcion" : "Poco nuboso"
          }, {
            "value" : "12",
            "periodo" : "07",
            "descripcion" : "Poco nuboso"
          }, {
            "value" : "12",
            "periodo" : "08",
            "descripcion" : "Poco nuboso"
          }, {
            "value" : "11",
            "periodo" : "09",
            "descripcion" : "Despejado"
          }, {
            "value" : "11",
            "periodo" : "10",
            "descripcion" : "Despejado"
          }, {
            "value" : "11",
            "periodo" : "11",
            "descripcion" : "Despejado"
          }, {
            "value" : "11",
            "periodo" : "12",
            "descripcion" : "Despejado"
          }, {
            "value" : "11",
            "periodo" : "13",
            "descripcion" : "Despejado"
          }, {
            "value" : "11",
            "periodo" : "14",
            "descripcion" : "Despejado"
          }, {
            "value" : "11",
            "periodo" : "15",
            "descripcion" : "Despejado"
          }, {
            "value" : "11",
            "periodo" : "16",
            "descripcion" : "Despejado"
          }, {
            "value" : "12",
            "periodo" : "17",
            "descripcion" : "Poco nuboso"
          }, {
            "value" : "11",
            "periodo" : "18",
            "descripcion" : "Despejado"
          }, {
            "value" : "11",
            "periodo" : "19",
            "descripcion" : "Despejado"
          }, {
            "value" : "11",
            "periodo" : "20",
            "descripcion" : "Despejado"
          }, {
            "value" : "12",
            "periodo" : "21",
            "descripcion" : "Poco nuboso"
          }, {
            "value" : "11n",
            "periodo" : "22",
            "descripcion" : "Despejado"
          }, {
            "value" : "11n",
            "periodo" : "23",
            "descripcion" : "Despejado"
          } ],
          "precipitacion" : [ {
            "value" : "0",
            "periodo" : "00"
          }, {
            "value" : "0",
            "periodo" : "01"
          }, {
            "value" : "0",
            "periodo" : "02"
          }, {
            "value" : "0",
            "periodo" : "03"
          }, {
            "value" : "0",
            "periodo" : "04"
          }, {
            "value" : "0",
            "periodo" : "05"
          }, {
            "value" : "0",
            "periodo" : "06"
          }, {
            "value" : "0",
            "periodo" : "07"
          }, {
            "value" : "0",
            "periodo" : "08"
          }, {
            "value" : "0",
            "periodo" : "09"
          }, {
            "value" : "0",
            "periodo" : "10"
          }, {
            "value" : "0",
            "periodo" : "11"
          }, {
            "value" : "0",
            "periodo" : "12"
          }, {
            "value" : "0",
            "periodo" : "13"
          }, {
            "value" : "0",
            "periodo" : "14"
          }, {
            "value" : "0",
            "periodo" : "15"
          }, {
            "value" : "0",
            "periodo" : "16"
          }, {
            "value" : "0",
            "periodo" : "17"
          }, {
            "value" : "0",
            "periodo" : "18"
          }, {
            "value" : "0",
            "periodo" : "19"
          }, {
            "value" : "0",
            "periodo" : "20"
          }, {
            "value" : "0",
            "periodo" : "21"
          }, {
            "value" : "0",
            "periodo" : "22"
          }, {
            "value" : "0",
            "periodo" : "23"
          } ],
          "probPrecipitacion" : [ {
            "value" : "0",
            "periodo" : "0208"
          }, {
            "value" : "0",
            "periodo" : "0814"
          }, {
            "value" : "0",
            "periodo" : "1420"
          }, {
            "value" : "0",
            "periodo" : "2002"
          } ],
          "probTormenta" : [ {
            "value" : "0",
            "periodo" : "0208"
          }, {
            "value" : "0",
            "periodo" : "0814"
          }, {
            "value" : "0",
            "periodo" : "1420"
          }, {
            "value" : "0",
            "periodo" : "2002"
          } ],
          "nieve" : [ {
            "value" : "0",
            "periodo" : "00"
          }, {
            "value" : "0",
            "periodo" : "01"
          }, {
            "value" : "0",
            "periodo" : "02"
          }, {
            "value" : "0",
            "periodo" : "03"
          }, {
            "value" : "0",
            "periodo" : "04"
          }, {
            "value" : "0",
            "periodo" : "05"
          }, {
            "value" : "0",
            "periodo" : "06"
          }, {
            "value" : "0",
            "periodo" : "07"
          }, {
            "value" : "0",
            "periodo" : "08"
          }, {
            "value" : "0",
            "periodo" : "09"
          }, {
            "value" : "0",
            "periodo" : "10"
          }, {
            "value" : "0",
            "periodo" : "11"
          }, {
            "value" : "0",
            "periodo" : "12"
          }, {
            "value" : "0",
            "periodo" : "13"
          }, {
            "value" : "0",
            "periodo" : "14"
          }, {
            "value" : "0",
            "periodo" : "15"
          }, {
            "value" : "0",
            "periodo" : "16"
          }, {
            "value" : "0",
            "periodo" : "17"
          }, {
            "value" : "0",
            "periodo" : "18"
          }, {
            "value" : "0",
            "periodo" : "19"
          }, {
            "value" : "0",
            "periodo" : "20"
          }, {
            "value" : "0",
            "periodo" : "21"
          }, {
            "value" : "0",
            "periodo" : "22"
          }, {
            "value" : "0",
            "periodo" : "23"
          } ],
          "probNieve" : [ {
            "value" : "0",
            "periodo" : "0208"
          }, {
            "value" : "0",
            "periodo" : "0814"
          }, {
            "value" : "0",
            "periodo" : "1420"
          }, {
            "value" : "0",
            "periodo" : "2002"
          } ],
          "temperatura" : [ {
            "value" : "17",
            "periodo" : "00"
          }, {
            "value" : "16",
            "periodo" : "01"
          }, {
            "value" : "15",
            "periodo" : "02"
          }, {
            "value" : "14",
            "periodo" : "03"
          }, {
            "value" : "13",
            "periodo" : "04"
          }, {
            "value" : "12",
            "periodo" : "05"
          }, {
            "value" : "11",
            "periodo" : "06"
          }, {
            "value" : "11",
            "periodo" : "07"
          }, {
            "value" : "12",
            "periodo" : "08"
          }, {
            "value" : "14",
            "periodo" : "09"
          }, {
            "value" : "15",
            "periodo" : "10"
          }, {
            "value" : "17",
            "periodo" : "11"
          }, {
            "value" : "19",
            "periodo" : "12"
          }, {
            "value" : "20",
            "periodo" : "13"
          }, {
            "value" : "21",
            "periodo" : "14"
          }, {
            "value" : "22",
            "periodo" : "15"
          }, {
            "value" : "23",
            "periodo" : "16"
          }, {
            "value" : "23",
            "periodo" : "17"
          }, {
            "value" : "23",
            "periodo" : "18"
          }, {
            "value" : "23",
            "periodo" : "19"
          }, {
            "value" : "23",
            "periodo" : "20"
          }, {
            "value" : "21",
            "periodo" : "21"
          }, {
            "value" : "20",
            "periodo" : "22"
          }, {
            "value" : "18",
            "periodo" : "23"
          } ],
          "sensTermica" : [ {
            "value" : "17",
            "periodo" : "00"
          }, {
            "value" : "16",
            "periodo" : "01"
          }, {
            "value" : "15",
            "periodo" : "02"
          }, {
            "value" : "14",
            "periodo" : "03"
          }, {
            "value" : "13",
            "periodo" : "04"
          }, {
            "value" : "12",
            "periodo" : "05"
          }, {
            "value" : "11",
            "periodo" : "06"
          }, {
            "value" : "11",
            "periodo" : "07"
          }, {
            "value" : "12",
            "periodo" : "08"
          }, {
            "value" : "14",
            "periodo" : "09"
          }, {
            "value" : "15",
            "periodo" : "10"
          }, {
            "value" : "17",
            "periodo" : "11"
          }, {
            "value" : "19",
            "periodo" : "12"
          }, {
            "value" : "20",
            "periodo" : "13"
          }, {
            "value" : "21",
            "periodo" : "14"
          }, {
            "value" : "22",
            "periodo" : "15"
          }, {
            "value" : "23",
            "periodo" : "16"
          }, {
            "value" : "23",
            "periodo" : "17"
          }, {
            "value" : "23",
            "periodo" : "18"
          }, {
            "value" : "23",
            "periodo" : "19"
          }, {
            "value" : "23",
            "periodo" : "20"
          }, {
            "value" : "21",
            "periodo" : "21"
          }, {
            "value" : "20",
            "periodo" : "22"
          }, {
            "value" : "18",
            "periodo" : "23"
          } ],
          "humedadRelativa" : [ {
            "value" : "64",
            "periodo" : "00"
          }, {
            "value" : "73",
            "periodo" : "01"
          }, {
            "value" : "83",
            "periodo" : "02"
          }, {
            "value" : "80",
            "periodo" : "03"
          }, {
            "value" : "81",
            "periodo" : "04"
          }, {
            "value" : "87",
            "periodo" : "05"
          }, {
            "value" : "90",
            "periodo" : "06"
          }, {
            "value" : "93",
            "periodo" : "07"
          }, {
            "value" : "87",
            "periodo" : "08"
          }, {
            "value" : "74",
            "periodo" : "09"
          }, {
            "value" : "65",
            "periodo" : "10"
          }, {
            "value" : "57",
            "periodo" : "11"
          }, {
            "value" : "48",
            "periodo" : "12"
          }, {
            "value" : "40",
            "periodo" : "13"
          }, {
            "value" : "32",
            "periodo" : "14"
          }, {
            "value" : "30",
            "periodo" : "15"
          }, {
            "value" : "29",
            "periodo" : "16"
          }, {
            "value" : "29",
            "periodo" : "17"
          }, {
            "value" : "31",
            "periodo" : "18"
          }, {
            "value" : "33",
            "periodo" : "19"
          }, {
            "value" : "35",
            "periodo" : "20"
          }, {
            "value" : "40",
            "periodo" : "21"
          }, {
            "value" : "44",
            "periodo" : "22"
          }, {
            "value" : "49",
            "periodo" : "23"
          } ],
          "vientoAndRachaMax" : [ {
            "direccion" : [ "NE" ],
            "velocidad" : [ "21" ],
            "periodo" : "00"
          }, {
            "value" : "37",
            "periodo" : "00"
          }, {
            "direccion" : [ "NE" ],
            "velocidad" : [ "18" ],
            "periodo" : "01"
          }, {
            "value" : "32",
            "periodo" : "01"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "17" ],
            "periodo" : "02"
          }, {
            "value" : "35",
            "periodo" : "02"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "17" ],
            "periodo" : "03"
          }, {
            "value" : "28",
            "periodo" : "03"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "15" ],
            "periodo" : "04"
          }, {
            "value" : "29",
            "periodo" : "04"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "14" ],
            "periodo" : "05"
          }, {
            "value" : "29",
            "periodo" : "05"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "15" ],
            "periodo" : "06"
          }, {
            "value" : "29",
            "periodo" : "06"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "15" ],
            "periodo" : "07"
          }, {
            "value" : "30",
            "periodo" : "07"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "15" ],
            "periodo" : "08"
          }, {
            "value" : "31",
            "periodo" : "08"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "15" ],
            "periodo" : "09"
          }, {
            "value" : "29",
            "periodo" : "09"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "13" ],
            "periodo" : "10"
          }, {
            "value" : "27",
            "periodo" : "10"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "12" ],
            "periodo" : "11"
          }, {
            "value" : "32",
            "periodo" : "11"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "13" ],
            "periodo" : "12"
          }, {
            "value" : "32",
            "periodo" : "12"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "14" ],
            "periodo" : "13"
          }, {
            "value" : "33",
            "periodo" : "13"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "14" ],
            "periodo" : "14"
          }, {
            "value" : "34",
            "periodo" : "14"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "14" ],
            "periodo" : "15"
          }, {
            "value" : "34",
            "periodo" : "15"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "14" ],
            "periodo" : "16"
          }, {
            "value" : "35",
            "periodo" : "16"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "15" ],
            "periodo" : "17"
          }, {
            "value" : "35",
            "periodo" : "17"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "15" ],
            "periodo" : "18"
          }, {
            "value" : "33",
            "periodo" : "18"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "15" ],
            "periodo" : "19"
          }, {
            "value" : "31",
            "periodo" : "19"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "14" ],
            "periodo" : "20"
          }, {
            "value" : "26",
            "periodo" : "20"
          }, {
            "direccion" : [ "NE" ],
            "velocidad" : [ "12" ],
            "periodo" : "21"
          }, {
            "value" : "17",
            "periodo" : "21"
          }, {
            "direccion" : [ "NE" ],
            "velocidad" : [ "8" ],
            "periodo" : "22"
          }, {
            "value" : "12",
            "periodo" : "22"
          }, {
            "direccion" : [ "NE" ],
            "velocidad" : [ "6" ],
            "periodo" : "23"
          }, {
            "value" : "17",
            "periodo" : "23"
          } ],
          "fecha" : "2023-06-30T00:00:00",
          "orto" : "06:46",
          "ocaso" : "21:53"
        }, {
          "estadoCielo" : [ {
            "value" : "12n",
            "periodo" : "00",
            "descripcion" : "Poco nuboso"
          }, {
            "value" : "11n",
            "periodo" : "01",
            "descripcion" : "Despejado"
          }, {
            "value" : "11n",
            "periodo" : "02",
            "descripcion" : "Despejado"
          }, {
            "value" : "11n",
            "periodo" : "03",
            "descripcion" : "Despejado"
          }, {
            "value" : "12n",
            "periodo" : "04",
            "descripcion" : "Poco nuboso"
          }, {
            "value" : "11n",
            "periodo" : "05",
            "descripcion" : "Despejado"
          }, {
            "value" : "11n",
            "periodo" : "06",
            "descripcion" : "Despejado"
          }, {
            "value" : "11",
            "periodo" : "07",
            "descripcion" : "Despejado"
          } ],
          "precipitacion" : [ {
            "value" : "0",
            "periodo" : "00"
          }, {
            "value" : "0",
            "periodo" : "01"
          }, {
            "value" : "0",
            "periodo" : "02"
          }, {
            "value" : "0",
            "periodo" : "03"
          }, {
            "value" : "0",
            "periodo" : "04"
          }, {
            "value" : "0",
            "periodo" : "05"
          }, {
            "value" : "0",
            "periodo" : "06"
          }, {
            "value" : "0",
            "periodo" : "07"
          } ],
          "probPrecipitacion" : [ {
            "value" : "0",
            "periodo" : "0208"
          } ],
          "probTormenta" : [ {
            "value" : "0",
            "periodo" : "0208"
          } ],
          "nieve" : [ {
            "value" : "0",
            "periodo" : "00"
          }, {
            "value" : "0",
            "periodo" : "01"
          }, {
            "value" : "0",
            "periodo" : "02"
          }, {
            "value" : "0",
            "periodo" : "03"
          }, {
            "value" : "0",
            "periodo" : "04"
          }, {
            "value" : "0",
            "periodo" : "05"
          }, {
            "value" : "0",
            "periodo" : "06"
          }, {
            "value" : "0",
            "periodo" : "07"
          } ],
          "probNieve" : [ {
            "value" : "0",
            "periodo" : "0208"
          } ],
          "temperatura" : [ {
            "value" : "17",
            "periodo" : "00"
          }, {
            "value" : "16",
            "periodo" : "01"
          }, {
            "value" : "15",
            "periodo" : "02"
          }, {
            "value" : "14",
            "periodo" : "03"
          }, {
            "value" : "14",
            "periodo" : "04"
          }, {
            "value" : "13",
            "periodo" : "05"
          }, {
            "value" : "12",
            "periodo" : "06"
          }, {
            "value" : "12",
            "periodo" : "07"
          } ],
          "sensTermica" : [ {
            "value" : "17",
            "periodo" : "00"
          }, {
            "value" : "16",
            "periodo" : "01"
          }, {
            "value" : "15",
            "periodo" : "02"
          }, {
            "value" : "14",
            "periodo" : "03"
          }, {
            "value" : "14",
            "periodo" : "04"
          }, {
            "value" : "13",
            "periodo" : "05"
          }, {
            "value" : "12",
            "periodo" : "06"
          }, {
            "value" : "12",
            "periodo" : "07"
          } ],
          "humedadRelativa" : [ {
            "value" : "54",
            "periodo" : "00"
          }, {
            "value" : "59",
            "periodo" : "01"
          }, {
            "value" : "69",
            "periodo" : "02"
          }, {
            "value" : "75",
            "periodo" : "03"
          }, {
            "value" : "79",
            "periodo" : "04"
          }, {
            "value" : "83",
            "periodo" : "05"
          }, {
            "value" : "87",
            "periodo" : "06"
          }, {
            "value" : "84",
            "periodo" : "07"
          } ],
          "vientoAndRachaMax" : [ {
            "direccion" : [ "NE" ],
            "velocidad" : [ "9" ],
            "periodo" : "00"
          }, {
            "value" : "22",
            "periodo" : "00"
          }, {
            "direccion" : [ "NE" ],
            "velocidad" : [ "11" ],
            "periodo" : "01"
          }, {
            "value" : "21",
            "periodo" : "01"
          }, {
            "direccion" : [ "NE" ],
            "velocidad" : [ "11" ],
            "periodo" : "02"
          }, {
            "value" : "16",
            "periodo" : "02"
          }, {
            "direccion" : [ "NE" ],
            "velocidad" : [ "8" ],
            "periodo" : "03"
          }, {
            "value" : "13",
            "periodo" : "03"
          }, {
            "direccion" : [ "NE" ],
            "velocidad" : [ "7" ],
            "periodo" : "04"
          }, {
            "value" : "12",
            "periodo" : "04"
          }, {
            "direccion" : [ "NE" ],
            "velocidad" : [ "6" ],
            "periodo" : "05"
          }, {
            "value" : "12",
            "periodo" : "05"
          }, {
            "direccion" : [ "N" ],
            "velocidad" : [ "6" ],
            "periodo" : "06"
          }, {
            "value" : "9",
            "periodo" : "06"
          }, {
            "direccion" : [ "NE" ],
            "velocidad" : [ "4" ],
            "periodo" : "07"
          }, {
            "value" : "10",
            "periodo" : "07"
          } ],
          "fecha" : "2023-07-01T00:00:00",
          "orto" : "06:46",
          "ocaso" : "21:53"
        } ]
      },
      "id" : "40004",
      "version" : "1.0"
    } ]
    

    const urlPueblos = `${process.env.API_URL_BASE}/maestro/municipios/?api_key=${process.env.API_KEY}`

    fetchMock.get(urlPueblos, mockResponsePueblos as MockResponse);

    const urlOldApi = `${process.env.API_URL_BASE}/prediccion/especifica/municipio/horaria/40004/?api_key=${process.env.API_KEY}`

    const urlClima = `https://opendata.aemet.es/opendata/sh/486181b0`

    const clima = await getClimaMunicipio('Braga')
    expect(clima).toBeDefined()
  })
}
)
