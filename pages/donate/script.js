

let footer = document.querySelector('footer')
function myFunction(x) {
    if (x.matches) {
        footer.innerHTML = `
            <div class="footer-container">
                <div class="tablet-footer-left-part">

                    <div class="logo-footer" id="logo-footer-container">
                        <a href="../main/index.html" class="a-footer">
                            <span class="span-footer">
                                PetStory
                                <br>
                                online
                            </span>
                            <img src="../../assets/icons/bamboo.svg" alt="bamboo">
                        </a>
                    </div>

                    <div class="logo-footer" id='phono-logo-footer-container'>
                        <a href="../main/index.html" class="a-footer">
                            <span class="span-footer">
                                PetStory online
                            </span>
                            <img src="../../assets/icons/bamboo.svg" id="logo-footer" alt="bamboo">
                        </a>
                    </div>
                    <div class='social-container' id='range'>
                        <ul>
                            <li><a href="#"><img src="../../assets/icons/facebook-short.svg" alt="facebook"></a></li>
                            <li><a href="#"><img src="../../assets/icons/twitter-short.svg" alt="twitter"></a></li>
                            <li><a href="#"><img src="../../assets/icons/instagram-short.svg" alt="instagram"></a></li>
                            <li><a href="#"><img src="../../assets/icons/youtube-short.svg" alt="youtube"></a></li>
                        </ul>
                    </div>

                    <div id='empty-div'></div>

                    <div class="btn-donate-container">
                        <a href="index.html" class="btn-donate">donate for volunteers</a>
                        <!-- <button type="button" class="btn-donate">donate for volunteers</button> -->
                    </div>


                    <div class='phono-tablet-signature'>
                        <ul>
                            <li>Designed by Alisa Samborskaya</li>
                            <li>©RSSchool & ©Yem Digital 2021</li>
                        </ul>
                    </div>
                </div>

                <div class='tablet-footer-right-part'>
                    <div class="social-container">
                        <ul>
                            <li><a href="#"><img src="../../assets/icons/facebook.svg" alt="facebook"></a></li>
                            <li><a href="#"><img src="../../assets/icons/twitter.svg" alt="twitter"></a></li>
                            <li><a href="#"><img src="../../assets/icons/instagram.svg" alt="instagram"></a></li>
                            <li><a href="#"><img src="../../assets/icons/youtube.svg" alt="youtube"></a></li>
                        </ul>
                    </div>

                    <div class='tablet-signature'>
                        <ul>
                            <li>Designed by Alisa Samborskaya</li>
                            <li>©RSSchool & ©Yem Digital 2021</li>
                        </ul>
                    </div>
                </div>


                <div class="footer-nav-container">
                    <ul>
                        <li><a href="../main/index.html" id="about">About</a></li>
                        <li><a href="#">Map</a></li>
                        <li><a href="#">Zoos</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
            </>



        `
    } else {
        footer.innerHTML = `
            <div class="footer-container">
                <div class="tablet-footer-left-part">
                    <div class="logo-footer" id="logo-footer-container">
                        <a href="../main/index.html" class="a-footer">
                            <span class="span-footer">
                                PetStory
                                <br>
                                online
                            </span>
                            <img src="../../assets/icons/bamboo.svg" alt="bamboo">
                        </a>
                    </div>

                    <div class="btn-donate-container">
                        <a href="index.html" class="btn-donate">donate for volunteers</a>
                        <!-- <button type="button" class="btn-donate">donate for volunteers</button> -->
                    </div>
                    <div class="social-container">
                        <ul>
                            <li><a href="#"><img src="../../assets/icons/facebook.svg" alt="facebook"></a></li>
                            <li><a href="#"><img src="../../assets/icons/twitter.svg" alt="twitter"></a></li>
                            <li><a href="#"><img src="../../assets/icons/instagram.svg" alt="instagram"></a></li>
                            <li><a href="#"><img src="../../assets/icons/youtube.svg" alt="youtube"></a></li>
                        </ul>
                    </div>
                </div>
                <!-- <div class="footer-nav-container">
                    <ul>
                        <li><a href="../main/index.html" id="about">About</a></li>
                        <li><a href="#">Map</a></li>
                        <li><a href="#">Zoos</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div> -->
                <div class="footer-form-container">
                    <div class="form-container">
                        <span class="form-text">Subscribe to our news</span>
                        <br>
                        <br>
                        <form action="" class="footer-form">
                            <input placeholder="Enter your emeil" type="email" id="fname" name="fname" class="form-field">
                            <input type="submit" value="Submit" class="btn-submit">
                        </form>
                    </div>
                    <ul>
                        <li>Designed by Alisa Samborskaya</li>
                        <li>©RSSchool & ©Yem Digital 2021</li>
                    </ul>
                </div>
            </div>


            <div class="footer-nav-container">
                <ul>
                    <li><a href="../main/index.html" id="about">About</a></li>
                    <li><a href="#">Map</a></li>
                    <li><a href="#">Zoos</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
        `
    }
}
let tabletViewMax = window.matchMedia("(max-width: 640px)")



// let logoFooter = document.getElementById('logo-footer-container')
// function phoneLogo(x) {
//     if (x.matches) {
//         logoFooter.innerHTML = `
//             <a href="../main/index.html" class="a-footer">
//                 <span class="span-footer">
//                     PetStory online
//                 </span>
//                 <img src="../../assets/icons/bamboo.svg" id="logo-footer" alt="bamboo">
//             </a>
//         `
//         // let footerTop = document.querySelector('.tablet-footer-left-part')
//         let range = document.createElement('div')
//         range.id = 'range'
//         range.className = 'social-container'
//         logoFooter.insertAdjacentElement("afterend", range)
//         range.innerHTML = `
//             <ul>
//                 <li><a href="#"><img src="../../assets/icons/facebook-short.svg" alt="facebook"></a></li>
//                 <li><a href="#"><img src="../../assets/icons/twitter-short.svg" alt="twitter"></a></li>
//                 <li><a href="#"><img src="../../assets/icons/instagram-short.svg" alt="instagram"></a></li>
//                 <li><a href="#"><img src="../../assets/icons/youtube-short.svg" alt="youtube"></a></li>
//             </ul>
//         `

//     }
//     else {
//         logoFooter.innerHTML = `
//             <a href="../main/index.html" class="a-footer">
//                 <span class="span-footer">
//                     PetStory
//                     <br>
//                     online
//                 </span>
//                 <img src="../../assets/icons/bamboo.svg" id="logo-footer" alt="bamboo">
//             </a>
//         `
//         let rangeRemove = document.getElementById('range')
//         if (rangeRemove) {
//             rangeRemove.remove()
//         }
//     }
// }
// let phoneView = window.matchMedia("(max-width: 320px)")


myFunction(tabletViewMax)
tabletViewMax.addListener(myFunction)


