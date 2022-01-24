import React, { useState, useEffect } from "react";
import { Modal, ModalBody } from "reactstrap";
import Router, { useRouter } from "next/router";
import IntlTelInput from "react-intl-tel-input";

// API and JWT helper
import { apiHelper } from "../../../helper/apiHelper";
import { jwtDecode } from "../../../helper/jwtHelper";

// scss
import profileCss from "./profile.scss";
import IntlTelInputCss from "react-intl-tel-input/dist/main.css";

// Toaster
import { ToastContainer, toast } from "react-toastify";
import ReactToastifyCss from "react-toastify/dist/ReactToastify.min.css";

// Image
import DummyProfile from "../../../public/dummy-profile.webp";

const cArray = [{
    "country_code": "AF",
    "country_name": "Afghanistan",
    "dialling_code": "+93"
},
{
    "country_code": "AL",
    "country_name": "Albania",
    "dialling_code": "+355"
},
{
    "country_code": "DZ",
    "country_name": "Algeria",
    "dialling_code": "+213"
},
{
    "country_code": "AS",
    "country_name": "American Samoa",
    "dialling_code": "+1"
},
{
    "country_code": "AD",
    "country_name": "Andorra",
    "dialling_code": "+376"
},
{
    "country_code": "AO",
    "country_name": "Angola",
    "dialling_code": "+244"
},
{
    "country_code": "AI",
    "country_name": "Anguilla",
    "dialling_code": "+1"
},
{
    "country_code": "AG",
    "country_name": "Antigua",
    "dialling_code": "+1"
},
{
    "country_code": "AR",
    "country_name": "Argentina",
    "dialling_code": "+54"
},
{
    "country_code": "AM",
    "country_name": "Armenia",
    "dialling_code": "+374"
},
{
    "country_code": "AW",
    "country_name": "Aruba",
    "dialling_code": "+297"
},
{
    "country_code": "AU",
    "country_name": "Australia",
    "dialling_code": "+61"
},
{
    "country_code": "AI",
    "country_name": "Austria",
    "dialling_code": "+43"
},
{
    "country_code": "AZ",
    "country_name": "Azerbaijan",
    "dialling_code": "+994"
},
{
    "country_code": "BH",
    "country_name": "Bahrain",
    "dialling_code": "+973"
},
{
    "country_code": "BD",
    "country_name": "Bangladesh",
    "dialling_code": "+880"
},
{
    "country_code": "BB",
    "country_name": "Barbados",
    "dialling_code": "+1"
},
{
    "country_code": "BY",
    "country_name": "Belarus",
    "dialling_code": "+375"
},
{
    "country_code": "BE",
    "country_name": "Belgium",
    "dialling_code": "+32"
},
{
    "country_code": "BZ",
    "country_name": "Belize",
    "dialling_code": "+501"
},
{
    "country_code": "BJ",
    "country_name": "Benin",
    "dialling_code": "+229"
},
{
    "country_code": "BM",
    "country_name": "Bermuda",
    "dialling_code": "+1"
},
{
    "country_code": "BT",
    "country_name": "Bhutan",
    "dialling_code": "+975"
},
{
    "country_code": "BO",
    "country_name": "Bolivia",
    "dialling_code": "+591"
},
{
    "country_code": "BA",
    "country_name": "Bosnia and Herzegovina",
    "dialling_code": "+387"
},
{
    "country_code": "BW",
    "country_name": "Botswana",
    "dialling_code": "+267"
},
{
    "country_code": "BR",
    "country_name": "Brazil",
    "dialling_code": "+55"
},
{
    "country_code": "IO",
    "country_name": "British Indian Ocean Territory",
    "dialling_code": "+246"
},
{
    "country_code": "VG",
    "country_name": "British Virgin Islands",
    "dialling_code": "+1"
},
{
    "country_code": "BN",
    "country_name": "Brunei",
    "dialling_code": "+673"
},
{
    "country_code": "BG",
    "country_name": "Bulgaria",
    "dialling_code": "+359"
},
{
    "country_code": "BF",
    "country_name": "Burkina Faso",
    "dialling_code": "+226"
},
{
    "country_code": "MM",
    "country_name": "Burma Myanmar",
    "dialling_code": "+95"
},
{
    "country_code": "BI",
    "country_name": "Burundi",
    "dialling_code": "+257"
},
{
    "country_code": "KH",
    "country_name": "Cambodia",
    "dialling_code": "+855"
},
{
    "country_code": "CM",
    "country_name": "Cameroon",
    "dialling_code": "+237"
},
{
    "country_code": "CA",
    "country_name": "Canada",
    "dialling_code": "+1"
},
{
    "country_code": "CV",
    "country_name": "Cape Verde",
    "dialling_code": "+238"
},
{
    "country_code": "KY",
    "country_name": "Cayman Islands",
    "dialling_code": "+1"
},
{
    "country_code": "CF",
    "country_name": "Central African Republic",
    "dialling_code": "+236"
},
{
    "country_code": "ID",
    "country_name": "Chad",
    "dialling_code": "+235"
},
{
    "country_code": "CL",
    "country_name": "Chile",
    "dialling_code": "+56"
},
{
    "country_code": "CN",
    "country_name": "China",
    "dialling_code": "+86"
},
{
    "country_code": "CO",
    "country_name": "Colombia",
    "dialling_code": "+57"
},
{
    "country_code": "KM",
    "country_name": "Comoros",
    "dialling_code": "+269"
},
{
    "country_code": "CK",
    "country_name": "Cook Islands",
    "dialling_code": "+682"
},
{
    "country_code": "CR",
    "country_name": "Costa Rica",
    "dialling_code": "+506"
},
{
    "country_code": "CI",
    "country_name": "Côte d'Ivoire",
    "dialling_code": "+225"
},
{
    "country_code": "HR",
    "country_name": "Croatia",
    "dialling_code": "+385"
},
{
    "country_code": "CU",
    "country_name": "Cuba",
    "dialling_code": "+53"
},
{
    "country_code": "CY",
    "country_name": "Cyprus",
    "dialling_code": "+357"
},
{
    "country_code": "CZ",
    "country_name": "Czech Republic",
    "dialling_code": "+420"
},
{
    "country_code": "CD",
    "country_name": "Democratic Republic of Congo",
    "dialling_code": "+243"
},
{
    "country_code": "DK",
    "country_name": "Denmark",
    "dialling_code": "+45"
},
{
    "country_code": "DJ",
    "country_name": "Djibouti",
    "dialling_code": "+253"
},
{
    "country_code": "DM",
    "country_name": "Dominica",
    "dialling_code": "+1"
},
{
    "country_code": "DO",
    "country_name": "Dominican Republic",
    "dialling_code": "+1"
},
{
    "country_code": "EC",
    "country_name": "Ecuador",
    "dialling_code": "+593"
},
{
    "country_code": "EG",
    "country_name": "Egypt",
    "dialling_code": "+20"
},
{
    "country_code": "SV",
    "country_name": "El Salvador",
    "dialling_code": "+503"
},
{
    "country_code": "GQ",
    "country_name": "Equatorial Guinea",
    "dialling_code": "+240"
},
{
    "country_code": "ER",
    "country_name": "Eritrea",
    "dialling_code": "+291"
},
{
    "country_code": "EE",
    "country_name": "Estonia",
    "dialling_code": "+372"
},
{
    "country_code": "ET",
    "country_name": "Ethiopia",
    "dialling_code": "+251"
},
{
    "country_code": "FK",
    "country_name": "Falkland Islands",
    "dialling_code": "+500"
},
{
    "country_code": "FO",
    "country_name": "Faroe Islands",
    "dialling_code": "+298"
},
{
    "country_code": "FM",
    "country_name": "Federated States of Micronesia",
    "dialling_code": "+691"
},
{
    "country_code": "FJ",
    "country_name": "Fiji",
    "dialling_code": "+679"
},
{
    "country_code": "FI",
    "country_name": "Finland",
    "dialling_code": "+358"
},
{
    "country_code": "FR",
    "country_name": "France",
    "dialling_code": "+33"
},
{
    "country_code": "GF",
    "country_name": "French Guiana",
    "dialling_code": "+594"
},
{
    "country_code": "PF",
    "country_name": "French Polynesia",
    "dialling_code": "+689"
},
{
    "country_code": "GA",
    "country_name": "Gabon",
    "dialling_code": "+241"
},
{
    "country_code": "GE",
    "country_name": "Georgia",
    "dialling_code": "+995"
},
{
    "country_code": "DE",
    "country_name": "Germany",
    "dialling_code": "+49"
},
{
    "country_code": "GH",
    "country_name": "Ghana",
    "dialling_code": "+233"
},
{
    "country_code": "GI",
    "country_name": "Gibraltar",
    "dialling_code": "+350"
},
{
    "country_code": "GR",
    "country_name": "Greece",
    "dialling_code": "+30"
},
{
    "country_code": "GL",
    "country_name": "Greenland",
    "dialling_code": "+299"
},
{
    "country_code": "GD",
    "country_name": "Grenada",
    "dialling_code": "+1"
},
{
    "country_code": "GP",
    "country_name": "Guadeloupe",
    "dialling_code": "+590"
},
{
    "country_code": "GU",
    "country_name": "Guam",
    "dialling_code": "+1"
},
{
    "country_code": "GT",
    "country_name": "Guatemala",
    "dialling_code": "+502"
},
{
    "country_code": "GN",
    "country_name": "Guinea",
    "dialling_code": "+224"
},
{
    "country_code": "GW",
    "country_name": "Guinea-Bissau",
    "dialling_code": "+245"
},
{
    "country_code": "GY",
    "country_name": "Guyana",
    "dialling_code": "+592"
},
{
    "country_code": "HT",
    "country_name": "Haiti",
    "dialling_code": "+509"
},
{
    "country_code": "HN",
    "country_name": "Honduras",
    "dialling_code": "+504"
},
{
    "country_code": "HK",
    "country_name": "Hong Kong",
    "dialling_code": "+852"
},
{
    "country_code": "HU",
    "country_name": "Hungary",
    "dialling_code": "+36"
},
{
    "country_code": "IS",
    "country_name": "Iceland",
    "dialling_code": "+354"
},
{
    "country_code": "IN",
    "country_name": "India",
    "dialling_code": "+91"
},
{
    "country_code": "ID",
    "country_name": "Indonesia",
    "dialling_code": "+62"
},
{
    "country_code": "IR",
    "country_name": "Iran",
    "dialling_code": "+98"
},
{
    "country_code": "IQ",
    "country_name": "Iraq",
    "dialling_code": "+964"
},
{
    "country_code": "IE",
    "country_name": "Ireland",
    "dialling_code": "+353"
},
{
    "country_code": "IL",
    "country_name": "Israel",
    "dialling_code": "+972"
},
{
    "country_code": "IT",
    "country_name": "Italy",
    "dialling_code": "+39"
},
{
    "country_code": "JM",
    "country_name": "Jamaica",
    "dialling_code": "+1"
},
{
    "country_code": "JP",
    "country_name": "Japan",
    "dialling_code": "+81"
},
{
    "country_code": "JO",
    "country_name": "Jordan",
    "dialling_code": "+962"
},
{
    "country_code": "KZ",
    "country_name": "Kazakhstan",
    "dialling_code": "+7"
},
{
    "country_code": "KE",
    "country_name": "Kenya",
    "dialling_code": "+254"
},
{
    "country_code": "KI",
    "country_name": "Kiribati",
    "dialling_code": "+686"
},
{
    "country_code": "XK",
    "country_name": "Kosovo",
    "dialling_code": "+381"
},
{
    "country_code": "KW",
    "country_name": "Kuwait",
    "dialling_code": "+965"
},
{
    "country_code": "KG",
    "country_name": "Kyrgyzstan",
    "dialling_code": "+996"
},
{
    "country_code": "LA",
    "country_name": "Laos",
    "dialling_code": "+856"
},
{
    "country_code": "LV",
    "country_name": "Latvia",
    "dialling_code": "+371"
},
{
    "country_code": "LB",
    "country_name": "Lebanon",
    "dialling_code": "+961"
},
{
    "country_code": "LS",
    "country_name": "Lesotho",
    "dialling_code": "+266"
},
{
    "country_code": "LR",
    "country_name": "Liberia",
    "dialling_code": "+231"
},
{
    "country_code": "LY",
    "country_name": "Libya",
    "dialling_code": "+218"
},
{
    "country_code": "LI",
    "country_name": "Liechtenstein",
    "dialling_code": "+423"
},
{
    "country_code": "LT",
    "country_name": "Lithuania",
    "dialling_code": "+370"
},
{
    "country_code": "LU",
    "country_name": "Luxembourg",
    "dialling_code": "+352"
},
{
    "country_code": "MO",
    "country_name": "Macau",
    "dialling_code": "+853"
},
{
    "country_code": "MK",
    "country_name": "Macedonia",
    "dialling_code": "+389"
},
{
    "country_code": "MG",
    "country_name": "Madagascar",
    "dialling_code": "+261"
},
{
    "country_code": "MW",
    "country_name": "Malawi",
    "dialling_code": "+265"
},
{
    "country_code": "MY",
    "country_name": "Malaysia",
    "dialling_code": "+60"
},
{
    "country_code": "MV",
    "country_name": "Maldives",
    "dialling_code": "+960"
},
{
    "country_code": "ML",
    "country_name": "Mali",
    "dialling_code": "+223"
},
{
    "country_code": "MT",
    "country_name": "Malta",
    "dialling_code": "+356"
},
{
    "country_code": "MH",
    "country_name": "Marshall Islands",
    "dialling_code": "+692"
},
{
    "country_code": "MQ",
    "country_name": "Martinique",
    "dialling_code": "+596"
},
{
    "country_code": "MR",
    "country_name": "Mauritania",
    "dialling_code": "+222"
},
{
    "country_code": "MU",
    "country_name": "Mauritius",
    "dialling_code": "+230"
},
{
    "country_code": "YT",
    "country_name": "Mayotte",
    "dialling_code": "+262"
},
{
    "country_code": "MX",
    "country_name": "Mexico",
    "dialling_code": "+52"
},
{
    "country_code": "MD",
    "country_name": "Moldova",
    "dialling_code": "+373"
},
{
    "country_code": "MC",
    "country_name": "Monaco",
    "dialling_code": "+377"
},
{
    "country_code": "MN",
    "country_name": "Mongolia",
    "dialling_code": "+976"
},
{
    "country_code": "ME",
    "country_name": "Montenegro",
    "dialling_code": "+382"
},
{
    "country_code": "MS",
    "country_name": "Montserrat",
    "dialling_code": "+1"
},
{
    "country_code": "MA",
    "country_name": "Morocco",
    "dialling_code": "+212"
},
{
    "country_code": "MZ",
    "country_name": "Mozambique",
    "dialling_code": "+258"
},
{
    "country_code": "NA",
    "country_name": "Namibia",
    "dialling_code": "+264"
},
{
    "country_code": "NR",
    "country_name": "Nauru",
    "dialling_code": "+674"
},
{
    "country_code": "NP",
    "country_name": "Nepal",
    "dialling_code": "+977"
},
{
    "country_code": "NL",
    "country_name": "Netherlands",
    "dialling_code": "+31"
},
{
    "country_code": "AN",
    "country_name": "Netherlands Antilles",
    "dialling_code": "+599"
},
{
    "country_code": "NC",
    "country_name": "New Caledonia",
    "dialling_code": "+687"
},
{
    "country_code": "NZ",
    "country_name": "New Zealand",
    "dialling_code": "+64"
},
{
    "country_code": "NI",
    "country_name": "Nicaragua",
    "dialling_code": "+505"
},
{
    "country_code": "NE",
    "country_name": "Niger",
    "dialling_code": "+227"
},
{
    "country_code": "NG",
    "country_name": "Nigeria",
    "dialling_code": "+234"
},
{
    "country_code": "NU",
    "country_name": "Niue",
    "dialling_code": "+683"
},
{
    "country_code": "NF",
    "country_name": "Norfolk Island",
    "dialling_code": "+672"
},
{
    "country_code": "KP",
    "country_name": "North Korea",
    "dialling_code": "+850"
},
{
    "country_code": "MP",
    "country_name": "Northern Mariana Islands",
    "dialling_code": "+1"
},
{
    "country_code": "NO",
    "country_name": "Norway",
    "dialling_code": "+47"
},
{
    "country_code": "OM",
    "country_name": "Oman",
    "dialling_code": "+968"
},
{
    "country_code": "PK",
    "country_name": "Pakistan",
    "dialling_code": "+92"
},
{
    "country_code": "PW",
    "country_name": "Palau",
    "dialling_code": "+680"
},
{
    "country_code": "PS",
    "country_name": "Palestine",
    "dialling_code": "+970"
},
{
    "country_code": "PA",
    "country_name": "Panama",
    "dialling_code": "+507"
},
{
    "country_code": "PG",
    "country_name": "Papua New Guinea",
    "dialling_code": "+675"
},
{
    "country_code": "PY",
    "country_name": "Paraguay",
    "dialling_code": "+595"
},
{
    "country_code": "PE",
    "country_name": "Peru",
    "dialling_code": "+51"
},
{
    "country_code": "PH",
    "country_name": "Philippines",
    "dialling_code": "+63"
},
{
    "country_code": "PL",
    "country_name": "Poland",
    "dialling_code": "+48"
},
{
    "country_code": "PT",
    "country_name": "Portugal",
    "dialling_code": "+351"
},
{
    "country_code": "PR",
    "country_name": "Puerto Rico",
    "dialling_code": "+1"
},
{
    "country_code": "QA",
    "country_name": "Qatar",
    "dialling_code": "+974"
},
{
    "country_code": "CG",
    "country_name": "Republic of the Congo",
    "dialling_code": "+242"
},
{
    "country_code": "RE",
    "country_name": "Réunion",
    "dialling_code": "+262"
},
{
    "country_code": "RO",
    "country_name": "Romania",
    "dialling_code": "+40"
},
{
    "country_code": "RU",
    "country_name": "Russia",
    "dialling_code": "+7"
},
{
    "country_code": "RW",
    "country_name": "Rwanda",
    "dialling_code": "+250"
},
{
    "country_code": "BL",
    "country_name": "Saint Barthélemy",
    "dialling_code": "+590"
},
{
    "country_code": "SH",
    "country_name": "Saint Helena",
    "dialling_code": "+290"
},
{
    "country_code": "KN",
    "country_name": "Saint Kitts and Nevis",
    "dialling_code": "+1"
},
{
    "country_code": "MF",
    "country_name": "Saint Martin",
    "dialling_code": "+590"
},
{
    "country_code": "PM",
    "country_name": "Saint Pierre and Miquelon",
    "dialling_code": "+508"
},
{
    "country_code": "VC",
    "country_name": "Saint Vincent and the Grenadines",
    "dialling_code": "+1"
},
{
    "country_code": "WS",
    "country_name": "Samoa",
    "dialling_code": "+685"
},
{
    "country_code": "SM",
    "country_name": "San Marino",
    "dialling_code": "+378"
},
{
    "country_code": "ST",
    "country_name": "São Tomé and Príncipe",
    "dialling_code": "+239"
},
{
    "country_code": "SA",
    "country_name": "Saudi Arabia",
    "dialling_code": "+966"
},
{
    "country_code": "SN",
    "country_name": "Senegal",
    "dialling_code": "+221"
},
{
    "country_code": "RS",
    "country_name": "Serbia",
    "dialling_code": "+381"
},
{
    "country_code": "SC",
    "country_name": "Seychelles",
    "dialling_code": "+248"
},
{
    "country_code": "SL",
    "country_name": "Sierra Leone",
    "dialling_code": "+232"
},
{
    "country_code": "SG",
    "country_name": "Singapore",
    "dialling_code": "+65"
},
{
    "country_code": "SK",
    "country_name": "Slovakia",
    "dialling_code": "+421"
},
{
    "country_code": "SI",
    "country_name": "Slovenia",
    "dialling_code": "+386"
},
{
    "country_code": "SB",
    "country_name": "Solomon Islands",
    "dialling_code": "+677"
},
{
    "country_code": "SO",
    "country_name": "Somalia",
    "dialling_code": "+252"
},
{
    "country_code": "ZA",
    "country_name": "South Africa",
    "dialling_code": "+27"
},
{
    "country_code": "KR",
    "country_name": "South Korea",
    "dialling_code": "+82"
},
{
    "country_code": "ES",
    "country_name": "Spain",
    "dialling_code": "+34"
},
{
    "country_code": "LK",
    "country_name": "Sri Lanka",
    "dialling_code": "+94"
},
{
    "country_code": "LC",
    "country_name": "St. Lucia",
    "dialling_code": "+1"
},
{
    "country_code": "SD",
    "country_name": "Sudan",
    "dialling_code": "+249"
},
{
    "country_code": "SR",
    "country_name": "Suriname",
    "dialling_code": "+597"
},
{
    "country_code": "SZ",
    "country_name": "Swaziland",
    "dialling_code": "+268"
},
{
    "country_code": "SE",
    "country_name": "Sweden",
    "dialling_code": "+46"
},
{
    "country_code": "CH",
    "country_name": "Switzerland",
    "dialling_code": "+41"
},
{
    "country_code": "SY",
    "country_name": "Syria",
    "dialling_code": "+963"
},
{
    "country_code": "TW",
    "country_name": "Taiwan",
    "dialling_code": "+886"
},
{
    "country_code": "TJ",
    "country_name": "Tajikistan",
    "dialling_code": "+992"
},
{
    "country_code": "TZ",
    "country_name": "Tanzania",
    "dialling_code": "+255"
},
{
    "country_code": "TH",
    "country_name": "Thailand",
    "dialling_code": "+66"
},
{
    "country_code": "BS",
    "country_name": "The Bahamas",
    "dialling_code": "+1"
},
{
    "country_code": "GM",
    "country_name": "The Gambia",
    "dialling_code": "+220"
},
{
    "country_code": "TL",
    "country_name": "Timor-Leste",
    "dialling_code": "+670"
},
{
    "country_code": "TG",
    "country_name": "Togo",
    "dialling_code": "+228"
},
{
    "country_code": "TK",
    "country_name": "Tokelau",
    "dialling_code": "+690"
},
{
    "country_code": "TO",
    "country_name": "Tonga",
    "dialling_code": "+676"
},
{
    "country_code": "TT",
    "country_name": "Trinidad and Tobago",
    "dialling_code": "+1"
},
{
    "country_code": "TN",
    "country_name": "Tunisia",
    "dialling_code": "+216"
},
{
    "country_code": "TR",
    "country_name": "Turkey",
    "dialling_code": "+90"
},
{
    "country_code": "TM",
    "country_name": "Turkmenistan",
    "dialling_code": "+993"
},
{
    "country_code": "TC",
    "country_name": "Turks and Caicos Islands",
    "dialling_code": "+1"
},
{
    "country_code": "TV",
    "country_name": "Tuvalu",
    "dialling_code": "+688"
},
{
    "country_code": "UG",
    "country_name": "Uganda",
    "dialling_code": "+256"
},
{
    "country_code": "UA",
    "country_name": "Ukraine",
    "dialling_code": "+380"
},
{
    "country_code": "AE",
    "country_name": "United Arab Emirates",
    "dialling_code": "+971"
},
{
    "country_code": "GB",
    "country_name": "United Kingdom",
    "dialling_code": "+44"
},
{
    "country_code": "US",
    "country_name": "United States",
    "dialling_code": "+1"
},
{
    "country_code": "UY",
    "country_name": "Uruguay",
    "dialling_code": "+598"
},
{
    "country_code": "VI",
    "country_name": "US Virgin Islands",
    "dialling_code": "+1"
},
{
    "country_code": "UZ",
    "country_name": "Uzbekistan",
    "dialling_code": "+998"
},
{
    "country_code": "VU",
    "country_name": "Vanuatu",
    "dialling_code": "+678"
},
{
    "country_code": "VA",
    "country_name": "Vatican City",
    "dialling_code": "+39"
},
{
    "country_code": "VE",
    "country_name": "Venezuela",
    "dialling_code": "+58"
},
{
    "country_code": "VN",
    "country_name": "Vietnam",
    "dialling_code": "+84"
},
{
    "country_code": "WF",
    "country_name": "Wallis and Futuna",
    "dialling_code": "+681"
},
{
    "country_code": "YE",
    "country_name": "Yemen",
    "dialling_code": "+967"
},
{
    "country_code": "ZM",
    "country_name": "Zambia",
    "dialling_code": "+260"
},
{
    "country_code": "ZW",
    "country_name": "Zimbabwe",
    "dialling_code": "+263"
}
];

