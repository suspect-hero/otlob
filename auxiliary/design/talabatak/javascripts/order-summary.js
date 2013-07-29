jQuery(function($){
  $(".order-summary-container dl").each(function(){
    var dts = $(this).find("dt");
    var dds = $(this).find("dd");
    var maxGlobalWidth = 0;
    for(var i = 0; i < dts.length; i++){
      var w = $(dts[i]).text().getWidth();
      if(w > maxGlobalWidth)
        maxGlobalWidth = w;
      // limit the width to 300 pixels
      if(maxGlobalWidth > 300)
        maxGlobalWidth = 300;
        
      maxGlobalWidth += 20;
    }

    $(dts).width(maxGlobalWidth);
    $(dds).width($(this).width()-maxGlobalWidth-20);
  });

  $(".order-summary-container table").each(function(){
    for(var j = 1; j <= 4; j++){
      var maxColumnWidth = 0;
      $(this).find("tr.items-row td:nth-child("+j+")").each(function(){
        var w = $(this).text().getWidth();
        if(w > maxColumnWidth)
          maxColumnWidth = w;
      });
      // limit the width to 300 pixels
      if(maxColumnWidth > 150)
        maxColumnWidth = 150;    
      maxColumnWidth += 10;
      $(this).find("tr.items-row td:nth-child("+j+")").attr("style", "max-width: "+maxColumnWidth+"px;");
    }
  });
});