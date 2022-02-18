const countryData: {
	[key: string]: {
		name: string,
		longName?: string,
		altNames?: string,
		sovereignty?: "UN" | "United Kingdom" | "Netherlands" | "United States" | "Antarctic Treaty" | "Finland" | "France" | "Norway" | "Australia" | "Denmark" | "British Crown" | "China" | "disputed" | "New Zealand" | "UN observer",
		region?: "EU" | "AS" | "NA" | "SA" | "AF" | "AN" | "OC",
		population: number,
		provinces?: { [key: string]: { name: string, capital: string, population: number } }
	}
} = {
	"World": {
		"name": "Earth",
		"population": 7658209137
	},
	"AD": {
		"name": "Andorra",
		"longName": "The Principality of Andorra",
		"sovereignty": "UN",
		"region": "EU",
		"population": 77543
	},
	"AE": {
		"name": "United Arab Emirates",
		"longName": "The United Arab Emirates",
		"sovereignty": "UN",
		"region": "AS",
		"population": 9890400
	},
	"AF": {
		"name": "Afghanistan",
		"longName": "The Islamic Republic of Afghanistan",
		"sovereignty": "UN",
		"region": "AS",
		"population": 32225560
	},
	"AG": {
		"name": "Antigua and Barbuda",
		"longName": "Antigua and Barbuda",
		"sovereignty": "UN",
		"region": "NA",
		"population": 96453
	},
	"AI": {
		"name": "Anguilla",
		"longName": "Anguilla",
		"sovereignty": "United Kingdom",
		"region": "NA",
		"population": 14869
	},
	"AL": {
		"name": "Albania",
		"longName": "The Republic of Albania",
		"sovereignty": "UN",
		"region": "EU",
		"population": 2862427
	},
	"AM": {
		"name": "Armenia",
		"longName": "The Republic of Armenia",
		"sovereignty": "UN",
		"region": "AS",
		"population": 2957500
	},
	"AO": {
		"name": "Angola",
		"longName": "The Republic of Angola",
		"sovereignty": "UN",
		"region": "AF",
		"population": 31127674
	},
	"AQ": {
		"name": "Antarctica",
		"longName": "All land and ice shelves south of the 60th parallel south",
		"sovereignty": "Antarctic Treaty",
		"region": "AN",
		"population": 0
	},
	"AR": {
		"name": "Argentina",
		"longName": "The Argentine Republic",
		"sovereignty": "UN",
		"region": "SA",
		"population": 44938712
	},
	"AS": {
		"name": "American Samoa",
		"longName": "The Territory of American Samoa",
		"sovereignty": "United States",
		"region": "OC",
		"population": 55191
	},
	"AT": {
		"name": "Austria",
		"longName": "The Republic of Austria",
		"sovereignty": "UN",
		"region": "EU",
		"population": 8902600
	},
	"AU": {
		"name": "Australia",
		"longName": "The Commonwealth of Australia",
		"sovereignty": "UN",
		"region": "OC",
		"population": 25646823,
		"provinces": {
			"AU-ACT": { "name": "Australian Capital Territory", "capital": "Canberra", "population": 426709 },
			"AU-NSW": { "name": "New South Wales", "capital": "Sydney", "population": 8089526 },
			"AU-NT": { "name": "Northern Territory", "capital": "Darwin", "population": 245869 },
			"AU-QLD": { "name": "Queensland", "capital": "Brisbane", "population": 5095100 },
			"AU-SA": { "name": "South Australia", "capital": "Adelaide", "population": 1751693 },
			"AU-TAS": { "name": "Tasmania", "capital": "Hobart", "population": 534281 },
			"AU-VIC": { "name": "Victoria", "capital": "Melbourne", "population": 6594804 },
			"AU-WA": { "name": "Western Australia", "capital": "Perth", "population": 2621680 }
		}
	},
	"AW": {
		"name": "Aruba",
		"longName": "Aruba",
		"sovereignty": "Netherlands",
		"region": "SA",
		"population": 112309
	},
	"AX": {
		"name": "Åland Islands",
		"longName": "Åland",
		"sovereignty": "Finland",
		"region": "EU",
		"population": 29789
	},
	"AZ": {
		"name": "Azerbaijan",
		"longName": "The Republic of Azerbaijan",
		"sovereignty": "UN",
		"region": "AS",
		"population": 10067108
	},
	"BA": {
		"name": "Bosnia and Herzegovina",
		"longName": "Bosnia and Herzegovina",
		"sovereignty": "UN",
		"region": "EU",
		"population": 3301000
	},
	"BB": {
		"name": "Barbados",
		"longName": "Barbados",
		"sovereignty": "UN",
		"region": "SA",
		"population": 287025
	},
	"BD": {
		"name": "Bangladesh",
		"longName": "The People's Republic of Bangladesh",
		"sovereignty": "UN",
		"region": "AS",
		"population": 168270652
	},
	"BE": {
		"name": "Belgium",
		"longName": "The Kingdom of Belgium",
		"sovereignty": "UN",
		"region": "EU",
		"population": 11524454
	},
	"BF": {
		"name": "Burkina Faso",
		"longName": "Burkina Faso",
		"sovereignty": "UN",
		"region": "AF",
		"population": 20870060
	},
	"BG": {
		"name": "Bulgaria",
		"longName": "The Republic of Bulgaria",
		"sovereignty": "UN",
		"region": "EU",
		"population": 7000039
	},
	"BH": {
		"name": "Bahrain",
		"longName": "The Kingdom of Bahrain",
		"sovereignty": "UN",
		"region": "AS",
		"population": 1569446
	},
	"BI": {
		"name": "Burundi",
		"longName": "The Republic of Burundi",
		"sovereignty": "UN",
		"region": "AF",
		"population": 10953317
	},
	"BJ": {
		"name": "Benin",
		"longName": "The Republic of Benin",
		"sovereignty": "UN",
		"region": "AF",
		"population": 11733059
	},
	"BL": {
		"name": "Saint Barthelemy",
		"longName": "The Collectivity of Saint-Barthélemy",
		"sovereignty": "France",
		"region": "NA",
		"population": 9793
	},
	"BM": {
		"name": "Bermuda",
		"longName": "Bermuda",
		"sovereignty": "United Kingdom",
		"region": "NA",
		"population": 64027
	},
	"BN": {
		"name": "Brunei",
		"longName": "The Nation of Brunei",
		"sovereignty": "UN",
		"region": "AS",
		"population": 442400
	},
	"BO": {
		"name": "Bolivia",
		"longName": "The Plurinational State of Bolivia",
		"sovereignty": "UN",
		"region": "SA",
		"population": 11469896
	},
	"BQ": {
		"name": "Bonaire, Sint Eustatius and Saba",
		"longName": "Bonaire, Sint Eustatius and Saba",
		"sovereignty": "Netherlands",
		"region": "SA",
		"population": 25157
	},
	"BR": {
		"name": "Brazil",
		"longName": "The Federative Republic of Brazil",
		"sovereignty": "UN",
		"region": "SA",
		"population": 211257279
	},
	"BS": {
		"name": "Bahamas",
		"longName": "The Commonwealth of The Bahamas",
		"sovereignty": "UN",
		"region": "NA",
		"population": 385340
	},
	"BT": {
		"name": "Bhutan",
		"longName": "The Kingdom of Bhutan",
		"sovereignty": "UN",
		"region": "AS",
		"population": 741672
	},
	"BV": {
		"name": "Bouvet Island",
		"longName": "Bouvet Island",
		"sovereignty": "Norway",
		"region": "AN",
		"population": 0
	},
	"BW": {
		"name": "Botswana",
		"longName": "The Republic of Botswana",
		"sovereignty": "UN",
		"region": "AF",
		"population": 2338851
	},
	"BY": {
		"name": "Belarus",
		"longName": "The Republic of Belarus",
		"sovereignty": "UN",
		"region": "EU",
		"population": 9413446
	},
	"BZ": {
		"name": "Belize",
		"longName": "Belize",
		"sovereignty": "UN",
		"region": "NA",
		"population": 408487
	},
	"CA": {
		"name": "Canada",
		"longName": "Canada",
		"sovereignty": "UN",
		"region": "NA",
		"population": 37958039,
		"provinces": {
			"CA-AB": { "name": "Alberta", "capital": "Edmonton", "population": 4413146 },
			"CA-BC": { "name": "British Columbia", "capital": "Victoria", "population": 5110917 },
			"CA-MB": { "name": "Manitoba", "capital": "Winnipeg", "population": 1377517 },
			"CA-NB": { "name": "New Brunswick", "capital": "Fredericton", "population": 779993 },
			"CA-NL": { "name": "Newfoundland and Labrador", "capital": "St. John's", "population": 521365 },
			"CA-NT": { "name": "Northwest Territories", "capital": "Yellowknife", "population": 44904 },
			"CA-NU": { "name": "Nunavut", "capital": "Iqaluit", "population": 39097 },
			"CA-NS": { "name": "Nova Scotia", "capital": "Halifax", "population": 977457 },
			"CA-ON": { "name": "Ontario", "capital": "Toronto", "population": 14711827 },
			"CA-PE": { "name": "Prince Edward Island", "capital": "Charlottetown", "population": 158158 },
			"CA-QC": { "name": "Quebec", "capital": "Quebec City", "population": 8537674 },
			"CA-SK": { "name": "Saskatchewan", "capital": "Regina", "population": 1181666 },
			"CA-YT": { "name": "Yukon", "capital": "Whitehorse", "population": 41078 }
		}
	},
	"CC": {
		"name": "Cocos (Keeling) Islands",
		"longName": "The Territory of Cocos (Keeling) Islands",
		"sovereignty": "Australia",
		"region": "AS",
		"population": 544
	},
	"CD": {
		"name": "Congo (Dem. Rep.)",
		"longName": "The Democratic Republic of the Congo",
		"altNames": "Democratic Republic of the Congo",
		"sovereignty": "UN",
		"region": "AF",
		"population": 89561404
	},
	"CF": {
		"name": "Central African Republic",
		"longName": "The Central African Republic",
		"sovereignty": "UN",
		"region": "AF",
		"population": 5496011
	},
	"CG": {
		"name": "Congo",
		"longName": "The Republic of the Congo",
		"altNames": "Republic of the Congo",
		"sovereignty": "UN",
		"region": "AF",
		"population": 5518092
	},
	"CH": {
		"name": "Switzerland",
		"longName": "The Swiss Confederation",
		"sovereignty": "UN",
		"region": "EU",
		"population": 8586550
	},
	"CI": {
		"name": "Côte d'Ivoire",
		"longName": "The Republic of Côte d'Ivoire",
		"altNames": "Ivory Coast",
		"sovereignty": "UN",
		"region": "AF",
		"population": 25823071
	},
	"CK": {
		"name": "Cook Islands",
		"longName": "The Cook Islands",
		"sovereignty": "New Zealand",
		"region": "OC",
		"population": 17518
	},
	"CL": {
		"name": "Chile",
		"longName": "The Republic of Chile",
		"sovereignty": "UN",
		"region": "SA",
		"population": 19107216
	},
	"CM": {
		"name": "Cameroon",
		"longName": "The Republic of Cameroon",
		"sovereignty": "UN",
		"region": "AF",
		"population": 26545864
	},
	"CN": {
		"name": "China",
		"longName": "The People's Republic of China",
		"sovereignty": "UN",
		"region": "AS",
		"population": 1401768800,
		"provinces": {
			"CN-AH": { "name": "Anhui", "capital": "Hefei", "population": 59500510 },
			"CN-BJ": { "name": "Beijing", "capital": "Beijing", "population": 19612368 },
			"CN-CQ": { "name": "Chongqing", "capital": "Chongqing", "population": 28846170 },
			"CN-FJ": { "name": "Fujian", "capital": "Fuzhou", "population": 36894216 },
			"CN-GD": { "name": "Guangdong", "capital": "Guangzhou", "population": 104303132 },
			"CN-GS": { "name": "Gansu", "capital": "Lanzhou", "population": 25575254 },
			"CN-GX": { "name": "Guangxi", "capital": "Nanning", "population": 46026629 },
			"CN-GZ": { "name": "Guizhou", "capital": "Guiyang", "population": 34746468 },
			"CN-HA": { "name": "Henan", "capital": "Zhengzhou", "population": 94023567 },
			"CN-HB": { "name": "Hubei", "capital": "Wuhan", "population": 57237740 },
			"CN-HE": { "name": "Hebei", "capital": "Shijiazhuang", "population": 71854202 },
			"CN-HI": { "name": "Hainan", "capital": "Haikou", "population": 9171300 },
			"CN-HK": { "name": "Hong Kong", "capital": "Hong Kong", "population": 7061200 },
			"CN-HL": { "name": "Heilongjiang", "capital": "Harbin", "population": 38312224 },
			"CN-HN": { "name": "Hunan", "capital": "Changsha", "population": 65683722 },
			"CN-JL": { "name": "Jilin", "capital": "Changchun", "population": 27462297 },
			"CN-JS": { "name": "Jiangsu", "capital": "Nanjing", "population": 78659903 },
			"CN-JX": { "name": "Jiangxi", "capital": "Nanchang", "population": 44567475 },
			"CN-LN": { "name": "Liaoning", "capital": "Shenyang", "population": 43746323 },
			"CN-MO": { "name": "Macau", "capital": "Macau", "population": 552300 },
			"CN-NM": { "name": "Inner Mongolia", "capital": "Hohhot", "population": 24706321 },
			"CN-NX": { "name": "Ningxia", "capital": "Yinchuan", "population": 6301350 },
			"CN-QH": { "name": "Qinghai", "capital": "Xining", "population": 5626722 },
			"CN-SC": { "name": "Sichuan", "capital": "Chengdu", "population": 80418200 },
			"CN-SD": { "name": "Shandong", "capital": "Jinan", "population": 95793065 },
			"CN-SH": { "name": "Shanghai", "capital": "Shanghai", "population": 23019148 },
			"CN-SN": { "name": "Shaanxi", "capital": "Xi'an", "population": 37327378 },
			"CN-SX": { "name": "Shanxi", "capital": "Taiyuan", "population": 35712111 },
			"CN-TJ": { "name": "Tianjin", "capital": "Tianjin", "population": 12938224 },
			"CN-XJ": { "name": "Xinjiang", "capital": "Ürümqi", "population": 21813334 },
			"CN-XZ": { "name": "Tibet", "capital": "Lhasa", "population": 3002166 },
			"CN-YN": { "name": "Yunnan", "capital": "Kunming", "population": 45966239 },
			"CN-ZJ": { "name": "Zhejiang", "capital": "Hangzhou", "population": 54426891 }
		}
	},
	"CO": {
		"name": "Colombia",
		"longName": "The Republic of Colombia",
		"sovereignty": "UN",
		"region": "SA",
		"population": 49395678
	},
	"CR": {
		"name": "Costa Rica",
		"longName": "The Republic of Costa Rica",
		"sovereignty": "UN",
		"region": "NA",
		"population": 5058007
	},
	"CU": {
		"name": "Cuba",
		"longName": "The Republic of Cuba",
		"sovereignty": "UN",
		"region": "NA",
		"population": 11209628
	},
	"CV": {
		"name": "Cabo Verde",
		"longName": "The Republic of Cabo Verde",
		"altNames": "Cape Verde",
		"sovereignty": "UN",
		"region": "AF",
		"population": 550483
	},
	"CW": {
		"name": "Curacao",
		"longName": "The Country of Curaçao",
		"sovereignty": "Netherlands",
		"region": "SA",
		"population": 158665
	},
	"CX": {
		"name": "Christmas Island",
		"longName": "The Territory of Christmas Island",
		"sovereignty": "Australia",
		"region": "AS",
		"population": 1843
	},
	"CY": {
		"name": "Cyprus",
		"longName": "The Republic of Cyprus",
		"sovereignty": "UN",
		"region": "EU",
		"population": 875900
	},
	"CZ": {
		"name": "Czechia",
		"longName": "The Czech Republic",
		"altNames": "Czech Republic",
		"sovereignty": "UN",
		"region": "EU",
		"population": 10681161
	},
	"DE": {
		"name": "Germany",
		"longName": "The Federal Republic of Germany",
		"sovereignty": "UN",
		"region": "EU",
		"population": 83149300
	},
	"DJ": {
		"name": "Djibouti",
		"longName": "The Republic of Djibouti",
		"sovereignty": "UN",
		"region": "AF",
		"population": 1078373
	},
	"DK": {
		"name": "Denmark",
		"longName": "The Kingdom of Denmark",
		"sovereignty": "UN",
		"region": "EU",
		"population": 5822763
	},
	"DM": {
		"name": "Dominica",
		"longName": "The Commonwealth of Dominica",
		"sovereignty": "UN",
		"region": "NA",
		"population": 71808
	},
	"DO": {
		"name": "Dominican Republic",
		"longName": "The Dominican Republic",
		"sovereignty": "UN",
		"region": "NA",
		"population": 10358320
	},
	"DZ": {
		"name": "Algeria",
		"longName": "The People's Democratic Republic of Algeria",
		"sovereignty": "UN",
		"region": "AF",
		"population": 43000000
	},
	"EC": {
		"name": "Ecuador",
		"longName": "The Republic of Ecuador",
		"sovereignty": "UN",
		"region": "SA",
		"population": 17444556
	},
	"EE": {
		"name": "Estonia",
		"longName": "The Republic of Estonia",
		"sovereignty": "UN",
		"region": "EU",
		"population": 1328360
	},
	"EG": {
		"name": "Egypt",
		"longName": "The Arab Republic of Egypt",
		"sovereignty": "UN",
		"region": "AF",
		"population": 100131097
	},
	"EH": {
		"name": "Western Sahara",
		"longName": "The Sahrawi Arab Democratic Republic",
		"altNames": "Sahrawi Arab Democratic Republic",
		"sovereignty": "disputed",
		"region": "AF",
		"population": 582463
	},
	"ER": {
		"name": "Eritrea",
		"longName": "The State of Eritrea",
		"sovereignty": "UN",
		"region": "AF",
		"population": 582463
	},
	"ES": {
		"name": "Spain",
		"longName": "The Kingdom of Spain",
		"sovereignty": "UN",
		"region": "EU",
		"population": 47100396
	},
	"ET": {
		"name": "Ethiopia",
		"longName": "The Federal Democratic Republic of Ethiopia",
		"sovereignty": "UN",
		"region": "AF",
		"population": 98665000
	},
	"FI": {
		"name": "Finland",
		"longName": "The Republic of Finland",
		"sovereignty": "UN",
		"region": "EU",
		"population": 5527573
	},
	"FJ": {
		"name": "Fiji",
		"longName": "The Republic of Fiji",
		"sovereignty": "UN",
		"region": "OC",
		"population": 884887
	},
	"FK": {
		"name": "Falkland Islands",
		"longName": "The Falkland Islands",
		"sovereignty": "United Kingdom",
		"region": "SA",
		"population": 3198
	},
	"FM": {
		"name": "Micronesia",
		"longName": "The Federated States of Micronesia",
		"sovereignty": "UN",
		"region": "OC",
		"population": 112640
	},
	"FO": {
		"name": "Faroe Islands",
		"longName": "The Faroe Islands",
		"sovereignty": "Denmark",
		"region": "EU",
		"population": 52124
	},
	"FR": {
		"name": "France",
		"longName": "The French Republic",
		"sovereignty": "UN",
		"region": "EU",
		"population": 67064000
	},
	"GA": {
		"name": "Gabon",
		"longName": "The Gabonese Republic",
		"sovereignty": "UN",
		"region": "AF",
		"population": 2172579
	},
	"GB": {
		"name": "United Kingdom",
		"longName": "The United Kingdom of Great Britain and Northern Ireland",
		"sovereignty": "UN",
		"region": "EU",
		"population": 66435600
	},
	"GD": {
		"name": "Grenada",
		"longName": "Grenada",
		"sovereignty": "UN",
		"region": "NA",
		"population": 112003
	},
	"GE": {
		"name": "Georgia",
		"longName": "Georgia",
		"sovereignty": "UN",
		"region": "AS",
		"population": 3723464
	},
	"GF": {
		"name": "French Guiana",
		"longName": "Guyane",
		"sovereignty": "France",
		"region": "SA",
		"population": 290691
	},
	"GG": {
		"name": "Guernsey",
		"longName": "The Bailiwick of Guernsey",
		"sovereignty": "British Crown",
		"region": "EU",
		"population": 63026
	},
	"GH": {
		"name": "Ghana",
		"longName": "The Republic of Ghana",
		"sovereignty": "UN",
		"region": "AF",
		"population": 30280811
	},
	"GI": {
		"name": "Gibraltar",
		"longName": "Gibraltar",
		"sovereignty": "United Kingdom",
		"region": "EU",
		"population": 32194
	},
	"GL": {
		"name": "Greenland",
		"longName": "Kalaallit Nunaat",
		"sovereignty": "Denmark",
		"region": "NA",
		"population": 56081
	},
	"GM": {
		"name": "Gambia",
		"longName": "The Republic of The Gambia",
		"sovereignty": "UN",
		"region": "AF",
		"population": 2347706
	},
	"GN": {
		"name": "Guinea",
		"longName": "The Republic of Guinea",
		"sovereignty": "UN",
		"region": "AF",
		"population": 12218357
	},
	"GP": {
		"name": "Guadeloupe",
		"longName": "Guadeloupe",
		"sovereignty": "France",
		"region": "NA",
		"population": 395700
	},
	"GQ": {
		"name": "Equatorial Guinea",
		"longName": "The Republic of Equatorial Guinea",
		"sovereignty": "UN",
		"region": "AF",
		"population": 1358276
	},
	"GR": {
		"name": "Greece",
		"longName": "The Hellenic Republic",
		"sovereignty": "UN",
		"region": "EU",
		"population": 10724599
	},
	"GS": {
		"name": "South Georgia and the South Sandwich Islands",
		"longName": "South Georgia and the South Sandwich Islands",
		"sovereignty": "United Kingdom",
		"region": "AN",
		"population": 30
	},
	"GT": {
		"name": "Guatemala",
		"longName": "The Republic of Guatemala",
		"sovereignty": "UN",
		"region": "NA",
		"population": 16604026
	},
	"GU": {
		"name": "Guam",
		"longName": "The Territory of Guam",
		"sovereignty": "United States",
		"region": "OC",
		"population": 165768
	},
	"GW": {
		"name": "Guinea-Bissau",
		"longName": "The Republic of Guinea-Bissau",
		"sovereignty": "UN",
		"region": "AF",
		"population": 12218357
	},
	"GY": {
		"name": "Guyana",
		"longName": "The Co-operative Republic of Guyana",
		"sovereignty": "UN",
		"region": "SA",
		"population": 782766
	},
	"HK": {
		"name": "Hong Kong",
		"longName": "The Hong Kong Special Administrative Region of China",
		"sovereignty": "China",
		"region": "AS",
		"population": 7500700
	},
	"HM": {
		"name": "Heard Island and McDonald Islands",
		"longName": "The Territory of Heard Island and McDonald Islands",
		"sovereignty": "Australia",
		"region": "AN",
		"population": 0
	},
	"HN": {
		"name": "Honduras",
		"longName": "The Republic of Honduras",
		"sovereignty": "UN",
		"region": "NA",
		"population": 9158345
	},
	"HR": {
		"name": "Croatia",
		"longName": "The Republic of Croatia",
		"sovereignty": "UN",
		"region": "EU",
		"population": 4076246
	},
	"HT": {
		"name": "Haiti",
		"longName": "The Republic of Haiti",
		"sovereignty": "UN",
		"region": "NA",
		"population": 11577779
	},
	"HU": {
		"name": "Hungary",
		"longName": "Hungary",
		"sovereignty": "UN",
		"region": "EU",
		"population": 9772756
	},
	"ID": {
		"name": "Indonesia",
		"longName": "The Republic of Indonesia",
		"sovereignty": "UN",
		"region": "AS",
		"population": 266911900
	},
	"IE": {
		"name": "Ireland",
		"longName": "Ireland",
		"sovereignty": "UN",
		"region": "EU",
		"population": 4921500
	},
	"IL": {
		"name": "Israel",
		"longName": "The State of Israel",
		"sovereignty": "UN",
		"region": "AS",
		"population": 9171900
	},
	"IM": {
		"name": "Isle of Man",
		"longName": "The Isle of Man",
		"sovereignty": "British Crown",
		"region": "EU",
		"population": 83314
	},
	"IN": {
		"name": "India",
		"longName": "The Republic of India",
		"sovereignty": "UN",
		"region": "AS",
		"population": 1359812346
	},
	"IO": {
		"name": "British Indian Ocean Territory",
		"longName": "The British Indian Ocean Territory",
		"sovereignty": "United Kingdom",
		"region": "AS",
		"population": 0
	},
	"IQ": {
		"name": "Iraq",
		"longName": "The Republic of Iraq",
		"sovereignty": "UN",
		"region": "AS",
		"population": 39127900
	},
	"IR": {
		"name": "Iran",
		"longName": "The Islamic Republic of Iran",
		"sovereignty": "UN",
		"region": "AS",
		"population": 83281956
	},
	"IS": {
		"name": "Iceland",
		"longName": "Iceland",
		"sovereignty": "UN",
		"region": "EU",
		"population": 364260
	},
	"IT": {
		"name": "Italy",
		"longName": "The Italian Republic",
		"sovereignty": "UN",
		"region": "EU",
		"population": 60243406
	},
	"JE": {
		"name": "Jersey",
		"longName": "The Bailiwick of Jersey",
		"sovereignty": "British Crown",
		"region": "EU",
		"population": 106800
	},
	"JM": {
		"name": "Jamaica",
		"longName": "Jamaica",
		"sovereignty": "UN",
		"region": "NA",
		"population": 2726667
	},
	"JO": {
		"name": "Jordan",
		"longName": "The Hashemite Kingdom of Jordan",
		"sovereignty": "UN",
		"region": "AS",
		"population": 10636364
	},
	"JP": {
		"name": "Japan",
		"longName": "Japan",
		"sovereignty": "UN",
		"region": "AS",
		"population": 126010000
	},
	"KE": {
		"name": "Kenya",
		"longName": "The Republic of Kenya",
		"sovereignty": "UN",
		"region": "AF",
		"population": 47564296
	},
	"KG": {
		"name": "Kyrgyzstan",
		"longName": "The Kyrgyz Republic",
		"sovereignty": "UN",
		"region": "AS",
		"population": 6523500
	},
	"KH": {
		"name": "Cambodia",
		"longName": "The Kingdom of Cambodia",
		"sovereignty": "UN",
		"region": "AS",
		"population": 15288489
	},
	"KI": {
		"name": "Kiribati",
		"longName": "The Republic of Kiribati",
		"sovereignty": "UN",
		"region": "OC",
		"population": 115847
	},
	"KM": {
		"name": "Comoros",
		"longName": "The Union of the Comoros",
		"sovereignty": "UN",
		"region": "AF",
		"population": 873724
	},
	"KN": {
		"name": "Saint Kitts and Nevis",
		"longName": "Saint Kitts and Nevis",
		"sovereignty": "UN",
		"region": "NA",
		"population": 52823
	},
	"KP": {
		"name": "North Korea",
		"longName": "The Democratic People's Republic of Korea",
		"sovereignty": "UN",
		"region": "AS",
		"population": 25450000
	},
	"KR": {
		"name": "South Korea",
		"longName": "The Republic of Korea",
		"sovereignty": "UN",
		"region": "AS",
		"population": 51780579
	},
	"KW": {
		"name": "Kuwait",
		"longName": "The State of Kuwait",
		"sovereignty": "UN",
		"region": "AS",
		"population": 4420110
	},
	"KY": {
		"name": "Cayman Islands",
		"longName": "The Cayman Islands",
		"sovereignty": "United Kingdom",
		"region": "NA",
		"population": 65813
	},
	"KZ": {
		"name": "Kazakhstan",
		"longName": "The Republic of Kazakhstan",
		"sovereignty": "UN",
		"region": "AS",
		"population": 18663384
	},
	"LA": {
		"name": "Laos",
		"longName": "The Lao People's Democratic Republic",
		"sovereignty": "UN",
		"region": "AS",
		"population": 7123205
	},
	"LB": {
		"name": "Lebanon",
		"longName": "The Lebanese Republic",
		"sovereignty": "UN",
		"region": "AS",
		"population": 6825442
	},
	"LC": {
		"name": "Saint Lucia",
		"longName": "Saint Lucia",
		"sovereignty": "UN",
		"region": "NA",
		"population": 178696
	},
	"LI": {
		"name": "Liechtenstein",
		"longName": "The Principality of Liechtenstein",
		"sovereignty": "UN",
		"region": "EU",
		"population": 38557
	},
	"LK": {
		"name": "Sri Lanka",
		"longName": "The Democratic Socialist Republic of Sri Lanka",
		"sovereignty": "UN",
		"region": "AS",
		"population": 21803000
	},
	"LR": {
		"name": "Liberia",
		"longName": "The Republic of Liberia",
		"sovereignty": "UN",
		"region": "AF",
		"population": 4475353
	},
	"LS": {
		"name": "Lesotho",
		"longName": "The Kingdom of Lesotho",
		"sovereignty": "UN",
		"region": "AF",
		"population": 2007201
	},
	"LT": {
		"name": "Lithuania",
		"longName": "The Republic of Lithuania",
		"sovereignty": "UN",
		"region": "EU",
		"population": 2793350
	},
	"LU": {
		"name": "Luxembourg",
		"longName": "The Grand Duchy of Luxembourg",
		"sovereignty": "UN",
		"region": "EU",
		"population": 613894
	},
	"LV": {
		"name": "Latvia",
		"longName": "The Republic of Latvia",
		"sovereignty": "UN",
		"region": "EU",
		"population": 1906800
	},
	"LY": {
		"name": "Libya",
		"longName": "The State of Libya",
		"sovereignty": "UN",
		"region": "AF",
		"population": 6871287
	},
	"MA": {
		"name": "Morocco",
		"longName": "The Kingdom of Morocco",
		"sovereignty": "UN",
		"region": "AF",
		"population": 35839345
	},
	"MC": {
		"name": "Monaco",
		"longName": "The Principality of Monaco",
		"sovereignty": "UN",
		"region": "EU",
		"population": 38300
	},
	"MD": {
		"name": "Moldova",
		"longName": "The Republic of Moldova",
		"sovereignty": "UN",
		"region": "EU",
		"population": 2681735
	},
	"ME": {
		"name": "Montenegro",
		"longName": "Montenegro",
		"sovereignty": "UN",
		"region": "EU",
		"population": 622359
	},
	"MF": {
		"name": "St Martin",
		"longName": "The Collectivity of Saint-Martin",
		"sovereignty": "France",
		"region": "NA",
		"population": 35107
	},
	"MG": {
		"name": "Madagascar",
		"longName": "The Republic of Madagascar",
		"sovereignty": "UN",
		"region": "AF",
		"population": 25680342
	},
	"MH": {
		"name": "Marshall Islands",
		"longName": "The Republic of the Marshall Islands",
		"sovereignty": "UN",
		"region": "OC",
		"population": 58413
	},
	"MK": {
		"name": "North Macedonia",
		"longName": "Republic of North Macedonia",
		"sovereignty": "UN",
		"region": "EU",
		"population": 2077132
	},
	"ML": {
		"name": "Mali",
		"longName": "The Republic of Mali",
		"sovereignty": "UN",
		"region": "AF",
		"population": 19973000
	},
	"MM": {
		"name": "Myanmar",
		"longName": "The Republic of the Union of Myanmar",
		"sovereignty": "UN",
		"region": "AS",
		"population": 54339766
	},
	"MN": {
		"name": "Mongolia",
		"longName": "The State of Mongolia",
		"sovereignty": "UN",
		"region": "AS",
		"population": 3307640
	},
	"MO": {
		"name": "Macao",
		"longName": "Macao Special Administrative Region of China",
		"sovereignty": "China",
		"region": "AS",
		"population": 667400
	},
	"MP": {
		"name": "Northern Mariana Islands",
		"longName": "The Commonwealth of the Northern Mariana Islands",
		"sovereignty": "United States",
		"region": "AS",
		"population": 53883
	},
	"MQ": {
		"name": "Martinique",
		"longName": "Martinique",
		"sovereignty": "France",
		"region": "NA",
		"population": 376480
	},
	"MR": {
		"name": "Mauritania",
		"longName": "The Islamic Republic of Mauritania",
		"sovereignty": "UN",
		"region": "AF",
		"population": 4077347
	},
	"MS": {
		"name": "Montserrat",
		"longName": "Montserrat",
		"sovereignty": "United Kingdom",
		"region": "NA",
		"population": 4989
	},
	"MT": {
		"name": "Malta",
		"longName": "The Republic of Malta",
		"sovereignty": "UN",
		"region": "EU",
		"population": 493559
	},
	"MU": {
		"name": "Mauritius",
		"longName": "The Republic of Mauritius",
		"sovereignty": "UN",
		"region": "AF",
		"population": 1265985
	},
	"MV": {
		"name": "Maldives",
		"longName": "The Republic of Maldives",
		"sovereignty": "UN",
		"region": "AS",
		"population": 374775
	},
	"MW": {
		"name": "Malawi",
		"longName": "The Republic of Malawi",
		"sovereignty": "UN",
		"region": "AF",
		"population": 17563749
	},
	"MX": {
		"name": "Mexico",
		"longName": "The United Mexican States",
		"sovereignty": "UN",
		"region": "NA",
		"population": 126577691
	},
	"MY": {
		"name": "Malaysia",
		"longName": "Malaysia",
		"sovereignty": "UN",
		"region": "AS",
		"population": 32719760
	},
	"MZ": {
		"name": "Mozambique",
		"longName": "The Republic of Mozambique",
		"sovereignty": "UN",
		"region": "AF",
		"population": 30066648
	},
	"NA": {
		"name": "Namibia",
		"longName": "The Republic of Namibia",
		"sovereignty": "UN",
		"region": "AF",
		"population": 2458936
	},
	"NC": {
		"name": "New Caledonia",
		"longName": "New Caledonia",
		"sovereignty": "France",
		"region": "OC",
		"population": 282200
	},
	"NE": {
		"name": "Niger",
		"longName": "The Republic of the Niger",
		"sovereignty": "UN",
		"region": "AF",
		"population": 22314743
	},
	"NF": {
		"name": "Norfolk Island",
		"longName": "The Territory of Norfolk Island",
		"sovereignty": "Australia",
		"region": "OC",
		"population": 1748
	},
	"NG": {
		"name": "Nigeria",
		"longName": "The Federal Republic of Nigeria",
		"sovereignty": "UN",
		"region": "AF",
		"population": 206139587
	},
	"NI": {
		"name": "Nicaragua",
		"longName": "The Republic of Nicaragua",
		"sovereignty": "UN",
		"region": "NA",
		"population": 6460411
	},
	"NL": {
		"name": "Netherlands",
		"longName": "The Kingdom of the Netherlands",
		"sovereignty": "UN",
		"region": "EU",
		"population": 17444731
	},
	"NO": {
		"name": "Norway",
		"longName": "The Kingdom of Norway",
		"sovereignty": "UN",
		"region": "EU",
		"population": 5367580
	},
	"NP": {
		"name": "Nepal",
		"longName": "The Federal Democratic Republic of Nepal",
		"sovereignty": "UN",
		"region": "AS",
		"population": 29609623
	},
	"NR": {
		"name": "Nauru",
		"longName": "The Republic of Nauru",
		"sovereignty": "UN",
		"region": "OC",
		"population": 11000
	},
	"NU": {
		"name": "Niue",
		"longName": "Niue",
		"sovereignty": "New Zealand",
		"region": "OC",
		"population": 1620
	},
	"NZ": {
		"name": "New Zealand",
		"longName": "New Zealand",
		"sovereignty": "UN",
		"region": "OC",
		"population": 4970447
	},
	"OM": {
		"name": "Oman",
		"longName": "The Sultanate of Oman",
		"sovereignty": "UN",
		"region": "AS",
		"population": 4664790
	},
	"PA": {
		"name": "Panama",
		"longName": "The Republic of Panamá",
		"sovereignty": "UN",
		"region": "NA",
		"population": 4218808
	},
	"PE": {
		"name": "Peru",
		"longName": "The Republic of Perú",
		"sovereignty": "UN",
		"region": "SA",
		"population": 32131400
	},
	"PF": {
		"name": "French Polynesia",
		"longName": "French Polynesia",
		"sovereignty": "France",
		"region": "OC",
		"population": 275918
	},
	"PG": {
		"name": "Papua New Guinea",
		"longName": "The Independent State of Papua New Guinea",
		"sovereignty": "UN",
		"region": "OC",
		"population": 8935000
	},
	"PH": {
		"name": "Philippines",
		"longName": "The Republic of the Philippines",
		"sovereignty": "UN",
		"region": "AS",
		"population": 108407287
	},
	"PK": {
		"name": "Pakistan",
		"longName": "The Islamic Republic of Pakistan",
		"sovereignty": "UN",
		"region": "AS",
		"population": 218950520
	},
	"PL": {
		"name": "Poland",
		"longName": "The Republic of Poland",
		"sovereignty": "UN",
		"region": "EU",
		"population": 38386000
	},
	"PM": {
		"name": "Saint Pierre and Miquelon",
		"longName": "The Overseas Collectivity of Saint-Pierre and Miquelon",
		"sovereignty": "France",
		"region": "NA",
		"population": 6008
	},
	"PN": {
		"name": "Pitcairn Islands",
		"longName": "The Pitcairn, Henderson, Ducie and Oeno Islands",
		"sovereignty": "United Kingdom",
		"region": "OC",
		"population": 50
	},
	"PR": {
		"name": "Puerto Rico",
		"longName": "The Commonwealth of Puerto Rico",
		"sovereignty": "United States",
		"region": "NA",
		"population": 3193694
	},
	"PS": {
		"name": "Palestine",
		"longName": "The State of Palestine",
		"altNames": "State of Palestine",
		"sovereignty": "UN observer",
		"region": "AS",
		"population": 4976684
	},
	"PT": {
		"name": "Portugal",
		"longName": "The Portuguese Republic",
		"sovereignty": "UN",
		"region": "EU",
		"population": 10276617
	},
	"PW": {
		"name": "Palau",
		"longName": "The Republic of Palau",
		"sovereignty": "UN",
		"region": "OC",
		"population": 17907
	},
	"PY": {
		"name": "Paraguay",
		"longName": "The Republic of Paraguay",
		"sovereignty": "UN",
		"region": "SA",
		"population": 7152703
	},
	"QA": {
		"name": "Qatar",
		"longName": "The State of Qatar",
		"sovereignty": "UN",
		"region": "AS",
		"population": 2747282
	},
	"RE": {
		"name": "Reunion",
		"longName": "Réunion",
		"sovereignty": "France",
		"region": "AF",
		"population": 859959
	},
	"RO": {
		"name": "Romania",
		"longName": "Romania",
		"sovereignty": "UN",
		"region": "EU",
		"population": 19405156
	},
	"RS": {
		"name": "Serbia",
		"longName": "The Republic of Serbia",
		"sovereignty": "UN",
		"region": "EU",
		"population": 6963764
	},
	"RU": {
		"name": "Russia",
		"longName": "The Russian Federation",
		"sovereignty": "UN",
		"region": "EU",
		"population": 146745098
	},
	"RW": {
		"name": "Rwanda",
		"longName": "The Republic of Rwanda",
		"sovereignty": "UN",
		"region": "AF",
		"population": 12374397
	},
	"SA": {
		"name": "Saudi Arabia",
		"longName": "The Kingdom of Saudi Arabia",
		"sovereignty": "UN",
		"region": "AS",
		"population": 34218169
	},
	"SB": {
		"name": "Solomon Islands",
		"longName": "The Solomon Islands",
		"sovereignty": "UN",
		"region": "OC",
		"population": 680806
	},
	"SC": {
		"name": "Seychelles",
		"longName": "The Republic of Seychelles",
		"sovereignty": "UN",
		"region": "AF",
		"population": 97625
	},
	"SD": {
		"name": "Sudan",
		"longName": "The Republic of the Sudan",
		"sovereignty": "UN",
		"region": "AF",
		"population": 42345710
	},
	"SE": {
		"name": "Sweden",
		"longName": "The Kingdom of Sweden",
		"sovereignty": "UN",
		"region": "EU",
		"population": 10333456
	},
	"SG": {
		"name": "Singapore",
		"longName": "The Republic of Singapore",
		"sovereignty": "UN",
		"region": "AS",
		"population": 5703600
	},
	"SH": {
		"name": "Saint Helena, Ascension and Tristan da Cunha",
		"longName": "Saint Helena, Ascension and Tristan da Cunha",
		"sovereignty": "United Kingdom",
		"region": "AF",
		"population": 5633
	},
	"SI": {
		"name": "Slovenia",
		"longName": "The Republic of Slovenia",
		"sovereignty": "UN",
		"region": "EU",
		"population": 2094060
	},
	"SJ": {
		"name": "Svalbard and Jan Mayen",
		"longName": "Svalbard and Jan Mayen",
		"sovereignty": "Norway",
		"region": "EU",
		"population": 0
	},
	"SK": {
		"name": "Slovakia",
		"longName": "The Slovak Republic",
		"sovereignty": "UN",
		"region": "EU",
		"population": 5456362
	},
	"SL": {
		"name": "Sierra Leone",
		"longName": "The Republic of Sierra Leone",
		"sovereignty": "UN",
		"region": "AF",
		"population": 7901454
	},
	"SM": {
		"name": "San Marino",
		"longName": "The Republic of San Marino",
		"sovereignty": "UN",
		"region": "EU",
		"population": 33344
	},
	"SN": {
		"name": "Senegal",
		"longName": "The Republic of Senegal",
		"sovereignty": "UN",
		"region": "AF",
		"population": 16209125
	},
	"SO": {
		"name": "Somalia",
		"longName": "The Federal Republic of Somalia",
		"sovereignty": "UN",
		"region": "AF",
		"population": 15893219
	},
	"SR": {
		"name": "Suriname",
		"longName": "The Republic of Suriname",
		"sovereignty": "UN",
		"region": "SA",
		"population": 581372
	},
	"SS": {
		"name": "South Sudan",
		"longName": "The Republic of South Sudan",
		"sovereignty": "UN",
		"region": "AF",
		"population": 12778250
	},
	"ST": {
		"name": "Sao Tome and Principe",
		"longName": "The Democratic Republic of São Tomé and Príncipe",
		"altNames": "São Tomé and Príncipe",
		"sovereignty": "UN",
		"region": "AF",
		"population": 201784
	},
	"SV": {
		"name": "El Salvador",
		"longName": "The Republic of El Salvador",
		"sovereignty": "UN",
		"region": "NA",
		"population": 6486201
	},
	"SX": {
		"name": "Sint Maarten",
		"longName": "Sint Maarten",
		"sovereignty": "Netherlands",
		"region": "NA",
		"population": 41486
	},
	"SY": {
		"name": "Syria",
		"longName": "The Syrian Arab Republic",
		"altNames": "Syrian Arab Republic",
		"sovereignty": "UN",
		"region": "AS",
		"population": 17500657
	},
	"SZ": {
		"name": "Eswatini",
		"longName": "The Kingdom of Eswatini",
		"altNames": "Swaziland",
		"sovereignty": "UN",
		"region": "AF",
		"population": 1093238
	},
	"TC": {
		"name": "Turks and Caicos Islands",
		"longName": "The Turks and Caicos Islands",
		"sovereignty": "United Kingdom",
		"region": "NA",
		"population": 41369
	},
	"TD": {
		"name": "Chad",
		"longName": "The Republic of Chad",
		"sovereignty": "UN",
		"region": "AF",
		"population": 15692969
	},
	"TF": {
		"name": "French Southern Territories",
		"longName": "The French Southern and Antarctic Lands",
		"sovereignty": "France",
		"region": "AF",
		"population": 0
	},
	"TG": {
		"name": "Togo",
		"longName": "The Togolese Republic",
		"sovereignty": "UN",
		"region": "AF",
		"population": 7538000
	},
	"TH": {
		"name": "Thailand",
		"longName": "The Kingdom of Thailand",
		"sovereignty": "UN",
		"region": "AS",
		"population": 66481630
	},
	"TJ": {
		"name": "Tajikistan",
		"longName": "The Republic of Tajikistan",
		"sovereignty": "UN",
		"region": "AS",
		"population": 9127000
	},
	"TK": {
		"name": "Tokelau",
		"longName": "Tokelau",
		"sovereignty": "New Zealand",
		"region": "OC",
		"population": 1499
	},
	"TL": {
		"name": "Timor-Leste (East Timor)",
		"longName": "The Democratic Republic of Timor-Leste",
		"sovereignty": "UN",
		"region": "AS",
		"population": 1387149
	},
	"TM": {
		"name": "Turkmenistan",
		"longName": "Turkmenistan",
		"sovereignty": "UN",
		"region": "AS",
		"population": 6031187
	},
	"TN": {
		"name": "Tunisia",
		"longName": "The Republic of Tunisia",
		"sovereignty": "UN",
		"region": "AF",
		"population": 11722038
	},
	"TO": {
		"name": "Tonga",
		"longName": "The Kingdom of Tonga",
		"sovereignty": "UN",
		"region": "AF",
		"population": 100651
	},
	"TR": {
		"name": "Turkey",
		"longName": "The Republic of Turkey",
		"sovereignty": "UN",
		"region": "AS",
		"population": 83154997
	},
	"TT": {
		"name": "Trinidad and Tobago",
		"longName": "The Republic of Trinidad and Tobago",
		"sovereignty": "UN",
		"region": "NA",
		"population": 1363985
	},
	"TV": {
		"name": "Tuvalu",
		"longName": "Tuvalu",
		"sovereignty": "UN",
		"region": "OC",
		"population": 11192
	},
	"TW": {
		"name": "Taiwan",
		"longName": "The Republic of China",
		"sovereignty": "disputed",
		"region": "AS",
		"population": 23604265
	},
	"TZ": {
		"name": "Tanzania",
		"longName": "The United Republic of Tanzania",
		"sovereignty": "UN",
		"region": "AF",
		"population": 55890747
	},
	"UA": {
		"name": "Ukraine",
		"longName": "Ukraine",
		"sovereignty": "UN",
		"region": "EU",
		"population": 41902416
	},
	"UG": {
		"name": "Uganda",
		"longName": "The Republic of Uganda",
		"sovereignty": "UN",
		"region": "AF",
		"population": 40299300
	},
	"UM": {
		"name": "United States Minor Outlying Islands",
		"longName": "Baker Island, Howland Island, Jarvis Island, Johnston Atoll, Kingman Reef, Midway Atoll, Navassa Island, Palmyra Atoll, and Wake Island",
		"sovereignty": "United States",
		"region": "OC",
		"population": 0
	},
	"US": {
		"name": "United States",
		"longName": "The United States of America",
		"sovereignty": "UN",
		"region": "NA",
		"population": 329453849
	},
	"UY": {
		"name": "Uruguay",
		"longName": "The Oriental Republic of Uruguay",
		"sovereignty": "UN",
		"region": "SA",
		"population": 3518552
	},
	"UZ": {
		"name": "Uzbekistan",
		"longName": "The Republic of Uzbekistan",
		"sovereignty": "UN",
		"region": "AS",
		"population": 34070275
	},
	"VA": {
		"name": "Holy See",
		"longName": "The Holy See",
		"sovereignty": "UN observer",
		"region": "EU",
		"population": 1000
	},
	"VC": {
		"name": "Saint Vincent and the Grenadines",
		"longName": "Saint Vincent and the Grenadines",
		"sovereignty": "UN",
		"region": "NA",
		"population": 110211
	},
	"VE": {
		"name": "Venezuela",
		"longName": "The Bolivarian Republic of Venezuela",
		"sovereignty": "UN",
		"region": "SA",
		"population": 32219521
	},
	"VG": {
		"name": "British Virgin Islands",
		"longName": "The Virgin Islands",
		"sovereignty": "United Kingdom",
		"region": "NA",
		"population": 30030
	},
	"VI": {
		"name": "Virgin Islands (U.S.)",
		"longName": "The Virgin Islands of the United States",
		"sovereignty": "United States",
		"region": "NA",
		"population": 104578
	},
	"VN": {
		"name": "Viet Nam",
		"longName": "The Socialist Republic of Viet Nam",
		"sovereignty": "UN",
		"region": "AS",
		"population": 96208984
	},
	"VU": {
		"name": "Vanuatu",
		"longName": "The Republic of Vanuatu",
		"sovereignty": "UN",
		"region": "OC",
		"population": 304500
	},
	"WF": {
		"name": "Wallis and Futuna",
		"longName": "The Territory of the Wallis and Futuna Islands",
		"sovereignty": "France",
		"region": "OC",
		"population": 11558
	},
	"WS": {
		"name": "Samoa",
		"longName": "The Independent State of Samoa",
		"sovereignty": "UN",
		"region": "OC",
		"population": 195843
	},
	"XK": {
		"name": "Kosovo",
		"longName": "The Republic of Kosovo",
		"sovereignty": "disputed",
		"region": "EU",
		"population": 1810463
	},
	"YE": {
		"name": "Yemen",
		"longName": "The Republic of Yemen",
		"sovereignty": "UN",
		"region": "AS",
		"population": 29825968
	},
	"YT": {
		"name": "Mayotte",
		"longName": "The Department of Mayotte",
		"sovereignty": "France",
		"region": "AF",
		"population": 279471
	},
	"ZA": {
		"name": "South Africa",
		"longName": "The Republic of South Africa",
		"sovereignty": "UN",
		"region": "AF",
		"population": 58775022
	},
	"ZM": {
		"name": "Zambia",
		"longName": "The Republic of Zambia",
		"sovereignty": "UN",
		"region": "AF",
		"population": 17381168
	},
	"ZW": {
		"name": "Zimbabwe",
		"longName": "The Republic of Zimbabwe",
		"sovereignty": "UN",
		"region": "AF",
		"population": 15159624
	}
}

export default countryData