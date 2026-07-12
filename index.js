const products = [
  {
    "id": 1,
    "name": "Aiwa AT-X80E Black",
    "category": "Qulaqlıq",
    "brand": "Aiwa",
    "color": "Black",
    "price": "372.77",
    "old_price": "396.56",
    "discount": "6%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/aiwa-atx80e-black"
  },
  {
    "id": 2,
    "name": "Baseus Bowie E13 White",
    "category": "Qulaqlıq",
    "brand": "Baseus",
    "color": "White",
    "price": "300.21",
    "old_price": "341.15",
    "discount": "12%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-bowie-e13-white"
  },
  {
    "id": 3,
    "name": "Joyroom Lightning Kabel 1M White",
    "category": "Kabel",
    "brand": "Joyroom",
    "color": "White",
    "price": "351.85",
    "old_price": null,
    "discount": null,
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-lightning-kabel-1m-white"
  },
  {
    "id": 4,
    "name": "Samsung Galaxy Buds FE White",
    "category": "Qulaqlıq",
    "brand": "Samsung",
    "color": "White",
    "price": "270.03",
    "old_price": null,
    "discount": null,
    "in_stock": false,
    "link": "https://www.superfon.az/az/mehsul/samsung-galaxy-buds-fe-white"
  },
  {
    "id": 5,
    "name": "Baseus Car Holder Magnetic Black",
    "category": "Car Holder",
    "brand": "Baseus",
    "color": "Black",
    "price": "289.31",
    "old_price": "314.47",
    "discount": "8%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-car-holder-magnetic-black"
  },
  {
    "id": 6,
    "name": "Celebrat Aux Kabel 1.5M White",
    "category": "Kabel",
    "brand": "Celebrat",
    "color": "White",
    "price": "176.06",
    "old_price": null,
    "discount": null,
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/celebrat-aux-kabel-15m-white"
  },
  {
    "id": 7,
    "name": "Joyroom 30W GaN Adapter Black",
    "category": "Adapter",
    "brand": "Joyroom",
    "color": "Black",
    "price": "165.50",
    "old_price": null,
    "discount": null,
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-30w-gan-adapter-black"
  },
  {
    "id": 8,
    "name": "Ugreen HDMI 2.1 Kabel 2M Black",
    "category": "Kabel",
    "brand": "Ugreen",
    "color": "Black",
    "price": "357.68",
    "old_price": "436.19",
    "discount": "18%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/ugreen-hdmi-21-kabel-2m-black"
  },
  {
    "id": 9,
    "name": "TTEC PowerSlim 10000mAh White",
    "category": "Powerbank",
    "brand": "TTEC",
    "color": "White",
    "price": "164.31",
    "old_price": "219.08",
    "discount": "25%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/ttec-powerslim-10000mah-white"
  },
  {
    "id": 10,
    "name": "Apple AirPods 3 White",
    "category": "Qulaqlıq",
    "brand": "Apple",
    "color": "White",
    "price": "172.38",
    "old_price": "183.38",
    "discount": "6%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/apple-airpods-3-white"
  },
  {
    "id": 11,
    "name": "Baseus Car Holder Magnetic Black (Plus)",
    "category": "Car Holder",
    "brand": "Baseus",
    "color": "Black",
    "price": "55.29",
    "old_price": "58.82",
    "discount": "6%",
    "in_stock": false,
    "link": "https://www.superfon.az/az/mehsul/baseus-car-holder-magnetic-black-plus"
  },
  {
    "id": 12,
    "name": "Baseus Blade 20000mAh Black",
    "category": "Powerbank",
    "brand": "Baseus",
    "color": "Black",
    "price": "387.57",
    "old_price": "440.42",
    "discount": "12%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-blade-20000mah-black"
  },
  {
    "id": 13,
    "name": "Anker PowerCore 10000mAh Black",
    "category": "Powerbank",
    "brand": "Anker",
    "color": "Black",
    "price": "88.95",
    "old_price": "98.83",
    "discount": "10%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/anker-powercore-10000mah-black"
  },
  {
    "id": 14,
    "name": "Xiaomi Redmi 20000mAh Black",
    "category": "Powerbank",
    "brand": "Xiaomi",
    "color": "Black",
    "price": "246.05",
    "old_price": "261.76",
    "discount": "6%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/xiaomi-redmi-20000mah-black"
  },
  {
    "id": 15,
    "name": "Xiaomi Redmi Watch 5 Black",
    "category": "Smart Saat",
    "brand": "Xiaomi",
    "color": "Black",
    "price": "47.94",
    "old_price": "56.40",
    "discount": "15%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/xiaomi-redmi-watch-5-black"
  },
  {
    "id": 16,
    "name": "Anker PowerCore 10000mAh Blue",
    "category": "Powerbank",
    "brand": "Anker",
    "color": "Blue",
    "price": "133.32",
    "old_price": "166.65",
    "discount": "20%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/anker-powercore-10000mah-blue"
  },
  {
    "id": 17,
    "name": "Joyroom 30W GaN Adapter White",
    "category": "Adapter",
    "brand": "Joyroom",
    "color": "White",
    "price": "34.95",
    "old_price": null,
    "discount": null,
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-30w-gan-adapter-white"
  },
  {
    "id": 18,
    "name": "JBL Tune Flex Blue",
    "category": "Qulaqlıq",
    "brand": "JBL",
    "color": "Blue",
    "price": "52.00",
    "old_price": "56.52",
    "discount": "8%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/jbl-tune-flex-blue"
  },
  {
    "id": 19,
    "name": "Apple Watch SE 2 Starlight",
    "category": "Smart Saat",
    "brand": "Apple",
    "color": "Starlight",
    "price": "27.34",
    "old_price": "29.09",
    "discount": "6%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/apple-watch-se-2-starlight"
  },
  {
    "id": 20,
    "name": "Joyroom Car Mount Silver",
    "category": "Car Holder",
    "brand": "Joyroom",
    "color": "Silver",
    "price": "233.50",
    "old_price": "265.34",
    "discount": "12%",
    "in_stock": false,
    "link": "https://www.superfon.az/az/mehsul/joyroom-car-mount-silver"
  },
  {
    "id": 21,
    "name": "Kaku 3in1 Maqnit Kabel Black",
    "category": "Kabel",
    "brand": "Kaku",
    "color": "Black",
    "price": "35.39",
    "old_price": "37.65",
    "discount": "6%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/kaku-3in1-maqnit-kabel-black"
  },
  {
    "id": 22,
    "name": "Xiaomi Redmi Watch 5 Black (2024)",
    "category": "Smart Saat",
    "brand": "Xiaomi",
    "color": "Black",
    "price": "221.46",
    "old_price": "276.82",
    "discount": "20%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/xiaomi-redmi-watch-5-black-2024"
  },
  {
    "id": 23,
    "name": "Joyroom Car Mount Silver (EU)",
    "category": "Car Holder",
    "brand": "Joyroom",
    "color": "Silver",
    "price": "200.38",
    "old_price": "267.18",
    "discount": "25%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-car-mount-silver-eu"
  },
  {
    "id": 24,
    "name": "Samsung 25W Super Fast Adapter White",
    "category": "Adapter",
    "brand": "Samsung",
    "color": "White",
    "price": "234.57",
    "old_price": null,
    "discount": null,
    "in_stock": false,
    "link": "https://www.superfon.az/az/mehsul/samsung-25w-super-fast-adapter-white"
  },
  {
    "id": 25,
    "name": "Joyroom Lightning Kabel 1M White (Lite)",
    "category": "Kabel",
    "brand": "Joyroom",
    "color": "White",
    "price": "205.20",
    "old_price": "273.60",
    "discount": "25%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-lightning-kabel-1m-white-lite"
  },
  {
    "id": 26,
    "name": "Baseus Car Holder Magnetic Black (Pro)",
    "category": "Car Holder",
    "brand": "Baseus",
    "color": "Black",
    "price": "367.55",
    "old_price": "432.41",
    "discount": "15%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-car-holder-magnetic-black-pro"
  },
  {
    "id": 27,
    "name": "Joyroom Lightning Kabel 1M Black",
    "category": "Kabel",
    "brand": "Joyroom",
    "color": "Black",
    "price": "178.14",
    "old_price": null,
    "discount": null,
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-lightning-kabel-1m-black"
  },
  {
    "id": 28,
    "name": "Apple Watch SE 2 Starlight (Plus)",
    "category": "Smart Saat",
    "brand": "Apple",
    "color": "Starlight",
    "price": "16.88",
    "old_price": "20.59",
    "discount": "18%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/apple-watch-se-2-starlight-plus"
  },
  {
    "id": 29,
    "name": "Baseus Car Holder Magnetic Black (2025)",
    "category": "Car Holder",
    "brand": "Baseus",
    "color": "Black",
    "price": "168.97",
    "old_price": "211.21",
    "discount": "20%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-car-holder-magnetic-black-2025"
  },
  {
    "id": 30,
    "name": "Joyroom Car Mount Silver (2025)",
    "category": "Car Holder",
    "brand": "Joyroom",
    "color": "Silver",
    "price": "183.89",
    "old_price": "229.86",
    "discount": "20%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-car-mount-silver-2025"
  },
  {
    "id": 31,
    "name": "Joyroom JR-TL11 Black",
    "category": "Qulaqlıq",
    "brand": "Joyroom",
    "color": "Black",
    "price": "188.37",
    "old_price": "214.06",
    "discount": "12%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-jrtl11-black"
  },
  {
    "id": 32,
    "name": "Joyroom Car Mount Black",
    "category": "Car Holder",
    "brand": "Joyroom",
    "color": "Black",
    "price": "245.70",
    "old_price": null,
    "discount": null,
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-car-mount-black"
  },
  {
    "id": 33,
    "name": "Baseus Car Holder Magnetic Black (2024)",
    "category": "Car Holder",
    "brand": "Baseus",
    "color": "Black",
    "price": "423.60",
    "old_price": null,
    "discount": null,
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-car-holder-magnetic-black-2024"
  },
  {
    "id": 34,
    "name": "Joyroom Car Mount Black (EU)",
    "category": "Car Holder",
    "brand": "Joyroom",
    "color": "Black",
    "price": "26.74",
    "old_price": "35.65",
    "discount": "25%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-car-mount-black-eu"
  },
  {
    "id": 35,
    "name": "Baseus Bipow 20000mAh Black",
    "category": "Powerbank",
    "brand": "Baseus",
    "color": "Black",
    "price": "89.24",
    "old_price": "108.83",
    "discount": "18%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-bipow-20000mah-black"
  },
  {
    "id": 36,
    "name": "Honor Choice Earbuds S7 Gray",
    "category": "Qulaqlıq",
    "brand": "Honor",
    "color": "Gray",
    "price": "214.23",
    "old_price": "267.79",
    "discount": "20%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/honor-choice-earbuds-s7-gray"
  },
  {
    "id": 37,
    "name": "Baseus Type-C to Lightning 20W White",
    "category": "Kabel",
    "brand": "Baseus",
    "color": "White",
    "price": "254.70",
    "old_price": "318.38",
    "discount": "20%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-typec-to-lightning-20w-white"
  },
  {
    "id": 38,
    "name": "Baseus 20W Type-C Adapter White",
    "category": "Adapter",
    "brand": "Baseus",
    "color": "White",
    "price": "182.32",
    "old_price": "193.96",
    "discount": "6%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-20w-typec-adapter-white"
  },
  {
    "id": 39,
    "name": "Baseus 20W Type-C Adapter Black",
    "category": "Adapter",
    "brand": "Baseus",
    "color": "Black",
    "price": "309.80",
    "old_price": null,
    "discount": null,
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-20w-typec-adapter-black"
  },
  {
    "id": 40,
    "name": "Joyroom JR-TL11 Black (EU)",
    "category": "Qulaqlıq",
    "brand": "Joyroom",
    "color": "Black",
    "price": "153.69",
    "old_price": null,
    "discount": null,
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-jrtl11-black-eu"
  },
  {
    "id": 41,
    "name": "Aiwa AT-X80E Black (2024)",
    "category": "Qulaqlıq",
    "brand": "Aiwa",
    "color": "Black",
    "price": "369.94",
    "old_price": "393.55",
    "discount": "6%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/aiwa-atx80e-black-2024"
  },
  {
    "id": 42,
    "name": "Joyroom JR-TL11 White",
    "category": "Qulaqlıq",
    "brand": "Joyroom",
    "color": "White",
    "price": "44.90",
    "old_price": "47.77",
    "discount": "6%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-jrtl11-white"
  },
  {
    "id": 43,
    "name": "Apple AirPods 3 White (Plus)",
    "category": "Qulaqlıq",
    "brand": "Apple",
    "color": "White",
    "price": "74.88",
    "old_price": "91.32",
    "discount": "18%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/apple-airpods-3-white-plus"
  },
  {
    "id": 44,
    "name": "Baseus Bipow 20000mAh Black (Plus)",
    "category": "Powerbank",
    "brand": "Baseus",
    "color": "Black",
    "price": "230.09",
    "old_price": "270.70",
    "discount": "15%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-bipow-20000mah-black-plus"
  },
  {
    "id": 45,
    "name": "Samsung Galaxy Watch7 Green",
    "category": "Smart Saat",
    "brand": "Samsung",
    "color": "Green",
    "price": "333.86",
    "old_price": "370.96",
    "discount": "10%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/samsung-galaxy-watch7-green"
  },
  {
    "id": 46,
    "name": "JBL Tune Flex White",
    "category": "Qulaqlıq",
    "brand": "JBL",
    "color": "White",
    "price": "13.56",
    "old_price": "15.95",
    "discount": "15%",
    "in_stock": false,
    "link": "https://www.superfon.az/az/mehsul/jbl-tune-flex-white"
  },
  {
    "id": 47,
    "name": "Joyroom Car Mount Black (2025)",
    "category": "Car Holder",
    "brand": "Joyroom",
    "color": "Black",
    "price": "382.00",
    "old_price": "424.44",
    "discount": "10%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-car-mount-black-2025"
  },
  {
    "id": 48,
    "name": "Joyroom Magnetic Charger 15W Black",
    "category": "Şarj (Wireless)",
    "brand": "Joyroom",
    "color": "Black",
    "price": "190.75",
    "old_price": null,
    "discount": null,
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-magnetic-charger-15w-black"
  },
  {
    "id": 49,
    "name": "Joyroom Lightning Kabel 1M White (EU)",
    "category": "Kabel",
    "brand": "Joyroom",
    "color": "White",
    "price": "157.13",
    "old_price": "191.62",
    "discount": "18%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-lightning-kabel-1m-white-eu"
  },
  {
    "id": 50,
    "name": "Joyroom Magnetic Charger 15W White",
    "category": "Şarj (Wireless)",
    "brand": "Joyroom",
    "color": "White",
    "price": "299.49",
    "old_price": "399.32",
    "discount": "25%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-magnetic-charger-15w-white"
  },
  {
    "id": 51,
    "name": "Baseus Car Holder Magnetic Black (Lite)",
    "category": "Car Holder",
    "brand": "Baseus",
    "color": "Black",
    "price": "361.55",
    "old_price": "440.91",
    "discount": "18%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-car-holder-magnetic-black-lite"
  },
  {
    "id": 52,
    "name": "Apple 20W USB-C Adapter White",
    "category": "Adapter",
    "brand": "Apple",
    "color": "White",
    "price": "162.79",
    "old_price": "184.99",
    "discount": "12%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/apple-20w-usbc-adapter-white"
  },
  {
    "id": 53,
    "name": "Baseus Bipow 20000mAh White",
    "category": "Powerbank",
    "brand": "Baseus",
    "color": "White",
    "price": "194.59",
    "old_price": "221.12",
    "discount": "12%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-bipow-20000mah-white"
  },
  {
    "id": 54,
    "name": "Kaku 3in1 Maqnit Kabel Black (Plus)",
    "category": "Kabel",
    "brand": "Kaku",
    "color": "Black",
    "price": "283.48",
    "old_price": "333.51",
    "discount": "15%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/kaku-3in1-maqnit-kabel-black-plus"
  },
  {
    "id": 55,
    "name": "Baseus Type-C to Type-C 100W Black",
    "category": "Kabel",
    "brand": "Baseus",
    "color": "Black",
    "price": "36.94",
    "old_price": "45.05",
    "discount": "18%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-typec-to-typec-100w-black"
  },
  {
    "id": 56,
    "name": "Joyroom Magnetic Charger 15W White (Pro)",
    "category": "Şarj (Wireless)",
    "brand": "Joyroom",
    "color": "White",
    "price": "72.32",
    "old_price": null,
    "discount": null,
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-magnetic-charger-15w-white-pro"
  },
  {
    "id": 57,
    "name": "Xiaomi Redmi Watch 5 Black (Plus)",
    "category": "Smart Saat",
    "brand": "Xiaomi",
    "color": "Black",
    "price": "257.32",
    "old_price": "302.73",
    "discount": "15%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/xiaomi-redmi-watch-5-black-plus"
  },
  {
    "id": 58,
    "name": "Xiaomi Wireless Charger 30W Black",
    "category": "Şarj (Wireless)",
    "brand": "Xiaomi",
    "color": "Black",
    "price": "239.27",
    "old_price": "265.85",
    "discount": "10%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/xiaomi-wireless-charger-30w-black"
  },
  {
    "id": 59,
    "name": "Joyroom 30W GaN Adapter White (Plus)",
    "category": "Adapter",
    "brand": "Joyroom",
    "color": "White",
    "price": "175.87",
    "old_price": "187.10",
    "discount": "6%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-30w-gan-adapter-white-plus"
  },
  {
    "id": 60,
    "name": "Ugreen HDMI 2.1 Kabel 2M Black (2025)",
    "category": "Kabel",
    "brand": "Ugreen",
    "color": "Black",
    "price": "72.19",
    "old_price": "80.21",
    "discount": "10%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/ugreen-hdmi-21-kabel-2m-black-2025"
  },
  {
    "id": 61,
    "name": "Anker PowerCore 10000mAh Black (2025)",
    "category": "Powerbank",
    "brand": "Anker",
    "color": "Black",
    "price": "281.21",
    "old_price": "305.66",
    "discount": "8%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/anker-powercore-10000mah-black-2025"
  },
  {
    "id": 62,
    "name": "Joyroom Car Mount Silver (2024)",
    "category": "Car Holder",
    "brand": "Joyroom",
    "color": "Silver",
    "price": "251.76",
    "old_price": null,
    "discount": null,
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-car-mount-silver-2024"
  },
  {
    "id": 63,
    "name": "Xiaomi 33W Adapter White",
    "category": "Adapter",
    "brand": "Xiaomi",
    "color": "White",
    "price": "268.10",
    "old_price": "335.13",
    "discount": "20%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/xiaomi-33w-adapter-white"
  },
  {
    "id": 64,
    "name": "Xiaomi Redmi 20000mAh White",
    "category": "Powerbank",
    "brand": "Xiaomi",
    "color": "White",
    "price": "109.74",
    "old_price": "137.18",
    "discount": "20%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/xiaomi-redmi-20000mah-white"
  },
  {
    "id": 65,
    "name": "Aiwa AT-X80E Black (Plus)",
    "category": "Qulaqlıq",
    "brand": "Aiwa",
    "color": "Black",
    "price": "342.78",
    "old_price": "380.87",
    "discount": "10%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/aiwa-atx80e-black-plus"
  },
  {
    "id": 66,
    "name": "Samsung Galaxy Buds FE Graphite",
    "category": "Qulaqlıq",
    "brand": "Samsung",
    "color": "Graphite",
    "price": "142.21",
    "old_price": "189.61",
    "discount": "25%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/samsung-galaxy-buds-fe-graphite"
  },
  {
    "id": 67,
    "name": "Joyroom JR-QP192 10000mAh Black",
    "category": "Powerbank",
    "brand": "Joyroom",
    "color": "Black",
    "price": "341.61",
    "old_price": "427.01",
    "discount": "20%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-jrqp192-10000mah-black"
  },
  {
    "id": 68,
    "name": "Baseus Blade 20000mAh Black (Plus)",
    "category": "Powerbank",
    "brand": "Baseus",
    "color": "Black",
    "price": "192.44",
    "old_price": "256.59",
    "discount": "25%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-blade-20000mah-black-plus"
  },
  {
    "id": 69,
    "name": "Baseus Type-C to Type-C 100W Black (EU)",
    "category": "Kabel",
    "brand": "Baseus",
    "color": "Black",
    "price": "256.96",
    "old_price": "279.30",
    "discount": "8%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-typec-to-typec-100w-black-eu"
  },
  {
    "id": 70,
    "name": "Baseus Type-C to Lightning 20W White (Pro)",
    "category": "Kabel",
    "brand": "Baseus",
    "color": "White",
    "price": "119.84",
    "old_price": "127.49",
    "discount": "6%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-typec-to-lightning-20w-white-pro"
  },
  {
    "id": 71,
    "name": "Baseus Wireless Charger 15W Black",
    "category": "Şarj (Wireless)",
    "brand": "Baseus",
    "color": "Black",
    "price": "264.55",
    "old_price": null,
    "discount": null,
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-wireless-charger-15w-black"
  },
  {
    "id": 72,
    "name": "Baseus Blade 20000mAh Black (Lite)",
    "category": "Powerbank",
    "brand": "Baseus",
    "color": "Black",
    "price": "30.43",
    "old_price": "40.57",
    "discount": "25%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-blade-20000mah-black-lite"
  },
  {
    "id": 73,
    "name": "Apple 20W USB-C Adapter White (2024)",
    "category": "Adapter",
    "brand": "Apple",
    "color": "White",
    "price": "291.69",
    "old_price": "310.31",
    "discount": "6%",
    "in_stock": false,
    "link": "https://www.superfon.az/az/mehsul/apple-20w-usbc-adapter-white-2024"
  },
  {
    "id": 74,
    "name": "Baseus 20W Type-C Adapter White (EU)",
    "category": "Adapter",
    "brand": "Baseus",
    "color": "White",
    "price": "43.69",
    "old_price": "58.25",
    "discount": "25%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-20w-typec-adapter-white-eu"
  },
  {
    "id": 75,
    "name": "Baseus Bipow 20000mAh White (Plus)",
    "category": "Powerbank",
    "brand": "Baseus",
    "color": "White",
    "price": "49.70",
    "old_price": "62.13",
    "discount": "20%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-bipow-20000mah-white-plus"
  },
  {
    "id": 76,
    "name": "Xiaomi Redmi Watch 5 Silver",
    "category": "Smart Saat",
    "brand": "Xiaomi",
    "color": "Silver",
    "price": "219.44",
    "old_price": "238.52",
    "discount": "8%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/xiaomi-redmi-watch-5-silver"
  },
  {
    "id": 77,
    "name": "Joyroom Magnetic Charger 15W Black (2025)",
    "category": "Şarj (Wireless)",
    "brand": "Joyroom",
    "color": "Black",
    "price": "107.24",
    "old_price": "142.99",
    "discount": "25%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-magnetic-charger-15w-black-2025"
  },
  {
    "id": 78,
    "name": "Samsung Galaxy Buds3 White",
    "category": "Qulaqlıq",
    "brand": "Samsung",
    "color": "White",
    "price": "226.95",
    "old_price": "267.00",
    "discount": "15%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/samsung-galaxy-buds3-white"
  },
  {
    "id": 79,
    "name": "Samsung Galaxy Watch7 Green (2024)",
    "category": "Smart Saat",
    "brand": "Samsung",
    "color": "Green",
    "price": "220.32",
    "old_price": "275.40",
    "discount": "20%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/samsung-galaxy-watch7-green-2024"
  },
  {
    "id": 80,
    "name": "Apple 20W USB-C Adapter White (2025)",
    "category": "Adapter",
    "brand": "Apple",
    "color": "White",
    "price": "100.17",
    "old_price": "125.21",
    "discount": "20%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/apple-20w-usbc-adapter-white-2025"
  },
  {
    "id": 81,
    "name": "Xiaomi Redmi Buds 6 Black",
    "category": "Qulaqlıq",
    "brand": "Xiaomi",
    "color": "Black",
    "price": "58.79",
    "old_price": "71.70",
    "discount": "18%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/xiaomi-redmi-buds-6-black"
  },
  {
    "id": 82,
    "name": "Sony WF-C510 Black",
    "category": "Qulaqlıq",
    "brand": "Sony",
    "color": "Black",
    "price": "30.86",
    "old_price": "35.07",
    "discount": "12%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/sony-wfc510-black"
  },
  {
    "id": 83,
    "name": "Samsung 25W Super Fast Adapter White (EU)",
    "category": "Adapter",
    "brand": "Samsung",
    "color": "White",
    "price": "97.39",
    "old_price": null,
    "discount": null,
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/samsung-25w-super-fast-adapter-white-eu"
  },
  {
    "id": 84,
    "name": "Baseus Wireless Charger 15W Black (EU)",
    "category": "Şarj (Wireless)",
    "brand": "Baseus",
    "color": "Black",
    "price": "258.39",
    "old_price": "293.62",
    "discount": "12%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-wireless-charger-15w-black-eu"
  },
  {
    "id": 85,
    "name": "Joyroom 30W GaN Adapter White (EU)",
    "category": "Adapter",
    "brand": "Joyroom",
    "color": "White",
    "price": "397.02",
    "old_price": null,
    "discount": null,
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/joyroom-30w-gan-adapter-white-eu"
  },
  {
    "id": 86,
    "name": "Samsung Galaxy Watch7 Green (Pro)",
    "category": "Smart Saat",
    "brand": "Samsung",
    "color": "Green",
    "price": "123.77",
    "old_price": "145.61",
    "discount": "15%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/samsung-galaxy-watch7-green-pro"
  },
  {
    "id": 87,
    "name": "Baseus Type-C to Type-C 100W Black (2024)",
    "category": "Kabel",
    "brand": "Baseus",
    "color": "Black",
    "price": "103.14",
    "old_price": "137.52",
    "discount": "25%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-typec-to-typec-100w-black-2024"
  },
  {
    "id": 88,
    "name": "Baseus Wireless Charger 15W White",
    "category": "Şarj (Wireless)",
    "brand": "Baseus",
    "color": "White",
    "price": "306.37",
    "old_price": "325.93",
    "discount": "6%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/baseus-wireless-charger-15w-white"
  },
  {
    "id": 89,
    "name": "Apple Watch SE 2 Starlight (EU)",
    "category": "Smart Saat",
    "brand": "Apple",
    "color": "Starlight",
    "price": "309.03",
    "old_price": "335.90",
    "discount": "8%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/apple-watch-se-2-starlight-eu"
  },
  {
    "id": 90,
    "name": "Apple 20W USB-C Adapter White (Pro)",
    "category": "Adapter",
    "brand": "Apple",
    "color": "White",
    "price": "206.08",
    "old_price": "242.45",
    "discount": "15%",
    "in_stock": true,
    "link": "https://www.superfon.az/az/mehsul/apple-20w-usbc-adapter-white-pro"
  }
]


