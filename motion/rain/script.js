$(document).ready(function() {
  var makeItRain = function() {
    $('.rain').empty();

    var drops = "";
    var backDrops = "";
    
    // 빗방울 120개 생성 (랜덤 위치, 속도, 타입 부여)
    for (var i = 0; i < 120; i++) {
      var randomLeft = Math.floor(Math.random() * 100); 
      var randomDelay = (Math.random() * 2).toFixed(2);  
      
      // 앞줄 비 (빠름)
      var randomFrontSpeed = (Math.random() * 0.23 + 0.22).toFixed(2);
      // 뒷줄 비 (느림, 원근감)
      var randomBackSpeed = (Math.random() * 0.35 + 0.55).toFixed(2);
      
      var dropType = Math.floor(Math.random() * 3) + 1;
      var typeClass = "type-" + dropType;

      drops += '<div class="drop ' + typeClass + '" style="left: ' + randomLeft + '%; animation-delay: ' + randomDelay + 's; animation-duration: ' + randomFrontSpeed + 's;"><div class="stem"></div><div class="splat"></div></div>';
      
      backDrops += '<div class="drop ' + typeClass + '" style="left: ' + (randomLeft + 3) + '%; animation-delay: ' + randomDelay + 's; animation-duration: ' + randomBackSpeed + 's;"><div class="stem"></div><div class="splat"></div></div>';
    }

    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
  };

  makeItRain();
});