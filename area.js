        // 北1塔曼山 + 北3雪白山
        // 桃園市復興鄉
        let N1N3data;
        $(function () {
            $.ajax({
                type: "GET",
                url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-007?Authorization=CWB-D1804819-48C7-4205-BD5F-052ACB018375&format=JSON&locationName=%E5%BE%A9%E8%88%88%E5%8D%80&elementName=MinT,MaxT,Wind,Td,PoP12h,T,RH,Wx,WeatherDescription",
                dataType: "json",
                error: function (e) {
                    // console.log('oh no');
                },
                success: function (N1N3) {
                    // console.log(N1N3)
                    N1N3data = N1N3 ;
                }
            });
        });
        // 北2七星山
        // 台北市北投區
        let N2data;
        $(function () {
            $.ajax({
                type: "GET",
                url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-D1804819-48C7-4205-BD5F-052ACB018375&format=JSON&locationName=%E5%8C%97%E6%8A%95%E5%8D%80&elementName=MinT,MaxT,Wind,Td,PoP12h,T,RH,Wx,WeatherDescription",
                dataType: "json",
                error: function (e) {
                    // console.log('oh no');
                },
                success: function (N2) {
                    // console.log(N2)
                    N2data= N2 ;
                }
            });
        });
        // 北4大霸尖山 + 中2橫山
        // 新竹縣尖石鄉 + 橫山鄉
        let N4W2data;
        $(function () {
            $.ajax({
                type: "GET",
                url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-011?Authorization=CWB-D1804819-48C7-4205-BD5F-052ACB018375&format=JSON&locationName=%E5%B0%96%E7%9F%B3%E9%84%89,%E6%A9%AB%E5%B1%B1%E9%84%89&elementName=MinT,MaxT,Wind,Td,PoP12h,T,RH,Wx,WeatherDescription",
                dataType: "json",
                error: function (e) {
                    // console.log('oh no');
                },
                success: function (N4W2) {
                    // console.log(N4W2)
                    N4W2data = N4W2;
                }
            });
        });
        // 中1五步哭山
        // 新竹縣東區
        let W1data;
        $(function () {
            $.ajax({
                type: "GET",
                url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-055?Authorization=CWB-D1804819-48C7-4205-BD5F-052ACB018375&format=JSON&locationName=%E6%9D%B1%E5%8D%80&elementName=MinT,MaxT,Wind,Td,PoP12h,T,RH,Wx,WeatherDescription",
                dataType: "json",
                error: function (e) {
                    // console.log('oh no');
                },
                success: function (W1) {
                    // console.log(W1)
                    W1data = W1 ;
                }
            });
        });
        // 中3石壁山
        // 雲林縣古坑鄉
        let W3data;
        $(function () {
            $.ajax({
                type: "GET",
                url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-027?Authorization=CWB-D1804819-48C7-4205-BD5F-052ACB018375&format=JSON&locationName=%E5%8F%A4%E5%9D%91%E9%84%89&elementName=MinT,MaxT,Wind,Td,PoP12h,T,RH,Wx,WeatherDescription",
                dataType: "json",
                error: function (e) {
                    // console.log('oh no');
                },
                success: function (W3) {
                    // console.log(W3)
                    W3data = W3 ;
                }
            });
        });
        // 中4雪山 + 東3南湖東峰
        // 臺中市和平區
        let W4E3data;
        $(function () {
            $.ajax({
                type: "GET",
                url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-075?Authorization=CWB-D1804819-48C7-4205-BD5F-052ACB018375&format=JSON&locationName=%E5%92%8C%E5%B9%B3%E5%8D%80&elementName=MinT,MaxT,Wind,Td,PoP12h,T,RH,Wx,WeatherDescription",
                dataType: "json",
                error: function (e) {
                    // console.log('oh no');
                },
                success: function (W4E3) {
                    // console.log(W4E3)
                    W4E3data = W4E3 ;
                }
            });
        });
        // 南1紅毛埤
        // 嘉義市東區
        let S1data;
        $(function () {
            $.ajax({
                type: "GET",
                url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-059?Authorization=CWB-D1804819-48C7-4205-BD5F-052ACB018375&format=JSON&locationName=%E6%9D%B1%E5%8D%80&elementName=MinT,MaxT,Wind,Td,PoP12h,T,RH,Wx,WeatherDescription",
                dataType: "json",
                error: function (e) {
                    // console.log('oh no');
                },
                success: function (S1) {
                    // console.log(S1)
                    S1data = S1 ;
                }
            });
        });
        // 南2大凍山
        // 嘉義縣竹崎鄉
        let S2data;
        $(function () {
            $.ajax({
                type: "GET",
                url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-031?Authorization=CWB-D1804819-48C7-4205-BD5F-052ACB018375&format=JSON&locationName=%E7%AB%B9%E5%B4%8E%E9%84%89&elementName=MinT,MaxT,Wind,Td,PoP12h,T,RH,Wx,WeatherDescription",
                dataType: "json",
                error: function (e) {
                    // console.log('oh no');
                },
                success: function (S2) {
                    // console.log(S2)
                    S2data = S2 ;
                }
            });
        });
        // 南3北大武山
        // 屏東縣泰武鄉
        let S3data;
        $(function () {
            $.ajax({
                type: "GET",
                url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-035?Authorization=CWB-D1804819-48C7-4205-BD5F-052ACB018375&format=JSON&locationName=%E6%B3%B0%E6%AD%A6%E9%84%89&elementName=MinT,MaxT,Wind,Td,PoP12h,T,RH,Wx,WeatherDescription",
                dataType: "json",
                error: function (e) {
                    // console.log('oh no');
                },
                success: function (S3) {
                    // console.log(S3)
                    S3data = S3 ;
                }
            });
        });
        // 南4玉山 + 東4秀姑巒山
        // 南投縣信義鄉
        let S4E4data;
        $(function () {
            $.ajax({
                type: "GET",
                url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-023?Authorization=CWB-D1804819-48C7-4205-BD5F-052ACB018375&format=JSON&locationName=%E4%BF%A1%E7%BE%A9%E9%84%89&elementName=MinT,MaxT,Wind,Td,PoP12h,T,RH,Wx,WeatherDescription",
                dataType: "json",
                error: function (e) {
                    // console.log('oh no');
                },
                success: function (S4E4) {
                    // console.log(S4E4)
                    S4E4data = S4E4 ;
                }
            });
        });
        // 東1五分山
        // 新北市瑞芳區
        let E1data;
        $(function () {
            $.ajax({
                type: "GET",
                url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-071?Authorization=CWB-D1804819-48C7-4205-BD5F-052ACB018375&format=JSON&locationName=%E7%91%9E%E8%8A%B3%E5%8D%80&elementName=MinT,MaxT,Wind,Td,PoP12h,T,RH,Wx,WeatherDescription",
                dataType: "json",
                error: function (e) {
                    // console.log('oh no');
                },
                success: function (E1) {
                    // console.log(E1)
                    E1data = E1 ;
                }
            });
        });
        // 東2關山
        // 臺東縣海端鄉
        let E2data;
        $(function () {
            $.ajax({
                type: "GET",
                url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-039?Authorization=CWB-D1804819-48C7-4205-BD5F-052ACB018375&format=JSON&locationName=%E6%B5%B7%E7%AB%AF%E9%84%89&elementName=MinT,MaxT,Wind,Td,PoP12h,T,RH,Wx,WeatherDescription",
                dataType: "json",
                error: function (e) {
                    // console.log('oh no');
                },
                success: function (E2) {
                    // console.log(E2)
                    E2data = E2;
                }
            });
        });

        let AreaDataArray = ["N1N3data", "N2data", "N4W2data","W1data","W3data","W4E3data","S1data","S2data","S3data","S4E4data","E1data","E2data"];

        function RenderWeather(AreaData){
            // 天氣敘述
            $id('weatherp').innerHTML = AreaData.records.locations[0].location[0].weatherElement[5].time[0].elementValue[0].value
            // 渲染日期 
            $id('date1').innerText = AreaData.records.locations[0].location[0].weatherElement[0].time[1].startTime.slice(8,10);
            $id('date2').innerText = AreaData.records.locations[0].location[0].weatherElement[0].time[3].startTime.slice(8,10);
            $id('date3').innerText = AreaData.records.locations[0].location[0].weatherElement[0].time[5].startTime.slice(8,10);
            $id('date4').innerText = AreaData.records.locations[0].location[0].weatherElement[0].time[7].startTime.slice(8,10);
            $id('date5').innerText = AreaData.records.locations[0].location[0].weatherElement[0].time[9].startTime.slice(8,10);
            $id('date6').innerText = AreaData.records.locations[0].location[0].weatherElement[0].time[11].startTime.slice(8,10);
            $id('date7').innerText = AreaData.records.locations[0].location[0].weatherElement[0].time[13].startTime.slice(8,10);
            // 渲染早上平均溫度
            $id('Ttop1').innerText = AreaData.records.locations[0].location[0].weatherElement[1].time[1].elementValue[0].value + '°C'
            $id('Ttop2').innerText = AreaData.records.locations[0].location[0].weatherElement[1].time[3].elementValue[0].value + '°C'
            $id('Ttop3').innerText = AreaData.records.locations[0].location[0].weatherElement[1].time[5].elementValue[0].value + '°C'
            $id('Ttop4').innerText = AreaData.records.locations[0].location[0].weatherElement[1].time[7].elementValue[0].value + '°C'
            $id('Ttop5').innerText = AreaData.records.locations[0].location[0].weatherElement[1].time[9].elementValue[0].value + '°C'
            $id('Ttop6').innerText = AreaData.records.locations[0].location[0].weatherElement[1].time[11].elementValue[0].value + '°C'
            $id('Ttop7').innerText = AreaData.records.locations[0].location[0].weatherElement[1].time[13].elementValue[0].value + '°C'
            // 渲染晚上平均溫度
            $id('Tbutton1').innerText = AreaData.records.locations[0].location[0].weatherElement[1].time[2].elementValue[0].value + '°C'
            $id('Tbutton2').innerText = AreaData.records.locations[0].location[0].weatherElement[1].time[4].elementValue[0].value + '°C'
            $id('Tbutton3').innerText = AreaData.records.locations[0].location[0].weatherElement[1].time[6].elementValue[0].value + '°C'
            $id('Tbutton4').innerText = AreaData.records.locations[0].location[0].weatherElement[1].time[8].elementValue[0].value + '°C'
            $id('Tbutton5').innerText = AreaData.records.locations[0].location[0].weatherElement[1].time[10].elementValue[0].value + '°C'
            $id('Tbutton6').innerText = AreaData.records.locations[0].location[0].weatherElement[1].time[12].elementValue[0].value + '°C'
            if (AreaData.records.locations[0].location[0].weatherElement[1].length === 15) {
                $id('Tbutton7').innerText = AreaData.records.locations[0].location[0].weatherElement[1].time[14].elementValue[0].value + '°C'
            }   else    {
                $id('Tbutton7').innerText = AreaData.records.locations[0].location[0].weatherElement[1].time[13].elementValue[0].value + '°C'
            }
            // 渲染當下溫度、最低溫、最高溫、降雨機率、相對濕度
            $id('NowT').innerText = AreaData.records.locations[0].location[0].weatherElement[1].time[0].elementValue[0].value + '°C'
            $id('MinT').innerText = AreaData.records.locations[0].location[0].weatherElement[4].time[0].elementValue[0].value + '°C'
            $id('MaxT').innerText = AreaData.records.locations[0].location[0].weatherElement[6].time[0].elementValue[0].value + '°C'
            $id('PoP').innerText = AreaData.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value + '%'
            $id('RH').innerText = AreaData.records.locations[0].location[0].weatherElement[2].time[0].elementValue[0].value + '%'
        }

    let AreaValue
    let aarray = document.getElementsByTagName("a");
    // console.log (aarray);
    $("div.area div.dropdown-menu #N").click(function(){
        AreaValue = aarray[11].getAttribute("value");
        $("#dropdownAreaButton").text('北部');

        aarray[15].innerText= '塔曼山'
        aarray[16].innerText= '七星山'
        aarray[17].innerText= '雪白山'
        aarray[18].innerText= '大霸尖山'
        $("#dropdownMountainButton").text(aarray[15].text);
    })
    $("div.area div.dropdown-menu #W").click(function(){
        var AreaValue = aarray[12].getAttribute("value");
        $("#dropdownAreaButton").text('中部');

        aarray[15].text= '五步哭山'
        aarray[16].text= '橫山'
        aarray[17].text= '石壁山'
        aarray[18].text= '雪山'
        $("#dropdownMountainButton").text(aarray[15].text);
    })
    $("div.area div.dropdown-menu #S").click(function(){
        var AreaValue = aarray[13].getAttribute("value");
        $("#dropdownAreaButton").text('南部');

        aarray[15].text= '紅毛埤'
        aarray[16].text= '大凍山'
        aarray[17].text= '北大武山'
        aarray[18].text= '玉山'
        $("#dropdownMountainButton").text(aarray[15].text);
    })
    $("div.area div.dropdown-menu #E").click(function(){
        var AreaValue = aarray[14].getAttribute("value");
        $("#dropdownAreaButton").text('東部');

        aarray[15].text= '五分山'
        aarray[16].text= '關山'
        aarray[17].text= '南湖東峰'
        aarray[18].text= '秀姑巒山'
        $("#dropdownMountainButton").text(aarray[15].text);
    })


    function SendArea(BtnText){
        switch(BtnText){
            case '塔曼山':
                RenderWeather(N1N3data);
            break;
            case '七星山':
                RenderWeather(N2data);
            break;
            case '雪白山':
                RenderWeather(N1N3data);
            break;
            case '大霸尖山':
                RenderWeather(N4W2data);
            break;
            case '五步哭山':
                RenderWeather(W1data);
            break;
            case '橫山':
                RenderWeather(N4W2data);
            break;
            case '石壁山':
                RenderWeather(W3data);
            break;
            case '雪山':
                RenderWeather(W4E3data);
            break;
            case '紅毛埤':
                RenderWeather(S1data);
            break;
            case '大凍山':
                RenderWeather(S2data);
            break;
            case '北大武山':
                RenderWeather(S3data);
            break;
            case '玉山':
                RenderWeather(S4E4data);
            break;
            case '五分山':
                RenderWeather(E1data);
            break;
            case '關山':
                RenderWeather(E2data);
            break;
            case '南湖東峰':
                RenderWeather(W4E3data);
            break;
            case '秀姑巒山':
                RenderWeather(S4E4data);
            break;
        }  
    };

    $(aarray[15]).click(function(){
        $("#dropdownMountainButton").text(aarray[15].text);
    })
    $(aarray[16]).click(function(){
        $("#dropdownMountainButton").text(aarray[16].text);
    })
    $(aarray[17]).click(function(){
        $("#dropdownMountainButton").text(aarray[17].text);
    })
    $(aarray[18]).click(function(){
        $("#dropdownMountainButton").text(aarray[18].text);
    })

    let temp;

    $("div.area div.dropdown-menu a").on('click',function(){
        temp = $("#dropdownMountainButton").text();
        // console.log(temp);
        SendArea(temp);
    });
    $("div.mountain div.dropdown-menu a").on('click',function(){
        temp = $("#dropdownMountainButton").text();
        // console.log(temp);
        SendArea(temp);
        
    });