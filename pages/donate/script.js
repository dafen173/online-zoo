

const burgerBtn = document.getElementById('burger-menu')
const dropchild = document.getElementById('burger-content')
const mainAll = document.querySelector('main')
const footerAll = document.querySelector('footer')
const headerAll = document.querySelector('header')
const burgerCross = document.querySelector('.burger-cross')
const logoHeader = document.querySelector('#logo-header')
const bamboo = document.querySelector('#logo-header img')


burgerBtn.addEventListener("click", function(){
  dropchild.classList.toggle('open')
  mainAll.classList.toggle('opacity_50')
  footerAll.classList.toggle('opacity_50')
  burgerBtn.classList.toggle('display_none')
  headerAll.classList.toggle('background_white')
  logoHeader.classList.toggle('border_orange')
})

mainAll.addEventListener('click', function(){
    if(mainAll.classList.contains('opacity_50')){
        dropchild.classList.toggle('open')
        mainAll.classList.toggle('opacity_50')
        footerAll.classList.toggle('opacity_50')
        burgerBtn.classList.toggle('display_none')
        headerAll.classList.toggle('background_white')
        logoHeader.classList.toggle('border_orange')
    }
})

footerAll.addEventListener('click', function(){
    if(footerAll.classList.contains('opacity_50')){
        dropchild.classList.toggle('open')
        mainAll.classList.toggle('opacity_50')
        footerAll.classList.toggle('opacity_50')
        burgerBtn.classList.toggle('display_none')
        headerAll.classList.toggle('background_white')
        logoHeader.classList.toggle('border_orange')
    }
})

burgerCross.addEventListener("click", function(){
    dropchild.classList.toggle('open')
    mainAll.classList.toggle('opacity_50')
    footerAll.classList.toggle('opacity_50')
    burgerBtn.classList.toggle('display_none')
    headerAll.classList.toggle('background_white')
    logoHeader.classList.toggle('border_orange')
})





let dotSelected
const yellowDots = document.querySelector('.donate-value-container')
const anotherAmount = document.querySelector('.amount-input')
const yellowDotsAll = document.querySelectorAll('.yellow-dot')
anotherAmount.value = 100
document.getElementById('hundred').classList.add('highlight')

yellowDots.addEventListener('click', function(event){
    let target = event.target
    if (target.className != 'yellow-dot') return
    highlight(target)

    // console.log(target.getAttribute("data-value"))
    anotherAmount.value = target.getAttribute("data-value")
})

function highlight(d) {
    yellowDotsAll.forEach( function(x) {
        if(x.classList.contains('highlight')) {
            x.classList.remove('highlight')
        }
    })


    if (dotSelected) {
      dotSelected.classList.remove('highlight')
    }
    dotSelected = d
    dotSelected.classList.add('highlight')
}

anotherAmount.addEventListener('input', function(){
    yellowDotsAll.forEach( function(x) {
        if(x.classList.contains('highlight')) {
            x.classList.remove('highlight')
        }

        if(anotherAmount.value == x.getAttribute('data-value')) {
            x.classList.add('highlight')
        }
    })

    
})







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
myFunction(tabletViewMax)
tabletViewMax.addListener(myFunction)





