import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Skeleton from 'react-skeleton-loader'; // Do not remove. Styles are being used.
import Img from 'react-image';
import Label from '@material-ui/icons/Label';

const styles = theme => ({
  title: {
  	color: '#424242',
  },
  flexParent: {
  	color: 'grey',
  	display: 'flex',
  	alignItems: 'center',
  	width: '100%',
  },
  skeleton: {
  	width: "95%",
  	margin: "5%",
  	paddingTop: "85%",
  	borderRadius: "8px",
  	backgroundColor: "rgb(239, 241, 246)",
  },
  heading: {
  	color: 'white',
  	backgroundColor: "#424242",
  	paddingLeft: "5px",
  	paddingRight: "5px",
  	borderRadius: "10px",
  },
});

class Home extends Component {
	state = { chk: 'item1' };

	changeHandler = (e) => {
		this.setState({ chk: e.target.name });
	}

	render() {
		const { classes } = this.props;
		const load = <div className={`react-skeleton-load animated ${classes.skeleton}`} />;
		return (
			<div>
				
				<input type="radio" name="item1" checked={this.state.chk == "item1"} id="section1" onClick={this.changeHandler} />
				<input type="radio" name="item2" checked={this.state.chk == "item2"} id="section2" onClick={this.changeHandler} />
				<input type="radio" name="item3" checked={this.state.chk == "item3"} id="section3" onClick={this.changeHandler} />
				<input type="radio" name="item4" checked={this.state.chk == "item4"} id="section4" onClick={this.changeHandler} />
				<input type="radio" name="item5" checked={this.state.chk == "item5"} id="section5" onClick={this.changeHandler} />
				<input type="radio" name="item6" checked={this.state.chk == "item6"} id="section6" onClick={this.changeHandler} />
				<input type="radio" name="item7" checked={this.state.chk == "item7"} id="section7" onClick={this.changeHandler} />
				<input type="radio" name="item8" checked={this.state.chk == "item8"} id="section8" onClick={this.changeHandler} />
				<input type="radio" name="item9" checked={this.state.chk == "item9"} id="section9" onClick={this.changeHandler} />
				<nav className="nav">
				  <label className="nav__item" htmlFor="section1"></label>
				  <label className="nav__item" htmlFor="section2"></label>
				  <label className="nav__item" htmlFor="section3"></label>
				  <label className="nav__item" htmlFor="section4"></label>
				  <label className="nav__item" htmlFor="section5"></label>
				  <label className="nav__item" htmlFor="section6"></label>
				  <label className="nav__item" htmlFor="section7"></label>
				  <label className="nav__item" htmlFor="section8"></label>
				  <label className="nav__item" htmlFor="section9"></label>
				</nav>
				<section>
				<div className="description">
				  			<p>
				  				"A guide to getting around city in the healthiest way possible by dodging air pollution."
				  			</p>
				  		</div>

				      	<div className="content" style={{marginLeft: '40px'}}>
			              	<div className="content-center">
				                  <div className="wrapper">
			                  <a onClick={() => this.props.history.push('/map/')} style={{textDecoration: 'none'}}>
				                    <div className="title grow" style={{color: 'red',  width: '400px', fontSize: '60px', textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', letterSpacing: '.1em', cursor: 'pointer'}}>FIND WAY</div>
				                  </a>

				                  <br/> <br/> <br/>

				                  <a onClick={() => this.props.history.push('/forecast/')} style={{textDecoration: 'none'}}>
				                    <div className="title grow" style= {{backgroundColor: 'red', color: 'white', width: '400px', fontSize: '60px', textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', letterSpacing: '.1em', cursor: 'pointer'}}>PREDICT</div>
				                  </a>

				                  </div>
			              	</div>
			          	</div>
				</section>

				<section>
				  <h2>"Air pollution causes more deaths than car crashes every year." - UN Survey</h2>
				</section>

				<section>
				  <h2>Existing Products : Google Maps take time and distance as a constraint to calculate the path. But they don't care about Pollution.</h2><br/>
				</section>

				<section className="wrapper">
				  <h2><strong><b>WE DO!</b></strong>
				  <br/>	
				  Our app will take Air Pollution as a constraint to compute the least polluted optimum path from one place to another. This will be calculated based on the real time data recieved.<br/><br/>
				  We have divided the map into hexagonal areas and devised an algorithm to calculate the least polluted path. </h2>
				</section>

				<section>
				  <img src="/static/img/main_screen.png" style={{ height: '100%', width: '100%' }} alt="err" />
				</section>

				<section>
				  <h2>Forecast the pollution level using time series analysis.<br/>Alert you on days when pollution is forecast to be high.</h2>
				</section>

				<section>
				  <img src="/static/img/graph1.png" className="half_image" alt="err"/>
				  <img src="/static/img/graph2.png" className="half_image" alt="err"/>
				</section>

				<section>
					<h2>
					In this choked up world, any way to reduce one's exposure to pollution is worth the while.<br/>
					Even if you can't choose the least polluted route every time, its good to know which routes have consistently toxic air, as small regular changes can add up to major health benefits.
					</h2>
				</section>
				<section>
					<video width="71%" controls>
    					<source src="/static/demo.mp4" type="video/mp4" />
					</video>
				</section>
				<div className="cover"></div>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Home);