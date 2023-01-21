let _html=(Data)=>{
  
    return `
   <div class="Card Card-style">
   <div class="main">
   <img src="${Data.logo}"alt="">
   <div class="info">
   <div class="title">
   <h6>${Data.company}</h6>
   ${Data.new == true ?  "<h6>New</h6>" : ""}
   ${Data.featured == true ?  "<h6>featured</h6>" : ""}
   </div>
   <h5>${Data.position}</h5>
   <span class="contract">${Data.postedAt}</span>.
   <span class="postedAt">${Data.contract}</span>.
   <span class="location">${Data.location}</span>
   </div>
   </div>
   <div class="skills">
   <!-- Role -->
   <button>${Data.role}</button>
   <!-- Level -->
   <button>${Data.level}</button>
   <!-- Languages -->
   ${(Data.languages.map(function(item){ return "<button>"+item+"</button>"}).join(" "))}
   <!-- Tools -->
   <div class="tools">
     ${(Data.tools.map(function(item){ return "<button>"+item+"</button>"}).join(" "))}
   </div>
   <!-- Item End -->
   </div>
   </div>`
  }
export default _html;