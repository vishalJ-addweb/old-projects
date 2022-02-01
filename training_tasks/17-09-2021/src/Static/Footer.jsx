import React from 'react';
import styles from '../Styling/Footer.module.css';
import logo from '../Images/footer-bookmyshow-logo.png';

export default function Footer() {
    return (
        <div>
            <div className={styles.privacy_policy}>
                <div>Privacy Note</div>
                <div>
                    By using www.bookmyshow.com(our website), you are fully accepting the
                    Privacy Policy available at  governing your access to Bookmyshow
                    and provision of services by Bookmyshow to you. If you do not accept
                    terms mentioned in the <a href="/privacy">Privacy Policy</a>,
                    ou must not share any of your personal information and immediately
                    exit Bookmyshow.
                </div>
            </div>
            <div className={styles.contact}>
                <div>
                    <div style={{ fontSize: '20px', marginRight: '30px' }}>List Your Show</div>
                    <div>Got a show, event, activity or a great experience? Partner
                        with us &amp; get listed on BookMyShow
                    </div>
                </div>
                <div className={styles.contact_button}>
                    <button>Contact Today!</button>
                </div>
            </div>
            <div className={styles.customer_care}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102" id="icon-callcenter" width="100%" height="100%"><path d="M68.8 29.4c0-10.4-8.4-18.8-18.8-18.8S31.2 19 31.2 29.4 39.6 48.2 50 48.2s18.8-8.4 18.8-18.8zm-35.8 0c0-9.3 7.6-17 17-17 9.3 0 17 7.6 17 17 0 9.3-7.6 17-17 17-9.3 0-17-7.6-17-17z"></path><path d="M24 30.3c.5 0 .9-.4.9-.9C24.9 15.6 36.2 4.3 50 4.3s25.1 11.3 25.1 25.1c0 13.1-10.5 28.3-24.2 29v-3.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v8.6c0 .5.4.9.9.9s.9-.4.9-.9v-2.9c14.7-.7 26-16.8 26-30.8C76.9 14.6 64.8 2.5 50 2.5S23.1 14.6 23.1 29.4c0 .5.4.9.9.9z"></path><path d="M68.1 63c-.6-.2-1.2-.3-1.9-.3-.9 0-2.3.7-4.9 2.1-3.2 1.7-7.7 4-10.6 4-3.2 0-8-2.3-11.5-4-2.8-1.3-4.3-2-5.3-2-.7 0-1.3.1-1.9.3C16.7 68.2 11.2 86 11.2 96.7c0 .5.4.9.9.9H88c.5 0 .9-.4.9-.9 0-10.8-5.6-28.6-20.8-33.7zM13 95.7c.3-12.1 7.2-26.8 19.6-30.9.4-.1.8-.2 1.3-.2.6 0 2.7 1 4.5 1.9 3.9 1.9 8.7 4.2 12.3 4.2 3.3 0 7.8-2.3 11.4-4.2 1.6-.8 3.6-1.9 4.1-1.9s.9.1 1.3.2C79.9 68.9 86.7 83.6 87 95.7H13zm3.6-55.3c.5 0 .9-.4.9-.9V26.3c0-.5-.4-.9-.9-.9s-.9.4-.9.9v13.2c0 .5.4.9.9.9zm66.8 0c.5 0 .9-.4.9-.9V26.3c0-.5-.4-.9-.9-.9s-.9.4-.9.9v13.2c-.1.5.4.9.9.9z"></path></svg>
                    <div>24 x 7 Customer care</div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 102 102" id="icon-resend" width="100%" height="100%"><path d="M92.1 69l-5.6-13.9a1 1 0 0 0-1.1-.5c-1.9.8-4.1-.2-4.8-2.1-.4-.9-.4-1.9 0-2.8.4-.9 1.1-1.6 2-2 .2-.1.4-.2.5-.4s.1-.4 0-.6l-5.6-13.9a1 1 0 0 0-1.1-.5L61 38.5l9-20.9c.2-.4 0-.9-.4-1.1L57 11.1c-.4-.2-.9 0-1.1.4a3.3 3.3 0 0 1-4.3 1.8c-.8-.3-1.4-1-1.8-1.8-.3-.8-.3-1.7 0-2.5.1-.2.1-.4 0-.6-.1-.2-.2-.4-.4-.5L36.8 2.6c-.4-.2-.9 0-1.1.4L12.3 58.2l-3.9 1.5c-.2.2-.4.3-.4.5-.1.2-.1.4 0 .6l5.6 13.9c.2.4.7.6 1.1.5 1.9-.7 4.1.2 4.8 2 .4.9.4 1.9 0 2.8s-1.1 1.6-2 2c-.2.1-.4.2-.5.4-.1.2-.1.4 0 .6l5.4 14c.1.2.2.4.4.5.1 0 .2.1.3.1.1 0 .2 0 .3-.1l68.1-27.3c.5-.2.7-.7.6-1.2zM36.9 4.4L48 9.1c-.2 1-.2 2 .2 3 .5 1.2 1.4 2.2 2.7 2.7 2.3 1 4.8.1 6.1-1.9l11.1 4.7-9.3 21.8-4.7 1.9L59 30.2l2.5-5.8c.1-.2.1-.4 0-.6s-.2-.4-.4-.5L38 13.5c-.2-.1-.4-.1-.6 0-.2.1-.4.2-.5.4L19.1 55.5l-4.7 1.9 22.5-53zm-1.4 16.7l.8.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-.8-.3 1.8-4.3 21.6 9.2-1.8 4.3-.8-.4c-.4-.2-.9 0-1.1.4-.2.4 0 .9.4 1.1l.8.3-5.1 12-30.7 12.4 14.2-33.5zM23.7 95.6l-5-12.4c1-.6 1.7-1.4 2.2-2.5.6-1.3.6-2.8 0-4.1-.8-2-2.8-3.4-5-3.4-.4 0-.8 0-1.2.1L9.8 61l66.5-26.7 5 12.4c-1 .6-1.7 1.4-2.2 2.5a4.9 4.9 0 0 0 0 4.1c.8 2 2.8 3.4 5 3.4.4 0 .8 0 1.2-.1l5 12.4-66.6 26.6z"></path><path d="M70 42.1c-.1-.2-.2-.4-.4-.5-.2-.1-.4-.1-.6 0L20.2 61.2a1 1 0 0 0-.5 1.1L30 87.8c.1.2.2.4.4.5.1 0 .2.1.3.1.1 0 .2 0 .3-.1l42.3-17 6.4-2.6c.4-.2.6-.7.5-1.1L70 42.1zm3.5 27.3l-.3-.8a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l.4.8-34.2 13.7-.3-.7a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l.3.8-5.1 2-9.6-23.9 5.1-2 .3.8c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-.3-.8 34.1-13.7.3.8c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-.3-.8 4.9-2 9.6 23.9-4.9 2.1z"></path><path d="M30.6 65.7c-.2-.4-.7-.6-1.1-.5s-.6.7-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm3.5 8.6a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm32.2-22.9a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm1.9 9.3l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1L69.7 60a1 1 0 0 0-1.1-.5c-.4.2-.6.7-.4 1.2zm-19.5-34l3.1 1.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-3.1-1.3c-.4-.2-.9 0-1.1.4-.3.4-.1.9.4 1.1zm-7.8-3.3l3.1 1.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-3.1-1.3c-.4-.2-.9 0-1.1.4-.2.4 0 .9.4 1.1zm13.4 41.4c-.5 0-.8.4-.8.8 0 2.4-2 4.4-4.4 4.4s-4.4-2-4.4-4.4c0-2.3 1.9-4.2 4.2-4.3l-1.6 2.3c-.3.4-.2.9.2 1.2.1.1.3.1.5.1.3 0 .5-.1.7-.4l2.6-3.7c.3-.4.2-.9-.2-1.1L47.5 57c-.4-.3-.9-.2-1.2.2s-.2.9.2 1.2l1.9 1.4c-3 .3-5.4 2.9-5.4 5.9 0 3.3 2.7 6 6 6s6-2.7 6-6c.1-.5-.3-.9-.7-.9z"></path></svg>
                    <div>Resend booking confirmation</div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" id="icon-newsletter" viewBox="-1 -1 102 102" width="100%" height="100%"><g id="elnewsletter"><path class="elst0" d="M97.5 90.3V33.6c0-.5-.4-1-1-1H82.9V9.8c0-.5-.4-1-1-1H18.1a1 1 0 0 0-1 1v22.8H3.5a1 1 0 0 0-1 1v56.9c0 .1.1.1.1.2v.1c0 .1.1.1.2.1.1.1.2.1.2.1.1 0 .1 0 .2.1h93.4c.1 0 .3 0 .4-.1 0 0 .1 0 .1-.1.1-.1.2-.1.2-.2v-.1c0-.1.1-.1.1-.2.1 0 .1 0 .1-.1zm-1.9-55.7v53.6L63.9 64.1l18.6-17.7 7.7-7.4c.3-.3.4-.7.2-1.1-.1-.4-.5-.6-.9-.6h-6.8v-2.7h12.9zM50.2 56.1l43.4 33.1H6.4l43.8-33.1zm32.7-16.8h4.4l-4.4 4.1v-4.1zM19.1 10.8h61.8v34.5L62.4 62.9l-11.6-8.8c-.3-.3-.8-.3-1.2 0L37.8 63 19.1 45.3V10.8zm-2 32.6l-4.4-4.1h4.4v4.1zm0-8.8v2.7h-6.8c-.4 0-.8.2-.9.6-.1.4-.1.8.2 1.1l26.5 25.2-31.8 24V34.6h12.8z"></path><path class="elst0" d="M28.9 22.5h42.7a1 1 0 0 0 0-2H28.9c-.5 0-1 .4-1 1s.4 1 1 1zm0 10h42.7a1 1 0 0 0 0-2H28.9a1 1 0 0 0 0 2zm0 9.9h42.7a1 1 0 0 0 0-2H28.9c-.5 0-1 .4-1 1s.4 1 1 1z"></path></g></svg>
                    <div>Subscribe to newsletter</div>
                </div>
            </div>
            <div className={styles.list}>
                <div>
                    <div>Movies playing in Chandigarh</div>
                    <div className={styles.movies}>
                        <a href="/movies/roohi/ET00099813" className={styles.link}>Roohi</a>
                        <div className={styles.line}></div>
                        <a href="/movies/roberrt-telugu/ET00307859" className={styles.link}>Roberrt</a>
                        <div className={styles.line}></div>
                        <a href="/movies/srikaaram-sreekaram/ET00106100" className={styles.link}>Srikaaram (Sreekaram)</a>
                        <div className={styles.line}></div>
                        <a href="/movies/jathi-ratnalu/ET00305719" className={styles.link}>Jathi Ratnalu</a>
                        <div className={styles.line}></div>
                        <a href="/movies/nenjam-marappathillai/ET00043136" className={styles.link}>Nenjam Marappathillai</a>
                        <div className={styles.line}></div>
                        <a href="/movies/gaali-sampath/ET00307385" className={styles.link}>Gaali Sampath</a>
                        <div className={styles.line}></div>
                        <a href="/movies/hero/ET00306303" className={styles.link}>Hero</a>
                        <div className={styles.line}></div>
                        <a href="/movies/a1-express/ET00113853" className={styles.link}>A1 Express</a>
                        <div className={styles.line}></div>
                        <a href="/movies/tom-jerry-tamil/ET00304828" className={styles.link}>Tom &amp; Jerry</a>
                        <div className={styles.line}></div>
                        <a href="/movies/tiny-forest-adventure-need-for-speed-7d/ET00043561" className={styles.link}>Tiny Forest Adventure &amp; Need for Speed (7D)</a>
                    </div>
                </div>

                <div>
                    <div>Upcomimg Movies</div>
                    <div className={styles.movies}>
                        <a href="/movies/tsunami/ET00307578" className={styles.link}>Tsunami</a>
                        <div className={styles.line}></div>
                        <a href="/movies/srikaaram-sreekaram/ET00106100" className={styles.link}>Srikaaram (Sreekaram)</a>
                        <div className={styles.line}></div>
                        <a href="/movies/roohi/ET00099813" className={styles.link}>Roohi</a>
                        <div className={styles.line}></div>
                        <a href="/movies/jathi-ratnalu/ET00305719" className={styles.link}>Jathi Ratnalu</a>
                        <div className={styles.line}></div>
                        <a href="/movies/romiyo-whisky/ET00307958" className={styles.link}>Romiyo Whisky</a>
                        <div className={styles.line}></div>
                        <a href="/movies/puaada/ET00099872" className={styles.link}>Puaada</a>
                        <div className={styles.line}></div>
                        <a href="/movies/gaali-sampath/ET00307385" className={styles.link}>Gaali Sampath</a>
                        <div className={styles.line}></div>
                        <a href="/movies/tandav/ET00308037" className={styles.link}>Tandav</a>
                        <div className={styles.line}></div>
                        <a href="/movies/aarkkariyam/ET00307366" className={styles.link}>Aarkkariyam</a>
                        <div className={styles.line}></div>
                        <a href="/movies/the-priest/ET00305064" className={styles.link}>The Priest</a>
                        <div className={styles.line}></div>
                        <a href="/movies/devarakondalo-vijay-premakatha/ET00307858" className={styles.link}>Devarakondalo Vijay Premakatha</a>
                        <div className={styles.line}></div>
                        <a href="/movies/roberrt/ET00121878" className={styles.link}>Roberrt</a>
                        <div className={styles.line}></div>
                        <a href="/movies/koli-taal/ET00132563" className={styles.link}>Koli Taal</a>
                        <div className={styles.line}></div>
                        <a href="/movies/theethum-nandrum/ET00308033" className={styles.link}>Theethum Nandrum</a>
                        <div className={styles.line}></div>
                        <a href="/movies/time-to-dance/ET00078875" className={styles.link}>Time To Dance</a>
                        <div className={styles.line}></div>
                        <a href="/movies/love-life-and-pakodi/ET00136443" className={styles.link}>Love Life And Pakodi</a>
                        <div className={styles.line}></div>
                        <a href="/movies/ganesapuram/ET00306595" className={styles.link}>Ganesapuram</a>
                        <div className={styles.line}></div>
                        <a href="/movies/varthamanam/ET00132941" className={styles.link}>Varthamanam</a>
                        <div className={styles.line}></div>
                        <a href="/movies/jeene-ki-ummeed-tumse-hi/ET00307787" className={styles.link}>Jeene Ki Ummeed Tumse Hi</a>
                        <div className={styles.line}></div>
                        <a href="/movies/kaathal-ithu-kaathal/ET00308060" className={styles.link}>Kaathal Ithu Kaathal</a>
                    </div>
                </div>

                <div>
                    <div>Upcomimg Movies</div>
                    <div className={styles.movies}>
                        <a href="/explore/action-movies" className={styles.link}>Action Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/drama-movies" className={styles.link}>Drama Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/thriller-movies" className={styles.link}>Thriller Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/comedy-movies" className={styles.link}>Comedy Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/romantic-movies" className={styles.link}>Romantic Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/adventure-movies" className={styles.link}>Adventure Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/horror-movies" className={styles.link}>Horror Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/fantasy-movies" className={styles.link}>Fantasy Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/animation-movies" className={styles.link}>Animation Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/crime-movies" className={styles.link}>Crime Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/biography-movies" className={styles.link}>Biography Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/musical-movies" className={styles.link}>Musical Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/sci-fi-movies" className={styles.link}>Sci-Fi Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/mystery-movies" className={styles.link}>Mystery Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/suspense-movies" className={styles.link}>Suspense Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/period-movies" className={styles.link}>Period Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/Screening-movies" className={styles.link}>screening Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/war-movies" className={styles.link}>War Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/supernatural-movies" className={styles.link}>Supernatural Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/adult-movies" className={styles.link}>Adult Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/historical-movies" className={styles.link}>Historical Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/psychological-movies" className={styles.link}>Psychological Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/noir-movies" className={styles.link}>Noir Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/political-movies" className={styles.link}>Political Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/tragedy-movies" className={styles.link}>Tragedy Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/mythological-movies" className={styles.link}>Mythological Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/devotional-movies" className={styles.link}>Devotional Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/bollywood-movies" className={styles.link}>Bollywood Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/adaptation-movies" className={styles.link}>Adaptation Movies</a>
                        <div className={styles.line}></div>
                        <a href="/explore/classic-movies" className={styles.link}>Classic Movies</a>
                    </div>
                </div>
                <div>
                    <div>Upcomimg Movies</div>
                    <div className={styles.movies}>
                        <a href="/explore/online-streaming-plays-plays" className={styles.link}>Online Streaming Plays Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/drama-plays" className={styles.link}>Drama Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/fantasy-plays" className={styles.link}>Fantasy Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/mystery-plays" className={styles.link}>Mystery Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/noir-plays" className={styles.link}>Noir Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/political-plays" className={styles.link}>Political Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/tragedy-plays" className={styles.link}>Tragedy Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/suspense-plays" className={styles.link}>Suspense Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/adult-plays" className={styles.link}>Adult Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/biography-plays" className={styles.link}>Biography Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/action-plays" className={styles.link}>Action Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/historical-plays" className={styles.link}>Historical Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/musical-plays" className={styles.link}>Musical Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/psychological-plays" className={styles.link}>Psychological Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/sci-fi-plays" className={styles.link}>Sci-Fi Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/broadway-plays" className={styles.link}>Broadway Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/period-plays" className={styles.link}>Period Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/war-plays" className={styles.link}>War Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/adventure-plays" className={styles.link}>Adventure Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/mythological-plays" className={styles.link}>Mythological Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/regional-plays" className={styles.link}>Regional Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/horror-plays" className={styles.link}>Horror Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/adaptation-plays" className={styles.link}>Adaptation Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/classic-plays" className={styles.link}>Classic Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/tribute-plays" className={styles.link}>Tribute Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/romantic-plays" className={styles.link}>Romantic Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/contemporary-plays" className={styles.link}>Contemporary Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/comedy-plays" className={styles.link}>Comedy Plays</a>
                        <div className={styles.line}></div>
                        <a href="/explore/thriller-plays" className={styles.link}>Thriller Plays</a>
                        <div className={styles.line}></div>
                    </div>
                </div>
            </div>
            <div className={styles.bmslogo}>
                <div></div>
                <img src={logo} alt="bms logo" />
                <div></div>
            </div>
            <div className={styles.end_note}>
                <div>Copyright 2021
                    © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</div>
                <div>The content and images used on
                    this site are copyright protected and copyrights vests with the respective owners. The usage of the content and
                    images on this website is intended to promote the works and no endorsement of the artist shall be implied.</div>
                <div>Unauthorized use is prohibited and punishable by law.
                </div>
            </div>
        </div>
    )
}