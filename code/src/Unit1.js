function Unit1() {
    return (
        <div className='App-body'>
            <p className='Title'>Unit 1: Thinking Geographically</p>
            <p className='Title Smaller'>Maps</p>
            <div className="Flex">
                <div className="FlexHalf">
                    <img className="HalfScreenImage" src="https://www.freeworldmaps.net/asia/southkorea/southkorea-map-physical.jpg"/>
                    <img className="HalfScreenImage" src="https://www.freeworldmaps.net/centralamerica/panama/panama-map-physical.jpg"/>
                </div>
                <div className="FlexHalf">
                    <img className="HalfScreenImage" src="https://pbs.twimg.com/media/FR5zrEGXsAA1ZTq.png"/>
                    <img className="HalfScreenImage" src="https://maps.lib.utexas.edu/maps/americas/panama_pop_1981.jpg"/>
                </div>
            </div>
            <div className="FLAnalysis">
                <p className='Title'>Four Level Anaylsis</p>
                <p className='Title Smaller'>Step One</p>
                <p>Choropleth map of the population of Panama, national scale and regional scale of analysis.</p>
                <p className='Title Smaller'>Step Two</p>
                <p>Most people in the country live in three small areas. The east region of the country has almost no people. The south regions of the country are generally more populated than the north. There are few people living on the island or mountain regions.</p>
                <p className='Title Smaller'>Step Three</p>
                <p>The highest population region is located around the Panama canal. This region is also closest to the capital of the country. One of the highly populated regions is located next to the border of Costa Rica, this could be because of immigrants from Costa Rica. Most people live close to rivers or the ocean. The areas with few people are mostly mountainous regions away from water.</p>
                <p className='Title Smaller'>Step Four</p>
                <p>The high population around the Costa Rican border and the Panama canal could show that there is lots of economic growth in those regions. The high population around the canal is most likely a key reason the capital of the country is there. Because most people live next to water and away from higher elevation regions means the country is impacted heavily by global warming.  </p>
            </div>
        </div>
        );
}

export default Unit1;