import './App.css';
import Dropdown from './components/dropdown';
import Searchbar from './components/searchbar';
import Content from './components/content';
import axios from "axios";
import { useState, useEffect } from 'react'; 

function App() {
  const [countrylist, setCountryList] = useState([]); 
  const [region,setregion] = useState("")
  const [country,setcountry] = useState("")
  const [countrydata,setcountrydata] = useState({})
  const [searchValue,setsearchValue] = useState("")
  const [searchresults,setsearchresults] = useState([])
  const [content,setcontent] = useState(false)
  const continents = [
    { name: "Europe", id: 0 },
    { name: "Americas", id: 1 },
    { name: "Asia", id: 2 },
    { name: "Africa", id: 3 },
    { name: "Oceania", id: 4 } 
  ];
  const Europe = [
    {
      "id": 0,
      "name": "Austria"
    },
    {
      "id": 1,
      "name": "Guernsey"
    },
    {
      "id": 2,
      "name": "Liechtenstein"
    },
    {
      "id": 3,
      "name": "Spain"
    },
    {
      "id": 4,
      "name": "Åland Islands"
    },
    {
      "id": 5,
      "name": "Russia"
    },
    {
      "id": 6,
      "name": "North Macedonia"
    },
    {
      "id": 7,
      "name": "Netherlands"
    },
    {
      "id": 8,
      "name": "Romania"
    },
    {
      "id": 9,
      "name": "Estonia"
    },
    {
      "id": 10,
      "name": "Vatican City"
    },
    {
      "id": 11,
      "name": "Greece"
    },
    {
      "id": 12,
      "name": "Montenegro"
    },
    {
      "id": 13,
      "name": "Germany"
    },
    {
      "id": 14,
      "name": "Croatia"
    },
    {
      "id": 15,
      "name": "Latvia"
    },
    {
      "id": 16,
      "name": "Svalbard and Jan Mayen"
    },
    {
      "id": 17,
      "name": "Bosnia and Herzegovina"
    },
    {
      "id": 18,
      "name": "Denmark"
    },
    {
      "id": 19,
      "name": "Portugal"
    },
    {
      "id": 20,
      "name": "Gibraltar"
    },
    {
      "id": 21,
      "name": "Kosovo"
    },
    {
      "id": 22,
      "name": "Moldova"
    },
    {
      "id": 23,
      "name": "Finland"
    },
    {
      "id": 24,
      "name": "Czechia"
    },
    {
      "id": 25,
      "name": "Luxembourg"
    },
    {
      "id": 26,
      "name": "Cyprus"
    },
    {
      "id": 27,
      "name": "Albania"
    },
    {
      "id": 28,
      "name": "Switzerland"
    },
    {
      "id": 29,
      "name": "Sweden"
    },
    {
      "id": 30,
      "name": "Norway"
    },
    {
      "id": 31,
      "name": "Hungary"
    },
    {
      "id": 32,
      "name": "Slovenia"
    },
    {
      "id": 33,
      "name": "Italy"
    },
    {
      "id": 34,
      "name": "Ireland"
    },
    {
      "id": 35,
      "name": "Andorra"
    },
    {
      "id": 36,
      "name": "Iceland"
    },
    {
      "id": 37,
      "name": "Faroe Islands"
    },
    {
      "id": 38,
      "name": "France"
    },
    {
      "id": 39,
      "name": "Monaco"
    },
    {
      "id": 40,
      "name": "Bulgaria"
    },
    {
      "id": 41,
      "name": "Lithuania"
    },
    {
      "id": 42,
      "name": "Jersey"
    },
    {
      "id": 43,
      "name": "San Marino"
    },
    {
      "id": 44,
      "name": "United Kingdom"
    },
    {
      "id": 45,
      "name": "Slovakia"
    },
    {
      "id": 46,
      "name": "Belarus"
    },
    {
      "id": 47,
      "name": "Ukraine"
    },
    {
      "id": 48,
      "name": "Belgium"
    },
    {
      "id": 49,
      "name": "Isle of Man"
    },
    {
      "id": 50,
      "name": "Malta"
    },
    {
      "id": 51,
      "name": "Poland"
    },
    {
      "id": 52,
      "name": "Serbia"
    }
  ]
  const Americas = [
    {
      "id": 0,
      "name": "Guyana"
    },
    {
      "id": 1,
      "name": "Saint Martin"
    },
    {
      "id": 2,
      "name": "Guatemala"
    },
    {
      "id": 3,
      "name": "Venezuela"
    },
    {
      "id": 4,
      "name": "Martinique"
    },
    {
      "id": 5,
      "name": "Costa Rica"
    },
    {
      "id": 6,
      "name": "Haiti"
    },
    {
      "id": 7,
      "name": "Aruba"
    },
    {
      "id": 8,
      "name": "Bahamas"
    },
    {
      "id": 9,
      "name": "Cayman Islands"
    },
    {
      "id": 10,
      "name": "Chile"
    },
    {
      "id": 11,
      "name": "Caribbean Netherlands"
    },
    {
      "id": 12,
      "name": "Canada"
    },
    {
      "id": 13,
      "name": "United States"
    },
    {
      "id": 14,
      "name": "Trinidad and Tobago"
    },
    {
      "id": 15,
      "name": "Peru"
    },
    {
      "id": 16,
      "name": "Ecuador"
    },
    {
      "id": 17,
      "name": "Saint Pierre and Miquelon"
    },
    {
      "id": 18,
      "name": "Cuba"
    },
    {
      "id": 19,
      "name": "Grenada"
    },
    {
      "id": 20,
      "name": "Belize"
    },
    {
      "id": 21,
      "name": "Suriname"
    },
    {
      "id": 22,
      "name": "Antigua and Barbuda"
    },
    {
      "id": 23,
      "name": "Curaçao"
    },
    {
      "id": 24,
      "name": "Panama"
    },
    {
      "id": 25,
      "name": "United States Virgin Islands"
    },
    {
      "id": 26,
      "name": "Puerto Rico"
    },
    {
      "id": 27,
      "name": "Nicaragua"
    },
    {
      "id": 28,
      "name": "Colombia"
    },
    {
      "id": 29,
      "name": "Bermuda"
    },
    {
      "id": 30,
      "name": "Guadeloupe"
    },
    {
      "id": 31,
      "name": "Dominica"
    },
    {
      "id": 32,
      "name": "Barbados"
    },
    {
      "id": 33,
      "name": "Anguilla"
    },
    {
      "id": 34,
      "name": "United States Minor Outlying Islands"
    },
    {
      "id": 35,
      "name": "Dominican Republic"
    },
    {
      "id": 36,
      "name": "Honduras"
    },
    {
      "id": 37,
      "name": "Turks and Caicos Islands"
    },
    {
      "id": 38,
      "name": "Falkland Islands"
    },
    {
      "id": 39,
      "name": "Saint Barthélemy"
    },
    {
      "id": 40,
      "name": "Bolivia"
    },
    {
      "id": 41,
      "name": "Paraguay"
    },
    {
      "id": 42,
      "name": "Argentina"
    },
    {
      "id": 43,
      "name": "Saint Lucia"
    },
    {
      "id": 44,
      "name": "Uruguay"
    },
    {
      "id": 45,
      "name": "Mexico"
    },
    {
      "id": 46,
      "name": "Montserrat"
    },
    {
      "id": 47,
      "name": "Sint Maarten"
    },
    {
      "id": 48,
      "name": "French Guiana"
    },
    {
      "id": 49,
      "name": "Saint Kitts and Nevis"
    },
    {
      "id": 50,
      "name": "Greenland"
    },
    {
      "id": 51,
      "name": "Brazil"
    },
    {
      "id": 52,
      "name": "Saint Vincent and the Grenadines"
    },
    {
      "id": 53,
      "name": "Jamaica"
    },
    {
      "id": 54,
      "name": "El Salvador"
    },
    {
      "id": 55,
      "name": "British Virgin Islands"
    }
  ]
  const Asia = [
    {
      "id": 0,
      "name": "Kuwait"
    },
    {
      "id": 1,
      "name": "Japan"
    },
    {
      "id": 2,
      "name": "Azerbaijan"
    },
    {
      "id": 3,
      "name": "Myanmar"
    },
    {
      "id": 4,
      "name": "Palestine"
    },
    {
      "id": 5,
      "name": "Philippines"
    },
    {
      "id": 6,
      "name": "South Korea"
    },
    {
      "id": 7,
      "name": "Afghanistan"
    },
    {
      "id": 8,
      "name": "Georgia"
    },
    {
      "id": 9,
      "name": "Syria"
    },
    {
      "id": 10,
      "name": "Hong Kong"
    },
    {
      "id": 11,
      "name": "Oman"
    },
    {
      "id": 12,
      "name": "Bahrain"
    },
    {
      "id": 13,
      "name": "Lebanon"
    },
    {
      "id": 14,
      "name": "Bangladesh"
    },
    {
      "id": 15,
      "name": "Vietnam"
    },
    {
      "id": 16,
      "name": "China"
    },
    {
      "id": 17,
      "name": "Thailand"
    },
    {
      "id": 18,
      "name": "Laos"
    },
    {
      "id": 19,
      "name": "Maldives"
    },
    {
      "id": 20,
      "name": "Cambodia"
    },
    {
      "id": 21,
      "name": "Kazakhstan"
    },
    {
      "id": 22,
      "name": "Qatar"
    },
    {
      "id": 23,
      "name": "Turkey"
    },
    {
      "id": 24,
      "name": "Yemen"
    },
    {
      "id": 25,
      "name": "Turkmenistan"
    },
    {
      "id": 26,
      "name": "North Korea"
    },
    {
      "id": 27,
      "name": "Mongolia"
    },
    {
      "id": 28,
      "name": "Brunei"
    },
    {
      "id": 29,
      "name": "Israel"
    },
    {
      "id": 30,
      "name": "Armenia"
    },
    {
      "id": 31,
      "name": "Indonesia"
    },
    {
      "id": 32,
      "name": "Uzbekistan"
    },
    {
      "id": 33,
      "name": "Kyrgyzstan"
    },
    {
      "id": 34,
      "name": "United Arab Emirates"
    },
    {
      "id": 35,
      "name": "Pakistan"
    },
    {
      "id": 36,
      "name": "Nepal"
    },
    {
      "id": 37,
      "name": "Bhutan"
    },
    {
      "id": 38,
      "name": "India"
    },
    {
      "id": 39,
      "name": "Singapore"
    },
    {
      "id": 40,
      "name": "Taiwan"
    },
    {
      "id": 41,
      "name": "Jordan"
    },
    {
      "id": 42,
      "name": "Malaysia"
    },
    {
      "id": 43,
      "name": "Saudi Arabia"
    },
    {
      "id": 44,
      "name": "Sri Lanka"
    },
    {
      "id": 45,
      "name": "Iran"
    },
    {
      "id": 46,
      "name": "Iraq"
    },
    {
      "id": 47,
      "name": "Timor-Leste"
    },
    {
      "id": 48,
      "name": "Macau"
    },
    {
      "id": 49,
      "name": "Tajikistan"
    }
  ]
  const Africa = [
    {
      "id": 0,
      "name": "Mayotte"
    },
    {
      "id": 1,
      "name": "Tunisia"
    },
    {
      "id": 2,
      "name": "Saint Helena, Ascension and Tristan da Cunha"
    },
    {
      "id": 3,
      "name": "Cape Verde"
    },
    {
      "id": 4,
      "name": "Kenya"
    },
    {
      "id": 5,
      "name": "South Sudan"
    },
    {
      "id": 6,
      "name": "Guinea-Bissau"
    },
    {
      "id": 7,
      "name": "Sierra Leone"
    },
    {
      "id": 8,
      "name": "Togo"
    },
    {
      "id": 9,
      "name": "Zimbabwe"
    },
    {
      "id": 10,
      "name": "Equatorial Guinea"
    },
    {
      "id": 11,
      "name": "Eswatini"
    },
    {
      "id": 12,
      "name": "South Africa"
    },
    {
      "id": 13,
      "name": "Mozambique"
    },
    {
      "id": 14,
      "name": "Republic of the Congo"
    },
    {
      "id": 15,
      "name": "Réunion"
    },
    {
      "id": 16,
      "name": "Ethiopia"
    },
    {
      "id": 17,
      "name": "Mauritius"
    },
    {
      "id": 18,
      "name": "British Indian Ocean Territory"
    },
    {
      "id": 19,
      "name": "Benin"
    },
    {
      "id": 20,
      "name": "Comoros"
    },
    {
      "id": 21,
      "name": "Mali"
    },
    {
      "id": 22,
      "name": "Gambia"
    },
    {
      "id": 23,
      "name": "Guinea"
    },
    {
      "id": 24,
      "name": "Mauritania"
    },
    {
      "id": 25,
      "name": "Botswana"
    },
    {
      "id": 26,
      "name": "Uganda"
    },
    {
      "id": 27,
      "name": "Gabon"
    },
    {
      "id": 28,
      "name": "Chad"
    },
    {
      "id": 29,
      "name": "Sudan"
    },
    {
      "id": 30,
      "name": "São Tomé and Príncipe"
    },
    {
      "id": 31,
      "name": "Eritrea"
    },
    {
      "id": 32,
      "name": "Malawi"
    },
    {
      "id": 33,
      "name": "Ghana"
    },
    {
      "id": 34,
      "name": "Morocco"
    },
    {
      "id": 35,
      "name": "Madagascar"
    },
    {
      "id": 36,
      "name": "Angola"
    },
    {
      "id": 37,
      "name": "Burundi"
    },
    {
      "id": 38,
      "name": "Tanzania"
    },
    {
      "id": 39,
      "name": "Somalia"
    },
    {
      "id": 40,
      "name": "Seychelles"
    },
    {
      "id": 41,
      "name": "Rwanda"
    },
    {
      "id": 42,
      "name": "Niger"
    },
    {
      "id": 43,
      "name": "Djibouti"
    },
    {
      "id": 44,
      "name": "Liberia"
    },
    {
      "id": 45,
      "name": "Libya"
    },
    {
      "id": 46,
      "name": "Lesotho"
    },
    {
      "id": 47,
      "name": "Burkina Faso"
    },
    {
      "id": 48,
      "name": "Algeria"
    },
    {
      "id": 49,
      "name": "Nigeria"
    },
    {
      "id": 50,
      "name": "Cameroon"
    },
    {
      "id": 51,
      "name": "Namibia"
    },
    {
      "id": 52,
      "name": "Egypt"
    },
    {
      "id": 53,
      "name": "Zambia"
    },
    {
      "id": 54,
      "name": "Senegal"
    },
    {
      "id": 55,
      "name": "Central African Republic"
    },
    {
      "id": 56,
      "name": "Ivory Coast"
    },
    {
      "id": 57,
      "name": "Western Sahara"
    },
    {
      "id": 58,
      "name": "DR Congo"
    }
  ]
  const Oceania = [
  {
    "id": 0,
    "name": "Australia"
  },
  {
    "id": 1,
    "name": "Samoa"
  },
  {
    "id": 2,
    "name": "American Samoa"
  },
  {
    "id": 3,
    "name": "Guam"
  },
  {
    "id": 4,
    "name": "Tonga"
  },
  {
    "id": 5,
    "name": "Papua New Guinea"
  },
  {
    "id": 6,
    "name": "New Caledonia"
  },
  {
    "id": 7,
    "name": "Palau"
  },
  {
    "id": 8,
    "name": "French Polynesia"
  },
  {
    "id": 9,
    "name": "Fiji"
  },
  {
    "id": 10,
    "name": "Cocos (Keeling) Islands"
  },
  {
    "id": 11,
    "name": "Pitcairn Islands"
  },
  {
    "id": 12,
    "name": "Marshall Islands"
  },
  {
    "id": 13,
    "name": "Tuvalu"
  },
  {
    "id": 14,
    "name": "Northern Mariana Islands"
  },
  {
    "id": 15,
    "name": "New Zealand"
  },
  {
    "id": 16,
    "name": "Norfolk Island"
  },
  {
    "id": 17,
    "name": "Nauru"
  },
  {
    "id": 18,
    "name": "Micronesia"
  },
  {
    "id": 19,
    "name": "Kiribati"
  },
  {
    "id": 20,
    "name": "Cook Islands"
  },
  {
    "id": 21,
    "name": "Wallis and Futuna"
  },
  {
    "id": 22,
    "name": "Solomon Islands"
  },
  {
    "id": 23,
    "name": "Christmas Island"
  },
  {
    "id": 24,
    "name": "Niue"
  },
  {
    "id": 25,
    "name": "Vanuatu"
  },
  {
    "id": 26,
    "name": "Tokelau"
  }
]


// Empty dependency array ensures useEffect runs only once, similar to componentDidMount
  useEffect(() => {
    if (region!="") {
      const url = "https://studies.cs.helsinki.fi/restcountries/api/all";
      axios.get(url)
        .then(response => {
          const filteredCountries = response.data.filter(country => country.region === region);
          const mappedCountries = filteredCountries.map((country, index) => ({ id: index, name: country.name.common }));
          console.log(mappedCountries)
          setCountryList(mappedCountries); // Set state with mapped countries
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [region]);

  const handleRegion = (e) => {
    setregion(e)
  }
  
  const handleCountry = (e) => {
    setcountry(e)
    setcontent(true)
  }
  const handleSearch = (e) => {
    setsearchValue(e)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://restcountries.com/v3.1/all"; // Using a different URL for countries data
        const response = await axios.get(url);
        const filteredResults = response.data.filter(result => 
          result.name.common.toLowerCase().startsWith(searchValue.toLowerCase())
        );
        const mappedResults = filteredResults.map((result, index) => ({
          id: index,
          name: result.name.common
        }));
        setsearchresults(mappedResults);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchValue !== '') {
      fetchData();
    }
  }, [searchValue]);
  const handleSearchresult = (name) => {
    setsearchValue(name)
    setsearchresults([])
  }
  const handlesearchbutton = (value) => {
    setcountry(value)
    console.log(country)
    setsearchValue("")
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://studies.cs.helsinki.fi/restcountries/api/name/${country}`;
        const response = await axios.get(url);
        setcountrydata(response.data);
        setcontent(true) 
        // Pass response.data instead of response
      } catch (error) {
        console.error('Error Fetching data:', error);
      }
    };
  
    if (country !== '') {
      fetchData(); // Call fetchData directly, no need for additional condition
    }
  }, [country]);
console.log(countrydata)
  return (
    <>
      <div className="flex flex-wrap justify-center place-content center">
        <Dropdown list={continents} selectedValue={region} handleSelection={handleRegion} name="Continent" />
        <Dropdown list={countrylist} selectedValue={country} handleSelection={handleCountry} name="Country" />
      </div>
      <Searchbar handleSearch={handleSearch} searchValue={searchValue} searchresults={searchresults} 
      handleSearchresult={handleSearchresult} handlesearchbutton={handlesearchbutton}/>
      { content ? <Content name={countrydata.name.common} capital={countrydata.capital[0]}
      flag={countrydata.flags.svg}  flagalt={countrydata.flags.alt} 
      coatofarms={countrydata.coatOfArms.svg} coaalt={countrydata.coatOfArms.alt} official={countrydata.name.official}  
      tld={countrydata.tld[0]}  timezones={countrydata.timezones} 
       continents={countrydata.continents} altwrite={countrydata.altSpellings}/> :null  }
    </>
  );
}

export default App;
