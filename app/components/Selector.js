import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SelectRegion (props) {
	const regionCountry = {
		"Europe": {
			"PL": "Poland",
			"HU": "Hungary",
			"DE": "Germany",
			"AT": "Austria",
			"DK": "Denmark", 
			"ES": "Spain", 
			"GR": "Greece",
			"IT": "Italy",
			"CH": "Switzerland",
			"RU": "Russia",
			"FR": "France",
			"BE": "Belgium",
			"LU": "Luxembourg",
			"SE": "Sweden",
			"NO": "Norway",
			"SI": "Slovenia",
			"LT": "Lithuania",
			"CY": "Cyprus",
			"LV": "Latvia",
			"BG": "Bulgaria",
			"HR": "Croatia",
			"GB": "United Kingdom",
			"IE": "Ireland",
			"GE": "Georgia",
			"RO": "Romania",
			"FI": "Finland",
			"NL": "Netherlands",
			"ME": "Montenegro"

		},
		"Americas": {
			"CA": "Canada",
			"US": "USA",
			"MX": "Mexico",
			"BR": "Brazil",
			"CL": "Chile",
			"AR": "Argentina",
			"CO": "Columbia",
			"UY": "Uruguay"
		},
		"APAC": {
			"AU": "Australia",
			"NZ": "New Zealand",
			"KZ": "Kazakhstan",
			"JP": "Japan",
			"TH": "Thailand",
			"TW": "Taiwan"
		},
		"Middle East & Africa": {
			"IL": "Israel",
			"TR": "Turkey",
			"AE": "UAE",
			"SA": "South Africa"
		}
	}

	return (
		<ul className="regions">
			{Object.keys(regionCountry).map((region) => {
				return(
					<li
					style={region === props.selectedRegion ? {color: '#d0021b'} : null}
					onClick={props.onSelect.bind(null, region, regionCountry[region])}
	            	key={region} >
	            		{region}
            		</li>
            	)
			})}
        </ul>
	)
}

function CountryList(props) {
    return (
        <ul className="country-list">
            {
                Object.keys(props.countryCodes).map((key) => {
                    return (
                        <li
                            key={ key }
                            className="country-item" >
                            <div className="country-code">
                            	<Link 
                            		to={{
                            			pathname: '/countries',
                            			search: '?country=' + key
                            		}}>
                            			{key}
                            	</Link>
                            </div>
                            <ul className="space-list-items">
                                <li>
                                    <img
                                        className="flag"
                                        src={"http://www.geognos.com/api/en/countries/flag/"+key+".png"}
                                        alt={"Flag for " + props.countryCodes[key]}
                                    />
                                </li>
                            </ul>
                        </li>
                    );
                })

            }
        </ul>
    )
}

SelectRegion.propTypes = {
	selectedRegion: PropTypes.string,
	onSelect: PropTypes.func.isRequired
}

CountryList.propTypes = {
	countryCodes: PropTypes.object.isRequired
}

class Selector extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedRegion: null,
			countryCodes: null
		}

		this.updateRegion = this.updateRegion.bind(this);
		this.updateCountries = this.updateCountries.bind(this);
		this.updateBoth = this.updateBoth.bind(this);
	}

	updateRegion(region) { selectedRegion: region }

	updateCountries(countries) { countryCodes: countries }

	updateBoth(updateRegion, updateCountries) {
		this.setState(() => {
			return {
				selectedRegion: updateRegion,
				countryCodes: updateCountries
			}
		})
	}

	render() {
		return (
			<div>
				<SelectRegion 
					selectedRegion={this.state.selectedRegion} 
					onSelect={this.updateBoth} />
				{ !this.state.countryCodes
					? <h1 className="centered-text">Select a region</h1>
					: <CountryList countryCodes={this.state.countryCodes} /> }
			</div>
		)
	}
}

export default Selector;