const icons = [
  "fa-regular fa-credit-card",
  "fa-solid fa-truck-fast",
  "fa-regular fa-circle-left",
];

const texts = [
  "Asan və təhlükəsiz ödəniş",
  "Sürətli çatdırılma",
  "Qaytarma və dəyişmə",
];

const featuresContainer = document.getElementById("features-container");



let featuresHtml = "";
for (let i = 0; i < icons.length; i++) {
  featuresHtml += `
    <a href="#"
       class="flex-1 flex flex-col items-center justify-center text-center gap-3 md:gap-4 px-2 py-6 md:py-10 hover:text-orange-600 transition-colors">
      <i class="${icons[i]} text-2xl md:text-4xl text-orange-400"></i>
      <span class="text-xs md:text-base font-semibold text-slate-800 leading-tight">
        ${texts[i]}
      </span>
    </a>
  `;
}

featuresContainer.innerHTML = featuresHtml;

// marka olan hisse
const brands = [
  "img/joyroom.png",
  "img/fonipng.png",
  "img/pitaka.png",
  "img/ackiliss.png",
  "img/honor.png",
];

function renderBrands(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = "";

  for (let i = 0; i < data.length; i++) {
    html += `
      <div class="flex items-center justify-center p-4">
        <img src="${data[i]}" alt="Marka ${i + 1}" class="max-h-28 md:max-h-28 object-contain">
      </div>
    `;
  }

  container.innerHTML = html;
}

