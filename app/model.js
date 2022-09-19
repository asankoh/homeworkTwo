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
</div>`

var productsContent = `<div class="products">
<div class="flex-container">
  <div class="boxFour">
    <img src="img/cactus.jpg" alt="">
    <p>Lorem ipsum dolor sit amet</p>
  </div>
  <div class="boxFive">
    <img src="img/herb.jpg" alt="">
    <p>Lorem ipsum dolor sit amet</p>
  </div>
  <div class="boxSix">
    <img src="img/tree.jpg" alt="">
    <p>Lorem ipsum dolor sit amet</p>
  </div>
</div>
</div>`

function setCurrentPageContent(pageID){
    // pageID refers to the id type of the nav a
    let contentName = pageID + "Content"
    $("#app").html(eval(contentName));
    // eval takes the string and converts it into a variable. Now allowing homeContent to be displayed on the web browser
}


export { setCurrentPageContent };

// The model often contains the functions and variables then gets exported into the app.js