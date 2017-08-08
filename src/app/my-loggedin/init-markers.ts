export class Init{
    load() {
        if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {
            console.log('No markers found...creating...');

            var markers =[

                {
                    name: 'IR0Nh@ck Volleyball',
                    lat: 41.393594,
                    lng: 2.206728,
                    draggable: true
                },
                {
                    name: 'IR0Nh@ck Final Fiesta',
                    lat: 41.397823,
                    lng: 2.190264,
                    draggable: true
                },
                {
                    name: 'Skate Park',
                    lat: 41.398061,
                    lng: 2.210560,
                    draggable: true
                }

            ];

            localStorage.setItem('markers', JSON.stringify(markers));
        } else {
            console.log('Loading markers');
        }
    }
}