renderBrands(brands, "brands-container");


//superfon hisse
const superfonTVData = [
  { image: "img/tv1.jpg", title: "Euroacs brendinin 2 illik rəsmi zəmanəti!" },
  { image: "img/tv2.jpg", title: "Səsgücləndirici GTS-1922" },
  { image: "img/tv3.jpg", title: "U20 pro və U80 pro LED işıq" },
  { image: "img/tv4.jpg", title: "Powerbank Joyroom JR-PRL2 10000mah 35W" },
  { image: "img/tv5.jpg", title: "Joyroom məhsullar" },
  { image: "img/tv6.jpg", title: "Qulaqlıq Euroacs SM-VIBE" },
];

function renderSuperfonTV(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = "";

  for (let i = 0; i < data.length; i++) {
    html += `
      <div class="swiper-slide h-auto">
        <a href="#" class="relative block rounded-xl overflow-hidden group">
          <img src="${data[i].image}" alt="${data[i].title}"
               class="w-full h-56 md:h-64 object-cover">
          <span class="absolute inset-0 flex items-center justify-center">
            <span class="w-14 h-14 flex items-center justify-center rounded-full bg-white/80 text-slate-900 text-xl group-hover:bg-white group-hover:scale-110 transition-all">
              <i class="fa-solid fa-play"></i>
            </span>
          </span>
        </a>
        <h3 class="mt-4 font-bold text-slate-900">${data[i].title}</h3>
      </div>
    `;
  }

  container.innerHTML = html;
}

