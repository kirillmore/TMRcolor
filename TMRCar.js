$(document).ready(function (){
  //vars
    pos=[
      '',
      '_rside',
      '_back',
      '_lside',
      '_isoleft',
      '_front'
    ];
    posnow=0;

  //functions
    function defaultValues(){
      selectValues={
        "corolla_white": "corolla_white",
        "corolla_gray": "corolla_gray",
        "corolla_grayblue": "corolla_grayblue",
        "corolla_black": "corolla_black",
        "corolla_bronzemet": "corolla_bronzemet",
        "corolla_silver": "corolla_silver",
        "corolla_whitepearl": "corolla_whitepearl",
        "camry_white": "camry_white",
        "camry_black": "camry_black",
        "camry_graybrown": "camry_graybrown",
        "camry_silver": "camry_silver",
        "camry_bluedark": "camry_bluedark",
        "camry_whitepearl": "camry_whitepearl",
        "rav4_white": "rav4_white",
        "rav4_khaki": "rav4_khaki",
        "rav4_silver": "rav4_silver",
        "rav4_black": "rav4_black",
        "rav4_turquoise": "rav4_turquoise",
        "rav4_graybrown": "rav4_graybrown",
        "rav4_whitepearl": "rav4_whitepearl",
        "rav4_bluedark": "rav4_bluedark",
        "highlander_black": "highlander_black",
        "highlander_silver": "highlander_silver",
        "highlander_green": "highlander_green",
        "highlander_graydark": "highlander_graydark",
        "highlander_bordo": "highlander_bordo",
        "highlander_reddark": "highlander_reddark",
        "highlander_grayblue": "highlander_grayblue",
        "highlander_brown": "highlander_brown",
        "highlander_whitepearl": "highlander_whitepearl",
        "lcprado_white": "lcprado_white",
        "lcprado_silver": "lcprado_silver",
        "lcprado_browngray": "lcprado_browngray",
        "lcprado_black": "lcprado_black",
        "lcprado_graydark": "lcprado_graydark",
        "lcprado_whitepearl": "lcprado_whitepearl",
        "lcprado_brownpearl": "lcprado_brownpearl",
        "lcprado_bluedark": "lcprado_bluedark",
        "lc200_white":"lc200_white",
        "lc200_graydark":"lc200_graydark",
        "lc200_black":"lc200_black",
        "lc200_bluedark":"lc200_bluedark",
        "lc200_silver":"lc200_silver",
        "lc200_whitepearl":"lc200_whitepearl",
        "lc200_blackpearl":"lc200_blackpearl",
        "hilux_white": "hilux_white",
        "hilux_black": "hilux_black",
        "hilux_red": "hilux_red",
        "hilux_graydark": "hilux_graydark",
        "hilux_blue": "hilux_blue",
        "hilux_orange": "hilux_orange",
        "hilux_silver": "hilux_silver",
        "hilux_whitepearl": "hilux_whitepearl",
        "chr_blueblack": "chr_blueblack",
        "chr_grayblack": "chr_grayblack",
        "chr_graydarkblack": ";chr_graydarkblack",
        "chr_whiteblack": "chr_whiteblack",
        "chr_graydark": "chr_graydark",
        "chr_blackmet": "chr_blackmet",
        "chr_silver": "chr_silver",
        "chr_white": "chr_white",
        "chr_blue": "chr_blue",
        "chr_turquoise": "chr_turquoise",
        "chr_gray": "chr_gray",
        "chr_browndark": "chr_browndark",
        "chr_redpearl": "chr_redpearl",
        "chr_whitepearl": "chr_whitepearl",
        "fortuner_white": "fortuner_white",
        "fortuner_black": "fortuner_black",
        "fortuner_whitepearl": "fortuner_whitepearl",
        "fortuner_graydark": "fortuner_graydark",
        "fortuner_brown": "fortuner_brown",
        "fortuner_blue": "fortuner_blue",
        "fortuner_silver": "fortuner_silver",

        "ux_redlight": "ux_redlight",
        "ux_black": "ux_black",
        "ux_orangedark": "ux_orangedark",
        "ux_gray": "ux_gray",
        "ux_silver": "ux_silver",
        "ux_graylight": "ux_graylight",
        "ux_black": "ux_black",
        "ux_greendark": "ux_greendark",
        "ux_blue": "ux_blue",
        "ux_white": "ux_white",
        "ux_brown": "ux_brown",
        "nx_black": "nx_black",
        "nx_bluelight": "nx_bluelight",
        "nx_white": "nx_white",
        "nx_gray": "nx_gray",
        "nx_graylight": "nx_graylight",
        "nx_blackmet": "nx_blackmet",
        "nx_red": "nx_red",
        "nx_brown": "nx_brown",
        "rx_black": "rx_black",
        "rx_white": "rx_white",
        "rx_gray": "rx_gray",
        "rx_graylight": "rx_graylight",
        "rx_blackmet": "rx_blackmet",
        "rx_red": "rx_red",
        "rx_brown": "rx_brown",
        "rx_beige": "rx_beige",
        "rx_greendark": "rx_greendark",
        "rx_bluedark": "rx_bluedark",
        "lx_black": "lx_black",
        "lx_bluedark": "lx_bluedark",
        "lx_gray": "lx_gray",
        "lx_graylight": "lx_graylight",
        "lx_blackmet": "lx_blackmet",
        "lx_white": "lx_white",
        // "is_black": "is_black",
        // "is_red": "is_red",
        // "is_white": "is_white",
        // "is_gray": "is_gray",
        // "is_silver": "is_silver",
        // "is_redmet": "is_redmet",
        // "is_graylight": "is_graylight",
        // "is_blackmet": "is_blackmet",
        // "is_bluedark": "is_bluedark",
        "gx_black": "gx_black",
        "gx_gray": "gx_gray",
        "gx_graylight": "gx_graylight",
        "gx_blue": "gx_blue",
        "gx_whitepearl": "gx_whitepearl",
        "gx_blackmet": "gx_blackmet",
        "gx_garnet": "gx_garnet",
        "gx_bronze": "gx_bronze",
        "es_black": "es_black",
        "es_bluedark": "es_bluedark",
        "es_greenmet": "es_greenmet",
        "es_graylight": "es_graylight",
        "es_blackmet": "es_blackmet",
        "es_red": "es_red",
        "es_silver": "es_silver",
        "es_gray": "es_gray",
        "es_beigelight": "es_beigelight",
        "es_white": "es_white",
        "rc_yellow":"rc_yellow",
        "rc_blue":"rc_blue",
        "rc_white":"rc_white",
        "rc_gray":"rc_gray",
        "rc_orange":"rc_orange",
        "rc_red":"rc_red",
        "rc_graylight":"rc_graylight",
        "rc_black":"rc_black",
        "lc_red": "lc_red",
        "lc_brown": "lc_brown",
        "lc_bluedark": "lc_bluedark",
        "lc_white": "lc_white",
        "lc_black": "lc_black",
        "lc_yellow": "lc_yellow",
        "lc_graylight": "lc_graylight",
        "ls_black ":"ls_black",
        "ls_bluedark":" ls_bluedark",
        "ls_white ":"ls_white",
        "ls_graydark":" ls_graydark",
        "ls_reddark": "ls_reddark",
        "ls_beige ":"ls_beige",
        "ls_red":"ls_red",
        "ls_silverlight":"ls_ silverlight",
        "ls_graylight":"l s_graylight",
        "ls_blackmet":" ls_blackmet",
      };
      modelValues={
        "corolla": "black",
        "camry": "black",
        "rav4": "black",
        "highlander": "black",
        "lcprado": "black",
        "lc200": "black",
        "hilux": "black",
        "chr": "blackmet",
        "fortuner": "black",
        "ux": "black",
        "nx": "black",
        "rx": "black",
        "lx": "black",
        // "is": "black",
        "gx": "black",
        "es": "black",
        "rc": "black",
        "lc": "black",
        "ls": "black"
      };
      $.each(selectValues, function(key,value){
        $('#modelSelect').append($("<option></option>").attr("value",key).text(value)); 
        $('#allrange').append('<div class="'+key+'"><div class="picSelect photo_sm" title="'+value+'"></div></div>'); 
      });
      $.each(modelValues, function(key,value){
        $('#picSelect').append('<div class="'+key+'_'+value+'"><div class="picSelect photo_rside" title="'+key+'_black"></div></div>');
      });
    }

    function getPos(){
      $('#ph').attr('class','photo'+pos[posnow]);
    }

    function randomLoad(){

    }

  //actions
  $("select").change(function(){
    $('div.canvas').attr('class','canvas');
    var str="";
    $("select option:selected").each(function(){
      str=$(this).text();
    });
    $(".canvas").addClass(str);
    //var bg_img=$(".photo").css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1');
  })

  $(document).on('click','.picSelect',function(e){
    $('div').removeClass('active');
    $(this).addClass('active');
    $('div.canvas').attr('class','canvas');
    $(".canvas").addClass($(this).attr("title"));
  });

  $(".arrow_left").click(function(){
    posnow--;
    if(posnow==-1){posnow=pos.length-1;}
    getPos();
  });

  $(".arrow_right").click(function(){
    posnow++;
    if(posnow==pos.length){posnow=0;}
    getPos();
  });

  //begin
    defaultValues();
    getPos();
    randomLoad();
});