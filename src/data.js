const data = {
    clubs: [{
        id: 0,
        name: "Гей клуб",
        lat : 59.9565737389786,
        lon : 30.3093735,
        img: "https://moika78.ru/news2/2019/01/itmo.jpg",
        isSubscribe: false,
        events: [{id: 0, name: "Йога жепы", day: 5, time: "18:00", description: "Лучший массаж", isSubscribed: false}]
    }, {
        id: 1,
        name: "Hard ass",
        lat : 59.96639425768185,
        lon : 30.31150249999997,
        img: "https://cdn.vox-cdn.com/thumbor/zzhfRnAuMM5nGExb4anEQtmsH3Y=/0x0:3000x2000/1200x675/filters:focal(1264x69:1744x549)/cdn.vox-cdn.com/uploads/chorus_image/image/62674871/grandcentral_lede.0.jpg",
        isSubscribe: false,
        events: []
    }]
};

export function findAll() {
    return data.clubs;
}


export function findClubById(id) {
    return data.clubs.find(it => {
       if(it.id == id)
           return true;

       return false;
    });
}

export function findEventById(clubId, eventId) {
    const club = findClubById(clubId);
    if(!club)
        return undefined;

    return club.events.find(it => {
       if(it.id == eventId)
           return true;

       return false;
    });
}

export function subscribeToEventById(clubId, eventId) {
    let clubIndex = data.clubs.findIndex(it => {
        return it.id == clubId;
    });

    let eventIndex = data.clubs[clubIndex].events.findIndex(it => {
        return it.id == eventId;
    });

    data.clubs[clubIndex].events[eventIndex].isSubscribed = true
}

export default data;