renderSuperfonTV(superfonTVData, "superfon-tv-container");

new Swiper('.superfonTVSwiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 24 },
  },
});

//Footer datalari
const companyLinks = ["Kampaniyalar", "Haqqımızda", "Mağazalarımız", "Korporativ satış", "Karyera", "Əlaqə"];
const customerLinks = ["Ödəniş şərtləri", "Məxfilik siyasəti", "Çatdırılma", "Geri qaytarılma və dəyişdirilmə", "Tez-tez verilən suallar", "Bloq"];
const socialIcons = ["fa-facebook-f", "fa-instagram", "fa-linkedin-in", "fa-youtube", "fa-tiktok"];
const footerTags = ["Adapterlər", "Brendlər", "Çantalar", "Holderlər", "Keyslər", "Kiçik məişət texnikaları", "Qulaqlıqlar", "Mikrofonlar", "Oyun üçün", "Powerbanklar", "Səsgücləndiricilər", "Siçanlar", "Smart saatlar", "Tripodlar", "USB naqillər", "Yaddaş kartları"];


function renderLinkList(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = "";
  for (let i = 0; i < data.length; i++) {
    html += `<li><a href="#" class="hover:text-orange-600">${data[i]}</a></li>`;
  }
  container.innerHTML = html;
}

function renderSocial(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = "";
  for (let i = 0; i < data.length; i++) {
    html += `<a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-white hover:bg-blue-800 transition-colors"><i class="fa-brands ${data[i]}"></i></a>`;
  }
  container.innerHTML = html;
}

