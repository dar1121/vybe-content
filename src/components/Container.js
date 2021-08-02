import React from 'react';
import { Text, LanguageContext } from '../context/Language';


export default class Container extends React.Component {
    render() {
        return <div class="container">

            <div class="hero-intro">

                <div class="row ">
                    <div class="two columns"> &nbsp;</div>
                    <div class="four columns">
                        <img class="u-max-full-width">
                        </img>
                    </div>

                    <div class="five columns vertical-margin">
                        <h1 class="uppercase extra-top-margin ">
							<Text tid="containerHeroHeading" />
						</h1>
                        <br />
                        <p>
                            <Text tid="containerHeroP1" />
                        </p><br /><p>
                            <Text tid="containerHeroP2" />
                        </p>
                        <br />
                    </div>
                </div>

                <div class="row ">
                    <div class="one-third column">&nbsp;</div>
                    <div class="one-third column explore aligncenter extra-top-margin">
                        <h4 class="black uppercase">
                        <Text tid="containerHeroExplore" />
                        </h4>

                    </div>
                </div>
            </div>

            <div class="our-mission fixed-bg">
                <div class="section-title">
                    <Text tid="containerOurMission" />
                </div>



                <div class="row ">
                    <div class="six columns offset-by-five">
                        <h1 class="our-mission-h1">
                            <Text tid="containerOurMissionHeading" />
                        </h1>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="three columns offset-by-five">
                        <p>
                            <Text tid="containerOurMissionP1" />
                        </p>
                    </div>

                    <div class="three columns">
                        <p>
                            <Text tid="containerOurMissionP2" />
                        </p>

                    </div>
                </div>
            </div>

            <div class="our-core-values fixed-bg">
                <div class="section-title">
                    <Text tid="containerOurCoreValues" />
                </div>
                <div class="our-core-values-content">


                    <div class="sticky firststicky">
                        <div class="circle firstcircle">

                            <div class="circle-text">
                                <div class="circle-title">
                                    <h1 class="cherry">
                                    <Text tid="containerOurCoreValues1Heading" />
                                </h1>
                                </div>
                                <Text tid="containerOurCoreValues1P" />                          
                            </div>
                        </div>

                        <div class="spaceholder">
                        </div>
                    </div>

                    <div class="sticky">
                        <div class="circle">

                            <div class="circle-text">
                                <div class="circle-title">
                                    <h1 class="cherry">
                                        <Text tid="containerOurCoreValues2Heading" />
                                    </h1>
                                </div>
                                <Text tid="containerOurCoreValues2P" />
                            </div>
                        </div>
                        <div class="spaceholder">
                        </div>
                    </div>

                    <div class="sticky">
                        <div class="circle">

                            <div class="circle-text">
                                <div class="circle-title">
                                    <h1 class="cherry">
                                    <Text tid="containerOurCoreValues3Heading" />
                                    </h1>
                                </div>
                            <Text tid="containerOurCoreValues3P" />                           
                        </div>
                        </div>
                        <div class="spaceholder">
                        </div>
                    </div>

                    <div class="sticky laststicky">
                        <div class="circle">

                            <div class="circle-text">
                                <div class="circle-title">
                                    <h1 class="cherry">
                                        <Text tid="containerOurCoreValues4Heading" />                      
                                    </h1>
                                </div>
                                <Text tid="containerOurCoreValues4P" />
                            </div>
                        </div>
                        <div class="spaceholder">
                        </div>

                    </div>


                </div>
            </div>

            <div class="our-space fixed-bg">
                <div class="section-title"><Text tid="containerOurSpace" /></div>

                <div class="row">
                    <div class="one columns">&nbsp;</div>
                    <div class="three columns">
                        <img class="u-max-full-width" src="/assets/images/Ourspace_img1.png"></img>
                    </div>

                    <div class="one columns">&nbsp;</div>

                    <div class="six columns">
                        <h3 class="alignright"><Text tid="containerOurSpaceTagline1" /> <i><Text tid="containerOurSpaceTagline1Em" /></i></h3>

                        <img class="u-max-full-width extra-top-margin" src="/assets/images/Ourspace_img2.png"></img>

                        <p> <h5><Text tid="containerOurSpaceCaption1H" />:</h5>
                            <Text tid="containerOurSpaceCaption1" />
                        </p>
                    </div>
                </div>

                <div class="row extra-top-margin">
                    <div class="one columns">&nbsp;</div>
                    <div class="five columns">
                        <img class="u-max-full-width" src="/assets/images/Ourspace_img3.png"></img>
                        <p>
                            <Text tid="containerOurSpaceCaption2" />
                        </p>
                    </div>
                    <div class="one columns">&nbsp;</div>
                    <div class="four columns">
                        <img class="u-max-full-width" src="/assets/images/Ourspace_img4.png"></img>
                        <p>
                            <Text tid="containerOurSpaceCaption3" />
                        </p>
                    </div>
                </div>

                <div class="row extra-top-margin">
                    <div class="one columns">&nbsp;</div>

                    <div class="three columns">
                        <h3 class="alignleft"><i><Text tid="containerOurSpaceTagline2Em" /></i> <Text tid="containerOurSpaceTagline2" /></h3>
                        <img class="u-max-full-width extra-top-margin" src="/assets/images/Ourspace_img5.png"></img>
                    </div>

                    <div class="one columns"> &nbsp; </div>

                    <div class="six columns">
                        <img class="u-max-full-width" src="/assets/images/Ourspace_img6.png"></img>
                        <p> <h5><Text tid="containerOurSpaceCaption4H" />:</h5><Text tid="containerOurSpaceCaption4" />
                        </p>
                    </div>
                </div>

                <div class="row extra-top-margin">
                    <div class="one columns">&nbsp;</div>
                    <div class="six columns">
                        <img class="u-max-full-width extra-top-margin" src="/assets/images/Ourspace_img7.png"></img>
                        <p><Text tid="containerOurSpaceCaption5" /></p>
                    </div>
                    <div class="one columns">&nbsp;</div>
                    <div class="three columns">

                        <img class="u-max-full-width" src="/assets/images/Ourspace_img8.png"></img>
                        <p> <h5><Text tid="containerOurSpaceCaption6H" />:</h5>
                        <Text tid="containerOurSpaceCaption6" /></p>
                    </div>

                </div>
            </div>


            <div class="our-app fixed-bg">
                <div class="section-title">
                <Text tid="containerOurApp" />
                </div>

                <div class="row extra-top-margin">
                    <div class="one columns">&nbsp;</div>
                    <div class="app-download-container six columns">
                        <div class="our-app-headline">
                            <h1 class="uppercase"><Text tid="containerOurAppHeading" />
                            </h1>
                        </div>
                        <div class="our-app-description">
                            <p><Text tid="containerOurAppP" />
                            </p>
                        </div>
                        <div class="app-download-button">
                            <button class="download-app"><Text tid="containerOurAppButton" /></button>
                        </div>
                        <div class="app-download-qr">
                            <img class="u-max-full-width" src="assets/images/App-qr.png"></img>
                        </div>
                    </div>
                    <div class="four columns our-app-img">
                        <img class="u-max-full-width" src="/assets/images/Ourapp-img1.png"></img>
                    </div>

                </div>
            </div>
            <div id="our-languages" class="our-languages fixed-bg">
                <div class="section-title">
                <Text tid="containerOurLanguages" />
                </div>

                <div class="row">
                    <div class="one columns">&nbsp;</div>
                    <div class="five columns">
                        <h1 class="uppercase"><Text tid="containerOurLanguages" /></h1>
                    </div>
                </div>

                <div class="row vertical-margin">
                    <div class="one columns">&nbsp;</div>
                    <div class="three columns">
                    <Text tid="containerOurLanguagesP" />
                    </div>
                </div>

                <div class="row">
                    <div class="two columns"> &nbsp; </div>
                    <div class="course-card english-card four columns">
                        <h2 class="uppercase"><Text tid="containerOurLanguagesEnglishH" /></h2>
                        <p>
                            <Text tid="containerOurLanguagesEnglishP" />
                        </p>
                        <a href="/english" class=" button uppercase language-button"><Text tid="containerOurLanguagesJoinNow" /></a>
                    </div>
                    <div class="course-card mandarin-card four columns">
                        <h2 class="uppercase"><Text tid="containerOurLanguagesChineseH" /></h2>
                        <p>
                        <Text tid="containerOurLanguagesChineseP" />
                        </p>
                        <a href="/chinese" class=" button uppercase language-button"><Text tid="containerOurLanguagesJoinNow" /></a>

                    </div>
                </div>
            </div>



        </div>
    }
}

