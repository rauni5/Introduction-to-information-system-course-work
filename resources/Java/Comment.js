function Addcomment(event){
event.preventDefault();
document.getElementById("commment").value;
document.getElementById("commentsec").innerHTML+=`<div class="team_container2"style="margin-top: 30px;margin-left:120px;">
                    <div class="team_card">
                      <div class="team_img2"><img src="../resources/Imgs/Indivudal blog/Comment 2.jpg"style="border-radius: 100%;"></div>
                    </div>
                    <div class="team_par">
                      <div class="team_title">"An excellent read". Loved the ideas and explorations. Keep going!"</div>
                      <div class="team_subtitle">45 minutes ago, 28th March 2025</div>
                    </div>
                  </div>`;
    
}