function renderFooterTags(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = "";
  for (let i = 0; i < data.length; i++) {
    html += `<a href="#" class="hover:text-orange-600">${data[i]}</a>`;
    if (i < data.length - 1) {
      html += `<span class="text-gray-300">|</span>`;
    }
  }
  container.innerHTML = html;
}

renderLinkList(companyLinks, "footer-company");
renderLinkList(customerLinks, "footer-customer");
renderSocial(socialIcons, "footer-social");
renderFooterTags(footerTags, "footer-tags");

const NEW_PLACEHOLDER = "img/case.png";
const BEST_PLACEHOLDER = "img/qulaqliq.jpg";


function renderProducts(data, containerId, placeholder) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = "";

  for (let i = 0; i < data.length; i++) {
    const imgSrc = data[i].image ? data[i].image : placeholder;

    html += `
      <div class="swiper-slide h-auto">
        <div class="relative flex flex-col h-full border border-gray-200 rounded-xl p-3 md:p-4 hover:shadow-lg transition-shadow">

          <span class="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">Yeni</span>

          <div class="absolute top-3 right-3 flex flex-col gap-2 z-10">
            <button class="wishlist-btn w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:text-red-500 hover:border-red-300 transition-colors" data-id="${data[i].id}" aria-label="Bəyən">
              <i class="fa-regular fa-heart pointer-events-none"></i>
            </button>
            <button class="compare-btn w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:text-orange-500 hover:border-orange-300 transition-colors" data-id="${data[i].id}" aria-label="Müqayisə">
              <i class="fa-solid fa-scale-balanced pointer-events-none"></i>
            </button>
          </div>

          <a href="${data[i].link}" class="flex items-center justify-center h-40 md:h-52 mb-4">
            <img src="${imgSrc}" alt="${data[i].name}" class="max-h-full object-contain">
          </a>

          <a href="${data[i].link}" class="text-sm md:text-base text-slate-800 mb-4 line-clamp-2 hover:text-orange-600 transition-colors min-h-[2.5rem]">
            ${data[i].name}
          </a>

          <div class="mt-auto flex items-center justify-between gap-2">
            <div>
              ${data[i].old_price
                ? `<span class="block text-xs text-gray-400 line-through">${data[i].old_price} ₼</span>`
                : ""}
              <span class="text-lg md:text-xl font-bold text-slate-900">${data[i].price} ₼</span>
            </div>
            <button class="add-to-cart-btn shrink-0 w-11 h-11 flex items-center justify-center bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              data-id="${data[i].id}" aria-label="Səbətə at">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>

        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}


renderProducts(products.slice(0, 10), "new-products", NEW_PLACEHOLDER);
renderProducts(products.slice(10), "best-sellers", BEST_PLACEHOLDER);


const productSwiperConfig = {
  slidesPerView: 2,
  spaceBetween: 12,
  breakpoints: {
    768: { slidesPerView: 3, spaceBetween: 16 },
    1024: { slidesPerView: 4, spaceBetween: 20 },
  },
};

new Swiper('.newProductsSwiper', productSwiperConfig);
new Swiper('.bestSellersSwiper', productSwiperConfig);


//Search 
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  if (value === "") {
    searchResults.classList.add("hidden");
    return;
  }

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(value)
  );

  if (filtered.length === 0) {
    searchResults.innerHTML = `<p class="p-4 text-gray-500 text-sm">Məhsul tapılmadı</p>`;
    searchResults.classList.remove("hidden");
    return;
  }

  let html = "";
  for (let i = 0; i < filtered.length; i++) {
    html += `
      <a href="${filtered[i].link}" class="flex items-center gap-3 p-3 hover:bg-gray-50 border-b border-gray-100 last:border-0">
        <span class="flex-1 text-sm text-slate-800">${filtered[i].name}</span>
        <span class="text-sm font-bold text-slate-900">${filtered[i].price} ₼</span>
      </a>
    `;
  }
  searchResults.innerHTML = html;
  searchResults.classList.remove("hidden");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("#search-input") && !e.target.closest("#search-results")) {
    searchResults.classList.add("hidden");
  }
});

//Kateqoriyalar
const categories = [
  {
    icon: "fa-gift",
    name: "Hədiyyə kartları",
    sub: [],
  },
  {
    icon: "fa-headphones",
    name: "Telefon Aksesuarları",
    sub: ["Qulaqlıqlar", "Powerbanklar", "Adapterlər", "USB naqilləri", "Qoruyucu örtüklər", "Ekran qoruyucuları", "Cooler", "Holder", "Tripodlar", "LED işıqlar", "Yaddaş Kartları", "Ötürücülər"],
  },
  {
    icon: "fa-clock",
    name: "Saatlar",
    sub: ["Uşaq üçün smart saatlar", "Klassik saatlar", "Smart saatlar", "Saat kəmərləri"],
  },
  {
    icon: "fa-music",
    name: "Audio və TV aksesuarlar",
    sub: ["Səsgücləndiricilər", "Radiolar", "Mikrofonlar", "Proyektorlar", "Müşahidə Kameraları"],
  },
  {
    icon: "fa-car",
    name: "Avtomobil aksesuarları",
    sub: ["Avtomobil Adapterləri", "Avtomobil holderləri", "Avtomobil tozsoranları", "FM Modulyatorlar", "Video qeydiyyat cihazları"],
  },
  {
    icon: "fa-blender",
    name: "Kiçik məişət texnikası",
    sub: ["Air fryer", "Elektrikli soba", "Elektrikli plitə", "Elektrikli manqal", "Elektrikli tava", "İzqara", "Toster", "Popkorn bişirici", "Buxarlı bişirici", "Meyvə və tərəvəz qurudan", "Blender", "Mikser", "Doğrayıcı", "Ətçəkən", "Qəhvəüyüdənlər", "Qəhvəbişirən", "Elektrikli çaydan", "Termopot", "Şirəçəkən", "Tozsoran", "Ütü", "Buxarlandırıcı", "İsidicilər", "Sərinkeş", "Fen", "Saç ütüsü", "Saçqırxan", "Üzqırxan və trimmer", "Epilyator", "Elektrik diş fırçası"],
  },
  {
    icon: "fa-table-cells",
    name: "Digər",
    sub: ["Klaviaturalar", "Çantalar", "Mouse", "Oyun üçün", "Qarışıq məhsullar", "Printer", "Kamera"],
  },
];


const categoryMenu = document.getElementById("category-menu");

function renderCategories(data) {
  let html = "";

  for (let i = 0; i < data.length; i++) {
    const hasSub = data[i].sub.length > 0;

    html += `
      <li class="group">
        <a href="#" class="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 hover:text-orange-600 transition-colors">
          <i class="fa-solid ${data[i].icon} w-5 text-center"></i>
          <span class="flex-1">${data[i].name}</span>
          ${hasSub ? `<i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>` : ""}
        </a>
        ${hasSub ? renderSubMenu(data[i]) : ""}
      </li>
    `;
  }

  html += `
    <li>
      <a href="#" class="flex items-center justify-center px-4 py-3.5 font-semibold hover:bg-gray-50 hover:text-orange-600 transition-colors">
        Brendlər
      </a>
    </li>
  `;

  categoryMenu.innerHTML = html;
}


function renderSubMenu(category) {
  let subHtml = "";
  for (let j = 0; j < category.sub.length; j++) {
    subHtml += `<a href="#" class="block py-2 text-gray-600 hover:text-orange-600 transition-colors">${category.sub[j]}</a>`;
  }

  return `
    <div class="absolute left-full top-0 ml-2 w-[500px] bg-white border border-gray-200 rounded-xl shadow-xl p-6 hidden group-hover:block z-50">
      <h4 class="text-orange-600 font-semibold border-b border-gray-100 pb-3 mb-4">${category.name}</h4>
      <div class="grid grid-cols-2 gap-x-8 gap-y-1">
        ${subHtml}
      </div>
    </div>
  `;
}


renderCategories(categories);


function getWishlist() {
  const saved = localStorage.getItem("wishlist");
  return saved ? JSON.parse(saved) : [];
}

function saveWishlist(list) {
  localStorage.setItem("wishlist", JSON.stringify(list));
}

function updateWishlistCount() {
  const count = getWishlist().length;
  const badge = document.getElementById("wishlist-count");
  if (!badge) return;
  badge.textContent = count;
  if (count > 0) {
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }
}

function updateHeartIcons() {
  const wishlist = getWishlist();
  const buttons = document.querySelectorAll(".wishlist-btn");
  buttons.forEach((btn) => {
    const id = Number(btn.dataset.id);
    const icon = btn.querySelector("i");
    if (wishlist.includes(id)) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
      btn.classList.add("text-red-500", "border-red-300");
    } else {
      icon.classList.add("fa-regular");
      icon.classList.remove("fa-solid");
      btn.classList.remove("text-red-500", "border-red-300");
    }
  });
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".wishlist-btn");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  let wishlist = getWishlist();
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter((item) => item !== id);
  } else {
    wishlist.push(id);
  }
  saveWishlist(wishlist);
  updateWishlistCount();
  updateHeartIcons();
});

updateWishlistCount();
updateHeartIcons();



function getCart() {
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartHeader() {
  const cart = getCart();

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = products.find((p) => p.id === cart[i].id);
    if (product) {
      totalPrice += Number(product.price) * cart[i].qty;
    }
  }

  const countBadge = document.getElementById("cart-count");
  if (countBadge) {
    countBadge.textContent = totalCount;
    if (totalCount > 0) {
      countBadge.classList.remove("hidden");
    } else {
      countBadge.classList.add("hidden");
    }
  }

  const totalEl = document.getElementById("cart-total");
  if (totalEl) {
    totalEl.textContent = totalPrice.toFixed(2);
  }
}

function addToCart(id) {
  let cart = getCart();
  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: id, qty: 1 });
  }

  saveCart(cart);
  updateCartHeader();
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-to-cart-btn");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  addToCart(id);
});

updateCartHeader();

//MUQAYISE
function getCompare() {
  const saved = localStorage.getItem("compare");
  return saved ? JSON.parse(saved) : [];
}

function saveCompare(list) {
  localStorage.setItem("compare", JSON.stringify(list));
}

function updateCompareCount() {
  const count = getCompare().length;
  const badge = document.getElementById("compare-count");
  if (!badge) return;
  badge.textContent = count;
  if (count > 0) {
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }
}

function updateCompareIcons() {
  const compare = getCompare();
  const buttons = document.querySelectorAll(".compare-btn");
  buttons.forEach((btn) => {
    const id = Number(btn.dataset.id);
    if (compare.includes(id)) {
      btn.classList.add("text-orange-500", "border-orange-300");
    } else {
      btn.classList.remove("text-orange-500", "border-orange-300");
    }
  });
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".compare-btn");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  let compare = getCompare();
  if (compare.includes(id)) {
    compare = compare.filter((item) => item !== id);
  } else {
    compare.push(id);
  }
  saveCompare(compare);
  updateCompareCount();
  updateCompareIcons();
});

updateCompareCount();
updateCompareIcons();


const kataloqBtn = document.getElementById("kataloq-btn");
const categoryAside = document.querySelector("#category-menu").closest("aside");

if (kataloqBtn && categoryAside) {
  categoryAside.classList.add("hidden");
  let hideTimer;
  function showMenu() {
    clearTimeout(hideTimer);
    categoryAside.classList.remove("hidden");
  }
  function hideMenuDelayed() {
    hideTimer = setTimeout(() => {
      categoryAside.classList.add("hidden");
    }, 250);
  }
  kataloqBtn.addEventListener("mouseenter", showMenu);
  kataloqBtn.addEventListener("mouseleave", hideMenuDelayed);
  categoryAside.addEventListener("mouseenter", showMenu);
  categoryAside.addEventListener("mouseleave", hideMenuDelayed);
}


const kataloqPanel = document.getElementById("kataloq-panel");

if (kataloqPanel) {
  let html = "";
  for (let i = 0; i < categories.length; i++) {
    const hasSub = categories[i].sub.length > 0;
    html += `
      <a href="#" class="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 hover:text-orange-600 transition-colors">
        <i class="fa-solid ${categories[i].icon} w-5 text-center text-gray-600"></i>
        <span class="flex-1">${categories[i].name}</span>
        ${hasSub ? `<i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>` : ""}
      </a>
    `;
  }
  html += `
    <a href="#" class="flex items-center justify-center px-4 py-3.5 font-semibold hover:bg-gray-50 hover:text-orange-600 transition-colors">
      Brendlər
    </a>
  `;
  kataloqPanel.innerHTML = html;

}


let timerEnd = localStorage.getItem("timerEnd");
if (!timerEnd) {
  timerEnd = Date.now() + 5 * 24 * 60 * 60 * 1000;
  localStorage.setItem("timerEnd", timerEnd);
}
timerEnd = Number(timerEnd);

function updateTimer() {
  const now = Date.now();
  let diff = timerEnd - now;
  if (diff <= 0) diff = 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  const daysEl = document.getElementById("timer-days");
  const hoursEl = document.getElementById("timer-hours");
  const minutesEl = document.getElementById("timer-minutes");

  if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
  if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
  if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
}

updateTimer();
setInterval(updateTimer, 1000);



const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileOverlay = document.getElementById("mobile-overlay");
const mobileClose = document.getElementById("mobile-close");
const mobileCategoryList = document.getElementById("mobile-category-list");
const mobileExtraLinks = document.getElementById("mobile-extra-links");
const mobileSubmenu = document.getElementById("mobile-submenu");
const mobileBack = document.getElementById("mobile-back");
const mobileSubmenuTitle = document.getElementById("mobile-submenu-title");
const mobileSubmenuList = document.getElementById("mobile-submenu-list");

if (mobileCategoryList) {
  let html = "";
  for (let i = 0; i < categories.length; i++) {
    const hasSub = categories[i].sub.length > 0;
    html += `
      <button class="mobile-cat-item flex items-center gap-3 w-full px-4 py-4 border-b border-gray-100 text-left hover:bg-gray-50" data-index="${i}">
        <i class="fa-solid ${categories[i].icon} w-5 text-center text-gray-600"></i>
        <span class="flex-1">${categories[i].name}</span>
        ${hasSub ? `<i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>` : ""}
      </button>
    `;
  }
  mobileCategoryList.innerHTML = html;
}

if (mobileExtraLinks) {
  const extra = ["Kampaniyalar", "Haqqımızda", "Mağazalarımız", "Karyera", "Əlaqə"];
  let html = "";
  for (let i = 0; i < extra.length; i++) {
    html += `<a href="#" class="block px-4 py-3 hover:bg-gray-50">${extra[i]}</a>`;
  }
  mobileExtraLinks.innerHTML = html;
}

function openMobileMenu() {
  mobileMenu.classList.remove("hidden");
  mobileOverlay.classList.remove("hidden");
}
function closeMobileMenu() {
  mobileMenu.classList.add("hidden");
  mobileSubmenu.classList.add("hidden");
  mobileOverlay.classList.add("hidden");
}

if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", openMobileMenu);
if (mobileClose) mobileClose.addEventListener("click", closeMobileMenu);
if (mobileOverlay) mobileOverlay.addEventListener("click", closeMobileMenu);

if (mobileCategoryList) {
  mobileCategoryList.addEventListener("click", (e) => {
    const item = e.target.closest(".mobile-cat-item");
    if (!item) return;
    const index = Number(item.dataset.index);
    const cat = categories[index];

    if (cat.sub.length === 0) return;

    mobileSubmenuTitle.textContent = cat.name;
    let html = `<a href="#" class="block px-4 py-4 border-b border-gray-100 hover:bg-gray-50 font-medium">Bütün məhsullar</a>`;
    for (let j = 0; j < cat.sub.length; j++) {
      html += `<a href="#" class="block px-4 py-4 border-b border-gray-100 hover:bg-gray-50">${cat.sub[j]}</a>`;
    }
    mobileSubmenuList.innerHTML = html;

    mobileSubmenu.classList.remove("hidden");
  });
}

if (mobileBack) {
  mobileBack.addEventListener("click", () => {
    mobileSubmenu.classList.add("hidden");
  });
}

//MOBILE ALT BAR
function updateMobileBarCounts() {
  const wCount = getWishlist().length;
  const cCount = getCompare().length;

  const mWish = document.getElementById("mobile-wishlist-count");
  const mComp = document.getElementById("mobile-compare-count");

  if (mWish) {
    mWish.textContent = wCount;
    mWish.classList.toggle("hidden", wCount === 0);
  }
  if (mComp) {
    mComp.textContent = cCount;
    mComp.classList.toggle("hidden", cCount === 0);
  }
}
updateMobileBarCounts();

document.addEventListener("click", (e) => {
  if (e.target.closest(".wishlist-btn") || e.target.closest(".compare-btn")) {
    setTimeout(updateMobileBarCounts, 0);
  }
});



const chatBtn = document.getElementById("chat-btn");
const chatPanel = document.getElementById("chat-panel");
const chatClose = document.getElementById("chat-close");

if (chatBtn && chatPanel) {
  chatBtn.addEventListener("click", () => {
    chatPanel.classList.toggle("hidden");
  });
  if (chatClose) {
    chatClose.addEventListener("click", () => {
      chatPanel.classList.add("hidden");
    });
  }
}