var homeContent = `<div class="home">
<div class="minContent">
  <div class="boxOne">
      <h2>Cacti</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint id eum sed nemo assumenda ex fugiat, dignissimos natus dolorum doloremque! Libero repudiandae dolorem ad deserunt placeat fugiat, voluptate unde voluptatem.</p>
      </div>
  <div class="boxTwo">
      <h2>Trees</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint id eum sed nemo assumenda ex fugiat, dignissimos natus dolorum doloremque! Libero repudiandae dolorem ad deserunt placeat fugiat, voluptate unde voluptatem.</p>
  </div>
  <div class="boxThree">
      <h2>Shrubs</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint id eum sed nemo assumenda ex fugiat, dignissimos natus dolorum doloremque! Libero repudiandae dolorem ad deserunt placeat fugiat, voluptate unde voluptatem.</p>
</div>
</div>
<footer>
      <p class="copyright">@Copyright &copy; 2022</p>
      </footer>
</div>`

var productsContent = `<div class="products">
<div class="flex-container">
  <div class="boxFour">
    <img src="img/cactus.jpg" alt="">
    <p>Lorem ipsum dolor sit amet</p>
    <p class ='price'><strong>$9.99</strong></p>

  </div>
  <div class="boxFive">
    <img src="img/herb.jpg" alt="">
    <p>Lorem ipsum dolor sit amet</p>
    <p class ='price'><strong>$14.99</strong></p>
  </div>
  <div class="boxSix">
    <img src="img/tree.jpg" alt="">
    <p>Lorem ipsum dolor sit amet</p>
    <p class ='price'><strong>$24.99</strong></p>
  </div>
</div>
</div>`


var aboutContent = `<div class="about">
  <div class = "aboutInfo">
  <img src="img/womanProfile.jpg" alt="">
  <p class = "owner" >Owner: Olivia Smithers</p>
 
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, vitae suscipit aspernatur laborum doloribus inventore odit ducimus aliquid ipsam commodi accusantium incidunt nulla aperiam dolorum facere tempora nam saepe. Saepe! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, nobis laborum ab quis veritatis mollitia error nisi voluptatem at impedit reprehenderit perferendis? Aliquam quae adipisci ut blanditiis, a dolor voluptate.</p>
  </div>
  </div>`

var contactContent = `<div class="contact">
<div class ="contactInfo">
<h1>Contact Us!</h1>
<div class="input-wrapper">
  <input class="text-field-one" type="text" placeholder="First Name">
  <input class="text-field-one" type="text" placeholder="Email">
</div>
<input class="messageBox" type="text" placeholder="Message">

</div>
</div>
</div>`


function setCurrentPageContent(pageID){
    // pageID refers to the id type of the nav a
    let contentName = pageID + "Content";
    console.log(pageID)
    $("#app").html(eval(aboutContent));
    // eval takes the string and converts it into a variable. Now allowing homeContent to be displayed on the web browser
}


export { setCurrentPageContent };

// The model often contains the functions and variables then gets exported into the app.js