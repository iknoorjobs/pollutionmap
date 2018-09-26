import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

var L = window.L;
var $ = window.$;

const styles = theme => ({
	big: {
		height: '100%',
		width: '100%',
	}
});

class PollutionToday extends Component {
	state = { pm25: null, airquality: null };
	renderMap = () => {
	  	const { classes } = this.props;
	  	var mymap = L.map('mapid').setView([28.4880472, 77.0653845], 14);
	  	mymap.options.maxZoom = 15;
	  	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			}).addTo(mymap);
	  	L.Control.geocoder().addTo(mymap);
	  	var th = this;
	  	mymap.on('layeradd', function(ev) {
	  		let latlng = ev.layer.getLatLng();
    		$.get(`http://api.airpollutionapi.com/1.0/aqi?lat=${latlng.lat}&lon=${latlng.lng}&APPID=97q682anvetpkc298jgmjgdb64`, (e) => {
    			let params = (e.data.aqiParams);
    			for(let i = 0; i < params.length; i++) {
    				if (params[i].name == 'PM2.5') {
    					th.setState({ pm25: params[i].value, airquality: e.data.alert });
    					break;
    				}
    			}
    		});
    		document.getElementsByClassName('leaflet-marker-icon')[0].addEventListener('click', (ev) => {
    			$('#myModal').modal('show');
    			$('.modal-backdrop').remove();
    		});
		});
	  }

	componentDidMount() {
		this.renderMap();
	}
  	render() {
    	const { classes } = this.props;
    	return (
      		<div className={classes.big}>
      			<div id="myModal" className="modal" role="dialog">
				  <div className="modal-dialog">

				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h4 className="modal-title">Forecast Data</h4>
				      </div>
				      <div className="modal-body">
				        <p><b>PM2.5 Conc. </b>{this.state.pm25}</p>
				        <hr/>
				        {this.state.airquality}
				        <hr/>
				        <center><img src="/static/img/graph1.png" style={{ height: 'auto' }} width={500} alt="err" />
				        (tomorrow)</center>
				        <center><img src="/static/img/graph2.png" style={{ height: 'auto' }} width={500} alt="err" />
				        (tomorrow)</center>
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
				      </div>
				    </div>

				  </div>
				</div>
      			<div id="mapid" className={classes.big}></div>
      		</div>
    	);
  	}
}

export default withStyles(styles, { withTheme: true })(PollutionToday);
