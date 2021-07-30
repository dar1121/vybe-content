import React from 'react';
import { Text, LanguageContext } from '../context/Language';

export default class Careers extends React.Component {
	render() {
		return <div class="container">
			<div class="careers fixed-bg">
				<div class="row">
					<div class="one columns">&nbsp;</div>
					<div class="four columns">
						<h1 class="uppercase"><Text tid="careersHeader" /></h1>
					</div>

					<div class="four columns">
						<p>
							<Text tid="careersP1" />
						</p>
						<br/>
						<p>
							<Text tid="careersP2" />
						</p>
					</div>
				</div>
				<div class="row extra-top-margin">
					<div class="five columns">&nbsp;</div>
					<div class="six columns">
						<img class="u-max-full-width" src="/assets/images/Careers_img1.png">
						</img>
					</div>
				</div>
				<div class="row extra-top-margin">
					<div class="one columns">&nbsp;</div>
					<div class="three columns">
						<img class="u-max-full-width" src="/assets/images/Careers_img2.png">
						</img>
					</div>
					<div class="one columns">&nbsp;</div>
					<div class="four columns">
						<h1 class="uppercase">
							<Text tid="careersAboutHeading" />
						</h1>
						<p class="extra-top-margin">
							<Text tid="careersAboutP1" />
						</p>
						<br />
						<p>
							<Text tid="careersAboutP2" />
						</p>

					</div>
				</div>

			</div>
			<div class="positions fixed-bg">

				<div class="row">
					<div class="five columns"> &nbsp;</div>
					<div class="five columns">
						<h5><Text tid="careersCategory1" /></h5>
					</div>
				</div>

				<div class="row n extra-top-margin vertical-margin">
					<div class="three columns"> &nbsp; </div>
					<div class="two columns">
						<p class="uppercase">
							<Text tid="position1Date" />
						</p>
					</div>
					<div class="six columns">
						<h1 class="uppercase">
							<Text tid="position1Title" />
						</h1>
						<h3>
							<Text tid="position1Location" />
						</h3>
					</div>
				</div>

				<div class="row extra-top-margin">
					<div class="one columns"> &nbsp; </div>

					<div class="ten columns">
						<div class="positions-card extra-top-margin">
							<h1 class="uppercase">
								<Text tid="Haven't found your perfect role?" />
							</h1>
							<h1 class="uppercase">
								<Text tid="careersSendCV" />
							</h1>
							<button class="open-apply-button">
								<Text tid="careersApplyNow" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}