const Profile = (props) => {

    // Signin and securiry
    const [emailValue, setemailVal] = useState("");
    const [pwdValue, setPwdValue] = useState();

    const [telephone, setTelephone] = useState();

    const [firstName, setFirstName] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    const [lastname, setLastname] = useState("");
    const [userProfile, setUserProfile] = useState("");
    const [userToken, setUserToken] = useState("");
    const [changedProfile, setChangedProfile] = useState();
    const [whtsNoUpdate, setWhtsNoUpdate] = useState();
    const [curCountry, setCurCountry] = useState("in");
    const [mobileError, setMobileError] = useState("");

    // billing add
    const [addressVal, setaddress] = useState();
    const [cityVal, setCity] = useState();
    const [stateVal, setState] = useState();
    const [postCodeVal, setPostCode] = useState();
    const [isoCodeVal, setIsoCode] = useState();
    const [countryVal, setcountryVal] = useState();
    const [leveldata, setleveldata] = useState(null);

    const [old_password_error, setold_password_error] = useState(null);
    const [new_password_error, setnew_password_error] = useState(null);
    const [confirm_password_error, setconfirm_password_error] = useState(null);

    useEffect(() => {
        getProfileData();
        getLevelData();
    }, []);

    //getLevelData
    const getLevelData = () => {

        const loginToken = localStorage.getItem('token');
        var convertedToken = JSON.parse(loginToken);

        const formData = new FormData();
        formData.append("user_token", convertedToken ? convertedToken.value : '');

        // call delete API
        apiHelper('displaylevelpercentage', 'POST', formData, null).then(res => {
            if (res.data.status === true) {
                setleveldata(res.data.data);
            }
        }).catch(error => console.error(`Error: ${error}`));
    }

    //getProfileData
    const getProfileData = () => {

        const loginToken = localStorage.getItem("token");

        var convertedToken = JSON.parse(loginToken);
        setUserToken(convertedToken.value);
        var decodeToken = jwtDecode(convertedToken.value);

        var userProfile = decodeToken.user_details.profile_pic;

        var etext = decodeToken.user_details.user_email;
        var fname = decodeToken.user_details.first_name;
        var lname = decodeToken.user_details.last_name;
        const whtnumber = decodeToken.user_details.whatsapp_number;

        let phoneNo = decodeToken.user_details.customer_telephone;

        if (decodeToken.user_details.telephone_prefix === null) {
            setTelephone(0);
        }
        else {
            let mPrefix = "";
            if (decodeToken.user_details.telephone_prefix === null) { mPrefix = "93"; setPrefix("93"); }
            else { mPrefix = decodeToken.user_details.telephone_prefix; setPrefix(decodeToken.user_details.telephone_prefix); }

            let cArr = cArray.find(e => e.dialling_code === mPrefix);
            if (cArr === undefined || cArr === null) {
                setTelephone(0);
            }
            else {
                let cname = (cArr.country_code).toLowerCase();
                setTelephone(cname);
            }
        }

        setemailVal(etext);
        setUserProfile(userProfile);
        setFirstName(fname);
        setLastname(lname);
        setWhtsNoUpdate(whtnumber);
        setTelephone(phoneNo);

        // billing add
        const address = decodeToken.user_details.address;
        const city = decodeToken.user_details.city;
        const state = decodeToken.user_details.state;
        const zipcode = decodeToken.user_details.post_code;
        const ctyCode = decodeToken.user_details.iso_code;
        const country = decodeToken.user_details.country;

        setaddress(address);
        setCity(city);
        setState(state);
        setPostCode(zipcode);
        setIsoCode(ctyCode);
        setcountryVal(country);
    };

    const profileFileType = (e) => {
        var output = document.getElementById("output");
        output.src = URL.createObjectURL(e.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src);
        };
        setImagePreview(output.src);
        setChangedProfile(e.target.files[0]);
    };

    //profileImgUpload
    const profileImgUpload = () => {
        const formData = new FormData();
        formData.append("user_token", userToken);
        formData.append("profile_pic", changedProfile);

        apiHelper("updateprofilepic", "POST", formData, null).then((res) => {
            if (res.data.status === true) {
                setUserToken(res.data.data.user_token);
                var currUserToken = JSON.parse(localStorage.getItem("token"));
                const item = {
                    value: res.data.data.user_token,
                    expiry: currUserToken.expiry,
                };

                localStorage.setItem("token", JSON.stringify(item));
                props.changeUserProfile();
                setTimeout(() => {
                    toast.success(res.data.message);
                }, 2000);
            } else {
                toast.error(res.data.message);
            }
        }).catch((error) => console.error(`Error: ${error}`));
    };

    const firstNameHandler = (e) => {
        var firstInput = e.target.value;
        setFirstName(firstInput);
    };
    const lastNameHandler = (e) => {
        var lastInput = e.target.value;
        setLastname(lastInput);
    };

    const [fullnamemsg, setFullnamemsg] = useState("");

    const updateName = () => {
        const formData = new FormData();
        formData.append("first_name", firstName);
        formData.append("last_name", lastname);
        formData.append("user_token", userToken);

        apiHelper("updatefullname", "POST", formData, null).then((res) => {
            if (res.data.status === true) {

                setUserToken(res.data.data.user_token);
                var currUserToken = JSON.parse(localStorage.getItem("token"));

                const item = { value: res.data.data.user_token, expiry: currUserToken.expiry };
                localStorage.setItem("token", JSON.stringify(item));

                // props.changeUserProfile();

                setFullnamemsg(<span className="msgText successMsg">{res.data.message}</span>);
                setTimeout(() => { setFNameModal(false); }, 1500);
            } else if (res.data.status === false) {
                setFullnamemsg(<span className="msgText errorMsg">{res.data.message}</span>);
            }
        }).catch((error) => console.error(`Error: ${error}`));
    };

    const imgNotFound = (e) => {
        e.target.src = DummyProfile;
    };

    const [mobilemsg, setMobilemsg] = useState("");
    const [prefix, setPrefix] = useState();

    const onPhoneChange = (e, phoneNo) => {
        setTelephone(phoneNo);
    }

    const onFlagClick = (e, test) => {
        setTelephone("");
        setPrefix(test.dialCode);
    }

    const mobileNoUpdate = () => {
        if (telephone === "") {
            setMobileError(<span className="msgText errorMsg">Enter Mobile no</span>);
        }
        else {
            const formData = new FormData();
            formData.append("telephone", telephone);
            formData.append("prefix", "+" + prefix);
            formData.append("user_token", userToken);

            apiHelper("updatemobile", "POST", formData, null).then((res) => {
                if (res.data.status) {
                    setmobileModal(false);
                    setUserToken(res.data.data.user_token);
                    var currUserToken = JSON.parse(localStorage.getItem("token"));
                    const item = {
                        value: res.data.data.user_token,
                        expiry: currUserToken.expiry,
                    };
                    localStorage.setItem("token", JSON.stringify(item));
                    getProfileData();
                }
                else if (res.data.status === false) { setMobileError(res.data.message); }
            }).catch((error) => console.error(`Error: ${error}`));
        }
    };

    const whtsappHandler = (e) => {
        if (e.target.value.length < 15) {
            setWhtsNoUpdate(e.target.value);
        } else {
            document.getElementById("whtsappNoInput").addEventListener("keydown", function (e) { e.preventDefault(); });
        }
    };

    const [WhtsNomsg, setWhtsNomsg] = useState("");

    const updateWhtsNo = () => {

        const formData = new FormData();
        formData.append("whatsapp_num", whtsNoUpdate);
        formData.append("user_token", userToken);

        apiHelper("updatewhatsapp", "POST", formData, null)
            .then((res) => {
                if (res.data.status === true) {
                    setUserToken(res.data.data.user_token);
                    var currUserToken = JSON.parse(localStorage.getItem("token"));
                    const item = {
                        value: res.data.data.user_token,
                        expiry: currUserToken.expiry,
                    };
                    localStorage.setItem("token", JSON.stringify(item));
                    setWhtsNomsg(<span className="msgText successMsg">{res.data.message}</span>);
                    setTimeout(() => { setwhtappModal(false); }, 2000);
                } else {
                    setWhtsNomsg(<span className="msgText errorMsg">{res.data.message}</span>);
                }
            }).catch((error) => console.error(`Error: ${error}`));
    };

    const ctyCodeHandler = (e) => {
        var ctyCodeInput = e.target.value;
        setIsoCode(ctyCodeInput);
    };

    const ctyHandler = (e) => {
        var ctyInput = e.target.value;
        setcountryVal(ctyInput);
    };

    const stateHandler = (e) => {
        var stateInput = e.target.value;
        setState(stateInput);
    };

    const cityHandler = (e) => {
        var cityInput = e.target.value;
        setCity(cityInput);
    };

    const zipCHandler = (e) => {
        var zipCInput = e.target.value;
        setPostCode(zipCInput);
    };

    const streetHandler = (e) => {
        var streetInput = e.target.value;
        setaddress(streetInput);
    };

    const [billingAdMsg, setBillingAdMsg] = useState("");

    const updateBillingAdd = () => {
        if (isEdit === false) {
            setIsEdit(true);
        } else if (isEdit === true) {

            const formData = new FormData();
            formData.append("street", addressVal);
            formData.append("city", cityVal);
            formData.append("state", stateVal);
            formData.append("zipcode", postCodeVal);
            formData.append("countrycode", isoCodeVal);
            formData.append("country", countryVal);
            formData.append("user_token", userToken);

            apiHelper("updatebillingaddress", "POST", formData, null)
                .then((res) => {
                    if (res.data.status === true) {
                        setUserToken(res.data.data.user_token);
                        var currUserToken = JSON.parse(localStorage.getItem("token"));
                        const item = {
                            value: res.data.data.user_token,
                            expiry: currUserToken.expiry,
                        };
                        localStorage.setItem("token", JSON.stringify(item));
                        setBillingAdMsg(
                            <span className="msgText successMsg">{res.data.message}</span>
                        );
                        setTimeout(() => {
                            setBillindAddModal(false);
                        }, 2000);
                    } else {
                        setBillingAdMsg(
                            <span className="msgText errorMsg">{res.data.message}</span>
                        );
                    }
                }).catch((error) => console.error(`Error: ${error}`));
        }
    };

    const router = useRouter();
    const [emailErr, setEmailErr] = useState("");
    const [emailValErr, setEmailValErr] = useState("");

    const [emailError, setEmailError] = useState("");

    const emailHandler = (e) => {
        const emailRegex = /^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+$/g;
        if (emailRegex.test(e.target.value)) { setEmailValErr(""); }
        else { setEmailError("Email should be either valid and lowercase"); }
        if (emailValue === "") { setEmailError("Email should be either valid or not be blank."); }
        setemailVal(e.target.value);
    };

    const pwdHandler = (e) => {
        const value = e.target.value;
        setPwdValue(value);
    };

    const [emailMsg, setEmailMsg] = useState("");

    const emailUpdate = () => {

        if (emailValue !== "" && pwdValue !== "") {
            const formData = new FormData();
            formData.append("email", emailValue);
            formData.append("password", pwdValue);
            formData.append("user_token", userToken);

            apiHelper("updateemail", "POST", formData, null).then((res) => {
                if (res.data.status === true) {

                    // make email error as blank
                    setEmailError("");

                    setUserToken(res.data.data.user_token);
                    var currUserToken = JSON.parse(localStorage.getItem("token"));
                    const item = {
                        value: res.data.data.user_token,
                        expiry: currUserToken.expiry,
                    };
                    localStorage.setItem("token", JSON.stringify(item));
                    setEmailMsg(<span className="msgText successMsg">{res.data.message}</span>);
                    setTimeout(() => { setemailModal(false); }, 2000);
                } else {
                    // make email error as blank
                    setEmailError("");

                    setEmailMsg(<span className="msgText errorMsg">{res.data.message}</span>);
                }
            }).catch((error) => console.error(`Error: ${error}`));
        }
        else {
            setEmailError("Email and Password both are required.");
        }
    };

    const [currPwdValue, setCurrPwd] = useState(false);
    const [newPwdValue, setNewPwd] = useState(false);
    const [confirmPwdValue, setConfirmPwd] = useState(false);

    const currPwdHandle = (e) => {
        const oldPwd = e.target.value;
        if (oldPwd === "") { setold_password_error("Enter old password"); } else { setold_password_error(""); }
        setCurrPwd(oldPwd);
    };
    const newPwdHandle = (e) => {
        const newPwd = e.target.value;
        if (newPwd === "") { setnew_password_error("Enter new password"); } else { setnew_password_error(""); }
        setNewPwd(newPwd);
    };
    const confirmPwdHandle = (e) => {
        const confirmPwd = e.target.value;
        if (confirmPwd === "") { setconfirm_password_error("Enter confirm password"); } else { setconfirm_password_error(""); }
        setConfirmPwd(confirmPwd);
    };

    const [passwordValueMsg, setpasswordValueMsg] = useState(false)
    const [pwdMsg, setpwdMsg] = useState("");

    const pwdUpdate = () => {

        //check FormValidation
        check_FormValidation();

        if (currPwdValue !== "" && newPwdValue !== "" && confirmPwdValue !== "") {
            const formData = new FormData();
            formData.append("current_password", currPwdValue);
            formData.append("new_password", newPwdValue);
            formData.append("retype_password", confirmPwdValue);
            formData.append("user_token", userToken);
            if (currPwdValue === newPwdValue) {
                setpasswordValueMsg(<span className="msgText errorMsg">Your new password must be different</span>);
            }
            else {
                apiHelper("updatepassword", "POST", formData, null).then((res) => {
                    if (res.data.status === true) {
                        setpwdMsg(<span className="msgText successMsg">{res.data.message}</span>);
                        setTimeout(() => {
                            pwdToggle(false);
                        }, 2000);
                    } else {
                        setpwdMsg(<span className="msgText errorMsg">{res.data.message}</span>);
                    }
                }).catch((error) => console.error(`Error: ${error}`));
            }
        }
    }

    //check FormValidation
    const check_FormValidation = () => {
        if (currPwdValue === "") { setold_password_error("Enter old password"); } else { setold_password_error(""); }
        if (newPwdValue === "") { setnew_password_error("Enter New password"); } else { setnew_password_error(""); }
        if (confirmPwdValue === "") { setconfirm_password_error("Enter Confirm password"); } else { setconfirm_password_error(""); }
    }

    const [fNamemodal, setFNameModal] = useState(false);
    const fNametoggle = () => {
        setFNameModal(!fNamemodal);
        setFullnamemsg("");
    };

    const [mobilemodal, setmobileModal] = useState(false);
    const mobiletoggle = () => {
        setmobileModal(!mobilemodal);
        setMobilemsg("");
    };

    const [whtappmodal, setwhtappModal] = useState(false);
    const whtapptoggle = () => {
        setwhtappModal(!whtappmodal);
        setWhtsNomsg("");
    };

    const [billindAddmodal, setBillindAddModal] = useState(false);
    const billindAddtoggle = () => {
        setBillindAddModal(!billindAddmodal);
        setBillingAdMsg("");
    };

    const [emailModal, setemailModal] = useState(false);
    const emailToggle = () => {
        setemailModal(!emailModal);
        setEmailMsg("");
    };

    const [pwdModal, setPwdModal] = useState(false);
    const pwdToggle = () => {
        setPwdModal(!pwdModal);
        setpwdMsg("");
        setpasswordValueMsg("")
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: IntlTelInputCss }}></style>
            <style dangerouslySetInnerHTML={{ __html: ReactToastifyCss }}></style>
            <style dangerouslySetInnerHTML={{ __html: profileCss }}></style>

            <div className="profile">
                <h2 className="title">profile</h2>
                <div className="bg-white">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="profilePicture">
                                        <h3 className="innerTitle">Profile Picture</h3>
                                        <div className="d-flex align-content-center justify-content-center profileBlock">
                                            <div className="updateProfile">
                                                <input type="file" onChange={profileFileType} />
                                                <img
                                                    src={
                                                        userProfile && userProfile === ""
                                                            ? "./dummy-profile.webp"
                                                            : userProfile
                                                    }
                                                    onError={imgNotFound}
                                                    alt="Profile Picture"
                                                    className="profileImg"
                                                    id="output"
                                                    title="NoFound"
                                                />

                                                <span className="edit">
                                                    <img src="./order/editIcon.svg"  title="Edit" alt="update icon" />
                                                </span>
                                            </div>
                                            <div className="updateProfileLink" onClick={profileImgUpload}>
                                                Update
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="profilePicture">
                                        <h3 className="innerTitle">Member Level</h3>
                                        <div className="updateProfile">
                                            <div className="d-flex align-content-center justify-content-center profileBlock">
                                                { leveldata &&
                                                    <>
                                                        {(function () {
                                                            if (leveldata.user_level === "Blue") {
                                                                return <><img src="./order/blueLevel.svg" title="Blue" alt="Blue Level" className="blueLevelImg" />
                                                                    <div className="bluelevelText">blue</div></>
                                                            }
                                                            else if (leveldata.user_level === "Silver") {
                                                                return <><img src="./order/silverLevel.svg" title="Blue" alt="Blue Level" className="silverLevelImg" />
                                                                    <div className="silverlevelText">Silver</div></>
                                                            }
                                                            else if (leveldata.user_level === "Gold") {
                                                                return <><img src="./order/goldLevel.svg" title="Gold" alt="Gold Level" className="goldLevelImg" />
                                                                    <div className="goldlevelText">Gold</div></>
                                                            }
                                                            else if (leveldata.user_level === "Vip") {
                                                                return <><img src="./order/vipLevel.svg"  title="Vip" alt="Vip Level" className="vipLevelImg" />
                                                                    <div className="viplevelText">Vip</div></>
                                                            }
                                                        })()}
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="editprofile">
                                <div className="profilePicture">
                                    <h3 className="innerTitle">Signin &amp; Security</h3>
                                    <div className="editprofileInner">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <div className="inputBox">
                                                <input type="email" className="form-control" value={emailValue} disabled={true} />
                                                <span className="edit" onClick={(emailToggle)}>
                                                    <img title="Update" src="./order/editIcon.svg" alt="update icon" />
                                                </span>
                                            </div>
                                            <Modal isOpen={emailModal} toggle={emailToggle} centered className="profile">
                                                <ModalBody className="profilePicture">
                                                    <div className="editprofileInner p-0">
                                                        <h3 className="modalTitle text-center">Update Your Email</h3>
                                                        <div className="form-group">
                                                            <label>email</label>
                                                            <div className="inputBox">
                                                                <input type="text" placeholder="Enter Email" className="form-control" onChange={emailHandler} value={emailValue} />
                                                                {emailError ? <> <p className="errorMsg">{emailError}</p> </> : null}
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>verify password</label>
                                                            <div className="inputBox">
                                                                <input type="password" className="form-control" value={pwdValue} onChange={pwdHandler} />
                                                            </div>
                                                        </div>
                                                        {emailMsg}
                                                        <div className="modalBtn text-end mt-5">
                                                            <button className="btn outline-btn" onClick={emailToggle}> Cancel </button>
                                                            <button type="button" className="btn theme-btn" onClick={emailUpdate}> Save </button>
                                                        </div>
                                                    </div>
                                                </ModalBody>
                                            </Modal>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <div className="inputBox">
                                                <input type="password" value="" placeholder="Enter Password" className="form-control" disabled={isEdit === true ? false : true} />
                                                <span className="edit" onClick={pwdToggle}>
                                                    <img title="Edit" src="./order/editIcon.svg" alt="update icon" />
                                                </span>
                                            </div>

                                            <Modal
                                                isOpen={pwdModal}
                                                toggle={pwdToggle}
                                                centered
                                                className="profile">
                                                <ModalBody className="profilePicture">
                                                    <div className="editprofileInner p-0">
                                                        <h3 className="modalTitle text-center">
                                                            Update Your Password
                                                        </h3>
                                                        <div className="form-group">
                                                            <label>Current Password</label>
                                                            <div className="inputBox">
                                                                <input type="password" value={currPwdValue && currPwdValue} id="oldPassword" className="form-control" onChange={currPwdHandle} />
                                                                {old_password_error ? <p className="errorMsg">{old_password_error}</p> : null}
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>New password</label>
                                                            <div className="inputBox">
                                                                <input type="password" value={newPwdValue && newPwdValue} id="newPassword" className="form-control" onChange={newPwdHandle} />
                                                                {new_password_error ? <p className="errorMsg">{new_password_error}</p> : null}
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Confirm New password</label>
                                                            <div className="inputBox">
                                                                <input
                                                                    type="password"
                                                                    value={confirmPwdValue && confirmPwdValue}
                                                                    className="form-control"
                                                                    onChange={confirmPwdHandle}
                                                                />
                                                                {confirm_password_error ? <p className="errorMsg">{confirm_password_error}</p> : null}
                                                            </div>
                                                        </div>
                                                        {currPwdValue === newPwdValue ? passwordValueMsg : pwdMsg}
                                                        <div className="modalBtn text-end mt-5">
                                                            <button className="btn outline-btn" onClick={pwdToggle}>
                                                                Cancel
                                                            </button>
                                                            <button type="button" className="btn theme-btn" onClick={pwdUpdate}>
                                                                Save
                                                            </button>
                                                        </div>
                                                    </div>
                                                </ModalBody>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="editprofile ps-md-3 mt-0">
                                <div className="profilePicture">
                                    <h3 className="innerTitle">general Details</h3>
                                    <div className="editprofileInner">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <div className="inputBox">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={firstName + " " + lastname}
                                                    disabled={isEdit === true ? false : true}
                                                />
                                                <span className="edit" onClick={fNametoggle}>
                                                    <img title="Edit"  src="./order/editIcon.svg" alt="update icon" />
                                                </span>
                                                <Modal
                                                    isOpen={fNamemodal}
                                                    toggle={fNametoggle}
                                                    centered
                                                    className="profile"
                                                >
                                                    <ModalBody className="profilePicture">
                                                        <div className="editprofileInner p-0">
                                                            <h3 className="modalTitle text-center">
                                                                Update Full Name
                                                            </h3>
                                                            <div className="form-group">
                                                                <label>Firstname</label>
                                                                <div className="inputBox">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        onChange={firstNameHandler}
                                                                        defaultValue={firstName}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Lastname</label>
                                                                <div className="inputBox">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        onChange={lastNameHandler}
                                                                        defaultValue={lastname}
                                                                    />
                                                                </div>
                                                            </div>
                                                            {fullnamemsg}
                                                            <div className="modalBtn text-end mt-5">
                                                                <button className="btn outline-btn" onClick={fNametoggle}> Cancel </button>
                                                                <button type="button" className="btn theme-btn" onClick={updateName}> Save </button>
                                                            </div>
                                                        </div>
                                                    </ModalBody>
                                                </Modal>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Mobile</label>
                                                    <div className="inputBox">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={prefix + " " + telephone}
                                                            disabled={isEdit === true ? false : true}
                                                        />
                                                        <span className="edit" onClick={mobiletoggle}>
                                                            <img src="./order/editIcon.svg" title="Edit"  alt="update icon" />
                                                        </span>
                                                        <Modal isOpen={mobilemodal} toggle={mobiletoggle} centered className="profile">
                                                            <ModalBody className="profilePicture">
                                                                <div className="editprofileInner p-0">
                                                                    <h3 className="modalTitle text-center">Update Mobile Number</h3>
                                                                    <div className="inputBox">
                                                                        {curCountry === 0 ?
                                                                            <><IntlTelInput
                                                                                value={telephone && telephone}
                                                                                onPhoneNumberChange={onPhoneChange}
                                                                                onSelectFlag={onFlagClick}
                                                                                containerClassName="intl-tel-input"
                                                                                inputClassName="form-control"
                                                                                separateDialCode={true}
                                                                            /></> :
                                                                            <> <IntlTelInput
                                                                                value={telephone && telephone}
                                                                                preferredCountries={[curCountry]}
                                                                                onPhoneNumberChange={onPhoneChange}
                                                                                onSelectFlag={onFlagClick}
                                                                                containerClassName="intl-tel-input"
                                                                                inputClassName="form-control"
                                                                                separateDialCode={true}
                                                                            /></>}
                                                                    </div>
                                                                    {mobileError}
                                                                    <div className="modalBtn text-end mt-5">
                                                                        <button className="btn outline-btn" onClick={mobiletoggle}>Cancel</button>
                                                                        <button type="submit" className="btn theme-btn" onClick={mobileNoUpdate}>Save</button>
                                                                    </div>
                                                                </div>
                                                            </ModalBody>
                                                        </Modal>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>
                                                        WhatsApp <span>(Optional)</span>
                                                    </label>
                                                    <div className="inputBox">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={whtsNoUpdate}
                                                            disabled={isEdit === true ? false : true}
                                                        />
                                                        <span className="edit" onClick={whtapptoggle}>
                                                            <img
                                                                src="./order/editIcon.svg"
                                                                alt="update icon"
                                                                title="Edit" 
                                                            />
                                                        </span>
                                                    </div>
                                                    <Modal
                                                        isOpen={whtappmodal}
                                                        toggle={whtapptoggle}
                                                        centered
                                                        className="profile"
                                                    >
                                                        <ModalBody className="profilePicture">
                                                            <div className="editprofileInner p-0">
                                                                <h3 className="modalTitle text-center">
                                                                    Update Whatsapp Number
                                                                </h3>
                                                                <div className="form-group">
                                                                    <label>Whatsapp Number</label>
                                                                    <div className="inputBox">
                                                                        <input
                                                                            id="whtsappNoInput"
                                                                            type="number"
                                                                            className="form-control"
                                                                            onChange={whtsappHandler}
                                                                            defaultValue={whtsNoUpdate}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                {WhtsNomsg}
                                                                <div className="modalBtn text-end mt-5">
                                                                    <button
                                                                        className="btn outline-btn"
                                                                        onClick={whtapptoggle}
                                                                    >
                                                                        Cancel
                                                                    </button>
                                                                    <button
                                                                        type="submit"
                                                                        className="btn theme-btn"
                                                                        onClick={updateWhtsNo}
                                                                    >
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </ModalBody>
                                                    </Modal>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0">
                                            <label>
                                                Billing Address <span>(Optional)</span>
                                            </label>
                                            <div className="inputBox mb-3">
                                                <textarea
                                                    value={
                                                        addressVal + ", " + cityVal + ", " + stateVal + ", " + countryVal
                                                    }
                                                    rows="3"
                                                    className="form-control"
                                                    disabled={isEdit === true ? false : true}
                                                ></textarea>
                                                <span className="edit" onClick={billindAddtoggle}>
                                                    <img src="./order/editIcon.svg" title="Edit"  alt="update icon" />
                                                </span>
                                                <Modal
                                                    isOpen={billindAddmodal}
                                                    toggle={billindAddtoggle}
                                                    centered
                                                    className="profile"
                                                >
                                                    <ModalBody className="profilePicture">
                                                        <div className="editprofileInner p-0">
                                                            <h3 className="modalTitle text-center">
                                                                Update Your Billing Address
                                                            </h3>
                                                            <div className="form-group">
                                                                <label>Country</label>
                                                                <div className="inputBox">
                                                                    <div className="row">
                                                                        <div className="col-md-4">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                onChange={ctyCodeHandler}
                                                                                defaultValue={isoCodeVal}
                                                                                placeholder="Country code"
                                                                            />
                                                                        </div>
                                                                        <div className="col-md-8">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                defaultValue={countryVal}
                                                                                onChange={ctyHandler}
                                                                                placeholder="Enter Your country"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>State</label>
                                                                <div className="inputBox">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        defaultValue={stateVal}
                                                                        onChange={stateHandler}
                                                                        placeholder="Enter Your state"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>City</label>
                                                                <div className="inputBox">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        defaultValue={cityVal}
                                                                        onChange={cityHandler}
                                                                        placeholder="Enter Your city"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Zip Code</label>
                                                                <div className="inputBox">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        defaultValue={postCodeVal}
                                                                        onChange={zipCHandler}
                                                                        placeholder="Enter Your zip code"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Street</label>
                                                                <div className="inputBox">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        onChange={streetHandler}
                                                                        defaultValue={addressVal}
                                                                        placeholder="Enter Your Street"
                                                                    />
                                                                </div>
                                                            </div>
                                                            {billingAdMsg}
                                                            <div className="modalBtn text-end mt-5">
                                                                <button
                                                                    className="btn outline-btn"
                                                                    onClick={billindAddtoggle}
                                                                >
                                                                    Cancel
                                                                </button>
                                                                <button
                                                                    type="submit"
                                                                    className="btn theme-btn"
                                                                    onClick={updateBillingAdd}
                                                                >
                                                                    Save
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </ModalBody>
                                                </Modal>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </>
    );
}
export default Profile;