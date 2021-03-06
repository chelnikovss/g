$(document).ready(function () {
    var map;
    var myLatlng = new google.maps.LatLng(48.578058, 39.302333);
    var title = "Почта ЛНР";
    var flagLoad = false;
    var coordinate = [];
    var allOffice = [];
    var locationsMain=[
            {
                "name": "Луганский почтамт",
                "districts": [
                    {
                        "name": "Луганск",
                        "address": "Луганск",
                        "telCod": "0642",
                        "presetCluster": "islands#invertedBlueClusterIcons",
                        "preset": "islands#blueStretchyIcon",
                        "ops": [
                            {
                                "name": "Луганск 2",
                                "index": "91002",
                                "address": "г. Луганск, ул. Артема, 183 ",
                                "addressDesc": "г. Луганск, ул. Артема, 183 ",
                                "tel": "42-48-68",
                                "coords": [48.590532, 39.306782]
                            },
                            {
                                "name": "Луганск 4",
                                "index": "91004",
                                "address": "г. Луганск Остаря могила, 151",
                                "addressDesc": "г. Луганск Остаря могила, 151",
                                "tel": "42-75-53",
                                "coords": [48.526261, 39.364185]
                            },
                            {
                                "name": "Луганск 5",
                                "index": "91005",
                                "address": "г. Луганск, ул. Годуванцева, 6 ",
                                "addressDesc": "г. Луганск, ул. Годуванцева, 6 ",
                                "tel": "49-34-77",
                                "coords": [48.572829, 39.338619]
                            },
                            {
                                "name": "Луганск 6",
                                "index": "91006",
                                "address": "г. Луганск, ул. Героев Сталинграда, 9а ",
                                "addressDesc": "г. Луганск, ул. Героев Сталинграда, 9а ",
                                "tel": "31-68-07",
                                "coords": [48.541367, 39.261759]
                            },
                            {
                                "name": "Луганск 7",
                                "index": "91007",
                                "address": "г. Луганск, ул. Достаевского, 43 ",
                                "addressDesc": "г. Луганск, ул. Достаевского, 43 ",
                                "tel": "64-04-40",
                                "coords": [48.546885, 39.288017]
                            },
                            {
                                "name": "Луганск 8",
                                "index": "91008",
                                "address": "г. Луганск, ул. ЛГАУ (Аграрный университет)",
                                "addressDesc": "г. Луганск, ул. ЛГАУ (Аграрный университет)",
                                "tel": "96-73-58",
                                "coords": [48.559045, 39.253674]
                            },
                            {
                                "name": "Луганск 11",
                                "index": "91011",
                                "address": "г. Луганск, ул. Оборонная, 5 ",
                                "addressDesc": "г. Луганск, ул. Оборонная, 5 ",
                                "tel": "55-31-67",
                                "coords": [48.562604, 39.315505]
                            },
                            {
                                "name": "Луганск 12",
                                "index": "91012",
                                "address": "г. Луганск, ул. Металистов, 29 ",
                                "addressDesc": "г. Луганск, ул. Металистов, 29 ",
                                "tel": "42-33-11",
                                "coords": [48.587099, 39.321991]
                            },
                            {
                                "name": "Луганск 14",
                                "index": "91014",
                                "address": "г. Луганск, ул. Смирнова, 38 ",
                                "addressDesc": "г. Луганск, ул. Смирнова, 38 ",
                                "tel": "42-25-40",
                                "coords": [48.602032, 39.303782]
                            },
                            {
                                "name": "Луганск 15",
                                "index": "91015",
                                "address": "г. Луганск, кв. Заречный, 12 ",
                                "addressDesc": "г. Луганск, кв. Заречный, 12 ",
                                "tel": "32-10-31",
                                "coords": [48.528857, 39.269107]
                            },
                            {
                                "name": "Луганск 16",
                                "index": "91016",
                                "address": "г. Луганск, ул. 15-я линия, 21 ",
                                "addressDesc": "г. Луганск, ул. 15-я линия, 21 ",
                                "tel": "58-03-68",
                                "coords": [48.570075, 39.311184]
                            },
                            {
                                "name": "Луганск 19",
                                "index": "91019",
                                "address": "г. Луганск, ул. Артема, 449 ",
                                "addressDesc": "г. Луганск, ул. Артема, 449 ",
                                "tel": "92-43-75",
                                "coords": [48.580751, 39.276563]
                            },
                            {
                                "name": "Луганск 20",
                                "index": "91020",
                                "address": "г. Луганск пер. Крымский, 1 ",
                                "addressDesc": "г. Луганск пер. Крымский, 1 ",
                                "tel": "55-59-16",
                                "coords": [48.52471, 39.311463]
                            },
                            {
                                "name": "Луганск 21",
                                "index": "91021",
                                "address": "г. Луганск, кв. Гаевого, 35 ",
                                "addressDesc": "г. Луганск, кв. Гаевого, 35 ",
                                "tel": "65-49-68",
                                "coords": [48.560088, 39.262711]
                            },
                            {
                                "name": "Луганск 24",
                                "index": "91024",
                                "address": "г. Луганск, ул. Ленинградская, 11 ",
                                "addressDesc": "г. Луганск, ул. Ленинградская, 11 ",
                                "tel": "64-58-76",
                                "coords": [48.586723, 39.375881]
                            },
                            {
                                "name": "Луганск 25",
                                "index": "91025",
                                "address": "г. Луганск, ул. Ульянова, 38а ",
                                "addressDesc": "г. Луганск, ул. Ульянова, 38а ",
                                "tel": "93-82-06",
                                "coords": [48.610336, 39.38269]
                            },
                            {
                                "name": "Луганск 26",
                                "index": "91026",
                                "address": "г. Луганск, ул. Амурская, 2а ",
                                "addressDesc": "г. Луганск, ул. Амурская, 2а ",
                                "tel": "93-83-98",
                                "coords": [48.661433, 39.403324]
                            },
                            {
                                "name": "Луганск 28",
                                "index": "91028",
                                "address": "г. Луганск, ул. Успенского, 66а",
                                "addressDesc": "г. Луганск, ул. Успенская, 66а",
                                "tel": "55-54-75",
                                "coords": [48.505419, 39.296053]
                            },
                            {
                                "name": "Луганск 29",
                                "index": "91029",
                                "address": "г. Луганск, кв. Луганский, 13а ",
                                "addressDesc": "г. Луганск, кв. Луганский, 13а ",
                                "tel": "65-94-61",
                                "coords": [48.539858, 39.274254]
                            },
                            {
                                "name": "Луганск 31",
                                "index": "91031",
                                "address": "г. Луганск, кв. Героев Бретской Крепости, 9 ",
                                "addressDesc": "г. Луганск, кв. Героев Бретской Крепости, 9 ",
                                "tel": "61-52-79",
                                "coords": [48.556427, 39.328144]
                            },
                            {
                                "name": "Луганск 33",
                                "index": "91033",
                                "address": "г. Луганск, кв. Шевченко, 12 ",
                                "addressDesc": "г. Луганск, кв. Шевченко, 12 ",
                                "tel": "63-83-50",
                                "coords": [48.552837, 39.331944]
                            },
                            {
                                "name": "Луганск 34",
                                "index": "91034",
                                "address": "г. Луганск, кв. Молодежный, 6",
                                "addressDesc": "г. Луганск, кв. Молодежный, 6",
                                "tel": "63-34-64",
                                "coords": [48.570945, 39.37483]
                            },
                            {
                                "name": "Луганск 38",
                                "index": "91038",
                                "address": "г. Луганск, ул. Строительная, 19 ",
                                "addressDesc": "г. Луганск, ул. Строительная, 19 ",
                                "tel": "93-41-71",
                                "coords": [48.53879, 39.30822]
                            },
                            {
                                "name": "Луганск 42",
                                "index": "91042",
                                "address": "г. Луганск, кв. 50 лет Октября, 27 ",
                                "addressDesc": "г. Луганск, кв. 50 лет Октября, 27 ",
                                "tel": "62-87-27",
                                "coords": [48.57305, 39.397377]
                            },
                            {
                                "name": "Луганск 43",
                                "index": "91043",
                                "address": "г. Луганск, ул. Северная, 31 ",
                                "addressDesc": "г. Луганск, ул. Северная, 31 ",
                                "tel": "42-12-10",
                                "coords": [48.598385, 39.337217]
                            },
                            {
                                "name": "Луганск 45",
                                "index": "91045",
                                "address": "г. Луганск, кв. 50 лет Обороны Луганска, 1 ",
                                "addressDesc": "г. Луганск, кв. 50 лет Обороны Луганска, 1 ",
                                "tel": "63-97-14",
                                "coords": [48.513198, 39.358795]
                            },
                            {
                                "name": "Луганск 47",
                                "index": "91047",
                                "address": "г. Луганск, ул. Ладыгина, 4а",
                                "addressDesc": "г. Луганск, ул. Ладыгина, 4а",
                                "tel": "42-79-67",
                                "coords": [48.530778, 39.349551]
                            },
                            {
                                "name": "Луганск 48",
                                "index": "91048",
                                "address": "г. Луганск, ул. Волгоградская, 60б ",
                                "addressDesc": "г. Луганск, ул. Волгоградская, 60б ",
                                "tel": "61-25-88",
                                "coords": [48.551745, 39.353396]
                            },
                            {
                                "name": "Луганск 49",
                                "index": "91049",
                                "address": "г. Луганск, ул. Северодонецкая, 1 ",
                                "addressDesc": "г. Луганск, ул. Северодонецкая, 1 ",
                                "tel": "93-84-78",
                                "coords": [48.638856, 39.406415]
                            },
                            {
                                "name": "Луганск 50",
                                "index": "91050",
                                "address": "г. Луганск, кв. Комарова, 11 ",
                                "addressDesc": "г. Луганск, кв. Комарова, 11 ",
                                "tel": "47-60-19",
                                "coords": [48.561072, 39.388511]
                            },
                            {
                                "name": "Луганск 54",
                                "index": "91054",
                                "address": "г. Луганск, ул. Сухадольская, 6 ",
                                "addressDesc": "г. Луганск, ул. Сухадольская, 6 ",
                                "tel": "64-40-60",
                                "coords": [48.586157, 39.397306]
                            },
                            {
                                "name": "Луганск 55",
                                "index": "91055",
                                "address": "г. Луганск, ул. Титова, 9 ",
                                "addressDesc": "г. Луганск, ул. Титова, 9 ",
                                "tel": "53-00-93",
                                "coords": [48.574165, 39.306603]
                            },
                            {
                                "name": "Луганск 56",
                                "index": "91056",
                                "address": "г. Луганск, ул. В. Пятеркина, 8",
                                "addressDesc": "г. Луганск, ул. В. Пятеркина, 8",
                                "tel": "93-70-76",
                                "coords": [48.56998, 39.28428]
                            },
                            {
                                "name": "Луганск 57",
                                "index": "91057",
                                "address": "г. Луганск кв. Волкова, 2а ",
                                "addressDesc": "г. Луганск кв. Волкова, 2а ",
                                "tel": "47-60-35",
                                "coords": [48.567094, 39.396623]
                            },
                            {
                                "name": "Александровск",
                                "index": "91484",
                                "address": "Луганская область, г. Олександровс, ул. Красная Площадь, 10",
                                "addressDesc": "г. Александровск, ул. Красная Площадь, 10",
                                "tel": "91-13-82",
                                "coords": [48.586777, 39.187657]
                            },
                            {
                                "name": "Юбилейный",
                                "index": "91493",
                                "address": "Луганская область, Юбилейный, ул. Артема, 3 ",
                                "addressDesc": "Юбилейный, ул. Артема, 3 ",
                                "tel": "93-60-52",
                                "coords": [48.55793, 39.187145]
                            }
                        ]
                    }
                ]
            }
        ];

    function initialize() {
            var myOptions = {
                zoom:12,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
         map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
         placeMarker(myLatlng, title);
         google.maps.event.addListener (map, 'click', function (event) { placeMarker(event.latLng, title); });
     };
    function placeMarker(location,title) {
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            title: title
        });

        if(!flagLoad)
            {
                var contentString = '<div id="content">Главпочтамп ЛНР</div>';
            }
        else{
            var contentString = '<div id="content">'+location.lat()+"<br> "+location.lng()+'</div>';
            }
        var infowindow = new google.maps.InfoWindow({ content: contentString });

        infowindow.open(map, marker);

        if(flagLoad){
            console.log(location.lat()+" "+location.lng());
            //create dynamic array
            var local = {};
            local.lat = location.lat();
            local.lng = location.lng();
            coordinate.push(local);
            console.log(coordinate);
        }
        if(!flagLoad)
            flagLoad = true;
    }
    google.maps.event.addDomListener(window,'load',initialize);

    //TODO:: jquery-ajax-submit-form
    $("#offices").submit(function (e) {
        var url = "./model/getoffice.php";
        $.ajax({
            type: "POST",
            url: url,
            //dataType: "json",
            data: $("#offices").serializeArray(),
            success: function (data) {
                var office = JSON.parse(data);
                addOfficeRoute(office);
            }
        });
        e.preventDefault();
    });
    function addOfficeRoute(office) {
        console.log("office:",office);
        $( ".office-route" ).append( office.indexmail+"<br>" );


        var addOffice = {};
        addOffice.lat = office.latlocation;
        addOffice.lng = office.lnglocation;
        addOffice.indexmail = office.indexmail;
        allOffice.push(addOffice);

        //placeMarker(addOffice, office.indexmail)

        console.log("allOffice:",allOffice)
        $(".office-route").show();
        $(".res-dist").show();
    }
    
    //distance count google api
    function distanceCount(start, finish , call) {
        console.log("distanceCount");
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
            {
                origins: [start],
                destinations: [finish],
                travelMode: google.maps.TravelMode.DRIVING,
                unitSystem: google.maps.UnitSystem.METRIC,
                avoidHighways: false,
                avoidTolls: false
            },
            callback);

        function callback(response, status) {
                if(status != google.maps.DistanceMatrixStatus.OK)
                {
                    console.log('Error was: ' + status);
                }
                else
                {
                    //var origins = response.originAddresses; var destinations = response.destinationAddresses;
                    console.log("response:", response);
                    // console.log("response.rows[0].elements[0].distance.text:", response.rows[0].elements[0].distance.text);
                    var info = {};
                    info.distance = response.rows[0].elements[0].distance.value;
                    info.time = response.rows[0].elements[0].duration.value;
                    call(info);
                }
        }
    }

    $('#calc').click(function () {
        var sumDistance = 0,
            sumTime = 0;
        for(var i=0; i<allOffice.length - 1;i++)
        {
            var start = allOffice[i].lat+','+allOffice[i].lng;
            var end = allOffice[i+1].lat+','+allOffice[i+1].lng;
            console.log("start:",start, " end:", end);
            distanceCount(start, end, function (info) {
                console.log("distanceCount");
                sumDistance += info.distance;
                sumTime += info.time;
                console.log("sumDistance:",sumDistance);
                var timeFormat = secondsTimeSpanToHMS(sumTime);
                var distanceFormat = sumDistance/1000;
                $("#res").html(distanceFormat+" км");
                $("#resTime").html(timeFormat+" Час:Мин:Сек");
            });
        }
        $('.res-dist h2').show();
        $('.office-route').css({'color':'green','font-weight':'bold','font-size': '30px'});
    });

});