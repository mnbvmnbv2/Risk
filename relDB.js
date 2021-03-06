const relationDatabase = [
    {id : 0,
    name : "Alaska",
    continent : "NA",
    relations : [1,3,31],
    x: 50,
    y: 180,
    owner: null,
    troops: 0},
    
    {id : 1,
    name : "Nordvest-Territoriet",
    continent : "NA",
    relations : [0,2,3,4],
    x: 170,
    y: 160,
    owner: null,
    troops: 0},

    {id : 2,
    name : "Grønland",
    continent : "NA",
    relations : [1,4,5,19],
    x: 400,
    y: 50,
    owner: null,
    troops: 0},

    {id : 3,
    name : "Alberta",
    continent : "NA",
    relations : [0,1,4,6],
    x: 100,
    y: 250,
    owner: null,
    troops: 0},

    {id : 4,
    name : "Ontario",
    continent : "NA",
    relations : [1,2,3,5,6,7],
    x: 180,
    y: 220,
    owner: null,
    troops: 0},

    {id : 5,
    name : "Quebec",
    continent : "NA",
    relations : [2,4,7],
    x: 300,
    y: 200,
    owner: null,
    troops: 0},

    {id : 6,
    name : "Vest-USA",
    continent : "NA",
    relations : [3,4,7,8],
    x: 130,
    y: 320,
    owner: null,
    troops: 0},

    {id : 7,
    name : "Øst-USA",
    continent : "NA",
    relations : [4,5,6,8],
    x: 250,
    y: 300,
    owner: null,
    troops: 0},

    {id : 8,
    name : "Sentral-Amerika",
    continent : "NA",
    relations : [6,7,9],
    x: 170,
    y: 400,
    owner: null,
    troops: 0},

    {id : 9,
    name : "Venezuela",
    continent : "SA",
    relations : [8,10,11],
    x: 280,
    y: 570,
    owner: null,
    troops: 0},

    {id : 10,
    name : "Peru",
    continent : "SA",
    relations : [9,11,12],
    x: 200,
    y: 630,
    owner: null,
    troops: 0},

    {id : 11,
    name : "Brasil",
    continent : "SA",
    relations : [9,10,12,13],
    x: 320,
    y: 650,
    owner: null,
    troops: 0},

    {id : 12,
    name : "Argentina",
    continent : "SA",
    relations : [10,11],
    x: 280,
    y: 780,
    owner: null,
    troops: 0},

    {id : 13,
    name : "Nord-Afrika",
    continent : "AF",
    relations : [11,14,15,16,24,25],
    x: 550,
    y: 600,
    owner: null,
    troops: 0},

    {id : 14,
    name : "Egypt",
    continent : "AF",
    relations : [13,15,25,26],
    x: 700,
    y: 550,
    owner: null,
    troops: 0},

    {id : 15,
    name : "Øst-Afrika",
    continent : "AF",
    relations : [13,14,16,17,18],
    x: 740,
    y: 680,
    owner: null,
    troops: 0},

    {id : 16,
    name : "Kongo",
    continent : "AF",
    relations : [13,15,17],
    x: 640,
    y: 730,
    owner: null,
    troops: 0},

    {id : 17,
    name : "Sør-Afrika",
    continent : "AF",
    relations : [15,16,18],
    x: 640,
    y: 810,
    owner: null,
    troops: 0},

    {id : 18,
    name : "Madagaskar",
    continent : "AF",
    relations : [15,17],
    x: 770,
    y: 790,
    owner: null,
    troops: 0},

    {id : 19,
    name : "Island",
    continent : "EU",
    relations : [2,20,21],
    x: 460,
    y: 170,
    owner: null,
    troops: 0},

    {id : 20,
    name : "Skandiavia",
    continent : "EU",
    relations : [19,21,22,23],
    x: 550,
    y: 180,
    owner: null,
    troops: 0},

    {id : 21,
    name : "Storbritannia",
    continent : "EU",
    relations : [19,20,22,24],
    x: 460,
    y: 270,
    owner: null,
    troops: 0},

    {id : 22,
    name : "Nord-Europa",
    continent : "EU",
    relations : [20,21,23,24,25],
    x: 600,
    y: 290,
    owner: null,
    troops: 0},

    {id : 23,
    name : "Øst-Europa",
    continent : "EU",
    relations : [20,22,25,26,27,28],
    x: 710,
    y: 230,
    owner: null,
    troops: 0},

    {id : 24,
    name : "Vest-Europa",
    continent : "EU",
    relations : [13,21,22,25],
    x: 500,
    y: 400,
    owner: null,
    troops: 0},

    {id : 25,
    name : "Sør-Europa",
    continent : "EU",
    relations : [13,14,22,23,24,26],
    x: 600,
    y: 370,
    owner: null,
    troops: 0},

    {id : 26,
    name : "Midt-Østen",
    continent : "AS",
    relations : [14,23,25,27,36],
    x: 800,
    y: 550,
    owner: null,
    troops: 0},

    {id : 27,
    name : "Afghanistan",
    continent : "AS",
    relations : [23,26,28,35,36],
    x: 820,
    y: 290,
    owner: null,
    troops: 0},

    {id : 28,
    name : "Ural",
    continent : "AS",
    relations : [23,27,29,35],
    x: 850,
    y: 150,
    owner: null,
    troops: 0},

    {id : 29,
    name : "Sibir",
    continent : "AS",
    relations : [28,30,35,32,33],
    x: 900,
    y: 110,
    owner: null,
    troops: 0},

    {id : 30,
    name : "Jakutsk",
    continent : "AS",
    relations : [29,31,32],
    x: 1100,
    y: 100,
    owner: null,
    troops: 0},

    {id : 31,
    name : "Kamchatchsasa",
    continent : "AS",
    relations : [0,30,32,33,34],
    x: 1300,
    y: 120,
    owner: null,
    troops: 0},

    {id : 32,
    name : "Irkutsk",
    continent : "AS",
    relations : [29,30,31,33],
    x: 1100,
    y: 200,
    owner: null,
    troops: 0},

    {id : 33,
    name : "Mongolia",
    continent : "AS",
    relations : [29,32,31,35,34],
    x: 1200,
    y: 250,
    owner: null,
    troops: 0},

    {id : 34,
    name : "Japan",
    continent : "AS",
    relations : [33,31],
    x: 1400,
    y: 350,
    owner: null,
    troops: 0},

    {id : 35,
    name : "Kina",
    continent : "AS",
    relations : [27,28,29,33,36,37],
    x: 1150,
    y: 400,
    owner: null,
    troops: 0},

    {id : 36,
    name : "India",
    continent : "AS",
    relations : [26,27,35,37],
    x: 1030,
    y: 470,
    owner: null,
    troops: 0},

    {id : 37,
    name : "Siam",
    continent : "AS",
    relations : [36,35,38],
    x: 1200,
    y: 550,
    owner: null,
    troops: 0},

    {id : 38,
    name : "Indonesia",
    continent : "AU",
    relations : [37,39,30],
    x: 1200,
    y: 690,
    owner: null,
    troops: 0},

    {id : 39,
    name : "Ny-Guinea",
    continent : "AU",
    relations : [38,40,41],
    x: 1400,
    y: 730,
    owner: null,
    troops: 0},

    {id : 40,
    name : "Vest-Australia",
    continent : "AU",
    relations : [38,39,41],
    x: 1240,
    y: 820,
    owner: null,
    troops: 0},

    {id : 41,
    name : "Øst-Australia",
    continent : "AU",
    relations : [39,40],
    x: 1400,
    y: 840,
    owner: null,
    troops: 0}
]